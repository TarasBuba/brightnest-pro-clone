import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';

const HERO_HIGHLIGHTS = [
  'Family-owned & operated by Yuriy & Karina',
  'Free photo estimates & clear pricing',
  `Rapid ${siteConfig.responseMinutes}-min response (Mon–Sun)`,
  'Licensed & insured in Alberta',
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] py-10 sm:py-12 lg:py-16"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[var(--color-brand-teal)]/10 via-sky-100/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/80 px-3.5 py-1.5 text-xs font-semibold text-amber-900 backdrop-blur-sm">
              <div className="flex items-center text-amber-500" aria-hidden="true">
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
              </div>
              <span>
                Rated {siteConfig.rating.value.toFixed(1)}/5.0 by{' '}
                {siteConfig.rating.count}+ Edmonton homeowners
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-heading text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-5xl xl:text-5xl leading-[1.12]"
            >
              Handyman &amp; Painting That Feels Like Family,{' '}
              <span className="text-[var(--color-cta-primary)]">Not a Job Site</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
              From custom carpentry, deck restoration, and home repairs to flawless interior and exterior painting —
              Yuriy &amp; Karina handle every project across Edmonton with personal craftsmanship and honest care.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-success)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href={ROUTES.book}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-7 text-base font-semibold text-white shadow-md shadow-[var(--color-cta-primary)]/20 transition-all duration-200 hover:bg-[var(--color-cta-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-cta-primary)]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)] active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border-2 border-slate-200 bg-white px-6 text-base font-semibold text-[var(--color-text-primary)] shadow-sm transition-all duration-200 hover:border-[var(--color-brand-teal)] hover:bg-[var(--color-bg-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-teal)] active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-[var(--color-cta-primary)]" aria-hidden="true" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--color-text-secondary)]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--color-success)]" aria-hidden="true" />
              <span>100% Satisfaction Guarantee • Direct communication with the owners</span>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[var(--color-brand-teal)]/20 via-sky-100/10 to-transparent blur-2xl -z-10"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 p-2 shadow-xl backdrop-blur-sm sm:p-2.5 transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/images/hero/collage/hero-collage.webp"
                  priority
                  alt="BrightNest Pro Services craftsmanship collage: deck board assembly and protective sealing by Yuriy & Karina, high-ceiling painting prep, drywall archway finishing, and before-and-after staircase and door renovations in Edmonton"
                  width={1056}
                  height={936}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
