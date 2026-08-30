import { Metadata } from 'next';
import FFCMenuPage from '@/components/ffc-menu-page';

export const metadata: Metadata = {
  title: 'Menu | Friends Factory Cafe Vadodara',
  description: 'Explore our curated café-style menu crafted for romantic dates & private celebrations. Welcome drink, cheese fondue, snacks & desserts at Friends Factory Cafe.',
  keywords: 'friends factory cafe menu, romantic dinner menu vadodara, candlelight dinner food, couple cafe menu',
  alternates: {
    canonical: '/menu',
  },
};

export default function MenuPage() {
  return <FFCMenuPage />;
}
