export type Area = {
  slug: string;
  name: string;
  sector: string;
  vendorCount: number;
  startingFrom: number;
  geo: { latitude: number; longitude: number };
  highlights: string[];
  // Per-page unique content
  seoTitle: string;
  seoDescription: string;
  intro: string;
  localContext: string;
  popularServices: string[];
  popularPropertyTypes: string[];
  priceGuide: { property: string; from: number; to: number }[];
  nearbyAreas: string[];
  faqs: { question: string; answer: string }[];
};

export const areas: Area[] = [
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    sector: 'Marina & JBR',
    vendorCount: 18,
    startingFrom: 1200,
    geo: { latitude: 25.0805, longitude: 55.1403 },
    highlights: ['Apartments', 'High-rise', 'Quick turnaround'],
    seoTitle: 'Painters in Dubai Marina — Free Quotes',
    seoDescription:
      'Top-rated painters in Dubai Marina. Apartments from AED 1,200. Free quotes from 18 verified pros. Same-day starts available for studios and 1BR units.',
    intro:
      'Dubai Marina is a vertical neighbourhood — almost every job is an apartment in a tower, which means lift access, building permissions and short windows for noisy work. Our Marina painters know every major building (Princess Tower, Cayan, Marina Crown, 23 Marina) and how to coordinate with their security teams. Most studios and 1BR units are painted in a single day.',
    localContext:
      'Dubai Marina has the highest density of short-let and tenant turnover in the city, so apartment refresh between leases is by far the most common request. Move-out repaints typically go back to landlord-spec off-white. Owners going long-term often opt for warm greys and statement walls. Our vendors carry building access permits for all the major Marina towers.',
    popularServices: ['apartment-painting', 'interior-painting', 'texture-decorative'],
    popularPropertyTypes: ['Studio apartment', '1BR apartment', '2BR apartment', '3BR apartment', 'Marina penthouse'],
    priceGuide: [
      { property: 'Studio apartment', from: 1200, to: 1800 },
      { property: '1BR apartment', from: 1800, to: 2800 },
      { property: '2BR apartment', from: 2600, to: 4200 },
      { property: '3BR apartment', from: 3800, to: 6500 },
      { property: 'Penthouse', from: 8500, to: 22000 },
    ],
    nearbyAreas: ['jlt', 'palm-jumeirah', 'business-bay'],
    faqs: [
      {
        question: 'How much does it cost to paint a 1BR apartment in Dubai Marina?',
        answer:
          'A standard 1BR apartment in Marina costs AED 1,800 to 2,800 for two coats of premium emulsion on walls and ceilings, depending on building and ceiling height. Penthouses and double-height units are quoted separately.',
      },
      {
        question: 'Do painters have access to my Marina building?',
        answer:
          'Mr Painter Dubai vendors carry security passes and NOCs for all major Marina buildings. We coordinate the service lift booking and parking permits with building management before the painters arrive — you don\'t have to lift a finger.',
      },
      {
        question: 'Can painting be done over a weekend in Marina?',
        answer:
          'Yes — Saturday-Sunday is one of our most popular Marina time slots. Some buildings restrict noisy work to weekdays so we confirm building rules during the survey.',
      },
      {
        question: 'How long does a Marina apartment painting job take?',
        answer:
          'Most studios are 6-8 hours. 1BR apartments are 1 working day. 2-3BR units take 1-2 days. We aim to finish before 6pm so you can return to a clean, dry, painted home the same evening.',
      },
    ],
  },
  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    sector: 'Downtown & Business Bay',
    vendorCount: 16,
    startingFrom: 1400,
    geo: { latitude: 25.1972, longitude: 55.2744 },
    highlights: ['Luxury apartments', 'Burj views', 'Premium finishes'],
    seoTitle: 'Painters in Downtown Dubai — Luxury Pros',
    seoDescription:
      'Premium painters in Downtown Dubai. Luxury apartments and penthouses from AED 1,400. 16 verified pros, Burj Khalifa-area specialists, decorative finishes available.',
    intro:
      'Downtown Dubai apartments — Burj Views, The Address Residences, Boulevard Heights, Burj Vista — usually demand higher-spec finishes than the city average. Owners here often request decorative work (Marmorino, Stucco Veneziano) alongside standard repainting. Our Downtown vendors include specialist artisans for Italian finishes and full-package painters who can coordinate with the Emaar building managers.',
    localContext:
      'Downtown buildings are managed by Emaar Community Management which requires NOC paperwork from contractors — every Mr Painter Dubai vendor in Downtown is pre-cleared. The most common ask is a high-end colour refresh with optional feature walls, often timed around a move-in or after handover from a new build.',
    popularServices: ['interior-painting', 'apartment-painting', 'texture-decorative'],
    popularPropertyTypes: ['Luxury apartment', 'Penthouse', 'Burj-view residence', 'Branded residence'],
    priceGuide: [
      { property: '1BR luxury apartment', from: 2200, to: 3500 },
      { property: '2BR apartment', from: 3000, to: 5200 },
      { property: '3BR apartment', from: 4200, to: 7800 },
      { property: 'Penthouse', from: 12000, to: 38000 },
      { property: 'Feature wall (Marmorino)', from: 2800, to: 6500 },
    ],
    nearbyAreas: ['business-bay', 'jumeirah', 'dubai-marina'],
    faqs: [
      {
        question: 'Do you have Emaar-approved painters for Downtown?',
        answer:
          'Yes. All Mr Painter Dubai vendors operating in Downtown hold an active No Objection Certificate (NOC) from Emaar Community Management. The NOC paperwork between contractor and building is handled before your job starts.',
      },
      {
        question: 'Can you do Italian decorative finishes (Marmorino, Stucco)?',
        answer:
          'Yes — Downtown is our most popular area for decorative work. Our specialist artisans prepare sample boards on your wall before committing, and source materials from San Marco, Valpaint and Oikos in Italy.',
      },
      {
        question: 'How much does painting a 2BR apartment in Downtown cost?',
        answer:
          'A 2BR Downtown apartment ranges AED 3,000-5,200 depending on the building, paint brand and any decorative requirements. Higher floors and double-height units carry a small premium for access.',
      },
      {
        question: 'Will painting affect my Burj Khalifa view?',
        answer:
          'Not at all — we use plastic sheets and tape to protect windows and never use spray equipment on view-facing walls. Glass and balcony rails are cleaned after the job.',
      },
    ],
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    sector: 'Downtown & Business Bay',
    vendorCount: 14,
    startingFrom: 1300,
    geo: { latitude: 25.1857, longitude: 55.2769 },
    highlights: ['Offices', 'Apartments', 'After-hours'],
    seoTitle: 'Painters in Business Bay — Apt & Office',
    seoDescription:
      'Business Bay painters for apartments and offices. 14 verified pros, after-hours commercial work, free quotes. Apartments from AED 1,300.',
    intro:
      'Business Bay is split almost 50/50 between residential apartments and commercial offices, so our local vendors are equally comfortable with both. Office repaints typically run overnight or weekends to avoid disrupting tenant businesses. Residential jobs are concentrated in towers like Executive Towers, The Sterling, Damac Maison and Marasi Riverside.',
    localContext:
      'Business Bay\'s mix of office space and residential means demand is steady year-round. F&B venues on Marasi Drive and the canal-facing towers often need quick refreshes between leases. Most office work is scheduled in 6pm-2am blocks, and our vendors include site supervisors who can liaise with your facility manager.',
    popularServices: ['commercial-painting', 'apartment-painting', 'interior-painting'],
    popularPropertyTypes: ['Office', 'Studio', '1-2BR apartment', 'Retail unit', 'F&B venue'],
    priceGuide: [
      { property: 'Studio apartment', from: 1300, to: 1900 },
      { property: '1BR apartment', from: 1900, to: 2800 },
      { property: '2BR apartment', from: 2800, to: 4200 },
      { property: 'Small office (<100 sqm)', from: 4500, to: 9000 },
      { property: 'Retail unit', from: 6500, to: 18000 },
    ],
    nearbyAreas: ['downtown-dubai', 'dubai-marina', 'jlt'],
    faqs: [
      {
        question: 'Can offices in Business Bay be painted at night?',
        answer:
          'Yes — most commercial jobs in Business Bay are done in 6pm-2am or weekend blocks. There\'s no after-hours premium with Mr Painter Dubai vendors. We coordinate with your building security for evening access.',
      },
      {
        question: 'How fast can you start an office repaint?',
        answer:
          'Standard commercial bookings start within 5-7 days of quote acceptance. Rush starts (24-48 hours) are possible with select vendors and may carry a small crew-availability surcharge.',
      },
      {
        question: 'Do you handle the building permits for office painting?',
        answer:
          'Yes. For Dubai Properties-managed buildings (most of Business Bay), our vendors apply for and hold the active contractor permits. We submit RAMS and MSDS to your facility manager directly.',
      },
      {
        question: 'How much for a 1BR apartment in Business Bay?',
        answer:
          'AED 1,900 to 2,800 for a complete repaint of walls and ceilings with two coats of premium emulsion. Buildings with higher ceilings (Executive Towers, Damac Maison Cour Jardin) sit at the upper end.',
      },
    ],
  },
  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    sector: 'Jumeirah',
    vendorCount: 12,
    startingFrom: 6500,
    geo: { latitude: 25.2048, longitude: 55.2528 },
    highlights: ['Villas', 'Premium', 'Decorative'],
    seoTitle: 'Painters in Jumeirah — Villa Specialists',
    seoDescription:
      'Premium villa painters in Jumeirah 1, 2 and 3. Full villa packages from AED 6,500. Exterior weather-coats, decorative finishes, 12-month warranty.',
    intro:
      'Jumeirah is villa territory. Our 12 local vendors specialise in full-villa packages — interior, exterior, boundary walls and decorative interior work in one fixed-price quote. Most Jumeirah villas are 3-7 bedrooms with significant exterior facade, so weatherproofing the exterior with elastomeric coatings is a major part of every project.',
    localContext:
      'Jumeirah\'s mature stock of older villas (1990s-2010s) means exterior re-coating and crack repair are particularly common. Newer compounds in Jumeirah 2 and 3 tend to need decorative interior work — feature walls, Marmorino in foyers, metallic finishes in dining rooms. Our vendors here are experienced with both heritage and contemporary villa styles.',
    popularServices: ['villa-painting', 'exterior-painting', 'texture-decorative'],
    popularPropertyTypes: ['3-5BR villa', '5-7BR villa', 'Compound villa', 'Beachfront villa'],
    priceGuide: [
      { property: '3BR villa (full package)', from: 9800, to: 14000 },
      { property: '4-5BR villa (full package)', from: 14500, to: 22000 },
      { property: '6-7BR villa (full package)', from: 22000, to: 38000 },
      { property: 'Boundary wall (per side)', from: 1200, to: 2800 },
      { property: 'Marmorino feature wall', from: 2800, to: 6500 },
    ],
    nearbyAreas: ['downtown-dubai', 'palm-jumeirah', 'business-bay'],
    faqs: [
      {
        question: 'How long does a Jumeirah villa take to paint?',
        answer:
          'A 4-bedroom villa with full interior and exterior typically takes 5-8 working days with a 3-4 person crew. Larger 6-7BR villas can take 10-14 days. We schedule exterior on cooler mornings and interior throughout the day.',
      },
      {
        question: 'Can you paint over the existing villa colour with the same shade?',
        answer:
          'Yes. Our vendors use portable colour scanners to match your existing facade colour exactly. The result is a uniform finish even on touch-ups or partial repaints.',
      },
      {
        question: 'Do I need a permit to repaint my villa exterior?',
        answer:
          'For independent villas, no permit is needed but the community manager must be notified. Compound and gated community villas usually require an internal NOC — our vendors handle this paperwork.',
      },
      {
        question: 'How long will exterior paint last in Jumeirah\'s sun?',
        answer:
          'Standard exterior paint lasts 3-4 years on Jumeirah-facing villas. Premium elastomeric systems with full prep last 5-7 years and come with a manufacturer-backed warranty.',
      },
    ],
  },
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    sector: 'Marina & JBR',
    vendorCount: 10,
    startingFrom: 7800,
    geo: { latitude: 25.1124, longitude: 55.139 },
    highlights: ['Beachfront villas', 'Penthouses', 'Luxury'],
    seoTitle: 'Painters on Palm Jumeirah — Luxury Villas',
    seoDescription:
      'Luxury painters on Palm Jumeirah. Beachfront villas and Shoreline penthouses from AED 7,800. Salt-resistant exterior coats, premium decorative finishes.',
    intro:
      'Palm Jumeirah villas and Shoreline apartments need painters who understand sea-side exposure — salt, humidity and direct sun strip standard paint within months. Our 10 Palm vendors specialise in premium elastomeric and silicone-based exterior systems engineered for marine-front conditions, plus high-end interior work for both standalone villas and penthouse apartments.',
    localContext:
      'Frond villas have a uniform exterior code so colour matching is critical. Shoreline apartments and Atlantis Royal penthouses lean towards decorative interior finishes — gold leaf, Marmorino, Travertino — with imported Italian materials. Our Palm vendors hold active access permits with both Nakheel Community Management and Atlantis security.',
    popularServices: ['villa-painting', 'exterior-painting', 'texture-decorative'],
    popularPropertyTypes: ['Frond villa', 'Signature villa', 'Penthouse', 'Shoreline apartment'],
    priceGuide: [
      { property: 'Frond villa (full package)', from: 14000, to: 28000 },
      { property: 'Signature villa', from: 28000, to: 55000 },
      { property: 'Shoreline 1BR apartment', from: 2400, to: 4200 },
      { property: 'Penthouse', from: 18000, to: 65000 },
      { property: 'Decorative feature wall', from: 4500, to: 14000 },
    ],
    nearbyAreas: ['dubai-marina', 'jumeirah', 'jlt'],
    faqs: [
      {
        question: 'What kind of paint lasts on Palm Jumeirah\'s salt air?',
        answer:
          'Silicone-based or elastomeric exterior systems (Jotun Jotashield Extreme, Caparol AmphiSilan, Sto-Color Silco) are designed for marine exposure. With proper surface prep these last 6-8 years on Palm villas.',
      },
      {
        question: 'Are Mr Painter Dubai vendors approved by Nakheel Community Management?',
        answer:
          'Yes. All our Palm vendors hold active access permits and contractor NOCs from Nakheel. Frond, Trunk and Crescent are all covered. Atlantis Royal residents have specific concierge coordination.',
      },
      {
        question: 'Can you paint a Frond villa exterior in the same Nakheel-approved colour?',
        answer:
          'Yes. The Palm has a uniform exterior palette — we keep paint codes for every Frond colour scheme on file and match exactly so your villa stays compliant with community guidelines.',
      },
      {
        question: 'How fast can you start a Palm job?',
        answer:
          'Palm jobs typically need 7-10 days lead time for crew scheduling, materials and Nakheel paperwork. Penthouse decorative work can need 2-3 weeks of planning depending on imported material lead times.',
      },
    ],
  },
  {
    slug: 'jlt',
    name: 'JLT',
    sector: 'TECOM & JLT',
    vendorCount: 15,
    startingFrom: 1200,
    geo: { latitude: 25.0693, longitude: 55.1413 },
    highlights: ['Apartments', 'Offices', 'Fast quotes'],
    seoTitle: 'Painters in JLT — Apartments & Offices',
    seoDescription:
      'Painters in Jumeirah Lake Towers (JLT) for apartments and offices. 15 verified pros. Studios from AED 1,200, offices from AED 4,500. Same-day starts.',
    intro:
      'Jumeirah Lake Towers (JLT) is dense, mixed-use and turnover-heavy — perfect for the fast-response apartment painters we have in our network. 15 local vendors specialise in same-day starts for studios and 1BR units, plus after-hours office repaints in the DMCC-managed towers. Every JLT vendor knows the cluster system and which towers allow what lift access.',
    localContext:
      'JLT has 87 towers split across 26 clusters — building rules vary wildly. Some clusters require 48 hours of NOC paperwork, others allow same-day access. Our vendors maintain a live list of which towers require which paperwork, so quoting and scheduling are faster here than anywhere else in Dubai.',
    popularServices: ['apartment-painting', 'interior-painting', 'commercial-painting'],
    popularPropertyTypes: ['Studio apartment', '1BR apartment', '2BR apartment', 'Small office', 'Co-working unit'],
    priceGuide: [
      { property: 'Studio', from: 1200, to: 1800 },
      { property: '1BR apartment', from: 1800, to: 2700 },
      { property: '2BR apartment', from: 2600, to: 4000 },
      { property: '3BR apartment', from: 3800, to: 5800 },
      { property: 'Small office (<80 sqm)', from: 4500, to: 8500 },
    ],
    nearbyAreas: ['dubai-marina', 'business-bay', 'jvc'],
    faqs: [
      {
        question: 'How quickly can a JLT painter start?',
        answer:
          'For studios and 1BR units, often the same afternoon if you book before 9am. Most 2-3BR units can start within 24-48 hours. Cluster paperwork is handled in parallel so it rarely slows things down.',
      },
      {
        question: 'Do you have approvals for all JLT clusters?',
        answer:
          'Our vendors hold active NOCs across most clusters. For the few towers with stricter access (Cluster T, Cluster Y), we apply for a same-day NOC through DMCC — typically approved within 4-6 hours.',
      },
      {
        question: 'How much for a 1BR in JLT?',
        answer:
          'A standard 1BR apartment in JLT costs AED 1,800-2,700 for two coats of premium emulsion. Lake View Towers and Goldcrest sit at the upper end due to ceiling height; standard residential clusters are at the lower end.',
      },
      {
        question: 'Can you do my JLT office at night?',
        answer:
          'Yes — most JLT office painting is done in 7pm-1am weekday slots or full weekends. We coordinate with DMCC tower security and never charge an after-hours premium.',
      },
    ],
  },
  {
    slug: 'arabian-ranches',
    name: 'Arabian Ranches',
    sector: 'Suburbs',
    vendorCount: 11,
    startingFrom: 5800,
    geo: { latitude: 25.0518, longitude: 55.2685 },
    highlights: ['Villas', 'Townhouses', 'Family communities'],
    seoTitle: 'Painters in Arabian Ranches — Villas',
    seoDescription:
      'Painters for Arabian Ranches villas and townhouses. 11 Emaar-approved pros. Full villa packages from AED 5,800. Saheel, Mirador, Alvorada and more.',
    intro:
      'Arabian Ranches is family-villa country — Saheel, Mirador, Alvorada, Hattan, Polo Homes — and our 11 local vendors hold active Emaar Community Management approvals for every sub-community. Most jobs are full 3-5 bedroom villa repaints or boundary wall touch-ups before a property sale. The Ranches palette is conservative so colour matching to community standards is part of every quote.',
    localContext:
      'Ranches villas are 15-20 years old on average, so exterior crack repair and full elastomeric recoating make up 60% of jobs. Inside, most owners stick with Emaar-compliant neutrals but a growing minority are opting for Marmorino and statement walls. The community NOC is required and handled by our vendors.',
    popularServices: ['villa-painting', 'exterior-painting', 'interior-painting'],
    popularPropertyTypes: ['3BR townhouse', '4-5BR villa', '6-7BR Polo villa'],
    priceGuide: [
      { property: '3BR townhouse', from: 5800, to: 9500 },
      { property: '4BR villa (full)', from: 9800, to: 15000 },
      { property: '5BR villa (full)', from: 14500, to: 22000 },
      { property: 'Boundary wall', from: 1200, to: 2400 },
      { property: 'Interior only (3BR)', from: 4500, to: 7800 },
    ],
    nearbyAreas: ['mirdif', 'jvc', 'jumeirah'],
    faqs: [
      {
        question: 'Do you have Emaar approval for Arabian Ranches?',
        answer:
          'Yes — every Mr Painter Dubai vendor working in Arabian Ranches holds an active Emaar Community Management NOC. The contractor-to-community paperwork is handled before your job starts.',
      },
      {
        question: 'How long does a full villa take in The Ranches?',
        answer:
          'A 4-bedroom villa with interior and exterior is typically 5-7 working days. Larger 5-6BR Polo villas can take 8-10 days. We schedule exterior on cooler mornings to avoid summer heat issues.',
      },
      {
        question: 'Can you match the original Emaar villa colour?',
        answer:
          'Yes. We hold the original Emaar paint codes for each Ranches sub-community on file. The villa exterior stays compliant with community palette guidelines.',
      },
      {
        question: 'How much for a 4-bedroom Ranches villa?',
        answer:
          'A full 4BR villa package (interior + exterior + boundary wall) is AED 9,800-15,000 depending on facade size and sub-community. Polo Homes and Hattan sit at the upper end due to larger footprint.',
      },
    ],
  },
  {
    slug: 'mirdif',
    name: 'Mirdif',
    sector: 'Mirdif & Warqa',
    vendorCount: 9,
    startingFrom: 4500,
    geo: { latitude: 25.2178, longitude: 55.4222 },
    highlights: ['Villas', 'Townhouses', 'Affordable'],
    seoTitle: 'Painters in Mirdif — Affordable Villas',
    seoDescription:
      'Trusted painters in Mirdif for villas and townhouses. 9 verified pros, from AED 4,500 for a full 3BR villa. Same-day quotes, 12-month warranty.',
    intro:
      'Mirdif is a high-density family suburb of mostly older villas and newer compound townhouses. Mr Painter Dubai Mirdif vendors are known for being the most cost-effective in the network without compromising on prep quality — most quotes come in 15-25% below Marina or Downtown rates because of lower crew transport costs and a more competitive local market.',
    localContext:
      'Mirdif villas are typically standalone or in small compounds (Uptown, Mirdif Hills). Many owners do a partial repaint focused on the most weather-affected facade rather than the whole villa to control budget. Boundary walls and gates are frequently refreshed before Eid or back-to-school season.',
    popularServices: ['villa-painting', 'exterior-painting', 'apartment-painting'],
    popularPropertyTypes: ['Standalone villa', 'Compound townhouse', '3-5BR family villa'],
    priceGuide: [
      { property: '3BR villa (full)', from: 4500, to: 8500 },
      { property: '4BR villa (full)', from: 7500, to: 13000 },
      { property: '5BR villa (full)', from: 11500, to: 18000 },
      { property: 'Interior only (3BR)', from: 3000, to: 5800 },
      { property: 'Boundary wall', from: 900, to: 2200 },
    ],
    nearbyAreas: ['arabian-ranches', 'jvc'],
    faqs: [
      {
        question: 'Why is Mirdif cheaper than Marina for the same job?',
        answer:
          'Mirdif painters are based locally, transport less far and operate with less premium positioning. The work and materials are identical — same Jotun and Dulux paints, same prep standards, same 12-month warranty.',
      },
      {
        question: 'Can you paint just one external wall of a Mirdif villa?',
        answer:
          'Yes. Partial repaints are common in Mirdif — we quote per facade so you can fix the sun-damaged west wall without doing the whole villa. Colour matching is included.',
      },
      {
        question: 'How quickly can a Mirdif painter start?',
        answer:
          'Most Mirdif jobs start within 2-4 days of quote acceptance. Smaller jobs (boundary walls, gates) can often be booked same-week.',
      },
      {
        question: 'Do you cover Mirdif Hills and Uptown Mirdif?',
        answer:
          'Yes — both gated compounds are fully covered. Our vendors hold active access permits for both communities and coordinate the NOC paperwork before work starts.',
      },
    ],
  },
  {
    slug: 'jvc',
    name: 'JVC',
    sector: 'JVC & Motor City',
    vendorCount: 13,
    startingFrom: 1100,
    geo: { latitude: 25.0567, longitude: 55.2099 },
    highlights: ['Townhouses', 'Apartments', 'New builds'],
    seoTitle: 'Painters in JVC — Townhouse & Apt',
    seoDescription:
      'Painters in Jumeirah Village Circle (JVC) for townhouses and apartments. 13 verified pros, from AED 1,100 for studio repaints. Same-week starts.',
    intro:
      'Jumeirah Village Circle (JVC) is a young, fast-growing community of new-build apartments and compact townhouses. Most JVC owners are first-time buyers who want a fresh repaint between handover and move-in, or landlords refreshing between tenancies. Our 13 local vendors specialise in efficient one-day finishes for studios and 1BR units, plus full townhouse packages.',
    localContext:
      'JVC apartments are typically smaller (450-900 sqft) and modern, so prep work is minimal compared to older communities. Townhouses (Diamond Views, Casa Familia) need both interior and exterior work as they age. Service charges and community rules vary by tower so our vendors verify access requirements for each address.',
    popularServices: ['apartment-painting', 'interior-painting', 'villa-painting'],
    popularPropertyTypes: ['Studio apartment', '1BR apartment', '2-3BR townhouse', '3-4BR townhouse'],
    priceGuide: [
      { property: 'Studio', from: 1100, to: 1700 },
      { property: '1BR apartment', from: 1700, to: 2600 },
      { property: '2BR apartment', from: 2400, to: 3800 },
      { property: '3BR townhouse', from: 4500, to: 8000 },
      { property: '4BR townhouse', from: 6800, to: 12000 },
    ],
    nearbyAreas: ['jlt', 'arabian-ranches', 'mirdif'],
    faqs: [
      {
        question: 'How much to paint a studio in JVC?',
        answer:
          'A standard studio in JVC is AED 1,100-1,700 for walls and ceiling with two coats of premium emulsion. Newer buildings with smaller floor plates sit at the lower end.',
      },
      {
        question: 'Can painters access JVC buildings without prior approval?',
        answer:
          'Most JVC buildings allow contractor access with same-day approval. Older buildings near the District 13 cluster sometimes require 24-hour notice. Our vendors check and confirm during the quote.',
      },
      {
        question: 'How long does a JVC townhouse take?',
        answer:
          'A 3BR townhouse interior is 2-3 days. Adding exterior makes it 4-5 days total. Most jobs run Monday-Friday so the townhouse is fully ready by the weekend.',
      },
      {
        question: 'Are there extra costs for JVC new-builds?',
        answer:
          'No — new-build apartments often have less prep work so quotes tend to come in at the lower end of the range. Light filler and dusting is included as standard.',
      },
    ],
  },
];
