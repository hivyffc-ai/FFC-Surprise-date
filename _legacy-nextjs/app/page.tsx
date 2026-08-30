/**
 * MAIN PAGE - FRIENDS FACTORY CAFE VADODARA
 * The main home page for Friends Factory Cafe - Vadodara Surprise Celebrations
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for Friends Factory Cafe - Surprise Celebrations
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteConfig.name} | #1 Surprise Planning Experts in Vadodara`,
    description: `Plan the perfect surprise in Vadodara! Birthday surprises, anniversary surprises, surprise dates, surprise proposals & romantic surprise celebrations at our 100% private rooftop venue.`,
    keywords: [
      'surprise planning vadodara',
      'birthday surprise vadodara',
      'anniversary surprise vadodara',
      'surprise date vadodara',
      'surprise proposal vadodara',
      'surprise for boyfriend vadodara',
      'surprise for girlfriend vadodara',
      'surprise for husband vadodara',
      'surprise for wife vadodara',
      'romantic surprise vadodara',
      'surprise planners vadodara',
      'friends factory cafe vadodara'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `${siteConfig.name} | Surprise Planning Experts Vadodara`,
      description: siteConfig.tagline,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}