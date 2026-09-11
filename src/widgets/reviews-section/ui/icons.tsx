import { SiFacebook, SiGoogle } from '@icons-pack/react-simple-icons';

export const PLATFORM_ACCENT = {
  google: '#4285F4',
  homestars: '#00A99D',
  facebook: '#1877F2',
} as const;

export function HomeStarsIcon({
  size = 32,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="HomeStars"
    >
      <rect width="64" height="64" rx="14" fill="#00A99D" />
      <path
        d="M32 10L38.5 24.5L54 26.5L42.5 37.5L45.5 53L32 45L18.5 53L21.5 37.5L10 26.5L25.5 24.5L32 10Z"
        fill="#FFFFFF"
      />
      <path
        d="M32 17L36.8 27.8L48.5 29.3L39.8 37.5L42.1 49.2L32 43.2L21.9 49.2L24.2 37.5L15.5 29.3L27.2 27.8L32 17Z"
        fill="#37F826"
      />
      <circle cx="32" cy="32" r="6" fill="#00A99D" />
    </svg>
  );
}

export function PlatformIcon({
  platform,
  size = 32,
  className = '',
}: {
  platform: 'google' | 'homestars' | 'facebook';
  size?: number;
  className?: string;
}) {
  if (platform === 'google') {
    return <SiGoogle size={size} color={PLATFORM_ACCENT.google} className={className} />;
  }
  if (platform === 'facebook') {
    return <SiFacebook size={size} color={PLATFORM_ACCENT.facebook} className={className} />;
  }
  return <HomeStarsIcon size={size} className={className} />;
}

export default PlatformIcon;
