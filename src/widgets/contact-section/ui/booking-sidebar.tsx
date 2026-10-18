import Link from 'next/link';
import {
  Phone,
  Clock,
  MapPin,
  Wrench,
  Paintbrush,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';

export function BookingSidebar() {
  return (
    <aside aria-label="Direct Contact Information" className="space-y-6 lg:col-span-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
        <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
          <Phone className="h-5 w-5 text-[var(--color-cta-primary)]" aria-hidden="true" />
          Prefer to Talk?
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] mb-4">
          Call our Edmonton dispatch line directly for immediate inquiries or emergencies.
        </p>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          <Phone className="h-4 w-4 text-[var(--color-brand-teal)]" aria-hidden="true" />
          <span>{siteConfig.phoneDisplay}</span>
        </a>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md space-y-4">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
          What We Specialize In
        </h3>

        <div className="space-y-3 text-sm">
          <Link
            href={ROUTES.handyman}
            className="group flex items-start justify-between gap-3 rounded-xl bg-slate-50 p-3 transition-colors hover:bg-slate-100"
          >
            <div className="flex items-start gap-3">
              <Wrench className="h-5 w-5 text-[var(--color-cta-primary)] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)] text-xs group-hover:text-[var(--color-cta-primary)]">
                  Handyman &amp; Repairs
                </h4>
                <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                  Doors, drywalls, decks, fences, fixtures, and general home repairs.
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400 shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-cta-primary)]" aria-hidden="true" />
          </Link>

          <Link
            href={ROUTES.painting}
            className="group flex items-start justify-between gap-3 rounded-xl bg-slate-50 p-3 transition-colors hover:bg-slate-100"
          >
            <div className="flex items-start gap-3">
              <Paintbrush className="h-5 w-5 text-[var(--color-cta-primary)] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)] text-xs group-hover:text-[var(--color-cta-primary)]">
                  Painting Services
                </h4>
                <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                  Clean, professional interior walls, exterior fences, trim, and refinishing.
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400 shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-cta-primary)]" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 text-xs text-[var(--color-text-secondary)] space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
          <span>Hours: {siteConfig.hours}</span>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
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
  );
}
