'use client';

import { useEffect, useState, type ReactNode } from 'react';

interface HeaderShellProps {
  children: ReactNode;
}

export function HeaderShell({ children }: HeaderShellProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full transition-shadow duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {children}
    </div>
  );
}
