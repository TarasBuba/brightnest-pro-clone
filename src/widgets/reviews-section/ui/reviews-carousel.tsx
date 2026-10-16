'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { EXTENDED_REVIEWS, type ExtendedReview } from '../model/reviews-data';
import { ReviewCard } from './review-card';

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lgQuery = window.matchMedia('(min-width: 1024px)');
    const smQuery = window.matchMedia('(min-width: 640px)');

    const updateCardsPerView = () => {
      if (lgQuery.matches) {
        setCardsPerView(3);
      } else if (smQuery.matches) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    lgQuery.addEventListener('change', updateCardsPerView);
    smQuery.addEventListener('change', updateCardsPerView);

    return () => {
      lgQuery.removeEventListener('change', updateCardsPerView);
      smQuery.removeEventListener('change', updateCardsPerView);
    };
  }, []);

  const totalCards = EXTENDED_REVIEWS.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);
  const safeCurrentIndex = Math.min(currentIndex, maxIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const isPaused = isHovered || isCardClicked || isManuallyPaused;

  useEffect(() => {
    if (isPaused) return;

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

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
    setIsCardClicked((prev) => !prev);
  };

  const slideBasisPercent = 100 / cardsPerView;

  return (
    <div
      className="relative w-full"
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer Reviews Carousel"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <button
          type="button"
          onClick={() => {
            if (isCardClicked) setIsCardClicked(false);
            setIsManuallyPaused((prev) => !prev);
          }}
          className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] shadow-xs transition-colors hover:border-[var(--color-brand-teal)] hover:text-[var(--color-brand-teal)]"
          aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
        >
          {isPaused ? (
            <>
              <Play className="h-3 w-3 text-amber-500 fill-amber-500" aria-hidden="true" />
              <span>Paused &middot; Click to play</span>
            </>
          ) : (
            <>
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Auto-scrolling</span>
            </>
          )}
        </button>

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
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
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
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

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

      <div className="mt-5 flex items-center justify-center gap-1">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setCurrentIndex(idx);
              if (isCardClicked) setIsCardClicked(false);
            }}
            aria-label={`Go to slide group ${idx + 1}`}
            aria-current={safeCurrentIndex === idx ? 'true' : undefined}
            className="group flex h-8 min-w-8 items-center justify-center rounded-full px-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-brand-teal)]"
          >
            <span
              className={`h-2.5 rounded-full transition-all duration-300 ${
                safeCurrentIndex === idx
                  ? 'w-8 bg-[var(--color-brand-teal)]'
                  : 'w-2.5 bg-[var(--color-border)] group-hover:bg-[var(--color-text-secondary)]'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
