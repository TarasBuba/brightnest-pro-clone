import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { bookingHref } from '@/src/shared/config/navigation';
import type { ServicePageConfig } from '../model/types';

interface ServiceOfferingsGridProps {
  config: ServicePageConfig;
}

export function ServiceOfferingsGrid({ config }: ServiceOfferingsGridProps) {
  const { offeringsSection, serviceId } = config;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-cta-primary)]">
            {offeringsSection.eyebrow}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            {offeringsSection.title}
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)]">
            {offeringsSection.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {offeringsSection.cards.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-teal-light)] text-[var(--color-cta-primary)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-[var(--color-cta-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <Link
                    href={bookingHref(serviceId)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-cta-primary)] transition-colors hover:text-[var(--color-cta-primary-hover)]"
                  >
                    <span>{offeringsSection.ctaLinkLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
