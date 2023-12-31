"use server";

import pgQuery from "@/db/pg/pgQuery";
import returnZodErrors from "@/util/returnZodErrors";
import { contactFormSchema } from "./contactFormSchema";
import { TContactFormState } from "./types";

export default async function contactFormAction(prevState: TContactFormState, formData: FormData): Promise<TContactFormState> {
  try {
    const fieldValues = contactFormSchema.parse(Object.fromEntries(formData));

    const hasEmail = await pgQuery({ text: "SELECT email FROM portfolio.contact_messages WHERE email = $1", values: [fieldValues.email] });

    if (hasEmail.rows[0]) {
      await pgQuery({ text: "UPDATE portfolio.contact_messages SET fullname = $1, message = $2 WHERE email = $3", values: [fieldValues.fullname, fieldValues.message || "", fieldValues.email] });
    } else {
      await pgQuery({ text: "INSERT INTO portfolio.contact_messages (fullname, email, message) VALUES ($1, $2, $3);", values: [fieldValues.fullname, fieldValues.email, fieldValues.message || ""] });
    }

    return { ...prevState, toast: { title: "Message sent", stylization: { theme: "success" } } };
  } catch (err) {

    console.log(err)

    const fieldErrors = returnZodErrors(err);

    if (fieldErrors) return { fieldErrors } as TContactFormState;

    return { ...prevState, toast: { title: "An server error occurred", stylization: { theme: "error" } } };
  }
}
