import { Metadata } from 'next';
import FFCKeywordPage from '@/components/ffc-keyword-page';
import { getServiceBySlug, getKeywordBySlug } from '@/lib/ffc-config';

const service = getServiceBySlug('proposal');
const keyword = getKeywordBySlug('proposal', 'surprise-proposal-vadodara');

export const metadata: Metadata = {
  title: keyword?.metaTitle || 'Friends Factory Cafe',
  description: keyword?.metaDescription || '',
  alternates: {
    canonical: '/surprise-proposal-vadodara',
  },
};

export default function Page() {
  if (!service || !keyword) return null;
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
