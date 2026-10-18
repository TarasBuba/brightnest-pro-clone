import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';
import { buildMetadata } from '@/src/shared/lib/seo';
import { ServicePageTemplate, PAINTING_PAGE_CONFIG } from '@/src/widgets/service-landing';

export const metadata = buildMetadata({
  title: 'Interior & Exterior House Painting Edmonton',
  description:
    `Expert interior & exterior house painting, cabinet refinishing, and deck staining in Edmonton. Flawless finishes, durable coats, and rapid ${siteConfig.responseMinutes}-minute callbacks.`,
  path: ROUTES.painting,
});

export default function PaintingPage() {
  return <ServicePageTemplate config={PAINTING_PAGE_CONFIG} />;
}
