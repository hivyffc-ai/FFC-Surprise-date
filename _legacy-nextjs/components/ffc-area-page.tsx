'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Gift, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact, birthdayHeroImages } from '@/components/ffc-gallery';
import { AreaConfig, packages, serviceCategories, vadodaraAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { getAreaContent } from '@/lib/ffc-area-content';
import { generateAreaExpandedContent, generateAreaFAQContent } from '@/lib/seo-content-engine';
import { generateBreadcrumbSchema, generateServiceSchema, buildAreaBreadcrumbs } from '@/lib/schema-generator';

interface AreaPageProps {
  area: AreaConfig;
}

export default function FFCAreaPage({ area }: AreaPageProps) {
  // Hero slider state
  const [heroSlide, setHeroSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Get nearby areas (excluding current)
  const nearbyAreas = vadodaraAreas.filter(a => a.slug !== area.slug).slice(0, 8);
  
  // Get unique content for this area (if available)
  const uniqueContent = getAreaContent(area.slug);

  // SEO Content Expansion: 700+ unique words + 10 unique FAQs with schema
  const seoContent = generateAreaExpandedContent(area.name);
  const seoFAQs = generateAreaFAQContent(area.name);

  // Merge FAQs: handcrafted first, then fill to 10 from SEO engine
  const existingFAQs = uniqueContent?.faqs || [
    {
      question: `How do couples from ${area.name} reach Friends Factory Cafe?`,
      answer: `Friends Factory Cafe is conveniently located in Vadodara and easily accessible from ${area.name}. You can reach us by car, auto, or cab in a short time. Contact us for exact directions.`
    },
    {
      question: "Do you offer pickup services?",
      answer: "Currently, we don't offer pickup services, but we can help guide you with the best routes from your location."
    },
    {
      question: "What are the booking options available?",
      answer: `Couples from ${area.name} can book via WhatsApp, phone call, or our online form. We recommend booking 2-3 days in advance for your preferred slot.`
    },
    {
      question: "Is the venue private?",
      answer: "Yes! Your celebration is 100% private. No other guests will be present during your booking slot."
    }
  ];
  const allFAQs = [...existingFAQs];
  const existingQuestions = new Set(allFAQs.map(f => f.question.toLowerCase()));
  for (const faq of seoFAQs.faqs) {
    if (allFAQs.length >= 10) break;
    if (!existingQuestions.has(faq.question.toLowerCase())) {
      allFAQs.push(faq);
      existingQuestions.add(faq.question.toLowerCase());
    }
  }

  const faqSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Breadcrumb Schema for AI visibility
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildAreaBreadcrumbs(siteConfig.website, siteConfig.name, area.name, area.slug)
  );

  // Service Schema for AI visibility
  const serviceSchema = generateServiceSchema({
    serviceName: `${siteConfig.name} - ${area.name} Vadodara`,
    serviceDescription: `Best birthday surprise celebration venue near ${area.name}, Vadodara. Private rooftop celebrations, romantic decorations, and intimate setups.`,
    serviceUrl: `${siteConfig.website}/${area.slug}`,
    providerName: siteConfig.name,
    providerUrl: siteConfig.website,
    providerPhone: siteConfig.phone,
    providerAddress: siteConfig.address,
    providerCity: siteConfig.city,
    priceRange: '₹4700 - ₹14900',
    areaServed: `${area.name}, Vadodara`,
  });

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <main>
      {/* Breadcrumb */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-pink-500">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-pink-500">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-pink-500 font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section — Homepage-style slider with booking form */}
      <section aria-label={`Celebrations in ${area.name}`} className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {birthdayHeroImages.slice(0, 3).map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt={`Celebrations in ${area.name} Vadodara - Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {birthdayHeroImages.slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === heroSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" /> {area.name}, Vadodara
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Romantic Celebrations in {area.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                {uniqueContent?.heroSubtitle || `Friends Factory Cafe brings premium romantic celebration experiences to couples in ${area.name}, Vadodara. Book birthday surprises, candlelight dinners, anniversaries & more!`}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={`${area.name} Area Page`} 
                  className="bg-white text-pink-500 hover:bg-pink-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              {/* Dynamic Hero Badges */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                {uniqueContent?.heroBadges ? (
                  uniqueContent.heroBadges.map((badge, index) => (
                    <span key={index} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                      {badge}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                      <Star className="h-4 w-4" /> 4.9★ Rating
                    </span>
                    <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                      <Check className="h-4 w-4" /> 100% Private
                    </span>
                    <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                      <Heart className="h-4 w-4" /> Couples Only
                    </span>
                  </>
                )}
              </div>
            </div>
            
            {/* Hero Booking Form — Desktop */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" pageTitle={`${area.name} Area`} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form — Above the fold on mobile */}
      <section className="lg:hidden bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm pageTitle={`${area.name} Area`} />
        </div>
      </section>

      {/* Top Services in This Area - Dynamic per area */}
      {uniqueContent?.topServicesInArea && (
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">
                Most Popular in {area.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What {area.name} couples celebrate most with us
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {uniqueContent.topServicesInArea.map((service, index) => (
                <Card key={index} className="border-pink-200 hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl mb-4 block">{service.emoji}</span>
                    <Badge className="mb-3 bg-pink-100 text-pink-700">{service.popularity}</Badge>
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services in This Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Our Services in {area.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {uniqueContent?.servicesDescription || `All celebration services available for couples in ${area.name}`}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all border-pink-100 group text-center">
                  <CardContent className="p-4 md:p-6">
                    <span className="text-4xl md:text-5xl mb-3 md:mb-4 block">{service.emoji}</span>
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-pink-500 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-1 hidden md:block">
                      in {area.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Booking */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Romantic Celebrations Near {area.name}
                </h2>
                
                {/* Unique Introduction Content */}
                {uniqueContent ? (
                  <div className="text-gray-600 mb-6 whitespace-pre-line">
                    {uniqueContent.introduction}
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600 mb-6">
                      Are you looking for the perfect romantic celebration venue near {area.name}, Vadodara? Friends Factory Cafe is your destination for creating unforgettable moments with your loved one.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Whether you're celebrating a birthday, anniversary, proposal, or simply want a romantic candlelight dinner, our venue offers stunning rooftop setups and elegant glass houses that provide the perfect ambiance for your special moments.
                    </p>
                  </>
                )}

                {/* About the Area - Only if unique content exists */}
                {uniqueContent?.aboutArea && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-pink-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-pink-500" />
                      About {area.name}
                    </h3>
                    <p className="text-gray-600">{uniqueContent.aboutArea}</p>
                  </div>
                )}

                <div className="bg-white rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-pink-500" />
                    What We Offer in {area.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Birthday Surprise Celebrations",
                      "Candlelight Dinner Dates",
                      "Anniversary Celebrations",
                      "Romantic Proposal Setups",
                      "Surprise Date Nights",
                      "Pre-Wedding Photoshoots",
                      "Baby Moment Celebrations",
                      "Custom Celebrations"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-pink-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Advantage - Only if unique content exists */}
                {uniqueContent?.locationAdvantage && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">
                      Getting to Friends Factory Cafe from {area.name}
                    </h3>
                    <p className="text-gray-600">{uniqueContent.locationAdvantage}</p>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-4">
                  Why Couples in {area.name} Love Us
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {uniqueContent?.whyChooseUs ? (
                    uniqueContent.whyChooseUs.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-pink-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="text-pink-500 font-bold">•</span>
                        <span><strong>Convenient Location:</strong> Easy access from {area.name} and all parts of Vadodara.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-pink-500 font-bold">•</span>
                        <span><strong>100% Privacy:</strong> Your celebration is completely private with exclusive booking.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-pink-500 font-bold">•</span>
                        <span><strong>8 Unique Setups:</strong> Choose from rooftop and glass house experiences.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-pink-500 font-bold">•</span>
                        <span><strong>All-Inclusive Packages:</strong> Food, decorations, music, and more included.</span>
                      </li>
                    </>
                  )}
                </ul>

                {/* Testimonial - Only if unique content exists */}
                {uniqueContent?.testimonial && (
                  <div className="bg-pink-100 rounded-xl p-6 mb-8">
                    <Quote className="h-8 w-8 text-pink-500 mb-4" />
                    <p className="text-gray-700 italic mb-4">{uniqueContent.testimonial.text}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(uniqueContent.testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-semibold">{uniqueContent.testimonial.name}</span>
                      <span className="text-gray-500">- {uniqueContent.testimonial.location}</span>
                    </div>
                  </div>
                )}

                {/* Nearby Landmarks - Only if unique content exists */}
                {uniqueContent?.nearbyLandmarks && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-pink-100">
                    <h3 className="text-xl font-bold mb-4">Nearby Landmarks from {area.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {uniqueContent.nearbyLandmarks.map((landmark, index) => (
                        <span key={index} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm">
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Area Specialty - Only if unique content exists */}
                {uniqueContent?.areaSpecialty && (
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 mb-8 border border-pink-200">
                    <h3 className="text-xl font-bold mb-3 text-pink-800">{uniqueContent.areaSpecialty.title}</h3>
                    <p className="text-gray-700 mb-3">{uniqueContent.areaSpecialty.description}</p>
                    <p className="text-pink-700 font-medium flex items-center gap-2">
                      <Star className="h-4 w-4" /> {uniqueContent.areaSpecialty.highlightFeature}
                    </p>
                  </div>
                )}

                {/* Popular Occasions in Area - Only if unique content exists */}
                {uniqueContent?.popularOccasions && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-pink-100">
                    <h3 className="text-xl font-bold mb-4">What {area.name} Couples Celebrate</h3>
                    <div className="space-y-4">
                      {uniqueContent.popularOccasions.map((occ, index) => (
                        <div key={index} className="flex items-center justify-between border-b border-pink-100 pb-3 last:border-0">
                          <div>
                            <p className="font-medium text-gray-800">{occ.occasion}</p>
                            <p className="text-sm text-gray-500">Peak: {occ.peakMonth}</p>
                          </div>
                          <Badge className="bg-pink-100 text-pink-700">{occ.percentage}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Booking Insights - Only if unique content exists */}
                {uniqueContent?.bookingInsights && (
                  <div className="bg-pink-50 rounded-xl p-6 mb-8 border border-pink-200">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Gift className="h-5 w-5 text-pink-500" />
                      {area.name} Booking Insights
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p><strong>Preferred Slot:</strong> {uniqueContent.bookingInsights.preferredSlot}</p>
                      <p><strong>Advance Booking:</strong> {uniqueContent.bookingInsights.averageAdvanceBooking}</p>
                      <p><strong>Popular Package:</strong> {uniqueContent.bookingInsights.popularPackage}</p>
                      <p className="bg-white p-3 rounded-lg border border-pink-200 mt-4">
                        <strong className="text-pink-700">💡 Insider Tip:</strong> {uniqueContent.bookingInsights.insiderTip}
                      </p>
                    </div>
                  </div>
                )}

                {/* Local Tips - Only if unique content exists */}
                {uniqueContent?.localTips && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-pink-100">
                    <h3 className="text-xl font-bold mb-4">Local Tips for {area.name} Couples</h3>
                    <ul className="space-y-2">
                      {uniqueContent.localTips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-pink-500">💡</span>
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional Reviews - Only if unique content exists */}
                {uniqueContent?.additionalReviews && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-pink-100">
                    <h3 className="text-xl font-bold mb-4">More Reviews from {area.name}</h3>
                    <div className="space-y-4">
                      {uniqueContent.additionalReviews.map((review, index) => (
                        <div key={index} className="border-b border-pink-100 pb-4 last:border-0">
                          <div className="flex mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-sm italic mb-2">"{review.text}"</p>
                          <p className="text-gray-500 text-sm font-medium">— {review.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Closing Text */}
                {uniqueContent?.closingText && (
                  <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-xl p-6 mb-8 border border-pink-200">
                    <p className="text-gray-700 font-medium">{uniqueContent.closingText}</p>
                    {uniqueContent.callToAction && (
                      <p className="mt-4 text-pink-700 font-semibold">{uniqueContent.callToAction}</p>
                    )}
                  </div>
                )}

                {/* SEO Expanded Content — 700+ unique words */}
                {seoContent.paragraphs.map((section, idx) => (
                  <div key={`seo-${idx}`} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">{section.heading}</h3>
                    <p className="text-gray-600 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </article>

              {/* Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Popular Packages for {area.name} Couples
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {packages.slice(0, 4).map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-pink-100 group bg-white overflow-hidden">
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={pkg.thumbnail}
                            alt={pkg.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 group-hover:text-pink-500 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {pkg.shortDescription}
                          </p>
                          <p className="text-lg font-bold text-pink-500">
                            {formatPrice(pkg.price)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/packages">
                    <Button className="bg-pink-500 hover:bg-pink-600">
                      View All Packages <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Form */}
                <FFCBookingForm pageTitle={`${area.name} Area`} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Instant response on WhatsApp
                    </p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section aria-label="Nearby Areas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Also Serving Nearby Areas
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((nearbyArea) => (
              <Link 
                key={nearbyArea.slug}
                href={`/${nearbyArea.slug}`}
                className="px-4 py-2 bg-pink-50 rounded-full text-gray-700 hover:bg-pink-500 hover:text-white transition-colors border border-pink-200"
              >
                {nearbyArea.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-colors"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* AI-Friendly Service Summary — structured for AI crawlers */}
      <section aria-label="Service Summary" className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-serif text-center">
            Celebrations in {area.name} — Quick Overview
          </h2>
          <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <dt className="font-semibold text-gray-900">Service Area</dt>
              <dd className="text-gray-600">{area.name}, Vadodara</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Venue</dt>
              <dd className="text-gray-600">{siteConfig.name}, Gotri, Vadodara</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Distance from {area.name}</dt>
              <dd className="text-gray-600">15-20 minutes by car</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Price Range</dt>
              <dd className="text-gray-600">₹4,700 – ₹14,900</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Duration</dt>
              <dd className="text-gray-600">3 Hours Private Celebration</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Includes</dt>
              <dd className="text-gray-600">Decorations, Cake, Music, Photography Setup</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Booking</dt>
              <dd className="text-gray-600">WhatsApp, Phone, or Online Form</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Contact</dt>
              <dd className="text-gray-600">{siteConfig.phone}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section aria-label="Frequently Asked Questions" className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs - Celebrations in {area.name}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {allFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-pink-100 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`Celebrations in ${area.name}`} maxItems={8} />
      </main>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaMarkup) }}
      />
      {/* Breadcrumb Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Service Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
