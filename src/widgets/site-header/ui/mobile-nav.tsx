'use client';

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { Menu } from 'lucide-react';
import { MobileDrawer } from './mobile-drawer';

interface MobileNavToggleProps {
  links: readonly { href: string; label: string }[];
  phoneNumber: string;
}

export function MobileNavToggle({ links, phoneNumber }: MobileNavToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const mainEl = document.getElementById('main-content');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      mainEl?.setAttribute('inert', '');
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    } else {
      document.body.style.overflow = 'unset';
      mainEl?.removeAttribute('inert');
    }
    return () => {
      document.body.style.overflow = 'unset';
      mainEl?.removeAttribute('inert');
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center rounded-md text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-cta-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {mounted &&
        createPortal(
          <MobileDrawer
            isOpen={isOpen}
            onClose={handleClose}
            links={links}
            phoneNumber={phoneNumber}
            drawerRef={drawerRef}
            closeBtnRef={closeBtnRef}
          />,
          document.body
        )}
    </div>
  );
}
