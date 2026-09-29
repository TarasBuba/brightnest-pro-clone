import { z } from 'zod';

export const BOOKING_SERVICES = [
  { value: 'Handyman', label: 'Handyman & Minor Repairs' },
  { value: 'Painting', label: 'Interior & Exterior Painting' },
] as const;

export type BookingServiceType = (typeof BOOKING_SERVICES)[number]['value'];

export const bookingFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name cannot exceed 50 characters'),
  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name cannot exceed 50 characters'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[\d+\-()\s.]+$/, 'Please enter a valid phone number format'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(100, 'Email address is too long'),
  service: z.enum(['Handyman', 'Painting'], {
    message: 'Please select a service (Handyman or Painting)',
  }),
  message: z
    .string()
    .trim()
    .max(2000, 'Message cannot exceed 2000 characters')
    .optional()
    .or(z.literal('')),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
