import { z } from 'zod';
import { Services } from '@/src/shared/lib/utils/services-data';

const serviceIds = Services.map((s) => s.id) as [string, ...string[]];

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').max(255),
  phone: z.string().min(10).max(10).regex(/^\d+$/, 'Invalid phone number'),
  service: z.enum(
    serviceIds,
    { message: 'Please select a service' },
  ),
  message: z.string().optional(),
});
export type ContactFormSchema = z.infer<typeof contactFormSchema>;
