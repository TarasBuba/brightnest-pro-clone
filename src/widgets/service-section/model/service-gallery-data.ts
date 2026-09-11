// src/widgets/service-section/model/service-gallery-data.ts

export interface ServiceGalleryItem {
  src: string;
  alt: string;
  caption: string;
  tag?: string;
}

export const SERVICE_GALLERIES: Record<string, ServiceGalleryItem[]> = {
  handyman: [
    {
      src: '/images/services/handyman.webp',
      alt: 'Handyman precision home hardware repair in Edmonton',
      caption: 'Hardware & Fixture Adjustments',
      tag: 'Repairs',
    },
    {
      src: '/images/hero/collage/hero-2.jpg',
      alt: 'Professional mounting and carpentry installation work',
      caption: 'Structural Mounting & Assembly',
      tag: 'Installation',
    },
    {
      src: '/images/projects/deck-after.jpg',
      alt: 'Restored outdoor deck and terrace boards in Edmonton',
      caption: 'Deck & Terrace Structural Fixes',
      tag: 'Terrace',
    },
    {
      src: '/images/projects/deck-before.jpg',
      alt: 'Weathered deck before restoration and structural repairs',
      caption: 'Pre-Repair Detailed Inspection',
      tag: 'Before',
    },
  ],
  painting: [
    {
      src: '/images/hero/collage/hero-3.jpg',
      alt: 'Flawless interior wall painting in Edmonton home',
      caption: 'Flawless Interior Wall Painting',
      tag: 'Interior',
    },
    {
      src: '/images/services/painting.webp',
      alt: 'Precision trim and surface preparation for painting',
      caption: 'Precision Trim & Surface Prep',
      tag: 'Detailing',
    },
    {
      src: '/images/hero/collage/hero-4.jpg',
      alt: 'Accent wall and architectural color refresh',
      caption: 'Accent Wall & Color Refresh',
      tag: 'Finish',
    },
    {
      src: '/images/hero/collage/hero-1.jpg',
      alt: 'Crisp line finish and protective clear coat',
      caption: 'Clean-Edge Trim Coating',
      tag: 'Protection',
    },
  ],
  cleaning: [
    {
      src: '/images/services/cleaning.webp',
      alt: 'Deep kitchen cleaning and cabinet sanitization',
      caption: 'Deep Kitchen Sanitization',
      tag: 'Deep Clean',
    },
    {
      src: '/images/hero/collage/hero-1.jpg',
      alt: 'Spotless living room ready for move-in in Edmonton',
      caption: 'Move-In / Move-Out Readiness',
      tag: 'Move-In',
    },
    {
      src: '/images/services/services-bg.webp',
      alt: 'Thorough interior surface wipe-down and polishing',
      caption: 'Comprehensive Living Space Polish',
      tag: 'Detailing',
    },
    {
      src: '/images/hero/yuriy-karina-edmonton-home-care.webp',
      alt: 'Family-run home care quality inspection',
      caption: 'Family Standard Quality Check',
      tag: 'Certified',
    },
  ],
  'yard-work': [
    {
      src: '/images/services/yard-care.webp',
      alt: 'Manicured green lawn with clean border edging',
      caption: 'Lawn Mowing & Clean Edging',
      tag: 'Lawn Care',
    },
    {
      src: '/images/projects/deck-after.jpg',
      alt: 'Power-washed clean deck and patio terrace area',
      caption: 'Power-Washed & Sealed Terrace',
      tag: 'Terrace',
    },
    {
      src: '/images/projects/deck-before.jpg',
      alt: 'Seasonal debris and outdoor area before yard work',
      caption: 'Seasonal Cleanup Prep',
      tag: 'Seasonal',
    },
    {
      src: '/images/hero/collage/hero-2.jpg',
      alt: 'Fence gate alignment and outdoor boundary maintenance',
      caption: 'Outdoor Boundary & Gate Care',
      tag: 'Exterior',
    },
  ],
  'complete-care': [
    {
      src: '/images/services/services-bg.webp',
      alt: 'Complete home exterior and interior seasonal package',
      caption: 'Turnkey Whole-Home Care',
      tag: 'All-in-One',
    },
    {
      src: '/images/hero/collage/hero-3.jpg',
      alt: 'Interior wall painting refresh included in complete care',
      caption: 'Interior Painting Refreshes',
      tag: 'Painting',
    },
    {
      src: '/images/projects/deck-after.jpg',
      alt: 'Outdoor terrace and deck renewal in Edmonton',
      caption: 'Terrace & Deck Renewal',
      tag: 'Terrace',
    },
    {
      src: '/images/services/cleaning.webp',
      alt: 'Deep home sanitization as part of full package',
      caption: 'Top-to-Bottom Sanitization',
      tag: 'Cleaning',
    },
  ],
};
