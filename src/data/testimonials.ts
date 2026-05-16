export type Testimonial = {
  author: string;
  initials: string;
  area: string;
  property: string;
  rating: number;
  date: string;
  quote: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    author: 'Aisha Al-Mansoori',
    initials: 'AM',
    area: 'Dubai Marina',
    property: '2BR apartment',
    rating: 5,
    date: '2026-04-12',
    quote:
      'Got four quotes in under an hour. The painter we chose finished our 2BR in a single day, kept everything spotless, and the finish is flawless.',
    accent: 'from-rose-400 to-pink-600',
  },
  {
    author: 'Rahul Khanna',
    initials: 'RK',
    area: 'Arabian Ranches',
    property: '4BR villa',
    rating: 5,
    date: '2026-03-28',
    quote:
      'Mr Painter Dubai saved us thousands compared to the first quote we got directly. Vendor was insured, on-time, and the exterior still looks brand new after a sandstorm.',
    accent: 'from-amber-400 to-orange-600',
  },
  {
    author: 'Sara Lindgren',
    initials: 'SL',
    area: 'Downtown Dubai',
    property: 'Penthouse',
    rating: 5,
    date: '2026-05-02',
    quote:
      'We needed Italian marmorino done right. The decorator they matched us with was a true craftsman — every wall is gallery-quality.',
    accent: 'from-sky-400 to-indigo-600',
  },
];
