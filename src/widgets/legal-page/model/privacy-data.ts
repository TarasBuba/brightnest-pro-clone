import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';
import type { LegalDocumentConfig } from './types';

export const PRIVACY_PAGE_CONFIG: LegalDocumentConfig = {
  path: ROUTES.privacy,
  breadcrumbName: 'Privacy & Cookie Policy',
  eyebrow: 'Alberta PIPA & Canada PIPEDA Compliance',
  title: 'Privacy & Cookie Policy',
  subtitle:
    'How BrightNest Pro Services collects, protects, and handles your personal information in accordance with Alberta and Canadian privacy legislation.',
  effectiveDate: 'October 2026',
  jurisdictionBadge: 'Province of Alberta & Federal Laws of Canada',
  sections: [
    {
      id: 'scope-and-compliance',
      title: '1. Scope & Legislative Compliance',
      paragraphs: [
        `${siteConfig.name} ("BrightNest Pro", "we", "us", or "our") is a family-owned home repair and painting business operating in Edmonton, Alberta, Canada. We respect your privacy and are committed to safeguarding the personal information you entrust to us.`,
        'This Privacy & Cookie Policy is governed by and drafted in compliance with the Personal Information Protection Act (Alberta), S.A. 2003, c. P-6.5 ("Alberta PIPA"), the federal Personal Information Protection and Electronic Documents Act ("PIPEDA"), and Canada’s Anti-Spam Legislation ("CASL").',
      ],
    },
    {
      id: 'information-collected',
      title: '2. Personal Information We Collect',
      paragraphs: [
        'We practice strict data minimization and collect only the personal information reasonably required to evaluate your home project, provide estimates, and deliver handyman or painting services in the Greater Edmonton area. Information is collected directly from you when you submit our online booking form, send project photos, or contact us by phone or email:',
      ],
      bullets: [
        'Contact Identifiers: Your full name, telephone number, and email address.',
        'Property & Project Details: Service neighborhood or street address in Edmonton and surrounding communities, descriptions of requested repairs or painting work, and optional photographs of the work area.',
        'Service Records: Project evaluations, written quotes, invoices, walkthrough sign-offs, and communication history.',
      ],
    },
    {
      id: 'purpose-of-use',
      title: '3. How We Use Your Information',
      paragraphs: [
        'Under Alberta PIPA, we identify the purposes for which personal information is collected at or before the time of collection. We use your information exclusively for the following business purposes:',
      ],
      bullets: [
        `Responding to your inquiry within our ${siteConfig.responseMinutes}-minute callback window (Monday–Sunday, 24/7).`,
        'Reviewing submitted photos to prepare complimentary preliminary estimates or scheduling on-site project evaluations.',
        'Performing handyman repairs, carpentry, deck restoration, and interior or exterior painting at your property.',
        'Issuing itemized quotes, invoices, and payment receipts, and maintaining statutory tax and accounting records required in Alberta.',
      ],
    },
    {
      id: 'consent-and-casl',
      title: '4. Consent & Electronic Communications (CASL)',
      paragraphs: [
        'By submitting an inquiry through our website, calling our dispatch number, or emailing us, you provide consent for BrightNest Pro Services to contact you via phone, SMS text message, or email regarding your specific project request.',
        'We do not send unsolicited bulk marketing emails or spam. You may withdraw your consent to future communications at any time by contacting us directly at our email or phone number listed below, subject to any legal or contractual obligations relating to an active or completed service agreement.',
      ],
    },
    {
      id: 'cookie-policy',
      title: '5. Cookie Policy & Zero-Tracking Architecture',
      paragraphs: [
        'Our website is engineered with a privacy-first static architecture designed to protect your browsing privacy and maximize page speed:',
      ],
      bullets: [
        'Zero Third-Party Advertising Cookies: We do not install behavioral advertising cookies, cross-site tracking pixels, or retargeting scripts on your device.',
        'No Data Brokerage: We never sell, rent, trade, or monetize visitor browsing behavior or personal contact details.',
        'Strictly Necessary Technical Operations: Our hosting infrastructure (Cloudflare) and secure form relay (Web3Forms) process standard HTTP request headers (such as IP address and browser user-agent) solely to prevent automated spam/bot abuse, enforce HTTPS security headers, and deliver our web pages reliably.',
      ],
    },
    {
      id: 'disclosure-and-security',
      title: '6. Data Sharing, Storage & Security Safeguards',
      paragraphs: [
        'Access to customer contact details and project photos is restricted exclusively to the owners of BrightNest Pro Services (Yuriy and Karina). We do not use unauthorized subcontractors and do not share your information with outside sales agencies.',
        'We protect your personal information using industry-standard administrative and technical safeguards, including TLS/HTTPS encryption in transit, strict Content-Security-Policy (CSP) browser protections, and password-protected devices. We retain personal information only for as long as necessary to fulfill the service purposes described above or to comply with Canada Revenue Agency (CRA) and Province of Alberta statutory retention periods.',
      ],
    },
    {
      id: 'your-alberta-rights',
      title: '7. Your Rights Under Alberta PIPA & Contact Information',
      paragraphs: [
        'Under Alberta PIPA, you have the right to request access to the personal information we hold about you, verify its accuracy, request corrections to any factual errors, or request deletion of information that is no longer required for legal or accounting purposes.',
        `If you have any questions about this Privacy & Cookie Policy or wish to exercise your privacy rights, please contact our Privacy Officer directly at ${siteConfig.email} or by phone at ${siteConfig.phoneDisplay}. If an issue remains unresolved, you also have the right to contact the Office of the Information and Privacy Commissioner of Alberta (OIPC).`,
      ],
    },
  ],
};
