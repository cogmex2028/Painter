// Universal pricing data: honest from-to ranges by property type.
// Designed for "no bait, no switch" positioning — every number is genuinely
// deliverable by our vendor network, with the upper bound covering 90% of jobs.
//
// SEO note: customers heavily search "studio painting cost dubai", "1bhk
// painting price dubai", "villa painting cost". This data is rendered on the
// homepage, /pricing, and per-service pages to capture that intent.

export type PriceRow = {
  property: string;       // human label (used as the row title)
  from: number;           // honest minimum (AED)
  to: number;             // realistic upper bound (AED)
  duration: string;       // expected time
  popular?: boolean;      // highlight in the table
  note?: string;          // small print under the row
};

export const pricingMatrix: PriceRow[] = [
  { property: 'Studio apartment', from: 999, to: 1500, duration: '1 day', note: 'Walls + ceiling, two coats premium emulsion' },
  { property: '1BR apartment',    from: 1499, to: 2500, duration: '1 day', popular: true, note: 'Walls + ceiling, full prep, post-clean' },
  { property: '2BR apartment',    from: 2499, to: 3800, duration: '1–2 days', popular: true, note: 'Walls + ceiling, furniture protected' },
  { property: '3BR apartment',    from: 3499, to: 5500, duration: '2 days', note: 'Walls + ceiling, light trim work' },
  { property: '3BR villa (full)', from: 6999, to: 12000, duration: '3–5 days', note: 'Interior + exterior + boundary wall' },
  { property: '4–5BR villa',      from: 11000, to: 22000, duration: '5–8 days', note: 'Premium villa package' },
  { property: '6–7BR villa',      from: 22000, to: 38000, duration: '8–12 days', note: 'Large luxury villa, includes scaffold' },
  { property: 'Decorative wall',  from: 35, to: 120, duration: '3–7 days / wall', note: 'AED per sqft. Marmorino, Stucco, gold leaf' },
];

// The five promises that close the sale (shown as a horizontal strip on
// homepage + pricing page). Order matters — first is the trust killer.
export const trustOffers = [
  {
    title: 'Fixed quote, in writing',
    body: 'Your quote never goes up on the day. If a painter raises the price after arriving, we cover the gap.',
    icon: 'shield',
  },
  {
    title: 'No deposit, pay on completion',
    body: 'Most painters take 30% upfront. Our network takes zero. You pay only when the work is signed off.',
    icon: 'wallet',
  },
  {
    title: 'Free in-home survey',
    body: 'A senior consultant visits and measures, free of charge. No commitment, no pressure to book.',
    icon: 'home',
  },
  {
    title: '12-month workmanship warranty',
    body: 'Any peeling, flaking or visible defect within 12 months — we send a painter back at no cost.',
    icon: 'certificate',
  },
  {
    title: 'Reply in 1 hour or AED 200 credit',
    body: 'WhatsApp us during opening hours and get a written quote within 60 minutes — or your next job is AED 200 lighter.',
    icon: 'lightning',
  },
] as const;

// Hero pricing anchor — used on home + pricing page hero
export const pricingHeadline = {
  studio: 999,
  oneBR: 1499,
  villa: 6999,
};
