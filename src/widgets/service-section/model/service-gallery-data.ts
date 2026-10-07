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
};

