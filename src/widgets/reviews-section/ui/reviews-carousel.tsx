'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { EXTENDED_REVIEWS, type ExtendedReview } from '../model/reviews-data';
import { ReviewCard } from './review.card';

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Responsive cardsPerView tracking
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalCards = EXTENDED_REVIEWS.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);
  // Ensure index is strictly clamped without cascading setState in an effect
  const safeCurrentIndex = Math.min(currentIndex, maxIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const isPaused = isHovered || isCardClicked || isManuallyPaused;

  // Auto-scroll effect with pause-on-hover/click
  useEffect(() => {
    if (isPaused) return;

    // Check prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Pause when tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleCardClick = () => {
    // Toggle card paused state
    setIsCardClicked((prev) => !prev);
  };

  // Calculate slide width percentage based on cardsPerView
  const slideBasisPercent = 100 / cardsPerView;

  return (
    <div
      className="relative w-full"
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer Reviews Carousel"
    >
      {/* Top Controls & Status Bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
        {/* Play / Pause indicator button */}
        <button
          type="button"
          onClick={() => {
            if (isCardClicked) setIsCardClicked(false);
            setIsManuallyPaused((prev) => !prev);
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] shadow-xs transition-colors hover:border-[var(--color-brand-teal)] hover:text-[var(--color-brand-teal)]"
          aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
        >
          {isPaused ? (
            <>
              <Play className="h-3 w-3 text-amber-500 fill-amber-500" />
              <span>Paused · Click to play</span>
            </>
          ) : (
            <>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Auto-scrolling</span>
            </>
          )}
        </button>

        {/* Manual Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              handlePrev();
              if (isCardClicked) setIsCardClicked(false);
            }}
            aria-label="Previous reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] shadow-xs transition-all hover:border-[var(--color-brand-teal)] hover:bg-[var(--color-brand-teal)] hover:text-white active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[var(--color-brand-teal)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => {
              handleNext();
              if (isCardClicked) setIsCardClicked(false);
            }}
            aria-label="Next reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] shadow-xs transition-all hover:border-[var(--color-brand-teal)] hover:bg-[var(--color-brand-teal)] hover:text-white active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[var(--color-brand-teal)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track Container with Hover & Touch Pause */}
      <div
        className="overflow-hidden rounded-xl px-1 py-2 -mx-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${safeCurrentIndex * slideBasisPercent}%)`,
          }}
        >
          {EXTENDED_REVIEWS.map((review: ExtendedReview) => (
            <div
              key={review.id}
              className="px-2.5 shrink-0"
              style={{ width: `${slideBasisPercent}%` }}
            >
              <ReviewCard
                review={review}
                isPaused={isPaused}
                onClick={handleCardClick}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setCurrentIndex(idx);
              if (isCardClicked) setIsCardClicked(false);
            }}
            aria-label={`Go to slide group ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[var(--color-brand-teal)] ${
              safeCurrentIndex === idx
                ? 'w-8 bg-[var(--color-brand-teal)]'
                : 'w-2.5 bg-[var(--color-border)] hover:bg-[var(--color-text-secondary)]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
