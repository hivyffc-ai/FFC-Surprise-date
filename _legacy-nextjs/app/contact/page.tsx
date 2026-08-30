import { Metadata } from 'next';
import FFCContactPage from '@/components/ffc-contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | Plan Your Surprise - Friends Factory Cafe Vadodara',
  description: 'Ready to plan the perfect surprise? Contact Friends Factory Cafe Vadodara. Book your surprise celebration, get ideas, or visit us. Call +91 74878 88730.',
  keywords: 'contact friends factory cafe, book surprise vadodara, surprise planning contact, surprise venue vadodara contact',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <FFCContactPage />;
}
