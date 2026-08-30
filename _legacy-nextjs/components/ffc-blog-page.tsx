'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

export default function FFCBlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  const categories = Array.from(new Set(posts.map(p => p.category)));

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-amber-100 text-amber-800 mb-4">
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Celebration Ideas & Inspiration
            </h1>
            <p className="text-lg text-gray-600">
              Discover tips, guides, and ideas for planning the perfect celebration in Vadodara. 
              From birthday surprises to romantic proposals, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-amber-50 px-4 py-2">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-amber-50 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-500">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} read
                    </span>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Celebration?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Turn your special moments into unforgettable memories at Friends Factory Cafe, 
            Vadodara's premier rooftop celebration venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-amber-50"
              asChild
            >
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-amber-500">
            {post.category}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
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
  );
}
