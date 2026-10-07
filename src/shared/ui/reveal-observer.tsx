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

    // Observe future DOM mutations (for client-side navigation or dynamic rendering)
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldScan = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldScan = true;
          break;
        }
      }
      if (shouldScan) {
        observeElements();
      }
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
