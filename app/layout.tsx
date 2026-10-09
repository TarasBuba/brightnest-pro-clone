import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SiteHeader } from '@/src/widgets/site-header';
import { SiteFooter } from '@/src/widgets/site-footer';
import { RevealObserver } from '@/src/shared/ui/reveal-observer';
import { buildLocalBusinessSchema } from '@/src/shared/lib/schema/local-business-schema';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport = {
  themeColor: '#0a192f', // Brand Navy Deep
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://brightnestpro.ca'),
  alternates: { canonical: '/' },
  title: 'Handyman & Painting Services Edmonton | BrightNest Pro',
  description:
    'Professional handyman, custom carpentry, deck building, and expert painting services in Edmonton. Local family-owned, fair pricing, and satisfaction guaranteed.',
  openGraph: {
    title: 'BrightNest Pro | Edmonton Handyman & Painting',
    description: 'Professional handyman, deck building, and expert painting services in Edmonton.',
    url: 'https://brightnestpro.ca',
    siteName: 'BrightNest Pro Services',
    images: [
      {
        url: '/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Yuriy and Karina - BrightNest Pro Services',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightNest Pro | Edmonton Handyman & Painting',
    description: 'Professional handyman, deck building, and expert painting services in Edmonton.',
    images: ['/og/og-default.jpg'],
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessSchema()) }}
        />
      </body>
    </html>
  );
}

