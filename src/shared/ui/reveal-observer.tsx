'use client';

import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    // Only run on the client
    if (typeof window === 'undefined') return;
    
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Mark all elements as revealed immediately
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.setAttribute('data-revealed', 'true');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true');
          // Optionally stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before it comes into view
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return null;
}
