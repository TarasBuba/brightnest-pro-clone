import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/"
        className="rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-cta-primary-hover)]"
      >
        Return Home
      </Link>
    </main>
  );
}
