export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/src/shared/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/book/`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
