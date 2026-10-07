import { Sparkles, Hammer, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BentoGrid } from './bento-grid';

export function RecentWorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="recent-work-heading"
      className="relative overflow-hidden bg-slate-50/80 py-12 md:py-16"
    >
      {/* Background ambient lighting accents */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-100/40 via-[var(--color-brand-teal)]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-teal-50/50 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal-on-scroll reveal-up inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-800 backdrop-blur-sm shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>Master Craftsmanship â€¢ Edmonton &amp; Surrounding Areas</span>
          </div>

          <h2
            id="recent-work-heading"
            className="reveal-on-scroll reveal-up delay-100 mt-4 font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
          >
            Our Recent Work:{' '}
            <span className="text-[var(--color-cta-primary)]">
              Before &amp; After Transformations
            </span>
          </h2>

          <p className="reveal-on-scroll reveal-up delay-200 mt-4 text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
            From raw structural framework to showroom finish â€” explore how Yuriy &amp; Karina restore,
            build, and beautify homes across Edmonton with dedicated family care.
          </p>

          {/* Quick Metrics Bar */}
          <div className="reveal-on-scroll reveal-up delay-300 mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>100% In-House Execution</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Hammer className="h-4 w-4 text-emerald-600" />
              <span>Custom Joinery &amp; Decks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Alberta Climate Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Portfolio */}
        <div className="mt-12 lg:mt-16">
          <BentoGrid />
        </div>
      </div>
    </section>
  );
}
