import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';
import type { LegalDocumentConfig } from './types';

export const TERMS_PAGE_CONFIG: LegalDocumentConfig = {
  path: ROUTES.terms,
  breadcrumbName: 'Terms of Service',
  eyebrow: 'Service Agreement & Alberta Consumer Standards',
  title: 'Terms of Service',
  subtitle:
    'Clear, honest terms governing project evaluations, estimates, scheduling, and home repair or painting services provided by BrightNest Pro Services in Edmonton, Alberta.',
  effectiveDate: 'October 2026',
  jurisdictionBadge: 'Governed by the Laws of the Province of Alberta',
  sections: [
    {
      id: 'agreement-overview',
      title: '1. Overview & Acceptance of Terms',
      paragraphs: [
        `These Terms of Service ("Terms") govern your use of the ${siteConfig.url} website and all handyman, carpentry, deck restoration, and interior or exterior painting services provided by ${siteConfig.name} ("BrightNest Pro", "we", "us", or "our") across Edmonton, Sherwood Park, St. Albert, Leduc, Spruce Grove, and surrounding Alberta communities.`,
        'By requesting a quote, booking an evaluation, or authorizing work at your property, you agree to these Terms. All services are performed directly by our family-owned team without outside subcontractors.',
      ],
    },
    {
      id: 'evaluations-and-estimates',
      title: '2. Project Evaluations, Photo Estimates & On-Site Inspection Fees',
      paragraphs: [
        'Because every residential repair and painting project involves unique structural conditions, substrate preparation, and material requirements, we do not issue binding sight-unseen quotes. Our assessment and pricing process operates as follows:',
      ],
      bullets: [
        'Complimentary Photo Estimates: Preliminary estimates prepared from clear photographs and project descriptions submitted by the homeowner are provided free of charge.',
        'On-Site Inspection Fee: Where an in-person on-site visit, diagnostic inspection, or detailed measurement is requested or required prior to project approval, an on-site inspection fee applies. You will always be informed of the applicable inspection fee before the visit is scheduled.',
        'Evaluation-Based Scope & Pricing: Final itemized pricing is established following a thorough evaluation of the project scope. Any hidden structural damage, moisture rot, or substrate defects discovered after opening walls, trim, or decking will be communicated to you immediately for approval before additional work proceeds.',
      ],
    },
    {
      id: 'scheduling-and-turnaround',
      title: '3. Scheduling, Project Timelines & Emergency Repairs',
      paragraphs: [
        `We strive to respond to all online and telephone inquiries within ${siteConfig.responseMinutes} minutes, 24/7 Monday through Sunday. Most standard handyman repairs are scheduled within 24 to 48 hours of approval.`,
        'For interior and exterior painting, deck staining, and multi-stage carpentry, exact project duration depends on room dimensions, surface condition, drywall patching and sanding requirements, weather/humidity conditions, and manufacturer-specified curing times. A realistic project schedule is provided following our evaluation.',
        'Urgent or same-day emergency repair requests requiring immediate dispatch outside regular scheduled slots are subject to an additional emergency service fee.',
      ],
    },
    {
      id: 'materials-and-furniture',
      title: '4. Materials, Eco-Friendly Finishes & Heavy Furniture Moving',
      paragraphs: [
        'For painting projects, we utilize premium, eco-friendly, low-VOC paints and professional architectural coatings designed for durability, washability, and family safety. For handyman repairs, Yuriy arrives equipped with commercial-grade tools, fasteners, shims, and sealants.',
        'Standard preparation includes protecting floors and adjacent surfaces with heavy-duty drop cloths and masking tape. If you require assistance moving and repositioning heavy furniture or appliances prior to painting or repair work, please note that heavy furniture moving is an additional billable service handled as a separate scope of work.',
      ],
    },
    {
      id: 'homeowner-responsibilities',
      title: '5. Homeowner Responsibilities & Safe Worksite Access',
      paragraphs: [
        'To ensure safe, efficient craftsmanship at your property, the homeowner agrees to:',
      ],
      bullets: [
        'Provide clear access to the designated work area, driveway/parking, and standard residential electrical power and running water.',
        'Remove fragile personal heirlooms, small breakables, wall electronics, and valuables from the immediate work zone prior to our arrival.',
        'Keep children and household pets safely away from active tools, ladders, wet paint, primers, and curing stains.',
      ],
    },
    {
      id: 'payment-and-invoicing',
      title: '6. Pricing, Deposits & Payment Terms',
      paragraphs: [
        'All pricing is stated in Canadian Dollars (CAD) and is subject to applicable Goods and Services Tax (GST) in the Province of Alberta. Multi-day projects or special-order materials may require a material/scheduling deposit prior to commencement.',
        'Unless otherwise agreed in writing on your invoice, final payment is due in full upon completion of the work and conclusion of the joint walkthrough inspection.',
      ],
    },
    {
      id: 'insurance-and-walkthrough',
      title: '7. Alberta Licensing, Liability Insurance & Completion Walkthrough',
      paragraphs: [
        'BrightNest Pro Services is fully licensed and maintains comprehensive commercial general liability insurance in the Province of Alberta. Upon completion of every project, Yuriy conducts a detailed walkthrough with you to inspect every repair alignment, surface smoothness, and paint cut-in line. If any detail within the agreed scope requires a touch-up or adjustment, we address it promptly on the spot.',
        'Our workmanship guarantee covers labor within the agreed scope of work and does not cover pre-existing structural settlement, foundation movement, Alberta freeze-thaw ground heaving, roof/plumbing leaks, or customer-supplied defective hardware.',
      ],
    },
    {
      id: 'governing-law',
      title: '8. Governing Law & Jurisdiction',
      paragraphs: [
        'These Terms of Service and any service agreement with BrightNest Pro Services are governed by and construed in accordance with the laws of the Province of Alberta (including the Consumer Protection Act, R.S.A. 2000, c. C-26.3) and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts located in Edmonton, Alberta.',
        `For questions regarding these Terms, please contact us at ${siteConfig.email} or call ${siteConfig.phoneDisplay}.`,
      ],
    },
  ],
};
