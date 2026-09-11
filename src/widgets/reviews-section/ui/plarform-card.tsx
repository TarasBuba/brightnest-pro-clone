import { SiGoogle, SiFacebook } from '@icons-pack/react-simple-icons';
import { StarRating } from './star-rating';
import { PLATFORM_ACCENT, HomeStarsIcon } from './icons';

interface PlatformCardProps {
  platform: 'google' | 'homestars' | 'facebook';
  rating?: number;
  reviewCount?: number;
  url: string;
}

function PlatformIcon({
  platform,
  size = 28,
}: {
  platform: PlatformCardProps['platform'];
  size?: number;
}) {
  if (platform === 'google')
    return <SiGoogle size={size} color={PLATFORM_ACCENT.google} />;
  if (platform === 'facebook')
    return <SiFacebook size={size} color={PLATFORM_ACCENT.facebook} />;
  return <HomeStarsIcon size={size} />;
}

export function PlatformCard({
  platform,
  rating,
  reviewCount,
  url,
}: PlatformCardProps) {
  const accent = PLATFORM_ACCENT[platform];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <span
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />
      <PlatformIcon platform={platform} />
      <p className="text-sm font-semibold text-[var(--color-text-primary)]">
        {platform === 'google'
          ? 'Google'
          : platform === 'homestars'
            ? 'HomeStars'
            : 'Facebook'}
      </p>
      {rating !== undefined ? (
        <>
          <StarRating rating={rating} size={14} />
          <p className="text-xs text-[var(--color-text-secondary)]">
            {rating.toFixed(1)} · {reviewCount} reviews
          </p>
        </>
      ) : (
        <p
          className="text-xs font-medium transition-colors group-hover:underline"
          style={{ color: accent }}
        >
          Visit our page
        </p>
      )}
    </a>
  );
}
