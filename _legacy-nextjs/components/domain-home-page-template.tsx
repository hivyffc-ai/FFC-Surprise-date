'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, 
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Instagram, Facebook, Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DomainConfig, getCityAreas, getAreaDisplayName } from '@/lib/domains-config';
import { BookingForm, WhatsAppFloatWithForm } from '@/components/booking-form';

interface DomainHomePageTemplateProps {
  domain: DomainConfig;
}

// Get service type name
function getServiceTypeName(domainSlug: string): string {
  if (domainSlug.includes('birthday')) return 'Birthday Surprise';
  if (domainSlug.includes('candlelight')) return 'Candlelight Dinner';
  if (domainSlug.includes('surprise-date')) return 'Surprise Date';
  if (domainSlug.includes('anniversary')) return 'Anniversary Dinner';
  if (domainSlug.includes('rooftop')) return 'Rooftop Date';
  return 'Romantic Experience';
}

// Get service type description
function getServiceDescription(domainSlug: string): string {
  if (domainSlug.includes('birthday')) {
    return 'Create magical birthday celebrations for your partner with beautiful decorations, customized cakes, and an intimate private venue.';
  }
  if (domainSlug.includes('candlelight')) {
    return 'Experience romantic dining with candlelight ambiance, gourmet cuisine, and an exclusive setting designed for couples.';
  }
  if (domainSlug.includes('surprise-date')) {
    return 'Transform ordinary dates into extraordinary memories with surprise setups, romantic themes, and unforgettable moments.';
  }
  if (domainSlug.includes('anniversary')) {
    return 'Celebrate your love journey with elegant anniversary dinners featuring special decorations and intimate celebrations.';
  }
  if (domainSlug.includes('rooftop')) {
    return 'Dine under the stars with stunning city views, romantic ambiance, and exclusive rooftop experiences for couples.';
  }
  return 'Create memorable romantic experiences with private venues, beautiful decorations, and personalized celebrations.';
}

// Sample packages based on service type
function getPackages(domainSlug: string) {
  if (domainSlug.includes('birthday')) {
    return [
      { name: 'Basic Birthday', price: '₹2,999', features: ['Basic balloon decoration', '500g cake', '1 hour venue', 'Candle setup'] },
      { name: 'Premium Birthday', price: '₹4,999', features: ['Premium balloons', '1kg designer cake', '2 hours venue', 'Flowers', 'Photography'], popular: true },
      { name: 'Luxury Birthday', price: '₹7,999', features: ['Luxury setup', '1.5kg cake', '3 hours', 'Full decoration', 'Professional photos', 'Gifts'] }
    ];
  }
  if (domainSlug.includes('candlelight') || domainSlug.includes('dinner')) {
    return [
      { name: 'Classic Dinner', price: '₹2,499', features: ['Candle setup', '3-course meal', 'Rose decoration', '1.5 hours'] },
      { name: 'Romantic Dinner', price: '₹4,499', features: ['Premium candles', '4-course meal', 'Flowers', 'Photography', 'Wine/mocktail'], popular: true },
      { name: 'Luxury Dinner', price: '₹6,999', features: ['Luxury setup', '5-course gourmet', 'Full decoration', 'Live music', 'Champagne'] }
    ];
  }
  if (domainSlug.includes('rooftop')) {
    return [
      { name: 'Starlight Basic', price: '₹2,999', features: ['Basic rooftop setup', 'Snacks & drinks', '1.5 hours', 'City view'] },
      { name: 'Moonlight Premium', price: '₹4,999', features: ['Premium setup', 'Full dinner', '2.5 hours', 'Decoration', 'Photography'], popular: true },
      { name: 'Sky Luxury', price: '₹7,999', features: ['Luxury experience', 'Gourmet dinner', '4 hours', 'Full setup', 'Musician'] }
    ];
  }
  // Default (date/anniversary)
  return [
    { name: 'Sweet Package', price: '₹1,999', features: ['Basic romantic setup', 'Snacks & beverages', '1 hour', 'Candles'] },
    { name: 'Perfect Package', price: '₹3,999', features: ['Premium decoration', 'Food & drinks', '2 hours', 'Photography'], popular: true },
    { name: 'Dream Package', price: '₹5,999', features: ['Luxury themed setup', 'Full dinner', '3 hours', 'Professional photos', 'Gifts'] }
  ];
}

