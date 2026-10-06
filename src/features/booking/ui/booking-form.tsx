'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/src/shared/config/site';

const BOOKING_SERVICES = [
  { value: 'handyman', label: 'Handyman & Home Repairs' },
  { value: 'painting', label: 'Interior & Exterior Painting' },
];

export function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          ...data,
          subject: `New Booking Request from ${data.firstName} ${data.lastName}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to submit form. Please check your connection and try again.');
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
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
          <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
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
                  name="firstName"
                  type="text"
                  required
                  className="w-full rounded-[var(--radius-md)] border border-slate-300 bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full rounded-[var(--radius-md)] border border-slate-300 bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-[var(--radius-md)] border border-slate-300 bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-[var(--radius-md)] border border-slate-300 bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full appearance-none rounded-[var(--radius-md)] border border-slate-300 bg-white px-4 py-2.5 text-sm text-[var(--color-text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] hover:border-slate-400"
              >
                <option value="" disabled>Choose a service (Handyman / Painting)...</option>
                {BOOKING_SERVICES.map(srv => (
                  <option key={srv.value} value={srv.value}>{srv.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
                Project Details or Message <span className="text-xs font-normal text-[var(--color-text-secondary)]">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
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
