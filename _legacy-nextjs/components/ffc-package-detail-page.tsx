'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock, Check, ChevronLeft, Heart, Camera, Music, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { SetupPackage, packages, formatPrice, siteConfig } from '@/lib/ffc-config';

interface PackageDetailPageProps {
  package: SetupPackage;
}

export default function FFCPackageDetailPage({ package: pkg }: PackageDetailPageProps) {
  // Find ALL other packages except current one
  const relatedPackages = packages.filter(p => p.id !== pkg.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [thumbnailPage, setThumbnailPage] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const imagesPerPage = 5;
  const totalPages = Math.ceil(pkg.images.length / imagesPerPage);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setThumbnailPage((prev) => Math.max(0, prev - 1));
    } else {
      setThumbnailPage((prev) => Math.min(totalPages - 1, prev + 1));
    }
  };

  const goToPrevImage = () => {
    const newIndex = selectedImage === 0 ? pkg.images.length - 1 : selectedImage - 1;
    setSelectedImage(newIndex);
    // Auto-update thumbnail page when navigating
    setThumbnailPage(Math.floor(newIndex / imagesPerPage));
  };

  const goToNextImage = () => {
    const newIndex = selectedImage === pkg.images.length - 1 ? 0 : selectedImage + 1;
    setSelectedImage(newIndex);
    // Auto-update thumbnail page when navigating
    setThumbnailPage(Math.floor(newIndex / imagesPerPage));
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/packages" className="text-gray-500 hover:text-amber-600">Packages</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-amber-600 font-medium">{pkg.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-4 md:py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left Column - Images/Visual */}
            <div>
              {/* Main Image with Navigation Arrows */}
              <div className="aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[3/5] rounded-xl md:rounded-2xl overflow-hidden relative mb-3 md:mb-4 group max-h-[80vh] md:max-h-none">
                <Image
                  src={pkg.images[selectedImage] || pkg.thumbnail}
                  alt={pkg.name}
                  fill
                  className="object-contain scale-125 md:scale-100 md:object-cover"
                  priority
                />
                
                {/* Navigation Arrows - Always visible on mobile */}
                <button 
                  onClick={goToPrevImage}
                  className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                </button>
                <button 
                  onClick={goToNextImage}
                  className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                  {selectedImage + 1} / {pkg.images.length}
                </div>
              </div>
              
              {/* Thumbnail Slider */}
              <div className="relative px-8 md:px-10">
                {/* Left Arrow */}
                <button 
                  onClick={() => scrollThumbnails('left')}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 md:w-8 md:h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-amber-50 transition-colors border border-gray-200 ${thumbnailPage === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                  disabled={thumbnailPage === 0}
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                </button>
                
                {/* Thumbnails Container - Fixed width container with overflow hidden */}
                <div className="overflow-hidden">
                  <div 
                    ref={thumbnailContainerRef}
                    className="flex gap-2 transition-transform duration-300 ease-in-out"
                    style={{ 
                      transform: `translateX(-${thumbnailPage * 100}%)`,
                    }}
                  >
                    {pkg.images.map((image, index) => (
                      <button 
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`flex-shrink-0 w-[calc(20%-6.4px)] aspect-[3/4] rounded-md md:rounded-lg overflow-hidden relative cursor-pointer transition-all ${selectedImage === index ? 'ring-2 ring-amber-500 scale-105' : 'opacity-70 hover:opacity-100'}`}
                      >
                        <Image
                          src={image}
                          alt={`${pkg.name} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Right Arrow */}
                <button 
                  onClick={() => scrollThumbnails('right')}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 md:w-8 md:h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-amber-50 transition-colors border border-gray-200 ${thumbnailPage >= totalPages - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                  disabled={thumbnailPage >= totalPages - 1}
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="mt-4 lg:mt-0">
              {/* Title & Tagline */}
              <Badge className="mb-3 md:mb-4 bg-amber-100 text-amber-700 border-amber-200">
                <Heart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Couples Only Experience
              </Badge>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-serif">
                {pkg.name} {pkg.emoji}
              </h1>
              
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Creating the perfect mood for <strong>Every Celebration & Love Story</strong> ✨
              </p>

              {/* Perfect For */}
              <div className="mb-4 md:mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">🎉 Perfect For</p>
                <p className="text-gray-600 text-sm md:text-base">
                  {pkg.perfectFor.join(' | ')}
                </p>
              </div>

              {/* Tagline */}
              <div className="bg-amber-50 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                <p className="text-amber-800 italic text-sm md:text-base">
                  💍 {pkg.name} — where every occasion turns into a forever memory under the stars ✨🌙
                </p>
              </div>

              {/* Price */}
              <div className="mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl font-bold text-amber-600">{formatPrice(pkg.price)}</span>
              </div>

              {/* Booking Form Inline */}
              <div className="mb-6 md:mb-8">
                <FFCBookingForm variant="sidebar" packageName={pkg.name} defaultPackageSlug={pkg.slug} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Description */}
      <section className="py-8 md:py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 font-serif text-center">
              ✨ What's Included
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {pkg.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3 md:p-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm md:text-base">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lunch/Dinner Menu */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 font-serif text-center">
              🍽️ Lunch / Dinner Menu
            </h2>
            <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base">
              Curated Café-Style Delicacies Crafted for Romantic Dates & Private Celebrations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h4 className="font-semibold text-amber-800 mb-1">🥤 Welcome Drink</h4>
                <p className="text-gray-600 text-sm">A refreshing welcome to begin your romantic experience</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h4 className="font-semibold text-amber-800 mb-1">🧀 Cheese Fondue</h4>
                <p className="text-gray-600 text-sm">Rich, velvety cheese fondue served with cheese balls, wedges, and nachos</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h4 className="font-semibold text-amber-800 mb-1">🌯 Paneer Tortilla</h4>
                <p className="text-gray-600 text-sm">Soft tortilla filled with spicy paneer and chef's special seasoning</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h4 className="font-semibold text-amber-800 mb-1">🍟 Peri Peri Fries with Mac & Cheese</h4>
                <p className="text-gray-600 text-sm">Creamy mac & cheese paired with peri-peri fries</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h4 className="font-semibold text-amber-800 mb-1">🍞 Tangy Loaf</h4>
                <p className="text-gray-600 text-sm">Warm loaf served with cheesy garlic sauce</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h4 className="font-semibold text-amber-800 mb-1">🍫 Dessert with Chocolate Bite</h4>
                <p className="text-gray-600 text-sm">A sweet ending with rich chocolate indulgence</p>
              </div>
            </div>

            {/* Cake & Champagne */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`rounded-xl p-4 md:p-6 text-center ${pkg.cakeIncluded ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-200' : 'bg-gradient-to-br from-amber-100 to-orange-100'}`}>
                <h4 className={`font-bold text-lg md:text-xl mb-2 ${pkg.cakeIncluded ? 'text-green-800' : 'text-amber-800'}`}>🎂 Cake & Champagne</h4>
                {pkg.cakeIncluded ? (
                  <>
                    <p className="text-green-700 text-sm md:text-base font-semibold">✅ <strong>Cake:</strong> Complimentary (FREE!)</p>
                    <p className="text-gray-700 text-sm md:text-base mt-1"><strong>Champagne:</strong> ₹500/- (Non-Alcoholic Fruit Flavour)</p>
                  </>
                ) : (
                  <>
                    <p className="text-amber-700 text-sm md:text-base"><strong>Cake:</strong> ₹500/- (Extra Cost)</p>
                    <p className="text-gray-700 text-sm md:text-base mt-1"><strong>Champagne:</strong> ₹500/- (Non-Alcoholic Fruit Flavour)</p>
                  </>
                )}
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 md:p-6 text-center">
                <h4 className="font-bold text-lg md:text-xl text-amber-800 mb-2">⏰ 3 Mesmerizing Hours</h4>
                <p className="text-gray-700 text-sm md:text-base">Three magical hours designed to create unforgettable memories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Get - Decoration */}
      <section className="py-8 md:py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 font-serif text-center">
              🏕️ Romantic Tent Decoration
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-3xl md:text-4xl mb-2 block">⛺</span>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Trending Tent Setup</h4>
                <p className="text-gray-600 text-xs md:text-sm mt-1">Stylish tent for romantic evenings</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-3xl md:text-4xl mb-2 block">🌸</span>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Curtains, Flowers & Lights</h4>
                <p className="text-gray-600 text-xs md:text-sm mt-1">Magical ambiance</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-3xl md:text-4xl mb-2 block">✨</span>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Unique Props</h4>
                <p className="text-gray-600 text-xs md:text-sm mt-1">Elevate the atmosphere</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-3xl md:text-4xl mb-2 block">🛋️</span>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Lower Seating</h4>
                <p className="text-gray-600 text-xs md:text-sm mt-1">Comfortable open-roof seating</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-3xl md:text-4xl mb-2 block">🕯️</span>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Candle Lights</h4>
                <p className="text-gray-600 text-xs md:text-sm mt-1">Soft glow for intimacy</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-3xl md:text-4xl mb-2 block">🎶</span>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Romantic Music</h4>
                <p className="text-gray-600 text-xs md:text-sm mt-1">Perfect mood melodies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-amber">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif">About This Setup</h2>
            <div className="whitespace-pre-line text-gray-600 leading-relaxed text-sm md:text-base">
              {pkg.fullDescription}
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif">📋 Cancellation Policy</h2>
            <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability.
              </p>
              <p className="text-amber-600 font-semibold text-sm md:text-base">
                * No Refund Policy Applicable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 font-serif text-center">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {relatedPackages.map((relPkg) => (
              <Link key={relPkg.id} href={`/packages/${relPkg.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-amber-100 group">
                  <div className="aspect-square md:aspect-video bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                    <Image
                      src={relPkg.thumbnail}
                      alt={relPkg.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-2 md:p-4">
                    <h3 className="font-semibold text-sm md:text-lg mb-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {relPkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-1 md:mb-2 hidden md:block">
                      {relPkg.shortDescription}
                    </p>
                    <p className="text-base md:text-xl font-bold text-amber-600">
                      {formatPrice(relPkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
