'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getInitials } from '@/src/shared/lib/utils/avatar';

interface AvatarWithFallbackProps {
  src?: string;
  name: string;
  size?: number;
  className?: string;
}

export function AvatarWithFallback({
  src,
  name,
  size = 48,
  className = '',
}: AvatarWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const initials = getInitials(name);

  if (!src || hasError) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-brand-teal)] to-teal-800 font-bold text-white shadow-sm ring-2 ring-white/40 ${className}`}
        style={{
          width: size,
          height: size,
          fontSize: Math.max(12, Math.round(size * 0.36)),
        }}
        aria-label={`${name}'s avatar`}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-teal-50 ring-2 ring-[var(--color-brand-teal)]/30 shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        onError={() => setHasError(true)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
