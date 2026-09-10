'use client';

import { useContactForm } from '../model/use-contact-form';
import { TextField } from './text-field';
import { SelectFields } from '@/src/widgets/contact-section/ui/service-select-field';

export function ContactForm() {
  const { form, isPending, result, onSubmit } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className="mx-auto max-w-4xl border border-gray-200 p-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="name"
          label="Full Name"
          autoComplete="name"
          placeholder="Enter your name..."
          register={register}
          error={errors.name}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email..."
          register={register}
          error={errors.email}
        />
        <TextField
          name="phone"
          label="Phone Number"
          type="tel"
          autoComplete="tel"
          placeholder="Enter your phone number..."
          register={register}
          error={errors.phone}
        />
        <SelectFields
          name="service"
          label="Service Needed"
          register={register}
          error={errors.service}
        />

        <div className="mb-4">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message..."
            {...register('message')}
            className="w-full rounded-[var(--radius-md)] border border-gray-300 px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
          className="rounded-var(--radius-md) bg-var(--color-cta-primary) px-6 py-3 font-semibold text-white"
        >
          {isPending ? 'Sending...' : 'Submit'}
        </button>

        {result === 'success' && (
          <p role="status" aria-live="polite">
            Thank you...
          </p>
        )}
        {result === 'error' && (
          <p role="alert" aria-live="assertive">
            There was an error...
          </p>
        )}

        <input
          type="text"
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
