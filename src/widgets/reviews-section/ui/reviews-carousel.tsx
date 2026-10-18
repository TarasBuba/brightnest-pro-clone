'use client';

import { EXTENDED_REVIEWS, type ExtendedReview } from '../model/reviews-data';
import { useReviewsCarousel } from '../model/use-reviews-carousel';
import { CarouselTopControls, CarouselPaginationDots } from './carousel-controls';
import { ReviewCard } from './review-card';

export function ReviewsCarousel() {
  const {
    safeCurrentIndex,
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
  } = useReviewsCarousel(EXTENDED_REVIEWS.length);

  return (
    <div
      className="relative w-full"
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer Reviews Carousel"
    >
      <CarouselTopControls
        isPaused={isPaused}
        onTogglePause={toggleManualPause}
        onPrev={onPrevClick}
        onNext={onNextClick}
      />

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

      <CarouselPaginationDots
        maxIndex={maxIndex}
        safeCurrentIndex={safeCurrentIndex}
        onSelectSlide={goToSlide}
      />
    </div>
  );
}
