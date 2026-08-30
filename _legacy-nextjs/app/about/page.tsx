import { Metadata } from 'next';
import FFCAboutPage from '@/components/ffc-about-page';

export const metadata: Metadata = {
  title: 'About Us | Friends Factory Cafe - Surprise Planning Experts Vadodara',
  description: 'Meet Friends Factory Cafe - Vadodara\'s #1 surprise planning experts. We specialize in birthday surprises, anniversary surprises, surprise proposals & romantic surprise celebrations. 3000+ surprises delivered!',
  keywords: 'about friends factory cafe, surprise planners vadodara, surprise planning experts, best surprise venue vadodara',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <FFCAboutPage />;
}
