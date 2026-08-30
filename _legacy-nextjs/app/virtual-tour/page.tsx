import { Metadata } from 'next';
import FFCVirtualTourPage from '@/components/ffc-virtual-tour-page';

export const metadata: Metadata = {
  title: 'Virtual Tour | Friends Factory Cafe Vadodara',
  description: 'Take a virtual tour of Friends Factory Cafe Vadodara. Explore our romantic rooftop setups, glass houses, and beautiful celebration spaces.',
  keywords: 'virtual tour friends factory cafe, romantic venue tour vadodara, couple cafe photos, celebration venue gallery',
  alternates: {
    canonical: '/virtual-tour',
  },
};

export default function VirtualTourPage() {
  return <FFCVirtualTourPage />;
}
