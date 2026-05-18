// Per-BHK cost-page content. Each generates a dedicated landing page
// at /painting-cost-{slug}/ targeting the exact-match search query.
//
// Search intent these target:
//   "1bhk painting price dubai", "1 bhk painting cost dubai",
//   "2bhk painting price dubai", "3bhk painting cost dubai"
// — all very common UAE colloquialisms (BHK = Bedroom-Hall-Kitchen,
// inherited from Indian property terminology that dominates UAE classifieds).

export type BHKPage = {
  slug: string;            // URL segment (1bhk, 2bhk, 3bhk)
  bhk: string;             // Display label: '1 BHK', '2 BHK', etc.
  rooms: string;           // 'one-bedroom', 'two-bedroom', etc.
  fromAED: number;         // Honest minimum
  toAED: number;           // Realistic maximum
  duration: string;
  paintLitres: string;     // approx
  crewSize: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  breakdown: { item: string; cost: string; note: string }[];
  whatsIncluded: string[];
  whatsNotIncluded: string[];
  examples: { tier: string; spec: string; price: string }[];
  faqs: { question: string; answer: string }[];
};

export const bhkPages: BHKPage[] = [
  {
    slug: '1bhk',
    bhk: '1 BHK',
    rooms: 'one-bedroom',
    fromAED: 1499,
    toAED: 2500,
    duration: '1 working day',
    paintLitres: '15–20 litres',
    crewSize: '2 painters',
    seoTitle: '1 BHK Painting Cost in Dubai — From AED 1,499',
    seoDescription:
      '1 BHK painting cost in Dubai — AED 1,499 to 2,500 fixed in writing. Two coats of premium Jotun or Dulux, walls + ceiling, one-day finish. No deposit.',
    intro:
      'A standard 1 BHK apartment in Dubai costs AED 1,499 to AED 2,500 to paint, fixed in writing before work starts. This covers all walls, ceiling, and minor patch repairs across the bedroom, hall and kitchen. The job is typically completed in a single working day with a 2-person crew using premium emulsion paint (Jotun Lady or Dulux Diamond). The price you see is the price you pay — no extras added on the day.',
    breakdown: [
      { item: 'Paint (premium emulsion)', cost: 'AED 350 – 550', note: '15-20 litres, two coats, two colours' },
      { item: 'Labour (2 painters × 1 day)', cost: 'AED 700 – 1,100', note: '8-10 hours on site' },
      { item: 'Surface prep & filling', cost: 'AED 150 – 250', note: 'Nail holes, crack repair, sanding' },
      { item: 'Furniture protection & post-clean', cost: 'AED 100 – 200', note: 'Sheets, tape, vacuum on completion' },
      { item: 'Building access (lift, NOC)', cost: 'AED 0 – 100', note: 'Most buildings included; some clusters fee' },
      { item: 'Fixed quote margin', cost: 'AED 199 – 300', note: 'Vendor cushion; insurance against scope creep' },
    ],
    whatsIncluded: [
      'Premium water-based emulsion (Jotun Lady or Dulux Diamond)',
      'Two coats on walls and ceiling',
      'Furniture moved 60cm from walls and covered with sheets',
      'Floor protection (breathable for marble, adhesive for carpet)',
      'Crack and nail-hole repair before priming',
      'Tape on skirtings, door frames and switch plates',
      'Post-clean: vacuumed floors, dust-free surfaces',
      'Same-day touch-ups before sign-off',
      '12-month workmanship warranty in writing',
    ],
    whatsNotIncluded: [
      'Wallpaper removal (quoted separately at AED 8-15 per sqm)',
      'Specialty finishes — Marmorino, Stucco Veneziano (different service)',
      'Bathroom regrouting, kitchen unit refinishing (different trades)',
      'Significant water-damage repair (quoted after site survey)',
      'Furniture moving for heavy items (recommend separate movers)',
    ],
    examples: [
      { tier: 'Essential — Marina studio-style 1BR', spec: 'White emulsion, one coat over good walls', price: 'AED 1,499' },
      { tier: 'Standard — JLT or Business Bay 1BR', spec: 'Two coats Jotun Lady, walls + ceiling, prep', price: 'AED 1,799' },
      { tier: 'Premium — Downtown 1BR', spec: 'Two coats Caparol, ceiling-height accents, expedited', price: 'AED 2,300' },
      { tier: 'Penthouse — Marina high-floor', spec: 'Double-height walls, premium paint, scaffold', price: 'AED 2,500' },
    ],
    faqs: [
      {
        question: 'How much exactly does it cost to paint a 1 BHK in Dubai?',
        answer:
          'For a standard 1 BHK apartment in Dubai, the fixed-quote price is AED 1,499 to AED 2,500. The typical mid-range is AED 1,799 for a 50-65 sqm 1BR in JLT, Business Bay or Marina with two coats of premium emulsion on walls and ceiling, full prep, and post-clean. Older buildings, high-floor units, or apartments needing extensive patch repair sit at the upper end of the range.',
      },
      {
        question: 'How long does it take to paint a 1 BHK?',
        answer:
          'One working day for almost every 1 BHK in Dubai. A 2-person crew arrives at 8-9am, completes prep, two coats and final clean before 5-6pm. The apartment is dry, dust-free and habitable the same evening. Larger 1BR units (above 75 sqm) or those needing ceiling work in a separate visit may take 1.5 days.',
      },
      {
        question: 'Is AED 1,499 really the minimum, or are there hidden fees?',
        answer:
          'AED 1,499 is the honest minimum for a 1 BHK and there are zero hidden fees. The quote is fixed in writing before work starts. If our vendor tries to add charges on the day, we cover the difference from our quality fund. This is the single biggest reason customers come back and refer us.',
      },
      {
        question: 'What paint brands are included in the 1 BHK quote?',
        answer:
          'Premium tier: Jotun Lady (Norwegian, almost odourless), Dulux Diamond (scrubbable), Caparol Premiumweiss (German, ultra-matt). All are low-VOC and safe to re-occupy the same evening. For budget builds, Asian Paints Royale and Berger Silk are options at the lower end of the range.',
      },
      {
        question: 'Can I choose any colour for my 1 BHK?',
        answer:
          'Yes. The quote includes up to two colours (e.g. one feature wall accent plus standard walls). Additional custom-tinted colours add AED 50-100 per colour for the tinting service. Pick your colour 48 hours before the start date so the supplier can tint and the paint can settle.',
      },
      {
        question: 'Do you do small jobs in a 1 BHK like just one room?',
        answer:
          'Yes. Single room repaints in a 1 BHK start at AED 499 for a half-day visit. Wall touch-ups and patch repairs start at AED 299. No minimum spend — if you only need the bedroom or the hall, we will quote just that.',
      },
    ],
  },

  {
    slug: '2bhk',
    bhk: '2 BHK',
    rooms: 'two-bedroom',
    fromAED: 2499,
    toAED: 3800,
    duration: '1–2 working days',
    paintLitres: '25–35 litres',
    crewSize: '2–3 painters',
    seoTitle: '2 BHK Painting Cost in Dubai — From AED 2,499',
    seoDescription:
      '2 BHK painting cost in Dubai — AED 2,499 to 3,800 fixed in writing. Two coats premium paint, walls + ceiling, 1-2 day finish. No deposit, 12-month warranty.',
    intro:
      'A standard 2 BHK apartment in Dubai costs AED 2,499 to AED 3,800 to paint, fixed in writing before work starts. This covers both bedrooms plus the hall, dining area and kitchen — walls and ceiling in two coats of premium emulsion. A 2-3 person crew completes the work in one to two days. Larger 2 BHKs above 110 sqm or units with significant prep work sit at the upper end of the range.',
    breakdown: [
      { item: 'Paint (premium emulsion)', cost: 'AED 600 – 900', note: '25-35 litres, two coats, up to three colours' },
      { item: 'Labour (2-3 painters × 1-2 days)', cost: 'AED 1,200 – 1,900', note: '14-20 hours on site' },
      { item: 'Surface prep & filling', cost: 'AED 250 – 400', note: 'More walls = more prep work' },
      { item: 'Furniture protection & post-clean', cost: 'AED 200 – 350', note: 'Larger apartment, more protection material' },
      { item: 'Building access (lift, NOC)', cost: 'AED 0 – 150', note: 'Most buildings included; some clusters fee' },
      { item: 'Fixed quote margin', cost: 'AED 249 – 400', note: 'Vendor cushion; insurance against scope creep' },
    ],
    whatsIncluded: [
      'Premium water-based emulsion (Jotun Lady or Dulux Diamond)',
      'Two coats on all walls and ceilings across all rooms',
      'Furniture moved 60cm from walls and covered with sheets',
      'Floor protection (breathable for marble, adhesive for carpet)',
      'Crack and nail-hole repair before priming',
      'Door, frame and skirting touch-up if needed',
      'Post-clean: vacuumed floors, dust-free surfaces',
      'Same-day touch-ups before sign-off',
      '12-month workmanship warranty in writing',
    ],
    whatsNotIncluded: [
      'Wallpaper removal (quoted separately at AED 8-15 per sqm)',
      'Specialty finishes — Marmorino, Stucco Veneziano (different service)',
      'Bathroom regrouting, kitchen unit refinishing',
      'Significant water-damage repair (quoted after site survey)',
      'Built-in wardrobe internal painting (quoted separately)',
    ],
    examples: [
      { tier: 'Essential — Mirdif 2BR townhouse', spec: 'One coat refresh, off-white, walls only', price: 'AED 2,499' },
      { tier: 'Standard — Marina 2BR apartment', spec: 'Two coats Jotun Lady, walls + ceiling, prep', price: 'AED 2,899' },
      { tier: 'Premium — Downtown 2BR', spec: 'Two coats Caparol, accent walls, expedited', price: 'AED 3,500' },
      { tier: 'High-floor — Burj-view 2BR', spec: 'Double-height walls, scaffold, premium paint', price: 'AED 3,800' },
    ],
    faqs: [
      {
        question: 'How much exactly does it cost to paint a 2 BHK in Dubai?',
        answer:
          'For a standard 2 BHK apartment in Dubai, the fixed-quote price is AED 2,499 to AED 3,800. The typical mid-range is AED 2,899 for an 85-100 sqm 2BR in Marina, Downtown or Business Bay with two coats of premium emulsion on walls and ceiling, full prep, and post-clean across both bedrooms, hall, dining and kitchen.',
      },
      {
        question: 'How long does it take to paint a 2 BHK?',
        answer:
          'Most 2 BHKs are completed in one to two working days. A 3-person crew finishes a standard 2BR in a single day for walls only. Two days for walls and ceilings combined, especially with feature wall colours or high ceilings. The apartment is dry and habitable the same evening.',
      },
      {
        question: 'Can I do my 2 BHK over the weekend?',
        answer:
          'Yes. Saturday-Sunday weekend bookings are common for 2 BHKs because many owners prefer to be present during the work. There is no weekend premium. Some buildings restrict noisy work on Fridays so we confirm community rules during the quote stage.',
      },
      {
        question: 'What if my 2 BHK has different colours in each room?',
        answer:
          'No problem. The standard quote includes up to three colours (one feature wall plus standard walls in each main room). Additional custom-tinted colours add AED 50-100 per colour. Many 2BR owners choose two coordinating colours plus white for the kitchen and bathrooms.',
      },
      {
        question: 'Is the kitchen included in the 2 BHK paint quote?',
        answer:
          'Yes — kitchen walls and ceiling are included in the standard 2 BHK price. We use moisture-resistant emulsion (Jotun Fenomastic Hygiene or Dulux Easycare Kitchen) for kitchen walls. Repainting the kitchen cabinet doors themselves is a separate service.',
      },
      {
        question: 'Can I get a quote for just one bedroom of my 2 BHK?',
        answer:
          'Yes. Single-room repaints in a 2 BHK start at AED 499. Many owners book to refresh just the master bedroom or the kid\'s room rather than the whole apartment. No minimum spend.',
      },
    ],
  },

  {
    slug: '3bhk',
    bhk: '3 BHK',
    rooms: 'three-bedroom',
    fromAED: 3499,
    toAED: 5500,
    duration: '2 working days',
    paintLitres: '35–50 litres',
    crewSize: '3 painters',
    seoTitle: '3 BHK Painting Cost in Dubai — From AED 3,499',
    seoDescription:
      '3 BHK painting cost in Dubai — AED 3,499 to 5,500 fixed in writing. Two coats premium paint, all rooms covered, 2-day finish. No deposit, 12-month warranty.',
    intro:
      'A standard 3 BHK apartment in Dubai costs AED 3,499 to AED 5,500 to paint, fixed in writing before work starts. This covers three bedrooms plus the hall, dining area and kitchen — walls and ceiling in two coats of premium emulsion. A 3-person crew completes the work in two working days. Larger 3 BHKs above 150 sqm, premium buildings with double-height ceilings, or units needing significant prep work sit at the upper end of the range.',
    breakdown: [
      { item: 'Paint (premium emulsion)', cost: 'AED 900 – 1,300', note: '35-50 litres, two coats, up to four colours' },
      { item: 'Labour (3 painters × 2 days)', cost: 'AED 1,700 – 2,700', note: '24-30 hours total crew time' },
      { item: 'Surface prep & filling', cost: 'AED 350 – 550', note: 'Across all bedrooms and common areas' },
      { item: 'Furniture protection & post-clean', cost: 'AED 300 – 500', note: 'Large floor plate, more protection material' },
      { item: 'Building access (lift, NOC)', cost: 'AED 0 – 200', note: 'Often free; some clusters charge' },
      { item: 'Fixed quote margin', cost: 'AED 249 – 450', note: 'Vendor cushion; insurance against scope creep' },
    ],
    whatsIncluded: [
      'Premium water-based emulsion (Jotun Lady or Dulux Diamond)',
      'Two coats on all walls and ceilings — all three bedrooms + common areas',
      'Furniture moved 60cm from walls and covered with sheets',
      'Floor protection across the whole apartment',
      'Crack and nail-hole repair before priming',
      'Door, frame and skirting light touch-up if needed',
      'Up to four colours included (typical: master, kids, study, common areas)',
      'Post-clean: vacuumed floors, dust-free surfaces',
      'Same-day touch-ups before sign-off',
      '12-month workmanship warranty in writing',
    ],
    whatsNotIncluded: [
      'Wallpaper removal (quoted separately at AED 8-15 per sqm)',
      'Italian decorative finishes — Marmorino, Stucco Veneziano',
      'Bathroom regrouting, kitchen cabinet refinishing',
      'Significant water-damage repair (quoted after site survey)',
      'Maid\'s room (often quoted separately; add AED 400-600)',
      'Balcony walls and outdoor patios (quoted as exterior work)',
    ],
    examples: [
      { tier: 'Essential — JVC 3BR townhouse', spec: 'One coat refresh, off-white, walls only', price: 'AED 3,499' },
      { tier: 'Standard — Marina 3BR apartment', spec: 'Two coats Jotun Lady, all rooms, full prep', price: 'AED 4,200' },
      { tier: 'Premium — Downtown 3BR', spec: 'Two coats Caparol, feature walls, expedited', price: 'AED 4,800' },
      { tier: 'Penthouse — Palm view 3BR', spec: 'High ceilings, scaffold, premium paint', price: 'AED 5,500' },
    ],
    faqs: [
      {
        question: 'How much exactly does it cost to paint a 3 BHK in Dubai?',
        answer:
          'For a standard 3 BHK apartment in Dubai, the fixed-quote price is AED 3,499 to AED 5,500. The typical mid-range is AED 4,200 for a 130-150 sqm 3BR in Marina, JLT or Business Bay with two coats of premium emulsion across all three bedrooms and the common areas. Premium downtown apartments and double-height penthouses sit at the upper end.',
      },
      {
        question: 'How long does it take to paint a 3 BHK?',
        answer:
          'Two working days for a standard 3 BHK. A 3-person crew prepares and paints the bedrooms first (day one), then common areas plus final touch-ups (day two). The apartment is fully ready by the evening of day two. Larger 3 BHKs (above 160 sqm) may need a third day for ceilings or feature work.',
      },
      {
        question: 'Can I live in my 3 BHK while it is being painted?',
        answer:
          'Yes — most 3 BHK families stay through the project. We schedule bedrooms first so you have a clean, painted space to sleep in by night one. The whole apartment is low-odour (we only use water-based emulsions) so the air quality stays comfortable.',
      },
      {
        question: 'What about my kids\' rooms — is the paint safe?',
        answer:
          'Yes. We default to Jotun Fenomastic Hygiene for children\'s rooms — it is anti-bacterial, low-VOC, Greenguard Gold certified and safe to re-occupy the same evening. For nurseries we can specify the zero-VOC tier at no extra cost.',
      },
      {
        question: 'Do you cover the maid\'s room in the 3 BHK quote?',
        answer:
          'The maid\'s room is usually quoted separately because it is small, often accessed differently, and many owners only repaint it during tenant turnover. Adding the maid\'s room to a 3 BHK package typically costs an additional AED 400-600 and adds half a day to the schedule.',
      },
      {
        question: 'Can I split my 3 BHK painting across two weekends?',
        answer:
          'Yes. Many busy families split the work: bedrooms one weekend, common areas the next. The quote is held for 30 days and you can split the work however suits your schedule, with no price change.',
      },
    ],
  },
];
