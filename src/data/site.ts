export const site = {
  name: 'Mr Painter Dubai',
  shortName: 'Mr Painter',
  legalName: 'Mr Painter Dubai LLC',
  tagline: 'Compare Dubai\'s top-rated painters in 60 seconds',
  description:
    'Get free quotes from 5+ verified painters in your area. Interior, exterior, villa & apartment painting across Dubai. Trusted by 10,000+ homeowners.',
  url: 'https://mrpainterdubai.com',
  locale: 'en-AE',
  twitterHandle: '@mrpainterdubai',
  email: 'hello@mrpainterdubai.com',
  phone: '+971 54 485 6912',
  phoneE164: '+971544856912',
  whatsapp: '971544856912',
  whatsappDefaultMessage:
    'Hi Mr Painter Dubai, I would like a free painting quote.',
  address: {
    streetAddress: 'Office 1204, Boulevard Plaza Tower 1',
    addressLocality: 'Downtown Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: { latitude: 25.1972, longitude: 55.2744 },
  openingHours: 'Mo-Su 08:00-22:00',
  priceRange: 'AED 12 - 35 / sqft',
  founded: '2024',
  social: {
    instagram: 'https://instagram.com/mrpainterdubai',
    facebook: 'https://facebook.com/mrpainterdubai',
    tiktok: 'https://tiktok.com/@mrpainterdubai',
    linkedin: 'https://linkedin.com/company/mrpainterdubai',
  },
  stats: {
    vendors: 120,
    areasCovered: 35,
    jobsCompleted: 10800,
    averageRating: 4.8,
    reviewCount: 2340,
  },
  // Tracking / search-console codes. Each can be overridden via the matching
  // env var at build time (PUBLIC_GA4_ID, PUBLIC_GSC_VERIFICATION) so secrets
  // can stay out of the repo. Leave empty strings here as the safe default.
  analytics: {
    // Paste your GA4 measurement ID — looks like "G-XXXXXXXXXX"
    ga4MeasurementId: '',
    // Paste the value Google Search Console gives you for the "HTML tag"
    // verification method — only the content="..." string, not the full tag.
    searchConsoleVerification: '',
    // Bing Webmaster Tools verification (optional) — same format.
    bingVerification: '',
  },
};

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappDefaultMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function canonical(path: string = '/') {
  // We use trailingSlash: 'always' so canonicals must end in '/' for consistency
  // with build output and to avoid duplicate-URL signals.
  if (!path || path === '/' || path === '') return `${site.url}/`;
  const lead = path.startsWith('/') ? path : `/${path}`;
  const trail = lead.endsWith('/') ? lead : `${lead}/`;
  return `${site.url}${trail}`;
}
