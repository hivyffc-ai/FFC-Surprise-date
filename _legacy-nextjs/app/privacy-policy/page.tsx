import { Metadata } from 'next';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { Badge } from '@/components/ui/badge';
import { Shield } from 'lucide-react';
import { siteConfig } from '@/lib/ffc-config';

export const metadata: Metadata = {
  title: 'Privacy Policy | Friends Factory Cafe Vadodara',
  description: 'Privacy Policy for Friends Factory Cafe - Learn how we collect, use, and protect your personal information when booking candlelight dinners and romantic celebrations in Vadodara.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Shield className="h-4 w-4 mr-2" /> Legal
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we handle your information.
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

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              Welcome to Friends Factory Cafe ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at surprisedatevadodara.com or use our services for candlelight dinners, romantic celebrations, and event bookings in Vadodara, Gujarat.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, phone number, email address, and city when you make a booking inquiry</li>
              <li><strong>Booking Details:</strong> Preferred date, time slot, occasion type (birthday, anniversary, proposal, etc.), and selected package</li>
              <li><strong>Communication Data:</strong> Messages exchanged via WhatsApp or phone calls for booking confirmations</li>
              <li><strong>Payment Information:</strong> We do not store payment card details. Payments are processed securely through third-party payment gateways</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Process and confirm your booking requests for candlelight dinners and celebrations</li>
              <li>Communicate with you about your reservations via WhatsApp or phone</li>
              <li>Customize your romantic celebration experience based on the occasion</li>
              <li>Send booking reminders and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our services and website experience</li>
              <li>Send promotional offers (only with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">4. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> With trusted partners who assist in operating our website, conducting business, or servicing you (e.g., WhatsApp Business for communication)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with any merger or acquisition of our business</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">5. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">6. WhatsApp Communication</h2>
            <p className="text-gray-600 mb-6">
              When you submit a booking inquiry through our website, your information is shared via WhatsApp for quick communication. By using our booking form, you consent to receiving messages on WhatsApp at the phone number you provide. Standard WhatsApp privacy policies apply to these communications.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">7. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but this may limit some functionality of our website.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">8. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of promotional communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">9. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are intended for adults (18 years and above). We do not knowingly collect personal information from children under 18 years of age.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif text-gray-900">11. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
              <p className="text-gray-700 mb-2"><strong>Friends Factory Cafe</strong></p>
              <p className="text-gray-600 mb-1">{siteConfig.address}</p>
              <p className="text-gray-600 mb-1">Phone: <a href={`tel:${siteConfig.phone}`} className="text-amber-600 hover:text-amber-700">{siteConfig.phone}</a></p>
              <p className="text-gray-600">WhatsApp: <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-amber-600 hover:text-amber-700">{siteConfig.phone}</a></p>
            </div>

          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
