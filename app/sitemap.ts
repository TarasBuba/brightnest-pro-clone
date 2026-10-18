import type { MetadataRoute } from 'next';
import { ROUTES } from '@/src/shared/config/navigation';
import { absoluteUrl } from '@/src/shared/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return [
    {
      url: absoluteUrl(ROUTES.home),
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: absoluteUrl(ROUTES.book),
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl(ROUTES.handyman),
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl(ROUTES.painting),
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl(ROUTES.about),
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl(ROUTES.privacy),
      lastModified: buildDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: absoluteUrl(ROUTES.terms),
      lastModified: buildDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
