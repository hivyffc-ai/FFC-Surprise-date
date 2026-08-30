import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D97706", // Amber-600 for FFC
};

export const metadata: Metadata = {
  metadataBase: new URL("https://surprisedatevadodara.com"),
  title: {
    default: "Friends Factory Cafe | Surprise Planning Vadodara",
    template: "%s | Friends Factory Cafe",
  },
  description:
    "Best surprise planning in Vadodara! Birthday surprises, anniversary surprises & romantic dates. 100% private rooftop. Starting ₹6,900. Book now!",
  keywords: [
    "surprise planning vadodara",
    "birthday surprise vadodara",
    "anniversary surprise vadodara",
    "surprise date vadodara",
    "surprise proposal vadodara",
    "surprise for boyfriend vadodara",
    "surprise for girlfriend vadodara",
    "surprise for husband vadodara",
    "surprise for wife vadodara",
    "surprise planners vadodara",
    "romantic surprise vadodara",
    "friends factory cafe vadodara",
    "surprise party vadodara",
    "midnight birthday surprise vadodara",
    "surprise gift delivery vadodara",
    "surprise decorations vadodara",
    "best surprise ideas vadodara",
    "private surprise venue vadodara",
    "rooftop surprise vadodara",
    "couple surprise vadodara",
    "birthday surprise for boyfriend vadodara",
    "birthday surprise for girlfriend vadodara",
    "anniversary surprise for husband vadodara",
    "anniversary surprise for wife vadodara"
  ],
  authors: [{ name: "Friends Factory Cafe", url: "https://surprisedatevadodara.com" }],
  creator: "Friends Factory Cafe",
  publisher: "Friends Factory Cafe",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Restaurant",
  classification: "Romantic Celebration Venue",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://surprisedatevadodara.com",
    siteName: "Friends Factory Cafe",
    title: "Friends Factory Cafe Vadodara | Best Romantic Celebration Venue",
    description: "Best romantic celebration venue in Vadodara. Birthday surprises, candlelight dinners, anniversaries, proposals. 100% private rooftop & glass house experiences. Starting ₹6,900.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Friends Factory Cafe - Best Romantic Celebrations in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friends Factory Cafe Vadodara | Best Romantic Celebration Venue",
    description: "Best romantic celebration venue in Vadodara. Birthday surprises, candlelight dinners, proposals & more! Starting ₹6,900.",
    images: ["/images/twitter-image.jpg"],
    creator: "@friendsfactorycafe",
    site: "@friendsfactorycafe",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "c1b155cb6acd07f9", // From googlec1b155cb6acd07f9.html
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara",
    "geo.position": "22.3072;73.1812",
    "ICBM": "22.3072, 73.1812",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://surprisedatevadodara.com/#business",
      "name": "Friends Factory Cafe",
      "alternateName": "Friends Factory Cafe Vadodara",
      "description": "Best romantic celebration venue in Vadodara, Gujarat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots. 100% private rooftop & glass house experiences.",
      "url": "https://surprisedatevadodara.com",
      "telephone": "+91-7487888730",
      "email": "hello@surprisedatevadodara.com",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
      "image": [
        "https://surprisedatevadodara.com/images/gallery/romantic-rooftop-candlelight-dinner-vadodara-1.jpg",
        "https://surprisedatevadodara.com/images/gallery/birthday-surprise-decoration-vadodara-1.jpg",
        "https://surprisedatevadodara.com/images/gallery/glass-house-dinner-vadodara-1.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa",
        "addressLocality": "Gotri",
        "addressRegion": "Gujarat",
        "postalCode": "391101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.3072",
        "longitude": "73.1812"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/friendsfactorycafe/",
        "https://www.facebook.com/friendsfactorycafe/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Romantic Celebration Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Birthday Surprise Package",
              "description": "Private rooftop birthday celebration with decorations, cake, and romantic setup"
            },
            "price": "6900",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Candlelight Dinner",
              "description": "Romantic candlelight dinner for couples with private setting"
            },
            "price": "6900",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Anniversary Celebration",
              "description": "Special anniversary celebration with decorations and intimate dining"
            },
            "price": "6900",
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://surprisedatevadodara.com/#website",
      "url": "https://surprisedatevadodara.com",
      "name": "Friends Factory Cafe",
      "description": "Best romantic celebration venue in Vadodara",
      "publisher": {
        "@id": "https://surprisedatevadodara.com/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://surprisedatevadodara.com/services?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://surprisedatevadodara.com/#organization",
      "name": "Friends Factory Cafe",
      "url": "https://surprisedatevadodara.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://surprisedatevadodara.com/images/gallery/friends-factory-cafe-logo-1.png",
        "width": "512",
        "height": "512"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7487888730",
        "contactType": "reservations",
        "areaServed": "Vadodara",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://surprisedatevadodara.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://surprisedatevadodara.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://surprisedatevadodara.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Packages",
          "item": "https://surprisedatevadodara.com/packages"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
