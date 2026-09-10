import Image from 'next/image';
import { SiFacebook, SiGoogle } from '@icons-pack/react-simple-icons';

export const PLATFORM_ACCENT = {
  google: '#4285F4',
  homestars: '##00A99D',
  facebook: '#1877F2',
} as const;

type PlatformCardProps = {
  platform: 'google' | 'homestars' | 'facebook';
  rating?: number;
  reviewCount?: number;
  url: string;
};

export default function PlatformIcon({
  platform,
  size = 32,
}: {
  platform: PlatformCardProps['platform'];
  size?: number;
}) {
  if (platform === 'google') return <SiGoogle size={size} />;
  if (platform === 'facebook')
    return <SiFacebook size={size} color={PLATFORM_ACCENT.facebook} />;
  return (
    <Image
      src="/icons/homestar.svg"
      width={256}
      height={256}
      alt=""
      className="rounded-sm"
    />
  );
}
