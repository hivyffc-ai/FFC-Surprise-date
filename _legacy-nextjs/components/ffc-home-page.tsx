'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, ChevronLeft,
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Camera, Music, Utensils, Wine, Play, ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, serviceCategories, vadodaraAreas, formatPrice, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/schema-generator';

// Experience features - Birthday focused
const experienceFeatures = [
  {
    icon: Clock,
    title: "3 Hours Exclusive Celebration",
    description: "Your private birthday kingdom for three unforgettable hours"
  },
  {
    icon: Gift,
    title: "Designer Birthday Cake",
    description: "Fresh, customized celebration cake included in every package"
  },
  {
    icon: Camera,
    title: "Insta-Perfect Decor",
    description: "Balloon arches, fairy lights & photo props for viral-worthy pics"
  },
  {
    icon: Music,
    title: "Personalized Playlist",
    description: "Share your favorite songs—we'll set the birthday mood"
  }
];

// FAQ items - Birthday Focused
const faqs = [
  {
    question: "Why is Friends Factory Cafe the best birthday venue in Vadodara?",
    answer: "We're Vadodara's ONLY dedicated private rooftop birthday venue! Unlike restaurants where you share space, our entire rooftop is exclusively yours. Located at 424, OneWest, 4th Floor, Sevasi-Canal Rd, Gotri—we offer stunning city views, professional decorations, and personalized service that restaurants simply can't match."
  },
  {
    question: "How do I plan a surprise birthday party?",
    answer: `Easy! WhatsApp ${siteConfig.phone} with the birthday person's name, date, preferred time slot, and any special requests. We'll coordinate everything secretly—you just bring them blindfolded for the big reveal! Over 3000 successful surprises and counting.`
  },
  {
    question: "What's included in the ₹6500 birthday package?",
    answer: "Everything you need: 3 hours private rooftop access, 100+ balloon decorations, welcome drinks, cheese fondue platter, designer birthday cake, LED lights, fairy lights, photo props, Bluetooth speakers for your playlist, and a dedicated birthday coordinator."
  },
  {
    question: "Can I do a 12 AM midnight birthday surprise?",
    answer: "Absolutely! Midnight surprises are our specialty. We set up everything by 11 PM, and you celebrate the exact moment they turn a year older under the stars. The 10 PM - 1 AM slot is perfect for this magical midnight moment."
  },
  {
    question: "Can I bring my own birthday cake?",
    answer: "Yes, you can! But honestly, our complimentary designer cake is pretty amazing. If you have a specific design or flavor in mind, we can customize it. Or bring your special cake—we'll set it up perfectly with candles and sparklers!"
  },
  {
    question: "What time slots can I book for birthday parties?",
    answer: "We have 4 slots: Lunch Party (12-3 PM) ☀️, Evening Bash (4-7 PM) 🌅, Dinner Celebration (7-10 PM) 🌙, and Late Night/Midnight (10 PM-1 AM) ✨. Weekends fill up fast—book at least 3 days in advance!"
  },
  {
    question: "Is this good for surprising my girlfriend/boyfriend?",
    answer: "It's PERFECT for couples! Complete privacy, romantic rooftop setting, customizable decorations in their favorite colors, personalized banner with their name, and you can even record their reaction. We've hosted 1500+ couple birthday surprises!"
  },
  {
    question: "How many people can attend a birthday party?",
    answer: "Our cozy rooftop is ideal for intimate celebrations—perfect for 2-8 guests. It's designed for quality over quantity, making it ideal for couple birthdays, small friend groups, or close family celebrations."
  },
  {
    question: "Can I customize the decoration theme and colors?",
    answer: "100% yes! Tell us their favorite colors, themes (elegant, fun, romantic, quirky), and any specific requests. Rose gold? Black & gold? Rainbow? Pastel? We'll create a Pinterest-worthy setup that matches their personality!"
  },
  {
    question: "What's your cancellation & rescheduling policy?",
    answer: "We understand plans change! Rescheduling must be done at least 24 hours prior, and your event can be moved within one month (subject to availability). Note: Our No Refund Policy applies, but we always try to accommodate you."
  }
];

