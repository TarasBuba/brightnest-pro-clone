'use client';

import { StarRating } from './star-rating';
import { AvatarWithFallback } from './avatar-with-fallback';
import type { ExtendedReview } from '../model/reviews-data';
import { CheckCircle2, Quote } from 'lucide-react';
import { GoogleIcon } from '@/src/shared/ui/brand-icons';
import { PLATFORM_ACCENT } from './icons';

interface ReviewCardProps {
  review: ExtendedReview;
  isPaused?: boolean;
  onClick?: () => void;
}

export function ReviewCard({ review, isPaused = false, onClick }: ReviewCardProps) {
  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`Review by ${review.name}`}
      className="group relative flex h-full flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border)]/60 bg-[var(--color-bg-card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-teal)]/40 hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[var(--color-brand-teal)] text-left cursor-pointer select-none"
    >
      {/* Decorative quote mark in background */}
      <Quote
        className="pointer-events-none absolute right-4 top-4 h-12 w-12 text-[var(--color-brand-teal)]/5 transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--color-brand-teal)]/10"
        aria-hidden="true"
      />

      <div>
        {/* Reviewer Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <AvatarWithFallback
              src={review.avatarUrl}
              name={review.name}
              size={50}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-bold text-[var(--color-text-primary)] leading-tight text-base">
                  {review.name}
                </h4>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] font-medium">
                {review.role}
              </p>
              {review.service && (
                <span className="inline-block mt-0.5 rounded-full bg-[var(--color-bg-secondary)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-brand-teal)]">
                  {review.service}
                </span>
              )}
            </div>
          </div>

          {/* Platform Badge */}
          <div
            className="flex items-center gap-1 rounded-md bg-[var(--color-bg-secondary)] px-2 py-1 text-[11px] font-medium text-[var(--color-text-secondary)] shrink-0"
            title="Verified Google Review"
          >
            <GoogleIcon width={12} height={12} color={PLATFORM_ACCENT.google} />
            <span>Google</span>
          </div>
        </div>

        {/* Star Rating */}
        <div className="mb-3 flex items-center gap-2">
          <StarRating rating={review.rating} size={16} color="#FFB800" />
          <span className="text-xs font-bold text-[var(--color-text-primary)]">
            5.0
          </span>
        </div>

        {/* Review Text */}
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-text-primary)]">
          &ldquo;{review.review}&rdquo;
        </p>
      </div>

      {/* Card Footer: Verified Homeowner & Pause note */}
      <div className="mt-5 flex items-center justify-between border-t border-[var(--color-border)]/40 pt-3 text-[11px] text-[var(--color-text-tertiary)]">
        <span className="flex items-center gap-1 text-emerald-600 font-medium">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Verified Edmonton Homeowner
        </span>
        <span className="opacity-60 group-hover:opacity-100 transition-opacity">
          {isPaused ? 'Click to resume' : 'Click to hold'}
        </span>
      </div>
    </article>
  );
}
