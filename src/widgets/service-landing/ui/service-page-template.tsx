import {
  buildBreadcrumbJsonLd,
  buildServicePageJsonLd,
  buildFaqJsonLd,
  JsonLdScript,
} from '@/src/shared/lib/seo';
import type { ServicePageConfig } from '../model/types';
import { ServiceHero } from './service-hero';
import { ServiceOfferingsGrid } from './service-offerings-grid';
import { ServiceClimateSection } from './service-climate-section';
import { ServiceShowcaseGrid } from './service-showcase-grid';
import { ServiceFaqSection } from './service-faq-section';
import { ServiceCtaBanner } from './service-cta-banner';

interface ServicePageTemplateProps {
  config: ServicePageConfig;
}

export function ServicePageTemplate({ config }: ServicePageTemplateProps) {
  const breadcrumbData = buildBreadcrumbJsonLd([
    { name: 'Services', path: '/#services' },
    { name: config.breadcrumbCurrent, path: config.path },
  ]);

  const serviceData = buildServicePageJsonLd({
    path: config.path,
    name: config.schema.name,
    serviceType: config.schema.serviceType,
    description: config.schema.description,
  });

  const faqData = buildFaqJsonLd(config.faqSection.faqs);

  return (
    <main id="main-content" className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <JsonLdScript data={breadcrumbData} />
      <JsonLdScript data={serviceData} />
      <JsonLdScript data={faqData} />

      <ServiceHero config={config} />
      <ServiceOfferingsGrid config={config} />
      <ServiceClimateSection config={config} />
      <ServiceShowcaseGrid config={config} />
      <ServiceFaqSection config={config} />
      <ServiceCtaBanner config={config} />
    </main>
  );
}
