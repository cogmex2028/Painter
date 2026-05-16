// Extended per-service content: materials guide, common pitfalls, pre-job checklist.
// Keyed by service slug. Used to push /services/[slug] pages above Google's 1,000-word ideal.

export type ServiceExtended = {
  materialsIntro: string;       // ~80 words
  paintBrands: { name: string; bestFor: string; notes: string }[];
  pitfalls: { title: string; detail: string }[];
  checklist: string[];          // 5-8 owner action items
  durability: string;           // ~100 words on lifespan and warranty
  sustainability: string;       // ~80 words on VOC, low-emission options
};

export const serviceExtended: Record<string, ServiceExtended> = {
  'interior-painting': {
    materialsIntro:
      'The right paint is the difference between a finish that survives ten years of cleaning and one that scuffs in the first six months. For interiors, the choice is between water-based emulsions for walls and ceilings, and oil-based or hybrid systems for doors and trim. Dubai\'s air conditioning dries paint quickly so low-odour, low-VOC formulas are standard. The brand matters less than the grade — every major manufacturer makes a premium and a budget line, and the premium line is almost always worth the AED 20-40 per gallon difference.',
    paintBrands: [
      { name: 'Jotun Lady', bestFor: 'Bedrooms, living rooms, ceilings', notes: 'Norwegian. Almost odourless. Excellent flow and coverage. Premium tier.' },
      { name: 'Dulux Diamond', bestFor: 'High-traffic walls, hallways, kitchens', notes: 'Industry standard. Scrubbable. Wide colour range. Mid-premium tier.' },
      { name: 'Caparol Premiumweiss', bestFor: 'Ceilings and large white walls', notes: 'German. Ultra-matt finish. Premium tier.' },
      { name: 'Asian Paints Royale', bestFor: 'Budget projects, rental refresh', notes: 'Indian. Reliable mid-tier. Wider availability across Dubai.' },
      { name: 'Benjamin Moore Aura', bestFor: 'Heritage or decorative interiors', notes: 'American. Imported. Specialist palette and exceptional depth of colour.' },
    ],
    pitfalls: [
      { title: 'Skipping the primer on new plaster', detail: 'Fresh gypsum still holds moisture. Painting straight on without primer leads to peeling within 6-12 months. Always insist on a sealer coat.' },
      { title: 'Over-thinning the paint', detail: 'A common shortcut to spread material further. The result is patchy coverage and chalkiness. Reputable vendors never thin beyond manufacturer spec.' },
      { title: 'One coat instead of two', detail: 'A single coat can look acceptable for weeks then reveals roller streaks under different light. Two coats is the minimum standard for any premium job.' },
      { title: 'Painting over mould without treatment', detail: 'Mould in bathrooms and behind wardrobes returns through fresh paint within months. It must be killed with a fungicidal wash before any primer goes on.' },
      { title: 'Ignoring the cut-in lines', detail: 'Cheap crews roller-coat everything and paint over tape. A senior painter cuts in by hand with a brush — that crisp edge separates premium from amateur work.' },
    ],
    checklist: [
      'Move TVs, art, mirrors and fragile decor off the walls.',
      'Move furniture 60cm away from the walls or to the centre of the room.',
      'Empty wardrobe interiors if you want them painted.',
      'Decide colour 48-72 hours ahead so tinting is done and dry.',
      'Plan to be out of the apartment for the day, or in one room.',
      'Cover pet bowls and remove fish tanks from the work area.',
      'Have one set of keys with security if you cannot be home for sign-off.',
    ],
    durability:
      'A premium interior paint job in Dubai typically holds for 5-7 years before needing a refresh in heavy-use rooms and 8-10 years in bedrooms and ceilings. Workmanship warranty from Mr Painter Dubai vendors is 12 months covering peeling, flaking and visible inconsistencies. The paint manufacturer also offers warranty on the product itself, claimable through us. Common Dubai-specific stressors that shorten paint life: persistent AC condensation, hookah smoke, and high-traffic hallway scuffing — all of which can be mitigated with the right paint grade.',
    sustainability:
      'Every paint brand we work with offers a low-VOC line. Jotun Lady, Dulux Diamond and Caparol Premiumweiss are all Greenguard Gold certified, meaning emissions are safe for occupied homes immediately after painting. We recommend the low-VOC tier for nurseries, asthmatic family members and pet-friendly homes — the premium typically runs 10-15% over standard product. Disposal is handled responsibly: empty tins are recycled, leftover paint is donated to Dubai community projects or stored for touch-ups.',
  },

  'exterior-painting': {
    materialsIntro:
      'Dubai\'s exterior environment is one of the harshest in the world for paint. UV index over 11 from May-September, surface temperatures above 60°C in summer, salt-laden air on the coast, sandstorms scouring loose coats, and 90% humidity at night. Standard interior paint lasts months on a Dubai facade. Exterior systems are formulated for elasticity (so they don\'t crack with thermal expansion), UV stability (so the colour does not fade), and water repellency (so wind-driven rain runs off rather than soaking in). The investment is significant — and the difference is measurable in years of service.',
    paintBrands: [
      { name: 'Jotun Jotashield Extreme', bestFor: 'Coastal villas, Palm Jumeirah, Jumeirah', notes: 'Silicone-based. 7+ year manufacturer warranty. Premium tier.' },
      { name: 'Caparol AmphiSilan', bestFor: 'High-humidity facades, beach-front', notes: 'German. Silicate-based. Breathable, water-repellent.' },
      { name: 'Dulux Weathershield Max', bestFor: 'Inland villas, Ranches, Mirdif', notes: 'British. 5-year warranty. Wide colour range. Mid-premium.' },
      { name: 'Sto-Color Silco', bestFor: 'High-rise facades, commercial buildings', notes: 'German. Specialist sprayed application. Premium tier.' },
      { name: 'Jotun Jotashield Tropical', bestFor: 'Standard villa repaints', notes: 'Norwegian. 3-year warranty. Affordable premium.' },
    ],
    pitfalls: [
      { title: 'Painting over loose existing coats', detail: 'Without proper scraping and power-wash, fresh paint bonds to the failing old layer. Within 18 months the whole new coat lifts away.' },
      { title: 'Skipping the anti-alkali primer', detail: 'Dubai walls are highly alkaline. Without a sealing primer, the alkali leaches through and causes whitish efflorescence stains within months.' },
      { title: 'Wrong product for the season', detail: 'Standard exterior paint cannot cure above 35°C surface temperature. Applying in June afternoon sun guarantees a brittle, cracked finish.' },
      { title: 'Ignoring cracks before coating', detail: 'Hairline cracks in stucco widen with thermal cycling. Filling and tape-bandaging them before primer is essential — paint alone will not bridge them.' },
      { title: 'No warranty paperwork', detail: 'Vendors without manufacturer partnership cannot offer the 5-7 year warranty. Always insist on a signed warranty certificate with the batch numbers.' },
    ],
    checklist: [
      'Trim hedges and trees away from the facade by at least 60cm.',
      'Move outdoor furniture, BBQs and pool floats to the garden centre.',
      'Identify cracks, mould or water damage during the site survey.',
      'Confirm the elastomeric system, primer brand and warranty length in writing.',
      'Choose your colour 7-10 days ahead so all paint is tinted and on site.',
      'Inform community management and your neighbour about scaffold timing.',
      'Cover or move planters near the facade.',
      'Photograph the facade before work starts as a baseline record.',
    ],
    durability:
      'A premium elastomeric exterior system applied to a properly prepared Dubai facade lasts 6-8 years before noticeable degradation. The first sign of wear is usually colour fade on the south and west elevations, which receive the most sun. Premium silicone-based systems (Jotun Jotashield Extreme, Caparol AmphiSilan) come with manufacturer-backed warranties of 5-7 years jointly issued with Mr Painter Dubai. Maintenance during the warranty period is light: a power-wash every 2-3 years removes accumulated dust and salt residue.',
    sustainability:
      'Modern exterior paints are formulated to be lower in VOCs than their interior counterparts because emissions disperse outdoors. The market standard now is around 30-50 g/L of VOC for premium elastomeric coats. Sto-Color Silco and Caparol\'s silicate-mineral line approach near-zero VOC. We can specify ultra-low-VOC systems for clients with chemical sensitivities or properties near schools. Used paint tins are returned to the manufacturer for recycling through Dubai Municipality\'s commercial waste programme.',
  },

  'villa-painting': {
    materialsIntro:
      'A complete villa project combines two very different paint systems. Inside, the priority is finish quality and low-odour formulation — premium emulsions like Jotun Lady or Caparol Premiumweiss are standard. Outside, the priority is durability against Dubai\'s sun, salt and sandstorms — silicone or elastomeric systems like Jotun Jotashield Extreme or Caparol AmphiSilan. A well-quoted villa package will use the right product for each surface and explain the choice in writing. Many cheaper vendors economise by using interior paint outside; the result fails within 18 months.',
    paintBrands: [
      { name: 'Jotun Jotashield + Jotun Lady', bestFor: 'Premium full villa packages', notes: 'Norwegian. Matched interior/exterior pairing. 5-year exterior warranty.' },
      { name: 'Dulux Weathershield + Dulux Diamond', bestFor: 'Mid-premium villa packages', notes: 'British. Reliable system. 3-5 year warranty.' },
      { name: 'Caparol AmphiSilan + Caparol Premiumweiss', bestFor: 'Coastal and premium villas', notes: 'German. Silicate-based. Premium tier.' },
      { name: 'Asian Paints Apex + Royale', bestFor: 'Budget villa packages', notes: 'Indian. Reliable mid-tier. Wider availability.' },
    ],
    pitfalls: [
      { title: 'Using interior paint on exterior surfaces', detail: 'Cuts cost upfront but fails within 12-18 months. Always specify the exterior product brand and warranty term in writing.' },
      { title: 'Skipping crack repair before primer', detail: 'Hairline cracks in stucco widen with thermal expansion. Filling them before primer adds 1-2 days but extends paint life 3-4 years.' },
      { title: 'Painting in summer afternoon', detail: 'Surface temperatures above 35°C cause paint to cure unevenly, leading to cracking and peeling. Crews should work mornings only May-September.' },
      { title: 'Boundary walls painted alone', detail: 'A freshly painted boundary wall next to a faded facade looks unintentional. Bundle them or stagger by 12 months to keep the property looking consistent.' },
      { title: 'Vague warranty terms', detail: 'A "5-year warranty" without a manufacturer co-signature is just the vendor\'s promise. Premium systems include the paint maker as warrantor.' },
    ],
    checklist: [
      'Allow 8-14 working days for a full 4-5BR villa package.',
      'Trim hedges, palms and ornamental grasses 60cm back from the facade.',
      'Move outdoor furniture, BBQ and pool floats to the garden centre.',
      'Discuss boundary wall colour with neighbour to share costs.',
      'Inform community management of scaffold and crew timing.',
      'Choose interior and exterior colours 10-14 days ahead.',
      'Identify any leaks, mould or water damage during the site survey.',
      'Plan family logistics — bedrooms first usually means sleeping is uninterrupted.',
    ],
    durability:
      'A premium full villa package — interior emulsion plus elastomeric exterior with proper prep — should hold 5-7 years before any significant retouch. The first refresh tends to be the south or west exterior facade after 6-7 years of UV exposure. Interior bedrooms and ceilings can last 8-10 years before showing wear. Mr Painter Dubai vendors offer a 12-month workmanship warranty on the whole villa and up to 5-year manufacturer-backed warranty on the exterior coating system. Boundary walls typically need an interim touch-up at year 3-4.',
    sustainability:
      'Full villa packages let you specify low-VOC interior and water-based exterior options across all surfaces. Jotun Lady (interior) and Jotun Jotashield (exterior) are both Greenguard certified for indoor air quality. Mineral-based silicate exterior systems (Caparol AmphiSilan) are among the lowest-impact options available. We recycle empty tins through Dubai Municipality\'s commercial waste programme and donate usable surplus paint to community refurbishment projects.',
  },

  'apartment-painting': {
    materialsIntro:
      'Apartment painting in Dubai is a fast, mostly-indoor job where the product choice is straightforward. Walls and ceilings: a premium water-based emulsion like Jotun Lady, Dulux Diamond or Caparol Premiumweiss. Doors and trim: a hybrid water-based gloss for low odour, oil-based only when the existing finish demands it. Bathrooms and kitchens: a moisture-resistant emulsion or a dedicated kitchen-and-bath product. The big variable is the brand grade — premium tier paints have better coverage and washability, often justifying their AED 30-50/gallon premium over budget lines.',
    paintBrands: [
      { name: 'Jotun Lady', bestFor: 'Bedrooms, lounges, premium apartments', notes: 'Almost odourless. Wide colour range. Premium tier.' },
      { name: 'Dulux Diamond', bestFor: 'Living areas, high-traffic walls', notes: 'Scrubbable. Industry standard. Mid-premium tier.' },
      { name: 'Jotun Fenomastic Hygiene', bestFor: 'Kitchens, bathrooms, kids rooms', notes: 'Anti-bacterial. Moisture-resistant. Mid-premium.' },
      { name: 'Asian Paints Royale', bestFor: 'Budget repaints, tenant turnover', notes: 'Reliable mid-tier. Wide availability.' },
      { name: 'Dulux Easycare', bestFor: 'Hallways, ceilings, rental units', notes: 'Stain-resistant. Affordable premium.' },
    ],
    pitfalls: [
      { title: 'Painting bathroom walls with standard emulsion', detail: 'Standard paint mildews within months in steamy bathrooms. Always specify a hygiene-grade or kitchen-and-bath product for those rooms.' },
      { title: 'Touch-ups in a different paint batch', detail: 'Paint colours can shift slightly between batches even from the same code. Vendors should match the batch number or order all paint at once.' },
      { title: 'Painting over leaks without repair', detail: 'A bubble or stain from a slow leak comes back through fresh paint within weeks. Diagnose the source first.' },
      { title: 'Single-coat budget jobs', detail: 'Some cheap quotes are single-coat. Two coats is the minimum standard — insist on it during quote stage and verify on completion.' },
      { title: 'Ignoring landlord paint code', detail: 'Move-out repaints back to a wrong shade can cost the security deposit. Always confirm the original colour code with the landlord agent before tinting.' },
    ],
    checklist: [
      'Confirm with building reception about service lift booking 24 hours ahead.',
      'Move fragile items (TVs, art, mirrors) off the walls.',
      'Move furniture 60cm away from walls or to room centres.',
      'Empty wardrobes if you want their interiors painted.',
      'Decide colours 48-72 hours ahead.',
      'Inform neighbours about lift booking and noise from 9am-4pm.',
      'Hand over keys to building security if you cannot be home.',
      'Plan to be out for a single day or in one finished room.',
    ],
    durability:
      'A premium apartment repaint typically lasts 5-7 years in high-traffic areas (living room, hallway) and 8-10 years in bedrooms and ceilings. Bathrooms and kitchens with hygiene-grade paint hold 4-6 years before showing yellowing from steam and cooking residue. Mr Painter Dubai vendors offer a 12-month workmanship warranty covering peeling, flaking and visible inconsistencies — touch-ups during the warranty period are free.',
    sustainability:
      'Every apartment-grade paint we recommend has a low-VOC version. Jotun Lady, Jotun Fenomastic Hygiene and Caparol Premiumweiss are all Greenguard Gold certified, meaning they\'re safe for occupied use the same day. We recommend low-VOC paint for nurseries, asthmatic family members and homes with sensitive pets. The premium typically runs 10-15% over standard. Empty tins are returned to the manufacturer for recycling.',
  },

  'commercial-painting': {
    materialsIntro:
      'Commercial paint specification in Dubai is governed by three things the residential world ignores: fire rating, MSDS documentation and warranty enforceability. Standard residential paints lack the fire-class certification required for occupied offices, retail, schools and clinics. Specifier-grade commercial systems carry a Class A flame-spread rating, MSDS sheets for HSE review, and manufacturer warranties enforceable through the building owner — not just the contractor. The price difference over residential-grade paint is 15-25% but the documentation makes the project insurable and compliant with Dubai Civil Defence requirements.',
    paintBrands: [
      { name: 'Jotun Fenomastic Hygiene', bestFor: 'Clinics, schools, F&B', notes: 'Anti-bacterial. Fire Class A. MSDS available.' },
      { name: 'Dulux Trade Diamond', bestFor: 'Offices, retail, hotels', notes: 'Class A fire rating. Scrubbable. MSDS available.' },
      { name: 'Sto-Color Silco', bestFor: 'High-rise commercial facades', notes: 'Specialist sprayed application. Premium tier.' },
      { name: 'Jotun Hardtop AX', bestFor: 'Warehouses, industrial floors', notes: 'Epoxy. Solvent-based. Heavy-duty.' },
      { name: 'Caparol Sylitol', bestFor: 'Sensitive environments, mineral facades', notes: 'Solvent-free silicate. Specialist tier.' },
    ],
    pitfalls: [
      { title: 'Missing MSDS at the gate', detail: 'Most facility managers will not allow contractor entry without MSDS. Always confirm vendor has the paperwork ready before scheduling the first night-shift.' },
      { title: 'No RAMS document', detail: 'Risk Assessment and Method Statements are mandatory for commercial work. Reputable contractors provide them in advance, not as an afterthought.' },
      { title: 'Wrong fire class', detail: 'Public-area paint must be Class A. Using residential-grade paint in occupied commercial space risks failed Civil Defence inspection.' },
      { title: 'Skipping the daily site log', detail: 'Multi-day commercial jobs need daily photo and progress logs for the facility manager. Vendors without this discipline overrun and over-spend.' },
      { title: 'Inadequate insurance', detail: 'AED 1M liability is the minimum for commercial work; we recommend AED 2M. Always verify the insurance certificate covers the project value.' },
    ],
    checklist: [
      'Request RAMS, MSDS and insurance certificate from vendor before scheduling.',
      'Brief building security and FM on contractor schedule and access route.',
      'Identify any utilities along walls (data cabling, fire alarms) for protection.',
      'Coordinate with cleaning and security crews for night-shift access.',
      'Move sensitive equipment, servers and confidential files away from walls.',
      'Confirm paint colour codes match brand guidelines (Pantone or RAL).',
      'Schedule sign-off walks at the end of each phase.',
      'Allow contingency for fire-detector testing post-paint.',
    ],
    durability:
      'Commercial-grade paint systems on properly prepared interior walls hold 6-8 years before needing a refresh. High-traffic areas — reception, corridors, lift lobbies — show wear sooner, typically 4-5 years. Exterior commercial facades with the right elastomeric system last 7-10 years before fade or chalking becomes visible. Mr Painter Dubai commercial vendors offer 24-month workmanship warranty and up to 7-year manufacturer-backed warranty on exterior systems. Annual touch-up contracts are available for high-traffic facilities.',
    sustainability:
      'Commercial low-VOC and zero-VOC systems are widely available and increasingly demanded by HSE-conscious tenants. Sto-Color Silco, Caparol Sylitol and Jotun\'s water-based commercial line are among the lowest-emission options. For clinics, schools and food-service environments we recommend zero-VOC throughout. Used paint tins are managed through Dubai Municipality\'s registered commercial waste contractor — disposal documentation is provided with the project handover pack.',
  },

  'texture-decorative': {
    materialsIntro:
      'Decorative paint is hand-applied craft, not pigmented coating. The materials are mineral-based plasters and natural binders, applied in 3-7 thin layers with steel trowels, sponges and Venetian spatulas. Master artisans train for years before they apply Marmorino or Stucco Veneziano on a client wall. Materials are imported from Italian houses — San Marco, Valpaint, Oikos — and each manufacturer\'s product has a slightly different look. The investment is significant: AED 35-120 per square foot supplied and applied, vs AED 12-22 per sqft for standard emulsion. The result is unique, mirror-finish surfaces that read as stone or aged marble.',
    paintBrands: [
      { name: 'San Marco Marmorino', bestFor: 'Lime-plaster matt or burnished finish', notes: 'Italian master applicator brand. AED 55-75/sqft. Premium.' },
      { name: 'Valpaint Mavericks', bestFor: 'Metallic and pearl accents', notes: 'Italian. Wide finish range. AED 65-95/sqft.' },
      { name: 'Oikos Stucco Veneziano', bestFor: 'Mirror-polish marble look', notes: 'Italian. Polished finish. AED 75-110/sqft.' },
      { name: 'Caparol Capadecor', bestFor: 'Subtle textured walls', notes: 'German. Lower price point. AED 40-60/sqft.' },
      { name: 'Gold and silver leaf', bestFor: 'Ceiling work, accent walls', notes: 'Hand-applied. AED 110-150/sqft.' },
    ],
    pitfalls: [
      { title: 'Decorative paint over unprepared walls', detail: 'Any imperfection in the wall amplifies through a decorative finish. Walls must be skimmed to Level 5 (perfectly flat) before decorative work starts.' },
      { title: 'Wrong vendor for the finish', detail: 'A standard painter cannot apply Marmorino convincingly. Always verify the artisan\'s portfolio and training before commissioning decorative work.' },
      { title: 'Skipping the sample board', detail: 'A 50x50cm sample on your actual wall reveals how the finish behaves in your lighting. Reputable artisans always offer this before committing.' },
      { title: 'Unsealed Marmorino in wet areas', detail: 'Marmorino is naturally moisture-resistant but bathrooms and steam rooms need an additional wax sealer. Skipping the seal allows staining.' },
      { title: 'No care instructions at handover', detail: 'Decorative finishes need specific cleaning protocols. Reputable vendors provide a written care guide and cleaning kit at handover.' },
    ],
    checklist: [
      'Allow 4-6 weeks lead time for material imports from Italy.',
      'Approve 2-3 sample boards prepared on your actual wall.',
      'Confirm wall preparation to Level 5 (perfectly flat) is included.',
      'Discuss curtain, blind and furniture handling — most artisans remove them.',
      'Plan for a single artisan working alone over 3-7 days per wall.',
      'Identify the lighting in the room — decorative finishes change in different light.',
      'For ceiling work, agree on scaffold timing and lift booking.',
      'Receive the care instructions and cleaning kit at project handover.',
    ],
    durability:
      'Properly applied decorative paint is essentially permanent — Marmorino and Stucco Veneziano on prepared walls last 20-30 years with no maintenance beyond gentle dusting. Gold and silver leaf finishes last similarly long if sealed. The 24-month workmanship warranty from Mr Painter Dubai decorative vendors covers application defects; the materials themselves are not subject to fade or peel under normal indoor conditions. Touch-ups, when needed, are typically a single artisan-day.',
    sustainability:
      'Decorative finishes are among the most sustainable paint options available. Marmorino is lime-based, breathes naturally, regulates humidity and contains zero VOCs. Stucco Veneziano is similarly mineral-based. Most decorative finishes are Greenguard Gold certified or equivalent. Materials are imported in glass and metal containers (recyclable) rather than plastic tubs. The finished surface itself is hypoallergenic and antimicrobial.',
  },

  'move-in-painting': {
    materialsIntro:
      'Move-in painting prioritises low odour and fast cure. Premium water-based emulsions like Jotun Lady, Dulux Diamond and Caparol Premiumweiss are the standard choice — they smell almost nothing within hours, cure to handling-dry in 4 hours, and the unit is fully habitable the same evening. We rarely use oil-based finishes for move-in because the longer cure time creates a smell window that conflicts with your move-in date.',
    paintBrands: [
      { name: 'Jotun Lady',          bestFor: 'Premium move-in, bedrooms, lounges',  notes: 'Almost odourless. Cures fast. Top tier in the GCC.' },
      { name: 'Dulux Diamond',       bestFor: 'High-traffic walls, hallways, kitchens', notes: 'Scrubbable. Wide colour range. Mid-premium.' },
      { name: 'Jotun Fenomastic Hygiene', bestFor: 'Kitchens, bathrooms, kids rooms', notes: 'Anti-bacterial. Moisture-resistant. Family-safe.' },
      { name: 'Caparol Premiumweiss', bestFor: 'Ceilings and large white walls',       notes: 'German. Ultra-matt finish. Premium tier.' },
      { name: 'Asian Paints Royale',  bestFor: 'Budget move-in jobs',                  notes: 'Reliable mid-tier. Wider availability across Dubai.' },
    ],
    pitfalls: [
      { title: 'Booking too late', detail: 'Calling 24 hours before the movers arrive leaves no margin for delays. Book 5-7 days ahead so the paint has time to cure and any touch-ups can be done.' },
      { title: 'Skipping the move-in inspection list', detail: 'Many landlords give you a snag list at handover. Paint it BEFORE you start photographing for the inspection record so issues are addressed in one visit.' },
      { title: 'Choosing colour at the last minute', detail: 'Custom-tinted paint takes 30-60 minutes at the supplier. If you decide colour on the day, the crew waits. Pick 48 hours ahead.' },
      { title: 'Painting after the AC is off', detail: 'Hot humid air slows drying. Confirm with the building that AC is operational and have it set to 23-24°C during the work.' },
      { title: 'Not protecting marble or wooden floors', detail: 'Cheap crews use newspaper. Insist on breathable sheets and adhesive floor coverings — paint drops on polished marble cause permanent staining.' },
    ],
    checklist: [
      'Book the paint job 5-7 days before your move-in date',
      'Confirm the building allows weekday painting (some restrict to weekends)',
      'Pick your colour and approve 48 hours before start',
      'Hand over keys to security if you cannot be present',
      'Confirm AC is on at 23-24°C the day of painting',
      'Plan furniture delivery for at least 24 hours after final coat',
      'Save the painter\'s number — return for any touch-ups within 7 days at no cost',
    ],
    durability:
      'A premium move-in repaint typically holds for 5-7 years in bedrooms and ceilings, 4-5 years in high-traffic hallways and kitchens. The 12-month workmanship warranty covers peeling, flaking or visible inconsistencies — we return at no cost. Most move-in customers do not need to repaint again until they sell the property or change tenancy.',
    sustainability:
      'Every brand we recommend for move-in jobs has a low-VOC or zero-VOC variant. Jotun Lady, Dulux Diamond and Caparol Premiumweiss are Greenguard Gold certified, meaning the unit is safe for kids and pregnant occupants from the same evening. Recommended for nurseries, asthmatic family members and pet-friendly homes.',
  },

  'move-out-painting': {
    materialsIntro:
      'Move-out painting prioritises exact colour matching and fast cure. We use the same major brands (Jotun, Dulux, Caparol) but in landlord-spec shades rather than designer colours. The supplier tints to the exact colour code your developer uses — Emaar, Dubai Properties, Nakheel and the major Damac codes are all on file. The result is a wall that matches perfectly at the handover inspection, with no "spot patch" visible.',
    paintBrands: [
      { name: 'Dulux Easycare',         bestFor: 'Standard move-out, landlord-spec',  notes: 'Affordable, washable, wide colour-match library.' },
      { name: 'Jotun Lady',             bestFor: 'Premium tenant turnover',            notes: 'Used by Emaar Community Management as the default spec.' },
      { name: 'Asian Paints Royale',    bestFor: 'Budget move-out, basic refresh',     notes: 'Reliable mid-tier. Common for older buildings.' },
      { name: 'Dulux Weathershield',    bestFor: 'Boundary walls + outdoor gates',     notes: 'For villa move-out, exterior surfaces.' },
      { name: 'Berger Silk',            bestFor: 'Very-budget single-coat refresh',    notes: 'Lowest cost option for older tenant turnover.' },
    ],
    pitfalls: [
      { title: 'Wrong shade of white', detail: 'There are at least eight common "off-white" shades used in Dubai. Even a 1-shade mismatch is visible to a landlord inspector. Always confirm the developer code before tinting.' },
      { title: 'Painting over water damage without repair', detail: 'Water stains bleed through fresh paint within weeks. Diagnose and fix the source before the topcoat goes on.' },
      { title: 'Skipping mounting-bracket removal', detail: 'TV brackets, shelving anchors and curtain rods left in place look unprofessional and signal "I rushed". Remove all hardware before repainting.' },
      { title: 'Painting only the damaged sections', detail: 'Spot-painting always shows. Repaint full walls (corner-to-corner) so the finish is uniform under all lighting conditions.' },
      { title: 'Cheap budget paint on premium developer specs', detail: 'Some inspectors check brand. Emaar handover spec is Jotun Lady — using Asian Paints Apex saves AED 200 and costs the deposit.' },
    ],
    checklist: [
      'Book 3-7 days before your key handover date',
      'Confirm the developer-spec paint code (or send your building name to us)',
      'Remove all wall hardware (TV brackets, shelves, hooks, curtain rods)',
      'Take "before" photos for your records',
      'Notify your leasing agent that handover-ready painting is scheduled',
      'Arrange access for the crew if you have already moved out',
      'Be present (or video call) for the final walk-through and sign-off',
    ],
    durability:
      'Move-out repaints are designed to look pristine at handover inspection and for the following 30-60 days while the next tenant moves in. Long-term durability is the next tenant\'s concern. The 12-month workmanship warranty still applies — if peeling shows up during the handover window, we return at no cost.',
    sustainability:
      'Even move-out jobs use low-VOC paint by default. The next tenant moves in within days, often with children, so leaving a low-emission surface is non-negotiable for our network. Disposal of leftover paint and tins follows the same protocol as full repaints.',
  },
};
