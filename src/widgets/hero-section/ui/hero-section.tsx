import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site-config';

const HERO_HIGHLIGHTS = [
  'Family-owned & operated',
  'Free, no-obligation quotes',
  'Same-week availability',
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] py-[var(--spacing-section)]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-xs font-semibold text-[var(--color-text-accent)]">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            Rated {siteConfig.rating.value.toFixed(1)} by{' '}
            {siteConfig.rating.count} Edmonton homeowners
          </span>

          <h1
            id="hero-title"
            className="font-heading text-4xl font-bold leading-tight text-[var(--color-text-primary)] lg:text-5xl"
          >
            Home Care That Feels Like Family, Not a Job Site
          </h1>

          <p className="mt-4 max-w-xl text-lg text-[var(--color-text-secondary)]">
            From quick repairs to full-home makeovers, Yuriy &amp; Karina handle
            it all with the same care they&apos;d want for their own home.
          </p>

          <ul className="mt-6 flex flex-wrap gap-4">
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--color-success)]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 text-base font-semibold text-white transition-colors hover:bg-[var(--color-cta-primary-hover)]"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border)] px-6 text-base font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-lg)]">
          <Image
            src="/images/hero/yuriy-karina-edmonton-home-care.webp"
            alt="Yuriy and Karina, owners of BrightNest Pro Services, standing in front of a completed home renovation project in Edmonton"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
