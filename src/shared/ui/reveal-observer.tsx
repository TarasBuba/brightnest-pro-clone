'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    const observeElements = () => {
      document.querySelectorAll('.reveal-on-scroll:not([data-revealed])').forEach(el => {
        if (prefersReducedMotion) {
          el.setAttribute('data-revealed', 'true');
        } else {
          observer.observe(el);
        }
      });
    };

    // Delay slightly to let Next.js render the new route
    const timeoutId = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
