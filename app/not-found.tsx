import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | BrightNest Pro',
  alternates: { canonical: '/404' },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="rounded-lg bg-teal-600 px-6 py-3 text-white font-medium hover:bg-teal-700 transition-colors"
      >
        Return Home
      </Link>
    </main>
  );
}