// Gallery items data - Birthday-focused with real images
const galleryItems = [
  // Featured Birthday Images - Rooftop LoveFrame Package
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame.png', alt: 'Birthday rooftop LoveFrame celebration Vadodara', title: 'Rooftop Birthday', subtitle: 'LoveFrame Package', featured: true },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (1).png', alt: 'Birthday balloon decoration rooftop Vadodara', title: 'Birthday Balloons', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (2).png', alt: 'Romantic birthday setup Vadodara', title: 'Romantic Setup', featured: false },
  { type: 'video', src: '/images/gallery/1000330056.mp4', thumbnail: '/images/gallery/Rooftp LoveFrame (3).png', alt: 'Birthday celebration video Vadodara', title: 'Birthday Celebration', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (3).png', alt: 'Birthday surprise decoration Vadodara', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (4).png', alt: 'Birthday party setup Vadodara', title: 'Party Setup', featured: false },
  { type: 'video', src: '/images/gallery/1000330062.mp4', thumbnail: '/images/gallery/Rooftp LoveFrame (5).png', alt: 'Birthday party video Vadodara', title: 'Birthday Party Video', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (5).png', alt: 'Birthday candlelight dinner Vadodara', title: 'Birthday Dinner', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (6).png', alt: 'Birthday balloon arch Vadodara', title: 'Balloon Decoration', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (7).png', alt: 'Birthday rooftop venue Vadodara', title: 'Rooftop Venue', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (8).png', alt: 'Birthday surprise for girlfriend Vadodara', title: 'Girlfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (9).png', alt: 'Birthday surprise for boyfriend Vadodara', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (10).png', alt: 'Midnight birthday surprise Vadodara', title: 'Midnight Surprise', featured: false },
  
  // Creative Area Package Images
  { type: 'image', src: '/images/gallery/Creative Area Package A.png', alt: 'Creative birthday celebration Vadodara', title: 'Creative Birthday', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (1).png', alt: 'Birthday room decoration Vadodara', title: 'Room Decoration', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (2).png', alt: 'Birthday party places Vadodara', title: 'Party Place', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (3).png', alt: 'Birthday party venues Vadodara', title: 'Party Venue', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (4).png', alt: 'Birthday decorators Vadodara', title: 'Birthday Decor', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (5).png', alt: 'Birthday organisers Vadodara', title: 'Birthday Setup', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (6).png', alt: 'Birthday event planners Vadodara', title: 'Event Planning', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (7).png', alt: 'Private birthday celebration Vadodara', title: 'Private Party', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (8).png', alt: 'Premium birthday celebration Vadodara', title: 'Premium Setup', featured: false },

  // Real celebration photos
  { type: 'image', src: '/images/gallery/IMG_20251107_193832872.jpg', alt: 'Birthday celebration for couples Vadodara', title: 'Couple Birthday', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251107_194250189.jpg', alt: 'Romantic birthday surprise Vadodara', title: 'Romantic Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251217_195512938.jpg', alt: 'Birthday surprise planners Vadodara', title: 'Surprise Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251218_200520773.jpg', alt: 'Best birthday surprise Vadodara', title: 'Best Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251218_200638051.jpg', alt: 'Unique birthday celebration Vadodara', title: 'Unique Celebration', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251218_202038910.jpg', alt: 'Birthday dinner date Vadodara', title: 'Dinner Date', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251218_202045580.jpg', alt: 'Birthday candlelight dinner Vadodara', title: 'Candlelight Setup', featured: false },
  
  // Additional celebration photos
  { type: 'image', src: '/images/gallery/IMG_3672.jpg', alt: 'Rooftop birthday party Vadodara', title: 'Rooftop Party', featured: false },
  { type: 'image', src: '/images/gallery/IMG_3688.JPG', alt: 'Birthday photoshoot Vadodara', title: 'Birthday Photo', featured: false },
  { type: 'image', src: '/images/gallery/IMG_3693.jpg', alt: 'Birthday packages Vadodara', title: 'Package Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG_3696.jpg', alt: 'Birthday surprise for friend Vadodara', title: 'Friend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/DSCN3032.JPG', alt: 'Budget birthday surprise Vadodara', title: 'Birthday Venue', featured: false },
  { type: 'image', src: '/images/gallery/737afdb2-d204-4d95-89a9-45de427dd14d.jpg', alt: 'Birthday celebration venue Vadodara', title: 'Celebration Venue', featured: false },
];

// Gallery Section Component
function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return true;
  });

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
            <ImageIcon className="h-4 w-4 mr-2" /> 📸 Birthday Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Real Birthday Celebrations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've made birthdays unforgettable! Every setup is designed to create magical birthday memories.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' 
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white' 
              : 'border-pink-300 text-pink-700 hover:bg-pink-50'}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            All ({galleryItems.length})
          </Button>
          <Button
            variant={activeFilter === 'photos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('photos')}
            className={activeFilter === 'photos' 
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white' 
              : 'border-pink-300 text-pink-700 hover:bg-pink-50'}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Photos ({photoCount})
          </Button>
          <Button
            variant={activeFilter === 'videos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('videos')}
            className={activeFilter === 'videos' 
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white' 
              : 'border-pink-300 text-pink-700 hover:bg-pink-50'}
          >
            <Play className="h-4 w-4 mr-2" />
            Videos ({videoCount})
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-2xl ${
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
                    poster={item.thumbnail}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-pink-600 ml-1" fill="currentColor" />
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

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/virtual-tour">
            <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg">
              <Camera className="h-5 w-5 mr-2" />
              View Virtual Tour
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 6); // Show latest 6 posts

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
            Our Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Celebration Ideas & Inspiration
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and ideas to help you plan the perfect celebration in Vadodara
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-pink-100">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg">
              View More Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FFCHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviewsRef = useRef<HTMLDivElement>(null);
  
  // Hero slider images
  const heroSlides = [
    { src: '/images/gallery/IMG_20251218_200520773.jpg', alt: 'Birthday Celebration Setup at Friends Factory Cafe Vadodara' },
    { src: '/images/gallery/IMG_20251218_202038910.jpg', alt: 'Premium Birthday Party Decoration Vadodara' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Scroll reviews function
  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsRef.current) {
      const scrollAmount = 232; // card width (220px) + gap (12px)
      reviewsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <main>
      {/* Hero Section */}
      <section aria-label="Birthday Celebration Vadodara - Hero" className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" /> 🎂 #1 Birthday Venue in Vadodara
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
                Best Birthday Celebration in Vadodara
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl">
                {siteConfig.tagline}
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-xl">
                Premium rooftop birthday venue for unforgettable surprises. Stunning decorations, balloon setups, cake & magical birthday experiences!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/packages">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 text-lg px-8 py-6 w-full sm:w-auto">
                    <Gift className="h-5 w-5 mr-2" />
                    Birthday Packages
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
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
                  <Users className="h-4 w-4" /> 3000+ Birthdays
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm />
        </div>
      </section>

      {/* Packages Section */}
      <section aria-label="Birthday Celebration Packages" className="py-12 md:py-20 bg-gradient-to-b from-pink-50 via-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
              🎁 Birthday Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-serif">
              Choose Your Perfect Birthday Setup
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              8 stunning birthday themes—from elegant rooftop parties to magical balloon wonderlands
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-pink-100 group overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  <CardContent className="p-2 md:p-4">
                    <h3 className="font-semibold text-sm md:text-lg mb-1 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    <p className="text-base md:text-xl font-bold text-pink-600">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white">
                View All Packages <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Birthday Services */}
      <section aria-label="Birthday Celebration Services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
              🎂 Birthday Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Birthday Celebration Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate birthday dinners to grand surprise parties, we create unforgettable birthday memories!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { emoji: '🎂', name: 'Birthday Surprise', description: 'Blindfold entry, music reveal & unforgettable reactions' },
              { emoji: '🎈', name: '100+ Balloons', description: 'Balloon arches, garlands & floating helium magic' },
              { emoji: '🌙', name: 'Midnight Party', description: 'Celebrate the exact moment at 12:00 AM' },
              { emoji: '💑', name: 'Couple Birthday', description: 'Intimate rooftop dinner just for two' },
              { emoji: '📸', name: 'Photo Paradise', description: 'LED backdrop, props & Instagram-perfect corners' },
              { emoji: '🎁', name: 'All-In-One Package', description: 'Cake, decor, food, drinks—everything included' },
              { emoji: '🔒', name: '100% Private', description: 'No other guests—just your private party' },
              { emoji: '✨', name: 'Custom Themes', description: 'Tell us the vibe—we create the magic' },
            ].map((service, idx) => (
              <Card key={idx} className="h-full border-pink-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.emoji}</div>
                  <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 line-clamp-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-2 hidden md:block">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features - Birthday Focused */}
      <section aria-label="What's Included" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
              🎁 What's Included
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Complete Birthday Experience
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-500/20 text-pink-400 border-pink-500/30">
                🍰 Birthday Menu
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Delicious Birthday Party Food
              </h2>
              <p className="text-gray-300 mb-8">
                Premium cafe bites, sweet treats & refreshing drinks for your celebration
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Party Welcome Drink</h4>
                    <p className="text-gray-400 text-sm">Refreshing mocktails to kick off the birthday celebration</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cheesy Party Platter</h4>
                    <p className="text-gray-400 text-sm">Hot cheese fondue with nachos, wedges & cheese balls—perfect for sharing!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Birthday Dessert Surprise</h4>
                    <p className="text-gray-400 text-sm">Decadent chocolate treats & sweet indulgence after cake cutting</p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block mt-8">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white">
                  View Full Menu <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/about/menu.webp" 
                  alt="Friends Factory Cafe Menu - Romantic Dining Experience" 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section aria-label="Areas We Serve in Vadodara" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
              <MapPin className="h-4 w-4 mr-2" /> Birthday Parties Across Vadodara
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Your Birthday Destination from Any Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Just 15-25 minutes from anywhere in Vadodara—because every birthday deserves a premium celebration!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {vadodaraAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-colors border border-pink-200"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2">
                3000+ Happy Birthday Celebrations 🎉
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

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Rating Summary Card */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 lg:w-56 flex-shrink-0">
              <p className="text-base font-bold text-gray-800 mb-2">EXCELLENT</p>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-pink-400 text-pink-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-3">Based on <strong>1256 reviews</strong></p>
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-lg font-medium text-gray-700">Google</span>
              </div>
            </div>

            {/* Reviews Grid with Navigation */}
            <div className="flex-1 relative min-w-0 overflow-hidden">
              {/* Navigation Arrows */}
              <button 
                onClick={() => scrollReviews('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <ChevronLeft className="h-4 w-4 text-gray-600" />
              </button>

              <button 
                onClick={() => scrollReviews('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </button>

              <div 
                ref={reviewsRef}
                className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-10 py-1" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Review 1 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-semibold text-sm">D</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Devanshi</p>
                        <p className="text-xs text-gray-500">3 weeks ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-pink-400 text-pink-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Best birthday surprise ever! My husband planned it here and I was in tears! The decoration was stunning 🎂</p>
                  </CardContent>
                </Card>

                {/* Review 2 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-semibold text-sm">V</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Vraj Patel</p>
                        <p className="text-xs text-gray-500">1 month ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-pink-400 text-pink-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Celebrated my girlfriend's birthday here—she absolutely loved it! Private rooftop, amazing balloons 🎈</p>
                  </CardContent>
                </Card>

                {/* Review 3 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold text-sm">Y</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Yoma Patel</p>
                        <p className="text-xs text-gray-500">1 month ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-pink-400 text-pink-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Midnight birthday party was magical! Cut cake exactly at 12 AM under the stars. Highly recommend! ⭐</p>
                  </CardContent>
                </Card>

                {/* Review 4 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold text-sm">K</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Krishn Sharma</p>
                        <p className="text-xs text-gray-500">2 months ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-pink-400 text-pink-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Best place for birthday celebration in Vadodara! Surprised my wife here—her reaction was priceless! 🎉</p>
                  </CardContent>
                </Card>

                {/* Review 5 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold text-sm">P</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Priya Shah</p>
                        <p className="text-xs text-gray-500">2 months ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-pink-400 text-pink-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Such a sweet birthday setup! Cake was delicious, balloon decoration was Instagram-perfect! Will come again 💕</p>
                  </CardContent>
                </Card>

                {/* Review 6 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm">R</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Rahul Desai</p>
                        <p className="text-xs text-gray-500">3 months ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-pink-400 text-pink-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Booked for my friend's surprise birthday. The team executed it perfectly! Food was great too 🍕</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Scroll indicator */}
              <div className="flex justify-center mt-3">
                <span className="text-xs text-gray-500">← Swipe to see more reviews →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <section aria-label="Frequently Asked Questions" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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

      {/* CTA Section - Birthday Focused */}
      <section aria-label="Book Your Birthday Celebration" className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            🎂 Ready to Plan the Perfect Birthday? 🎂
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your birthday celebration today! Let us create an unforgettable surprise they'll remember forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to book a birthday celebration at Friends Factory Cafe.`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Birthday Now
              </Button>
            </a>
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })
        }}
      />

      {/* Breadcrumb Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: siteConfig.website }
          ]))
        }}
      />

      {/* LocalBusiness Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema({
            name: siteConfig.name,
            url: siteConfig.website,
            phone: siteConfig.phone,
            address: siteConfig.address,
            city: siteConfig.city,
            description: siteConfig.description,
            priceRange: '₹4700 - ₹14900',
            image: `${siteConfig.website}/og-image.jpg`,
          }))
        }}
      />
      </main>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
