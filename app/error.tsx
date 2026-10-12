'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Something went wrong!</h1>
      <p className="text-slate-600 mb-8 max-w-md">
        An unexpected error occurred.
      </p>
      <button 
        onClick={() => reset()}
        className="rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-cta-primary-hover)]"
      >
        Try again
      </button>
    </main>
  );
}
