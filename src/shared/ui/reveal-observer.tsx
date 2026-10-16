'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const elements = document.querySelectorAll('.reveal-on-scroll:not([data-revealed="true"])');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => {
        el.setAttribute('data-revealed', 'true');
      });
      document.documentElement.classList.add('reveal-ready');
      return;
    }

    const viewportLimit = window.innerHeight * 0.92;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportLimit && rect.bottom > 0) {
        el.setAttribute('data-revealed', 'true');
      }
    });

    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.reveal-on-scroll:not([data-revealed="true"])').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
