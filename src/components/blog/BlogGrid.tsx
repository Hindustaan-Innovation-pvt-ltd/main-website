"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Clock, ArrowUpRight, Bot, Globe, Cloud, Zap, TrendingUp, Brain, Loader2 } from "lucide-react";
import Link from "next/link";

/* ── Icon map ── */
const IconMap: Record<string, React.FC<{ className?: string }>> = {
  Bot,
  Globe,
  Cloud,
  Zap,
  TrendingUp,
  Brain,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

interface Post {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  coverGradient: string;
  accentColor: string;
  accentBg: string;
  icon: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

interface Category {
  id: string;
  label: string;
  count?: number;
}

function BlogCard({ post }: { post: Post }) {
  const Icon = IconMap[post.icon] ?? Bot;

  return (
    <motion.article
      variants={cardVariants}
      layout
      className="group flex flex-col bg-white rounded-3xl border-t-2 border-zinc-200 outline outline-black/5 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 relative"
    >
      {/* Gradient banner */}
      <div className={`h-44 bg-gradient-to-br ${post.coverGradient} relative flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.02)_0%,transparent_60%)]" />
        <div className={`w-16 h-16 rounded-2xl ${post.accentBg} border backdrop-blur-sm flex items-center justify-center`}>
          <Icon className={`w-7 h-7 ${post.accentColor}`} />
        </div>
        {/* Category badge */}
        <span className={`absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${post.accentBg} border ${post.accentColor} backdrop-blur-sm`}>
          {post.categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-7 h-7 rounded-full ring-1 ring-black/5 object-cover"
          />
          <div>
            <p className="text-xs text-zinc-700 font-medium leading-none">{post.author.name}</p>
            <p className="text-[10px] text-zinc-500 leading-none mt-0.5">{post.date}</p>
          </div>
          <div className="ml-auto flex items-center gap-1 text-zinc-500">
            <Clock className="w-3 h-3" />
            <span className="text-[11px]">{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-zinc-900 mb-2 leading-snug group-hover:text-black transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-zinc-500 bg-zinc-100 border border-black/5 rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/blog/${post.slug}`}
          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${post.accentColor} hover:gap-3 transition-all duration-200`}
        >
          Read Article <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  );
}

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/blogs/categories");
        const data = await response.json();
        if (data.success) {
          setCategories(data.categories || []);
        } else {
          setError(data.error || "Failed to fetch categories");
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  // Fetch posts when category changes
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (activeCategory !== "all") {
          params.append("category", activeCategory);
        }
        params.append("limit", "50"); // Get all posts for now

        const response = await fetch(`/api/blogs?${params}`);
        const data = await response.json();

        if (data.success) {
          setPosts(data.data || []);
        } else {
          setError(data.error || "Failed to fetch posts");
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeCategory]);

  return (
    <section className="relative z-10 w-full max-w-[1800px] mx-auto px-4 py-20">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-14">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            disabled={loading}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-zinc-100 text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                : "bg-zinc-100/60 border border-white/8 text-zinc-600 hover:text-zinc-200 hover:bg-zinc-800/60 disabled:opacity-50 disabled:cursor-not-allowed"
            }`}
          >
            {cat.label}
            {cat.count !== undefined && (
              <span className="ml-2 text-xs opacity-70">({cat.count})</span>
            )}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Loader2 className="w-8 h-8 text-zinc-600 animate-spin" />
          <p className="text-zinc-500">Loading blog posts...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <div className="text-red-500 font-semibold">Error Loading Posts</div>
          <p className="text-zinc-500 text-sm">{error}</p>
          <button
            onClick={() => setActiveCategory("all")}
            className="mt-4 px-4 py-2 bg-zinc-100 border border-white/8 rounded-lg text-sm hover:bg-zinc-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Posts Grid */}
      {!loading && !error && (
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Empty State */}
      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-24 text-zinc-500">
          <p className="text-lg">No posts in this category yet.</p>
        </div>
      )}
    </section>
  );
}
