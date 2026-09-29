import Link from 'next/link';
import { PlatformTrustBar } from './platform-trust-bar';
import { ReviewsCarousel } from './reviews-carousel';
import { CheckCircle2 } from 'lucide-react';

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="reveal-on-scroll bg-[var(--color-bg-secondary)] px-4 py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-teal)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-brand-teal)] mb-3">
            <span>Verified Customer Reviews</span>
          </div>
          <h2
            id="reviews-title"
            className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            What Our Customers Say
          </h2>
          <p className="mt-2 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Real experiences from Edmonton homeowners who trust BrightNest Pro for quality repairs, painting, and home care.
          </p>
        </div>

        {/* Horizontal Trust Block with 3 Platforms: Google, HomeStars, Facebook */}
        <PlatformTrustBar className="mb-10" />

        {/* Interactive Auto-Carousel with Pause on Hover/Click and Real Avatars */}
        <ReviewsCarousel />

        {/* Local Guarantee Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-bg-card)] p-5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                100% Satisfaction &amp; Quality Guarantee
              </p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Locally owned in Edmonton · Licensed &amp; Insured in Alberta · Free estimates
              </p>
            </div>
          </div>
          <Link
            href="/book"
            className="inline-flex min-h-11 items-center shrink-0 rounded-md bg-[var(--color-cta-primary)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-cta-primary-hover)] shadow-xs"
          >
            Book Online Today &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
