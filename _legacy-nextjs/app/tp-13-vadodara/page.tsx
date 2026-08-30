import { Metadata } from 'next';
import FFCAreaPage from '@/components/ffc-area-page';
import { getAreaBySlug } from '@/lib/ffc-config';

const area = getAreaBySlug('tp-13-vadodara');

export const metadata: Metadata = {
  title: area ? `Surprise Celebrations Near ${area.name} | Friends Factory Cafe Vadodara` : 'Friends Factory Cafe',
  description: area ? `Plan amazing birthday surprises, anniversary surprises & romantic surprises near ${area.name}, Vadodara. 100% private rooftop venue with stunning decorations at Friends Factory Cafe.` : '',
  alternates: {
    canonical: '/tp-13-vadodara',
  },
};

export default function Page() {
  if (!area) return null;
  return <FFCAreaPage area={area} />;
}
