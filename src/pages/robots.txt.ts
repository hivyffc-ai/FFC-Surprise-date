import type { APIRoute } from 'astro';
import { SEO_CONFIG } from '@/lib/seo-config';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /admin/',
    'Disallow: /_next/',
    'Disallow: /private/',
    '',
    `Sitemap: ${SEO_CONFIG.siteUrl}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
