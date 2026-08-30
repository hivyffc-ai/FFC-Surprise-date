import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { serviceCategories, siteConfig } from '@/lib/ffc-config';

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description: `Explore all romantic celebration services at Friends Factory Cafe Vadodara. Birthday surprises, candlelight dinners, anniversaries, proposals, pre-wedding shoots & more!`,
  keywords: [
    'romantic celebration services vadodara',
    'birthday surprise vadodara',
    'candlelight dinner vadodara',
    'anniversary celebration vadodara',
    'proposal setup vadodara',
    'friends factory cafe services'
  ],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-amber-600 font-medium">Our Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            Our Celebration Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover the perfect romantic celebration experience for every special moment. From intimate dinners to grand proposals!
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Card key={service.slug} className="h-full hover:shadow-xl transition-all hover:-translate-y-2 border-amber-100 group">
                <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <span className="text-5xl md:text-7xl">{service.emoji}</span>
                </div>
                <CardContent className="p-3 md:p-6">
                  <h2 className="text-sm md:text-xl font-bold mb-1 md:mb-3 group-hover:text-amber-600 transition-colors font-serif line-clamp-2">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 mb-2 md:mb-4 line-clamp-2 md:line-clamp-3 text-xs md:text-base hidden md:block">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href="/packages" className="text-xs md:text-sm text-amber-600 font-medium hover:text-amber-700 transition-colors">
                      View Packages →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
            Ready to Celebrate?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Book your perfect romantic experience today. All packages include food, decorations, music & complete privacy!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/packages">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
                View Packages
              </Button>
            </Link>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
