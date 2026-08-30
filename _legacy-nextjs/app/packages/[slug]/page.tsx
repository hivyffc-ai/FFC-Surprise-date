import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FFCPackageDetailPage from '@/components/ffc-package-detail-page';
import { packages, getPackageBySlug } from '@/lib/ffc-config';

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  
  if (!pkg) {
    return {
      title: 'Package Not Found',
    };
  }

  return {
    title: `${pkg.name} ${pkg.emoji} | Friends Factory Cafe Vadodara`,
    description: `${pkg.shortDescription} Book ${pkg.name} at Friends Factory Cafe Vadodara for ₹${pkg.price.toLocaleString()}. Perfect for ${pkg.perfectFor.join(', ')}.`,
    keywords: `${pkg.name}, ${pkg.perfectFor.join(', ')}, romantic celebration vadodara, friends factory cafe`,
    openGraph: {
      title: `${pkg.name} | Friends Factory Cafe`,
      description: pkg.shortDescription,
    },
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return <FFCPackageDetailPage package={pkg} />;
}
