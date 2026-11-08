import { SERVICES, SERVICE_IDS, isServiceId, type Service, type ServiceId } from './services';
import { EXTENDED_REVIEWS, type ExtendedReview } from './reviews';
import { RECENT_WORK_PROJECTS, type BentoProject } from './projects';
import {
  HANDYMAN_PAGE_CONFIG,
  PAINTING_PAGE_CONFIG,
  type ServiceOfferingCard,
  type ServiceFaqItem,
  type ServiceShowcaseItem,
  type ServicePageConfig,
} from './service-landings';
import {
  PRIVACY_PAGE_CONFIG,
  TERMS_PAGE_CONFIG,
  type LegalSection,
  type LegalDocumentConfig,
} from './legal';

export {
  SERVICES,
  SERVICE_IDS,
  isServiceId,
  EXTENDED_REVIEWS,
  RECENT_WORK_PROJECTS,
  HANDYMAN_PAGE_CONFIG,
  PAINTING_PAGE_CONFIG,
  PRIVACY_PAGE_CONFIG,
  TERMS_PAGE_CONFIG,
};

export type {
  Service,
  ServiceId,
  ExtendedReview,
  BentoProject,
  ServiceOfferingCard,
  ServiceFaqItem,
  ServiceShowcaseItem,
  ServicePageConfig,
  LegalSection,
  LegalDocumentConfig,
};

export const APP_CONTENT = {
  services: SERVICES,
  reviews: EXTENDED_REVIEWS,
  projects: RECENT_WORK_PROJECTS,
  serviceLandings: {
    handyman: HANDYMAN_PAGE_CONFIG,
    painting: PAINTING_PAGE_CONFIG,
  },
  legal: {
    privacy: PRIVACY_PAGE_CONFIG,
    terms: TERMS_PAGE_CONFIG,
  },
} as const;

export function getAppContent() {
  return APP_CONTENT;
}
