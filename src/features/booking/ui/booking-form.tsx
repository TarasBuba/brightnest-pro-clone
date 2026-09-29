'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Phone,
  Clock,
  Sparkles,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import {
  bookingFormSchema,
  BOOKING_SERVICES,
  type BookingFormData,
} from '../model/booking-schema';
import { submitBookingForm } from '../api/submit-booking';
import { siteConfig } from '@/src/shared/config/site-config';

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    submittedName?: string;
  }>({
    type: null,
    message: '',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    mode: 'onTouched',
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      service: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Check botcheck honeypot if present in DOM
      const botcheckInput = document.querySelector<HTMLInputElement>(
        'input[name="botcheck"]'
      );
      const botcheck = botcheckInput?.value || '';

      const result = await submitBookingForm(data, botcheck);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message,
          submittedName: data.firstName,
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message,
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message:
          'An unexpected error occurred. Please try again or call us directly at (780) 984-0190.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitStatus({ type: null, message: '' });
    reset();
  };

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      {/* Header Accent Bar */}
      <div className="bg-gradient-to-r from-[var(--color-brand-navy)] via-slate-800 to-[var(--color-brand-navy)] px-6 py-4 text-white sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4 text-[var(--color-brand-teal)]" />
            <span>Fast-Track Service Request</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/80">
            <Clock className="h-3.5 w-3.5 text-[var(--color-brand-teal)]" />
            <span>15-min response during business hours</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* Success Confirmation View */}
        {submitStatus.type === 'success' ? (
          <div
            className="flex flex-col items-center justify-center py-8 text-center"
            role="status"
            aria-live="polite"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              Request Received, {submitStatus.submittedName}!
            </h2>

            <p className="mx-auto mt-3 max-w-md text-base text-[var(--color-text-secondary)]">
              {submitStatus.message}
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--color-cta-primary-hover)]"
              >
                <Phone className="h-4 w-4" />
                <span>Call Directly: {siteConfig.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={handleResetForm}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-slate-300 bg-white px-5 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-slate-50"
              >
                <RotateCcw className="h-4 w-4 text-slate-500" />
                <span>Send Another Request</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>100% Satisfaction Guaranteed • Licensed &amp; Insured</span>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Service Booking Form"
            className="space-y-6"
          >
            {/* Error Notification Alert */}
            {submitStatus.type === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
              >
                <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">Unable to submit request</p>
                  <p>{submitStatus.message}</p>
                </div>
              </div>
            )}

            {/* Hidden honeypot field for spam prevention */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              style={{ display: 'none' }}
              aria-hidden="true"
            />

            {/* Name Fields: First Name & Last Name */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="booking-firstName"
                  className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="booking-firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="e.g. Sarah"
                  aria-required="true"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  className={`w-full rounded-[var(--radius-md)] border px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] ${
                    errors.firstName
                      ? 'border-red-400 bg-red-50/30'
                      : 'border-slate-300 bg-white hover:border-slate-400'
                  }`}
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <p
                    id="firstName-error"
                    role="alert"
                    className="mt-1.5 text-xs font-medium text-red-600"
                  >
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-lastName"
                  className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="booking-lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="e.g. Jenkins"
                  aria-required="true"
                  aria-invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  className={`w-full rounded-[var(--radius-md)] border px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] ${
                    errors.lastName
                      ? 'border-red-400 bg-red-50/30'
                      : 'border-slate-300 bg-white hover:border-slate-400'
                  }`}
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p
                    id="lastName-error"
                    role="alert"
                    className="mt-1.5 text-xs font-medium text-red-600"
                  >
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Fields: Phone & Email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="booking-phone"
                  className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. (780) 984-0190"
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`w-full rounded-[var(--radius-md)] border px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] ${
                    errors.phone
                      ? 'border-red-400 bg-red-50/30'
                      : 'border-slate-300 bg-white hover:border-slate-400'
                  }`}
                  {...register('phone')}
                />
                {errors.phone && (
                  <p
                    id="phone-error"
                    role="alert"
                    className="mt-1.5 text-xs font-medium text-red-600"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-email"
                  className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="booking-email"
                  type="email"
                  autoComplete="email"
                  placeholder="e.g. sarah.jenkins@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full rounded-[var(--radius-md)] border px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] ${
                    errors.email
                      ? 'border-red-400 bg-red-50/30'
                      : 'border-slate-300 bg-white hover:border-slate-400'
                  }`}
                  {...register('email')}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1.5 text-xs font-medium text-red-600"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Service Selection Dropdown */}
            <div>
              <label
                htmlFor="booking-service"
                className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]"
              >
                Service Needed <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="booking-service"
                  defaultValue=""
                  aria-required="true"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  className={`w-full appearance-none rounded-[var(--radius-md)] border bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] ${
                    errors.service
                      ? 'border-red-400 bg-red-50/30'
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                  {...register('service')}
                >
                  <option value="" disabled>
                    Choose a service (Handyman / Painting)...
                  </option>
                  {BOOKING_SERVICES.map((srv) => (
                    <option key={srv.value} value={srv.value}>
                      {srv.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              {errors.service && (
                <p
                  id="service-error"
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-red-600"
                >
                  {errors.service.message}
                </p>
              )}
            </div>

            {/* Message / Project Details Textarea */}
            <div>
              <label
                htmlFor="booking-message"
                className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]"
              >
                Project Details or Message{' '}
                <span className="text-xs font-normal text-[var(--color-text-secondary)]">
                  (Optional)
                </span>
              </label>
              <textarea
                id="booking-message"
                rows={4}
                placeholder="Describe what repairs or painting you need, your neighborhood in Edmonton, or any specific timeline..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full rounded-[var(--radius-md)] border border-slate-300 bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)]"
                {...register('message')}
              />
              {errors.message && (
                <p
                  id="message-error"
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-red-600"
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 text-base font-semibold text-white shadow-md transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Submitting Your Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Submit Booking Request</span>
                  </>
                )}
              </button>
            </div>

            {/* Privacy & Direct Call Micro-note */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-5 text-center text-xs text-[var(--color-text-secondary)] sm:flex-row sm:text-left">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                No spam ever. Your information is kept completely confidential.
              </span>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="font-medium text-[var(--color-cta-primary)] hover:underline"
              >
                Need faster service? Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
