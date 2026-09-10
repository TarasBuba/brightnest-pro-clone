interface StarRatingProps {
  rating: number;
  size?: number;
  color?: string;
}

export function StarRating({
  rating,
  size = 16,
  color = 'var(--color-star)',
}: StarRatingProps) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < rating ? color : 'var(--color-bg-secondary)'}
          aria-hidden="true"
        >
          <path d="M10 1l2.6 5.6 6.2.6-4.7 4.1 1.4 6.1L10 14.8l-5.5 2.6 1.4-6.1L1.2 7.2l6.2-.6z" />
        </svg>
      ))}
    </div>
  );
}
