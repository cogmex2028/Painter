import { services } from './services';
import { areas } from './areas';
import { vendors } from './vendors';

/** ISO timestamps for static pages — bump when page content changes. */
export const STATIC_PAGE_UPDATED_AT: Record<string, string> = {
  '/': '2026-05-18T09:55:11.000Z',
  '/about/': '2026-05-16T10:45:26.000Z',
  '/calculator/': '2026-05-18T10:11:03.000Z',
  '/contact/': '2026-05-16T10:45:26.000Z',
  '/faq/': '2026-05-16T13:03:08.000Z',
  '/painter-near-me/': '2026-05-18T09:55:11.000Z',
  '/pricing/': '2026-05-16T13:42:58.000Z',
  '/privacy/': '2026-05-18T08:50:10.000Z',
  '/sitemap/': '2026-05-16T14:05:51.000Z',
  '/terms/': '2026-05-16T10:45:26.000Z',
};

function maxDate(dates: string[]) {
  return dates.reduce((latest, d) => (d > latest ? d : latest));
}

function dynamicPaths(): Record<string, string> {
  const paths: Record<string, string> = {};

  for (const service of services) {
    paths[`/services/${service.slug}/`] = service.updatedAt;
  }
  for (const area of areas) {
    paths[`/areas/${area.slug}/`] = area.updatedAt;
  }
  for (const vendor of vendors) {
    paths[`/vendors/${vendor.slug}/`] = vendor.updatedAt;
  }

  const serviceDates = services.map((s) => s.updatedAt);
  const areaDates = areas.map((a) => a.updatedAt);
  if (serviceDates.length) paths['/services/'] = maxDate(serviceDates);
  if (areaDates.length) paths['/areas/'] = maxDate(areaDates);

  return paths;
}

let cached: Record<string, string> | null = null;

function allPaths() {
  if (!cached) cached = { ...STATIC_PAGE_UPDATED_AT, ...dynamicPaths() };
  return cached;
}

export function normalizePath(path: string) {
  if (!path || path === '/') return '/';
  const lead = path.startsWith('/') ? path : `/${path}`;
  return lead.endsWith('/') ? lead : `${lead}/`;
}

/** Canonical last-modified ISO string for a page path. */
export function lastmodForPath(path: string): string {
  return allPaths()[normalizePath(path)] ?? new Date().toISOString();
}
