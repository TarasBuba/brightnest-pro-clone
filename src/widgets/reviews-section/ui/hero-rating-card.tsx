import { StarRating } from './star-rating';

interface HeroRatingCardProps {
  rating: number;
  reviewCount: number;
  profileUrl: string;
}

export function HeroRatingCard({
  rating,
  reviewCount,
  profileUrl,
}: HeroRatingCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-bg-dark)] p-8 text-center text-white shadow-lg">
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        className="mb-3"
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
        />
        <path
          fill="#34A853"
          d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07h-7.35v5.7C7.51 41.31 15.1 46 24 46z"
        />
        <path
          fill="#FBBC05"
          d="M11.68 28.18C11.24 26.86 11 25.45 11 24s.24-2.86.68-4.18v-5.7H4.33C2.85 17.09 2 20.45 2 24s.85 6.91 2.33 9.88z"
        />
        <path
          fill="#EA4335"
          d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.1 2 7.51 6.69 4.33 14.12l7.35 5.7c1.74-5.2 6.59-9.07 12.32-9.07z"
        />
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-4xl font-bold">{rating.toFixed(1)}</span>
      </div>
      <StarRating rating={rating} size={20} color="#FFD700" />
      <p className="mt-2 mb-5 text-sm text-white/70">
        Based on {reviewCount} Google Reviews
      </p>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-5 font-medium transition-colors hover:bg-[var(--color-cta-primary-hover)]"
      >
        See all reviews
      </a>
    </div>
  );
}
