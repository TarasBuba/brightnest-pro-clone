'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Star,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site-config';

interface MobileNavToggleProps {
  links: { href: string; label: string }[];
  phoneNumber: string;
}

export function MobileNavToggle({ links, phoneNumber }: MobileNavToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-cta-primary)]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[var(--color-bg-primary)] shadow-lg">
          <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {siteConfig.rating.value.toFixed(1)} (
              {siteConfig.rating.count})
            </span>
            {siteConfig.isLicensedInsured && (
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Licensed &amp; Insured
              </span>
            )}
          </div>

          <nav
            className="flex flex-col gap-1 p-4"
            aria-label="Mobile navigation"
          >
            {links
              .filter((link) => link.href !== '/book')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-4 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                >
                  {link.label}
                </Link>
              ))}
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--color-cta-primary-hover)]"
            >
              Book Online
            </Link>
            <a
              href={`tel:${phoneNumber}`}
              className="mt-1 rounded-[var(--radius-md)] border border-[var(--color-cta-primary)] px-4 py-3 text-center font-semibold text-[var(--color-cta-primary)]"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
