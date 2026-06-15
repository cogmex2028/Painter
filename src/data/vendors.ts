export type VendorReview = {
  author: string;
  rating: number;
  date: string;
  body: string;
  project: string;
};

export type Vendor = {
  slug: string;
  updatedAt: string;
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  jobsCompleted: number;
  responseTime: string;
  areas: string[];
  services: string[];
  priceRange: string;
  verified: boolean;
  insured: boolean;
  yearsExperience: number;
  badge?: 'top-rated' | 'rising' | 'premium';
  initials: string;
  accent: string;
  // Per-page unique content
  seoTitle: string;
  seoDescription: string;
  bio: string;
  specialities: string[];
  certifications: string[];
  paintBrands: string[];
  warranty: string;
  reviews: VendorReview[];
  faqs: { question: string; answer: string }[];
};

export const vendors: Vendor[] = [
  {
    slug: 'elite-painters-dubai',
    updatedAt: '2026-05-15T18:43:46.000Z',
    name: 'Elite Painters Dubai',
    tagline: 'Premium villa & high-rise specialists',
    rating: 4.9,
    reviewCount: 312,
    jobsCompleted: 540,
    responseTime: 'Under 30 min',
    areas: ['dubai-marina', 'palm-jumeirah', 'jumeirah', 'downtown-dubai'],
    services: ['interior-painting', 'exterior-painting', 'villa-painting', 'texture-decorative'],
    priceRange: 'AED 18 – 35 / sqft',
    verified: true,
    insured: true,
    yearsExperience: 12,
    badge: 'top-rated',
    initials: 'EP',
    accent: 'from-amber-500 to-orange-600',
    seoTitle: 'Elite Painters Dubai — Reviews & Rates',
    seoDescription:
      'Elite Painters Dubai — 4.9★ from 312 reviews, 540+ villa & penthouse jobs in Marina, Palm and Downtown. 12 years experience, Italian decorative specialists.',
    bio:
      'Founded in 2014, Elite Painters Dubai is a boutique painting contractor focused exclusively on premium villas and high-rise penthouses. The founders trained in Milan with master Italian artisans before opening in Dubai and have built a reputation for flawless Marmorino, Stucco Veneziano and exterior elastomeric work. The team operates with two senior foremen, six skilled painters and dedicated logistics for materials sourced directly from San Marco and Valpaint in Italy.',
    specialities: [
      'Italian decorative finishes (Marmorino, Stucco Veneziano)',
      'Premium villa repaints',
      'Penthouse and Frond villa coatings',
      'Salt-resistant exterior systems',
      'Heritage and Arabesque facade work',
    ],
    certifications: [
      'Dubai Trade License (Active)',
      'AED 2M Third-Party Liability Insurance',
      'Jotun Certified Applicator',
      'Valpaint Italy Authorised Partner',
    ],
    paintBrands: ['Jotun', 'Dulux', 'Valpaint Italy', 'San Marco', 'Caparol'],
    warranty: '12-month interior workmanship · up to 5-year exterior coating warranty',
    reviews: [
      {
        author: 'Aisha Al-Mansoori',
        rating: 5,
        date: '2026-04-12',
        body: 'Hired Elite for a Marmorino feature wall in our Downtown apartment. The team prepared 4 sample boards on the wall so we could pick the right finish. The wall is now gallery-quality.',
        project: 'Marmorino feature wall, Downtown',
      },
      {
        author: 'Daniel Foster',
        rating: 5,
        date: '2026-03-04',
        body: 'Full Palm Jumeirah villa repaint with elastomeric exterior. They handled the Nakheel NOC, scheduled around our family\'s holiday, finished a day early. Two years on and the facade still looks like new.',
        project: 'Frond villa, Palm Jumeirah',
      },
      {
        author: 'Priya Sharma',
        rating: 5,
        date: '2026-02-18',
        body: 'Stucco Veneziano in our master bedroom. The artisan worked alone for 4 days, layer by layer. The result is a mirror polish that catches every change in light. Worth every dirham.',
        project: 'Stucco Veneziano, Jumeirah',
      },
    ],
    faqs: [
      {
        question: 'Does Elite Painters do small apartment jobs too?',
        answer:
          'Yes, but their minimum project is usually AED 4,500. Smaller studio or 1BR repaints are typically routed to one of our other verified vendors who specialise in fast apartment turnover.',
      },
      {
        question: 'How far in advance should I book Elite Painters?',
        answer:
          'For standard villa repaints, 2-3 weeks lead time. For decorative work (Marmorino, Stucco) plan 4-6 weeks because of imported material lead times and sample-board approval cycles.',
      },
      {
        question: 'Do they bring their own materials?',
        answer:
          'Yes. All materials are sourced and supplied by Elite. You pay one combined price for labour and materials. Premium Italian materials are imported on request with 2-3 week lead time.',
      },
    ],
  },
  {
    slug: 'royal-finish-llc',
    updatedAt: '2026-05-15T18:53:46.000Z',
    name: 'Royal Finish LLC',
    tagline: 'Fast apartment turnarounds, 24/7',
    rating: 4.8,
    reviewCount: 248,
    jobsCompleted: 410,
    responseTime: 'Under 1 hour',
    areas: ['jlt', 'business-bay', 'dubai-marina', 'jvc'],
    services: ['interior-painting', 'apartment-painting', 'commercial-painting'],
    priceRange: 'AED 12 – 22 / sqft',
    verified: true,
    insured: true,
    yearsExperience: 8,
    badge: 'premium',
    initials: 'RF',
    accent: 'from-sky-500 to-indigo-600',
    seoTitle: 'Royal Finish LLC — Apartment Painting',
    seoDescription:
      'Royal Finish LLC — 4.8★ from 248 reviews. Same-day apartment painting in Marina, JLT, Business Bay and JVC. 410+ jobs completed, 24/7 booking, English & Hindi.',
    bio:
      'Royal Finish LLC was started in 2018 by a former hotel-FM crew lead who saw a gap in fast, reliable apartment painting. Today the team runs three crews on rotating shifts to cover same-day jobs, evening commercial work and weekend bookings. Most studios and 1BR units are painted in a single shift, with photos sent to the customer at every stage. The team works in English, Hindi, Urdu and Arabic.',
    specialities: [
      'Same-day apartment repaints',
      'Tenant move-in / move-out turnover',
      'After-hours commercial work',
      'Landlord-spec colour matching',
      'High-rise apartments (Marina, JLT, Business Bay)',
    ],
    certifications: [
      'Dubai Trade License (Active)',
      'AED 1.5M Third-Party Liability Insurance',
      'DMCC Approved Contractor',
      'Dulux Trade Partner',
    ],
    paintBrands: ['Dulux', 'Jotun', 'Asian Paints', 'Caparol'],
    warranty: '12-month interior workmanship warranty',
    reviews: [
      {
        author: 'Lina Hassan',
        rating: 5,
        date: '2026-05-02',
        body: 'Booked Royal Finish on a Saturday at 9am and they finished my 1BR by 6pm same day. Photos every hour. Floor was spotless when I came home. Would absolutely use again.',
        project: '1BR apartment, JLT',
      },
      {
        author: 'Marcus Adebayo',
        rating: 5,
        date: '2026-04-22',
        body: 'Used Royal for our office in Business Bay. They worked Friday night to Sunday morning and we walked into a fully repainted office on Monday with no business interruption.',
        project: 'Office repaint, Business Bay',
      },
      {
        author: 'Hina Qureshi',
        rating: 4,
        date: '2026-03-15',
        body: 'Great team, professional. Tiny touch-up needed on the kitchen door — they came back next day at no charge. Will recommend.',
        project: '2BR apartment, Marina',
      },
    ],
    faqs: [
      {
        question: 'Can Royal Finish actually start the same day?',
        answer:
          'For studios and 1BR apartments booked before 9am, yes — about 70% of the time. Larger 2-3BR jobs typically start within 24-48 hours. The team confirms availability at the quote stage.',
      },
      {
        question: 'Do they paint over the weekend?',
        answer:
          'Yes, Saturday-Sunday is one of their busiest slots. No premium charge for weekend work.',
      },
      {
        question: 'What if my landlord is fussy about the colour?',
        answer:
          'Royal Finish has colour-scanning tools to match existing walls exactly. They keep records of common Dubai landlord-spec off-whites so even the strictest handover inspection passes first time.',
      },
    ],
  },
  {
    slug: 'sahara-coats',
    updatedAt: '2026-05-15T19:03:46.000Z',
    name: 'Sahara Coats',
    tagline: 'Weatherproof exteriors with 5-year warranty',
    rating: 4.7,
    reviewCount: 186,
    jobsCompleted: 295,
    responseTime: 'Under 2 hours',
    areas: ['arabian-ranches', 'mirdif', 'jumeirah', 'jvc'],
    services: ['exterior-painting', 'villa-painting', 'interior-painting'],
    priceRange: 'AED 15 – 28 / sqft',
    verified: true,
    insured: true,
    yearsExperience: 10,
    initials: 'SC',
    accent: 'from-emerald-500 to-teal-700',
    seoTitle: 'Sahara Coats — Exterior Villa Specialist',
    seoDescription:
      'Sahara Coats — 4.7★ from 186 reviews. Specialists in weatherproof exterior coats for Dubai villas. Arabian Ranches, Mirdif, Jumeirah, JVC. 5-year warranty.',
    bio:
      'Sahara Coats has spent a decade focusing on one thing: making Dubai exteriors last. The founder is a former Jotun technical consultant who built the company around premium elastomeric and silicone systems that handle Gulf heat, salt and sandstorms. The team is small (one foreman, four painters) but every job has direct founder oversight. Most exteriors come with a manufacturer-backed warranty of 3-5 years.',
    specialities: [
      'Full villa exterior repaints',
      'Elastomeric weatherproof coats',
      'Crack repair and waterproofing',
      'Boundary walls and gates',
      'Community-compliant colour matching',
    ],
    certifications: [
      'Dubai Trade License (Active)',
      'AED 1M Third-Party Liability Insurance',
      'Jotun Technical Partner',
      'Caparol Authorised Applicator',
      'Emaar Approved Contractor (Arabian Ranches)',
    ],
    paintBrands: ['Jotun Jotashield', 'Caparol Mura', 'Dulux Weathershield', 'Sto-Color'],
    warranty: '12-month interior · 3-5 year exterior coating warranty',
    reviews: [
      {
        author: 'Rahul Khanna',
        rating: 5,
        date: '2026-03-28',
        body: 'Full exterior repaint on our 4BR Ranches villa with the 5-year elastomeric system. They handled the Emaar NOC, finished in 6 days. Survived a sandstorm two months later — no chips, no fade.',
        project: '4BR villa exterior, Arabian Ranches',
      },
      {
        author: 'Karim El-Sayed',
        rating: 4,
        date: '2026-02-09',
        body: 'Sahara was the most thorough team I\'ve worked with — power-wash, crack repair, primer, two top-coats. Took a day longer than estimated but the finish is excellent.',
        project: 'Villa exterior + boundary wall, Mirdif',
      },
      {
        author: 'Sophie Müller',
        rating: 5,
        date: '2026-01-20',
        body: 'Boundary wall repaint between us and the neighbour. They coordinated everything with the next-door owner so we just paid our half. Professional and well-organised.',
        project: 'Boundary wall, Jumeirah',
      },
    ],
    faqs: [
      {
        question: 'How is the 5-year warranty enforced?',
        answer:
          'The warranty is jointly backed by Sahara Coats and the paint manufacturer (Jotun or Caparol). Sahara documents the prep stage with photos and provides a certificate that includes paint codes and batch numbers. Claims are typically resolved within 48 hours.',
      },
      {
        question: 'Do they do interior work too?',
        answer:
          'Yes, but exterior is their speciality. About 70% of Sahara projects are exterior or full-villa. Interior-only jobs are accepted in their service areas with the same quality standards.',
      },
      {
        question: 'What\'s the best time of year to book Sahara?',
        answer:
          'October-March for exteriors. Sahara stops exterior work between June and August because surface temperatures cause paint failure. Interior work continues year-round.',
      },
    ],
  },
  {
    slug: 'crown-decor-painting',
    updatedAt: '2026-05-15T19:13:46.000Z',
    name: 'Crown Decor Painting',
    tagline: 'Italian textures & feature walls',
    rating: 4.9,
    reviewCount: 142,
    jobsCompleted: 210,
    responseTime: 'Under 1 hour',
    areas: ['downtown-dubai', 'palm-jumeirah', 'jumeirah', 'business-bay'],
    services: ['texture-decorative', 'interior-painting', 'villa-painting'],
    priceRange: 'AED 22 – 40 / sqft',
    verified: true,
    insured: true,
    yearsExperience: 15,
    badge: 'top-rated',
    initials: 'CD',
    accent: 'from-fuchsia-500 to-rose-600',
    seoTitle: 'Crown Decor Painting — Marmorino Pros',
    seoDescription:
      'Crown Decor Painting — 4.9★ from 142 reviews. 15 years of Italian decorative work in Downtown, Palm, Jumeirah and Business Bay. Marmorino, gold leaf, stucco.',
    bio:
      'Crown Decor is led by Master Artisan Giovanni Costa, a third-generation Italian decorator who relocated to Dubai in 2009. The company specialises exclusively in high-end decorative work — Stucco Veneziano, Marmorino, gold and silver leaf, hand-painted murals and bespoke ceiling finishes. Every project is led personally by Giovanni or his senior apprentice, and most clients are referred by interior designers and architects.',
    specialities: [
      'Stucco Veneziano (mirror-polish)',
      'Marmorino lime plaster (matte and burnished)',
      'Gold and silver leaf application',
      'Hand-painted murals',
      'Bespoke ceiling and dome work',
    ],
    certifications: [
      'Dubai Trade License (Active)',
      'AED 1M Third-Party Liability Insurance',
      'San Marco Italy Master Applicator',
      'Oikos Authorised Partner',
      'Emaar Approved Decorator',
    ],
    paintBrands: ['San Marco Italy', 'Oikos', 'Valpaint', 'Caparol Capadecor'],
    warranty: '24-month decorative workmanship warranty',
    reviews: [
      {
        author: 'Sara Lindgren',
        rating: 5,
        date: '2026-05-02',
        body: 'Marmorino in our penthouse foyer. Giovanni personally prepared three sample boards in our home, picked the perfect colour with us, and the result is a work of art. The wall is now the centrepiece of every dinner party.',
        project: 'Marmorino foyer, Downtown penthouse',
      },
      {
        author: 'Mohammed Al-Otaibi',
        rating: 5,
        date: '2026-04-11',
        body: 'Gold leaf ceiling in our Palm villa. The patience and craftsmanship is incredible — 9 days of one person working alone. The ceiling looks like it belongs in a five-star hotel.',
        project: 'Gold leaf ceiling, Palm Jumeirah',
      },
      {
        author: 'Anna Petrova',
        rating: 5,
        date: '2026-03-22',
        body: 'Stucco Veneziano in our master bedroom — it has the depth and shine of polished marble but it\'s soft to the touch. Giovanni explained every layer and stage. Premium service from start to finish.',
        project: 'Stucco bedroom, Business Bay',
      },
    ],
    faqs: [
      {
        question: 'Why is Crown Decor more expensive than other painters?',
        answer:
          'Decorative work is hand-applied over 3-7 days per wall, often by a master artisan working alone. Materials are imported from Italy. Crown Decor is positioned at the premium end of decorative work — typical projects start AED 22/sqft and go up to AED 120/sqft for gold leaf.',
      },
      {
        question: 'Can I see Crown\'s previous work?',
        answer:
          'Yes — Giovanni keeps a portfolio of completed projects and can arrange a visit to a completed home with permission of the previous client. Sample boards are also prepared on your wall before signing.',
      },
      {
        question: 'How long does a Crown Decor project take?',
        answer:
          'A single decorative feature wall is 3-5 days. A full foyer or stairwell is 7-10 days. Ceiling work with leaf application can take 2-3 weeks. Lead time to book the team is typically 4-6 weeks.',
      },
    ],
  },
];
