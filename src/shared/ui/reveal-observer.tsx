'use client';

import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true');
          // Unobserve to trigger only once
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    // Function to observe new elements
    const observeElements = () => {
      document.querySelectorAll('.reveal-on-scroll:not([data-revealed])').forEach(el => {
        if (prefersReducedMotion) {
          el.setAttribute('data-revealed', 'true');
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial check
    observeElements();

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
