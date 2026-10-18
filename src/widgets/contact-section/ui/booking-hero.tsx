import { ShieldCheck, Star, Zap, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';

const TRUST_BADGES = [
  {
    icon: Zap,
    title: `${siteConfig.responseMinutes}-Minute Response`,
    description: 'Fast callback 24/7 (Mon–Sun)',
    iconColor: 'text-[var(--color-cta-primary)]',
    bgColor: 'bg-teal-50/70 border-teal-100',
  },
  {
    icon: Star,
    title: '5.0 Rated in Edmonton',
    description: '5-star reviews from local homeowners',
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

export function BookingHero() {
  return (
    <section className="bg-gradient-to-b from-[var(--color-bg-secondary)] via-[var(--color-bg-primary)]/80 to-[var(--color-bg-primary)] px-4 pt-12 pb-8 sm:pt-16 sm:pb-12 text-center">
      <div className="mx-auto max-w-4xl">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-teal-light)] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-navy)] mb-4">
          Online Booking &amp; Free Quote
        </span>

        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
          Book Your Handyman or Painting Service
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] sm:text-lg">
          Tell us about your home project below. We will get back to you within{' '}
          <strong className="text-[var(--color-text-primary)]">{siteConfig.responseMinutes} minutes</strong> with transparent pricing and scheduling.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className={`flex items-center gap-3 rounded-xl border p-3.5 text-left shadow-sm bg-white ${badge.bgColor}`}
              >
                <div className="shrink-0">
                  <Icon className={`h-6 w-6 ${badge.iconColor}`} aria-hidden="true" />
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
  );
}
