// Extended per-vendor content: ideal client fit, typical timeline, signature traits.
// Keyed by vendor slug. Used to push /vendors/[slug] pages above Google's 800-word ideal.

export type VendorExtended = {
  bestFor: string[];           // 4-6 ideal-client scenarios
  notForUs: string[];          // 2-3 honest "this is not us"
  timeline: { phase: string; duration: string; detail: string }[];
  signatureTraits: string;     // ~140 words — what makes them recognisable
  workingStyle: string;        // ~120 words — how they communicate, schedule, handle issues
};

export const vendorExtended: Record<string, VendorExtended> = {
  'elite-painters-dubai': {
    bestFor: [
      'Full villa repaints on the Palm, Emirates Hills, Jumeirah Bay and Downtown',
      'Italian decorative work (Marmorino, Stucco Veneziano, gold leaf)',
      'Penthouse and double-height feature walls in high-end towers',
      'Owners who want one accountable consultant from brief to handover',
      'Projects with 4-6 week planning windows allowing imported materials',
    ],
    notForUs: [
      'Same-day apartment turnover under AED 4,500 — better routed to a specialist',
      'Budget-tier full villa packages — our pricing reflects premium positioning',
      'Single feature walls under 8 sqm — minimum charge applies and is rarely cost-effective',
    ],
    timeline: [
      { phase: 'Brief & consultation', duration: '1-2 days', detail: 'Senior consultant visits your home, takes measurements, photographs and discusses palette.' },
      { phase: 'Sample boards', duration: '3-5 days', detail: 'For decorative work, 2-3 sample boards prepared on your wall and presented in your light.' },
      { phase: 'Quote & approval', duration: '2 days', detail: 'Written fixed-price quote with brand spec, warranty term and timeline.' },
      { phase: 'Material import', duration: '7-21 days', detail: 'Italian materials shipped from San Marco or Valpaint with confirmed batch numbers.' },
      { phase: 'Execution', duration: '5-21 days', detail: 'Senior foreman on site each day; client walk-through midway and on completion.' },
    ],
    signatureTraits:
      'Elite Painters is recognised by three things in the trade. First, their foremen are unusually senior — every project has a 12+ year veteran on site daily, not a junior crew leader. Second, their material protocol is rigorous: only premium brands, often imported, with documented batch numbers and warranty paperwork from the manufacturer. Third, their walk-through process is methodical — clients receive a daily photo log, a midpoint quality review with the founder, and a final pre-handover inspection where any flagged issue is corrected before payment. The result is a near-zero rework rate and a referral-driven business model. About 70% of new projects come from past clients or their interior designers.',
    workingStyle:
      'Communication is handled through a single named consultant for the duration of the project. WhatsApp is the default channel for daily updates with photos. Site visits by the client are encouraged but never required — many overseas owners run their Palm villa repaint remotely through FaceTime walk-throughs. Issues are surfaced proactively: if something during prep needs to change scope, the consultant flags it the same day with a variation quote rather than absorbing it silently. Payment is staged — typically 30% on confirmation, 30% midway, 40% on signed handover. NDAs are signed on request and they are routinely worked around with privacy-conscious clients.',
  },

  'royal-finish-llc': {
    bestFor: [
      'Same-day or next-day 1-2BR apartment repaints in Marina, JLT, Business Bay, JVC',
      'Tenant move-in and move-out turnaround between leases',
      'Landlord-spec colour matching for handover inspections',
      'After-hours commercial office repaints (Friday-Sunday)',
      'Multi-unit landlord portfolios refreshed in sequence',
    ],
    notForUs: [
      'Villa exterior elastomeric systems — better routed to a specialist',
      'Italian decorative finishes — outside our specialism',
      'Premium Marmorino, Stucco Veneziano or gold leaf — not part of our team',
    ],
    timeline: [
      { phase: 'WhatsApp survey', duration: '15-30 min', detail: 'Video walk-through over WhatsApp gives most quotes without an in-person visit.' },
      { phase: 'Written quote', duration: 'Within 1 hour', detail: 'Fixed-price quote with paint brand, coverage and warranty term.' },
      { phase: 'Schedule', duration: 'Same-day to 48 hr', detail: 'Studio and 1BR units often start the same afternoon; 2-3BR within 1-2 days.' },
      { phase: 'Execution', duration: '1-3 days', detail: 'Crew arrives 9am, completes prep, paints, and tidies before 6pm.' },
      { phase: 'Sign-off', duration: '30 min', detail: 'Final walk-through with client (or video call if remote) before handover.' },
    ],
    signatureTraits:
      'Royal Finish is built around speed without cutting corners. The founder spent eight years as a hotel facility-management lead, where the imperative was always "rooms back into service by check-in". That discipline carries into apartment painting — strict 9am start, photos every hour, dust-sheets that go further than usual, and a hard 6pm finish target for any 1-2BR. Three crews on rotation means weekend and after-hours bookings carry no premium and rarely slip. The team works in English, Hindi, Urdu and Arabic, which makes a difference when coordinating with building security or remote landlords. Same-day starts are honest: about 70% of studio and 1BR requests booked before 9am genuinely begin that afternoon.',
    workingStyle:
      'Communication is WhatsApp-first because that is where Dubai apartment owners and tenants live. Photos arrive every hour during the work; final sign-off can happen via video if the client is at work or overseas. Quotes are fixed-price, no surprises, and the team keeps a record of common landlord-spec colours so move-out repaints pass first inspection. If a tiny touch-up is needed within the warranty period, they come back same-week at no charge. Payment is typically 30% on start and 70% on signed completion — they accept bank transfer, cash and major UAE cards.',
  },

  'sahara-coats': {
    bestFor: [
      'Full villa exterior repaints in Arabian Ranches, Mirdif, Jumeirah and JVC',
      'Boundary wall and gate refreshes between neighbours',
      'Sun and salt-damaged facade restoration',
      'Owners wanting 5-year manufacturer-backed warranty on exterior',
      'Pre-sale or pre-rental property uplift',
    ],
    notForUs: [
      'Italian decorative interior — outside our specialism',
      'Penthouse decorative work in Downtown or Palm — better routed elsewhere',
      'Same-day apartment turnover — our crew structure is built for slower villa work',
    ],
    timeline: [
      { phase: 'Site assessment', duration: '1 day', detail: 'Founder visits, photographs facade, documents existing condition.' },
      { phase: 'Quote', duration: '1-2 days', detail: 'Written fixed quote with primer, system, top-coat brand and warranty length.' },
      { phase: 'Permit & NOC', duration: '2-5 days', detail: 'Emaar or community NOC applied for; scaffolding rental confirmed.' },
      { phase: 'Prep & exterior', duration: '4-7 days', detail: 'Power-wash, crack repair, primer, two coats of elastomeric. Founder on site daily.' },
      { phase: 'Warranty handover', duration: '1 day', detail: 'Manufacturer-backed warranty certificate issued with batch numbers and photos.' },
    ],
    signatureTraits:
      'Sahara Coats has earned its reputation by specialising. The founder is a former Jotun technical consultant, which means every quote includes an honest read on what system will actually last on your specific facade. The team is deliberately small — one foreman, four painters — so the founder personally oversees every project. The prep stage is unusually long compared to competitors: power-wash, crack repair, anti-alkali primer, and two coats. The trade-off is a slightly higher quote upfront and a longer schedule, balanced against a manufacturer-backed 5-7 year warranty that competitors cannot match. About 60% of Sahara\'s projects come from referrals through community WhatsApp groups in Ranches and Mirdif.',
    workingStyle:
      'Communication is direct with the founder, especially during quote and inspection phases. WhatsApp for daily updates and photos. The team uses a documented prep checklist photographed at each stage — this is what makes the warranty enforceable, because the manufacturer can audit prep against the warranty terms. Payment is staged: 25% on start, 50% midway after exterior primer, 25% on signed handover and warranty issuance. Sahara suspends exterior work in Dubai\'s peak summer (June-August) because the manufacturer warranty becomes harder to honour at those surface temperatures.',
  },

  'crown-decor-painting': {
    bestFor: [
      'High-end decorative work in Downtown, Palm Jumeirah and Jumeirah',
      'Marmorino, Stucco Veneziano, gold and silver leaf',
      'Hand-painted murals and bespoke ceiling work',
      'Owners working with interior designers and architects',
      'Premium villa interiors where every wall is a considered choice',
    ],
    notForUs: [
      'Standard apartment or villa repaints — outside our specialism',
      'Same-day or quick-turnaround work — decorative finishes take 3-7 days per wall',
      'Budget projects — our pricing reflects master-artisan work',
    ],
    timeline: [
      { phase: 'Design consult', duration: '60 min, free', detail: 'Giovanni visits your home to discuss palette, finish and how it will work in your light.' },
      { phase: 'Sample boards', duration: '5-7 days', detail: '2-3 boards prepared on your actual wall so you see the finish in your light.' },
      { phase: 'Material import', duration: '14-21 days', detail: 'San Marco, Valpaint or Oikos materials shipped from Italy with batch documentation.' },
      { phase: 'Application', duration: '3-21 days', detail: 'Single artisan working alone, building up 3-7 layers over the project duration.' },
      { phase: 'Sealing & handover', duration: '1 day', detail: 'Wax or topcoat sealer applied, hand-polished, care guide and kit provided.' },
    ],
    signatureTraits:
      'Crown Decor is built around one master artisan and his apprentice. Giovanni Costa is a third-generation Italian decorator who relocated to Dubai in 2009 and trained under his grandfather in Venice before that. The work is unmistakably hand-made: Marmorino with depth that shifts with light, Stucco Veneziano with mirror-like polish, gold leaf laid square by square with bone burnishers. Materials are imported directly from Italian houses — never substituted for local alternatives. Projects are accepted at a small pace, typically 2-3 in progress at a time, because Giovanni personally executes every decorative wall rather than delegating. Repeat clients include three of Dubai\'s most-photographed penthouses and a half-dozen Palm Frond villas.',
    workingStyle:
      'Communication runs through Giovanni directly or through his senior apprentice. WhatsApp for photos and updates, email for technical specifications and material orders. Sample boards are non-negotiable — Giovanni will not begin a project without the client approving 2-3 boards on the actual wall. Payment is staged: 30% on confirmation, 30% on material import, 40% on signed completion. NDAs are routine — most of Giovanni\'s clients prefer their finished home not to be photographed for the company portfolio, and he respects that. The result is that the publicly visible portfolio is a fraction of the actual portfolio.',
  },
};
