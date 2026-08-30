'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig } from '@/lib/ffc-config';

export default function FFCContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <MessageCircle className="h-4 w-4 mr-2" /> Plan Your Surprise
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Ready to Plan a Surprise?
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's make their jaw drop! Contact us to start planning the perfect surprise.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Let's Plan Your Surprise! 🎁
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <Card className="border-amber-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-2">Talk to our surprise planning experts</p>
                        <a 
                          href={`tel:${siteConfig.phone}`}
                          className="text-xl font-bold text-amber-600 hover:text-amber-700"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">WhatsApp (Fastest!)</h3>
                        <p className="text-gray-600 mb-2">Get instant replies for surprise planning</p>
                        <a 
                          href={`https://wa.me/${siteConfig.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-amber-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-600 mb-2">For detailed inquiries and partnerships</p>
                        <a 
                          href={`mailto:${siteConfig.email}`}
                          className="text-amber-600 hover:text-amber-700"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-amber-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operating Hours */}
                <Card className="border-amber-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Available Time Slots</h3>
                        <div className="text-gray-600 space-y-2 text-sm">
                          <div>
                            <p className="font-semibold text-amber-700 mb-1">🍽️ Lunch (Indoor)</p>
                            <p>12 PM - 3 PM | 1 PM - 4 PM | 2 PM - 5 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-amber-700 mb-1">🌅 Evening (Indoor)</p>
                            <p>4 PM - 7 PM | 5 PM - 8 PM | 6 PM - 9 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-amber-700 mb-1">🌙 Dinner (Indoor/Rooftop)</p>
                            <p>7 PM - 10 PM | 7:30 PM - 10:30 PM | 8 PM - 11 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Book Your Surprise Now
              </h2>
              <FFCBookingForm pageTitle="Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Visit Our Surprise Venue</h2>
            <p className="text-gray-600 mt-2">Friends Factory Cafe - Vadodara's #1 Surprise Planning Venue</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118118.8809880468!2d73.125157!3d22.307706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc857f49f5a21%3A0xff4259d15a6c3964!2sFriends%20Factory%20Cafe%20-%20Private%20Candle%20Light%20Dinner!5e0!3m2!1sen!2sus!4v1769202865770!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Friends Factory Cafe Location"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.google.com/?q=Friends+Factory+Cafe+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-amber-600 hover:bg-amber-700">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
