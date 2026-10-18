import type { RefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ROUTES } from '@/src/shared/config/navigation';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: readonly { href: string; label: string }[];
  phoneNumber: string;
  drawerRef: RefObject<HTMLDivElement | null>;
  closeBtnRef: RefObject<HTMLButtonElement | null>;
}

export function MobileDrawer({
  isOpen,
  onClose,
  links,
  phoneNumber,
  drawerRef,
  closeBtnRef,
}: MobileDrawerProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-[101] flex h-[100dvh] w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Image src="/logo.svg" alt="BrightNest Logo" width={160} height={120} className="h-9 w-auto" />
            <span className="font-heading text-xl font-bold text-[var(--color-brand-navy)]">
              BrightNest <span className="text-[var(--color-cta-primary)]">Pro Services</span>
            </span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-md text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-cta-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav
          className="flex flex-col gap-2 p-6"
          aria-label="Mobile navigation links"
        >
          {links
            .filter((link) => link.href !== ROUTES.book && link.href !== '/book')
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-md px-4 py-3 text-lg font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-cta-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href={ROUTES.book}
              onClick={onClose}
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
    </>
  );
}
