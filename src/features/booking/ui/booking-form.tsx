'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { siteConfig } from '@/src/shared/config/site';

const BOOKING_SERVICES = [
  { value: 'handyman', label: 'Handyman & Home Repairs' },
  { value: 'painting', label: 'Interior & Exterior Painting' },
];

const bookingSchema = z.object({
  firstName: z.string().min(2, 'First name is required').max(50),
  lastName: z.string().min(2, 'Last name is required').max(50),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email address is required'),
  service: z.enum(['handyman', 'painting'], {
    message: 'Please select a service',
  }),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  async function onSubmit(data: BookingFormData) {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: `New Booking Request from ${data.firstName} ${data.lastName}`,
          from_name: 'BrightNest Pro Website',
          ...data,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'An unexpected error occurred. Please try again or call us.'
      );
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-[var(--radius-xl)] bg-white shadow-xl ring-1 ring-slate-200">
      <div className="bg-[var(--color-bg-dark)] px-6 py-8 text-center sm:px-10">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Request a Free Quote
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Fill out the form below and we will get back to you within {siteConfig.responseMinutes} minutes.
        </p>
      </div>

      <div className="p-6 sm:p-10">
        {status === 'success' ? (
          <div className="text-center py-10" role="alert">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Request Received!</h3>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
              Thank you for choosing BrightNest Pro. Yuriy or Karina will contact you shortly to confirm your booking details.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] font-medium hover:bg-slate-200 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100" role="alert">
                {errorMessage}
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register('firstName')}
                  className={`w-full rounded-[var(--radius-md)] border ${errors.firstName ? 'border-red-500 ring-red-500' : 'border-slate-300'} bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400`}
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register('lastName')}
                  className={`w-full rounded-[var(--radius-md)] border ${errors.lastName ? 'border-red-500 ring-red-500' : 'border-slate-300'} bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400`}
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className={`w-full rounded-[var(--radius-md)] border ${errors.phone ? 'border-red-500 ring-red-500' : 'border-slate-300'} bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`w-full rounded-[var(--radius-md)] border ${errors.email ? 'border-red-500 ring-red-500' : 'border-slate-300'} bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                defaultValue=""
                {...register('service')}
                className={`w-full appearance-none rounded-[var(--radius-md)] border ${errors.service ? 'border-red-500 ring-red-500' : 'border-slate-300'} bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400`}
              >
                <option value="" disabled>Choose a service (Handyman / Painting)...</option>
                {BOOKING_SERVICES.map(srv => (
                  <option key={srv.value} value={srv.value}>{srv.label}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                Project Details or Message <span className="text-xs font-normal text-[var(--color-text-secondary)]">(Optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                placeholder="Describe what repairs or painting you need..."
                className="w-full rounded-[var(--radius-md)] border border-slate-300 bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 text-base font-semibold text-white shadow-md transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <span>Submitting Your Request...</span>
                ) : (
                  <span>Submit Booking Request</span>
                )}
              </button>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-5 text-center text-xs text-[var(--color-text-secondary)] sm:flex-row sm:text-left">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                No spam ever. Your information is kept completely confidential.
              </span>
              <a href={`tel:${siteConfig.phoneRaw}`} className="font-medium text-[var(--color-cta-primary)] hover:underline">
                Need faster service? Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
