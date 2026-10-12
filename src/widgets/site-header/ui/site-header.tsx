import Link from 'next/link';
import Image from 'next/image';
import { MobileNavToggle } from '@/src/widgets/site-header/ui/mobile-nav';
import { siteConfig } from '@/src/shared/config/site';
import { NAV_LINKS, ROUTES } from '@/src/shared/config/navigation';
import { Phone } from '../lib/icons';
import { TrustStrip } from './trust-strip';
import { HeaderShell } from './header-shell';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <TrustStrip />
      <HeaderShell>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href={ROUTES.home}
            className="flex items-center gap-2 group"
            aria-label="BrightNest Pro Services home"
          >
            <Image 
              src="/logo.svg" 
              alt="BrightNest Pro Services Logo" 
              width={160} 
              height={120} 
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105" 
              priority
            />
            <span className="text-xl sm:text-2xl font-heading font-extrabold text-[var(--color-brand-navy)] tracking-tight">
              BrightNest{' '}
              <span className="text-[var(--color-cta-primary)]">Pro Services</span>
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
                <Phone aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </span>
              <span className="text-xs text-[var(--color-text-secondary)]">
                {siteConfig.hours}
              </span>
            </a>

            <Link
              href={ROUTES.book}
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
      </HeaderShell>
    </header>
  );
}
