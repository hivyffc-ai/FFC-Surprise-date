import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Surprise Packages | Friends Factory Cafe Vadodara',
  description: 'Choose from 8 stunning surprise packages at Friends Factory Cafe Vadodara. Birthday surprise setups, anniversary surprise packages, romantic surprise dates. Starting from ₹6,900.',
  keywords: 'surprise packages vadodara, birthday surprise packages, anniversary surprise packages, romantic surprise setup, friends factory cafe packages',
  alternates: {
    canonical: '/packages',
  },
};

export default function PackagesPage() {
  return <FFCPackagesPage />;
}
