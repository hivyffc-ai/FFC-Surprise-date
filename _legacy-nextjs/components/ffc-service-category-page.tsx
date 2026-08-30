'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, Heart, Gift, Clock, MapPin, Sparkles, Camera, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact, birthdayHeroImages } from '@/components/ffc-gallery';
import { ServiceCategory, packages, siteConfig, formatPrice } from '@/lib/ffc-config';
import { generateExpandedContent, generateFAQContent } from '@/lib/seo-content-engine';
import { generateBreadcrumbSchema, buildServiceBreadcrumbs } from '@/lib/schema-generator';

interface ServiceCategoryPageProps {
  service: ServiceCategory;
}

// Unique content for each service category
const serviceCategoryContent: Record<string, {
  heroSubtitle: string;
  introduction: string;
  whyChooseUs: { title: string; description: string; icon: string }[];
  highlights: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  testimonial: { name: string; text: string; occasion: string };
  closingText: string;
}> = {
  'birthday-surprise': {
    heroSubtitle: "Transform birthdays into magical celebrations with stunning decorations, personalized setups, and unforgettable memories under the stars at Vadodara's most romantic rooftop venue.",
    introduction: "At Friends Factory Cafe, we believe every birthday deserves to be extraordinary. Our birthday surprise packages are designed to create those jaw-dropping moments when your loved one walks in to find a beautifully decorated private rooftop space, complete with balloons, flowers, fairy lights, and their favorite cake. Whether you're planning a surprise for your boyfriend, girlfriend, husband, or wife, we handle every detail so you can focus on making memories.",
    whyChooseUs: [
      { title: "100% Private Rooftop", description: "Exclusive celebration space just for you two - no other guests, complete privacy", icon: "🏠" },
      { title: "Stunning Decorations", description: "Balloon arches, flower arrangements, fairy lights & personalized photo frames", icon: "🎈" },
      { title: "Complimentary Cake", description: "Delicious celebration cake included in all our birthday packages", icon: "🎂" },
      { title: "Flexible Timing", description: "Celebrate anytime - we even offer midnight birthday surprises at 12 AM", icon: "🌙" }
    ],
    highlights: [
      "Private rooftop venue with stunning city views",
      "Customizable balloon & flower decorations",
      "Complimentary birthday cake with personalized message",
      "Romantic candlelight ambiance",
      "Soft background music of your choice",
      "3 hours of exclusive celebration time",
      "Photo opportunities with beautiful backdrops",
      "Welcome drinks & delicious snacks included"
    ],
    process: [
      { step: "1", title: "Choose Your Package", description: "Browse our 8 unique birthday surprise setups and select the one that matches your vision." },
      { step: "2", title: "Book Your Slot", description: "Reserve your preferred date and time via WhatsApp or call. We're available for same-day bookings too!" },
      { step: "3", title: "Share Details", description: "Tell us about any special requests - favorite colors, dietary preferences, or personalization ideas." },
      { step: "4", title: "Surprise Time!", description: "Bring your loved one and watch their face light up as they discover their magical birthday setup." }
    ],
    faqs: [
      { question: "Can I book a midnight birthday surprise?", answer: "Absolutely! We specialize in midnight birthday surprises. Book the 11 PM - 2 AM slot and celebrate as the clock strikes 12. We'll have everything perfectly set up for the big reveal." },
      { question: "Is the birthday cake included?", answer: "Yes! All our birthday packages include a complimentary celebration cake. You can also upgrade to a premium cake or bring your own custom cake if you prefer." },
      { question: "Can I customize the decorations?", answer: "Of course! While each package comes with a beautiful standard setup, we can customize colors, add extra balloons, include photos, or create themed decorations based on your requirements." },
      { question: "How far in advance should I book?", answer: "We recommend booking at least 2-3 days in advance for weekends. However, we do accommodate last-minute bookings based on availability - just give us a call!" },
      { question: "Can I bring additional guests?", answer: "Our setups are designed for couples (2 people) to maintain the intimate, romantic atmosphere. For group celebrations, please contact us for special arrangements." }
    ],
    testimonial: { name: "Priya M.", text: "Planned my husband's 30th birthday here and it was PERFECT! The decorations were stunning, the rooftop view was amazing, and the staff made us feel so special. He was completely surprised and we have the most beautiful photos. Highly recommend!", occasion: "Husband's 30th Birthday" },
    closingText: "Don't let another birthday pass by with just a simple dinner. Create a celebration that will be remembered forever. Our team at Friends Factory Cafe is ready to help you plan the perfect birthday surprise in Vadodara."
  },
  'anniversary-celebration': {
    heroSubtitle: "Celebrate your love story with an elegant anniversary dinner featuring romantic decorations, candlelight ambiance, and intimate moments at our exclusive rooftop venue.",
    introduction: "Every year of love deserves to be celebrated in style. At Friends Factory Cafe, we create anniversary celebrations that honor your journey together. From your first anniversary to your silver jubilee, our romantic rooftop venue provides the perfect backdrop for rekindling romance and creating new memories. Let us help you celebrate the love that grows stronger with each passing year.",
    whyChooseUs: [
      { title: "Romantic Ambiance", description: "Candlelit tables, rose petals, and soft music for the perfect romantic evening", icon: "🕯️" },
      { title: "Elegant Decorations", description: "Customized setups with flowers, fairy lights & anniversary-themed decor", icon: "💐" },
      { title: "Private Celebration", description: "Exclusive space for just the two of you - relive your special moments in privacy", icon: "💑" },
      { title: "Special Touches", description: "Photo frames with your memories, personalized messages & surprise elements", icon: "✨" }
    ],
    highlights: [
      "Exclusive rooftop venue with panoramic views",
      "Candlelight dinner with gourmet cuisine",
      "Rose petal pathway & table decoration",
      "Customized anniversary decorations",
      "Complimentary anniversary cake",
      "Champagne toast (non-alcoholic available)",
      "Personalized photo frame with your pictures",
      "3 hours of private celebration time"
    ],
    process: [
      { step: "1", title: "Select Your Experience", description: "Choose from our romantic anniversary packages - from intimate dinners to grand celebrations." },
      { step: "2", title: "Book Your Date", description: "Reserve your special anniversary date. Early booking recommended for milestone anniversaries." },
      { step: "3", title: "Personalize It", description: "Share your love story - we can incorporate your photos, favorite songs, and special memories." },
      { step: "4", title: "Celebrate Love", description: "Arrive and be swept away by the romantic ambiance we've created just for you." }
    ],
    faqs: [
      { question: "Can you arrange a surprise anniversary celebration?", answer: "Yes! We love helping plan surprise anniversaries. Coordinate with us via WhatsApp, and we'll ensure everything is perfect before your partner arrives. We can even arrange for flowers or a gift to be presented." },
      { question: "Do you offer special packages for milestone anniversaries?", answer: "Absolutely! We have enhanced packages for 1st, 5th, 10th, 25th, and 50th anniversaries with extra special decorations and premium inclusions. Let us know your milestone and we'll make it extra memorable." },
      { question: "Can we include our wedding photos in the decoration?", answer: "Yes! Send us your favorite photos via WhatsApp and we'll create a beautiful display with photo frames and a memory wall as part of your anniversary setup." },
      { question: "Is dinner included in the packages?", answer: "All our packages include welcome drinks and snacks. Full dinner packages are available as add-ons with a curated menu for couples." },
      { question: "Can you arrange for live music or a musician?", answer: "While we provide romantic background music, live musicians can be arranged on special request with advance booking. Contact us for availability and pricing." }
    ],
    testimonial: { name: "Rohit & Sneha", text: "We celebrated our 5th wedding anniversary here and it was magical! The rooftop was decorated exactly like our wedding mandap colors. They even played our wedding song. We felt like newlyweds again. Thank you for an unforgettable evening!", occasion: "5th Wedding Anniversary" },
    closingText: "Your love story is unique, and your anniversary celebration should be too. Let Friends Factory Cafe create an evening that celebrates everything you've built together and everything that lies ahead."
  },
  'proposal': {
    heroSubtitle: "Create the perfect 'Yes!' moment with our stunning proposal setups. Private rooftop venue, romantic decorations, and everything you need to pop the question in style.",
    introduction: "The moment you propose will be remembered forever. At Friends Factory Cafe, we understand the importance of getting it perfect. Our private rooftop venue in Vadodara offers the most romantic setting for your proposal - with twinkling city lights as your backdrop, elegant decorations, and complete privacy. We've helped hundreds of couples begin their forever, and we'd be honored to be part of your love story.",
    whyChooseUs: [
      { title: "Say Yes Settings", description: "Picture-perfect proposal setups with 'Will You Marry Me' signs, ring displays & more", icon: "💍" },
      { title: "Complete Privacy", description: "Private rooftop space ensures your intimate moment stays just between you two", icon: "🔒" },
      { title: "Photography Ready", description: "Stunning backdrops perfect for capturing the moment she says yes", icon: "📸" },
      { title: "Secret Planning", description: "We coordinate secretly so your partner has no idea what's coming", icon: "🤫" }
    ],
    highlights: [
      "Private rooftop with stunning city views",
      "'Will You Marry Me' illuminated signs",
      "Pathway lined with rose petals & candles",
      "Heart-shaped balloon arrangements",
      "Ring presentation setup with spotlight",
      "Hidden photographer arrangements available",
      "Champagne celebration after the yes",
      "Celebration dinner to follow"
    ],
    process: [
      { step: "1", title: "Secret Consultation", description: "Contact us via WhatsApp to discuss your vision. We'll keep everything confidential." },
      { step: "2", title: "Plan the Moment", description: "Choose your setup, decorations, and any special elements you want to include." },
      { step: "3", title: "Rehearse if Needed", description: "We can arrange a visit beforehand so you're comfortable with the space and setup." },
      { step: "4", title: "Pop the Question", description: "Bring your partner, get down on one knee, and create your forever memory." }
    ],
    faqs: [
      { question: "Can you help me plan the entire proposal?", answer: "Absolutely! We've planned hundreds of proposals and can guide you through everything - from the perfect time of day to how to get your partner there without suspicion. We're your secret proposal partners!" },
      { question: "Can I arrange for a photographer?", answer: "Yes! You can bring your own photographer who can hide and capture the moment, or we can recommend trusted photographers who specialize in proposal shoots." },
      { question: "What if my partner suspects something?", answer: "We can help create a cover story! Many clients tell their partners they're going for a 'candlelight dinner' or 'friend's birthday'. We'll play along with whatever story you create." },
      { question: "Can family members be hidden nearby?", answer: "Yes! We can arrange for family or friends to be waiting nearby to join the celebration immediately after she says yes. Just let us know your plans in advance." },
      { question: "What if it rains on my proposal day?", answer: "We have backup arrangements including covered areas and glass house setups. Your proposal will be perfect regardless of weather. We also offer free rescheduling if needed." }
    ],
    testimonial: { name: "Karan S.", text: "I was so nervous about proposing but the team at Friends Factory made everything perfect. They helped me plan every detail, set up a stunning rooftop with 'Marry Me' lights, and even suggested the perfect timing. She said YES and we now have the most amazing photos and memories. Forever grateful!", occasion: "Marriage Proposal" },
    closingText: "She's been waiting for this moment. Make it perfect. Let Friends Factory Cafe help you create a proposal story that you'll both tell for the rest of your lives."
  },
  'candlelight-dinner': {
    heroSubtitle: "Experience the most romantic dining in Vadodara - private rooftop tables, flickering candles, gourmet food, and an ambiance that makes every moment magical.",
    introduction: "Some moments call for more than just dinner - they call for an experience. Our candlelight dinners at Friends Factory Cafe transport you to a world where only two people exist - you and your partner. Under the stars, surrounded by candles and soft music, with the city lights twinkling below, enjoy an evening of romance, connection, and culinary delight. This is not just dinner; this is a memory in the making.",
    whyChooseUs: [
      { title: "Rooftop Under Stars", description: "Dine al fresco on our beautiful rooftop with panoramic Vadodara views", icon: "🌟" },
      { title: "Intimate Setting", description: "Private table setup with candles, flowers, and romantic music", icon: "🕯️" },
      { title: "Delicious Cuisine", description: "Carefully curated menu featuring delicious appetizers, mains & desserts", icon: "🍽️" },
      { title: "Perfect for Any Occasion", description: "Date nights, special celebrations, or just because you're in love", icon: "💕" }
    ],
    highlights: [
      "Private candlelit table on rooftop",
      "Welcome drink on arrival",
      "Multi-course dinner menu",
      "Fresh flower table arrangement",
      "Soft romantic background music",
      "City skyline views",
      "Attentive but unobtrusive service",
      "Complimentary dessert for couples"
    ],
    process: [
      { step: "1", title: "Choose Your Evening", description: "Select from our candlelight dinner packages based on your preferences and occasion." },
      { step: "2", title: "Reserve Your Table", description: "Book your preferred date and time. Weekend evenings fill up fast!" },
      { step: "3", title: "Customize Your Experience", description: "Let us know dietary preferences, any allergies, or special requests." },
      { step: "4", title: "Arrive & Unwind", description: "Simply arrive, and let us take care of everything while you focus on each other." }
    ],
    faqs: [
      { question: "What's included in a candlelight dinner package?", answer: "Our packages include private table setup with candles and flowers, welcome drinks, a multi-course meal (starters, main course, dessert), soft background music, and 2-3 hours of exclusive dining time." },
      { question: "Is the rooftop open-air or covered?", answer: "We have both options! Our main rooftop is open-air for stargazing, and we also have a glass house option for climate-controlled comfort. Both are equally romantic." },
      { question: "Can I customize the menu?", answer: "Absolutely! While we have a set romantic dinner menu, we can accommodate vegetarian, Jain, vegan preferences, and any allergies. Special menu requests can be arranged with advance notice." },
      { question: "What should we wear?", answer: "We suggest smart casual to semi-formal attire. Many couples enjoy dressing up for the occasion - it makes it feel even more special!" },
      { question: "Can we stay longer than the package time?", answer: "Yes! If the slot after yours is available, you're welcome to extend your dinner. Just let us know and we'll accommodate if possible." }
    ],
    testimonial: { name: "Meera & Arjun", text: "The most romantic dinner we've ever had! The rooftop setting with candles everywhere, the amazing food, the perfect music - it felt like we were in a movie. The staff was attentive but gave us complete privacy. We've already booked our next visit!", occasion: "Date Night" },
    closingText: "Sometimes the most meaningful conversations happen over candlelight. Create space for connection, romance, and unforgettable moments at Friends Factory Cafe."
  },
  'surprise-date': {
    heroSubtitle: "Turn an ordinary day into an extraordinary memory with our surprise date setups. Thoughtfully planned, beautifully executed, absolutely unforgettable.",
    introduction: "The best surprises are the ones that say 'I was thinking about you.' Our surprise date experiences at Friends Factory Cafe are designed to help you show your partner just how much they mean to you. Whether it's a random Tuesday or a special occasion, walking into a beautifully decorated private space creates a moment of pure joy and love. Let us help you be the reason they smile today.",
    whyChooseUs: [
      { title: "Element of Surprise", description: "We help you plan everything secretly - your partner will have no idea", icon: "🎁" },
      { title: "Personalized Touches", description: "Include their favorite things - colors, flowers, music, treats", icon: "💝" },
      { title: "Instagram-Worthy Setup", description: "Beautiful decorations perfect for those couple photos", icon: "📱" },
      { title: "Any Day Magic", description: "Don't wait for special occasions - surprise them just because", icon: "✨" }
    ],
    highlights: [
      "Themed decoration setups",
      "Personalized message displays",
      "Favorite snacks & treats arranged",
      "Music playlist of your choice",
      "Photo-worthy corners & backdrops",
      "Cozy seating arrangements",
      "Fairy lights & romantic ambiance",
      "Complete privacy for just you two"
    ],
    process: [
      { step: "1", title: "Plan Secretly", description: "Contact us via WhatsApp with your surprise idea. We'll keep everything confidential." },
      { step: "2", title: "Personalize", description: "Tell us about your partner - favorite colors, flowers, songs, and special touches you want." },
      { step: "3", title: "Create a Story", description: "We'll help you create a reason to bring them to the venue without spoiling the surprise." },
      { step: "4", title: "Watch the Magic", description: "See their face light up as they discover the beautiful surprise you've planned." }
    ],
    faqs: [
      { question: "How do I get my partner to the venue without them knowing?", answer: "We can help! Common cover stories include 'meeting friends for dinner,' 'quick coffee,' or 'need to pick something up.' We've helped plan hundreds of surprises and have plenty of ideas!" },
      { question: "Can I be there when they arrive or should I surprise them inside?", answer: "Both options work! You can either arrive together and let them discover the setup, or you can be waiting inside the decorated space when they walk in. Whatever feels more magical to you!" },
      { question: "Can I include their favorite things in the decoration?", answer: "Absolutely! Tell us their favorite colors, flowers, snacks, or even include photos you want displayed. The more personal details you share, the more special we can make it." },
      { question: "Is a surprise date only for special occasions?", answer: "Not at all! In fact, the most touching surprises are often the ones that happen 'just because.' Surprise them on a regular day and make it unforgettable." },
      { question: "What if I want to add gifts or flowers?", answer: "You can bring your own gifts, or we can arrange flowers, chocolates, or other items to be part of the setup. Just let us know what you'd like!" }
    ],
    testimonial: { name: "Rahul K.", text: "My girlfriend had been stressed with work so I wanted to do something special. Friends Factory helped me plan a surprise date on a Wednesday evening. When she saw the decorated rooftop with all her favorite things, she literally cried happy tears. Best decision ever!", occasion: "Just Because Surprise" },
    closingText: "The best relationships are built on thoughtful gestures. Surprise your partner and remind them why you fell in love. Let Friends Factory Cafe help you create a moment they'll never forget."
  },
  'pre-wedding-shoot': {
    heroSubtitle: "Capture your love story in stunning frames at our picture-perfect rooftop and glass house venues. Multiple backdrops, magical lighting, unforgettable photos.",
    introduction: "Your pre-wedding photos tell the story of your journey to forever. At Friends Factory Cafe, we offer couples the most romantic and versatile photoshoot locations in Vadodara. From our fairy-light-adorned rooftop with city views to our elegant glass house with natural light, every corner offers a new backdrop for your love story. Whether you want candlelight romance or golden hour magic, we've got you covered.",
    whyChooseUs: [
      { title: "Multiple Backdrops", description: "Rooftop, glass house, decorative walls - dozens of photo spots in one venue", icon: "🎬" },
      { title: "Magical Lighting", description: "Fairy lights, candles, natural light - perfect lighting for every mood", icon: "💡" },
      { title: "Props Available", description: "Balloons, flowers, frames, signs - creative props for unique shots", icon: "🎈" },
      { title: "Privacy Assured", description: "No crowds, no strangers in background - just you two and your photographer", icon: "🔐" }
    ],
    highlights: [
      "Rooftop venue with city skyline backdrop",
      "Elegant glass house with natural lighting",
      "Fairy light canopy for night shots",
      "Candlelight setup for romantic frames",
      "Floral arrangements & decorative props",
      "Multiple themed corners",
      "3-4 hours of exclusive venue access",
      "Sunset & golden hour timing available"
    ],
    process: [
      { step: "1", title: "Visit & Visualize", description: "Come for a recce with your photographer to plan your shots and angles." },
      { step: "2", title: "Book Your Slot", description: "Reserve your preferred date and time. We offer morning, sunset, and night slots." },
      { step: "3", title: "Coordinate Setup", description: "Tell us your theme and we'll prepare the relevant backdrops and props." },
      { step: "4", title: "Shoot & Shine", description: "Arrive, get into your outfits, and let the camera capture your love." }
    ],
    faqs: [
      { question: "How many hours do we get for the photoshoot?", answer: "Our standard packages include 3-4 hours of exclusive venue access. Extended hours can be arranged based on availability." },
      { question: "Can we use multiple locations within the venue?", answer: "Absolutely! You can use the rooftop, glass house, decorated corners, and any other areas. Most couples use 4-5 different spots for variety in their photos." },
      { question: "Do you provide photography services?", answer: "We provide the venue and setup. You can bring your own photographer. We can also recommend excellent wedding photographers in Vadodara if needed." },
      { question: "Can we do both day and night shots?", answer: "Yes! Book a sunset slot (around 4-7 PM) and you can capture golden hour daylight shots as well as magical fairy-light night photos." },
      { question: "What props and decorations are included?", answer: "We provide fairy lights, candles, basic floral arrangements, photo frames, and some themed props. For specific themes or extensive props, please discuss in advance." },
      { question: "Can we change outfits during the shoot?", answer: "Of course! We have changing areas available. Most couples do 2-3 outfit changes during their session." }
    ],
    testimonial: { name: "Nisha & Vikram", text: "We were worried about finding a good pre-wedding location in Vadodara but Friends Factory exceeded all expectations! The rooftop views, the glass house lighting, the fairy light canopy - our photographer was thrilled with the variety. Our photos look like they were shot at multiple exotic locations!", occasion: "Pre-Wedding Photoshoot" },
    closingText: "Your pre-wedding photos are the beginning of your wedding album. Make them extraordinary. Friends Factory Cafe offers the perfect canvas for your photographer to capture magic."
  },
  'baby-moments': {
    heroSubtitle: "Celebrate life's most precious beginnings - pregnancy announcements, baby showers, and special baby moments with beautiful decorations and intimate settings.",
    introduction: "The journey to parenthood is filled with magical moments worth celebrating. At Friends Factory Cafe, we create beautiful spaces to announce your pregnancy, host your baby shower, or capture stunning maternity photos. Our intimate venue provides the perfect backdrop for these joyful occasions, with customized decorations in your chosen theme and complete privacy for you and your loved ones.",
    whyChooseUs: [
      { title: "Themed Decorations", description: "Blue, pink, neutral themes - we create the perfect baby celebration setup", icon: "🎀" },
      { title: "Intimate Space", description: "Perfect for close family celebrations or couple-only moments", icon: "👨‍👩‍👧" },
      { title: "Photo Opportunities", description: "Beautiful backdrops for pregnancy announcement & maternity photos", icon: "📷" },
      { title: "Customizable", description: "Traditional godh bharai or modern baby shower - we do both", icon: "🌟" }
    ],
    highlights: [
      "Themed balloon & decoration setup",
      "Gender reveal arrangement options",
      "Maternity photoshoot backdrop",
      "Cozy seating for guests",
      "Baby shower games & activities space",
      "Cake & refreshments arrangements",
      "Privacy for intimate celebrations",
      "Beautiful rooftop or glass house venue"
    ],
    process: [
      { step: "1", title: "Choose Your Celebration", description: "Pregnancy announcement, baby shower, godh bharai, or maternity shoot - tell us what you're planning." },
      { step: "2", title: "Select Your Theme", description: "Pick colors, themes, and any specific decoration styles you love." },
      { step: "3", title: "Plan the Details", description: "Number of guests, food preferences, special activities - we'll coordinate everything." },
      { step: "4", title: "Celebrate New Life", description: "Arrive and enjoy your beautifully decorated celebration space." }
    ],
    faqs: [
      { question: "Can we host a gender reveal party?", answer: "Yes! We can set up beautiful gender reveal decorations including balloon pop, confetti cannons, or cake reveals. Just let us know your chosen reveal method and we'll arrange accordingly." },
      { question: "How many guests can attend a baby shower?", answer: "Our spaces comfortably accommodate 10-15 guests for a baby shower. For larger gatherings, please contact us to discuss special arrangements." },
      { question: "Do you offer traditional godh bharai decoration?", answer: "Absolutely! We can create traditional godh bharai setups with appropriate decorations, seating arrangements for rituals, and a blend of traditional and modern elements." },
      { question: "Can we do a maternity photoshoot here?", answer: "Yes! Our venue is perfect for maternity photos. The glass house offers beautiful natural light, and the rooftop provides stunning backdrops. Coordinate with your photographer for timing." },
      { question: "Is food arranged by you?", answer: "We provide snacks and refreshments. For full catering, we can recommend caterers or you can bring your own food. We'll set up the serving area beautifully." }
    ],
    testimonial: { name: "Pooja & Amit", text: "We announced our pregnancy to both families here and it was so special! Friends Factory decorated everything in a beautiful neutral theme since we hadn't found out the gender yet. The joy on our parents' faces, the beautiful setup, the photos - everything was perfect. This place made our announcement unforgettable!", occasion: "Pregnancy Announcement" },
    closingText: "New life is the greatest gift. Celebrate these precious moments in a setting as special as the occasion. Friends Factory Cafe is honored to be part of your growing family's story."
  },
  'valentines-week': {
    heroSubtitle: "Make every day of Valentine's Week 2026 special - from Rose Day to Valentine's Day, celebrate love with romantic experiences crafted just for couples.",
    introduction: "Valentine's Week is the most romantic time of the year, and each day deserves its own celebration. At Friends Factory Cafe, we've created special experiences for every day of Valentine's Week 2026 - from Rose Day (Feb 7) through Valentine's Day (Feb 14). Whether you want to surprise your partner on Propose Day, enjoy a cozy Hug Day dinner, or go all out on Valentine's Day, we have the perfect romantic setup waiting for you.",
    whyChooseUs: [
      { title: "All 7 Days Covered", description: "Special setups for Rose, Propose, Chocolate, Teddy, Promise, Hug, Kiss & Valentine's Day", icon: "💝" },
      { title: "Romantic Themes", description: "Each day features unique themed decorations matching the occasion", icon: "🌹" },
      { title: "Early Bird Offers", description: "Book early for Valentine's Week and get special discounts & upgrades", icon: "🎁" },
      { title: "Limited Slots", description: "Exclusive venue means limited availability - book now to secure your date", icon: "⏰" }
    ],
    highlights: [
      "Rose Day: Rose-themed decorations & fresh roses",
      "Propose Day: Romantic proposal-style setups",
      "Chocolate Day: Sweet treats & chocolate arrangements",
      "Teddy Day: Cute teddy decorations & gifts",
      "Promise Day: Intimate candlelight setting",
      "Hug Day: Cozy, warm ambiance setup",
      "Kiss Day: Private romantic dinner",
      "Valentine's Day: Grand celebration package"
    ],
    process: [
      { step: "1", title: "Choose Your Day(s)", description: "Decide which day(s) of Valentine's Week you want to celebrate together." },
      { step: "2", title: "Book Early", description: "Valentine's Week slots fill up fast! Reserve at least 1-2 weeks in advance." },
      { step: "3", title: "Select Package", description: "Choose from our special Valentine's Week packages with themed decorations." },
      { step: "4", title: "Celebrate Love", description: "Arrive and enjoy a romantic experience designed for the specific day of love." }
    ],
    faqs: [
      { question: "When do Valentine's Week bookings open?", answer: "We start accepting Valentine's Week bookings from January 15th. Early birds get priority slots and special pricing. We highly recommend booking by end of January!" },
      { question: "Are prices higher during Valentine's Week?", answer: "Our Valentine's Week packages are specially curated with extra decorations and inclusions, so there may be a slight premium. However, early bookings get the best rates!" },
      { question: "Can I book multiple days of Valentine's Week?", answer: "Absolutely! Many couples book 2-3 days. We offer special combo packages for multiple bookings. Contact us for multi-day discounts." },
      { question: "What if Valentine's Day falls on a weekday?", answer: "Love doesn't check the calendar! Whether it's a weekday or weekend, we make it equally special. Book the timing that works best for you." },
      { question: "What's included in the Valentine's Day special package?", answer: "Our Valentine's Day package is our most premium offering with elaborate decorations, special dinner menu, roses, champagne toast, complimentary cake, and photographer for couple shots. It's designed to be unforgettable!" }
    ],
    testimonial: { name: "Kavya & Rishi", text: "We celebrated both Rose Day and Valentine's Day at Friends Factory last year and it was incredible! The Rose Day setup was so pretty with roses everywhere, and Valentine's Day was grand with heart balloons, romantic dinner, everything! Already booked for this year!", occasion: "Valentine's Week 2025" },
    closingText: "Valentine's Week 2026 is your chance to show your love in a way they'll never forget. Don't wait until the last minute - the most romantic dates get booked first. Reserve your celebration today!"
  },
  'rooftop-experience': {
    heroSubtitle: "Discover Vadodara's most enchanting rooftop venue - panoramic city views, starlit skies, and magical moments await you at Friends Factory Cafe.",
    introduction: "There's something magical about being on a rooftop. The city lights below, the stars above, and the whole world feeling far away while you're close to the one you love. Our rooftop at Friends Factory Cafe offers exactly this magic - a beautifully designed space where you can dine under the stars, celebrate special moments, and create memories against the stunning Vadodara skyline. Whether it's a romantic dinner, a celebration, or just a special evening out, our rooftop transforms every moment into something extraordinary.",
    whyChooseUs: [
      { title: "Panoramic Views", description: "Stunning 360-degree views of Vadodara's skyline and city lights", icon: "🌃" },
      { title: "Open-Air Magic", description: "Fresh breeze, starlit sky, and romantic ambiance", icon: "🌟" },
      { title: "Exclusive Access", description: "Private rooftop space - no other guests during your booking", icon: "🔐" },
      { title: "Any Occasion", description: "Perfect for dates, dinners, celebrations, proposals & photoshoots", icon: "🎉" }
    ],
    highlights: [
      "Stunning city skyline views",
      "Open-air rooftop under the stars",
      "Fairy lights & romantic ambiance",
      "Comfortable premium seating",
      "Multiple setup options available",
      "Perfect for golden hour & night",
      "360-degree photo opportunities",
      "Weather-backup arrangements"
    ],
    process: [
      { step: "1", title: "Choose Your Experience", description: "Dinner, celebration, photoshoot - tell us what you're planning." },
      { step: "2", title: "Select Your Time", description: "Sunset slots for golden views, night slots for starlit magic." },
      { step: "3", title: "Customize Your Setup", description: "Add decorations, special arrangements, or keep it simple and elegant." },
      { step: "4", title: "Experience the Magic", description: "Arrive and let our rooftop take your breath away." }
    ],
    faqs: [
      { question: "What's special about your rooftop venue?", answer: "Our rooftop offers completely private dining with panoramic Vadodara views. It's designed specifically for couples with romantic lighting, comfortable seating, and beautiful ambiance. Unlike restaurants, you won't share the space with other guests." },
      { question: "What happens if it rains?", answer: "We have covered areas and our glass house as backup options. We also monitor weather closely and will proactively reach out if rescheduling seems wise. Your experience will be magical regardless of weather!" },
      { question: "Is the rooftop too hot in summer?", answer: "We have misting fans and our evening slots (post 6 PM) are quite pleasant even in summer. Plus, there's usually a lovely breeze on the rooftop. For peak summer, we also offer the air-conditioned glass house option." },
      { question: "Can we visit to see the rooftop before booking?", answer: "Absolutely! We encourage couples to visit and see the space. Just call ahead to schedule a visit at a time when we don't have an active booking." },
      { question: "What's included in rooftop experience packages?", answer: "All packages include exclusive rooftop access, basic romantic setup with candles/lights, seating arrangements, background music, and welcome drinks. Decorations, food, and celebrations can be added based on your chosen package." }
    ],
    testimonial: { name: "Divya & Harsh", text: "We've been to many restaurants in Vadodara but nothing compares to the Friends Factory rooftop. Having the entire space to ourselves, the city lights view, the romantic setup - it felt like we were in a completely different world. This is now our go-to place for every special occasion!", occasion: "Monthly Date Night" },
    closingText: "Some moments are meant to be experienced under open skies. Let the stars witness your love story at Friends Factory Cafe's rooftop - Vadodara's most romantic venue for couples."
  }
};

