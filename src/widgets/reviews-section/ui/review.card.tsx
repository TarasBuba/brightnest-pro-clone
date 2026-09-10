import type { Review } from '@/src/shared/lib/utils/rewies-data';
import { getInitials } from '@/src/shared/lib/utils/avatar';
import { StarRating } from './star-rating';

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] p-6 shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-teal-light)] text-sm font-semibold text-[var(--color-brand-teal)]">
          {getInitials(review.name)}
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text-primary)]">
            {review.name}
          </p>
          <StarRating rating={review.rating} size={14} />
        </div>
      </div>
      <p className="line-clamp-5 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {review.review}
      </p>
    </article>
  );
}
