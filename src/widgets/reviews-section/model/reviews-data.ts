export interface ExtendedReview {
  id: number;
  name: string;
  rating: number;
  review: string;
  avatarUrl: string;
  role: string;
  service: string;
  platform: 'google' | 'homestars' | 'facebook';
}

export const EXTENDED_REVIEWS: ExtendedReview[] = [
  {
    id: 1,
    name: 'Adria Lee',
    rating: 5,
    role: 'Edmonton Homeowner',
    service: 'Deck Restoration & Repairs',
    avatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80',
    review:
      'We are so pleased with the work Yuriy and Karina did with our two back decks and structural repairs. Not only did they take great care to make sure everything looked fantastic but they also priced their work very reasonably. As new immigrants, English is not their first language but that does not stop them from communicating (using a translator) and getting out there to make a concerted effort in building a business for themselves. We will 100% use them again and recommend to anyone looking for honest hard working helpers.',
    platform: 'google',
  },
  {
    id: 2,
    name: 'Jean Gagnon',
    rating: 5,
    role: 'Edmonton Homeowner',
    service: 'Custom Fence Construction',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=80',
    review:
      'We recently hired BrightNest Pro Services owned and operated by a lovely couple Yuriy and Karina to build a fence for us. They took great pride in doing a good job and definitely work to please the customer. Their work was done well and we would highly recommend their business.',
    platform: 'google',
  },
  {
    id: 3,
    name: 'Roxana Lee',
    rating: 5,
    role: '43-Year Edmonton Homeowner',
    service: 'Home Repairs & Maintenance',
    avatarUrl:
      'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=240&h=240&q=80',
    review:
      'In the 43 yrs. that we had lived in this house, BrightNest Pro Services, are one of the most reliable, personable, friendly and consciously do a great job. We will definitely hire them again even for other jobs. Recommend to try their work.',
    platform: 'google',
  },
  {
    id: 4,
    name: 'Salina Halabi',
    rating: 5,
    role: 'Edmonton Resident',
    service: 'Interior Painting & Drywall Repair',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=80',
    review:
      'Wonderful team and great work! Highly recommend for both interior painting and drywall repair services. Fast, clean, and top quality. Thank you!',
    platform: 'google',
  },
  {
    id: 5,
    name: 'Yvonne Reitsma',
    rating: 5,
    role: 'Edmonton Homeowner',
    service: 'Window Frame Repair & Trim Painting',
    avatarUrl:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=240&h=240&q=80',
    review:
      'This team came to repair our sticking window frames and paint the exterior trim! Excellent, thorough job. Early, efficient and very polite. Would definitely use them for other repair jobs needed around the house.',
    platform: 'google',
  },
  {
    id: 6,
    name: 'Dasha Pugacheva',
    rating: 5,
    role: 'Edmonton Resident',
    service: 'Furniture Assembly & TV Mounting',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80',
    review:
      'Yuriy assembled our new modular furniture and mounted our TV securely with perfectly hidden cables. Great company and lovely couple! Highly recommend.',
    platform: 'google',
  },
  {
    id: 7,
    name: 'Oleksii Chubko',
    rating: 5,
    role: 'Move-In Client',
    service: 'Interior Painting & Door Adjustment',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80',
    review:
      'Great couple! They did full interior painting and door adjustments for us when we moved in. We’re very happy with their work and would definitely recommend them. We’ll be happy to use their services again!',
    platform: 'google',
  },
  {
    id: 8,
    name: 'P L',
    rating: 5,
    role: 'Local Homeowner',
    service: 'Custom Handyman Repairs',
    avatarUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&h=240&q=80',
    review:
      'Quality, customized work with attention paid to detail and per homeowner’s instructions - happy to support a local, family-run business.',
    platform: 'google',
  },
];
