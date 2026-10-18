'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { KeyboardEvent, TouchEvent } from 'react';

export function useReviewsCarousel(totalCards: number) {
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
      if (isCardClicked) setIsCardClicked(false);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
      if (isCardClicked) setIsCardClicked(false);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsHovered(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 45) {
      handleNext();
      if (isCardClicked) setIsCardClicked(false);
    } else if (diff < -45) {
      handlePrev();
      if (isCardClicked) setIsCardClicked(false);
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleCardClick = () => {
    setIsCardClicked((prev) => !prev);
  };

  const toggleManualPause = () => {
    if (isCardClicked) setIsCardClicked(false);
    setIsManuallyPaused((prev) => !prev);
  };

  const onPrevClick = () => {
    handlePrev();
    if (isCardClicked) setIsCardClicked(false);
  };

  const onNextClick = () => {
    handleNext();
    if (isCardClicked) setIsCardClicked(false);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    if (isCardClicked) setIsCardClicked(false);
  };

  const slideBasisPercent = 100 / cardsPerView;

  return {
    currentIndex,
    safeCurrentIndex,
    cardsPerView,
    maxIndex,
    isPaused,
    slideBasisPercent,
    setIsHovered,
    handleKeyDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleCardClick,
    toggleManualPause,
    onPrevClick,
    onNextClick,
    goToSlide,
  };
}
