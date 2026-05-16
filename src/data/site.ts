export const site = {
  name: 'PaintHub Dubai',
  legalName: 'PaintHub Dubai LLC',
  tagline: 'Compare Dubai\'s top-rated painters in 60 seconds',
  description:
    'Get free quotes from 5+ verified painters in your area. Interior, exterior, villa & apartment painting across Dubai. Trusted by 10,000+ homeowners.',
  url: 'https://painthubdubai.ae',
  locale: 'en-AE',
  twitterHandle: '@painthubdubai',
  email: 'hello@painthubdubai.ae',
  phone: '+971 50 000 0000',
  phoneE164: '+971500000000',
  whatsapp: '971500000000',
  whatsappDefaultMessage:
    'Hi PaintHub, I would like a free painting quote.',
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
    instagram: 'https://instagram.com/painthubdubai',
    facebook: 'https://facebook.com/painthubdubai',
    tiktok: 'https://tiktok.com/@painthubdubai',
    linkedin: 'https://linkedin.com/company/painthubdubai',
  },
  stats: {
    vendors: 120,
    areasCovered: 35,
    jobsCompleted: 10800,
    averageRating: 4.8,
    reviewCount: 2340,
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
