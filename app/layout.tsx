import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { SiteHeader } from '@/src/widgets/site-header';
import { SiteFooter } from '@/src/widgets/site-footer';
import { RevealObserver } from '@/src/shared/ui/reveal-observer';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brightnestpro.ca'),
  title: 'House Cleaning & Handyman Services Edmonton | BrightNest Pro',
  description:
    'Professional home cleaning, painting, and power washing in Edmonton. Free quotes, insured team, satisfaction guaranteed.',
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col font-body antialiased">
        <RevealObserver />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-brand-teal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

