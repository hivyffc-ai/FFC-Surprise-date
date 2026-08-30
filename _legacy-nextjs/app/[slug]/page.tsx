/**
 * DYNAMIC [SLUG] PAGE
 * Handles all service category, keyword, and area pages for Friends Factory Cafe
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import FFCAreaPage from "@/components/ffc-area-page";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import FFCServiceCategoryPage from "@/components/ffc-service-category-page";
import { 
  vadodaraAreas, 
  getAreaBySlug, 
  serviceCategories,
  getServiceBySlug,
  ServiceKeyword,
  ServiceCategory
} from "@/lib/ffc-config";

// Get all keyword slugs from all service categories
function getAllKeywords(): { slug: string; keyword: ServiceKeyword; service: ServiceCategory }[] {
  const keywords: { slug: string; keyword: ServiceKeyword; service: ServiceCategory }[] = [];
  
  serviceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      keywords.push({
        slug: keyword.slug,
        keyword,
        service
      });
    });
  });
  
  return keywords;
}

// Find keyword by slug
function findKeywordBySlug(slug: string): { keyword: ServiceKeyword; service: ServiceCategory } | undefined {
  const allKeywords = getAllKeywords();
  const found = allKeywords.find(k => k.slug === slug);
  if (found) {
    return { keyword: found.keyword, service: found.service };
  }
  return undefined;
}

// Generate static params for all possible routes
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Add all service category pages
  serviceCategories.forEach((service) => {
    params.push({ slug: service.slug });
  });
  
  // Add all area pages
  vadodaraAreas.forEach((area) => {
    params.push({ slug: area.slug });
  });
  
  // Add all keyword pages from all services
  getAllKeywords().forEach(({ slug }) => {
    params.push({ slug });
  });
  
  return params;
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if it's a service category page
  const serviceCategory = getServiceBySlug(slug);
  if (serviceCategory) {
    return {
      title: serviceCategory.metaTitle,
      description: serviceCategory.metaDescription,
      keywords: [
        serviceCategory.name.toLowerCase(),
        `${serviceCategory.name.toLowerCase()} vadodara`,
        `${serviceCategory.name.toLowerCase()} for couples`,
        `best ${serviceCategory.name.toLowerCase()} vadodara`,
        `friends factory cafe ${serviceCategory.name.toLowerCase()}`
      ],
      alternates: {
        canonical: `https://surprisedatevadodara.com/${serviceCategory.slug}`,
      },
      openGraph: {
        title: serviceCategory.metaTitle,
        description: serviceCategory.metaDescription,
        url: `https://surprisedatevadodara.com/${serviceCategory.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Friends Factory Cafe",
      },
      twitter: {
        card: "summary_large_image",
        title: serviceCategory.metaTitle,
        description: serviceCategory.metaDescription,
      },
    };
  }
  
  // Check if it's an area page
  const area = getAreaBySlug(slug);
  if (area) {
    const areaTitle = `Romantic Celebration in ${area.name}, Vadodara | Friends Factory Cafe`;
    const areaDescription = `Book romantic celebrations, candlelight dinners, birthday surprises & anniversary parties in ${area.name}, Vadodara at Friends Factory Cafe. Private rooftop venue with stunning setups. Call +91 74878 88730.`;
    
    return {
      title: areaTitle,
      description: areaDescription,
      keywords: [
        `romantic celebration ${area.name}`,
        `candlelight dinner ${area.name}`,
        `birthday surprise ${area.name}`,
        `friends factory cafe ${area.name}`,
        `couple cafe ${area.name} vadodara`,
        `anniversary dinner ${area.name}`,
        `romantic restaurant ${area.name}`,
        `private dining ${area.name}`
      ],
      alternates: {
        canonical: `https://surprisedatevadodara.com/${area.slug}`,
      },
      openGraph: {
        title: areaTitle,
        description: `Premium romantic celebration services for couples in ${area.name}, Vadodara. Birthday surprises, candlelight dinners & more!`,
        url: `https://surprisedatevadodara.com/${area.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Friends Factory Cafe",
      },
      twitter: {
        card: "summary_large_image",
        title: `Romantic Celebrations in ${area.name} | Friends Factory Cafe`,
        description: `Book romantic celebrations in ${area.name}, Vadodara.`,
      },
    };
  }
  
  // Check if it's a keyword page
  const keywordData = findKeywordBySlug(slug);
  if (keywordData) {
    const keywordTitle = keywordData.keyword.metaTitle;
    const keywordDescription = keywordData.keyword.metaDescription;
    
    return {
      title: keywordTitle,
      description: keywordDescription,
      keywords: [
        keywordData.keyword.title.toLowerCase(),
        `${keywordData.keyword.title.toLowerCase()} vadodara`,
        `${keywordData.service.name.toLowerCase()} vadodara`,
        `friends factory cafe ${keywordData.keyword.title.toLowerCase()}`,
        `best ${keywordData.keyword.title.toLowerCase()} vadodara`,
        `${keywordData.service.name.toLowerCase()} near me vadodara`
      ],
      alternates: {
        canonical: `https://surprisedatevadodara.com/${keywordData.keyword.slug}`,
      },
      openGraph: {
        title: keywordTitle,
        description: keywordDescription,
        url: `https://surprisedatevadodara.com/${keywordData.keyword.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Friends Factory Cafe",
      },
      twitter: {
        card: "summary_large_image",
        title: keywordTitle,
        description: keywordDescription,
      },
    };
  }
  
  return {
    title: "Page Not Found",
  };
}

// Main page component
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check if it's a service category page
  const serviceCategory = getServiceBySlug(slug);
  if (serviceCategory) {
    return <FFCServiceCategoryPage service={serviceCategory} />;
  }
  
  // Check if it's an area page
  const area = getAreaBySlug(slug);
  if (area) {
    return <FFCAreaPage area={area} />;
  }
  
  // Check if it's a keyword page
  const keywordData = findKeywordBySlug(slug);
  if (keywordData) {
    return <FFCKeywordPage service={keywordData.service} keyword={keywordData.keyword} />;
  }
  
  // Not found
  notFound();
}
