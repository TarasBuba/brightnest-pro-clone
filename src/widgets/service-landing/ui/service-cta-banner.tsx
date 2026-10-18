import Link from 'next/link';
import { ArrowRight, Calendar, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';
import { bookingHref } from '@/src/shared/config/navigation';
import type { ServicePageConfig } from '../model/types';

interface ServiceCtaBannerProps {
  config: ServicePageConfig;
}

export function ServiceCtaBanner({ config }: ServiceCtaBannerProps) {
  const { ctaBanner, serviceId } = config;

  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-500/30 px-3.5 py-1 text-xs font-semibold text-teal-300">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          <span>{ctaBanner.badgeText}</span>
        </div>

        <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
          {ctaBanner.title}
        </h2>

        <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
          {ctaBanner.description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={bookingHref(serviceId)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[var(--color-cta-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
          >
            <Calendar className="h-5 w-5" aria-hidden="true" />
            <span>{ctaBanner.primaryCtaLabel}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-slate-700 bg-slate-800/80 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Phone className="h-5 w-5 text-teal-400" aria-hidden="true" />
            <span>Call Yuriy at {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
