'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Loader2,
} from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site-config';

export function BookingEmbed() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKINGKOALA_URL;
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // If BookingKoala URL is configured, render the interactive iframe embed
  if (bookingUrl) {
    return (
      <section
        aria-label="Online Booking Portal"
        className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
      >
        {/* Skeleton Loader during iframe loading */}
        {!iframeLoaded && (
          <div
            className="flex min-h-[720px] w-full flex-col items-center justify-center gap-4 bg-slate-50/80 p-8 text-center animate-pulse"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader2 className="h-10 w-10 animate-spin text-[var(--color-cta-primary)]" />
            <div className="space-y-2">
              <p className="text-lg font-semibold text-[var(--color-text-primary)]">
                Loading Secure Booking Portal...
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Connecting to BrightNest Pro scheduling engine.
              </p>
            </div>
            {/* Simulated form placeholders */}
            <div className="mt-6 w-full max-w-md space-y-3">
              <div className="h-10 rounded-lg bg-slate-200/70" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-10 rounded-lg bg-slate-200/70" />
                <div className="h-10 rounded-lg bg-slate-200/70" />
              </div>
              <div className="h-28 rounded-lg bg-slate-200/70" />
            </div>
          </div>
        )}

        <iframe
          src={bookingUrl}
          title="BrightNest Pro Booking Form"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          onLoad={() => setIframeLoaded(true)}
          className={`h-[820px] w-full border-0 transition-opacity duration-500 ${
            iframeLoaded ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'
          }`}
        />
      </section>
    );
  }

  // Fallback: Elegant interactive card when BookingKoala subscription is initializing
  return (
    <section
      aria-labelledby="booking-status-heading"
      className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all"
    >
      {/* Top Accent Status Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10 border-b border-amber-200/60 px-6 py-3.5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Booking system initializing
          </span>

          <span className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            Direct bookings open Mon–Sat 8am–6pm
          </span>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-10 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-cta-primary)]">
            <Calendar className="h-4 w-4" />
            <span>Fast-Track Scheduling</span>
          </div>

          <h2
            id="booking-status-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]"
          >
            We are actively booking jobs for this week in Edmonton!
          </h2>

          <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
            Our online self-service portal is completing final payment verification.
            In the meantime, our Edmonton team responds to all phone inquiries and quote
            requests within <strong className="text-[var(--color-text-primary)]">15 minutes</strong> during business hours.
          </p>
        </div>

        {/* Available Services Grid */}
        <div className="rounded-xl bg-slate-50 p-5 sm:p-6 border border-slate-100">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--color-cta-primary)]" />
            Services Available for Immediate Scheduling:
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
            {[
              'Residential & Deep Cleaning',
              'Move-In / Move-Out Turnover Cleans',
              'Handyman & Minor Repairs',
              'Interior & Exterior Painting',
              'Power Washing & Driveway Cleans',
              'Commercial & Office Cleanings',
            ].map((service) => (
              <div key={service} className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 text-base font-semibold text-white shadow-md transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
          >
            <Phone className="h-5 w-5" />
            <span>Call {siteConfig.phoneDisplay}</span>
          </a>

          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border-2 border-[var(--color-cta-primary)] bg-transparent px-6 text-base font-semibold text-[var(--color-cta-primary)] transition-colors hover:bg-[var(--color-cta-primary)]/10"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Trust Badges Footer inside card */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Licensed &amp; Insured in Edmonton</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <span>⭐ 5.0 Rating</span>
            <span className="text-slate-400">•</span>
            <span>Edmonton &amp; Surrounding Areas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
