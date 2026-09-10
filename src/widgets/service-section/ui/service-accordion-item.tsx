// src/widgets/service-section/ui/service-accordion-item.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/src/shared/lib/utils/services-data';

const SERVICE_PHOTO_MAP: Record<string, { photo: string; alt: string }> = {
  cleaning: {
    photo: '/images/services/cleaning.webp',
    alt: 'Professional home cleaning services in Edmonton by BrightNest Pro',
  },
  handyman: {
    photo: '/images/services/handyman.webp',
    alt: 'Handyman and repair services in Edmonton by BrightNest Pro',
  },
  'yard-work': {
    photo: '/images/services/yard-care.webp',
    alt: 'Yard work and exterior care maintenance in Edmonton by BrightNest Pro',
  },
  painting: {
    photo: '/images/services/painting.webp',
    alt: 'Interior and exterior painting services in Edmonton by BrightNest Pro',
  },
  'complete-care': {
    photo: '/images/services/services-bg.webp',
    alt: 'Complete home care package in Edmonton by BrightNest Pro',
  },
};

type ServiceAccordionItemProps = {
  service: Service;
  className?: string;
};

export function ServiceAccordionItem({
  service,
  className = '',
}: ServiceAccordionItemProps) {
  const IconComponent = service.icon;
  const mapped = SERVICE_PHOTO_MAP[service.id];
  const photoSrc = mapped?.photo ?? service.photo;
  const photoAlt = mapped?.alt ?? service.alt;

  return (
    <details
      {...{ name: 'services-accordion' }}
      className={`${className} group rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] p-6 shadow-md transition-shadow hover:shadow-xl open:shadow-xl ${
        service.featured
          ? 'border-2 border-[var(--color-cta-primary)] ring-1 ring-[var(--color-cta-primary)]/20'
          : 'border border-slate-200/80 hover:border-[var(--color-cta-primary)]'
      }`}
    >
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta-primary)] focus-visible:ring-offset-2">
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
          className="shrink-0 text-3xl text-[var(--color-text-secondary)] transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-[var(--color-text-secondary)]">
            {service.description}
          </p>

          <ul className="mt-4 space-y-2">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 text-lg text-[var(--color-text-secondary)]"
              >
                <span
                  aria-hidden="true"
                  className="text-[var(--color-success)]"
                >
                  ✓
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm font-medium text-[var(--color-text-accent)]">
            {service.timeline}
          </p>

          <Link
            href="/book"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-2.5 font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
          >
            Book This Service
          </Link>
        </div>

        <div>
          <Image
            src={photoSrc}
            alt={photoAlt}
            width={960}
            height={720}
            loading="lazy"
            sizes="(min-width: 768px) 40vw, 90vw"
            className="aspect-[4/3] w-full rounded-[var(--radius-md)] object-cover shadow-sm"
          />
        </div>
      </div>
    </details>
  );
}