export default function FFCServiceCategoryPage({ service }: ServiceCategoryPageProps) {
  // Hero slider state
  const [heroSlide, setHeroSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const content = serviceCategoryContent[service.slug] || serviceCategoryContent['birthday-surprise'];
  const relatedPackages = packages.slice(0, 4);

  // SEO Content Expansion: 700+ unique words + 10 unique FAQs with schema
  const seoContent = generateExpandedContent(service.name);
  const seoFAQs = generateFAQContent(service.name);

  // Merge: handcrafted FAQs first, then fill to 10 from SEO engine
  const allFAQs = [...content.faqs];
  const existingQuestions = new Set(allFAQs.map(f => f.question.toLowerCase()));
  for (const faq of seoFAQs.faqs) {
    if (allFAQs.length >= 10) break;
    if (!existingQuestions.has(faq.question.toLowerCase())) {
      allFAQs.push(faq);
      existingQuestions.add(faq.question.toLowerCase());
    }
  }

  const faqSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Breadcrumb Schema for AI visibility
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildServiceBreadcrumbs(siteConfig.website, siteConfig.name, service.name, service.slug)
  );

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <main>
      {/* Breadcrumb */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-pink-500">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="text-gray-500 hover:text-pink-500">Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-pink-500 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section — Homepage-style slider with booking form */}
      <section aria-label={`${service.name} - Hero`} className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {birthdayHeroImages.slice(0, 3).map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt={`${service.name} Vadodara - Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {birthdayHeroImages.slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === heroSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {service.emoji} Friends Factory Cafe Vadodara
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                {service.name} in Vadodara
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                {content.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={service.name} 
                  className="bg-white text-pink-500 hover:bg-pink-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form — Desktop */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" pageTitle={service.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form — Above the fold on mobile */}
      <section className="lg:hidden bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm pageTitle={service.name} />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-center text-gray-800">
              Why Choose Friends Factory Cafe for {service.name}?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed text-center mb-12">
              {content.introduction}
            </p>
            
            {/* Why Choose Us Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center p-6 border-pink-100 hover:shadow-lg transition-shadow">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif text-center text-gray-800">
              What's Included in Our {service.name} Packages
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 font-serif text-center text-gray-800">
            How to Book Your {service.name}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {content.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif text-center text-gray-800">
            Our {service.name} Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed to make your {service.name.toLowerCase()} truly special.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPackages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 border-pink-100 overflow-hidden group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors line-clamp-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{pkg.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-pink-500 font-bold">{formatPrice(pkg.price)}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded bg-pink-500 text-white group-hover:bg-pink-600 transition-colors">View <ChevronRight className="h-3 w-3" /></span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white">
                View All 8 Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services - Keywords */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif text-center text-gray-800">
            Explore {service.name} Options
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Find the perfect {service.name.toLowerCase()} experience for your specific needs
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {service.keywords.slice(0, 15).map((keyword) => (
              <Link key={keyword.slug} href={`/${keyword.slug}`}>
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover:bg-pink-50 hover:border-pink-300 cursor-pointer transition-colors"
                >
                  {keyword.title}
                </Badge>
              </Link>
            ))}
          </div>
          
          {service.keywords.length > 15 && (
            <p className="text-center mt-4 text-sm text-gray-500">
              +{service.keywords.length - 15} more options available
            </p>
          )}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 font-serif">
              "{content.testimonial.text}"
            </blockquote>
            <div className="font-bold text-gray-800">{content.testimonial.name}</div>
            <div className="text-pink-500 text-sm">{content.testimonial.occasion}</div>
          </div>
        </div>
      </section>

      {/* SEO Expanded Content — 700+ unique words */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {seoContent.paragraphs.map((section, idx) => (
              <div key={`seo-${idx}`} className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{section.heading}</h3>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif text-center text-gray-800">
            Frequently Asked Questions about {service.name}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {allFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-pink-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section aria-label="Gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif text-center text-gray-800">
            {service.name} Gallery
          </h2>
          <FFCGalleryCompact />
        </div>
      </section>

      {/* Booking Form */}
      <section aria-label="Book Now" className="py-16 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">
                Book Your {service.name} Today
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                {content.closingText}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm">{siteConfig.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <span>Open Daily: 11 AM - 11 PM</span>
                </div>
              </div>
            </div>
            <div>
              <FFCBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaMarkup) }}
      />
      {/* Breadcrumb Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Schema Markup - Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${service.name} in Vadodara`,
            "description": service.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Friends Factory Cafe",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road",
                "addressLocality": "Vadodara",
                "addressRegion": "Gujarat",
                "postalCode": "391101",
                "addressCountry": "IN"
              },
              "telephone": siteConfig.phone,
              "priceRange": "₹₹₹"
            },
            "areaServed": {
              "@type": "City",
              "name": "Vadodara"
            }
          })
        }}
      />
      </main>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
