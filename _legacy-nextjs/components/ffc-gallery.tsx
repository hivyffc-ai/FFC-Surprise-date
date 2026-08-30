'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ImageIcon, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Gallery item type
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// SEO-friendly gallery items using actual gallery photos
export const galleryItems: GalleryItem[] = [
  // Featured Images - Surprise Celebrations
  { type: 'image', src: '/images/gallery/IMG_20260119_194048552.jpg', alt: 'Surprise date setup with romantic decorations Vadodara', title: 'Surprise Date Setup', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/images/gallery/IMG_20260119_194103350.jpg', alt: 'Romantic surprise celebration setup Vadodara', title: 'Romantic Surprise', featured: true },
  { type: 'image', src: '/images/gallery/IMG_20260119_194142817.jpg', alt: 'Birthday surprise decoration Vadodara', title: 'Birthday Surprise', featured: true },
  
  // Surprise Date & Birthday Setups
  { type: 'image', src: '/images/gallery/IMG_20260119_194156467.jpg', alt: 'Surprise date night setup Vadodara', title: 'Date Night Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20260119_194210164.jpg', alt: 'Romantic surprise for boyfriend Vadodara', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20260119_194315672.jpg', alt: 'Surprise setup for girlfriend Vadodara', title: 'Girlfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20260119_194325684.jpg', alt: 'Anniversary surprise decoration Vadodara', title: 'Anniversary Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20260119_194351411.jpg', alt: 'Romantic celebration setup Vadodara', title: 'Celebration Setup', featured: false },
  
  // November & December Celebrations
  { type: 'image', src: '/images/gallery/IMG_20251126_195441411.jpg', alt: 'Surprise party setup Vadodara', title: 'Surprise Party', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195451844.jpg', alt: 'Birthday surprise planner Vadodara', title: 'Birthday Planner', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195504828.jpg', alt: 'Romantic surprise dinner Vadodara', title: 'Surprise Dinner', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195520782.jpg', alt: 'Surprise date for wife Vadodara', title: 'Wife Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195542577.jpg', alt: 'Surprise date for husband Vadodara', title: 'Husband Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251123_195059438.jpg', alt: 'Midnight birthday surprise Vadodara', title: 'Midnight Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251123_195111857.jpg', alt: 'Romantic birthday surprise Vadodara', title: 'Romantic Birthday', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251123_195837779.jpg', alt: 'Surprise celebration venue Vadodara', title: 'Surprise Venue', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251123_200100275.jpg', alt: 'Couple surprise celebration Vadodara', title: 'Couple Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251215_133035505.jpg', alt: 'Surprise date decoration Vadodara', title: 'Date Decoration', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251107_194221331.jpg', alt: 'Surprise proposal setup Vadodara', title: 'Proposal Setup', featured: false },
  
  // Classic celebration photos
  { type: 'image', src: '/images/gallery/IMG-20241204-WA0070.jpg', alt: 'Valentines surprise celebration Vadodara', title: 'Valentine Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20241204-WA0101.jpg', alt: 'Romantic surprise setup Vadodara', title: 'Romantic Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20241225-WA0005.jpg', alt: 'Special surprise celebration Vadodara', title: 'Special Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_4421.jpg', alt: 'Surprise birthday party Vadodara', title: 'Birthday Party', featured: false },
  { type: 'image', src: '/images/gallery/DSCN3004.JPG', alt: 'Rooftop surprise celebration Vadodara', title: 'Rooftop Surprise', featured: false },
  { type: 'image', src: '/images/gallery/DSCN3032.JPG', alt: 'Surprise anniversary party Vadodara', title: 'Anniversary Party', featured: false },
  
  // September celebrations
  { type: 'image', src: '/images/gallery/20240905_184051_944083cc-0e21-48ab-a40e-5f7a7cbd02d0.JPG', alt: 'Surprise date places Vadodara', title: 'Surprise Venue', featured: false },
  { type: 'image', src: '/images/gallery/20240905_184201_6f8ca7b2-0a91-4157-9f09-abb81fcd3c1c.JPG', alt: 'Surprise date ideas Vadodara', title: 'Date Ideas', featured: false },
  { type: 'image', src: '/images/gallery/20240905_184207_4931ce9d-9af0-4292-a339-60947c5181e6.JPG', alt: 'Best birthday surprise Vadodara', title: 'Best Birthday', featured: false },
  { type: 'image', src: '/images/gallery/20240905_184233_9506b1a1-d788-4af3-b0ee-aac6dbd2ddce.JPG', alt: 'Surprise date planners Vadodara', title: 'Date Planners', featured: false },
  { type: 'image', src: '/images/gallery/20240905_184324_63664971-547b-4356-918e-d11a6de93ce8.JPG', alt: 'Surprise date setup Vadodara', title: 'Date Setup', featured: false },
  
  // Videos
  { type: 'video', src: '/images/gallery/VID-20250416-WA0009.mp4', alt: 'Birthday surprise video Vadodara', title: 'Birthday Video', featured: false },
  { type: 'video', src: '/images/gallery/VID-20250416-WA0010.mp4', alt: 'Surprise celebration video Vadodara', title: 'Celebration Video', featured: false },
  { type: 'video', src: '/images/gallery/VID-20250416-WA0011.mp4', alt: 'Romantic surprise video Vadodara', title: 'Romantic Video', featured: false },
];

// Hero images for keyword and area pages
export const birthdayHeroImages = galleryItems.filter(i => i.type === 'image').slice(0, 6).map(i => i.src);

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Our Gallery", 
  subtitle = "Real celebrations, real memories",
  maxItems = 12,
  showFilters = true,
  className = ""
}: FFCGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems
    .filter(item => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'photos') return item.type === 'image';
      if (activeFilter === 'videos') return item.type === 'video';
      return true;
    })
    .slice(0, maxItems);

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of romantic celebrations in Vadodara
          </p>
        </div>

        {/* Filter Buttons */}
        {showFilters && (
          <div className="flex justify-center gap-3 mb-8">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
            >
              All ({photoCount + videoCount})
            </Button>
            <Button 
              variant={activeFilter === 'photos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('photos')}
              className={activeFilter === 'photos' 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Photos ({photoCount})
            </Button>
            <Button 
              variant={activeFilter === 'videos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('videos')}
              className={activeFilter === 'videos' 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
            >
              <Play className="h-4 w-4 mr-2" />
              Videos ({videoCount})
            </Button>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-amber-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
