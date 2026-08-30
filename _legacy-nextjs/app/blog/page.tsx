import { Metadata } from 'next';
import FFCBlogPage from '@/components/ffc-blog-page';

export const metadata: Metadata = {
  title: 'Blog | Celebration Ideas & Tips | Friends Factory Cafe Vadodara',
  description: 'Discover celebration tips, romantic date ideas, birthday surprise guides, and more. Get inspired for your next special occasion at Friends Factory Cafe Vadodara.',
  keywords: 'celebration blog, birthday ideas vadodara, romantic date tips, proposal ideas, anniversary celebration guide',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return <FFCBlogPage />;
}
