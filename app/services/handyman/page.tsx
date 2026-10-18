import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';
import { buildMetadata } from '@/src/shared/lib/seo';
import { ServicePageTemplate, HANDYMAN_PAGE_CONFIG } from '@/src/widgets/service-landing';

export const metadata = buildMetadata({
  title: 'Handyman & Home Repairs Edmonton',
  description:
    `Reliable handyman & home repair services in Edmonton. Doors, trim, drywall patching, deck & fence repairs. ${siteConfig.responseMinutes}-min callback, upfront pricing, guaranteed care.`,
  path: ROUTES.handyman,
});

export default function HandymanPage() {
  return <ServicePageTemplate config={HANDYMAN_PAGE_CONFIG} />;
}
