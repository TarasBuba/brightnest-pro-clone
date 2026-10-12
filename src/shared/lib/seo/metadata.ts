import type { Metadata } from 'next';
import { siteConfig, absoluteUrl } from '@/src/shared/config/site';

interface BuildMetadataInput {
  /** Page title without the brand suffix (the root layout template appends it). */
  title?: string;
  description?: string;
  /** Site-relative path with trailing slash, e.g. `/about/`. */
  path: string;
  /** Exclude the page from search indexes (404, thank-you pages, etc.). */
  noindex?: boolean;
}

/**
 * Per-page metadata. Every indexable page MUST call this so it gets its own
 * canonical URL and Open Graph URL — never inherit the root canonical.
 */
export function buildMetadata({ title, description, path, noindex = false }: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const desc = description ?? siteConfig.description;
  const ogTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.name;

  return {
    ...(title ? { title } : {}),
    description: desc,
    alternates: noindex ? undefined : { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url,
      title: ogTitle,
      description: desc,
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
      title: ogTitle,
      description: desc,
      images: [siteConfig.ogImage.path],
    },
  };
}
