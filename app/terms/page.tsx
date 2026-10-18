import { ROUTES } from '@/src/shared/config/navigation';
import { buildMetadata } from '@/src/shared/lib/seo';
import { LegalPageTemplate, TERMS_PAGE_CONFIG } from '@/src/widgets/legal-page';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service for BrightNest Pro Services in Edmonton, Alberta. Project evaluation rules, complimentary photo estimates, scheduling, and Alberta consumer standards.',
  path: ROUTES.terms,
});

export default function TermsPage() {
  return <LegalPageTemplate config={TERMS_PAGE_CONFIG} />;
}
