import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FFCBlogPostPage from '@/components/ffc-blog-post-page';
import { getBlogBySlug, blogPosts } from '@/lib/ffc-config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Friends Factory Cafe',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <FFCBlogPostPage post={post} />;
}
