import type z from "zod";
import type { contactFormSchema } from "../schemas/contact.schemas";


export type ContactFormData = z.infer<typeof contactFormSchema>
export type ContactStatus = 'idle' | 'submitting' | 'success' | 'error'