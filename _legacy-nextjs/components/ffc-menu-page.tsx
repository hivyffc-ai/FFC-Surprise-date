'use client';

import React from 'react';
import { Utensils, Wine, Clock, Gift, Music, Camera, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { menuItems, siteConfig } from '@/lib/ffc-config';

export default function FFCMenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
            <Utensils className="h-4 w-4 mr-2" /> Dining Experience
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            LUNCH / DINNER MENU
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated Café-Style Delicacies Crafted for Romantic Dates & Private Celebrations
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Starters Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍽️ Main Course</h2>
              <p className="text-gray-600">Delicious dishes crafted to complement the romantic ambiance</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.starters.map((item, index) => (
                <Card key={index} className="border-amber-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍫 Desserts</h2>
              <p className="text-gray-600">Sweet endings for your romantic evening</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.desserts.map((item, index) => (
                <Card key={index} className="border-amber-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🎁 What You Will Get</h2>
              <p className="text-gray-600">Cake & Champagne included</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.addOns.map((item, index) => (
                <Card key={index} className="border-amber-100 bg-amber-50">
                  <CardContent className="p-6 text-center">
                    <span className="text-5xl mb-4 block">{item.emoji}</span>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-amber-600 font-bold text-lg">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-2">✨ The Complete Experience</h2>
            <p className="text-gray-600">What makes your celebration special</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 3 Hours */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold">3 Mesmerizing Hours</h3>
                </div>
                <p className="text-gray-600">
                  Three magical hours designed to create unforgettable memories, where every moment feels like a brushstroke on the canvas of your love story.
                </p>
              </CardContent>
            </Card>

            {/* Tent Decoration */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold">Romantic Tent Decoration</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-600" />
                    Trending Tent Setup for romantic evenings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-600" />
                    Curtains, Flowers & Twinkling Lights
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-600" />
                    Unique Props & Lower Seating
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-600" />
                    Soft Candle Glow Ambiance
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dining Experience */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold">Dining Experience</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-600" />
                    Mouth-Watering Dishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-600" />
                    Romantic Background Music
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-600" />
                    Perfect mood setting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold">Cancellation Policy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability.
                </p>
                <p className="text-amber-600 font-semibold">
                  * No Refund Policy Applicable
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Book Your Romantic Dining Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table and let us create magical moments for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="Menu Page" className="text-lg px-8 py-6 bg-white text-amber-600 hover:bg-amber-50" />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Call {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
