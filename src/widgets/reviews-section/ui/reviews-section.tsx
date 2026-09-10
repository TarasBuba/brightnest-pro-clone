import { reviews } from '@/src/shared/lib/utils/rewies-data';
import { PlatformCard } from './plarform-card';
import { LocationMapCard } from './location-map-card';
import { ReviewCard } from './review.card';

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="reveal-on-scroll bg-[var(--color-bg-secondary)] px-4 py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2
            id="reviews-title"
            className="text-3xl font-bold text-[var(--color-text-primary)]"
          >
            What Our Customers Say
          </h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            Real feedback from Edmonton families we&apos;ve worked with
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
            <PlatformCard
              platform="google"
              rating={5.0}
              reviewCount={8}
              url="https://www.google.com/maps/place/BrightNest+Pro+Services/..."
            />
            <PlatformCard
              platform="homestars"
              url="https://www.homestars.com/companies/YOUR-PROFILE"
            />
            <PlatformCard
              platform="facebook"
              url="https://www.facebook.com/YOUR-PAGE"
            />
            <LocationMapCard />
          </div>

          {}
          <div className="grid gap-6 sm:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
