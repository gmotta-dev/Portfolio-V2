"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { headers } from "next/headers";

import pgQuery from "@/db/pg/pgQuery";
import redisPool from "@/db/redis/redisPool";
import getIpFromHeaders from "@/util/getIpFromHeaders";
import returnZodErrors from "@/util/returnZodErrors";
import { contactFormSchema } from "./contactFormSchema";
import { TContactFormState } from "./types";

const ratelimit = new Ratelimit({
  redis: redisPool,
  limiter: Ratelimit.fixedWindow(3, "60 s"),
});

export default async function contactFormAction(prevState: TContactFormState, formData: FormData): Promise<TContactFormState> {
  try {
    const reqHeaders = headers();
    const ip = getIpFromHeaders(reqHeaders);

    console.log(ip);

    const result = await ratelimit.limit(ip);
    if (!result.success) throw new Error("Rate Limited");

    const fieldValues = contactFormSchema.parse(Object.fromEntries(formData));

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

    return { ...prevState, toast: { title: "Message sent", stylization: { theme: "success" } } };
  } catch (err) {
    console.log(err);

    const fieldErrors = returnZodErrors(err);

    if (fieldErrors) return { fieldErrors } as TContactFormState;

    return { ...prevState, toast: { title: "An server error occurred", stylization: { theme: "error" } } };
  }
}
