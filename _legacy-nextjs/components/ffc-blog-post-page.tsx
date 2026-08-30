'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Tag, Share2, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, BlogPost, getAllBlogPosts } from '@/lib/ffc-config';

interface FFCBlogPostPageProps {
  post: BlogPost;
}

export default function FFCBlogPostPage({ post }: FFCBlogPostPageProps) {
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // Generate article content based on the post
  const articleContent = generateArticleContent(post);

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[200px]">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-amber-100 text-amber-800">
                {post.category}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Featured Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-10">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600 prose-strong:text-gray-900">
              <div dangerouslySetInnerHTML={{ __html: articleContent }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t">
              <Tag className="w-4 h-4 text-gray-500" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-gray-600">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share & CTA */}
            <div className="mt-10 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ready to celebrate?</h3>
                  <p className="text-gray-600 text-sm">Book your special moment at Friends Factory Cafe</p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                    asChild
                  >
                    <Link href="/packages">View Packages</Link>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                    asChild
                  >
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group">
                      <div className="relative h-40">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">{relatedPost.readTime} read</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="py-8 border-t">
        <div className="container mx-auto px-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

// Generate article content based on post category and title
function generateArticleContent(post: BlogPost): string {
  const { category, title } = post;
  
  const contentTemplates: { [key: string]: string } = {
    'Birthday': `
      <h2>Make Their Birthday Unforgettable</h2>
      <p>Birthdays are special occasions that deserve memorable celebrations. At Friends Factory Cafe in Vadodara, we specialize in creating magical birthday experiences that your loved ones will cherish forever.</p>
      
      <h3>Why Choose a Rooftop Birthday Celebration?</h3>
      <p>There's something magical about celebrating under the stars. Our rooftop venue offers:</p>
      <ul>
        <li><strong>Privacy</strong> - Exclusive space just for your celebration</li>
        <li><strong>Stunning Views</strong> - Beautiful Vadodara skyline as your backdrop</li>
        <li><strong>Romantic Ambiance</strong> - Fairy lights, candles, and elegant decor</li>
        <li><strong>Perfect Photos</strong> - Instagram-worthy setups for memories</li>
      </ul>
      
      <h3>Birthday Surprise Ideas at Friends Factory Cafe</h3>
      <p>From midnight surprises to elaborate themed decorations, we can help you plan the perfect birthday celebration:</p>
      <ol>
        <li><strong>Midnight Surprise</strong> - Bring them at 11:30 PM for a cake cutting at midnight</li>
        <li><strong>Balloon Surprise</strong> - Fill the space with their favorite color balloons</li>
        <li><strong>Photo Wall</strong> - Create a memory wall with pictures of your journey together</li>
        <li><strong>Live Music</strong> - Add romantic songs playing in the background</li>
        <li><strong>Custom Cake</strong> - Order a personalized cake with their favorite design</li>
      </ol>
      
      <h3>Our Birthday Packages</h3>
      <p>We offer various packages starting from ₹6,500 that include decorations, cake, mocktails, and a private 3-hour celebration slot. Each package can be customized to match your vision.</p>
      
      <h3>Book Your Birthday Celebration</h3>
      <p>Don't let another birthday pass by without making it special. Contact us today to book your birthday surprise at Vadodara's most romantic rooftop cafe.</p>
    `,
    'Proposal': `
      <h2>Planning the Perfect Proposal in Vadodara</h2>
      <p>A marriage proposal is one of life's most meaningful moments. At Friends Factory Cafe, we've helped countless couples create their perfect "yes" moment on our beautiful rooftop.</p>
      
      <h3>Why Our Rooftop is Perfect for Proposals</h3>
      <p>The setting of your proposal matters. Here's why couples choose our venue:</p>
      <ul>
        <li><strong>Complete Privacy</strong> - No other guests to interrupt your moment</li>
        <li><strong>Romantic Setting</strong> - Fairy lights, candles, and rose petals</li>
        <li><strong>Stunning Backdrop</strong> - Perfect for photos and videos</li>
        <li><strong>Weather Perfect</strong> - Open rooftop with beautiful evening skies</li>
      </ul>
      
      <h3>Proposal Setup Options</h3>
      <p>We offer various romantic setups for your proposal:</p>
      <ol>
        <li><strong>Heart Arch Setup</strong> - A beautiful heart-shaped arch decorated with flowers and lights</li>
        <li><strong>Balloon Proposal</strong> - "Will You Marry Me?" spelled out in balloons</li>
        <li><strong>Candlelit Path</strong> - A pathway of candles leading to the proposal spot</li>
        <li><strong>Rose Petal Heart</strong> - A giant heart made of rose petals on the floor</li>
      </ol>
      
      <h3>Tips for a Successful Proposal</h3>
      <p>Based on hundreds of successful proposals at our venue, here are our top tips:</p>
      <ul>
        <li>Book a weekday evening for more privacy</li>
        <li>Arrive early to set the mood</li>
        <li>Consider hiring a hidden photographer</li>
        <li>Have the ring ready and accessible</li>
        <li>Plan what you want to say</li>
      </ul>
      
      <h3>After the "Yes"</h3>
      <p>Celebrate your engagement with champagne, cake, and a romantic candlelight dinner. We'll make sure your special night continues to be magical.</p>
    `,
    'Anniversary': `
      <h2>Celebrate Your Love Story</h2>
      <p>Every anniversary marks another beautiful chapter in your love story. Whether it's your 1st or 50th, Friends Factory Cafe offers the perfect setting to celebrate your journey together.</p>
      
      <h3>Why Celebrate Your Anniversary at Our Rooftop?</h3>
      <p>An anniversary deserves more than just dinner at a regular restaurant:</p>
      <ul>
        <li><strong>Intimate Setting</strong> - Just the two of you, rekindling your romance</li>
        <li><strong>Beautiful Decor</strong> - Romantic setup tailored to your love story</li>
        <li><strong>Memory Making</strong> - Create new memories while celebrating old ones</li>
        <li><strong>Special Touches</strong> - Personalized elements that show you care</li>
      </ul>
      
      <h3>Anniversary Celebration Ideas</h3>
      <p>Make your anniversary extra special with these ideas:</p>
      <ol>
        <li><strong>Photo Timeline</strong> - Display photos from each year together</li>
        <li><strong>Love Letter Reading</strong> - Write and read letters to each other</li>
        <li><strong>Recreate Your First Date</strong> - Add elements from your first date</li>
        <li><strong>Renew Your Vows</strong> - A private vow renewal ceremony</li>
        <li><strong>Stargazing</strong> - End the night looking at stars together</li>
      </ol>
      
      <h3>Milestone Anniversary Packages</h3>
      <p>We offer special packages for milestone anniversaries (1st, 5th, 10th, 25th, 50th) with premium decorations, photography, and exclusive amenities.</p>
    `,
    'Date Night': `
      <h2>Elevate Your Date Night</h2>
      <p>In the busy rhythm of life, date nights are essential for keeping the romance alive. Discover how to make your next date night in Vadodara truly special.</p>
      
      <h3>The Perfect Date Night Checklist</h3>
      <p>Here's what makes a date night memorable:</p>
      <ul>
        <li><strong>Surprise Element</strong> - Keep some details a mystery</li>
        <li><strong>Ambiance</strong> - Choose a romantic setting</li>
        <li><strong>Quality Time</strong> - Put away phones and be present</li>
        <li><strong>Shared Experience</strong> - Do something together, not just eat</li>
      </ul>
      
      <h3>Romantic Date Ideas in Vadodara</h3>
      <ol>
        <li><strong>Rooftop Candlelight Dinner</strong> - Dine under the stars</li>
        <li><strong>Sunset Viewing</strong> - Watch the sun set together</li>
        <li><strong>Music Night</strong> - Enjoy soft romantic music</li>
        <li><strong>Dessert Date</strong> - Share a special dessert platter</li>
        <li><strong>Photo Date</strong> - Capture your love story</li>
      </ol>
      
      <h3>Making It Special at Friends Factory Cafe</h3>
      <p>Our rooftop offers the perfect setting for an unforgettable date night. With customizable setups, delicious food, and a romantic atmosphere, every visit can be a new adventure in your love story.</p>
    `,
    'Pre-Wedding': `
      <h2>Capturing Pre-Wedding Magic</h2>
      <p>Your pre-wedding photoshoot and celebrations are the prelude to your big day. Make them as memorable as the wedding itself.</p>
      
      <h3>Best Pre-Wedding Photoshoot Locations in Vadodara</h3>
      <p>Vadodara offers beautiful backdrops for your pre-wedding shoot:</p>
      <ul>
        <li><strong>Rooftop Venues</strong> - Skyline views and romantic lighting</li>
        <li><strong>Lakshmi Vilas Palace</strong> - Royal and majestic backdrop</li>
        <li><strong>Sayaji Garden</strong> - Natural greenery and landscapes</li>
        <li><strong>EME Temple</strong> - Unique architectural beauty</li>
      </ul>
      
      <h3>Why Choose Our Rooftop for Pre-Wedding Shoots?</h3>
      <p>Friends Factory Cafe offers unique advantages:</p>
      <ol>
        <li>Complete privacy for comfortable poses</li>
        <li>Beautiful fairy lights and decor</li>
        <li>Golden hour and night shoot options</li>
        <li>Props and setups available</li>
        <li>Refreshments during the shoot</li>
      </ol>
      
      <h3>Pre-Wedding Celebration Ideas</h3>
      <p>Beyond the photoshoot, celebrate your upcoming wedding with intimate gatherings, bachelor/bachelorette parties, and couple's spa days.</p>
    `,
    'Baby Shower': `
      <h2>Celebrating New Beginnings</h2>
      <p>A baby shower is a beautiful celebration of new life and the journey to parenthood. Make it memorable with thoughtful planning.</p>
      
      <h3>Baby Shower Themes to Consider</h3>
      <ul>
        <li><strong>Gender Reveal</strong> - Combine with your baby shower</li>
        <li><strong>Twinkle Twinkle Little Star</strong> - Celestial and dreamy</li>
        <li><strong>Jungle Safari</strong> - Fun and colorful</li>
        <li><strong>Pastel Dreams</strong> - Soft and elegant</li>
      </ul>
      
      <h3>Planning Checklist</h3>
      <ol>
        <li>Choose a date (typically 4-6 weeks before due date)</li>
        <li>Select a venue with comfortable seating</li>
        <li>Plan games and activities</li>
        <li>Arrange for food and cake</li>
        <li>Coordinate gifts and registry</li>
      </ol>
      
      <h3>Why Choose Friends Factory Cafe?</h3>
      <p>Our intimate rooftop setting is perfect for baby showers with its beautiful decor, comfortable seating, and customizable setups for this special celebration.</p>
    `,
    'Baby': `
      <h2>Celebrating Precious Moments</h2>
      <p>From pregnancy announcements to gender reveals, every milestone in your journey to parenthood deserves celebration.</p>
      
      <h3>Creative Announcement Ideas</h3>
      <ul>
        <li><strong>Balloon Pop Reveal</strong> - Pink or blue confetti surprise</li>
        <li><strong>Cake Cutting</strong> - Colored filling reveals the gender</li>
        <li><strong>Smoke Bombs</strong> - Dramatic outdoor reveal</li>
        <li><strong>Confetti Cannons</strong> - Fun and photogenic</li>
      </ul>
      
      <h3>Planning Your Celebration</h3>
      <p>Whether intimate with just your partner or a bigger reveal party, we can help you plan the perfect celebration at our rooftop venue.</p>
    `,
    'Maternity': `
      <h2>Capturing the Beauty of Motherhood</h2>
      <p>A maternity photoshoot is a beautiful way to document this special time. Here's how to make yours stunning.</p>
      
      <h3>Best Time for Maternity Photos</h3>
      <p>The ideal time is between 28-36 weeks when your bump is beautifully visible but you're still comfortable.</p>
      
      <h3>Outfit Ideas</h3>
      <ul>
        <li>Flowing maxi dresses</li>
        <li>Fitted gowns that showcase your bump</li>
        <li>Casual couple coordinated outfits</li>
        <li>Traditional sarees for cultural shots</li>
      </ul>
      
      <h3>Location Tips</h3>
      <p>Our rooftop venue offers beautiful lighting during golden hour, comfortable seating for breaks, and privacy for intimate poses.</p>
    `,
    'Restaurants': `
      <h2>Vadodara's Culinary Gems</h2>
      <p>Discover the best dining experiences in Vadodara for your special occasions.</p>
      
      <h3>What Makes a Restaurant Special?</h3>
      <ul>
        <li><strong>Ambiance</strong> - The right mood for your occasion</li>
        <li><strong>Food Quality</strong> - Delicious and well-presented</li>
        <li><strong>Service</strong> - Attentive without being intrusive</li>
        <li><strong>Privacy</strong> - Comfortable for intimate conversations</li>
      </ul>
      
      <h3>Friends Factory Cafe: Beyond a Restaurant</h3>
      <p>We're not just a restaurant – we're a celebration destination. Our rooftop offers private dining experiences with customizable setups for any occasion.</p>
    `,
    'Corporate': `
      <h2>Professional Gatherings Made Special</h2>
      <p>Corporate events don't have to be boring. Learn how to plan engaging team lunches and office celebrations.</p>
      
      <h3>Team Building Ideas</h3>
      <ul>
        <li>Casual rooftop lunch with team activities</li>
        <li>Celebration of achievements and milestones</li>
        <li>Welcome parties for new team members</li>
        <li>Farewell gatherings for departing colleagues</li>
      </ul>
      
      <h3>Why Choose Our Venue?</h3>
      <p>Our space accommodates small to medium groups with flexible seating, good food, and a relaxed atmosphere that encourages connection.</p>
    `,
    'Kitty Party': `
      <h2>Ladies' Day Out</h2>
      <p>Plan the perfect kitty party that your group will talk about for months.</p>
      
      <h3>Fun Kitty Party Themes</h3>
      <ul>
        <li>Bollywood Glam</li>
        <li>Retro 70s</li>
        <li>Garden Party</li>
        <li>Pajama Party</li>
      </ul>
      
      <h3>Games and Activities</h3>
      <ol>
        <li>Tambola/Housie</li>
        <li>Musical chairs</li>
        <li>Best dressed competition</li>
        <li>Talent show</li>
      </ol>
      
      <h3>Our Kitty Party Packages</h3>
      <p>We offer special packages for groups with food, games, and a fun atmosphere for your regular kitty party meets.</p>
    `,
    'Farewell': `
      <h2>Saying Goodbye in Style</h2>
      <p>Farewells mark the end of one chapter and the beginning of another. Make them memorable.</p>
      
      <h3>Farewell Party Ideas</h3>
      <ul>
        <li>Memory sharing session</li>
        <li>Photo slideshow of memories</li>
        <li>Personalized gifts and awards</li>
        <li>Message book from everyone</li>
      </ul>
      
      <h3>Planning Tips</h3>
      <p>Keep the mood celebratory, focus on good memories, and create a space for heartfelt goodbyes.</p>
    `,
    'Dining': `
      <h2>The Art of Private Dining</h2>
      <p>Private dining experiences offer intimacy and exclusivity that regular restaurants can't match.</p>
      
      <h3>Benefits of Private Dining</h3>
      <ul>
        <li>Complete privacy for conversations</li>
        <li>Customizable menu options</li>
        <li>Personalized service</li>
        <li>Special decorations and setup</li>
      </ul>
      
      <h3>Perfect For</h3>
      <p>Business dinners, romantic dates, family celebrations, and any occasion where privacy and exclusivity matter.</p>
    `,
    'Photoshoot': `
      <h2>Creating Picture-Perfect Moments</h2>
      <p>Whether it's a couple shoot, family photos, or special occasion photography, location matters.</p>
      
      <h3>Why Rooftop Photoshoots Work</h3>
      <ul>
        <li>Natural lighting during golden hour</li>
        <li>City skyline backdrop</li>
        <li>Romantic fairy light ambiance for night shots</li>
        <li>Privacy for comfortable posing</li>
      </ul>
      
      <h3>Preparing for Your Shoot</h3>
      <ol>
        <li>Plan your outfits (bring options)</li>
        <li>Coordinate colors with your partner</li>
        <li>Arrive with hair and makeup done</li>
        <li>Bring props that tell your story</li>
      </ol>
    `,
    'New Year': `
      <h2>Ring in the New Year</h2>
      <p>New Year celebrations are about hope, joy, and togetherness. Make yours special.</p>
      
      <h3>New Year Celebration Ideas</h3>
      <ul>
        <li>Intimate rooftop dinner with countdown</li>
        <li>Couple's celebration under the stars</li>
        <li>Small group party with friends</li>
        <li>Family gathering with special dinner</li>
      </ul>
      
      <h3>Planning Your New Year's Eve</h3>
      <p>Book early as New Year slots fill up quickly. Consider what kind of celebration you want – intimate or social – and plan accordingly.</p>
    `,
    "Valentine's Day": `
      <h2>Celebrating Love</h2>
      <p>Valentine's Day is the perfect occasion to express your love. Make it memorable with thoughtful planning.</p>
      
      <h3>Romantic Valentine's Date Ideas</h3>
      <ul>
        <li>Candlelight dinner on the rooftop</li>
        <li>Surprise proposal setup</li>
        <li>Recreate your first date</li>
        <li>Exchange heartfelt letters</li>
      </ul>
      
      <h3>Why Our Venue is Perfect</h3>
      <p>With romantic lighting, private setting, and beautiful decor, Friends Factory Cafe offers the perfect Valentine's Day backdrop.</p>
    `,
    'Wedding': `
      <h2>Intimate Weddings: A Growing Trend</h2>
      <p>Small, intimate weddings allow couples to focus on what matters most – their love and the people closest to them.</p>
      
      <h3>Benefits of Intimate Weddings</h3>
      <ul>
        <li>More meaningful connections with guests</li>
        <li>Lower stress and cost</li>
        <li>More flexibility with venue and timing</li>
        <li>Better photos and memories</li>
      </ul>
      
      <h3>Planning Your Intimate Wedding</h3>
      <p>Choose a venue that reflects your personality, keep the guest list small, and focus on quality over quantity in every detail.</p>
    `,
  };

  // Find matching template or use default
  let content = contentTemplates[category] || contentTemplates['Date Night'];
  
  // Add closing section
  content += `
    <h2>Visit Friends Factory Cafe</h2>
    <p>Located at ${siteConfig.address}, Friends Factory Cafe is Vadodara's premier rooftop celebration venue. We specialize in creating unforgettable moments for couples and families.</p>
    
    <p>Ready to plan your celebration? <strong>Call us at ${siteConfig.phone}</strong> or WhatsApp to book your special experience today.</p>
  `;

  return content;
}