// FAQ items
function getFAQs(domain: DomainConfig) {
  const cityName = domain.city === 'surat' ? 'Surat' : 'Vadodara';
  const serviceName = getServiceTypeName(domain.slug).toLowerCase();
  
  return [
    {
      question: `How do I book a ${serviceName} in ${cityName}?`,
      answer: `Booking is easy! Simply call us at ${domain.phone}, WhatsApp us, or fill out our online form. We recommend booking 2-3 days in advance for the best experience.`
    },
    {
      question: 'Is your venue private and couple-friendly?',
      answer: 'Yes, absolutely! Our venue is exclusively for couples. You\'ll have complete privacy with no other guests during your booking slot. It\'s a safe, comfortable, and romantic space.'
    },
    {
      question: 'What is included in the packages?',
      answer: 'Our packages include venue rental, basic decorations, and the items specified in each package. Premium packages include additional services like photography, special food menus, and elaborate decorations.'
    },
    {
      question: 'Can I customize my celebration?',
      answer: 'Of course! We love creating personalized experiences. You can customize decorations, themes, food, music, and more. Share your ideas and we\'ll make them happen.'
    },
    {
      question: 'Do you offer midnight celebrations?',
      answer: 'Yes! We offer midnight slots for special occasions like birthdays and anniversaries. Book in advance to secure your preferred timing.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Rescheduling is free if done 48 hours in advance. For cancellations, please contact us to discuss options based on timing.'
    }
  ];
}

