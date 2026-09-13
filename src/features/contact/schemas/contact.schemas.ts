import { zEmail, zMessage, zName } from "@/lib/validators";
import z from "zod";


export const contactFormSchema = z.object({
    name: zName,
    email: zEmail,
    subject: z.string({ error: 'Subject is required' }).trim().min(4, 'Subject must be at least 4 characters').max(150, 'Subject must be under 150 characters'),
    message: zMessage,
    honeypot: z.string().max(0, 'Bot detected').optional(),
})