'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import type { Service } from '@/src/shared/lib/utils/services-data';
import { useInView } from '@/src/shared/lib/hooks/use-in-view';
import { SERVICE_GALLERIES } from '../model/service-gallery-data';
import { getServiceCardAnimationClasses } from '../lib/animation-classes';

const SERVICE_PHOTO_MAP: Record<string, { photo: string; alt: string }> = {
  handyman: {
    photo: '/images/services/handyman.webp',
    alt: 'Handyman and repair services in Edmonton by BrightNest Pro',
  },
  painting: {
    photo: '/images/services/painting.webp',
    alt: 'Interior and exterior painting services in Edmonton by BrightNest Pro',
  },
};

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
  const mapped = SERVICE_PHOTO_MAP[service.id];
  const photoSrc = mapped?.photo ?? service.photo;
  const photoAlt = mapped?.alt ?? service.alt;
  const galleryItems = SERVICE_GALLERIES[service.id] ?? [];

  // Determine guaranteed entrance animation class based on index and viewport intersection
  const animationClasses = getServiceCardAnimationClasses(index, isInView);

  return (
    <div
      ref={ref}
      className={`${animationClasses} motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none`}
    >
      <details
        {...{ name: 'services-accordion' }}
        className={`group rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] p-6 shadow-md transition-shadow hover:shadow-xl open:shadow-xl ${
          service.featured
            ? 'border-2 border-[var(--color-cta-primary)] ring-1 ring-[var(--color-cta-primary)]/20'
            : 'border border-slate-200/80 hover:border-[var(--color-cta-primary)]'
        } ${className}`}
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
            className="shrink-0 text-3xl text-[var(--color-text-secondary)] transition-transform duration-300 group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <div className="mt-6 space-y-6 border-t border-slate-200/70 pt-6 dark:border-slate-700/60">
          {/* Main Description, Bullets & Primary Photo */}
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-base text-[var(--color-text-secondary)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 font-bold text-xs"
                      >
                        ✓
                      </span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-100/90 px-3 py-1.5 text-sm font-medium text-[var(--color-text-accent)] dark:bg-slate-800/90">
                  <Clock
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[var(--color-cta-primary)]"
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

            <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-slate-200/80 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <Image
                src={photoSrc}
                alt={photoAlt}
                width={960}
                height={720}
                loading="lazy"
                sizes="(min-width: 768px) 40vw, 90vw"
                className="aspect-[4/3] w-full object-cover shadow-sm transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Service Overview
              </div>
            </div>
          </div>

          {/* Deep Photo Gallery: 3-4 Completed Real Projects */}
          {galleryItems && galleryItems.length > 0 && (
            <div className="pt-5 border-t border-slate-200/60 dark:border-slate-800/80">
              <div className="mb-3.5 flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Recent Completed Work & Transformations
                </h4>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {galleryItems.length} Real Work Samples
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {galleryItems.map((item, photoIdx) => (
                  <div
                    key={photoIdx}
                    className="group/photo relative flex flex-col overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-900"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover/photo:scale-105"
                      />
                      {item.tag && (
                        <span className="absolute top-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-2.5 bg-slate-50/80 dark:bg-slate-800/50 flex-1 flex items-center">
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick-Action Booking Row */}
              <div className="mt-5 flex items-center justify-between flex-wrap gap-3 rounded-lg bg-slate-50 p-3.5 border border-slate-200/80 dark:bg-slate-800/40 dark:border-slate-700/60">
                <p className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                  Need reliable help with{' '}
                  <span className="font-semibold text-[var(--color-cta-primary)]">
                    {service.title}
                  </span>
                  ? We offer transparent upfront estimates.
                </p>
                <Link
                  href="/book"
                  className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
                >
                  <span>Book This Service</span>
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </details>
    </div>
  );
}

export default ServiceAccordionItem;
