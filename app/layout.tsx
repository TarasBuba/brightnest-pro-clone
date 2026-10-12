import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { SiteHeader } from '@/src/widgets/site-header';
import { SiteFooter } from '@/src/widgets/site-footer';
import { RevealObserver } from '@/src/shared/ui/reveal-observer';
import { siteConfig } from '@/src/shared/config/site';
import { buildSiteJsonLd, JsonLdScript } from '@/src/shared/lib/seo';
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

export const viewport: Viewport = {
  themeColor: '#0a192f', // Brand Navy Deep
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Handyman & Painting Services in Edmonton | BrightNest Pro',
    template: '%s | BrightNest Pro Edmonton',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  formatDetection: {
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage.path,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [siteConfig.ogImage.path],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={siteConfig.language}
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
        <JsonLdScript data={buildSiteJsonLd()} />
      </body>
    </html>
  );
}

