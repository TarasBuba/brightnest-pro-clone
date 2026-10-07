'use client';

import Link from 'next/link';
import { Clock, ArrowRight, Check } from 'lucide-react';
import type { Service } from '@/src/entities/service/model';

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
  const IconComponent = service.icon;

  const delayClass = index % 2 === 0 ? 'delay-100' : 'delay-300';

  return (
    <div
      className={`reveal-on-scroll reveal-up ${delayClass} group flex flex-col justify-between rounded-[var(--radius-lg)] border border-slate-200/60 bg-white p-6 md:p-8 shadow-sm transition-all duration-500 hover:shadow-lg ${className}`}
    >
      <div>
        <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
          <span aria-hidden="true" className="shrink-0 rounded-xl bg-slate-50 p-3 text-[var(--color-cta-primary)] ring-1 ring-slate-100">
            <IconComponent aria-hidden="true" size={32} strokeWidth={2} />
          </span>
          <div>
            <h3 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] leading-tight">
              {service.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[var(--color-brand-teal)]">
              {service.summary}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            {service.description}
          </p>

          <ul className="mt-6 space-y-3">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-base text-[var(--color-text-secondary)]"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-[var(--color-brand-teal)]">
                  <Check aria-hidden="true" className="h-3 w-3 stroke-[3]" />
                </span>
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-accent)]">
          <Clock
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[var(--color-brand-teal)]"
          />
          <span>{service.timeline}</span>
        </div>

        <Link
          href="/book"
          className="group/btn inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-3 font-bold text-white shadow-sm transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
        >
          <span>Book This Service</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceAccordionItem;
