export interface LegalSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}

export interface LegalDocumentConfig {
  path: string;
  breadcrumbName: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  effectiveDate: string;
  jurisdictionBadge: string;
  sections: readonly LegalSection[];
}
