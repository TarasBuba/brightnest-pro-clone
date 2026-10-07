'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';

interface MobileNavToggleProps {
  links: { href: string; label: string }[];
  phoneNumber: string;
}

export function MobileNavToggle({ links, phoneNumber }: MobileNavToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-cta-primary)]"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6 border-b border-slate-100">
          <span className="font-heading text-xl font-bold text-[var(--color-brand-navy)]">
            BrightNest <span className="text-[var(--color-cta-primary)]">Pro</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-cta-primary)]"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav
          className="flex flex-col gap-2 p-6"
          aria-label="Mobile navigation"
        >
          {links
            .filter((link) => link.href !== '/book')
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-4 py-3 text-lg font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-cta-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-4 py-3.5 text-center text-base font-semibold text-white shadow-md transition-all hover:bg-[var(--color-cta-primary-hover)] active:scale-[0.98]"
            >
              Book Online / Get Quote
            </Link>
            <a
              href={`tel:${phoneNumber}`}
              className="rounded-[var(--radius-md)] border-2 border-[var(--color-cta-primary)] bg-white px-4 py-3.5 text-center text-base font-semibold text-[var(--color-cta-primary)] transition-all hover:bg-[var(--color-bg-secondary)] active:scale-[0.98]"
            >
              Call Now
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
