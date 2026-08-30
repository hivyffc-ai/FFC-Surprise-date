// Structured Data Schema Generator for AI Visibility & SEO
// Generates Service Schema, Breadcrumb Schema, and LocalBusiness Schema
// For use across all page types (keyword, area, service, home)

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceSchemaInput {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  providerName: string;
  providerUrl: string;
  providerPhone: string;
  providerAddress: string;
  providerCity: string;
  providerState?: string;
  providerCountry?: string;
  priceRange?: string;
  areaServed?: string;
  image?: string;
}

export interface LocalBusinessInput {
  name: string;
  description: string;
  url: string;
  phone: string;
  address: string;
  city: string;
  state?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  priceRange?: string;
  openingHours?: string[];
  image?: string;
}

/**
 * Generate BreadcrumbList Schema (JSON-LD)
 * Helps search engines and AI understand page hierarchy
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

/**
 * Generate Service Schema (JSON-LD)
 * Helps AI engines understand what services are offered
 */
export function generateServiceSchema(input: ServiceSchemaInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": input.serviceName,
    "description": input.serviceDescription,
    "url": input.serviceUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": input.providerName,
      "url": input.providerUrl,
      "telephone": input.providerPhone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": input.providerAddress,
        "addressLocality": input.providerCity,
        "addressRegion": input.providerState || "Gujarat",
        "addressCountry": input.providerCountry || "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": input.areaServed || input.providerCity,
    },
    ...(input.priceRange && { "priceRange": input.priceRange }),
    ...(input.image && { "image": input.image }),
    "serviceType": input.serviceName,
  };
}

/**
 * Generate LocalBusiness Schema (JSON-LD)
 * Essential for local SEO and AI business understanding
 */
export function generateLocalBusinessSchema(input: LocalBusinessInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": input.name,
    "description": input.description,
    "url": input.url,
    "telephone": input.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": input.address,
      "addressLocality": input.city,
      "addressRegion": input.state || "Gujarat",
      "postalCode": input.postalCode || "391101",
      "addressCountry": "IN",
    },
    ...(input.latitude && input.longitude && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": input.latitude,
        "longitude": input.longitude,
      },
    }),
    ...(input.priceRange && { "priceRange": input.priceRange }),
    ...(input.openingHours && { "openingHoursSpecification": input.openingHours }),
    ...(input.image && { "image": input.image }),
  };
}

/**
 * Build breadcrumb items for a keyword page
 */
export function buildKeywordBreadcrumbs(
  baseUrl: string,
  siteName: string,
  keywordTitle: string,
  keywordSlug: string
): BreadcrumbItem[] {
  return [
    { name: "Home", url: baseUrl },
    { name: siteName, url: baseUrl },
    { name: keywordTitle, url: `${baseUrl}/${keywordSlug}` },
  ];
}

/**
 * Build breadcrumb items for an area page
 */
export function buildAreaBreadcrumbs(
  baseUrl: string,
  siteName: string,
  areaName: string,
  areaSlug: string
): BreadcrumbItem[] {
  return [
    { name: "Home", url: baseUrl },
    { name: "Areas We Serve", url: `${baseUrl}/areas` },
    { name: areaName, url: `${baseUrl}/${areaSlug}` },
  ];
}

/**
 * Build breadcrumb items for a service category page
 */
export function buildServiceBreadcrumbs(
  baseUrl: string,
  siteName: string,
  serviceName: string,
  serviceSlug: string
): BreadcrumbItem[] {
  return [
    { name: "Home", url: baseUrl },
    { name: "Services", url: baseUrl },
    { name: serviceName, url: `${baseUrl}/${serviceSlug}` },
  ];
}
