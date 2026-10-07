import { z } from 'zod';

export const CONTACT_SERVICES = [
  { value: 'Handyman', label: 'Handyman' },
  { value: 'Painting', label: 'Painting' },
] as const;

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(2, 'First name must be at least 2 characters').max(50),
  lastName: z.string().trim().min(2, 'Last name must be at least 2 characters').max(50),
  email: z.string().trim().email('Invalid email address').max(100),
  phone: z.string().trim().min(7, 'Invalid phone number').max(20).regex(/^[\d+\-()\s.]+$/, 'Invalid phone number'),
  service: z.enum(['Handyman', 'Painting'], {
    message: 'Please select a service (Handyman or Painting)',
  }),
  message: z.string().trim().max(2000).optional().or(z.literal('')),
  botcheck: z.boolean().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
