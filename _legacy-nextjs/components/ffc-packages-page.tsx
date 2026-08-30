'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { packages, formatPrice } from '@/lib/ffc-config';

export default function FFCPackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" /> 8 Stunning Surprise Setups
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Surprise Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from 8 jaw-dropping surprise setups designed to leave your loved one speechless!
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden border-amber-100 hover:shadow-xl transition-all group h-full">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-amber-600 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-3 md:p-4">
                    <h2 className="text-sm md:text-base lg:text-lg font-bold mb-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {pkg.name} {pkg.emoji}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
                    <p className="text-lg md:text-xl font-bold text-amber-600">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">What's Included in Every Surprise</h2>
            <p className="text-gray-600">Everything ready before your loved one arrives — just bring them!</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🕐", title: "3 Hours Private Time", desc: "100% private surprise celebration" },
              { icon: "🥂", title: "Welcome Drink", desc: "Refreshing drink upon arrival" },
              { icon: "🎂", title: "Surprise Cake", desc: "Complimentary celebration cake" },
              { icon: "🎶", title: "Romantic Music", desc: "Soft melodies for the moment" },
              { icon: "🕯️", title: "Candle Setup", desc: "Beautiful candlelight ambiance" },
              { icon: "🎈", title: "Balloon Decorations", desc: "Stunning surprise decor" },
              { icon: "🌹", title: "Flower Setup", desc: "Fresh flowers for romance" },
              { icon: "📸", title: "Photo-Ready Setup", desc: "Capture their reaction!" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
