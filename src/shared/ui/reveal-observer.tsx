'use client';

import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    // Graceful fallback for ancient browsers
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.setAttribute('data-revealed', 'true');
      });
      return;
    }

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

    // Initial observation
    const observeElements = () => {
      document.querySelectorAll('.reveal-on-scroll:not([data-revealed="true"])').forEach((el) => {
        observer.observe(el);
      });
    };

    observeElements();

    // Re-run if DOM changes (e.g. Next.js soft navigation)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
