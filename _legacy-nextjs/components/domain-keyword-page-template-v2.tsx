'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, Heart, Users, Shield, Award, Calendar, Gift, Sparkles, Info, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DomainConfig, KeywordConfig, getCityAreas } from '@/lib/domains-config';
import { generateKeywordPageUniqueContent, KeywordPageUniqueContent } from '@/lib/keyword-unique-content';
import { BookingForm, WhatsAppFloatWithForm, SidebarBookingForm } from '@/components/booking-form';

interface DomainKeywordPageTemplateV2Props {
  domain: DomainConfig;
  keyword: KeywordConfig;
}

// Icon mapper for dynamic icon rendering
const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
  gift: <Gift className="h-6 w-6" />,
  info: <Info className="h-6 w-6" />,
  mapPin: <MapPin className="h-6 w-6" />,
  star: <Star className="h-6 w-6" />,
  quote: <Quote className="h-6 w-6" />,
  phone: <Phone className="h-6 w-6" />,
};

export function DomainKeywordPageTemplateV2({ domain, keyword }: DomainKeywordPageTemplateV2Props) {
  const content = generateKeywordPageUniqueContent(domain, keyword);
  const cityName = domain.city;
  const areas = getCityAreas(domain.city);
  
  // Dynamic gradient classes based on domain colors
  const gradientClass = `bg-gradient-to-r ${domain.colors.gradient}`;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl" style={{ color: domain.colors.primary }}>
              {domain.name}
            </Link>
            <div className="flex items-center gap-4">
              <a 
                href={`tel:${domain.phone}`}
                className="hidden md:flex items-center gap-2 text-sm font-medium"
                style={{ color: domain.colors.primary }}
              >
                <Phone className="h-4 w-4" />
                {domain.phone}
              </a>
              <a 
                href={`https://wa.me/${domain.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${gradientClass} text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}
              >
                <MessageCircle className="h-4 w-4" />
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`${gradientClass} text-white py-16 md:py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("/images/hero/pattern.png")', backgroundSize: '100px' }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Sparkles className="h-3 w-3 mr-1" /> Couples Only Experience
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {content.heroTitle}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {content.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                  <Check className="h-4 w-4" /> Private Venue
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Customizable
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                  <Check className="h-4 w-4" /> Professional Setup
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${domain.phone}`}>
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    Call: {domain.phone}
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <BookingForm domain={domain} pageTitle={keyword.title} variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" style={{ color: domain.colors.primary }} />
              <span className="text-sm">8000+ Happy Couples</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" style={{ color: domain.colors.primary }} />
              <span className="text-sm">100% Safe & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" style={{ color: domain.colors.primary }} />
              <span className="text-sm">Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - 2/3 width */}
            <div className="lg:col-span-2 space-y-16">
              {content.sections.map((section, index) => (
                <div key={section.id} className="prose prose-lg max-w-none">
                  <div className="flex items-center gap-3 mb-4">
                    {section.icon && (
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${domain.colors.primary}20`, color: domain.colors.primary }}
                      >
                        {iconMap[section.icon] || <Heart className="h-6 w-6" />}
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold m-0" style={{ color: domain.colors.primary }}>
                        {section.heading}
                      </h2>
                      {section.subheading && (
                        <p className="text-muted-foreground m-0">{section.subheading}</p>
                      )}
                    </div>
                  </div>
                  
                  <div 
                    className="mt-6"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  
                  {section.isFeatured && index < content.sections.length - 2 && (
                    <div className="my-8 border-b border-border" />
                  )}
                </div>
              ))}
              
              {/* Image Gallery */}
              <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: domain.colors.primary }}>
                  Gallery - Our {keyword.title} Setups
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {content.images.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: domain.colors.primary }}>
                  Frequently Asked Questions - {keyword.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {content.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="hidden lg:block">
              <SidebarBookingForm domain={domain} pageTitle={keyword.title} />
              
              {/* Areas Served Card */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" style={{ color: domain.colors.primary }}>
                    <MapPin className="h-5 w-5" />
                    Areas We Serve in {cityName}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {areas.slice(0, 20).map((area) => (
                      <Link 
                        key={area.slug}
                        href={`/${area.slug}`}
                        className="text-xs px-2 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                      >
                        {area.name}
                      </Link>
                    ))}
                    {areas.length > 20 && (
                      <span className="text-xs text-muted-foreground">+{areas.length - 20} more areas</span>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Other Services Card */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" style={{ color: domain.colors.primary }}>
                    <Heart className="h-5 w-5" />
                    More Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {domain.keywords.filter(k => k.slug !== keyword.slug).slice(0, 8).map((k) => (
                    <Link 
                      key={k.slug}
                      href={`/${k.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <span className="text-sm">{k.title}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: domain.colors.primary }} />
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${gradientClass} text-white py-16`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.cta.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {content.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${domain.whatsapp}?text=Hi, I'm interested in ${keyword.title}`}>
              <Button size="lg" className="bg-white hover:bg-white/90 w-full sm:w-auto" style={{ color: domain.colors.primary }}>
                <MessageCircle className="h-5 w-5 mr-2" />
                {content.cta.buttonText}
              </Button>
            </a>
            <a href={`tel:${domain.phone}`}>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call: {domain.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <BookingForm domain={domain} pageTitle={keyword.title} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4" style={{ color: domain.colors.primary }}>
                {domain.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {cityName}'s premier destination for romantic celebrations. Creating unforgettable moments for couples since 2018.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/packages" className="hover:text-primary">Packages</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {domain.keywords.slice(0, 5).map((k) => (
                  <li key={k.slug}>
                    <Link href={`/${k.slug}`} className="hover:text-primary">{k.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" style={{ color: domain.colors.primary }} />
                  {domain.phone}
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" style={{ color: domain.colors.primary }} />
                  WhatsApp: {domain.whatsapp}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" style={{ color: domain.colors.primary }} />
                  {cityName}, Gujarat, India
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {domain.name}. All rights reserved. | Couples Only Service</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button with Form */}
      <WhatsAppFloatWithForm domain={domain} pageTitle={keyword.title} />
    </div>
  );
}

export default DomainKeywordPageTemplateV2;
