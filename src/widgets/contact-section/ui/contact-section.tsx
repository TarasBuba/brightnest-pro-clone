'use client';

import { useContactForm } from '../model/use-contact-form';
import { TextField } from './text-field';
import { SelectFields } from './service-select-field';

export function ContactForm() {
  const { form, isPending, result, onSubmit } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
      <h2 className="mb-2 text-center text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
        Get in Touch
      </h2>
      <p className="mb-8 text-center text-sm text-[var(--color-text-secondary)]">
        Have a question or need a quote? Send us a message and we will respond within 15 minutes.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextField
            name="firstName"
            label="First Name"
            autoComplete="given-name"
            placeholder="Your first name"
            register={register}
            error={errors.firstName}
          />
          <TextField
            name="lastName"
            label="Last Name"
            autoComplete="family-name"
            placeholder="Your last name"
            register={register}
            error={errors.lastName}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextField
            name="phone"
            label="Phone Number"
            type="tel"
            autoComplete="tel"
            placeholder="(780) 984-0190"
            register={register}
            error={errors.phone}
          />
          <TextField
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            placeholder="your.email@example.com"
            register={register}
            error={errors.email}
          />
        </div>

        <input type="checkbox" className="hidden" style={{ display: 'none' }} {...register('botcheck')} />

        <SelectFields
          name="service"
          label="Service Needed"
          register={register}
          error={errors.service}
        />

        <div className="space-y-1">
          <label htmlFor="contact-message" className="block text-sm font-semibold text-[var(--color-text-primary)]">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Tell us about your project..."
            {...register('message')}
            className="w-full rounded-[var(--radius-md)] border border-gray-300 bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)]"
          />
          {errors.message && (
            <span role="alert" className="text-xs font-medium text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
          className="w-full rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-[var(--color-cta-primary-hover)] disabled:opacity-60"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>

        {result === 'success' && (
          <p role="status" aria-live="polite" className="rounded-lg bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-700">
            Thank you! Your message has been sent successfully. We will be in touch shortly.
          </p>
        )}
        {result === 'error' && (
          <p role="alert" aria-live="assertive" className="rounded-lg bg-red-50 p-3 text-center text-sm font-medium text-red-700">
            There was an error sending your message. Please try again or call us at (780) 984-0190.
          </p>
        )}

        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: 'none' }}
          aria-hidden="true"
        />
      </form>
    </div>
  );
}
