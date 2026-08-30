'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { packages } from '@/lib/ffc-config';

export default function FFCVirtualTourPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Camera className="h-4 w-4 mr-2" /> Explore Our Spaces
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Virtual Tour
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a sneak peek into our romantic celebration spaces before you book
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xs mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif mb-4">Watch Our Space</h2>
              <p className="text-gray-600">Experience the magic of Friends Factory Cafe</p>
            </div>
            
            {/* Vertical Video */}
            <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/video-thumbnails/virtual-tour-thumb.jpg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/virtual-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-amber-600 ml-1" fill="currentColor" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Setups Gallery</h2>
            <p className="text-gray-600">Explore our 8 unique celebration spaces</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {pkg.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Features */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">The Ambiance</h2>
            <p className="text-gray-400">Every detail crafted for romance</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: "🕯️", title: "Candles" },
              { emoji: "💡", title: "Fairy Lights" },
              { emoji: "🌹", title: "Flowers" },
              { emoji: "🎈", title: "Balloons" },
              { emoji: "🎶", title: "Music" },
              { emoji: "✨", title: "Décor" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-5xl mb-3 block">{item.emoji}</span>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Ready to Experience It In Person?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The real magic is best experienced in person. Book your celebration today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                View All Packages <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <FFCBookNowButton pageTitle="Virtual Tour" className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
