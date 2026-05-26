import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailView } from "@/components/blog/BlogDetailView";
import blogsData from "@/blog.json";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render all known blog slugs at build time
export async function generateStaticParams() {
  return blogsData.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.posts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Hindustaan Innovations Blog`,
    description: post.excerpt,
    icons: { icon: "/logo.png" },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // Find the blog post directly from JSON — no HTTP fetch needed
  const post = blogsData.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts: same category, exclude current
  const related = blogsData.posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)
    .map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      categoryLabel: p.categoryLabel,
      date: p.date,
      readTime: p.readTime,
      icon: p.icon,
      accentColor: p.accentColor,
      accentBg: p.accentBg,
    }));

  // Navigation: prev/next by date
  const sorted = [...blogsData.posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const idx = sorted.findIndex((p) => p.id === post.id);
  const navigation = {
    previous:
      idx < sorted.length - 1
        ? {
            id: sorted[idx + 1].id,
            slug: sorted[idx + 1].slug,
            title: sorted[idx + 1].title,
            date: sorted[idx + 1].date,
          }
        : null,
    next:
      idx > 0
        ? {
            id: sorted[idx - 1].id,
            slug: sorted[idx - 1].slug,
            title: sorted[idx - 1].title,
            date: sorted[idx - 1].date,
          }
        : null,
  };

  return (
    <BlogDetailView
      post={post}
      related={related}
      navigation={navigation}
    />
  );
}
