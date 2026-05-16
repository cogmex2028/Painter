export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  startingPrice: number;
  unit: string;
  icon: string;
  popular?: boolean;
  // Per-page unique content
  seoTitle: string;
  seoDescription: string;
  intro: string;
  bestFor: string[];
  inclusions: string[];
  process: { step: string; detail: string }[];
  priceTable: { tier: string; scope: string; from: number; unit: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: 'interior-painting',
    name: 'Interior Painting',
    short: 'Walls, ceilings & rooms',
    description:
      'Premium interior painting with low-VOC paints, dust-sheet protection and same-day touch-ups.',
    startingPrice: 12,
    unit: 'AED / sqft',
    icon: 'roller',
    popular: true,
    seoTitle: 'Interior Painting Dubai — From AED 12/sqft',
    seoDescription:
      'Interior painting in Dubai from AED 12/sqft. Low-VOC paints, dust-sheet protection, single-day finish on most apartments. Free quotes from 5 verified pros.',
    intro:
      'Interior painting is the fastest, highest-impact way to refresh a Dubai apartment or villa. Our verified painters use low-VOC, JotaShield, Jotun Lady or Dulux Diamond paints, protect every floor and furniture piece with dust-sheets, and most 1-2 bedroom apartments are finished within a single day. Every Mr Painter Dubai interior job is backed by a 12-month workmanship warranty.',
    bestFor: [
      'Move-in and move-out repaints',
      'Tenant handover restoration',
      'Feature walls & colour refresh',
      'Ceiling whitening & cornice work',
      'Kids rooms with anti-bacterial paint',
    ],
    inclusions: [
      'Surface inspection and minor crack filling',
      'Full furniture and floor protection',
      'Primer coat where required',
      'Two coats of premium emulsion (your choice of brand)',
      'Same-day touch-up after furniture replacement',
      'Site clean-up and waste disposal',
      '12-month workmanship warranty',
    ],
    process: [
      { step: 'Site survey', detail: 'Free 20-minute visit to measure walls, photograph the space and confirm scope.' },
      { step: 'Written quote', detail: 'Fixed-price quote within 2 hours, locked in writing with no hidden fees.' },
      { step: 'Prep & protect', detail: 'Furniture moved, floors sheeted, cracks filled, tape applied to edges.' },
      { step: 'Paint', detail: 'Two coats of your chosen paint applied with rollers and brushes by a 2-3 person crew.' },
      { step: 'Walk-through', detail: 'Final inspection together — anything you flag is touched up before sign-off.' },
    ],
    priceTable: [
      { tier: 'Studio apartment', scope: 'Walls only, white emulsion', from: 1200, unit: 'AED total' },
      { tier: '1BR apartment', scope: 'Walls + ceiling, premium paint', from: 1800, unit: 'AED total' },
      { tier: '2BR apartment', scope: 'Walls + ceiling, premium paint', from: 2600, unit: 'AED total' },
      { tier: '3BR villa', scope: 'All interior walls + ceilings', from: 5400, unit: 'AED total' },
    ],
    faqs: [
      {
        question: 'How long does interior painting take in Dubai?',
        answer:
          'A studio or 1BR apartment is typically completed in 1 working day. 2-3BR apartments take 1-2 days. Larger villas usually take 3-5 days depending on prep, ceilings and feature walls.',
      },
      {
        question: 'Do you move furniture, or do I need to?',
        answer:
          'Our painters move and protect lightweight furniture as part of the standard package. For heavy wardrobes, beds or large items, we recommend you arrange a mover, or we can include one in the quote for an extra fee.',
      },
      {
        question: 'Which paint brands do you use?',
        answer:
          'We work with Jotun (Lady, Fenomastic), Dulux (Diamond, Easycare), Caparol and Asian Paints. All are low-VOC and approved by Dubai Municipality. You choose the brand in the quote stage.',
      },
      {
        question: 'Is the smell strong after painting?',
        answer:
          'Our default emulsions are low-VOC and almost odourless. Most homes are habitable the same evening. Oil-based finishes (used only for doors and trims) have a stronger smell and need 24-48 hours of ventilation.',
      },
      {
        question: 'Can I paint just one feature wall?',
        answer:
          'Yes — feature walls are one of the most popular requests. Minimum charge applies (typically AED 350-500 depending on area) but the painter will quote accurately during the free site survey.',
      },
    ],
  },
  {
    slug: 'exterior-painting',
    name: 'Exterior Painting',
    short: 'Facades, walls & boundaries',
    description:
      'Weather-grade exterior coatings built for Dubai\'s sun and humidity. 5-year warranty available.',
    startingPrice: 18,
    unit: 'AED / sqft',
    icon: 'building',
    seoTitle: 'Exterior Painting Dubai — 5-Year Coats',
    seoDescription:
      'Exterior painting for Dubai villas and buildings from AED 18/sqft. UV-resistant elastomeric coatings, scaffolding included, up to 5-year warranty.',
    intro:
      'Dubai\'s sun, sand and salt strip exterior paint faster than almost anywhere else in the world. Mr Painter Dubai vendors apply elastomeric, UV-resistant coatings (Jotun Jotashield, Dulux Weathershield, Caparol Mura) over a sealed primer to give your facade 5+ years of protection. Scaffolding, access permits and post-clean are always included in the quote.',
    bestFor: [
      'Full villa repaints',
      'Building facades and compounds',
      'Boundary walls and gates',
      'Roof terraces and parapets',
      'Sun-damaged surface restoration',
    ],
    inclusions: [
      'Power-wash and surface preparation',
      'Crack repair and waterproof sealant',
      'Anti-alkali primer coat',
      'Two coats of elastomeric exterior paint',
      'Scaffolding rental and erection',
      'Free building permit application support',
      'Up to 5-year manufacturer warranty',
    ],
    process: [
      { step: 'Site assessment', detail: 'On-site inspection of cracks, mould and existing coating condition.' },
      { step: 'Permit & scaffold', detail: 'For buildings, we apply for the Dubai Municipality permit and arrange scaffolding.' },
      { step: 'Wash & prep', detail: 'Power-wash, scrape failing paint, fill cracks with weather-resistant filler.' },
      { step: 'Prime & paint', detail: 'Anti-alkali primer followed by two coats of elastomeric finish.' },
      { step: 'Inspection & warranty', detail: 'Final walk-around, warranty certificate issued (1-5 years depending on system).' },
    ],
    priceTable: [
      { tier: 'Boundary wall (per side)', scope: 'Up to 30 sqm, one colour', from: 1200, unit: 'AED' },
      { tier: '3-4BR villa exterior', scope: 'Full facade, primer + 2 coats', from: 8500, unit: 'AED total' },
      { tier: '5-7BR villa exterior', scope: 'Full facade including parapets', from: 14000, unit: 'AED total' },
      { tier: 'G+1 building', scope: 'Facade only, scaffold included', from: 28000, unit: 'AED total' },
    ],
    faqs: [
      {
        question: 'When is the best time to paint exterior in Dubai?',
        answer:
          'October through April offers the most stable conditions — cooler temperatures, lower humidity and minimal sandstorms. We avoid painting between 11am and 3pm in summer when surface temperatures can exceed 60°C and cause paint failure.',
      },
      {
        question: 'How long will exterior paint last in Dubai?',
        answer:
          'Standard exterior paint lasts 3-4 years. Premium elastomeric systems (Jotun Jotashield Extreme, Dulux Weathershield Max) with proper prep last 5-7 years and can be backed by manufacturer warranty.',
      },
      {
        question: 'Do I need a Dubai Municipality permit?',
        answer:
          'For villas inside a community, usually no — your community manager simply needs to be notified. For multi-storey buildings, a painting permit is mandatory. Mr Painter Dubai vendors handle the permit application for you.',
      },
      {
        question: 'Does the warranty cover sun damage?',
        answer:
          'Yes. Premium 5-year systems cover colour fade, peeling and cracking caused by sun and weather, provided the surface was properly prepared. We document the prep stage with photos so warranty claims are easy.',
      },
      {
        question: 'Can you match my existing colour?',
        answer:
          'Yes. Our vendors carry portable spectrophotometers that scan your existing colour and produce an exact match using Jotun or Dulux tinting machines — no more guessing.',
      },
    ],
  },
  {
    slug: 'villa-painting',
    name: 'Villa Painting',
    short: 'Full villa, inside & out',
    description:
      'Complete villa packages from 2BR to 7BR. Includes prep, primer, two coats and post-clean.',
    startingPrice: 6500,
    unit: 'AED / villa',
    icon: 'home',
    popular: true,
    seoTitle: 'Villa Painting Dubai — From AED 6,500',
    seoDescription:
      'Complete villa painting in Dubai — interior, exterior, ceilings, woodwork. Fixed-price packages from AED 6,500 for a 3BR. 12-month workmanship warranty.',
    intro:
      'A full villa repaint is a project that demands planning. Mr Painter Dubai villa packages bundle interior walls, ceilings, doors, exterior facade and boundary walls into one fixed-price quote. A typical 4-bedroom villa is completed in 5-8 working days with a 3-4 person crew, and you receive a single warranty certificate covering both interior workmanship and exterior coating performance.',
    bestFor: [
      'Pre-handover and post-handover repaints',
      'Pre-sale or pre-rental refresh',
      'Full-villa colour change',
      'Compound and community villas',
      'Heritage and Arabesque facade restoration',
    ],
    inclusions: [
      'Interior walls + ceilings (two coats)',
      'Exterior facade (elastomeric, two coats)',
      'Door, frame and skirting touch-up',
      'Power-wash and crack repair outside',
      'Furniture protection and floor sheeting',
      'Final post-clean and waste removal',
      'Single warranty certificate for whole villa',
    ],
    process: [
      { step: 'Walk-through', detail: 'On-site walk-through with measurements, colour cards and scope agreement.' },
      { step: 'Detailed quote', detail: 'Single quote covering interior, exterior, materials and timeline.' },
      { step: 'Day 1-2: Exterior prep', detail: 'Power-wash, scaffold, crack filling on outside walls.' },
      { step: 'Day 2-5: Interior', detail: 'Room-by-room interior painting, ceiling first, walls second.' },
      { step: 'Day 5-7: Exterior coat', detail: 'Primer and two coats of elastomeric, doors and trim refreshed.' },
      { step: 'Final clean & sign-off', detail: 'Crew removes sheets, cleans floors, walks through with you for sign-off.' },
    ],
    priceTable: [
      { tier: '2BR villa', scope: 'Interior + exterior bundle', from: 6500, unit: 'AED total' },
      { tier: '3BR villa', scope: 'Interior + exterior bundle', from: 9800, unit: 'AED total' },
      { tier: '4-5BR villa', scope: 'Interior + exterior + boundary wall', from: 14500, unit: 'AED total' },
      { tier: '6-7BR villa', scope: 'Premium full villa package', from: 22000, unit: 'AED total' },
    ],
    faqs: [
      {
        question: 'Can I live in the villa while it\'s being painted?',
        answer:
          'Yes, most families stay through the project. Our crews work room-by-room so you always have a clean, painted space to retreat to. Bedrooms are typically painted in the first two days so sleeping isn\'t disrupted.',
      },
      {
        question: 'How is the quote calculated for a villa?',
        answer:
          'We use a combination of square footage (walls and ceilings), exterior facade area, and condition. The free site survey gives us the exact numbers so the quote is fixed — no per-day rates or surprise additions.',
      },
      {
        question: 'Do you paint communal villas in Emaar / Dubai Properties communities?',
        answer:
          'Yes. We have vendors with active No Objection Certificates (NOCs) for all major communities including Arabian Ranches, Mudon, Reem, Town Square, Mira and The Sustainable City. They handle the community paperwork.',
      },
      {
        question: 'What about gardens and pools?',
        answer:
          'We cover and protect outdoor furniture, garden plants and pool edges. Pool surrounds (gazebo, decking) can be included in the quote — just mention them during the survey.',
      },
      {
        question: 'Can I split interior and exterior across different months?',
        answer:
          'Yes. Many homeowners do the exterior in winter (Oct-Mar) and interior in summer. We hold the quote pricing for 90 days so you can split the project without re-quoting.',
      },
    ],
  },
  {
    slug: 'apartment-painting',
    name: 'Apartment Painting',
    short: 'Studios to 4-bedrooms',
    description:
      'Move-in / move-out friendly. Most apartments finished in 1–2 days with minimal disruption.',
    startingPrice: 1200,
    unit: 'AED / apartment',
    icon: 'apartment',
    seoTitle: 'Apartment Painting Dubai — From AED 1,200',
    seoDescription:
      'Apartment painting in Dubai from AED 1,200 for a studio. Single-day finish on most units, low-odour paints, move-in/move-out friendly. Free quotes in 60 seconds.',
    intro:
      'Apartment painting in Dubai is usually a fast, contained job — most studios and 1BR units are done in a single day with two coats. Mr Painter Dubai vendors specialise in apartment turnaround for tenants, landlords and new owners. We coordinate with building management on lift bookings, access timings and waste disposal so the building stays happy and your job stays on schedule.',
    bestFor: [
      'Tenant move-out restoration',
      'Pre-rental landlord refresh',
      'New-owner colour change',
      'High-rise apartments in Marina, Downtown, JLT',
      'Studio and short-let units',
    ],
    inclusions: [
      'Building management coordination (lift, parking)',
      'Furniture moved within apartment and protected',
      'Wall cleaning and minor patch repair',
      'Two coats of low-odour premium emulsion',
      'Door and frame touch-up if needed',
      'Bin-bag removal from premises',
      '12-month workmanship warranty',
    ],
    process: [
      { step: 'WhatsApp survey', detail: 'Many apartment quotes are confirmed by video walk-through over WhatsApp — no on-site visit needed.' },
      { step: 'Confirm date & lift', detail: 'We book the service lift slot with building security for delivery and equipment.' },
      { step: 'Day of painting', detail: 'Crew arrives by 9am, completes prep, paints, and tidies before 6pm for most 1-2BR units.' },
      { step: 'Inspection', detail: 'Final walk-through with you (or your tenant/landlord via FaceTime if remote).' },
    ],
    priceTable: [
      { tier: 'Studio', scope: 'White emulsion, walls only', from: 1200, unit: 'AED' },
      { tier: '1BR apartment', scope: 'Walls + ceilings, premium paint', from: 1800, unit: 'AED' },
      { tier: '2BR apartment', scope: 'Walls + ceilings, premium paint', from: 2600, unit: 'AED' },
      { tier: '3BR apartment', scope: 'Walls + ceilings + light trim', from: 3800, unit: 'AED' },
      { tier: '4BR apartment', scope: 'Full unit, premium finish', from: 5200, unit: 'AED' },
    ],
    faqs: [
      {
        question: 'Can you paint while I\'m at work?',
        answer:
          'Absolutely. Many apartment jobs are done while the owner or tenant is at work — we coordinate with building security for key handover and lift access, send photos throughout the day, and you walk into a finished apartment.',
      },
      {
        question: 'Do you handle high-rise apartments above 30 floors?',
        answer:
          'Yes — Marina, Downtown, Business Bay and JLT high-rises are our most common jobs. We book the service lift in advance, use lightweight equipment and coordinate with building management on parking and waste.',
      },
      {
        question: 'What if my landlord wants the same exact colour back?',
        answer:
          'Most Dubai landlords specify off-white or a specific Jotun/Dulux code. Send us the colour code or a photo and we\'ll match it. If unknown, our vendors carry colour-scan tools to match the existing wall exactly.',
      },
      {
        question: 'Can I include touch-ups for picture hooks and nail holes?',
        answer:
          'Yes — filling small nail holes and minor patch work is included in the standard quote. Larger damage (water marks, big dents) is quoted separately during the site survey.',
      },
      {
        question: 'Do you do same-day jobs?',
        answer:
          'For studios and 1BR units, yes — book before 9am and many vendors can start the same afternoon. 2BR+ typically needs 1-2 days notice for crew scheduling.',
      },
    ],
  },
  {
    slug: 'commercial-painting',
    name: 'Commercial Painting',
    short: 'Offices, retail & warehouses',
    description:
      'After-hours commercial painting with insurance, MSDS sheets and Dubai Municipality compliance.',
    startingPrice: 15,
    unit: 'AED / sqft',
    icon: 'office',
    seoTitle: 'Commercial Painting Dubai — Office & Retail',
    seoDescription:
      'Commercial painting in Dubai — after-hours and weekend work, full insurance, MSDS docs. Offices, retail, warehouses, schools. Free quotes from vetted contractors.',
    intro:
      'Commercial painting in Dubai has different rules from residential — fire-rated materials, MSDS sheets, third-party liability insurance and after-hours scheduling are all standard requirements. Mr Painter Dubai commercial vendors carry AED 1M+ liability cover, can work nights and weekends to avoid business disruption, and provide a full document pack for your facility manager.',
    bestFor: [
      'Office fit-outs and refreshes',
      'Retail store rebrands',
      'F&B venues during off-hours',
      'Warehouses and logistics hubs',
      'Schools, clinics and government facilities',
    ],
    inclusions: [
      'AED 1M+ third-party liability insurance certificate',
      'Material Safety Data Sheets (MSDS) for all paints',
      'After-hours and weekend scheduling at no premium',
      'Fire-rated or anti-bacterial paints where required',
      'Coordination with facility management and security',
      'Daily progress reports and photo log',
      'Single point-of-contact project manager',
    ],
    process: [
      { step: 'Brief & site visit', detail: 'After-hours site visit to assess scope, access, MEP coordination needs.' },
      { step: 'Method statement', detail: 'Full RAMS document submitted for your facility manager\'s approval.' },
      { step: 'Schedule', detail: 'Work scheduled in evening, overnight or weekend blocks to avoid operations downtime.' },
      { step: 'Execute', detail: 'Phased painting with photos sent daily, area-by-area sign-off.' },
      { step: 'Handover pack', detail: 'Final pack includes paint codes, batch numbers, warranty letter and clean-up confirmation.' },
    ],
    priceTable: [
      { tier: 'Small office (<100 sqm)', scope: 'Walls + ceiling, weeknight work', from: 4500, unit: 'AED' },
      { tier: 'Mid office (100-300 sqm)', scope: 'Phased, weekend execution', from: 12000, unit: 'AED' },
      { tier: 'Retail store', scope: 'Rebrand colours, overnight', from: 8500, unit: 'AED' },
      { tier: 'Warehouse', scope: 'Epoxy floor or wall coat', from: 18000, unit: 'AED' },
    ],
    faqs: [
      {
        question: 'Do you work after office hours?',
        answer:
          'Yes — most commercial jobs are done evenings (6pm-12am) or weekends (Saturday-Sunday). We don\'t charge a premium for after-hours: it\'s our standard commercial rate.',
      },
      {
        question: 'Can you provide MSDS and method statements?',
        answer:
          'Always. Every commercial quote ships with paint MSDS sheets and a Risk Assessment & Method Statement (RAMS) document tailored to your site. Facility managers and HSE officers can review before work starts.',
      },
      {
        question: 'Do you do retail-grade brand colours?',
        answer:
          'Yes. We match Pantone or RAL codes for brand consistency across multiple store locations. Tinting is done on-site to ensure batch consistency.',
      },
      {
        question: 'Can you handle a 24/7 operation like a clinic?',
        answer:
          'Yes — by zoning the space, using low-odour or zero-VOC paints, and working in tight 4-hour windows we can paint live healthcare and hospitality environments without closing them.',
      },
      {
        question: 'How quickly can you start?',
        answer:
          'For standard commercial jobs, 5-7 days from quote acceptance. Rush jobs (24-48 hour start) can be arranged with select vendors at a small premium for crew availability.',
      },
    ],
  },
  {
    slug: 'texture-decorative',
    name: 'Texture & Decorative',
    short: 'Stucco, marmorino & accents',
    description:
      'Italian-finish textures, metallic accents and feature walls by specialist artisans.',
    startingPrice: 35,
    unit: 'AED / sqft',
    icon: 'sparkle',
    seoTitle: 'Decorative Painting Dubai — Marmorino & Stucco',
    seoDescription:
      'Italian-finish decorative painting in Dubai. Marmorino, stucco, Venetian plaster, metallic accents. By specialist artisans, from AED 35/sqft. Free design consult.',
    intro:
      'Decorative paint is where painting becomes craft. Mr Painter Dubai partners with a small group of specialist artisans trained in Italian and European techniques — Marmorino, Stucco Veneziano, Travertino, Sabbiato and metallic leaf application. Each project starts with a design consult, sample boards prepared in your home, and an experienced foreman who has trained in Italy or with master applicators.',
    bestFor: [
      'Feature walls and TV walls',
      'Master bedroom accent walls',
      'Foyers, entrance halls and stairwells',
      'Hotel-style finishes for high-end villas',
      'Restaurants, salons and boutique retail',
    ],
    inclusions: [
      'Free 60-minute design consultation',
      'Up to 3 sample boards prepared on-site',
      'Specialist artisan crew (max 2 walls per crew per day)',
      'Imported materials (San Marco, Valpaint, Oikos)',
      'Multi-layer application (3-5 coats typical)',
      'Wax or topcoat sealing as needed',
      'Care guide and clean-down kit for handover',
    ],
    process: [
      { step: 'Design consult', detail: 'A specialist visits to discuss finishes, see samples, agree on look.' },
      { step: 'Sample boards', detail: 'We prepare 2-3 sample boards on your actual wall so you see the finish in your light.' },
      { step: 'Surface preparation', detail: 'Walls skimmed to a Level 5 finish — required for high-gloss decorative work.' },
      { step: 'Layered application', detail: 'Multiple thin layers built up with trowel and brush over 2-3 days.' },
      { step: 'Sealing & polish', detail: 'Wax or matte topcoat applied, hand-polished where required.' },
    ],
    priceTable: [
      { tier: 'Sabbiato (sand finish)', scope: 'Per sqft, supplied & applied', from: 35, unit: 'AED / sqft' },
      { tier: 'Marmorino (lime plaster)', scope: 'Per sqft, polished finish', from: 55, unit: 'AED / sqft' },
      { tier: 'Stucco Veneziano', scope: 'Per sqft, mirror polish', from: 85, unit: 'AED / sqft' },
      { tier: 'Metallic / leaf finish', scope: 'Per sqft, gold/silver leaf', from: 120, unit: 'AED / sqft' },
    ],
    faqs: [
      {
        question: 'Can decorative finishes be done over existing paint?',
        answer:
          'Most can, but the wall usually needs a skim coat first to reach a flat Level 5 finish. Decorative work amplifies any imperfection so prep is critical — we build it into the quote.',
      },
      {
        question: 'How long does Marmorino take?',
        answer:
          'A single feature wall (8-12 sqm) takes 2-3 days from prep to seal. Larger projects like full foyers or stairwells take 5-7 days. Each layer must dry before the next is applied.',
      },
      {
        question: 'Can I see a sample before committing?',
        answer:
          'Yes — sample boards prepared on your wall are included. You see exactly how the finish reacts to your lighting before any commitment.',
      },
      {
        question: 'Is decorative paint durable in humid Dubai bathrooms?',
        answer:
          'Yes — Marmorino is lime-based and naturally moisture-resistant. With a proper wax sealer it can be used in bathrooms and steam rooms. We recommend specific products (Valpaint Mavericks, San Marco Acrisil) for wet zones.',
      },
      {
        question: 'How is decorative paint priced?',
        answer:
          'By square foot of finished surface, not wall area, because of overlap and trim. Sabbiato (sand-textured) starts AED 35/sqft, Marmorino around AED 55/sqft, Stucco Veneziano and metallic finishes from AED 85/sqft.',
      },
    ],
  },
];
