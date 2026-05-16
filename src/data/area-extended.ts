// Extended per-area content: deeper paragraphs, seasonal guidance, building access notes.
// Keyed by area slug. Used to enrich /areas/[slug] pages beyond Google's "thin content" threshold.

export type AreaExtended = {
  whatToExpect: string;       // ~120 words — what painters do, typical day flow
  bestSeason: string;          // ~100 words — when and why
  communityAccess: string;     // ~120 words — NOCs, lifts, security, parking
  costFactors: string[];       // 4-6 bullets — what makes prices vary in this area
  preparation: string[];       // 4-6 bullets — what owner should do before crew arrives
};

export const areaExtended: Record<string, AreaExtended> = {
  'dubai-marina': {
    whatToExpect:
      'A Marina painting job is usually a single-day affair. A two-person crew arrives by 9am, secures the service lift slot booked with building security the day before, and unloads dust sheets, ladders and paint via the goods entrance. Most painters paint walls first and ceilings second, with feature walls and finishing touches done last. By 5-6pm the apartment is dust-free, painted and aired out. Photos are sent throughout the day so absent owners can sign off remotely. Marina painters carry portable colour scanners because Princess Tower, Cayan and 23 Marina all use distinct landlord-spec whites that need exact matching at handover.',
    bestSeason:
      'Dubai Marina is comfortable to paint year-round because most jobs are indoors and air-conditioned. The slowest months for booking are November-February when new tenant move-ins peak and lead times stretch to 3-5 days. The fastest turnaround is typically June-August when school families travel and demand softens. Avoid scheduling around DSF (Dubai Shopping Festival, January) and Ramadan if your building restricts noise during prayer hours — confirm with security before booking.',
    communityAccess:
      'Every major Marina tower requires a contractor NOC and a service lift booking before painters can enter. Our vendors hold pre-approved contractor passes for Princess Tower, Cayan, 23 Marina, Marina Crown, Le Reve, Trident Grand, Botanica and the Marina Promenade buildings. The lift booking is made at the security desk the working day before; parking permits are arranged the same time. For Damac and Emaar towers we apply for the NOC online and a copy is held by your building reception on the day.',
    costFactors: [
      'Tower category — Princess, Cayan and 23 Marina sit in the upper price band due to double-height ceilings.',
      'Furniture volume — fully-furnished apartments add 10-15% for protection and refit time.',
      'Paint brand — Dulux Easycare is standard; Jotun Lady or Caparol Premium runs 15-25% more.',
      'Feature walls — first feature wall AED 350-500, each additional wall scales with surface area.',
      'Weekend or after-hours work — same price as weekdays; no premium.',
    ],
    preparation: [
      'Confirm your tower allows weekday or weekend painting (a few restrict noisy work to weekends only).',
      'Move fragile items (TVs, art, mirrors) off the walls. Crew protects everything else.',
      'Empty the wardrobe of clothes if you want the inside repainted.',
      'Choose your paint colour 48 hours in advance so tinting is ready.',
      'Provide one set of keys to security if you cannot be home.',
    ],
  },

  'downtown-dubai': {
    whatToExpect:
      'Downtown apartments — Burj Vista, Burj Views, Boulevard Heights, The Address Residences — are typically painted by 3-person crews because ceiling heights run 3-3.5m and double-height penthouses are common. Premium-tier owners often request Italian decorative work alongside repainting, so projects can span 4-7 days when Marmorino, Stucco Veneziano or hand-painted accents are involved. Each day starts with a security check at the residences gate and lift booking. Materials are delivered direct to the apartment via the goods lift. Glass railings, marble floors and Burj-view windows are masked and protected before any paint touches the walls.',
    bestSeason:
      'Downtown is indoor-painted year-round. The most popular booking window is September-November when school is back, summer travelers have returned and decorators have re-stocked from Italy. Avoid mid-November to early-December if a major event (New Year, F1 Abu Dhabi, COP) is in town — building security tightens and contractor access slows. Ramadan typically halves work-hour capacity but does not change scheduling.',
    communityAccess:
      'Every Downtown building is managed by Emaar Community Management. Our vendors carry active Emaar contractor NOCs renewed every 90 days. Security at Burj Vista, Boulevard Heights and The Address Residences requires the painter\'s ID matched against the day\'s pre-approved list at the gatehouse before lift access is granted. Goods-lift bookings are made through the building concierge 24 hours ahead. Parking is in the visitor lot or contractor zone; on-street parking is enforced.',
    costFactors: [
      'Floor height — high-floor apartments (above level 40) add 5-10% for crew acclimatisation and lift wait time.',
      'Italian materials — San Marco, Valpaint and Oikos materials are imported with 2-3 week lead times.',
      'Decorator hourly rate — master artisans for Marmorino or gold leaf are quoted per session, not per square foot.',
      'Penthouse double-height walls — scaffolding adds AED 1,500-3,500 per project depending on access.',
      'Burj-view window masking — included in standard prep, no surcharge.',
    ],
    preparation: [
      'Book the consultation 4-6 weeks in advance for decorative work to allow Italian material lead times.',
      'Provide a colour code or photo if matching existing Emaar-spec paint.',
      'Notify your building concierge that contractors are coming so visitor cards are ready at the gate.',
      'Discuss curtain and blind handling — many decorators prefer them taken down for protection.',
      'Confirm pets are in another room or boarded for the day to avoid disturbance.',
    ],
  },

  'business-bay': {
    whatToExpect:
      'Business Bay sits between residential and commercial so the typical workflow is split. Office repaints run 6pm-2am over a Friday-Saturday weekend with a 4-person crew so the tenant returns to a finished space on Sunday morning. Residential apartments at Executive Towers, The Sterling, Damac Maison and Marasi Riverside are weekday 9am-6pm jobs with a 2-3 person crew. Both flow start with a quick site walk-through, then dust-sheet protection, wall cleaning, primer where needed, and two coats of premium emulsion. Building management is notified an hour before crew arrival so security and parking are ready.',
    bestSeason:
      'Business Bay paint work runs year-round. Office repaints peak in summer when tenants travel and commercial leases roll over — June-August is the busiest commercial window. Residential bookings peak September-November alongside the school calendar. F1 Abu Dhabi week and major DWTC events (Cityscape, GITEX) tighten Business Bay access — we move bookings around them automatically.',
    communityAccess:
      'Business Bay is managed largely by Dubai Properties (DP) and Emaar. Our contractors hold active NOCs across both portfolios. For commercial buildings on Marasi Drive and the canal, after-hours access is coordinated with the building facility manager who confirms the night crew schedule with the security team. Residential towers require the standard 24-hour notice for service lift booking. RAMS and MSDS documentation is provided for every commercial job before crew enters site.',
    costFactors: [
      'Commercial vs residential — commercial rates run 20-30% higher due to RAMS, MSDS and night-shift logistics.',
      'After-hours scheduling — no premium for nights or weekends; it is the commercial standard.',
      'Brand-spec paint codes — Pantone or RAL matching for office rebrands adds tinting time but no material surcharge.',
      'Floor area — over 200 sqm offices are typically quoted as a single fixed-price project rather than per sqft.',
      'Touch-up clauses — most commercial vendors include a 30-day return touch-up at no charge.',
    ],
    preparation: [
      'For offices: have your facility manager review RAMS and MSDS before the work date.',
      'Move sensitive electronics off desks and away from walls.',
      'Notify your security team of the painter schedule and provide a contractor pass list.',
      'For apartments: book the service lift slot 24 hours ahead via building reception.',
      'Empty filing cabinets along painted walls so they can be moved without damage.',
    ],
  },

  'jumeirah': {
    whatToExpect:
      'Jumeirah villa repaints follow a sequenced flow over 5-8 working days. Day one is a full site walk-through with the foreman and materials delivery. Days two and three handle exterior preparation — power-washing, crack repair, primer. Days four through seven cover interior, room by room, with bedrooms first so the family can sleep undisturbed. Day eight is exterior top-coat application, doors, trim and final post-clean. Pool decking, garden plants and outdoor furniture are sheeted on the first day and uncovered on the last. A senior consultant visits at the midpoint to verify quality before the second exterior coat is applied.',
    bestSeason:
      'Exterior villa work in Jumeirah is best from late October through March when daytime surface temperatures stay below 40°C — paint requires below 35°C for proper curing. Mornings 7am-11am are the prime application window in summer. June-August exterior work is possible only on early-morning starts or shaded facades. Interior work runs year-round. Sandstorm season (March-April) requires a 24-hour pause between coats to let dust settle.',
    communityAccess:
      'Most Jumeirah villas are standalone but a growing share sit in gated compounds (Jumeirah 1 cluster villas, Sunset Mall vicinity, Jumeirah Bay). Standalone villas need only a polite notification to the neighbourhood watch and the immediate neighbour about delivery timing. Compounds require a community NOC issued by the management company — typically a 48-hour turnaround. Our vendors hold active NOCs with the major compound managers and request fresh ones for new addresses.',
    costFactors: [
      'Villa size — 4BR vs 7BR can double the project value due to footprint and exterior facade area.',
      'Exterior coating tier — standard 3-year vs premium 5-year elastomeric systems differ by AED 6-10 per sqm.',
      'Decorative interior — Italian Marmorino, Stucco Veneziano and metallic finishes are quoted separately per wall.',
      'Boundary wall — paint per side of the wall, often shared 50/50 with the neighbour.',
      'Pool deck and gazebo — included only if specified during the site survey.',
    ],
    preparation: [
      'Clear outdoor furniture or move it to the centre of the garden for sheeting.',
      'Trim hedges and trees away from the facade by at least 60cm to give crew access.',
      'Identify any cracks, mould or water damage in advance for the site survey.',
      'Choose colour and finish 7-10 days before start date so all paint is tinted and on site.',
      'Inform the community manager and your neighbour about scaffold timing.',
    ],
  },

  'palm-jumeirah': {
    whatToExpect:
      'Palm Jumeirah villa projects are deliberately slow and meticulous. A Frond villa repaint takes 8-12 working days. Day one is materials staging, dust-sheet rollout and Nakheel security check-in. Days two through four handle exterior preparation — power-wash, salt-residue neutralisation, crack repair and anti-alkali primer. Days five through nine cover interior, normally with two senior painters working alongside the master foreman. Days ten through twelve apply the silicone-based elastomeric top coat to the exterior in two passes. Shoreline apartments follow a tighter 3-5 day schedule. Penthouses with decorative work can stretch 3-4 weeks.',
    bestSeason:
      'Salt-side exterior work on the Palm is best from November to March when humidity drops below 60% and prevailing breezes are gentler. Silicone exterior systems need 4-6 hours of dry surface time between coats; this window is reliable in winter and treacherous in summer. Interior work continues year-round. We typically suspend Palm exterior bookings between July and September as the manufacturer warranty becomes harder to honour at those surface temperatures.',
    communityAccess:
      'Nakheel Community Management oversees the Frond, Trunk and Crescent. Our vendors hold active access permits and submit a fresh contractor request 48 hours before each project. Frond villas require gatehouse approval per visit. Crescent residential towers (Anantara Residences, Tiara, Oceana) have building security in addition to Nakheel. Atlantis Royal residences add an internal concierge step. Parking on the Palm is tight — our crews use Nakheel-marked contractor stalls or arrange in-and-out trips with the foreman holding parking.',
    costFactors: [
      'Salt-rated exterior systems — Jotun Jotashield Extreme, Caparol AmphiSilan, Sto-Color Silco command a premium.',
      'Frond uniformity — every Frond villa has a Nakheel-mandated colour palette; deviation requires special approval.',
      'Italian decorative interior — projects with imported San Marco materials need 2-4 week lead time.',
      'Penthouse access — exterior glazing access from above is quoted per project, scaffolding included.',
      'Atlantis Royal — concierge fees and overnight crew accommodation may apply for sub-12-hour windows.',
    ],
    preparation: [
      'Allow 7-10 days lead time so Nakheel paperwork and material imports can complete.',
      'Discuss colour matching with your Frond neighbour before deviation requests.',
      'Move yacht-tender and beachfront furniture inside for any exterior work.',
      'Inform the gatehouse and Atlantis concierge of the painter schedule the day before.',
      'For penthouses, agree on lift availability windows with the building concierge.',
    ],
  },

  'jlt': {
    whatToExpect:
      'JLT painting is fast, dense and tightly choreographed. A typical 1BR apartment in Saba, Lake View or Goldcrest is painted in a single working day with a 2-person crew. The morning routine is a security check at the DMCC tower gate, then service-lift booking via building reception, then equipment-up via the goods lift. Painters move room by room — bedrooms first, then living room, kitchen and balcony walls last. Most jobs finish by 5pm with the apartment fully aired and dust-free. JLT vendors keep a live access list of which clusters allow same-day access and which need 48-hour NOCs.',
    bestSeason:
      'JLT is indoor-painted year-round. The busiest period is September-November when tenants returning from summer schedule pre-move-in repaints. The fastest scheduling is typically May-July when families travel for the summer. Office painting in JLT runs evenings and weekends and is not seasonally affected. Avoid scheduling around major DMCC events when tower security tightens — your vendor will flag these during the quote.',
    communityAccess:
      'JLT has 87 towers across 26 clusters under DMCC management. Most clusters accept same-day contractor access; a few (Cluster T, Cluster Y, parts of Cluster X) require a 24-48 hour NOC. Our vendors maintain a live JLT access database that flags the requirement per tower at quote time. The service-lift booking is made the morning of the job via the building reception. Parking is in the contractor stall or the visitor lot; meter parking on the perimeter is enforced and can be ticketed within 30 minutes.',
    costFactors: [
      'Cluster paperwork — towers needing 48-hour NOCs add a day to the schedule but no cost.',
      'Floor height — top-floor apartments above level 30 add a small lift-wait surcharge in some buildings.',
      'Furniture volume — fully-furnished tenant apartments add 10-15% for protection and refit time.',
      'Office vs residential — JLT commercial rates run 20-25% higher than residential due to night-shift logistics.',
      'Same-day starts — most studios and 1BR units can start within 4-6 hours of confirmation.',
    ],
    preparation: [
      'Confirm with your building whether the service lift needs same-day or 24-hour booking.',
      'Move sensitive electronics and fragile artwork off the walls and into a different room.',
      'Empty the wardrobe interiors if you want them repainted.',
      'Provide colour codes or paint chips if matching landlord-spec whites.',
      'Notify the JLT cluster security gate of the contractor schedule for fast tower access.',
    ],
  },

  'arabian-ranches': {
    whatToExpect:
      'Arabian Ranches villa projects are typically full-package — interior, exterior, boundary walls — bundled into one fixed-price quote. A 4-bedroom villa repaint runs 5-8 working days. Day one is materials delivery and exterior power-wash. Days two-three handle exterior crack repair and primer. Days four-six cover interior, normally room by room with bedrooms first. Day seven applies the exterior top coat. Day eight refreshes the boundary wall, gates and post-clean. The community is family-dense, so crews work 8am-5pm to respect school-run and afternoon nap schedules.',
    bestSeason:
      'Exterior work in Arabian Ranches is best from October through April. The community sits on the desert edge so summer surface temperatures on west-facing facades exceed 60°C between 11am and 4pm — beyond what most exterior systems can cure cleanly. Sandstorm season (March-April) requires 24-48 hour pauses between coats to let airborne dust settle. Interior work runs year-round inside air-conditioned spaces.',
    communityAccess:
      'Arabian Ranches is fully managed by Emaar Community Management. Every Mr Painter Dubai vendor in the community holds an active Emaar contractor NOC renewed every 90 days. Saheel, Mirador, Alvorada, Hattan and Polo Homes all share the same NOC umbrella but each sub-community has slightly different security drop-off zones. The Ranches gatehouse logs every contractor vehicle in and out. Our vendors notify Emaar Community Management 48 hours before project start so the gate has the schedule.',
    costFactors: [
      'Villa size — Saheel 3BR vs Polo Homes 7BR can quadruple the project value.',
      'Exterior crack repair — older units (Phase 1, 2003-2008 build) often need 2-3 days of dedicated repair.',
      'Boundary wall — quoted per linear metre and split 50/50 with the neighbour.',
      'Garden access — large landscape requires extra protection time, not extra labour.',
      'Compliance with Ranches palette — every Sub-community has Emaar-mandated approved colours.',
    ],
    preparation: [
      'Confirm Ranches community NOC paperwork has been submitted 48 hours ahead.',
      'Trim hedges and ornamental grasses away from the facade by 60cm minimum.',
      'Move garden furniture, BBQ, and pool floats to the centre of the garden for sheeting.',
      'Discuss boundary wall colour with neighbour to share costs and avoid mismatch.',
      'For interior, choose colours 7-10 days ahead so paint is tinted and ready.',
    ],
  },

  'mirdif': {
    whatToExpect:
      'Mirdif villa projects are flexible because most homes are standalone or in small compounds. A typical 4-bedroom villa is painted in 4-6 working days. Crews arrive at 8am and finish by 5pm to respect the family-dense community schedule. Mirdif vendors are known for partial-repaint flexibility — many owners only repaint the sun-affected west facade or the boundary wall before Eid, rather than the full villa, which keeps costs low. Materials are typically Jotun and Dulux rather than Italian imports; the focus is durable, affordable, well-prepared work. The local crew base lives within 15 minutes of most addresses, which keeps mobilisation fast and project costs noticeably below Marina or Downtown equivalents.',
    bestSeason:
      'Exterior work in Mirdif is best from late October through March. Summer surface temperatures on west-facing facades easily exceed 55°C between 11am and 4pm so most vendors pause exterior projects between June and August. The community sits in the eastern wind path so sandstorms in February-April require 24-48 hour pauses between coats. Interior work is unaffected by weather and runs year-round.',
    communityAccess:
      'Mirdif is largely standalone villas with no community NOC requirement, though our vendors notify neighbours and the security beat about scaffolding and delivery timing. Gated compounds (Uptown Mirdif, Mirdif Hills, Shorooq Mirdif) require an internal NOC issued by the community management — typically 24-hour turnaround. Our vendors hold active NOCs for all major Mirdif compounds. Parking is generally available in front of the villa or in the compound visitor lot.',
    costFactors: [
      'Mirdif is 15-25% cheaper than Marina or Jumeirah due to lower vendor overhead and local crew base.',
      'Partial repaints — fixing just the sun-damaged west facade is a common cost-saver.',
      'Older villas (Phase 1, 2002-2007 build) need 2-3 days of dedicated crack repair.',
      'Boundary wall — quoted per side and often shared with the neighbour to halve the cost.',
      'Compound NOC fee — typically AED 100-300 per project, handled by the vendor on your behalf.',
    ],
    preparation: [
      'For compounds, confirm vendor has submitted the internal NOC 24 hours ahead.',
      'Trim hedges and ornamental grasses away from the facade by at least 60cm.',
      'Move garden furniture and outdoor toys to the centre of the garden for sheeting.',
      'Discuss boundary wall with neighbour to share costs and align colour.',
      'Identify cracks, water damage or mould during the site survey for accurate quoting.',
    ],
  },

  'jvc': {
    whatToExpect:
      'Jumeirah Village Circle (JVC) is fast, new-build territory. A typical 1BR apartment repaint runs a single day with a 2-person crew, prep at 8am, finish by 5pm. Townhouses (Diamond Views, Casa Familia, JVC Townhouses) take 3-5 days for interior plus boundary wall. Modern buildings mean minimal prep — most surfaces are flat, recently plastered and accept paint cleanly. The community has a young demographic so weekend bookings (Saturday-Sunday) are popular with working couples who prefer to be home during the work.',
    bestSeason:
      'JVC interior painting runs year-round in air-conditioned units. Exterior townhouse work is best October-April. Summer surface temperatures on west-facing facades exceed 55°C between 11am and 4pm so most vendors pause exterior work June-August. Sandstorm season (March-April) requires 24-48 hour pauses between coats. Newer JVC buildings have lower exterior maintenance needs than older communities like Mirdif or Ranches.',
    communityAccess:
      'JVC apartments are managed across multiple developers (Nakheel for streets, individual developers for towers). Most JVC apartment buildings allow same-day contractor access with a building-reception sign-in. A few towers in District 13 and District 15 require 24-hour NOC notice. Our vendors maintain a live JVC access database. Townhouse access is direct via the front door with parking on the street or in the compound lot. Community speed limits are 40 km/h and enforced — crews plan around it.',
    costFactors: [
      'New-build flat surfaces — minimal prep means quotes come in at the lower end of the range.',
      'Apartment vs townhouse — townhouses with exterior facade add 30-50% over apartment-only work.',
      'Building NOC — most JVC towers require none, but a few (District 13, 15) need 24-hour notice.',
      'Service lift booking — apartments above level 5 require service-lift access; small fee in some towers.',
      'Weekend bookings — same price as weekdays, popular due to younger demographic.',
    ],
    preparation: [
      'Confirm with your building whether contractor access needs same-day or 24-hour notice.',
      'Move sensitive electronics and fragile artwork away from the walls.',
      'For townhouses, move outdoor furniture and pool floats to allow boundary wall access.',
      'Provide colour codes if matching existing builder-spec finishes.',
      'Empty wardrobe interiors if you want them repainted at the same time.',
    ],
  },
};
