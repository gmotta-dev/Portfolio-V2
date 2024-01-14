import { z } from "zod";

export const contactFormSchema = z.object({ fullname: z.string().min(1), email: z.string().email(), message: z.string().optional(), subject: z.string() });
export type TContactFormSchema = z.infer<typeof contactFormSchema>;
