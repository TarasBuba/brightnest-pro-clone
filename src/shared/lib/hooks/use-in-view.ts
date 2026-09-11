'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseInViewOptions {
  /** Margin around the root element. Defaults to '-50px' */
  rootMargin?: string;
  /** Either a single number or an array of numbers between 0.0 and 1.0. Defaults to 0.15 */
  threshold?: number | number[];
  /** If true, the observer will disconnect once the element is in view. Defaults to true */
  triggerOnce?: boolean;
  /** Element that is used as the viewport for checking visibility. Defaults to null (browser viewport) */
  root?: Element | Document | null;
  /** Initial in-view state before observer fires. Defaults to false */
  initialInView?: boolean;
}

export type InViewHookReturn<T extends HTMLElement = HTMLElement> = [
  (node: T | null) => void,
  boolean,
  IntersectionObserverEntry | undefined,
] & {
  ref: (node: T | null) => void;
  isInView: boolean;
  entry: IntersectionObserverEntry | undefined;
};

/**
 * Ultra-reliable React hook for detecting when an element enters the viewport.
 * Uses native IntersectionObserver with fallback to true when unsupported or during SSR.
 *
 * Supports both object destructuring and array destructuring:
 * const { ref, isInView } = useInView();
 * const [ref, isInView] = useInView();
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
): InViewHookReturn<T> {
  const {
    rootMargin = '-50px',
    threshold = 0.15,
    triggerOnce = true,
    root = null,
    initialInView = false,
  } = options;

  const isSupported =
    typeof window !== 'undefined' && 'IntersectionObserver' in window;

  const [isInView, setIsInView] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      return true;
    }
    return initialInView;
  });

  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>(
    undefined
  );
  const [node, setNode] = useState<T | null>(null);
  const hasTriggeredRef = useRef(false);

  const ref = useCallback((element: T | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!isSupported) {
      setIsInView(true);
      return;
    }

    if (!node) return;

    if (triggerOnce && hasTriggeredRef.current) {
      return;
    }

    let observer: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        const [firstEntry] = entries;
        if (!firstEntry) return;

        setEntry(firstEntry);

        if (firstEntry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            hasTriggeredRef.current = true;
            if (observer) {
              observer.disconnect();
              observer = null;
            }
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(node);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [node, root, rootMargin, threshold, triggerOnce, isSupported]);

  const result = [ref, isInView, entry] as InViewHookReturn<T>;
  result.ref = ref;
  result.isInView = isInView;
  result.entry = entry;

  return result;
}

export default useInView;
