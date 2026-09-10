import type { Metadata } from 'next';
import {
  ShieldCheck,
  Lock,
  Star,
  Zap,
} from 'lucide-react';
import { BookingEmbed } from '@/src/features/booking';

export const metadata: Metadata = {
  title: 'Book Online | BrightNest Pro Services Edmonton',
  description:
    'Book your house cleaning, handyman, or painting service in Edmonton in just 60 seconds.',
};

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: '100% Satisfaction Guaranteed',
    description: 'We make it right or your money back',
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: Lock,
    title: 'Secure 256-Bit SSL Checkout',
    description: 'Stripe Powered & encrypted',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-100',
  },
  {
    icon: Star,
    title: '5.0 Rated by Edmonton Homeowners',
    description: 'Verified 5-star customer reviews',
    iconColor: 'text-amber-500 fill-amber-500',
    bgColor: 'bg-amber-50 border-amber-100',
  },
  {
    icon: Zap,
    title: 'Instant Confirmation',
    description: 'Real-time slot reservation & reminders',
    iconColor: 'text-[var(--color-cta-primary)]',
    bgColor: 'bg-teal-50 border-teal-100',
  },
];

export default function BookPage() {
  return (
    <main id="main-content" className="bg-[var(--color-bg-primary)] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--color-bg-secondary)]/70 to-[var(--color-bg-primary)] px-4 pt-12 pb-10 sm:pt-16 sm:pb-12 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-teal-light)] px-3.5 py-1 text-xs font-semibold text-[var(--color-brand-navy)] uppercase tracking-wider mb-4">
            Online Reservation
          </span>

          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Book Your Home Care Service
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[var(--color-text-secondary)]">
            Instant pricing, flexible scheduling, and satisfaction guaranteed.
            Choose your preferred date, select custom options, and relax while our Edmonton pros take care of the rest.
          </p>

          {/* Trust Badges Grid */}
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

      {/* Booking Form Embed Section */}
      <section className="px-4 pb-20 pt-2">
        <BookingEmbed />
      </section>
    </main>
  );
}
