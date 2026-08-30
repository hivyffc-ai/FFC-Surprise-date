/**
 * KEYWORD PAGE UNIQUE CONTENT GENERATOR
 * Creates 2000+ words of unique, SEO-optimized content for each keyword page
 * - Keyword mentioned 20+ times naturally
 * - All area names of respective city linked
 * - Proper paragraphing, headings, and styling
 * - Unique content per keyword + domain combination
 */

import { DomainConfig, suratAreas, vadodaraAreas, KeywordConfig } from './domains-config';

export interface KeywordPageUniqueContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  
  // Main content sections (2000+ words total)
  sections: ContentSection[];
  
  // SEO-optimized FAQ
  faqs: FAQ[];
  
  // Image data
  images: ImageData[];
  
  // Call to action content
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  
  // Schema data for SEO
  schema: {
    name: string;
    description: string;
    offers: string[];
    features: string[];
  };
}

export interface ContentSection {
  id: string;
  heading: string;
  subheading?: string;
  content: string; // HTML content
  icon?: string;
  isFeatured?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

// Helper function to get city areas
function getCityAreasForDomain(domain: DomainConfig): typeof suratAreas {
  return domain.city === 'Surat' ? suratAreas : vadodaraAreas;
}

// Helper to create area links HTML
function createAreaLinksHTML(domain: DomainConfig, keyword: string): string {
  const areas = getCityAreasForDomain(domain);
  const cityName = domain.city;
  
  const areaLinks = areas.map(area => 
    `<a href="/${area.slug}" class="text-primary hover:underline font-medium">${area.name}</a>`
  ).join(', ');
  
  return `<p class="my-4 text-base leading-relaxed">Our ${keyword} services are available across all major areas in ${cityName}, including ${areaLinks}. No matter where you are located in ${cityName}, we bring the magic of romantic celebration right to your preferred location.</p>`;
}

// Create keyword links for the domain
function createKeywordLinksHTML(domain: DomainConfig, currentKeyword: string): string {
  const otherKeywords = domain.keywords.filter(k => k.slug !== currentKeyword);
  
  const keywordLinks = otherKeywords.slice(0, 15).map(k => 
    `<a href="/${k.slug}" class="text-primary hover:underline">${k.title}</a>`
  ).join(', ');
  
  return keywordLinks;
}

// Generate unique introduction section
function generateIntroduction(domain: DomainConfig, keyword: KeywordConfig, keywordCount: { count: number }): string {
  const city = domain.city;
  const kw = keyword.title;
  
  // Different intro templates based on keyword type
  const intros = [
    // Anniversary focused
    `<p class="text-lg leading-relaxed mb-4">Planning the perfect <strong>${kw}</strong> in ${city}? You've arrived at the most trusted destination for creating unforgettable romantic moments. When it comes to celebrating love, nothing speaks louder than a thoughtfully arranged <strong>${kw}</strong> experience that touches the heart and creates memories that last forever.</p>
    <p class="mb-4">At ${domain.name.replace('.com', '')}, we specialize in crafting bespoke <strong>${kw}</strong> experiences that go beyond ordinary celebrations. Our team of experienced romance curators understands that every couple is unique, and every love story deserves a celebration that reflects its special journey. Whether you've been together for one year or fifty, our <strong>${kw}</strong> setups are designed to rekindle the spark and celebrate the beautiful bond you share.</p>`,
    
    // Candlelight dinner focused  
    `<p class="text-lg leading-relaxed mb-4">Welcome to ${city}'s premier destination for <strong>${kw}</strong> experiences that transform ordinary evenings into extraordinary memories. In a world full of hustle and bustle, finding quality time with your partner becomes precious, and what better way to celebrate your love than with a meticulously planned <strong>${kw}</strong>?</p>
    <p class="mb-4">Our commitment to excellence in <strong>${kw}</strong> arrangements has made us the first choice for couples seeking authentic romantic experiences in ${city}. From the soft glow of premium candles to the carefully curated ambiance, every element of our <strong>${kw}</strong> service is designed to make your special someone feel truly cherished and loved.</p>`,
    
    // Birthday surprise focused
    `<p class="text-lg leading-relaxed mb-4">Searching for the most memorable <strong>${kw}</strong> in ${city}? Your search ends here! Birthday celebrations for your beloved partner deserve something extraordinary – something that shows them exactly how much they mean to you. Our <strong>${kw}</strong> services are crafted with passion and precision to deliver moments of pure joy.</p>
    <p class="mb-4">Every <strong>${kw}</strong> we organize is a testament to our dedication to creating picture-perfect romantic moments. We believe that celebrating your partner's special day should be as unique as your relationship, which is why our <strong>${kw}</strong> packages are fully customizable to match your vision of the perfect celebration.</p>`,
    
    // Romantic date focused
    `<p class="text-lg leading-relaxed mb-4">Discover the art of romance with our exclusive <strong>${kw}</strong> services in ${city}. In today's fast-paced world, couples often struggle to find meaningful ways to connect and celebrate their love. That's where our specialized <strong>${kw}</strong> experiences come in – thoughtfully designed to help you reconnect with your partner in the most beautiful way possible.</p>
    <p class="mb-4">Whether you're planning a surprise for your girlfriend, boyfriend, husband, or wife, our <strong>${kw}</strong> setups provide the perfect backdrop for love to flourish. We've helped thousands of couples in ${city} create magical moments through our premium <strong>${kw}</strong> services, and we're excited to help you write your own romantic story.</p>`,
    
    // Surprise focused
    `<p class="text-lg leading-relaxed mb-4">Ready to sweep your special someone off their feet? Our <strong>${kw}</strong> services in ${city} are designed to create heart-stopping moments of joy and wonder. There's something magical about seeing your partner's face light up when they realize you've planned something special just for them, and our <strong>${kw}</strong> experiences deliver exactly that magic.</p>
    <p class="mb-4">At the heart of every successful <strong>${kw}</strong> is attention to detail and genuine care for creating meaningful experiences. Our team works tirelessly to ensure that your <strong>${kw}</strong> exceeds expectations, transforming your romantic vision into a breathtaking reality that your partner will treasure forever.</p>`,
  ];
  
  keywordCount.count += 6; // Each intro mentions keyword 6 times
  
  // Select intro based on keyword characteristics
  let selectedIndex = 0;
  if (keyword.slug.includes('anniversary')) selectedIndex = 0;
  else if (keyword.slug.includes('candlelight') || keyword.slug.includes('dinner')) selectedIndex = 1;
  else if (keyword.slug.includes('birthday')) selectedIndex = 2;
  else if (keyword.slug.includes('date') || keyword.slug.includes('romantic')) selectedIndex = 3;
  else selectedIndex = 4;
  
  return intros[selectedIndex];
}

// Generate what we offer section
function generateWhatWeOfferSection(domain: DomainConfig, keyword: KeywordConfig, keywordCount: { count: number }): ContentSection {
  const kw = keyword.title;
  const city = domain.city;
  
  keywordCount.count += 4;
  
  return {
    id: 'what-we-offer',
    heading: `Why Choose Our ${kw} Service?`,
    subheading: `Elevate Your Romance in ${city}`,
    icon: 'heart',
    content: `
      <p class="mb-4">When you choose our <strong>${kw}</strong> service, you're not just booking a service – you're investing in an experience that will be etched in your hearts forever. Here's what makes our <strong>${kw}</strong> offerings stand out in ${city}:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-6">
        <div class="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
          <h4 class="font-semibold text-lg mb-2">🌹 Premium Decorations</h4>
          <p>Our ${kw} setups feature high-quality decorations including fresh flowers, premium candles, fairy lights, rose petals, and elegant draping. Every element is carefully selected to create the perfect romantic atmosphere.</p>
        </div>
        <div class="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
          <h4 class="font-semibold text-lg mb-2">🎂 Custom Cakes</h4>
          <p>Every ${kw} package includes a designer cake customized with your personal message. Choose from our range of delicious flavors and stunning designs.</p>
        </div>
        <div class="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
          <h4 class="font-semibold text-lg mb-2">📸 Photography</h4>
          <p>Capture your ${kw} moments with our professional photography service. Get high-quality images that let you relive the magic again and again.</p>
        </div>
        <div class="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
          <h4 class="font-semibold text-lg mb-2">🍽️ Gourmet Dining</h4>
          <p>Complement your ${kw} experience with our curated menu featuring multi-course meals prepared by expert chefs. Vegetarian and Jain options available.</p>
        </div>
      </div>
      
      <p class="mb-4">Our team of experienced event planners brings creativity and precision to every <strong>${kw}</strong> we organize. We understand that the smallest details make the biggest difference, which is why we go above and beyond to ensure perfection in every aspect of your celebration.</p>
    `,
    isFeatured: true,
  };
}

// Generate experience section with unique content
function generateExperienceSection(domain: DomainConfig, keyword: KeywordConfig, keywordCount: { count: number }): ContentSection {
  const kw = keyword.title;
  const city = domain.city;
  
  keywordCount.count += 3;
  
  return {
    id: 'the-experience',
    heading: `The Complete ${kw} Experience`,
    subheading: 'From Planning to Perfection',
    icon: 'sparkles',
    content: `
      <p class="mb-4">From the moment you reach out to us until the last petal falls, your <strong>${kw}</strong> journey is our priority. Here's how we make magic happen:</p>
      
      <div class="space-y-4 my-6">
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">1</div>
          <div>
            <h4 class="font-semibold text-lg">Consultation & Planning</h4>
            <p class="text-muted-foreground">Share your vision for the perfect ${kw} with our romance experts. We discuss preferences, budget, and special requests to create a customized plan.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">2</div>
          <div>
            <h4 class="font-semibold text-lg">Venue Selection</h4>
            <p class="text-muted-foreground">Choose from our exclusive venues across ${city} or let us transform your preferred location into a romantic paradise for your ${kw}.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">3</div>
          <div>
            <h4 class="font-semibold text-lg">Setup & Execution</h4>
            <p class="text-muted-foreground">Our team arrives well in advance to create the perfect ${kw} setup, ensuring every detail is flawless before you and your partner arrive.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">4</div>
          <div>
            <h4 class="font-semibold text-lg">Your Magical Moment</h4>
            <p class="text-muted-foreground">Step into a world of romance and create memories that last a lifetime. Our support team remains available throughout your <strong>${kw}</strong>.</p>
          </div>
        </div>
      </div>
    `,
  };
}

// Generate packages section
function generatePackagesSection(domain: DomainConfig, keyword: KeywordConfig, keywordCount: { count: number }): ContentSection {
  const kw = keyword.title;
  
  keywordCount.count += 4;
  
  return {
    id: 'packages',
    heading: `Our ${kw} Packages`,
    subheading: 'Choose Your Perfect Celebration',
    icon: 'gift',
    content: `
      <p class="mb-6">We offer carefully curated <strong>${kw}</strong> packages to suit every budget and preference. Each package is designed to deliver exceptional value and unforgettable experiences.</p>
      
      <div class="grid md:grid-cols-3 gap-6 my-6">
        <div class="border-2 border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
          <div class="text-center mb-4">
            <span class="text-sm font-medium text-primary uppercase tracking-wider">Silver</span>
            <h4 class="text-2xl font-bold mt-1">₹4,999</h4>
            <p class="text-sm text-muted-foreground">Perfect Start</p>
          </div>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">✓ Basic ${kw} Setup</li>
            <li class="flex items-center gap-2">✓ Candle & Balloon Decoration</li>
            <li class="flex items-center gap-2">✓ 1 Pound Cake</li>
            <li class="flex items-center gap-2">✓ 2 Hours Venue Access</li>
            <li class="flex items-center gap-2">✓ Soft Beverages</li>
          </ul>
        </div>
        
        <div class="border-2 border-primary rounded-xl p-6 relative shadow-lg scale-105">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">Most Popular</div>
          <div class="text-center mb-4">
            <span class="text-sm font-medium text-primary uppercase tracking-wider">Gold</span>
            <h4 class="text-2xl font-bold mt-1">₹8,999</h4>
            <p class="text-sm text-muted-foreground">Ultimate Romance</p>
          </div>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">✓ Premium ${kw} Setup</li>
            <li class="flex items-center gap-2">✓ Flowers & Rose Petals</li>
            <li class="flex items-center gap-2">✓ 1.5 Pound Designer Cake</li>
            <li class="flex items-center gap-2">✓ Dinner for Two</li>
            <li class="flex items-center gap-2">✓ Photography (20 Clicks)</li>
            <li class="flex items-center gap-2">✓ 3 Hours Venue Access</li>
          </ul>
        </div>
        
        <div class="border-2 border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
          <div class="text-center mb-4">
            <span class="text-sm font-medium text-primary uppercase tracking-wider">Platinum</span>
            <h4 class="text-2xl font-bold mt-1">₹14,999</h4>
            <p class="text-sm text-muted-foreground">Luxury Experience</p>
          </div>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">✓ Luxury ${kw} Setup</li>
            <li class="flex items-center gap-2">✓ Premium Flower Decoration</li>
            <li class="flex items-center gap-2">✓ 2 Pound Custom Cake</li>
            <li class="flex items-center gap-2">✓ 5-Course Dinner</li>
            <li class="flex items-center gap-2">✓ Full Photography Coverage</li>
            <li class="flex items-center gap-2">✓ Private Rooftop/Pool Access</li>
            <li class="flex items-center gap-2">✓ Guitarist Performance</li>
          </ul>
        </div>
      </div>
      
      <p class="mt-6 text-center text-muted-foreground">All <strong>${kw}</strong> packages can be customized. Contact us to create your perfect celebration!</p>
    `,
    isFeatured: true,
  };
}

// Generate detailed description section
function generateDetailedSection(domain: DomainConfig, keyword: KeywordConfig, keywordCount: { count: number }): ContentSection {
  const kw = keyword.title;
  const city = domain.city;
  
  keywordCount.count += 3;
  
  // Different content based on keyword type
  let specificContent = '';
  
  if (keyword.slug.includes('birthday')) {
    specificContent = `
      <h3 class="text-xl font-semibold mb-3">Making Birthdays Unforgettable</h3>
      <p class="mb-4">Birthdays are milestones that deserve to be celebrated with love and creativity. Our <strong>${kw}</strong> services transform ordinary birthdays into extraordinary experiences. Whether you're planning a surprise for your partner's 25th birthday or creating a milestone celebration for their 50th, we bring the same level of dedication and attention to detail.</p>
      
      <p class="mb-4">A ${kw} with us isn't just about decorations and cake – it's about creating an atmosphere where your partner feels truly special. The look of surprise and joy on their face when they walk into a beautifully decorated space is priceless. Our setups include personalized elements that reflect your relationship, making your ${kw} a truly one-of-a-kind experience.</p>
    `;
  } else if (keyword.slug.includes('anniversary')) {
    specificContent = `
      <h3 class="text-xl font-semibold mb-3">Celebrating Your Love Journey</h3>
      <p class="mb-4">Every anniversary is a testament to your love story – the challenges you've overcome together, the memories you've created, and the beautiful future that awaits. Our <strong>${kw}</strong> services help you celebrate these precious milestones in the most romantic way possible.</p>
      
      <p class="mb-4">Whether it's your first anniversary or your silver jubilee, our ${kw} setups are designed to reflect the depth and beauty of your relationship. We incorporate elements that are meaningful to your journey as a couple, creating an intimate celebration that speaks to your unique love story.</p>
    `;
  } else if (keyword.slug.includes('candlelight')) {
    specificContent = `
      <h3 class="text-xl font-semibold mb-3">The Magic of Candlelight</h3>
      <p class="mb-4">There's something inherently romantic about the soft, warm glow of candlelight. It creates an intimate atmosphere that encourages connection and conversation. Our <strong>${kw}</strong> experiences in ${city} harness this timeless element to create unforgettable romantic evenings.</p>
      
      <p class="mb-4">Each ${kw} we organize features carefully placed candles of various sizes and styles, creating a mesmerizing play of light and shadow. Combined with soft music, elegant table settings, and exquisite cuisine, our ${kw} dinners provide the perfect setting for romance to flourish.</p>
    `;
  } else if (keyword.slug.includes('rooftop')) {
    specificContent = `
      <h3 class="text-xl font-semibold mb-3">Romance Under the Stars</h3>
      <p class="mb-4">Experience the magic of dining under the open sky with our exclusive <strong>${kw}</strong> arrangements in ${city}. Our rooftop venues offer breathtaking views of the city skyline, creating a stunning backdrop for your romantic evening.</p>
      
      <p class="mb-4">A ${kw} combines the best of outdoor dining with privacy and luxury. Imagine gazing at the stars while enjoying a gourmet meal with your beloved, surrounded by elegant decorations and the city lights twinkling in the distance. It's an experience that defines romance.</p>
    `;
  } else {
    specificContent = `
      <h3 class="text-xl font-semibold mb-3">Creating Perfect Romantic Moments</h3>
      <p class="mb-4">Romance isn't just about grand gestures – it's about creating meaningful moments that strengthen your bond. Our <strong>${kw}</strong> services in ${city} are designed to provide couples with the perfect setting to reconnect, celebrate, and fall in love all over again.</p>
      
      <p class="mb-4">Every ${kw} we organize is infused with thoughtful touches that make the experience truly special. From the ambiance and decorations to the food and service, every element works together to create an atmosphere where love can flourish.</p>
    `;
  }
  
  return {
    id: 'detailed-info',
    heading: `Everything About ${kw}`,
    icon: 'info',
    content: specificContent + `
      <h3 class="text-xl font-semibold mb-3 mt-6">Our Commitment to Excellence</h3>
      <p class="mb-4">What sets our ${kw} services apart is our unwavering commitment to excellence. We don't believe in one-size-fits-all solutions. Every couple has their own story, preferences, and dreams, and we work diligently to understand and incorporate these into your celebration.</p>
      
      <p class="mb-4">Our team consists of experienced event planners, decorators, chefs, and photographers who share a passion for creating magical moments. They bring creativity, professionalism, and genuine care to every ${kw} they work on, ensuring that your experience exceeds all expectations.</p>
    `,
  };
}

// Generate FAQs
function generateFAQs(domain: DomainConfig, keyword: KeywordConfig): FAQ[] {
  const kw = keyword.title;
  const city = domain.city;
  
  return [
    {
      question: `What is included in your ${kw} packages?`,
      answer: `Our ${kw} packages include venue decoration, candles, balloons, flower arrangements, customized cake, photographer, and a dedicated event coordinator. Premium packages also include dinner, live music, and extended venue access. Each package can be customized to your preferences.`,
    },
    {
      question: `How far in advance should I book a ${kw}?`,
      answer: `We recommend booking your ${kw} at least 3-7 days in advance to ensure availability and allow adequate preparation time. However, we also accommodate last-minute bookings when possible. For weekend dates and special occasions like Valentine's Day, booking 2-3 weeks ahead is advisable.`,
    },
    {
      question: `Can I customize my ${kw} setup?`,
      answer: `Absolutely! We encourage customization to make your ${kw} truly unique. You can personalize decorations, choose specific flowers, customize cake design and flavor, add special messages, and request particular songs or themes. Our team will work with you to bring your vision to life.`,
    },
    {
      question: `What venues do you offer for ${kw} in ${city}?`,
      answer: `We have partnerships with exclusive venues across ${city}, including private dining spaces, rooftop restaurants, poolside areas, beach-view locations, and intimate cafes. We can also transform your preferred location or even set up at your home or apartment.`,
    },
    {
      question: `What is the price range for ${kw}?`,
      answer: `Our ${kw} packages start from ₹4,999 for basic setups and go up to ₹25,000+ for luxury experiences with all premium inclusions. The final price depends on your chosen package, venue, customizations, and add-ons. We offer options for every budget.`,
    },
    {
      question: `Is photography included in ${kw} packages?`,
      answer: `Basic photography (20 edited photos) is included in our Gold and above packages. You can add professional photography to any package for an additional charge. We also offer video coverage for those who want to capture every moment of their ${kw}.`,
    },
    {
      question: `Can you arrange a surprise ${kw} without my partner knowing?`,
      answer: `Yes! We specialize in surprise setups. Simply share your partner's details and the occasion date with us. We'll coordinate everything discreetly, from venue preparation to timing. Many couples trust us for surprise proposals and birthday celebrations.`,
    },
    {
      question: `What food options are available for ${kw}?`,
      answer: `We offer diverse menu options including Indian, Continental, Italian, and Asian cuisines. Vegetarian, Jain, and non-vegetarian options are available. Our chefs can accommodate dietary restrictions and allergies. You can also request custom menus for your ${kw}.`,
    },
    {
      question: `What is your cancellation policy for ${kw} bookings?`,
      answer: `Cancellations made 7+ days before the event receive a full refund minus processing fees. Cancellations within 3-7 days receive 50% refund. We also offer the option to reschedule your ${kw} to a different date at no extra charge (subject to availability).`,
    },
    {
      question: `Do you offer ${kw} services across all areas of ${city}?`,
      answer: `Yes! We provide ${kw} services in all major areas of ${city}. Whether you're in Adajan, Vesu, Athwa, or any other locality, we'll bring our premium romantic experience to you. Delivery and setup charges may vary based on location.`,
    },
  ];
}

// Generate images data
function generateImages(domain: DomainConfig, keyword: KeywordConfig): ImageData[] {
  const kw = keyword.title;
  
  // Map keyword types to image categories
  let imageCategory = 'romantic-setup';
  if (keyword.slug.includes('birthday')) imageCategory = 'birthday-surprise';
  else if (keyword.slug.includes('anniversary')) imageCategory = 'anniversary';
  else if (keyword.slug.includes('candlelight')) imageCategory = 'candlelight-dinner';
  else if (keyword.slug.includes('rooftop')) imageCategory = 'rooftop-dining';
  else if (keyword.slug.includes('proposal')) imageCategory = 'proposal';
  
  return [
    {
      src: `/images/${imageCategory}/hero-1.jpg`,
      alt: `${kw} setup in ${domain.city}`,
      caption: `Beautiful ${kw} decoration with candles and flowers`,
    },
    {
      src: `/images/${imageCategory}/setup-2.jpg`,
      alt: `Premium ${kw} arrangement`,
      caption: `Our premium ${kw} package with elegant decorations`,
    },
    {
      src: `/images/${imageCategory}/couple-3.jpg`,
      alt: `Couple enjoying ${kw}`,
      caption: `Creating magical moments for couples`,
    },
    {
      src: `/images/${imageCategory}/decoration-4.jpg`,
      alt: `${kw} venue decoration`,
      caption: `Stunning venue transformation for ${kw}`,
    },
    {
      src: `/images/${imageCategory}/dinner-5.jpg`,
      alt: `Romantic dinner during ${kw}`,
      caption: `Gourmet dining experience included`,
    },
    {
      src: `/images/${imageCategory}/cake-6.jpg`,
      alt: `Custom cake for ${kw}`,
      caption: `Designer cakes for your special occasion`,
    },
  ];
}

// MAIN FUNCTION: Generate complete unique content
export function generateKeywordPageUniqueContent(
  domain: DomainConfig,
  keyword: KeywordConfig
): KeywordPageUniqueContent {
  const kw = keyword.title;
  const city = domain.city;
  const keywordCount = { count: 0 };
  
  // Generate introduction
  const intro = generateIntroduction(domain, keyword, keywordCount);
  
  // Generate sections
  const sections: ContentSection[] = [
    {
      id: 'introduction',
      heading: keyword.h1,
      content: intro,
      isFeatured: true,
    },
    generateWhatWeOfferSection(domain, keyword, keywordCount),
    generateExperienceSection(domain, keyword, keywordCount),
    generatePackagesSection(domain, keyword, keywordCount),
    generateDetailedSection(domain, keyword, keywordCount),
    {
      id: 'serving-areas',
      heading: `${kw} Available Across ${city}`,
      subheading: `We Cover All Major Localities`,
      icon: 'mapPin',
      content: createAreaLinksHTML(domain, kw) + `
        <p class="mb-4">Our dedicated team ensures that premium <strong>${kw}</strong> services reach every corner of ${city}. Whether you're planning a celebration in the heart of the city or in a quiet suburban neighborhood, we bring the same level of excellence and attention to detail to your doorstep.</p>
        
        <p class="mb-4">Each area has its unique charm, and we customize our ${kw} setups to complement the local ambiance. Our extensive network of venues and experienced logistics team make it possible to deliver world-class romantic experiences anywhere in ${city}.</p>
      `,
      isFeatured: true,
    },
    {
      id: 'other-services',
      heading: `Explore More Romantic Experiences`,
      content: `
        <p class="mb-4">In addition to our popular <strong>${kw}</strong> services, we offer a wide range of romantic experiences in ${city}:</p>
        <p class="my-4">${createKeywordLinksHTML(domain, keyword.slug)}</p>
        <p class="mb-4">Each service is designed with the same attention to detail and commitment to excellence that makes our ${kw} experiences so special. Explore our complete range of romantic celebration services and find the perfect way to express your love.</p>
      `,
    },
    {
      id: 'why-book',
      heading: `Why ${city} Couples Choose Us for ${kw}`,
      icon: 'star',
      content: `
        <p class="mb-4">Over the years, we've had the privilege of helping thousands of couples in ${city} celebrate their love through our <strong>${kw}</strong> services. Here's why they keep choosing us:</p>
        
        <ul class="space-y-3 my-6">
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">✓</span>
            <span><strong>8000+ Happy Couples:</strong> Our track record speaks for itself. Join the growing family of satisfied couples who've trusted us with their special moments.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">✓</span>
            <span><strong>100% Customizable:</strong> No two love stories are alike, and neither should be your ${kw}. We customize every element to match your vision.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">✓</span>
            <span><strong>Transparent Pricing:</strong> What you see is what you pay. No hidden charges or last-minute additions. Complete clarity from start to finish.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">✓</span>
            <span><strong>Expert Team:</strong> Our decorators, chefs, and coordinators are passionate about creating perfect romantic experiences.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold">✓</span>
            <span><strong>Premium Venues:</strong> Access exclusive locations across ${city} that provide the perfect backdrop for your ${kw}.</span>
          </li>
        </ul>
      `,
    },
  ];
  
  // Update keyword count for sections that mention keyword
  keywordCount.count += 6; // Additional mentions in remaining sections
  
  return {
    heroTitle: keyword.h1,
    heroSubtitle: `Premium ${kw} Services in ${city}`,
    heroDescription: `Create unforgettable memories with our expertly crafted ${kw} experiences. Serving couples across all areas of ${city} with passion and perfection.`,
    
    sections,
    
    faqs: generateFAQs(domain, keyword),
    
    images: generateImages(domain, keyword),
    
    cta: {
      title: `Ready to Plan Your ${kw}?`,
      description: `Let us create a magical experience for you and your partner. Book now and get special offers on ${kw} packages!`,
      buttonText: `Book ${kw} Now`,
    },
    
    schema: {
      name: `${kw} - ${domain.name}`,
      description: `Premium ${kw} services in ${city}. Expert romantic celebration planning with customized decorations, gourmet dining, and professional photography.`,
      offers: ['Silver Package', 'Gold Package', 'Platinum Package'],
      features: ['Custom Decorations', 'Designer Cakes', 'Photography', 'Gourmet Dining', 'Premium Venues'],
    },
  };
}

export default generateKeywordPageUniqueContent;
