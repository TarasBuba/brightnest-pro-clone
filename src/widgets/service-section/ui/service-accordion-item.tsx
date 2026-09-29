'use client';

import Link from 'next/link';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Service } from '@/src/shared/lib/utils/services-data';
import { useInView } from '@/src/shared/lib/hooks/use-in-view';
import { getServiceCardAnimationClasses } from '../lib/animation-classes';

export type ServiceAccordionItemProps = {
  service: Service;
  index?: number;
  className?: string;
};

export function ServiceAccordionItem({
  service,
  index = 0,
  className = '',
}: ServiceAccordionItemProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({
    rootMargin: '-50px',
    threshold: 0.15,
    triggerOnce: true,
  });

  const IconComponent = service.icon;

  // Determine guaranteed entrance animation class based on index and viewport intersection
  const animationClasses = getServiceCardAnimationClasses(index, isInView);

  return (
    <div
      ref={ref}
      className={`group rounded-[var(--radius-lg)] border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:shadow-md ${animationClasses} ${className}`}
    >
      <details className="p-6 md:p-8" open={index === 0}>
        <summary className="flex cursor-pointer list-none items-center justify-between outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta-primary)] focus-visible:ring-offset-2">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="text-3xl">
              <IconComponent
                aria-hidden="true"
                size={28}
                strokeWidth={2}
                className="text-[var(--color-cta-primary)]"
              />
            </span>
            <div>
              {service.featured && (
                <span className="mb-1 inline-block rounded-full bg-[var(--color-cta-primary)] px-2 py-0.5 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
                {service.title}
              </h3>
              <p className="text-lg text-[var(--color-text-secondary)]">
                {service.summary}
              </p>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="shrink-0 text-3xl text-[var(--color-text-secondary)] transition-transform duration-300 group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <div className="mt-6 space-y-6 border-t border-slate-200/70 pt-6">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-4xl">
                {service.description}
              </p>

              <ul className="mt-4 space-y-2.5">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-base text-[var(--color-text-secondary)]"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-brand-teal)]"
                    />
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[var(--color-text-accent)]">
                <Clock
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[var(--color-brand-teal)]"
                />
                <span>{service.timeline}</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/book"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-2.5 font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
              >
                <span>Book This Service</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

export default ServiceAccordionItem;
