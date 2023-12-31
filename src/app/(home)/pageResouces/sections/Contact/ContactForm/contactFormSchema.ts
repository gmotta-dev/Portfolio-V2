import { z } from "zod";

export const contactFormSchema = z.object({
  fullname: z.string().min(1, "Fullname is too short").max(100, "Fullname is way to big"),
  email: z.string().email(),
  message: z.string().optional(),
  subject: z.any(),
});
