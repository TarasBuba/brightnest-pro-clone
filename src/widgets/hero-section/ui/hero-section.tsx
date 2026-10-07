import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle2, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';

const HERO_HIGHLIGHTS = [
  'Family-owned & operated by Yuriy & Karina',
  'Free, no-obligation quotes',
  'Same-week availability in Edmonton',
  'Licensed & insured in Alberta',
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] py-12 sm:py-16 lg:py-20"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[var(--color-brand-teal)]/10 via-amber-200/15 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Value Proposition & CTAs */}
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

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="font-heading text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.12]"
            >
              Handyman &amp; Painting That Feels Like Family,{' '}
              <span className="text-[var(--color-cta-primary)]">Not a Job Site</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              From custom carpentry, deck restoration, and home repairs to flawless interior and exterior painting —
              Yuriy &amp; Karina handle every project across Edmonton with personal craftsmanship and honest care.
            </p>

            {/* Checklist of highlights */}
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/book"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-7 text-base font-semibold text-white shadow-md shadow-[var(--color-cta-primary)]/20 transition-all duration-200 hover:bg-[var(--color-cta-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-cta-primary)]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)] active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border-2 border-slate-200 bg-white px-6 text-base font-semibold text-[var(--color-text-primary)] shadow-sm transition-all duration-200 hover:border-[var(--color-brand-teal)] hover:bg-[var(--color-bg-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-teal)] active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-[var(--color-cta-primary)]" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* Guarantee note */}
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--color-text-secondary)]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--color-success)]" />
              <span>100% Satisfaction Guarantee • Direct communication with the owners</span>
            </div>
          </div>

          {/* Right Column: 4-Photo Collage / Mosaic Grid */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-xl pb-6 sm:pb-8 lg:max-w-none">
              {/* Soft decorative backdrop glow */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[var(--color-brand-teal)]/20 via-sky-100/30 to-amber-100/30 blur-2xl -z-10"
                aria-hidden="true"
              />

              {/* Mosaic 2-Column Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Column 1 */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Photo 2: Yuriy drilling boards */}
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/80 bg-slate-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                    <Image
                      src="/images/hero/collage/hero-2.jpg"
                      alt="Yuriy securing deck boards with a power drill during an Edmonton deck build"
                      fill
                      priority
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 sm:p-3">
                      <span className="inline-block rounded-md bg-black/50 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-white backdrop-blur-sm">
                        Board Assembly • Yuriy
                      </span>
                    </div>
                  </div>

                  {/* Photo 3: Karina staining deck */}
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/80 bg-slate-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                    <Image
                      src="/images/hero/collage/hero-3.jpg"
                      alt="Karina applying protective deck stain with a roller in Edmonton"
                      fill
                      priority
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 sm:p-3">
                      <span className="inline-block rounded-md bg-black/50 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-white backdrop-blur-sm">
                        Protective Sealing • Karina
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 2 (offset downwards on desktop for dynamic rhythm) */}
                <div className="flex flex-col gap-3 sm:gap-4 pt-3 sm:pt-6">
                  {/* Photo 1: Yuriy on completed deck with swing chair */}
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-emerald-400/40 bg-slate-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                    <Image
                      src="/images/hero/collage/hero-1.jpg"
                      alt="Yuriy relaxing on the completed custom cedar deck with hanging swing chair in Edmonton"
                      fill
                      priority
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600/90 px-2 py-0.5 text-[9px] sm:text-[11px] font-semibold text-white shadow-sm backdrop-blur-sm">
                        ✓ Completed Deck
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 sm:p-3">
                      <span className="inline-block rounded-md bg-black/50 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-white backdrop-blur-sm">
                        Finished Project • Yuriy
                      </span>
                    </div>
                  </div>

                  {/* Photo 4: Karina painting frame */}
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/80 bg-slate-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                    <Image
                      src="/images/hero/collage/hero-4.jpg"
                      alt="Karina painting the deck support framework in Edmonton"
                      fill
                      priority
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 sm:p-3">
                      <span className="inline-block rounded-md bg-black/50 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-white backdrop-blur-sm">
                        Structural Coating • Karina
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Local Family Badge */}
              <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 w-[94%] sm:w-auto max-w-md z-10">
                <div className="flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/95 px-4 py-2 text-center text-xs sm:text-sm font-semibold text-slate-800 shadow-xl backdrop-blur-md">
                  <MapPin className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="truncate">Handyman &amp; Painting • Verified Edmonton Family Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
