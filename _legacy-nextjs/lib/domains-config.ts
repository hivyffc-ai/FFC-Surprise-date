// Multi-Domain Configuration for 9 Couple Cafe Websites
// Each domain has unique colors, keywords, and area pages

export interface DomainConfig {
  slug: string;
  domain: string;
  name: string;
  tagline: string;
  city: "surat" | "vadodara";
  phone: string;
  whatsapp: string;
  email: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
    gradientHover: string;
    lightBg: string;
    darkBg: string;
    text: string;
  };
  heroImages: string[];
  keywords: KeywordItem[];
}

export interface KeywordItem {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

// ==================== SURAT AREAS (40) ====================
export const suratAreas = [
  "adajan", "athwa", "athwalines", "vesu", "varachha", "udhana", "piplod", "pal",
  "althan", "katargam", "citylight", "ringroad", "dumas", "sachin", "pandesara",
  "sarthana", "magdalla", "bhimrad", "hazira", "rander", "limbayat", "bhatar",
  "ghoddodroad", "parlepoint", "majuragate", "nanpura", "gopipura", "mahidharpura",
  "salabatpura", "begampura", "laldarwaja", "sagrampura", "navsaribazar", "kosamba",
  "kamrej", "kadodara", "olpad", "sarsana", "kim", "khajod"
];

// ==================== VADODARA AREAS (40) ====================
export const vadodaraAreas = [
  "alkapuri", "akota", "fatehgunj", "sayajigunj", "vasna", "manjalpur", "waghodiaroad",
  "gotri", "sama", "karelibaug", "nizampura", "subhanpura", "ajwaroad", "oldpadraroad",
  "racecourse", "ellorapark", "harni", "tandalja", "bhayli", "sevasi", "chhani",
  "makarpura", "gorwa", "tarsali", "diwalipura", "maneja", "raopura", "mandvi",
  "nyaymandir", "jetalpur", "kalali", "undera", "bil", "karodiya", "dabhoiroad",
  "samasavliroad", "atladra", "tp13", "koyali", "ranoli"
];

// Area display names
export const areaDisplayNames: Record<string, string> = {
  // Surat Areas
  "adajan": "Adajan", "athwa": "Athwa", "athwalines": "Athwalines", "vesu": "Vesu",
  "varachha": "Varachha", "udhana": "Udhana", "piplod": "Piplod", "pal": "Pal",
  "althan": "Althan", "katargam": "Katargam", "citylight": "City Light", "ringroad": "Ring Road",
  "dumas": "Dumas", "sachin": "Sachin", "pandesara": "Pandesara", "sarthana": "Sarthana",
  "magdalla": "Magdalla", "bhimrad": "Bhimrad", "hazira": "Hazira", "rander": "Rander",
  "limbayat": "Limbayat", "bhatar": "Bhatar", "ghoddodroad": "Ghod Dod Road",
  "parlepoint": "Parle Point", "majuragate": "Majura Gate", "nanpura": "Nanpura",
  "gopipura": "Gopipura", "mahidharpura": "Mahidharpura", "salabatpura": "Salabatpura",
  "begampura": "Begampura", "laldarwaja": "Lal Darwaja", "sagrampura": "Sagrampura",
  "navsaribazar": "Navsari Bazar", "kosamba": "Kosamba", "kamrej": "Kamrej",
  "kadodara": "Kadodara", "olpad": "Olpad", "sarsana": "Sarsana", "kim": "Kim", "khajod": "Khajod",
  // Vadodara Areas
  "alkapuri": "Alkapuri", "akota": "Akota", "fatehgunj": "Fatehgunj", "sayajigunj": "Sayajigunj",
  "vasna": "Vasna", "manjalpur": "Manjalpur", "waghodiaroad": "Waghodia Road", "gotri": "Gotri",
  "sama": "Sama", "karelibaug": "Karelibaug", "nizampura": "Nizampura", "subhanpura": "Subhanpura",
  "ajwaroad": "Ajwa Road", "oldpadraroad": "Old Padra Road", "racecourse": "Race Course",
  "ellorapark": "Ellora Park", "harni": "Harni", "tandalja": "Tandalja", "bhayli": "Bhayli",
  "sevasi": "Sevasi", "chhani": "Chhani", "makarpura": "Makarpura", "gorwa": "Gorwa",
  "tarsali": "Tarsali", "diwalipura": "Diwalipura", "maneja": "Maneja", "raopura": "Raopura",
  "mandvi": "Mandvi", "nyaymandir": "Nyay Mandir", "jetalpur": "Jetalpur", "kalali": "Kalali",
  "undera": "Undera", "bil": "Bil", "karodiya": "Karodiya", "dabhoiroad": "Dabhoi Road",
  "samasavliroad": "Sama Savli Road", "atladra": "Atladra", "tp13": "TP 13", "koyali": "Koyali",
  "ranoli": "Ranoli"
};

export function getAreaDisplayName(slug: string): string {
  return areaDisplayNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}

export function getCityAreas(city: "surat" | "vadodara"): string[] {
  return city === "surat" ? suratAreas : vadodaraAreas;
}

// ==================== 9 DOMAIN CONFIGURATIONS ====================

export const domains: DomainConfig[] = [
  // ==================== 1. BIRTHDAY SURPRISE SURAT ====================
  {
    slug: "birthday-surprise-surat",
    domain: "birthdaysurprisesurat.com",
    name: "Birthday Surprise Surat",
    tagline: "Create Magical Birthday Moments for Your Love",
    city: "surat",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@birthdaysurprisesurat.com",
    colors: {
      primary: "#EC4899", // Pink
      secondary: "#F472B6",
      accent: "#DB2777",
      gradient: "from-pink-500 to-rose-600",
      gradientHover: "from-pink-600 to-rose-700",
      lightBg: "bg-pink-50",
      darkBg: "bg-pink-900",
      text: "text-pink-600"
    },
    heroImages: ["/images/hero/birthday1.jpg", "/images/hero/birthday2.jpg", "/images/hero/birthday3.jpg"],
    keywords: [
      { slug: "birthday-surprise-for-boyfriend-surat", title: "Birthday Surprise for Boyfriend", h1: "Best Birthday Surprise for Boyfriend in Surat", metaTitle: "Birthday Surprise for Boyfriend in Surat | Romantic Celebration", metaDescription: "Plan the perfect birthday surprise for your boyfriend in Surat. Romantic decorations, cake, and intimate celebration at our couple-friendly cafe." },
      { slug: "birthday-surprise-for-girlfriend-surat", title: "Birthday Surprise for Girlfriend", h1: "Romantic Birthday Surprise for Girlfriend in Surat", metaTitle: "Birthday Surprise for Girlfriend Surat | Make Her Day Special", metaDescription: "Create unforgettable birthday memories for your girlfriend in Surat with balloon decorations, cake, flowers and romantic setup." },
      { slug: "birthday-surprise-for-husband-surat", title: "Birthday Surprise for Husband", h1: "Special Birthday Surprise for Husband in Surat", metaTitle: "Birthday Surprise for Husband Surat | Romantic Celebration", metaDescription: "Surprise your husband with a romantic birthday celebration in Surat. Private setup, decorations, and memorable moments." },
      { slug: "birthday-surprise-for-wife-surat", title: "Birthday Surprise for Wife", h1: "Romantic Birthday Surprise for Wife in Surat", metaTitle: "Birthday Surprise for Wife Surat | Make Her Feel Special", metaDescription: "Plan a dreamy birthday surprise for your wife in Surat with elegant decorations, flowers, and romantic ambiance." },
      { slug: "romantic-birthday-surprise-surat", title: "Romantic Birthday Surprise", h1: "Romantic Birthday Surprise in Surat", metaTitle: "Romantic Birthday Surprise Surat | Couple Celebration", metaDescription: "Book a romantic birthday surprise in Surat with candlelight setup, decorations, and intimate celebration for couples." },
      { slug: "birthday-celebration-for-couples-surat", title: "Birthday Celebration for Couples", h1: "Birthday Celebration for Couples in Surat", metaTitle: "Couple Birthday Celebration Surat | Private Venue", metaDescription: "Celebrate your special day as a couple in Surat with our exclusive birthday packages and romantic setups." },
      { slug: "birthday-room-decoration-surat", title: "Birthday Room Decoration", h1: "Birthday Room Decoration in Surat", metaTitle: "Birthday Room Decoration Surat | Balloon & Flower Setup", metaDescription: "Beautiful birthday room decoration in Surat with balloons, flowers, and romantic themes for couples." },
      { slug: "birthday-balloon-decoration-surat", title: "Birthday Balloon Decoration", h1: "Birthday Balloon Decoration in Surat", metaTitle: "Birthday Balloon Decoration Surat | Creative Setups", metaDescription: "Stunning birthday balloon decoration in Surat for romantic celebrations. Heart shapes, arches, and more." },
      { slug: "surprise-birthday-for-lover-surat", title: "Surprise Birthday for Lover", h1: "Surprise Birthday for Lover in Surat", metaTitle: "Surprise Birthday for Lover Surat | Romantic Setup", metaDescription: "Plan a surprise birthday celebration for your lover in Surat with romantic setup and private ambiance." },
      { slug: "midnight-birthday-surprise-surat", title: "Midnight Birthday Surprise", h1: "Midnight Birthday Surprise in Surat", metaTitle: "Midnight Birthday Surprise Surat | 12 AM Celebration", metaDescription: "Book midnight birthday surprise in Surat to celebrate at 12 AM with cake, decorations, and romantic moments." },
      { slug: "birthday-cake-surprise-surat", title: "Birthday Cake Surprise", h1: "Birthday Cake Surprise in Surat", metaTitle: "Birthday Cake Surprise Surat | Designer Cakes", metaDescription: "Surprise your partner with a beautiful birthday cake in Surat. Customized designs and romantic presentation." },
      { slug: "birthday-gifts-for-couple-surat", title: "Birthday Gifts for Couple", h1: "Birthday Gifts for Couple in Surat", metaTitle: "Birthday Gifts for Couple Surat | Romantic Gift Ideas", metaDescription: "Find the perfect birthday gifts for couples in Surat. Romantic hampers, personalized items, and more." },
      { slug: "private-birthday-celebration-surat", title: "Private Birthday Celebration", h1: "Private Birthday Celebration in Surat", metaTitle: "Private Birthday Celebration Surat | Exclusive Venue", metaDescription: "Enjoy a private birthday celebration in Surat with intimate setup, decorations, and romantic ambiance." },
      { slug: "birthday-surprise-ideas-for-him-surat", title: "Birthday Surprise Ideas for Him", h1: "Birthday Surprise Ideas for Him in Surat", metaTitle: "Birthday Surprise Ideas for Him Surat | Make His Day", metaDescription: "Best birthday surprise ideas for him in Surat. Romantic setups, personalized gifts, and memorable experiences." },
      { slug: "birthday-surprise-ideas-for-her-surat", title: "Birthday Surprise Ideas for Her", h1: "Birthday Surprise Ideas for Her in Surat", metaTitle: "Birthday Surprise Ideas for Her Surat | Romantic Gestures", metaDescription: "Creative birthday surprise ideas for her in Surat. Flowers, decorations, and romantic celebrations." },
      { slug: "couple-birthday-celebration-surat", title: "Couple Birthday Celebration", h1: "Couple Birthday Celebration in Surat", metaTitle: "Couple Birthday Celebration Surat | Romantic Venue", metaDescription: "Celebrate your birthday as a couple in Surat with our exclusive romantic packages and decorations." },
      { slug: "romantic-birthday-decoration-surat", title: "Romantic Birthday Decoration", h1: "Romantic Birthday Decoration in Surat", metaTitle: "Romantic Birthday Decoration Surat | Love Themes", metaDescription: "Beautiful romantic birthday decoration in Surat with hearts, flowers, and candlelight setup." },
      { slug: "birthday-date-surat", title: "Birthday Date", h1: "Birthday Date in Surat", metaTitle: "Birthday Date Surat | Romantic Celebration", metaDescription: "Plan a special birthday date in Surat with romantic dinner, decorations, and intimate moments." },
      { slug: "birthday-surprise-planners-surat", title: "Birthday Surprise Planners", h1: "Birthday Surprise Planners in Surat", metaTitle: "Birthday Surprise Planners Surat | Professional Setup", metaDescription: "Expert birthday surprise planners in Surat for couples. We handle decorations, cake, and everything." },
      { slug: "best-birthday-surprise-for-couple-surat", title: "Best Birthday Surprise for Couple", h1: "Best Birthday Surprise for Couple in Surat", metaTitle: "Best Birthday Surprise for Couple Surat | Top Rated", metaDescription: "Book the best birthday surprise for couples in Surat with premium decorations and romantic setup." },
      { slug: "birthday-surprise-near-me-surat", title: "Birthday Surprise Near Me", h1: "Birthday Surprise Near Me in Surat", metaTitle: "Birthday Surprise Near Me Surat | Local Service", metaDescription: "Find birthday surprise services near you in Surat. Romantic setups for couples at convenient locations." },
      { slug: "intimate-birthday-celebration-surat", title: "Intimate Birthday Celebration", h1: "Intimate Birthday Celebration in Surat", metaTitle: "Intimate Birthday Celebration Surat | Private Setup", metaDescription: "Enjoy an intimate birthday celebration in Surat with private setup and romantic ambiance for two." },
      { slug: "special-birthday-surprise-surat", title: "Special Birthday Surprise", h1: "Special Birthday Surprise in Surat", metaTitle: "Special Birthday Surprise Surat | Unique Celebration", metaDescription: "Create a special birthday surprise in Surat with unique decorations and memorable experiences." },
      { slug: "birthday-surprise-package-surat", title: "Birthday Surprise Package", h1: "Birthday Surprise Package in Surat", metaTitle: "Birthday Surprise Package Surat | All Inclusive", metaDescription: "Book our all-inclusive birthday surprise package in Surat with decorations, cake, and romantic setup." },
      { slug: "unique-birthday-surprise-surat", title: "Unique Birthday Surprise", h1: "Unique Birthday Surprise in Surat", metaTitle: "Unique Birthday Surprise Surat | Creative Ideas", metaDescription: "Plan a unique birthday surprise in Surat with creative themes and personalized romantic setups." }
    ]
  },

  // ==================== 2. CANDLELIGHT DINNER SURAT ====================
  {
    slug: "candlelight-dinner-surat",
    domain: "candlelightdinnersurat.com",
    name: "Candlelight Dinner Surat",
    tagline: "Romantic Dining Experience for Couples",
    city: "surat",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@candlelightdinnersurat.com",
    colors: {
      primary: "#F59E0B", // Amber/Golden
      secondary: "#FBBF24",
      accent: "#D97706",
      gradient: "from-amber-500 to-orange-600",
      gradientHover: "from-amber-600 to-orange-700",
      lightBg: "bg-amber-50",
      darkBg: "bg-amber-900",
      text: "text-amber-600"
    },
    heroImages: ["/images/hero/candle1.jpg", "/images/hero/candle2.jpg", "/images/hero/candle3.jpg"],
    keywords: [
      { slug: "candlelight-dinner-in-surat", title: "Candlelight Dinner", h1: "Candlelight Dinner in Surat", metaTitle: "Candlelight Dinner in Surat | Romantic Dining Experience", metaDescription: "Book the perfect candlelight dinner in Surat for couples. Romantic ambiance, delicious food, and intimate setting." },
      { slug: "romantic-dinner-surat", title: "Romantic Dinner", h1: "Romantic Dinner in Surat", metaTitle: "Romantic Dinner Surat | Best Couple Dining", metaDescription: "Enjoy a romantic dinner in Surat with candlelight, flowers, and exquisite cuisine for couples." },
      { slug: "couple-dinner-surat", title: "Couple Dinner", h1: "Couple Dinner in Surat", metaTitle: "Couple Dinner Surat | Private Dining Experience", metaDescription: "Perfect couple dinner in Surat with private setting and romantic ambiance." },
      { slug: "private-dining-surat", title: "Private Dining", h1: "Private Dining in Surat", metaTitle: "Private Dining Surat | Exclusive Experience", metaDescription: "Exclusive private dining in Surat for couples seeking intimate and romantic meals." },
      { slug: "candlelight-dinner-for-couples-surat", title: "Candlelight Dinner for Couples", h1: "Candlelight Dinner for Couples in Surat", metaTitle: "Candlelight Dinner for Couples Surat | Book Now", metaDescription: "Special candlelight dinner packages for couples in Surat with decorations and romantic setup." },
      { slug: "rooftop-candlelight-dinner-surat", title: "Rooftop Candlelight Dinner", h1: "Rooftop Candlelight Dinner in Surat", metaTitle: "Rooftop Candlelight Dinner Surat | Sky Dining", metaDescription: "Enjoy rooftop candlelight dinner in Surat under the stars with romantic views." },
      { slug: "poolside-candlelight-dinner-surat", title: "Poolside Candlelight Dinner", h1: "Poolside Candlelight Dinner in Surat", metaTitle: "Poolside Candlelight Dinner Surat | Water View Dining", metaDescription: "Romantic poolside candlelight dinner in Surat with serene water views and ambiance." },
      { slug: "candlelight-dinner-near-me-surat", title: "Candlelight Dinner Near Me", h1: "Candlelight Dinner Near Me in Surat", metaTitle: "Candlelight Dinner Near Me Surat | Local Options", metaDescription: "Find candlelight dinner options near you in Surat. Multiple locations across the city." },
      { slug: "candlelight-dinner-for-boyfriend-surat", title: "Candlelight Dinner for Boyfriend", h1: "Candlelight Dinner for Boyfriend in Surat", metaTitle: "Candlelight Dinner for Boyfriend Surat | Surprise Him", metaDescription: "Plan a candlelight dinner surprise for your boyfriend in Surat with romantic setup." },
      { slug: "candlelight-dinner-for-girlfriend-surat", title: "Candlelight Dinner for Girlfriend", h1: "Candlelight Dinner for Girlfriend in Surat", metaTitle: "Candlelight Dinner for Girlfriend Surat | Romantic Evening", metaDescription: "Book a romantic candlelight dinner for your girlfriend in Surat with flowers and decorations." },
      { slug: "best-candlelight-dinner-surat", title: "Best Candlelight Dinner", h1: "Best Candlelight Dinner in Surat", metaTitle: "Best Candlelight Dinner Surat | Top Rated", metaDescription: "Experience the best candlelight dinner in Surat with premium ambiance and cuisine." },
      { slug: "romantic-date-dinner-surat", title: "Romantic Date Dinner", h1: "Romantic Date Dinner in Surat", metaTitle: "Romantic Date Dinner Surat | Perfect Evening", metaDescription: "Plan a romantic date dinner in Surat with candlelight and intimate setting." },
      { slug: "candlelight-dinner-packages-surat", title: "Candlelight Dinner Packages", h1: "Candlelight Dinner Packages in Surat", metaTitle: "Candlelight Dinner Packages Surat | Best Deals", metaDescription: "Affordable candlelight dinner packages in Surat for couples with all-inclusive options." },
      { slug: "budget-candlelight-dinner-surat", title: "Budget Candlelight Dinner", h1: "Budget Candlelight Dinner in Surat", metaTitle: "Budget Candlelight Dinner Surat | Affordable Romance", metaDescription: "Enjoy budget-friendly candlelight dinner in Surat without compromising on romance." },
      { slug: "luxury-candlelight-dinner-surat", title: "Luxury Candlelight Dinner", h1: "Luxury Candlelight Dinner in Surat", metaTitle: "Luxury Candlelight Dinner Surat | Premium Experience", metaDescription: "Indulge in luxury candlelight dinner in Surat with premium setup and gourmet food." },
      { slug: "candlelight-dinner-booking-surat", title: "Candlelight Dinner Booking", h1: "Candlelight Dinner Booking in Surat", metaTitle: "Candlelight Dinner Booking Surat | Reserve Now", metaDescription: "Easy candlelight dinner booking in Surat. Reserve your romantic evening online." },
      { slug: "couple-dining-surat", title: "Couple Dining", h1: "Couple Dining in Surat", metaTitle: "Couple Dining Surat | Romantic Restaurant", metaDescription: "Best couple dining experience in Surat with private tables and romantic atmosphere." },
      { slug: "private-candlelight-dinner-surat", title: "Private Candlelight Dinner", h1: "Private Candlelight Dinner in Surat", metaTitle: "Private Candlelight Dinner Surat | Exclusive Setup", metaDescription: "Book a private candlelight dinner in Surat with exclusive setup for two." },
      { slug: "candlelight-dinner-with-decorations-surat", title: "Candlelight Dinner with Decorations", h1: "Candlelight Dinner with Decorations in Surat", metaTitle: "Candlelight Dinner with Decorations Surat | Special Setup", metaDescription: "Candlelight dinner with beautiful decorations in Surat. Flowers, balloons, and romantic themes." },
      { slug: "candlelight-dinner-ideas-surat", title: "Candlelight Dinner Ideas", h1: "Candlelight Dinner Ideas in Surat", metaTitle: "Candlelight Dinner Ideas Surat | Romantic Inspiration", metaDescription: "Get the best candlelight dinner ideas in Surat for a memorable romantic evening." },
      { slug: "outdoor-candlelight-dinner-surat", title: "Outdoor Candlelight Dinner", h1: "Outdoor Candlelight Dinner in Surat", metaTitle: "Outdoor Candlelight Dinner Surat | Open Air Romance", metaDescription: "Enjoy outdoor candlelight dinner in Surat with fresh air and starlit sky." },
      { slug: "candlelight-dinner-for-two-surat", title: "Candlelight Dinner for Two", h1: "Candlelight Dinner for Two in Surat", metaTitle: "Candlelight Dinner for Two Surat | Intimate Setting", metaDescription: "Perfect candlelight dinner for two in Surat with intimate and romantic setup." },
      { slug: "themed-candlelight-dinner-surat", title: "Themed Candlelight Dinner", h1: "Themed Candlelight Dinner in Surat", metaTitle: "Themed Candlelight Dinner Surat | Unique Experience", metaDescription: "Book themed candlelight dinner in Surat with unique setups and creative ambiance." },
      { slug: "cafe-candlelight-dinner-surat", title: "Cafe Candlelight Dinner", h1: "Cafe Candlelight Dinner in Surat", metaTitle: "Cafe Candlelight Dinner Surat | Cozy Romance", metaDescription: "Enjoy cozy cafe candlelight dinner in Surat with intimate vibes and great food." },
      { slug: "intimate-dinner-surat", title: "Intimate Dinner", h1: "Intimate Dinner in Surat", metaTitle: "Intimate Dinner Surat | Private Experience", metaDescription: "Book an intimate dinner in Surat for a private and romantic dining experience." }
    ]
  },

  // ==================== 3. SURPRISE DATE SURAT ====================
  {
    slug: "surprise-date-surat",
    domain: "surprisedatesurat.com",
    name: "Surprise Date Surat",
    tagline: "Create Unforgettable Date Experiences",
    city: "surat",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@surprisedatesurat.com",
    colors: {
      primary: "#EF4444", // Red/Rose
      secondary: "#F87171",
      accent: "#DC2626",
      gradient: "from-red-500 to-rose-600",
      gradientHover: "from-red-600 to-rose-700",
      lightBg: "bg-red-50",
      darkBg: "bg-red-900",
      text: "text-red-600"
    },
    heroImages: ["/images/hero/date1.jpg", "/images/hero/date2.jpg", "/images/hero/date3.jpg"],
    keywords: [
      { slug: "surprise-date-in-surat", title: "Surprise Date", h1: "Surprise Date in Surat", metaTitle: "Surprise Date in Surat | Romantic Experience", metaDescription: "Plan a surprise date in Surat for your partner. Romantic setup, private venue, and memorable moments." },
      { slug: "romantic-date-ideas-surat", title: "Romantic Date Ideas", h1: "Romantic Date Ideas in Surat", metaTitle: "Romantic Date Ideas Surat | Best Options", metaDescription: "Get the best romantic date ideas in Surat for couples seeking special experiences." },
      { slug: "date-night-surat", title: "Date Night", h1: "Date Night in Surat", metaTitle: "Date Night Surat | Perfect Evening", metaDescription: "Plan a perfect date night in Surat with romantic ambiance and intimate setting." },
      { slug: "couple-date-surat", title: "Couple Date", h1: "Couple Date in Surat", metaTitle: "Couple Date Surat | Romantic Outing", metaDescription: "Best couple date options in Surat with private setup and romantic vibes." },
      { slug: "surprise-date-for-boyfriend-surat", title: "Surprise Date for Boyfriend", h1: "Surprise Date for Boyfriend in Surat", metaTitle: "Surprise Date for Boyfriend Surat | Make Him Happy", metaDescription: "Plan a surprise date for your boyfriend in Surat with thoughtful setup and romantic touches." },
      { slug: "surprise-date-for-girlfriend-surat", title: "Surprise Date for Girlfriend", h1: "Surprise Date for Girlfriend in Surat", metaTitle: "Surprise Date for Girlfriend Surat | Romantic Surprise", metaDescription: "Create a magical surprise date for your girlfriend in Surat with flowers and decorations." },
      { slug: "perfect-date-surat", title: "Perfect Date", h1: "Perfect Date in Surat", metaTitle: "Perfect Date Surat | Ideal Romantic Evening", metaDescription: "Book the perfect date in Surat with all arrangements for a romantic evening." },
      { slug: "romantic-places-for-couples-surat", title: "Romantic Places for Couples", h1: "Romantic Places for Couples in Surat", metaTitle: "Romantic Places for Couples Surat | Best Spots", metaDescription: "Discover the best romantic places for couples in Surat for dates and celebrations." },
      { slug: "date-ideas-near-me-surat", title: "Date Ideas Near Me", h1: "Date Ideas Near Me in Surat", metaTitle: "Date Ideas Near Me Surat | Local Options", metaDescription: "Find date ideas near you in Surat with multiple romantic venues and setups." },
      { slug: "surprise-date-packages-surat", title: "Surprise Date Packages", h1: "Surprise Date Packages in Surat", metaTitle: "Surprise Date Packages Surat | All Inclusive", metaDescription: "Book all-inclusive surprise date packages in Surat with decorations and food." },
      { slug: "best-date-spots-surat", title: "Best Date Spots", h1: "Best Date Spots in Surat", metaTitle: "Best Date Spots Surat | Top Locations", metaDescription: "Discover the best date spots in Surat for romantic outings and celebrations." },
      { slug: "private-date-surat", title: "Private Date", h1: "Private Date in Surat", metaTitle: "Private Date Surat | Exclusive Setting", metaDescription: "Enjoy a private date in Surat with exclusive setup and intimate ambiance." },
      { slug: "outdoor-date-surat", title: "Outdoor Date", h1: "Outdoor Date in Surat", metaTitle: "Outdoor Date Surat | Open Air Romance", metaDescription: "Plan an outdoor date in Surat with fresh air and romantic surroundings." },
      { slug: "rooftop-date-surat", title: "Rooftop Date", h1: "Rooftop Date in Surat", metaTitle: "Rooftop Date Surat | Sky High Romance", metaDescription: "Enjoy a rooftop date in Surat with stunning views and romantic ambiance." },
      { slug: "date-night-ideas-surat", title: "Date Night Ideas", h1: "Date Night Ideas in Surat", metaTitle: "Date Night Ideas Surat | Creative Options", metaDescription: "Get creative date night ideas in Surat for memorable romantic evenings." },
      { slug: "couple-activities-surat", title: "Couple Activities", h1: "Couple Activities in Surat", metaTitle: "Couple Activities Surat | Fun Together", metaDescription: "Find fun couple activities in Surat for quality time and bonding." },
      { slug: "romantic-surprise-surat", title: "Romantic Surprise", h1: "Romantic Surprise in Surat", metaTitle: "Romantic Surprise Surat | Special Moments", metaDescription: "Plan a romantic surprise in Surat with thoughtful setup and decorations." },
      { slug: "date-planners-surat", title: "Date Planners", h1: "Date Planners in Surat", metaTitle: "Date Planners Surat | Expert Help", metaDescription: "Professional date planners in Surat to help you create perfect romantic experiences." },
      { slug: "surprise-date-setup-surat", title: "Surprise Date Setup", h1: "Surprise Date Setup in Surat", metaTitle: "Surprise Date Setup Surat | Custom Arrangements", metaDescription: "Get professional surprise date setup in Surat with customized decorations." },
      { slug: "budget-date-ideas-surat", title: "Budget Date Ideas", h1: "Budget Date Ideas in Surat", metaTitle: "Budget Date Ideas Surat | Affordable Romance", metaDescription: "Find budget-friendly date ideas in Surat without compromising on romance." },
      { slug: "luxury-date-surat", title: "Luxury Date", h1: "Luxury Date in Surat", metaTitle: "Luxury Date Surat | Premium Experience", metaDescription: "Indulge in a luxury date in Surat with premium setup and exclusive services." },
      { slug: "cafe-date-surat", title: "Cafe Date", h1: "Cafe Date in Surat", metaTitle: "Cafe Date Surat | Cozy Romance", metaDescription: "Enjoy a cozy cafe date in Surat with intimate setting and great vibes." },
      { slug: "poolside-date-surat", title: "Poolside Date", h1: "Poolside Date in Surat", metaTitle: "Poolside Date Surat | Water View Romance", metaDescription: "Romantic poolside date in Surat with serene water views and ambiance." },
      { slug: "intimate-date-surat", title: "Intimate Date", h1: "Intimate Date in Surat", metaTitle: "Intimate Date Surat | Private Moments", metaDescription: "Plan an intimate date in Surat with private setup and romantic atmosphere." },
      { slug: "unique-date-ideas-surat", title: "Unique Date Ideas", h1: "Unique Date Ideas in Surat", metaTitle: "Unique Date Ideas Surat | Creative Options", metaDescription: "Discover unique date ideas in Surat for unforgettable romantic experiences." }
    ]
  },

  // ==================== 4. ANNIVERSARY DINNER SURAT ====================
  {
    slug: "anniversary-dinner-surat",
    domain: "anniversarydinnersurat.com",
    name: "Anniversary Dinner Surat",
    tagline: "Celebrate Your Love Story",
    city: "surat",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@anniversarydinnersurat.com",
    colors: {
      primary: "#9CA3AF", // Silver
      secondary: "#D1D5DB",
      accent: "#6B7280",
      gradient: "from-gray-400 to-slate-600",
      gradientHover: "from-gray-500 to-slate-700",
      lightBg: "bg-gray-50",
      darkBg: "bg-gray-800",
      text: "text-gray-600"
    },
    heroImages: ["/images/hero/anniversary1.jpg", "/images/hero/anniversary2.jpg", "/images/hero/anniversary3.jpg"],
    keywords: [
      { slug: "anniversary-dinner-in-surat", title: "Anniversary Dinner", h1: "Anniversary Dinner in Surat", metaTitle: "Anniversary Dinner in Surat | Celebrate Your Love", metaDescription: "Book a romantic anniversary dinner in Surat with special decorations and intimate setting." },
      { slug: "anniversary-celebration-for-couples-surat", title: "Anniversary Celebration for Couples", h1: "Anniversary Celebration for Couples in Surat", metaTitle: "Anniversary Celebration for Couples Surat | Special Day", metaDescription: "Plan a special anniversary celebration for couples in Surat with romantic setup." },
      { slug: "marriage-anniversary-dinner-surat", title: "Marriage Anniversary Dinner", h1: "Marriage Anniversary Dinner in Surat", metaTitle: "Marriage Anniversary Dinner Surat | Celebrate Together", metaDescription: "Celebrate your marriage anniversary with a special dinner in Surat." },
      { slug: "anniversary-surprise-for-husband-surat", title: "Anniversary Surprise for Husband", h1: "Anniversary Surprise for Husband in Surat", metaTitle: "Anniversary Surprise for Husband Surat | Make It Special", metaDescription: "Plan a surprise anniversary celebration for your husband in Surat." },
      { slug: "anniversary-surprise-for-wife-surat", title: "Anniversary Surprise for Wife", h1: "Anniversary Surprise for Wife in Surat", metaTitle: "Anniversary Surprise for Wife Surat | Romantic Gesture", metaDescription: "Create a beautiful anniversary surprise for your wife in Surat." },
      { slug: "anniversary-decorations-surat", title: "Anniversary Decorations", h1: "Anniversary Decorations in Surat", metaTitle: "Anniversary Decorations Surat | Beautiful Setup", metaDescription: "Get stunning anniversary decorations in Surat with flowers and romantic themes." },
      { slug: "romantic-anniversary-dinner-surat", title: "Romantic Anniversary Dinner", h1: "Romantic Anniversary Dinner in Surat", metaTitle: "Romantic Anniversary Dinner Surat | Intimate Celebration", metaDescription: "Book a romantic anniversary dinner in Surat with candlelight and decorations." },
      { slug: "anniversary-dinner-for-two-surat", title: "Anniversary Dinner for Two", h1: "Anniversary Dinner for Two in Surat", metaTitle: "Anniversary Dinner for Two Surat | Private Setting", metaDescription: "Enjoy an intimate anniversary dinner for two in Surat." },
      { slug: "anniversary-packages-surat", title: "Anniversary Packages", h1: "Anniversary Packages in Surat", metaTitle: "Anniversary Packages Surat | All Inclusive", metaDescription: "Book all-inclusive anniversary packages in Surat with dinner and decorations." },
      { slug: "anniversary-planning-surat", title: "Anniversary Planning", h1: "Anniversary Planning in Surat", metaTitle: "Anniversary Planning Surat | Expert Help", metaDescription: "Professional anniversary planning services in Surat for couples." },
      { slug: "anniversary-ideas-for-couples-surat", title: "Anniversary Ideas for Couples", h1: "Anniversary Ideas for Couples in Surat", metaTitle: "Anniversary Ideas for Couples Surat | Romantic Options", metaDescription: "Get the best anniversary ideas for couples in Surat." },
      { slug: "anniversary-dining-surat", title: "Anniversary Dining", h1: "Anniversary Dining in Surat", metaTitle: "Anniversary Dining Surat | Special Experience", metaDescription: "Enjoy special anniversary dining in Surat with romantic ambiance." },
      { slug: "silver-anniversary-dinner-surat", title: "Silver Anniversary Dinner", h1: "Silver Anniversary Dinner in Surat", metaTitle: "Silver Anniversary Dinner Surat | 25 Years Celebration", metaDescription: "Celebrate your silver anniversary with a special dinner in Surat." },
      { slug: "golden-anniversary-dinner-surat", title: "Golden Anniversary Dinner", h1: "Golden Anniversary Dinner in Surat", metaTitle: "Golden Anniversary Dinner Surat | 50 Years Celebration", metaDescription: "Celebrate your golden anniversary with an elegant dinner in Surat." },
      { slug: "first-anniversary-dinner-surat", title: "First Anniversary Dinner", h1: "First Anniversary Dinner in Surat", metaTitle: "First Anniversary Dinner Surat | Paper Anniversary", metaDescription: "Celebrate your first anniversary with a romantic dinner in Surat." },
      { slug: "25th-anniversary-surat", title: "25th Anniversary", h1: "25th Anniversary Celebration in Surat", metaTitle: "25th Anniversary Surat | Silver Jubilee", metaDescription: "Celebrate your 25th anniversary with a special celebration in Surat." },
      { slug: "50th-anniversary-surat", title: "50th Anniversary", h1: "50th Anniversary Celebration in Surat", metaTitle: "50th Anniversary Surat | Golden Jubilee", metaDescription: "Celebrate your 50th anniversary with an elegant celebration in Surat." },
      { slug: "anniversary-date-surat", title: "Anniversary Date", h1: "Anniversary Date in Surat", metaTitle: "Anniversary Date Surat | Romantic Evening", metaDescription: "Plan a special anniversary date in Surat with romantic setup." },
      { slug: "anniversary-celebration-ideas-surat", title: "Anniversary Celebration Ideas", h1: "Anniversary Celebration Ideas in Surat", metaTitle: "Anniversary Celebration Ideas Surat | Creative Options", metaDescription: "Get creative anniversary celebration ideas in Surat." },
      { slug: "private-anniversary-dinner-surat", title: "Private Anniversary Dinner", h1: "Private Anniversary Dinner in Surat", metaTitle: "Private Anniversary Dinner Surat | Exclusive Setting", metaDescription: "Book a private anniversary dinner in Surat with exclusive setup." },
      { slug: "best-anniversary-dinner-surat", title: "Best Anniversary Dinner", h1: "Best Anniversary Dinner in Surat", metaTitle: "Best Anniversary Dinner Surat | Top Rated", metaDescription: "Experience the best anniversary dinner in Surat with premium service." },
      { slug: "anniversary-surprise-ideas-surat", title: "Anniversary Surprise Ideas", h1: "Anniversary Surprise Ideas in Surat", metaTitle: "Anniversary Surprise Ideas Surat | Creative Options", metaDescription: "Get creative anniversary surprise ideas in Surat." },
      { slug: "anniversary-cake-surat", title: "Anniversary Cake", h1: "Anniversary Cake in Surat", metaTitle: "Anniversary Cake Surat | Designer Cakes", metaDescription: "Order beautiful anniversary cakes in Surat for your celebration." },
      { slug: "anniversary-balloon-decoration-surat", title: "Anniversary Balloon Decoration", h1: "Anniversary Balloon Decoration in Surat", metaTitle: "Anniversary Balloon Decoration Surat | Beautiful Setup", metaDescription: "Get stunning anniversary balloon decoration in Surat." },
      { slug: "couple-anniversary-dinner-surat", title: "Couple Anniversary Dinner", h1: "Couple Anniversary Dinner in Surat", metaTitle: "Couple Anniversary Dinner Surat | Romantic Celebration", metaDescription: "Celebrate your love with a couple anniversary dinner in Surat." }
    ]
  },

  // ==================== 5. ANNIVERSARY DINNER VADODARA ====================
  {
    slug: "anniversary-dinner-vadodara",
    domain: "anniversarydinnervadodara.com",
    name: "Anniversary Dinner Vadodara",
    tagline: "Celebrate Your Love Story",
    city: "vadodara",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@anniversarydinnervadodara.com",
    colors: {
      primary: "#8B5CF6", // Royal Purple
      secondary: "#A78BFA",
      accent: "#7C3AED",
      gradient: "from-purple-500 to-violet-600",
      gradientHover: "from-purple-600 to-violet-700",
      lightBg: "bg-purple-50",
      darkBg: "bg-purple-900",
      text: "text-purple-600"
    },
    heroImages: ["/images/hero/anniversary1.jpg", "/images/hero/anniversary2.jpg", "/images/hero/anniversary3.jpg"],
    keywords: [
      { slug: "anniversary-dinner-in-vadodara", title: "Anniversary Dinner", h1: "Anniversary Dinner in Vadodara", metaTitle: "Anniversary Dinner in Vadodara | Celebrate Your Love", metaDescription: "Book a romantic anniversary dinner in Vadodara with special decorations and intimate setting." },
      { slug: "anniversary-celebration-for-couples-vadodara", title: "Anniversary Celebration for Couples", h1: "Anniversary Celebration for Couples in Vadodara", metaTitle: "Anniversary Celebration for Couples Vadodara | Special Day", metaDescription: "Plan a special anniversary celebration for couples in Vadodara with romantic setup." },
      { slug: "marriage-anniversary-dinner-vadodara", title: "Marriage Anniversary Dinner", h1: "Marriage Anniversary Dinner in Vadodara", metaTitle: "Marriage Anniversary Dinner Vadodara | Celebrate Together", metaDescription: "Celebrate your marriage anniversary with a special dinner in Vadodara." },
      { slug: "anniversary-surprise-for-husband-vadodara", title: "Anniversary Surprise for Husband", h1: "Anniversary Surprise for Husband in Vadodara", metaTitle: "Anniversary Surprise for Husband Vadodara | Make It Special", metaDescription: "Plan a surprise anniversary celebration for your husband in Vadodara." },
      { slug: "anniversary-surprise-for-wife-vadodara", title: "Anniversary Surprise for Wife", h1: "Anniversary Surprise for Wife in Vadodara", metaTitle: "Anniversary Surprise for Wife Vadodara | Romantic Gesture", metaDescription: "Create a beautiful anniversary surprise for your wife in Vadodara." },
      { slug: "anniversary-decorations-vadodara", title: "Anniversary Decorations", h1: "Anniversary Decorations in Vadodara", metaTitle: "Anniversary Decorations Vadodara | Beautiful Setup", metaDescription: "Get stunning anniversary decorations in Vadodara with flowers and romantic themes." },
      { slug: "romantic-anniversary-dinner-vadodara", title: "Romantic Anniversary Dinner", h1: "Romantic Anniversary Dinner in Vadodara", metaTitle: "Romantic Anniversary Dinner Vadodara | Intimate Celebration", metaDescription: "Book a romantic anniversary dinner in Vadodara with candlelight and decorations." },
      { slug: "anniversary-dinner-for-two-vadodara", title: "Anniversary Dinner for Two", h1: "Anniversary Dinner for Two in Vadodara", metaTitle: "Anniversary Dinner for Two Vadodara | Private Setting", metaDescription: "Enjoy an intimate anniversary dinner for two in Vadodara." },
      { slug: "anniversary-packages-vadodara", title: "Anniversary Packages", h1: "Anniversary Packages in Vadodara", metaTitle: "Anniversary Packages Vadodara | All Inclusive", metaDescription: "Book all-inclusive anniversary packages in Vadodara with dinner and decorations." },
      { slug: "anniversary-planning-vadodara", title: "Anniversary Planning", h1: "Anniversary Planning in Vadodara", metaTitle: "Anniversary Planning Vadodara | Expert Help", metaDescription: "Professional anniversary planning services in Vadodara for couples." },
      { slug: "anniversary-ideas-for-couples-vadodara", title: "Anniversary Ideas for Couples", h1: "Anniversary Ideas for Couples in Vadodara", metaTitle: "Anniversary Ideas for Couples Vadodara | Romantic Options", metaDescription: "Get the best anniversary ideas for couples in Vadodara." },
      { slug: "anniversary-dining-vadodara", title: "Anniversary Dining", h1: "Anniversary Dining in Vadodara", metaTitle: "Anniversary Dining Vadodara | Special Experience", metaDescription: "Enjoy special anniversary dining in Vadodara with romantic ambiance." },
      { slug: "silver-anniversary-dinner-vadodara", title: "Silver Anniversary Dinner", h1: "Silver Anniversary Dinner in Vadodara", metaTitle: "Silver Anniversary Dinner Vadodara | 25 Years Celebration", metaDescription: "Celebrate your silver anniversary with a special dinner in Vadodara." },
      { slug: "golden-anniversary-dinner-vadodara", title: "Golden Anniversary Dinner", h1: "Golden Anniversary Dinner in Vadodara", metaTitle: "Golden Anniversary Dinner Vadodara | 50 Years Celebration", metaDescription: "Celebrate your golden anniversary with an elegant dinner in Vadodara." },
      { slug: "first-anniversary-dinner-vadodara", title: "First Anniversary Dinner", h1: "First Anniversary Dinner in Vadodara", metaTitle: "First Anniversary Dinner Vadodara | Paper Anniversary", metaDescription: "Celebrate your first anniversary with a romantic dinner in Vadodara." },
      { slug: "25th-anniversary-vadodara", title: "25th Anniversary", h1: "25th Anniversary Celebration in Vadodara", metaTitle: "25th Anniversary Vadodara | Silver Jubilee", metaDescription: "Celebrate your 25th anniversary with a special celebration in Vadodara." },
      { slug: "50th-anniversary-vadodara", title: "50th Anniversary", h1: "50th Anniversary Celebration in Vadodara", metaTitle: "50th Anniversary Vadodara | Golden Jubilee", metaDescription: "Celebrate your 50th anniversary with an elegant celebration in Vadodara." },
      { slug: "anniversary-date-vadodara", title: "Anniversary Date", h1: "Anniversary Date in Vadodara", metaTitle: "Anniversary Date Vadodara | Romantic Evening", metaDescription: "Plan a special anniversary date in Vadodara with romantic setup." },
      { slug: "anniversary-celebration-ideas-vadodara", title: "Anniversary Celebration Ideas", h1: "Anniversary Celebration Ideas in Vadodara", metaTitle: "Anniversary Celebration Ideas Vadodara | Creative Options", metaDescription: "Get creative anniversary celebration ideas in Vadodara." },
      { slug: "private-anniversary-dinner-vadodara", title: "Private Anniversary Dinner", h1: "Private Anniversary Dinner in Vadodara", metaTitle: "Private Anniversary Dinner Vadodara | Exclusive Setting", metaDescription: "Book a private anniversary dinner in Vadodara with exclusive setup." },
      { slug: "best-anniversary-dinner-vadodara", title: "Best Anniversary Dinner", h1: "Best Anniversary Dinner in Vadodara", metaTitle: "Best Anniversary Dinner Vadodara | Top Rated", metaDescription: "Experience the best anniversary dinner in Vadodara with premium service." },
      { slug: "anniversary-surprise-ideas-vadodara", title: "Anniversary Surprise Ideas", h1: "Anniversary Surprise Ideas in Vadodara", metaTitle: "Anniversary Surprise Ideas Vadodara | Creative Options", metaDescription: "Get creative anniversary surprise ideas in Vadodara." },
      { slug: "anniversary-cake-vadodara", title: "Anniversary Cake", h1: "Anniversary Cake in Vadodara", metaTitle: "Anniversary Cake Vadodara | Designer Cakes", metaDescription: "Order beautiful anniversary cakes in Vadodara for your celebration." },
      { slug: "anniversary-balloon-decoration-vadodara", title: "Anniversary Balloon Decoration", h1: "Anniversary Balloon Decoration in Vadodara", metaTitle: "Anniversary Balloon Decoration Vadodara | Beautiful Setup", metaDescription: "Get stunning anniversary balloon decoration in Vadodara." },
      { slug: "couple-anniversary-dinner-vadodara", title: "Couple Anniversary Dinner", h1: "Couple Anniversary Dinner in Vadodara", metaTitle: "Couple Anniversary Dinner Vadodara | Romantic Celebration", metaDescription: "Celebrate your love with a couple anniversary dinner in Vadodara." }
    ]
  },

  // ==================== 6. SURPRISE DATE VADODARA ====================
  {
    slug: "surprise-date-vadodara",
    domain: "surprisedatevadodara.com",
    name: "Surprise Date Vadodara",
    tagline: "Create Unforgettable Date Experiences",
    city: "vadodara",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@surprisedatevadodara.com",
    colors: {
      primary: "#7C3AED", // Deep Purple/Violet
      secondary: "#8B5CF6",
      accent: "#6D28D9",
      gradient: "from-violet-500 to-purple-600",
      gradientHover: "from-violet-600 to-purple-700",
      lightBg: "bg-violet-50",
      darkBg: "bg-violet-900",
      text: "text-violet-600"
    },
    heroImages: ["/images/hero/date1.jpg", "/images/hero/date2.jpg", "/images/hero/date3.jpg"],
    keywords: [
      { slug: "surprise-date-in-vadodara", title: "Surprise Date", h1: "Surprise Date in Vadodara", metaTitle: "Surprise Date in Vadodara | Romantic Experience", metaDescription: "Plan a surprise date in Vadodara for your partner. Romantic setup, private venue, and memorable moments." },
      { slug: "romantic-date-ideas-vadodara", title: "Romantic Date Ideas", h1: "Romantic Date Ideas in Vadodara", metaTitle: "Romantic Date Ideas Vadodara | Best Options", metaDescription: "Get the best romantic date ideas in Vadodara for couples seeking special experiences." },
      { slug: "date-night-vadodara", title: "Date Night", h1: "Date Night in Vadodara", metaTitle: "Date Night Vadodara | Perfect Evening", metaDescription: "Plan a perfect date night in Vadodara with romantic ambiance and intimate setting." },
      { slug: "couple-date-vadodara", title: "Couple Date", h1: "Couple Date in Vadodara", metaTitle: "Couple Date Vadodara | Romantic Outing", metaDescription: "Best couple date options in Vadodara with private setup and romantic vibes." },
      { slug: "surprise-date-for-boyfriend-vadodara", title: "Surprise Date for Boyfriend", h1: "Surprise Date for Boyfriend in Vadodara", metaTitle: "Surprise Date for Boyfriend Vadodara | Make Him Happy", metaDescription: "Plan a surprise date for your boyfriend in Vadodara with thoughtful setup and romantic touches." },
      { slug: "surprise-date-for-girlfriend-vadodara", title: "Surprise Date for Girlfriend", h1: "Surprise Date for Girlfriend in Vadodara", metaTitle: "Surprise Date for Girlfriend Vadodara | Romantic Surprise", metaDescription: "Create a magical surprise date for your girlfriend in Vadodara with flowers and decorations." },
      { slug: "perfect-date-vadodara", title: "Perfect Date", h1: "Perfect Date in Vadodara", metaTitle: "Perfect Date Vadodara | Ideal Romantic Evening", metaDescription: "Book the perfect date in Vadodara with all arrangements for a romantic evening." },
      { slug: "romantic-places-for-couples-vadodara", title: "Romantic Places for Couples", h1: "Romantic Places for Couples in Vadodara", metaTitle: "Romantic Places for Couples Vadodara | Best Spots", metaDescription: "Discover the best romantic places for couples in Vadodara for dates and celebrations." },
      { slug: "date-ideas-near-me-vadodara", title: "Date Ideas Near Me", h1: "Date Ideas Near Me in Vadodara", metaTitle: "Date Ideas Near Me Vadodara | Local Options", metaDescription: "Find date ideas near you in Vadodara with multiple romantic venues and setups." },
      { slug: "surprise-date-packages-vadodara", title: "Surprise Date Packages", h1: "Surprise Date Packages in Vadodara", metaTitle: "Surprise Date Packages Vadodara | All Inclusive", metaDescription: "Book all-inclusive surprise date packages in Vadodara with decorations and food." },
      { slug: "best-date-spots-vadodara", title: "Best Date Spots", h1: "Best Date Spots in Vadodara", metaTitle: "Best Date Spots Vadodara | Top Locations", metaDescription: "Discover the best date spots in Vadodara for romantic outings and celebrations." },
      { slug: "private-date-vadodara", title: "Private Date", h1: "Private Date in Vadodara", metaTitle: "Private Date Vadodara | Exclusive Setting", metaDescription: "Enjoy a private date in Vadodara with exclusive setup and intimate ambiance." },
      { slug: "outdoor-date-vadodara", title: "Outdoor Date", h1: "Outdoor Date in Vadodara", metaTitle: "Outdoor Date Vadodara | Open Air Romance", metaDescription: "Plan an outdoor date in Vadodara with fresh air and romantic surroundings." },
      { slug: "rooftop-date-vadodara", title: "Rooftop Date", h1: "Rooftop Date in Vadodara", metaTitle: "Rooftop Date Vadodara | Sky High Romance", metaDescription: "Enjoy a rooftop date in Vadodara with stunning views and romantic ambiance." },
      { slug: "date-night-ideas-vadodara", title: "Date Night Ideas", h1: "Date Night Ideas in Vadodara", metaTitle: "Date Night Ideas Vadodara | Creative Options", metaDescription: "Get creative date night ideas in Vadodara for memorable romantic evenings." },
      { slug: "couple-activities-vadodara", title: "Couple Activities", h1: "Couple Activities in Vadodara", metaTitle: "Couple Activities Vadodara | Fun Together", metaDescription: "Find fun couple activities in Vadodara for quality time and bonding." },
      { slug: "romantic-surprise-vadodara", title: "Romantic Surprise", h1: "Romantic Surprise in Vadodara", metaTitle: "Romantic Surprise Vadodara | Special Moments", metaDescription: "Plan a romantic surprise in Vadodara with thoughtful setup and decorations." },
      { slug: "date-planners-vadodara", title: "Date Planners", h1: "Date Planners in Vadodara", metaTitle: "Date Planners Vadodara | Expert Help", metaDescription: "Professional date planners in Vadodara to help you create perfect romantic experiences." },
      { slug: "surprise-date-setup-vadodara", title: "Surprise Date Setup", h1: "Surprise Date Setup in Vadodara", metaTitle: "Surprise Date Setup Vadodara | Custom Arrangements", metaDescription: "Get professional surprise date setup in Vadodara with customized decorations." },
      { slug: "budget-date-ideas-vadodara", title: "Budget Date Ideas", h1: "Budget Date Ideas in Vadodara", metaTitle: "Budget Date Ideas Vadodara | Affordable Romance", metaDescription: "Find budget-friendly date ideas in Vadodara without compromising on romance." },
      { slug: "luxury-date-vadodara", title: "Luxury Date", h1: "Luxury Date in Vadodara", metaTitle: "Luxury Date Vadodara | Premium Experience", metaDescription: "Indulge in a luxury date in Vadodara with premium setup and exclusive services." },
      { slug: "cafe-date-vadodara", title: "Cafe Date", h1: "Cafe Date in Vadodara", metaTitle: "Cafe Date Vadodara | Cozy Romance", metaDescription: "Enjoy a cozy cafe date in Vadodara with intimate setting and great vibes." },
      { slug: "poolside-date-vadodara", title: "Poolside Date", h1: "Poolside Date in Vadodara", metaTitle: "Poolside Date Vadodara | Water View Romance", metaDescription: "Romantic poolside date in Vadodara with serene water views and ambiance." },
      { slug: "intimate-date-vadodara", title: "Intimate Date", h1: "Intimate Date in Vadodara", metaTitle: "Intimate Date Vadodara | Private Moments", metaDescription: "Plan an intimate date in Vadodara with private setup and romantic atmosphere." },
      { slug: "unique-date-ideas-vadodara", title: "Unique Date Ideas", h1: "Unique Date Ideas in Vadodara", metaTitle: "Unique Date Ideas Vadodara | Creative Options", metaDescription: "Discover unique date ideas in Vadodara for unforgettable romantic experiences." }
    ]
  },

  // ==================== 7. ROOFTOP DATE VADODARA ====================
  {
    slug: "rooftop-date-vadodara",
    domain: "rooftopdatevadodara.com",
    name: "Rooftop Date Vadodara",
    tagline: "Romance Under the Stars",
    city: "vadodara",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@rooftopdatevadodara.com",
    colors: {
      primary: "#1E3A8A", // Dark Blue/Navy
      secondary: "#3B82F6",
      accent: "#1D4ED8",
      gradient: "from-blue-800 to-indigo-900",
      gradientHover: "from-blue-900 to-indigo-950",
      lightBg: "bg-blue-50",
      darkBg: "bg-blue-950",
      text: "text-blue-700"
    },
    heroImages: ["/images/hero/rooftop1.jpg", "/images/hero/rooftop2.jpg", "/images/hero/rooftop3.jpg"],
    keywords: [
      { slug: "rooftop-date-in-vadodara", title: "Rooftop Date", h1: "Rooftop Date in Vadodara", metaTitle: "Rooftop Date in Vadodara | Sky High Romance", metaDescription: "Enjoy a romantic rooftop date in Vadodara with stunning city views and intimate ambiance." },
      { slug: "rooftop-dinner-for-couples-vadodara", title: "Rooftop Dinner for Couples", h1: "Rooftop Dinner for Couples in Vadodara", metaTitle: "Rooftop Dinner for Couples Vadodara | Romantic Evening", metaDescription: "Book a rooftop dinner for couples in Vadodara with beautiful decorations and views." },
      { slug: "rooftop-cafe-vadodara", title: "Rooftop Cafe", h1: "Rooftop Cafe in Vadodara", metaTitle: "Rooftop Cafe Vadodara | Date Spot", metaDescription: "Visit our rooftop cafe in Vadodara for romantic dates with amazing views." },
      { slug: "rooftop-candlelight-dinner-vadodara", title: "Rooftop Candlelight Dinner", h1: "Rooftop Candlelight Dinner in Vadodara", metaTitle: "Rooftop Candlelight Dinner Vadodara | Under the Stars", metaDescription: "Book a rooftop candlelight dinner in Vadodara for a magical evening under the stars." },
      { slug: "romantic-rooftop-date-vadodara", title: "Romantic Rooftop Date", h1: "Romantic Rooftop Date in Vadodara", metaTitle: "Romantic Rooftop Date Vadodara | Perfect Setting", metaDescription: "Plan a romantic rooftop date in Vadodara with beautiful setup and city views." },
      { slug: "rooftop-dining-vadodara", title: "Rooftop Dining", h1: "Rooftop Dining in Vadodara", metaTitle: "Rooftop Dining Vadodara | Elevated Experience", metaDescription: "Enjoy rooftop dining in Vadodara with delicious food and romantic atmosphere." },
      { slug: "best-rooftop-for-couples-vadodara", title: "Best Rooftop for Couples", h1: "Best Rooftop for Couples in Vadodara", metaTitle: "Best Rooftop for Couples Vadodara | Top Rated", metaDescription: "Discover the best rooftop spots for couples in Vadodara for romantic dates." },
      { slug: "rooftop-celebration-vadodara", title: "Rooftop Celebration", h1: "Rooftop Celebration in Vadodara", metaTitle: "Rooftop Celebration Vadodara | Special Occasions", metaDescription: "Book rooftop celebrations in Vadodara for birthdays, anniversaries, and special occasions." },
      { slug: "terrace-dinner-for-two-vadodara", title: "Terrace Dinner for Two", h1: "Terrace Dinner for Two in Vadodara", metaTitle: "Terrace Dinner for Two Vadodara | Private Setup", metaDescription: "Enjoy a private terrace dinner for two in Vadodara with romantic ambiance." },
      { slug: "open-sky-dinner-vadodara", title: "Open Sky Dinner", h1: "Open Sky Dinner in Vadodara", metaTitle: "Open Sky Dinner Vadodara | Starlit Romance", metaDescription: "Book an open sky dinner in Vadodara for a romantic evening under the stars." },
      { slug: "rooftop-date-ideas-vadodara", title: "Rooftop Date Ideas", h1: "Rooftop Date Ideas in Vadodara", metaTitle: "Rooftop Date Ideas Vadodara | Creative Options", metaDescription: "Get creative rooftop date ideas in Vadodara for memorable romantic experiences." },
      { slug: "private-rooftop-dinner-vadodara", title: "Private Rooftop Dinner", h1: "Private Rooftop Dinner in Vadodara", metaTitle: "Private Rooftop Dinner Vadodara | Exclusive Setting", metaDescription: "Book a private rooftop dinner in Vadodara with exclusive setup for two." },
      { slug: "rooftop-anniversary-vadodara", title: "Rooftop Anniversary", h1: "Rooftop Anniversary Celebration in Vadodara", metaTitle: "Rooftop Anniversary Vadodara | Special Evening", metaDescription: "Celebrate your anniversary on a rooftop in Vadodara with romantic decorations." },
      { slug: "rooftop-birthday-for-couple-vadodara", title: "Rooftop Birthday for Couple", h1: "Rooftop Birthday for Couple in Vadodara", metaTitle: "Rooftop Birthday for Couple Vadodara | Celebrate Together", metaDescription: "Celebrate your birthday as a couple on a rooftop in Vadodara." },
      { slug: "rooftop-surprise-vadodara", title: "Rooftop Surprise", h1: "Rooftop Surprise in Vadodara", metaTitle: "Rooftop Surprise Vadodara | Special Moments", metaDescription: "Plan a rooftop surprise for your partner in Vadodara with romantic setup." },
      { slug: "romantic-rooftop-dinner-vadodara", title: "Romantic Rooftop Dinner", h1: "Romantic Rooftop Dinner in Vadodara", metaTitle: "Romantic Rooftop Dinner Vadodara | Unforgettable Evening", metaDescription: "Book a romantic rooftop dinner in Vadodara with candlelight and decorations." },
      { slug: "rooftop-date-night-vadodara", title: "Rooftop Date Night", h1: "Rooftop Date Night in Vadodara", metaTitle: "Rooftop Date Night Vadodara | Perfect Evening", metaDescription: "Plan a perfect rooftop date night in Vadodara with stunning views." },
      { slug: "rooftop-couple-dinner-vadodara", title: "Rooftop Couple Dinner", h1: "Rooftop Couple Dinner in Vadodara", metaTitle: "Rooftop Couple Dinner Vadodara | Intimate Setting", metaDescription: "Enjoy a rooftop couple dinner in Vadodara with private and romantic setup." },
      { slug: "sky-dining-vadodara", title: "Sky Dining", h1: "Sky Dining in Vadodara", metaTitle: "Sky Dining Vadodara | Elevated Romance", metaDescription: "Experience sky dining in Vadodara with panoramic views and romantic ambiance." },
      { slug: "rooftop-packages-vadodara", title: "Rooftop Packages", h1: "Rooftop Packages in Vadodara", metaTitle: "Rooftop Packages Vadodara | All Inclusive", metaDescription: "Book all-inclusive rooftop packages in Vadodara with dinner and decorations." },
      { slug: "rooftop-with-decorations-vadodara", title: "Rooftop with Decorations", h1: "Rooftop with Decorations in Vadodara", metaTitle: "Rooftop with Decorations Vadodara | Beautiful Setup", metaDescription: "Book rooftop dates with beautiful decorations in Vadodara." },
      { slug: "budget-rooftop-dinner-vadodara", title: "Budget Rooftop Dinner", h1: "Budget Rooftop Dinner in Vadodara", metaTitle: "Budget Rooftop Dinner Vadodara | Affordable Romance", metaDescription: "Enjoy budget-friendly rooftop dinner in Vadodara without compromising on romance." },
      { slug: "luxury-rooftop-vadodara", title: "Luxury Rooftop", h1: "Luxury Rooftop Experience in Vadodara", metaTitle: "Luxury Rooftop Vadodara | Premium Experience", metaDescription: "Indulge in luxury rooftop dining in Vadodara with premium setup and service." },
      { slug: "rooftop-proposal-vadodara", title: "Rooftop Proposal", h1: "Rooftop Proposal in Vadodara", metaTitle: "Rooftop Proposal Vadodara | Say Yes", metaDescription: "Plan a romantic rooftop proposal in Vadodara with beautiful decorations and views." },
      { slug: "intimate-rooftop-dinner-vadodara", title: "Intimate Rooftop Dinner", h1: "Intimate Rooftop Dinner in Vadodara", metaTitle: "Intimate Rooftop Dinner Vadodara | Private Moments", metaDescription: "Enjoy an intimate rooftop dinner in Vadodara with private setup and romantic ambiance." }
    ]
  },

  // ==================== 8. CANDLELIGHT DINNER VADODARA ====================
  {
    slug: "candlelight-dinner-vadodara",
    domain: "candlelightdinnervadodara.com",
    name: "Candlelight Dinner Vadodara",
    tagline: "Romantic Dining Experience for Couples",
    city: "vadodara",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@candlelightdinnervadodara.com",
    colors: {
      primary: "#F97316", // Warm Orange/Coral
      secondary: "#FB923C",
      accent: "#EA580C",
      gradient: "from-orange-500 to-red-500",
      gradientHover: "from-orange-600 to-red-600",
      lightBg: "bg-orange-50",
      darkBg: "bg-orange-900",
      text: "text-orange-600"
    },
    heroImages: ["/images/hero/candle1.jpg", "/images/hero/candle2.jpg", "/images/hero/candle3.jpg"],
    keywords: [
      { slug: "candlelight-dinner-in-vadodara", title: "Candlelight Dinner", h1: "Candlelight Dinner in Vadodara", metaTitle: "Candlelight Dinner in Vadodara | Romantic Dining Experience", metaDescription: "Book the perfect candlelight dinner in Vadodara for couples. Romantic ambiance, delicious food, and intimate setting." },
      { slug: "romantic-dinner-vadodara", title: "Romantic Dinner", h1: "Romantic Dinner in Vadodara", metaTitle: "Romantic Dinner Vadodara | Best Couple Dining", metaDescription: "Enjoy a romantic dinner in Vadodara with candlelight, flowers, and exquisite cuisine for couples." },
      { slug: "couple-dinner-vadodara", title: "Couple Dinner", h1: "Couple Dinner in Vadodara", metaTitle: "Couple Dinner Vadodara | Private Dining Experience", metaDescription: "Perfect couple dinner in Vadodara with private setting and romantic ambiance." },
      { slug: "private-dining-vadodara", title: "Private Dining", h1: "Private Dining in Vadodara", metaTitle: "Private Dining Vadodara | Exclusive Experience", metaDescription: "Exclusive private dining in Vadodara for couples seeking intimate and romantic meals." },
      { slug: "candlelight-dinner-for-couples-vadodara", title: "Candlelight Dinner for Couples", h1: "Candlelight Dinner for Couples in Vadodara", metaTitle: "Candlelight Dinner for Couples Vadodara | Book Now", metaDescription: "Special candlelight dinner packages for couples in Vadodara with decorations and romantic setup." },
      { slug: "rooftop-candlelight-dinner-vadodara", title: "Rooftop Candlelight Dinner", h1: "Rooftop Candlelight Dinner in Vadodara", metaTitle: "Rooftop Candlelight Dinner Vadodara | Sky Dining", metaDescription: "Enjoy rooftop candlelight dinner in Vadodara under the stars with romantic views." },
      { slug: "poolside-candlelight-dinner-vadodara", title: "Poolside Candlelight Dinner", h1: "Poolside Candlelight Dinner in Vadodara", metaTitle: "Poolside Candlelight Dinner Vadodara | Water View Dining", metaDescription: "Romantic poolside candlelight dinner in Vadodara with serene water views and ambiance." },
      { slug: "candlelight-dinner-near-me-vadodara", title: "Candlelight Dinner Near Me", h1: "Candlelight Dinner Near Me in Vadodara", metaTitle: "Candlelight Dinner Near Me Vadodara | Local Options", metaDescription: "Find candlelight dinner options near you in Vadodara. Multiple locations across the city." },
      { slug: "candlelight-dinner-for-boyfriend-vadodara", title: "Candlelight Dinner for Boyfriend", h1: "Candlelight Dinner for Boyfriend in Vadodara", metaTitle: "Candlelight Dinner for Boyfriend Vadodara | Surprise Him", metaDescription: "Plan a candlelight dinner surprise for your boyfriend in Vadodara with romantic setup." },
      { slug: "candlelight-dinner-for-girlfriend-vadodara", title: "Candlelight Dinner for Girlfriend", h1: "Candlelight Dinner for Girlfriend in Vadodara", metaTitle: "Candlelight Dinner for Girlfriend Vadodara | Romantic Evening", metaDescription: "Book a romantic candlelight dinner for your girlfriend in Vadodara with flowers and decorations." },
      { slug: "best-candlelight-dinner-vadodara", title: "Best Candlelight Dinner", h1: "Best Candlelight Dinner in Vadodara", metaTitle: "Best Candlelight Dinner Vadodara | Top Rated", metaDescription: "Experience the best candlelight dinner in Vadodara with premium ambiance and cuisine." },
      { slug: "romantic-date-dinner-vadodara", title: "Romantic Date Dinner", h1: "Romantic Date Dinner in Vadodara", metaTitle: "Romantic Date Dinner Vadodara | Perfect Evening", metaDescription: "Plan a romantic date dinner in Vadodara with candlelight and intimate setting." },
      { slug: "candlelight-dinner-packages-vadodara", title: "Candlelight Dinner Packages", h1: "Candlelight Dinner Packages in Vadodara", metaTitle: "Candlelight Dinner Packages Vadodara | Best Deals", metaDescription: "Affordable candlelight dinner packages in Vadodara for couples with all-inclusive options." },
      { slug: "budget-candlelight-dinner-vadodara", title: "Budget Candlelight Dinner", h1: "Budget Candlelight Dinner in Vadodara", metaTitle: "Budget Candlelight Dinner Vadodara | Affordable Romance", metaDescription: "Enjoy budget-friendly candlelight dinner in Vadodara without compromising on romance." },
      { slug: "luxury-candlelight-dinner-vadodara", title: "Luxury Candlelight Dinner", h1: "Luxury Candlelight Dinner in Vadodara", metaTitle: "Luxury Candlelight Dinner Vadodara | Premium Experience", metaDescription: "Indulge in luxury candlelight dinner in Vadodara with premium setup and gourmet food." },
      { slug: "candlelight-dinner-booking-vadodara", title: "Candlelight Dinner Booking", h1: "Candlelight Dinner Booking in Vadodara", metaTitle: "Candlelight Dinner Booking Vadodara | Reserve Now", metaDescription: "Easy candlelight dinner booking in Vadodara. Reserve your romantic evening online." },
      { slug: "couple-dining-vadodara", title: "Couple Dining", h1: "Couple Dining in Vadodara", metaTitle: "Couple Dining Vadodara | Romantic Restaurant", metaDescription: "Best couple dining experience in Vadodara with private tables and romantic atmosphere." },
      { slug: "private-candlelight-dinner-vadodara", title: "Private Candlelight Dinner", h1: "Private Candlelight Dinner in Vadodara", metaTitle: "Private Candlelight Dinner Vadodara | Exclusive Setup", metaDescription: "Book a private candlelight dinner in Vadodara with exclusive setup for two." },
      { slug: "candlelight-dinner-with-decorations-vadodara", title: "Candlelight Dinner with Decorations", h1: "Candlelight Dinner with Decorations in Vadodara", metaTitle: "Candlelight Dinner with Decorations Vadodara | Special Setup", metaDescription: "Candlelight dinner with beautiful decorations in Vadodara. Flowers, balloons, and romantic themes." },
      { slug: "candlelight-dinner-ideas-vadodara", title: "Candlelight Dinner Ideas", h1: "Candlelight Dinner Ideas in Vadodara", metaTitle: "Candlelight Dinner Ideas Vadodara | Romantic Inspiration", metaDescription: "Get the best candlelight dinner ideas in Vadodara for a memorable romantic evening." },
      { slug: "outdoor-candlelight-dinner-vadodara", title: "Outdoor Candlelight Dinner", h1: "Outdoor Candlelight Dinner in Vadodara", metaTitle: "Outdoor Candlelight Dinner Vadodara | Open Air Romance", metaDescription: "Enjoy outdoor candlelight dinner in Vadodara with fresh air and starlit sky." },
      { slug: "candlelight-dinner-for-two-vadodara", title: "Candlelight Dinner for Two", h1: "Candlelight Dinner for Two in Vadodara", metaTitle: "Candlelight Dinner for Two Vadodara | Intimate Setting", metaDescription: "Perfect candlelight dinner for two in Vadodara with intimate and romantic setup." },
      { slug: "themed-candlelight-dinner-vadodara", title: "Themed Candlelight Dinner", h1: "Themed Candlelight Dinner in Vadodara", metaTitle: "Themed Candlelight Dinner Vadodara | Unique Experience", metaDescription: "Book themed candlelight dinner in Vadodara with unique setups and creative ambiance." },
      { slug: "cafe-candlelight-dinner-vadodara", title: "Cafe Candlelight Dinner", h1: "Cafe Candlelight Dinner in Vadodara", metaTitle: "Cafe Candlelight Dinner Vadodara | Cozy Romance", metaDescription: "Enjoy cozy cafe candlelight dinner in Vadodara with intimate vibes and great food." },
      { slug: "intimate-dinner-vadodara", title: "Intimate Dinner", h1: "Intimate Dinner in Vadodara", metaTitle: "Intimate Dinner Vadodara | Private Experience", metaDescription: "Book an intimate dinner in Vadodara for a private and romantic dining experience." }
    ]
  },

  // ==================== 9. BIRTHDAY SURPRISE VADODARA ====================
  {
    slug: "birthday-surprise-vadodara",
    domain: "birthdaysurprisevadodara.com",
    name: "Birthday Surprise Vadodara",
    tagline: "Create Magical Birthday Moments for Your Love",
    city: "vadodara",
    phone: "+91 6353583148",
    whatsapp: "916353583148",
    email: "info@birthdaysurprisevadodara.com",
    colors: {
      primary: "#14B8A6", // Teal/Cyan
      secondary: "#2DD4BF",
      accent: "#0D9488",
      gradient: "from-teal-500 to-cyan-600",
      gradientHover: "from-teal-600 to-cyan-700",
      lightBg: "bg-teal-50",
      darkBg: "bg-teal-900",
      text: "text-teal-600"
    },
    heroImages: ["/images/hero/birthday1.jpg", "/images/hero/birthday2.jpg", "/images/hero/birthday3.jpg"],
    keywords: [
      { slug: "birthday-surprise-for-boyfriend-vadodara", title: "Birthday Surprise for Boyfriend", h1: "Best Birthday Surprise for Boyfriend in Vadodara", metaTitle: "Birthday Surprise for Boyfriend in Vadodara | Romantic Celebration", metaDescription: "Plan the perfect birthday surprise for your boyfriend in Vadodara. Romantic decorations, cake, and intimate celebration at our couple-friendly cafe." },
      { slug: "birthday-surprise-for-girlfriend-vadodara", title: "Birthday Surprise for Girlfriend", h1: "Romantic Birthday Surprise for Girlfriend in Vadodara", metaTitle: "Birthday Surprise for Girlfriend Vadodara | Make Her Day Special", metaDescription: "Create unforgettable birthday memories for your girlfriend in Vadodara with balloon decorations, cake, flowers and romantic setup." },
      { slug: "birthday-surprise-for-husband-vadodara", title: "Birthday Surprise for Husband", h1: "Special Birthday Surprise for Husband in Vadodara", metaTitle: "Birthday Surprise for Husband Vadodara | Romantic Celebration", metaDescription: "Surprise your husband with a romantic birthday celebration in Vadodara. Private setup, decorations, and memorable moments." },
      { slug: "birthday-surprise-for-wife-vadodara", title: "Birthday Surprise for Wife", h1: "Romantic Birthday Surprise for Wife in Vadodara", metaTitle: "Birthday Surprise for Wife Vadodara | Make Her Feel Special", metaDescription: "Plan a dreamy birthday surprise for your wife in Vadodara with elegant decorations, flowers, and romantic ambiance." },
      { slug: "romantic-birthday-surprise-vadodara", title: "Romantic Birthday Surprise", h1: "Romantic Birthday Surprise in Vadodara", metaTitle: "Romantic Birthday Surprise Vadodara | Couple Celebration", metaDescription: "Book a romantic birthday surprise in Vadodara with candlelight setup, decorations, and intimate celebration for couples." },
      { slug: "birthday-celebration-for-couples-vadodara", title: "Birthday Celebration for Couples", h1: "Birthday Celebration for Couples in Vadodara", metaTitle: "Couple Birthday Celebration Vadodara | Private Venue", metaDescription: "Celebrate your special day as a couple in Vadodara with our exclusive birthday packages and romantic setups." },
      { slug: "birthday-room-decoration-vadodara", title: "Birthday Room Decoration", h1: "Birthday Room Decoration in Vadodara", metaTitle: "Birthday Room Decoration Vadodara | Balloon & Flower Setup", metaDescription: "Beautiful birthday room decoration in Vadodara with balloons, flowers, and romantic themes for couples." },
      { slug: "birthday-balloon-decoration-vadodara", title: "Birthday Balloon Decoration", h1: "Birthday Balloon Decoration in Vadodara", metaTitle: "Birthday Balloon Decoration Vadodara | Creative Setups", metaDescription: "Stunning birthday balloon decoration in Vadodara for romantic celebrations. Heart shapes, arches, and more." },
      { slug: "surprise-birthday-for-lover-vadodara", title: "Surprise Birthday for Lover", h1: "Surprise Birthday for Lover in Vadodara", metaTitle: "Surprise Birthday for Lover Vadodara | Romantic Setup", metaDescription: "Plan a surprise birthday celebration for your lover in Vadodara with romantic setup and private ambiance." },
      { slug: "midnight-birthday-surprise-vadodara", title: "Midnight Birthday Surprise", h1: "Midnight Birthday Surprise in Vadodara", metaTitle: "Midnight Birthday Surprise Vadodara | 12 AM Celebration", metaDescription: "Book midnight birthday surprise in Vadodara to celebrate at 12 AM with cake, decorations, and romantic moments." },
      { slug: "birthday-cake-surprise-vadodara", title: "Birthday Cake Surprise", h1: "Birthday Cake Surprise in Vadodara", metaTitle: "Birthday Cake Surprise Vadodara | Designer Cakes", metaDescription: "Surprise your partner with a beautiful birthday cake in Vadodara. Customized designs and romantic presentation." },
      { slug: "birthday-gifts-for-couple-vadodara", title: "Birthday Gifts for Couple", h1: "Birthday Gifts for Couple in Vadodara", metaTitle: "Birthday Gifts for Couple Vadodara | Romantic Gift Ideas", metaDescription: "Find the perfect birthday gifts for couples in Vadodara. Romantic hampers, personalized items, and more." },
      { slug: "private-birthday-celebration-vadodara", title: "Private Birthday Celebration", h1: "Private Birthday Celebration in Vadodara", metaTitle: "Private Birthday Celebration Vadodara | Exclusive Venue", metaDescription: "Enjoy a private birthday celebration in Vadodara with intimate setup, decorations, and romantic ambiance." },
      { slug: "birthday-surprise-ideas-for-him-vadodara", title: "Birthday Surprise Ideas for Him", h1: "Birthday Surprise Ideas for Him in Vadodara", metaTitle: "Birthday Surprise Ideas for Him Vadodara | Make His Day", metaDescription: "Best birthday surprise ideas for him in Vadodara. Romantic setups, personalized gifts, and memorable experiences." },
      { slug: "birthday-surprise-ideas-for-her-vadodara", title: "Birthday Surprise Ideas for Her", h1: "Birthday Surprise Ideas for Her in Vadodara", metaTitle: "Birthday Surprise Ideas for Her Vadodara | Romantic Gestures", metaDescription: "Creative birthday surprise ideas for her in Vadodara. Flowers, decorations, and romantic celebrations." },
      { slug: "couple-birthday-celebration-vadodara", title: "Couple Birthday Celebration", h1: "Couple Birthday Celebration in Vadodara", metaTitle: "Couple Birthday Celebration Vadodara | Romantic Venue", metaDescription: "Celebrate your birthday as a couple in Vadodara with our exclusive romantic packages and decorations." },
      { slug: "romantic-birthday-decoration-vadodara", title: "Romantic Birthday Decoration", h1: "Romantic Birthday Decoration in Vadodara", metaTitle: "Romantic Birthday Decoration Vadodara | Love Themes", metaDescription: "Beautiful romantic birthday decoration in Vadodara with hearts, flowers, and candlelight setup." },
      { slug: "birthday-date-vadodara", title: "Birthday Date", h1: "Birthday Date in Vadodara", metaTitle: "Birthday Date Vadodara | Romantic Celebration", metaDescription: "Plan a special birthday date in Vadodara with romantic dinner, decorations, and intimate moments." },
      { slug: "birthday-surprise-planners-vadodara", title: "Birthday Surprise Planners", h1: "Birthday Surprise Planners in Vadodara", metaTitle: "Birthday Surprise Planners Vadodara | Professional Setup", metaDescription: "Expert birthday surprise planners in Vadodara for couples. We handle decorations, cake, and everything." },
      { slug: "best-birthday-surprise-for-couple-vadodara", title: "Best Birthday Surprise for Couple", h1: "Best Birthday Surprise for Couple in Vadodara", metaTitle: "Best Birthday Surprise for Couple Vadodara | Top Rated", metaDescription: "Book the best birthday surprise for couples in Vadodara with premium decorations and romantic setup." },
      { slug: "birthday-surprise-near-me-vadodara", title: "Birthday Surprise Near Me", h1: "Birthday Surprise Near Me in Vadodara", metaTitle: "Birthday Surprise Near Me Vadodara | Local Service", metaDescription: "Find birthday surprise services near you in Vadodara. Romantic setups for couples at convenient locations." },
      { slug: "intimate-birthday-celebration-vadodara", title: "Intimate Birthday Celebration", h1: "Intimate Birthday Celebration in Vadodara", metaTitle: "Intimate Birthday Celebration Vadodara | Private Setup", metaDescription: "Enjoy an intimate birthday celebration in Vadodara with private setup and romantic ambiance for two." },
      { slug: "special-birthday-surprise-vadodara", title: "Special Birthday Surprise", h1: "Special Birthday Surprise in Vadodara", metaTitle: "Special Birthday Surprise Vadodara | Unique Celebration", metaDescription: "Create a special birthday surprise in Vadodara with unique decorations and memorable experiences." },
      { slug: "birthday-surprise-package-vadodara", title: "Birthday Surprise Package", h1: "Birthday Surprise Package in Vadodara", metaTitle: "Birthday Surprise Package Vadodara | All Inclusive", metaDescription: "Book our all-inclusive birthday surprise package in Vadodara with decorations, cake, and romantic setup." },
      { slug: "unique-birthday-surprise-vadodara", title: "Unique Birthday Surprise", h1: "Unique Birthday Surprise in Vadodara", metaTitle: "Unique Birthday Surprise Vadodara | Creative Ideas", metaDescription: "Plan a unique birthday surprise in Vadodara with creative themes and personalized romantic setups." }
    ]
  }
];

// ==================== HELPER FUNCTIONS ====================

export function getDomainBySlug(slug: string): DomainConfig | undefined {
  return domains.find(d => d.slug === slug);
}

export function getDomainByDomain(domain: string): DomainConfig | undefined {
  return domains.find(d => d.domain === domain);
}

export function getDomainByHost(host: string): DomainConfig | undefined {
  // Remove port if present
  const hostname = host.split(':')[0];
  // Find domain by matching hostname
  return domains.find(d => d.domain === hostname || hostname.includes(d.domain.replace('.com', '')));
}

export function getKeywordBySlug(domainSlug: string, keywordSlug: string): KeywordItem | undefined {
  const domain = getDomainBySlug(domainSlug);
  if (!domain) return undefined;
  return domain.keywords.find(k => k.slug === keywordSlug);
}

export function getAllKeywordSlugs(domainSlug: string): string[] {
  const domain = getDomainBySlug(domainSlug);
  if (!domain) return [];
  return domain.keywords.map(k => k.slug);
}

export function getAllAreaSlugs(domainSlug: string): string[] {
  const domain = getDomainBySlug(domainSlug);
  if (!domain) return [];
  const areas = getCityAreas(domain.city);
  
  // Create area slugs with domain context
  // e.g., "alkapuri-birthday-surprise" for birthday-surprise-vadodara domain
  const serviceType = domain.slug.replace('-surat', '').replace('-vadodara', '');
  return areas.map(area => `${area}-${serviceType}`);
}

// Generate all static paths for the website
export function generateAllPaths(domainSlug: string): string[] {
  const domain = getDomainBySlug(domainSlug);
  if (!domain) return [];
  
  const paths: string[] = [];
  
  // Add keyword pages
  domain.keywords.forEach(keyword => {
    paths.push(`/${keyword.slug}`);
  });
  
  // Add area pages
  const areas = getCityAreas(domain.city);
  const serviceType = domain.slug.replace('-surat', '').replace('-vadodara', '');
  areas.forEach(area => {
    paths.push(`/${area}-${serviceType}`);
  });
  
  return paths;
}

// Check if a slug is an area page
export function isAreaSlug(domainSlug: string, slug: string): boolean {
  const domain = getDomainBySlug(domainSlug);
  if (!domain) return false;
  
  const areas = getCityAreas(domain.city);
  const serviceType = domain.slug.replace('-surat', '').replace('-vadodara', '');
  
  return areas.some(area => slug === `${area}-${serviceType}`);
}

// Extract area from area slug
export function getAreaFromSlug(domainSlug: string, slug: string): string | null {
  const domain = getDomainBySlug(domainSlug);
  if (!domain) return null;
  
  const areas = getCityAreas(domain.city);
  const serviceType = domain.slug.replace('-surat', '').replace('-vadodara', '');
  
  for (const area of areas) {
    if (slug === `${area}-${serviceType}`) {
      return area;
    }
  }
  return null;
}

// ==================== PAGE COUNT SUMMARY ====================
// 
// Total Pages Calculation:
// 
// 9 Domains × 25 Keywords = 225 Keyword Pages
// 4 Surat Domains × 40 Areas = 160 Area Pages  
// 5 Vadodara Domains × 40 Areas = 200 Area Pages
// 9 Home Pages
// 
// TOTAL: 225 + 160 + 200 + 9 = 594 Pages
//
// Breakdown per domain:
// - Birthday Surprise Surat: 25 keywords + 40 areas + 1 home = 66 pages
// - Candlelight Dinner Surat: 25 keywords + 40 areas + 1 home = 66 pages
// - Surprise Date Surat: 25 keywords + 40 areas + 1 home = 66 pages
// - Anniversary Dinner Surat: 25 keywords + 40 areas + 1 home = 66 pages
// - Anniversary Dinner Vadodara: 25 keywords + 40 areas + 1 home = 66 pages
// - Surprise Date Vadodara: 25 keywords + 40 areas + 1 home = 66 pages
// - Rooftop Date Vadodara: 25 keywords + 40 areas + 1 home = 66 pages
// - Candlelight Dinner Vadodara: 25 keywords + 40 areas + 1 home = 66 pages
// - Birthday Surprise Vadodara: 25 keywords + 40 areas + 1 home = 66 pages
//
// Total: 9 × 66 = 594 Pages
