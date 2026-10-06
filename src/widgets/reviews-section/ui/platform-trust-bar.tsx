import { GoogleIcon, FacebookIcon } from '@/src/shared/ui/brand-icons';
import { HomeStarsIcon, PLATFORM_ACCENT } from './icons';
import { StarRating } from './star-rating';
import { ShieldCheck, ThumbsUp, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';

interface PlatformTrustBarProps {
  className?: string;
}

export function PlatformTrustBar({ className = '' }: PlatformTrustBarProps) {
  const platforms = [
    {
      id: 'google',
      name: 'Google Reviews',
      badge: '5.0 (8 reviews)',
      description: '100% 5-Star Verified Ratings',
      accent: PLATFORM_ACCENT.google,
      href: siteConfig.social.google,
      icon: <GoogleIcon width={26} height={26} color={PLATFORM_ACCENT.google} />,
      customBadge: (
        <div className="flex items-center gap-1.5">
          <StarRating rating={5} size={15} color="#FFB800" />
          <span className="text-xs font-semibold text-[var(--color-text-primary)]">
            5.0 (8 reviews)
          </span>
        </div>
      ),
    },
    {
      id: 'homestars',
      name: 'HomeStars',
      badge: 'HomeStars Verified',
      description: 'Licensed & Background Checked',
      accent: PLATFORM_ACCENT.homestars,
      href: 'https://homestars.com/companies/search?query=BrightNest+Pro+Services', // Note: User said they don't have homestars yet, so leave generic search link for now
      icon: <HomeStarsIcon size={28} />,
      customBadge: (
        <div className="flex items-center gap-1 text-xs font-semibold text-[#00897B]">
          <ShieldCheck className="h-4 w-4 text-[#00A99D]" />
          <span>HomeStars Verified</span>
        </div>
      ),
    },
    {
      id: 'facebook',
      name: 'Facebook',
      badge: '100% Recommended',
      description: 'Edmonton Family Business',
      accent: PLATFORM_ACCENT.facebook,
      href: siteConfig.social.facebook,
      icon: <FacebookIcon width={26} height={26} color={PLATFORM_ACCENT.facebook} />,
      customBadge: (
        <div className="flex items-center gap-1 text-xs font-semibold text-[#1877F2]">
          <ThumbsUp className="h-3.5 w-3.5 text-[#1877F2]" />
          <span>100% Recommended</span>
        </div>
      ),
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-3 ${className}`}
      aria-label="Verified Review Platforms"
    >
      {platforms.map((platform) => (
        <a
          key={platform.id}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]/60 bg-[var(--color-bg-card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-md"
        >
          {/* Accent top stripe */}
          <span
            className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
            style={{ backgroundColor: platform.accent }}
            aria-hidden="true"
          />

          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] shadow-xs transition-transform group-hover:scale-105">
                {platform.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {platform.name}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {platform.description}
                </p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-[var(--color-text-tertiary)] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-[var(--color-text-primary)]" />
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-[var(--color-border)]/40 pt-3">
            {platform.customBadge}
            <span
              className="text-xs font-medium transition-colors group-hover:underline"
              style={{ color: platform.accent }}
            >
              Verify &rarr;
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
