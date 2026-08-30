'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Users, Award, Shield, Clock, MapPin, Phone, Mail, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig } from '@/lib/ffc-config';

export default function FFCAboutPage() {
  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsRef.current) {
      const scrollAmount = 370; // card width + gap
      reviewsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Heart className="h-4 w-4 mr-2" /> About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Vadodara's #1 Surprise Planning Experts
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            3000+ Jaw-Dropping Surprises Delivered — We Make Them Say WOW!
          </p>
        </div>
      </section>

      {/* Our Story - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                How We Became Vadodara's Surprise Experts
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong>Friends Factory Cafe</strong>, we noticed something: planning the perfect surprise is HARD. Keeping it secret, finding the right venue, coordinating decorations, food, timing... it's overwhelming!
                </p>
                <p>
                  That's when we had an idea: <strong>What if we handled EVERYTHING?</strong> From balloon decorations and fairy lights to surprise cakes and romantic setups — all you have to do is bring your loved one (blindfolded, of course! 😉).
                </p>
                <p>
                  Since then, we've planned <strong>3000+ surprises</strong> — birthday surprises, anniversary surprises, surprise proposals, surprise dates, and midnight birthday surprises. Every single one designed to make their jaw DROP!
                </p>
                <p className="font-medium text-amber-700">
                  Our mission: Help you create the "I CAN'T BELIEVE YOU DID THIS!" moment.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                    Book Your Moment - Call {siteConfig.phone}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/images/about/Our story.jpg"
                  alt="Friends Factory Cafe Vadodara - Romantic Rooftop Setup for Candlelight Dinner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">3000+ Jaw-Dropping Surprises</p>
                  <p className="text-sm opacity-90">Creating WOW moments since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, number: "3000+", label: "Surprises Delivered" },
              { icon: Star, number: "4.9", label: "Google Rating" },
              { icon: Award, number: "8", label: "Surprise Setups" },
              { icon: Clock, number: "5+", label: "Years of Magic" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-amber-600" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-amber-600">{stat.number}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Right Content, Left Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/images/about/Our team.webp"
                  alt="Friends Factory Cafe Team - Dedicated Staff for Romantic Celebrations Vadodara"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Behind Every Glowing Smile</p>
                  <p className="text-sm opacity-90">Our passionate team</p>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Your Secret Surprise Squad
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meet the team that makes surprise magic happen! We're not just staff — we're your partners in creating unforgettable moments.
                </p>
                <p>
                  From our decoration experts who create stunning setups, to our friendly team who keeps everything secret until the big reveal — we handle every detail so your surprise goes PERFECTLY.
                </p>
                <p>
                  Whether you're planning a <strong>birthday surprise</strong>, <strong>anniversary surprise</strong>, <strong>surprise proposal</strong>, or a romantic <strong>surprise date</strong>, our team ensures the setup is ready, the cake is perfect, and your loved one's reaction is PRICELESS!
                </p>
                <p className="font-medium text-amber-700">
                  Your secret is safe with us. Let's make them cry happy tears! 😭❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Why We're Vadodara's #1 Surprise Planners
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">100% Secret & Private</h3>
                    <p className="text-gray-600">No other guests during your booking. Your surprise stays completely secret until the big reveal!</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">8 Stunning Surprise Setups</h3>
                    <p className="text-gray-600">Balloon arches, fairy lights, flower decorations, candles, neon signs — every setup is designed for maximum WOW factor!</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Everything Included</h3>
                    <p className="text-gray-600">Decorations, surprise cake, food, drinks, soft music, 3 hours private time — the complete surprise package!</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">3000+ Happy Surprises</h3>
                    <p className="text-gray-600">4.9★ rating on Google. Real reviews from real couples who trusted us with their most special moments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/images/about/Why us.png"
                  alt="Why Choose Friends Factory Cafe - Best Romantic Venue Vadodara"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Surprise Planning Experts</p>
                  <p className="text-sm opacity-90">Trusted by 3000+ couples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider Section */}
      <section className="py-16 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2">
                Real Surprise Reactions (Testimonials)
              </h2>
            </div>
            <a 
              href="https://g.page/r/CVQhSBwuUUhBEBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Review Us on Google
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Rating Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:w-64 flex-shrink-0">
              <p className="text-lg font-bold text-gray-800 mb-2">EXCELLENT</p>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">Based on <strong>1256 reviews</strong></p>
              <div className="flex items-center gap-2">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xl font-medium text-gray-700">Google</span>
              </div>
            </div>

            {/* Reviews Slider with Navigation */}
            <div className="flex-1 relative">
              {/* Left Arrow */}
              <button 
                onClick={() => scrollReviews('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>

              {/* Right Arrow */}
              <button 
                onClick={() => scrollReviews('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>

              <div 
                ref={reviewsRef}
                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-2" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Review 1 - Devanshi */}
                <Card className="flex-shrink-0 w-[300px] md:w-[350px] snap-start border-gray-200 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-semibold">
                        D
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Devanshi</p>
                        <p className="text-xs text-gray-500">3 weeks ago</p>
                      </div>
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 text-cyan-500">✓</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Such a great time!!!! Thanks to my hubby and the team of friends factory cafe!!!
                    </p>
                  </CardContent>
                </Card>

                {/* Review 2 - Vraj Patel */}
                <Card className="flex-shrink-0 w-[300px] md:w-[350px] snap-start border-gray-200 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-semibold">V</div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Vraj Patel</p>
                        <p className="text-xs text-gray-500">1 month ago</p>
                      </div>
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 text-cyan-500">✓</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      The place was calm and peace, food was awesome, will be back soon 🍽️
                    </p>
                  </CardContent>
                </Card>

                {/* Review 3 - Yoma Patel */}
                <Card className="flex-shrink-0 w-[300px] md:w-[350px] snap-start border-gray-200 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold">
                        Y
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Yoma Patel</p>
                        <p className="text-xs text-gray-500">1 month ago</p>
                      </div>
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 text-cyan-500">✓</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Cutest set up and amazing food service.
                    </p>
                  </CardContent>
                </Card>

                {/* Review 4 - Krishn Sharma */}
                <Card className="flex-shrink-0 w-[300px] md:w-[350px] snap-start border-gray-200 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
                        K
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Krishn Sharma</p>
                        <p className="text-xs text-gray-500">2 months ago</p>
                      </div>
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 text-cyan-500">✓</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Best candlelight dinner experience in Vadodara! The decoration was stunning and staff was very helpful. Proposed here and she said YES! 💍
                    </p>
                  </CardContent>
                </Card>

                {/* Review 5 - Priya Shah */}
                <Card className="flex-shrink-0 w-[300px] md:w-[350px] snap-start border-gray-200 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold">
                        P
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Priya Shah</p>
                        <p className="text-xs text-gray-500">2 months ago</p>
                      </div>
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 text-cyan-500">✓</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      My husband surprised me here for our anniversary. The rooftop setup was magical! Highly recommend for couples! ❤️
                    </p>
                  </CardContent>
                </Card>

                {/* Review 6 - Rahul Desai */}
                <Card className="flex-shrink-0 w-[300px] md:w-[350px] snap-start border-gray-200 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                        R
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Rahul Desai</p>
                        <p className="text-xs text-gray-500">3 months ago</p>
                      </div>
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 text-cyan-500">✓</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Best place for couples in Vadodara! Booked for my wife's birthday and the team made it so special. Glass house setup was Instagram-perfect!
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Scroll indicator */}
              <div className="flex justify-center mt-4 gap-2">
                <span className="text-sm text-gray-500">← Swipe to see more reviews →</span>
              </div>
            </div>
          </div>

          {/* Trustindex Badge */}
          <div className="flex justify-end mt-6">
            <a 
              href="https://www.trustindex.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              Verified by Trustindex ⓘ
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Create Your Memory?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Book your candlelight dinner package today and surprise your partner with memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Visit Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-amber-600 hover:text-amber-700 font-medium">
                    {siteConfig.phone}
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-amber-600 hover:text-amber-700">
                    {siteConfig.email}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
