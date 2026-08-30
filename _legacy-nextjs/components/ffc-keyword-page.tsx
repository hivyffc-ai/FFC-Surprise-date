'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact, birthdayHeroImages } from '@/components/ffc-gallery';
import { ServiceCategory, ServiceKeyword, packages, vadodaraAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { generateKeywordPageContent } from '@/lib/ffc-unique-content';
import { getKeywordContent, UniqueKeywordContent } from '@/lib/ffc-keyword-content';
import { generateExpandedContent, generateFAQContent } from '@/lib/seo-content-engine';
import { generateBreadcrumbSchema, generateServiceSchema, buildKeywordBreadcrumbs } from '@/lib/schema-generator';

interface KeywordPageProps {
  service: ServiceCategory;
  keyword: ServiceKeyword;
}

export default function FFCKeywordPage({ service, keyword }: KeywordPageProps) {
  // Hero slider state
  const [heroSlide, setHeroSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Get related packages
  const relatedPackages = packages.slice(0, 4);

  // Get related keywords (excluding current)
  const relatedKeywords = service.keywords.filter(k => k.slug !== keyword.slug).slice(0, 6);

  // TRY to get truly unique handcrafted content first
  const handcraftedContent = getKeywordContent(keyword.slug);
  
  // Fall back to generated content if no handcrafted content exists
  const generatedContent = generateKeywordPageContent(service, keyword);

  // Use handcrafted content if available, otherwise use generated
  const hasUniqueContent = !!handcraftedContent;

  // SEO Content Expansion: 700+ words + 10 unique FAQs with schema
  const seoContent = generateExpandedContent(keyword.title);
  const seoFAQs = generateFAQContent(keyword.title);

  // Merge FAQs: handcrafted/generated first, then fill to 10 from SEO engine
  const existingFAQs = hasUniqueContent ? handcraftedContent!.faqs : generatedContent.faqContent;
  const allFAQs = [...existingFAQs];
  const existingQuestions = new Set(allFAQs.map(f => f.question.toLowerCase()));
  for (const faq of seoFAQs.faqs) {
    if (allFAQs.length >= 10) break;
    if (!existingQuestions.has(faq.question.toLowerCase())) {
      allFAQs.push(faq);
      existingQuestions.add(faq.question.toLowerCase());
    }
  }

  // Breadcrumb Schema for AI visibility
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildKeywordBreadcrumbs(siteConfig.website, siteConfig.name, keyword.title, keyword.slug)
  );

  // Service Schema for AI visibility
  const serviceSchema = generateServiceSchema({
    serviceName: keyword.title + ' in ' + siteConfig.city,
    serviceDescription: keyword.metaDescription,
    serviceUrl: `${siteConfig.website}/${keyword.slug}`,
    providerName: siteConfig.name,
    providerUrl: siteConfig.website,
    providerPhone: siteConfig.phone,
    providerAddress: siteConfig.address,
    providerCity: siteConfig.city,
    priceRange: '₹4700 - ₹14900',
    areaServed: siteConfig.city,
  });

  // Build final FAQ schema with all FAQs
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

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <main>
      {/* Breadcrumb */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-pink-500">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="text-gray-500 hover:text-pink-500">Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href={`/${service.slug}`} className="text-gray-500 hover:text-pink-500">{service.name}</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-pink-500 font-medium">{keyword.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section — Homepage-style slider with booking form */}
      <section aria-label={`${keyword.title} - Hero`} className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white overflow-hidden">
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
                alt={`${keyword.title} Vadodara - Slide ${index + 1}`}
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
                {service.emoji} Friends Factory Cafe
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                {keyword.h1}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                {hasUniqueContent ? handcraftedContent!.heroSubtitle : `Create magical ${keyword.title.toLowerCase()} moments at Friends Factory Cafe. Premium romantic celebration venue with stunning setups and unforgettable experiences.`}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={keyword.title} 
                  className="bg-white text-pink-500 hover:bg-pink-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form — Desktop */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" pageTitle={keyword.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form — Above the fold on mobile */}
      <section className="lg:hidden bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm pageTitle={keyword.title} />
        </div>
      </section>

      {/* Main Content */}
      <section aria-label={`About ${keyword.title}`} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  {keyword.title} at Friends Factory Cafe
                </h2>
                
                {/* Introduction - from unique content */}
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {hasUniqueContent ? handcraftedContent!.introduction : generatedContent.introduction}
                </div>

                <div className="bg-pink-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-pink-500" />
                    What's Included in Your {keyword.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {(hasUniqueContent ? handcraftedContent!.features : [
                      "3 Mesmerizing Hours of Private Celebration",
                      "Welcome Drink & Celebration Cake",
                      "Romantic Decorations & Setup",
                      "Candle-Lit Ambiance",
                      "Soft Romantic Music",
                      "Photo-Ready Backdrop",
                      "Delicious Café-Style Food",
                      "Panoramic City Views"
                    ]).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-pink-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic content sections */}
                {(hasUniqueContent ? handcraftedContent!.sections : generatedContent.sections).map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">{section.heading}</h3>
                    <div className="text-gray-600 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}

                {/* Process Section - only for handcrafted content */}
                {hasUniqueContent && handcraftedContent!.process && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">How to Book Your {keyword.title}</h3>
                    <div className="space-y-4">
                      {handcraftedContent!.process.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{step.step}</h4>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-4">
                  Why Choose Friends Factory Cafe for {keyword.title}?
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {(hasUniqueContent ? handcraftedContent!.whyChooseUs : generatedContent.whyChooseUs).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-pink-500" />
                    Available Time Slots
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Lunch</p>
                      <p className="text-gray-600 text-sm">12:00 PM - 3:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Evening</p>
                      <p className="text-gray-600 text-sm">4:00 PM - 7:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Dinner</p>
                      <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Late Night</p>
                      <p className="text-gray-600 text-sm">10:00 PM - 1:00 AM</p>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-pink-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">💬 What Couples Say About {keyword.title}</h3>
                  {hasUniqueContent ? (
                    <div className="space-y-3">
                      <p className="text-gray-600 italic">"{handcraftedContent!.testimonial.text}"</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">— {handcraftedContent!.testimonial.name}</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-600 text-sm">{handcraftedContent!.testimonial.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-600 italic whitespace-pre-line">
                      {generatedContent.testimonialContent}
                    </div>
                  )}
                </div>

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
                  {keyword.title} Packages
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPackages.map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-pink-100 group overflow-hidden">
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
                    <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
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
                <FFCBookingForm pageTitle={keyword.title} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get instant response on WhatsApp
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

      {/* Related Keywords */}
      <section aria-label="Related Services" className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Related {service.name} Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {relatedKeywords.map((kw) => (
              <Link 
                key={kw.slug}
                href={`/${kw.slug}`}
              >
                <Card className="border-pink-100 hover:border-pink-300 hover:shadow-md transition-all group">
                  <CardContent className="p-4">
                    <h3 className="font-medium group-hover:text-pink-500 transition-colors flex items-center justify-between">
                      {kw.title}
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-pink-500" />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section aria-label="Service Areas in Vadodara" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">
              <MapPin className="h-4 w-4 mr-2" /> Service Areas
            </Badge>
            <h2 className="text-2xl font-bold mb-4 font-serif">
              {keyword.title} Across Vadodara
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {vadodaraAreas.slice(0, 12).map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-pink-50 rounded-full text-gray-700 hover:bg-pink-500 hover:text-white transition-colors border border-pink-200 text-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Friendly Service Summary — structured for AI crawlers */}
      <section aria-label="Service Summary" className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-serif text-center">
            {keyword.title} — Quick Overview
          </h2>
          <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <dt className="font-semibold text-gray-900">Service</dt>
              <dd className="text-gray-600">{keyword.title}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Location</dt>
              <dd className="text-gray-600">Vadodara, Gujarat, India</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Venue</dt>
              <dd className="text-gray-600">{siteConfig.name}</dd>
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
              FAQs about {keyword.title}
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

      {/* CTA Section */}
      <section aria-label="Book Now" className="py-16 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
            Ready for Your {keyword.title}?
          </h2>
          <p className="text-white/90 mb-8 whitespace-pre-line">
            {hasUniqueContent ? handcraftedContent!.closingText : generatedContent.closingCta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton 
              pageTitle={keyword.title} 
              className="bg-white text-pink-500 hover:bg-pink-50 text-lg px-8 py-6" 
            />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`${keyword.title} Gallery`} maxItems={8} />
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
