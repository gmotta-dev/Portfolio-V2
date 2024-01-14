"use server";

import { Ratelimit } from "@upstash/ratelimit";

import { TToast } from "@/components/Toast/types";
import pgQuery from "@/db/pg/pgQuery";
import redisPool from "@/db/redis/redisPool";
import getIpFromHeaders from "@/util/getIpFromHeaders";
import returnZodErrors from "@/util/returnZodErrors";
import { contactFormSchema, TContactFormSchema } from "./schema";

const ratelimit = new Ratelimit({
  redis: redisPool,
  limiter: Ratelimit.fixedWindow(5, "60 s"),
});

export default async function contactFormAction(formData: TContactFormSchema) {
  try {
    const ip = getIpFromHeaders();

    const result = await ratelimit.limit(ip)
    if (!result.success) return { toast: { title: "Rate Limited", stylization: { theme: "error" } } as TToast };

    const fieldValues = contactFormSchema.parse(formData);

    console.log(fieldValues);

    const hasEmail = await pgQuery({ text: "SELECT email FROM portfolio.contact_messages WHERE email = $1", values: [fieldValues.email] });

    if (hasEmail.rows[0])
      await pgQuery({
        text: "UPDATE portfolio.contact_messages SET fullname = $1, message = $2, subject = $3 WHERE email = $4",
        values: [fieldValues.fullname, fieldValues.message || "", fieldValues.subject, fieldValues.email],
      });
    else
      await pgQuery({
        text: "INSERT INTO portfolio.contact_messages (fullname, email, message, subject) VALUES ($1, $2, $3, $4);",
        values: [fieldValues.fullname, fieldValues.email, fieldValues.message || "", fieldValues.subject],
      });

    return { toast: { title: "Message sent", stylization: { theme: "success" } } as TToast };
  } catch (err) {
    console.log(err);

    const fieldErrors = returnZodErrors(err) as TContactFormSchema;

    if (fieldErrors) return { fieldErrors };

    return { toast: { title: "An server error occurred", stylization: { theme: "error" } } as TToast };
  }
}
