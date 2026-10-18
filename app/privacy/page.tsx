import { ROUTES } from '@/src/shared/config/navigation';
import { buildMetadata } from '@/src/shared/lib/seo';
import { LegalPageTemplate, PRIVACY_PAGE_CONFIG } from '@/src/widgets/legal-page';

export const metadata = buildMetadata({
  title: 'Privacy & Cookie Policy',
  description:
    'Privacy & Cookie Policy for BrightNest Pro Services in Edmonton, Alberta. Compliant with Alberta PIPA, Canada PIPEDA, and CASL with zero third-party tracking cookies.',
  path: ROUTES.privacy,
});

export default function PrivacyPage() {
  return <LegalPageTemplate config={PRIVACY_PAGE_CONFIG} />;
}
