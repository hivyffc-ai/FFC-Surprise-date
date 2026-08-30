import { Metadata } from 'next';
import FFCServicePage from '@/components/ffc-service-page';
import { serviceCategories } from '@/lib/ffc-config';

const service = serviceCategories.find(s => s.slug === 'rooftop-experience')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: `rooftop vadodara, rooftop restaurant vadodara, rooftop dining, sky lounge, terrace dining, open air restaurant vadodara`,
  alternates: {
    canonical: '/rooftop-experience',
  },
};

export default function RooftopExperiencePage() {
  return <FFCServicePage service={service} />;
}
