import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Contact name is required").trim(),
  email: z.string().min(1, "Email is required").email("Invalid email").trim(),
  message: z.string().min(10, "Message is required (min. 10 letters)").trim(),
});
