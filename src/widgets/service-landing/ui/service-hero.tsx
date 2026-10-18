import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, CheckCircle2, Clock, Phone, Star } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';
import { ROUTES, bookingHref } from '@/src/shared/config/navigation';
import type { ServicePageConfig } from '../model/types';

interface ServiceHeroProps {
  config: ServicePageConfig;
}

export function ServiceHero({ config }: ServiceHeroProps) {
  const { hero, serviceId, breadcrumbCurrent } = config;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-secondary)] via-white to-[var(--color-bg-primary)] px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            <li>
              <Link href={ROUTES.home} className="transition-colors hover:text-[var(--color-cta-primary)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li>
              <Link href="/#services" className="transition-colors hover:text-[var(--color-cta-primary)]">
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li aria-current="page" className="font-semibold text-[var(--color-text-primary)]">
              {breadcrumbCurrent}
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/90 bg-amber-50 px-3.5 py-1 text-xs font-semibold text-amber-900 shadow-sm">
                <div className="flex items-center text-amber-500" aria-hidden="true">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span>Rated 5.0 in Edmonton</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-teal-light)] px-3.5 py-1 text-xs font-semibold text-[var(--color-brand-navy)] shadow-sm">
                <Clock className="h-3.5 w-3.5 text-[var(--color-cta-primary)]" aria-hidden="true" />
                <span>{siteConfig.responseMinutes}-Minute Callback Promise</span>
              </div>
            </div>

            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl leading-[1.12]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {hero.description}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-sm text-[var(--color-text-secondary)]">
              {hero.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={bookingHref(serviceId)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                <span>{hero.primaryCtaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-[var(--color-text-primary)] shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                <Phone className="h-4 w-4 text-[var(--color-cta-primary)]" aria-hidden="true" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <div className="relative aspect-[43/24] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={hero.imageSrc}
                  alt={hero.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  fetchPriority="high"
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-xs text-[var(--color-text-secondary)] flex items-center justify-between">
                <span className="font-semibold text-[var(--color-text-primary)]">{hero.imageBadgeLabel}</span>
                <span>{hero.imageCaption}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
