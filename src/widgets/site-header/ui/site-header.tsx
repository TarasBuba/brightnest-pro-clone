'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MobileNavToggle } from '@/src/widgets/site-header/ui/mobile-nav';
import { siteConfig } from '@/src/shared/config/site';
import { Phone } from '../lib/icons';
import { TrustStrip } from './trust-strip';

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#work', label: 'Our Work' },
  { href: '/about', label: 'About' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/book', label: 'Book Online' },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <TrustStrip />

      <div
        className={`w-full transition-shadow duration-300 ${
          isScrolled
            ? 'bg-[var(--color-bg-primary)] shadow-md'
            : 'bg-[var(--color-bg-primary)]/95 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="BrightNest Pro Services home"
          >
            <span className="text-xl font-bold text-[var(--color-text-primary)]">
              BrightNest{' '}
              <span className="text-[var(--color-cta-primary)]">Pro</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-cta-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex flex-col items-end leading-tight hover:text-[var(--color-cta-primary)]"
            >
              <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-primary)]">
                <Phone />
                {siteConfig.phoneDisplay}
              </span>
              <span className="text-xs text-[var(--color-text-secondary)]">
                {siteConfig.hours}
              </span>
            </a>

            <Link
              href="/book"
              className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-cta-primary-hover)]"
            >
              Book Online
            </Link>
          </div>

          <MobileNavToggle
            links={NAV_LINKS}
            phoneNumber={siteConfig.phoneRaw}
          />
        </div>
      </div>
    </header>
  );
}
