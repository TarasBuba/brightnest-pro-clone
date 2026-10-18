import type { LucideIcon } from 'lucide-react';
import type { ServiceId } from '@/src/entities/service/model';

export interface ServiceOfferingCard {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: readonly string[];
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceShowcaseItem {
  imageSrc: string;
  imageAlt: string;
  caption: string;
  imageClassName?: string;
  spanTwoOnSm?: boolean;
}

export interface ServicePageConfig {
  serviceId: ServiceId;
  path: string;
  breadcrumbCurrent: string;
  schema: {
    name: string;
    serviceType: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
    highlights: readonly string[];
    primaryCtaLabel: string;
    imageSrc: string;
    imageAlt: string;
    imageBadgeLabel: string;
    imageCaption: string;
  };
  offeringsSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLinkLabel: string;
    cards: readonly ServiceOfferingCard[];
  };
  climateSection: {
    badgeIcon: LucideIcon;
    badgeText: string;
    title: string;
    paragraphs: readonly string[];
    imageSrc: string;
    imageAlt: string;
    noteTitle: string;
    noteBody: string;
  };
  showcaseSection?: {
    title: string;
    description: string;
    items: readonly ServiceShowcaseItem[];
  };
  faqSection: {
    title: string;
    description: string;
    faqs: readonly ServiceFaqItem[];
  };
  ctaBanner: {
    badgeText: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
  };
}
