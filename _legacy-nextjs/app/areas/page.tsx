import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { vadodaraAreas, siteConfig } from '@/lib/ffc-config';

export const metadata: Metadata = {
  title: `Areas We Serve in Vadodara | ${siteConfig.name}`,
  description: `Friends Factory Cafe serves all areas of Vadodara including Alkapuri, Akota, Gotri, Fatehgunj, Manjalpur, Waghodia Road & more. Book romantic celebrations near you!`,
  keywords: [
    'romantic cafe vadodara areas',
    'candlelight dinner near me vadodara',
    'birthday surprise alkapuri',
    'anniversary celebration gotri',
    'proposal setup akota',
    'friends factory cafe locations'
  ],
  alternates: {
    canonical: '/areas',
  },
};

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-amber-600 font-medium">Areas We Serve</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            Areas We Serve in Vadodara
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Conveniently located in Gotri, we serve couples from all across Vadodara. Find romantic celebration services near your area!
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif text-gray-800">
              All Vadodara Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We welcome couples from every corner of Vadodara. Click on your area to learn more about our services near you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {vadodaraAreas.map((area) => (
              <Link key={area.slug} href={`/${area.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-amber-100 group cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-amber-600 transition-colors">
                      {area.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-gray-800">
              📍 Our Location
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              {siteConfig.address}
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4 text-amber-600">Why Choose Us?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <span className="text-2xl mb-2 block">🚗</span>
                  <strong>Easy Access</strong>
                  <p>Located on Sevasi Canal Road with ample parking</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <span className="text-2xl mb-2 block">🏙️</span>
                  <strong>Central Location</strong>
                  <p>15-20 mins from most areas of Vadodara</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <span className="text-2xl mb-2 block">🌃</span>
                  <strong>Rooftop Views</strong>
                  <p>Stunning panoramic views of the city skyline</p>
                </div>
              </div>
            </div>
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
            No matter where you are in Vadodara, we're just a short drive away. Book your perfect romantic experience today!
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
