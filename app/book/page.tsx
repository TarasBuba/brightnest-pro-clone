import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Star,
  Zap,
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  Wrench,
  Paintbrush,
} from 'lucide-react';
import { BookingForm } from '@/src/features/booking';
import { siteConfig } from '@/src/shared/config/site';

export const metadata: Metadata = {
  title: 'Book Handyman & Painting Services | BrightNest Pro Edmonton',
  description:
    'Book your handyman or painting service in Edmonton in under 60 seconds. Rapid 15-minute response, fair upfront pricing, and 100% satisfaction guaranteed.',
};

const TRUST_BADGES = [
  {
    icon: Zap,
    title: '15-Minute Response',
    description: 'Fast callback during business hours',
    iconColor: 'text-[var(--color-cta-primary)]',
    bgColor: 'bg-teal-50/70 border-teal-100',
  },
  {
    icon: Star,
    title: '5.0 Rated in Edmonton',
    description: 'Verified reviews from local homeowners',
    iconColor: 'text-amber-500 fill-amber-500',
    bgColor: 'bg-amber-50/70 border-amber-100',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full liability protection across Alberta',
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50/70 border-emerald-100',
  },
  {
    icon: CheckCircle2,
    title: 'Satisfaction Guaranteed',
    description: 'We do it right or make it right',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50/70 border-blue-100',
  },
];

export default function BookPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Top Hero Header */}
      <section className="bg-gradient-to-b from-[var(--color-bg-secondary)] via-[var(--color-bg-primary)]/80 to-[var(--color-bg-primary)] px-4 pt-12 pb-8 sm:pt-16 sm:pb-12 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-teal-light)] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-navy)] mb-4">
            Online Booking &amp; Free Quote
          </span>

          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            Book Your Handyman or Painting Service
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] sm:text-lg">
            Tell us about your home project below. Our local Edmonton team will get back to you within{' '}
            <strong className="text-[var(--color-text-primary)]">15 minutes</strong> with transparent pricing and scheduling.
          </p>

          {/* Trust Badges Bar */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_BADGES.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.title}
                  className={`flex items-center gap-3 rounded-xl border p-3.5 text-left shadow-sm bg-white ${badge.bgColor}`}
                >
                  <div className="shrink-0">
                    <Icon className={`h-6 w-6 ${badge.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--color-text-primary)]">
                      {badge.title}
                    </p>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">
                      {badge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Booking Form & Contact Sidebar */}
      <section className="px-4 pb-20 pt-2">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <BookingForm />
            </div>

            {/* Quick Contact & Info Sidebar */}
            <aside aria-label="Direct Contact Information" className="space-y-6 lg:col-span-4">
              {/* Direct Phone Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
                <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[var(--color-cta-primary)]" />
                  Prefer to Talk?
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] mb-4">
                  Call our Edmonton dispatch line directly for immediate inquiries or emergencies.
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  <Phone className="h-4 w-4 text-[var(--color-brand-teal)]" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>

              {/* Service Highlights Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md space-y-4">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  What We Specialize In
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <Wrench className="h-5 w-5 text-[var(--color-cta-primary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] text-xs">
                        Handyman &amp; Repairs
                      </h4>
                      <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                        Doors, drywalls, decks, fences, fixtures, and general home repairs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <Paintbrush className="h-5 w-5 text-[var(--color-cta-primary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] text-xs">
                        Painting Services
                      </h4>
                      <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                        Clean, professional interior walls, exterior fences, trim, and refinishing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 text-xs text-[var(--color-text-secondary)] space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                  <span>Hours: {siteConfig.hours}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Service Area: {siteConfig.serviceArea}</span>
                </div>
                <div className="pt-2 border-t border-slate-200/80">
                  <p className="text-[11px] leading-relaxed">
                    Need more info about our recent projects? Check our{' '}
                    <Link href="/#work" className="font-semibold text-[var(--color-cta-primary)] hover:underline">
                      recent work gallery
                    </Link>{' '}
                    or read our{' '}
                    <Link href="/#reviews" className="font-semibold text-[var(--color-cta-primary)] hover:underline">
                      5-star reviews
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
