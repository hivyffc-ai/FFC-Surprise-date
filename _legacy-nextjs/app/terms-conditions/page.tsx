import { Metadata } from 'next';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';
import { siteConfig } from '@/lib/ffc-config';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Friends Factory Cafe Vadodara',
  description: 'Terms and Conditions for Friends Factory Cafe - Booking policies, cancellation rules, and service agreements for candlelight dinners and romantic celebrations in Vadodara.',
  alternates: {
    canonical: '/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <FileText className="h-4 w-4 mr-2" /> Legal
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Terms & Conditions
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before booking with us.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-gray max-w-none">
            
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 2026
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing our website surprisedatevadodara.com or booking our services for candlelight dinners, romantic celebrations, and events at Friends Factory Cafe, Vadodara, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">2. Our Services</h2>
            <p className="text-gray-600 mb-4">Friends Factory Cafe provides:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Private candlelight dinner experiences for couples</li>
              <li>Birthday celebration setups and surprises</li>
              <li>Anniversary dinner packages</li>
              <li>Marriage proposal and engagement setups</li>
              <li>Pre-wedding celebration dinners</li>
              <li>Pregnancy announcement celebrations</li>
              <li>Custom romantic celebration packages</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">3. Booking Process</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Bookings can be made via WhatsApp ({siteConfig.phone}), phone call, or through our website booking form</li>
              <li>All bookings require confirmation from our team via WhatsApp or phone</li>
              <li>Advance booking of 2-3 days is recommended, especially for weekends and special occasions</li>
              <li>Booking is confirmed only after receiving advance payment or confirmation from our team</li>
              <li>Please provide accurate contact information for booking confirmation</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">4. Pricing and Payment</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>All prices displayed on our website are in Indian Rupees (₹) and inclusive of applicable taxes unless stated otherwise</li>
              <li>Package prices start from ₹6,500 and vary based on the selected setup and add-ons</li>
              <li>Payment can be made via UPI, bank transfer, or cash at the venue</li>
              <li>Advance payment may be required to confirm your booking</li>
              <li>Additional charges may apply for extra decorations, add-ons, or extended time</li>
              <li>Cake with Setup 1, Setup 2, and Setup 3 packages is complimentary; for other packages, cake costs ₹500 extra</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">5. Cancellation and Refund Policy</h2>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <p className="text-red-800 font-semibold mb-3">Important: No Refund Policy</p>
              <ul className="list-disc pl-6 text-red-700 space-y-2">
                <li><strong>No refunds</strong> will be provided for cancellations</li>
                <li><strong>Rescheduling</strong> must be informed at least 24 hours (one day) prior to your booking date</li>
                <li>Events can be <strong>rescheduled within one month</strong> from the original date, subject to availability</li>
                <li>No-shows without prior intimation will result in forfeiture of the booking amount</li>
                <li>In case of unforeseen circumstances on our end, we will offer rescheduling or credit for future bookings</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">6. Timing and Duration</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Each booking includes 3 hours of private celebration time</li>
              <li>Available time slots are between 12 PM to 10:30 PM (varies by slot)</li>
              <li>Please arrive on time to make the most of your booking</li>
              <li>Extensions beyond 3 hours may be accommodated based on availability (additional charges apply)</li>
              <li>Late arrivals will not result in extended time unless prior arrangements are made</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">7. Venue Rules and Guest Conduct</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Our venue is exclusively for couples and intimate celebrations (maximum 2-3 guests per booking)</li>
              <li>This is a couple-friendly, private venue with complete privacy during your slot</li>
              <li>Guests must maintain respectful and appropriate behavior at all times</li>
              <li>Smoking is prohibited inside the premises</li>
              <li>Alcohol consumption is not permitted (only non-alcoholic mocktails and champagne provided)</li>
              <li>Guests are responsible for any damage to property or decor</li>
              <li>Photography and videography are allowed for personal use only</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">8. Food and Dietary Requirements</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Menu items are subject to availability</li>
              <li>Please inform us of any food allergies or dietary requirements at the time of booking</li>
              <li>Vegetarian and Jain food options are available on request</li>
              <li>Outside food is not permitted unless specially approved</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">9. Weather and Force Majeure</h2>
            <p className="text-gray-600 mb-6">
              For rooftop bookings, in case of inclement weather (rain, extreme wind), we will:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Offer an alternative indoor setup if available</li>
              <li>Provide an option to reschedule to another date</li>
              <li>Weather-related changes are at the discretion of management for guest safety</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">10. Photography and Media</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Professional photography services can be arranged as an add-on (charges apply)</li>
              <li>We may photograph our setups for promotional purposes (without identifying guests) unless you opt out</li>
              <li>If you wish to share your photos/videos tagging us, we appreciate and may repost with your permission</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">11. Liability</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Friends Factory Cafe shall not be liable for any personal injury, loss, or damage to personal belongings during your visit</li>
              <li>Guests are advised to take care of their valuables</li>
              <li>We are not responsible for any allergic reactions if guests fail to disclose dietary restrictions</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">12. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on our website, including text, images, logos, and design elements, are the property of Friends Factory Cafe and protected by copyright laws. Unauthorized use is prohibited.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">13. Changes to Services</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify our services, packages, prices, and these terms at any time without prior notice. Changes will be effective upon posting on our website.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">14. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Vadodara, Gujarat.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">15. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For any questions or concerns regarding these Terms and Conditions, please contact us:
            </p>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
              <p className="text-gray-700 mb-2"><strong>Friends Factory Cafe</strong></p>
              <p className="text-gray-600 mb-1">{siteConfig.address}</p>
              <p className="text-gray-600 mb-1">Phone: <a href={`tel:${siteConfig.phone}`} className="text-amber-600 hover:text-amber-700">{siteConfig.phone}</a></p>
              <p className="text-gray-600">WhatsApp: <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-amber-600 hover:text-amber-700">{siteConfig.phone}</a></p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 text-sm">
                By making a booking with Friends Factory Cafe, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>

          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