export function DomainHomePageTemplate({ domain }: DomainHomePageTemplateProps) {
  const cityName = domain.city === 'surat' ? 'Surat' : 'Vadodara';
  const serviceTypeName = getServiceTypeName(domain.slug);
  const areas = getCityAreas(domain.city);
  const packages = getPackages(domain.slug);
  const faqs = getFAQs(domain);
  
  // Dynamic gradient classes
  const gradientClass = `bg-gradient-to-r ${domain.colors.gradient}`;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl" style={{ color: domain.colors.primary }}>
              {domain.name}
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#packages" className="hover:opacity-80">Packages</a>
              <a href="#gallery" className="hover:opacity-80">Gallery</a>
              <a href="#areas" className="hover:opacity-80">Locations</a>
              <a href="#faq" className="hover:opacity-80">FAQ</a>
            </div>
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
      <section className={`${gradientClass} text-white`}>
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" /> Couples Only Experience in {cityName}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {serviceTypeName}<br />in {cityName}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
                {domain.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={`tel:${domain.phone}`}>
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Call: {domain.phone}
                  </Button>
                </a>
              </div>
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" /> 3000+ Couples
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <BookingForm domain={domain} pageTitle={serviceTypeName} variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to <span style={{ color: domain.colors.primary }}>{domain.name}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {getServiceDescription(domain.slug)} Located in the heart of {cityName}, we provide exclusive couple-friendly venues where you can celebrate your love without any disturbance. Our professional team ensures every detail is perfect for your special moments.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Heart, label: 'Romantic Setups' },
                { icon: Shield, label: 'Private Venue' },
                { icon: Award, label: 'Best in City' },
                { icon: Clock, label: 'Flexible Timing' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${domain.colors.primary}15` }}
                  >
                    <item.icon className="h-7 w-7" style={{ color: domain.colors.primary }} />
                  </div>
                  <p className="font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your celebration. All packages include private venue access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.popular ? 'border-2 shadow-xl scale-105' : ''}`}
                style={pkg.popular ? { borderColor: domain.colors.primary } : {}}
              >
                {pkg.popular && (
                  <div 
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 ${gradientClass} text-white px-6 py-1.5 rounded-full text-sm font-semibold`}
                  >
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold" style={{ color: domain.colors.primary }}>
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 shrink-0 mt-0.5" style={{ color: domain.colors.primary }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/${domain.whatsapp}?text=Hi, I'm interested in ${pkg.name} package`}>
                    <Button 
                      className={`w-full ${pkg.popular ? gradientClass : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      style={!pkg.popular ? { borderColor: domain.colors.primary, color: domain.colors.primary } : {}}
                    >
                      Book Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Keywords Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our range of romantic experiences designed for couples
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {domain.keywords.slice(0, 15).map((keyword, index) => (
              <Link key={index} href={`/${keyword.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors" style={{ color: domain.colors.text }}>
                      {keyword.title}
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: domain.colors.primary }} />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          {domain.keywords.length > 15 && (
            <div className="text-center mt-8">
              <Button variant="outline" style={{ borderColor: domain.colors.primary, color: domain.colors.primary }}>
                View All Services <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Glimpse of romantic setups we create for couples
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1,2,3,4,5,6].map((_, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${domain.colors.primary}20` }}
                  >
                    <Heart className="h-8 w-8" style={{ color: domain.colors.primary }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {serviceTypeName} Across {cityName}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We serve couples in all major areas of {cityName}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {areas.slice(0, 20).map((area, index) => {
              const serviceType = domain.slug.replace('-surat', '').replace('-vadodara', '');
              const areaSlug = `${area}-${serviceType}`;
              return (
                <Link key={index} href={`/${areaSlug}`}>
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm hover:bg-muted transition-colors cursor-pointer"
                    style={{ borderColor: domain.colors.primary }}
                  >
                    <MapPin className="h-3 w-3 mr-1" style={{ color: domain.colors.primary }} />
                    {getAreaDisplayName(area)}
                  </Badge>
                </Link>
              );
            })}
          </div>
          {areas.length > 20 && (
            <p className="text-center text-muted-foreground mt-6">
              + {areas.length - 20} more areas
            </p>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Happy Couples</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what couples are saying about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Priya & Raj', text: 'Amazing experience! The setup was beautiful and exactly what we wanted. Highly recommend!' },
              { name: 'Sneha & Amit', text: 'Best romantic experience in the city. The team made our anniversary so special!' },
              { name: 'Neha & Vikram', text: 'Perfect surprise for my partner. The privacy and decorations were excellent.' }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: domain.colors.primary }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about booking
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${gradientClass} text-white py-16 md:py-20`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Gift className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Magical Moments?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your {serviceTypeName.toLowerCase()} today and make memories that last forever!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${domain.whatsapp}?text=Hi, I want to book ${serviceTypeName} in ${cityName}`}>
                <Button size="lg" className="bg-white hover:bg-white/90 text-lg px-8 w-full sm:w-auto" style={{ color: domain.colors.primary }}>
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <a href={`tel:${domain.phone}`}>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 w-full sm:w-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  {domain.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4" style={{ color: domain.colors.primary }}>
                {domain.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {domain.tagline}
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#packages" className="hover:underline">Packages</a></li>
                <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                <li><a href="#areas" className="hover:underline">Locations</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href={`tel:${domain.phone}`} className="hover:underline flex items-center gap-2">
                    <Phone className="h-4 w-4" /> {domain.phone}
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${domain.whatsapp}`} className="hover:underline flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${domain.email}`} className="hover:underline flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {domain.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="text-sm text-muted-foreground">
                <p className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4" /> Open 7 Days
                </p>
                <p>10:00 AM - 12:00 AM</p>
                <p className="mt-2">Midnight slots available</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {domain.name}. All rights reserved.</p>
            <p className="mt-2">Couples Only | Private Venue | {cityName}, Gujarat</p>
          </div>
        </div>
      </footer>

      {/* Mobile Booking Form */}
      <section className="lg:hidden py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <BookingForm domain={domain} pageTitle={serviceTypeName} />
        </div>
      </section>

      {/* WhatsApp Float with Form Modal */}
      <WhatsAppFloatWithForm domain={domain} pageTitle={serviceTypeName} />
    </div>
  );
}

export default DomainHomePageTemplate;
