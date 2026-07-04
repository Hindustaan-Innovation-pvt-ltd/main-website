"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "motion/react";
import {
  Clock, ArrowLeft, Bot, Globe, Cloud, Zap, TrendingUp, Brain,
  Tag, List, Send, CheckCircle2, Loader2, ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import { Navbar2 } from "@/components/landing/navbar2";
import Footer2 from "@/components/landing/footer2";

/* ── Icon map ── */
const IconMap: Record<string, React.FC<{ className?: string }>> = {
  Bot, Globe, Cloud, Zap, TrendingUp, Brain,
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// Type definitions
interface BlogSection {
  heading: string;
  body: string;
}

interface BlogContent {
  intro: string;
  sections: BlogSection[];
  conclusion: string;
}

interface Author {
  name: string;
  role: string;
  avatar: string;
}

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
  author: Author;
  tags: string[];
  content: BlogContent;
}

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  icon: string;
  accentColor: string;
  accentBg: string;
}

interface NavigationPost {
  id: string;
  slug: string;
  title: string;
  date: string;
}

interface Navigation {
  previous: NavigationPost | null;
  next: NavigationPost | null;
}

/* ══════════════════════════════════════════════
   LEFT SIDEBAR — Table of Contents
══════════════════════════════════════════════ */
function TableOfContents({ post, activeSection }: { post: Post; activeSection: number }) {
  const items = [
    { label: "Introduction", idx: -1 },
    ...post.content.sections.map((s, i) => ({ label: s.heading, idx: i })),
    { label: "Key Takeaway", idx: post.content.sections.length },
  ];

  return (
    <aside className="hidden lg:flex flex-col sticky top-24 self-start w-full">
      <div className="bg-zinc-50/60 border border-black/10 rounded-2xl p-5 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5 pb-4 border-b border-black/10">
          <List className="w-4 h-4 text-zinc-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
            Table of Contents
          </span>
        </div>

        {/* Items */}
        <nav className="flex flex-col gap-1">
          {items.map((item, i) => {
            const isActive = activeSection === item.idx;
            return (
              <a
                key={i}
                href={`#section-${item.idx}`}
                className={`flex items-start gap-2 px-3 py-2 rounded-xl text-sm transition-all duration-200 group ${
                  isActive
                    ? `${post.accentColor} bg-black/5 font-semibold`
                    : "text-zinc-500 hover:text-zinc-800 hover:bg-black/5"
                }`}
              >
                <ChevronRight
                  className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-transform duration-200 ${
                    isActive ? "translate-x-0.5" : "opacity-0 group-hover:opacity-50"
                  }`}
                />
                <span className="leading-snug">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Read time */}
        <div className="mt-5 pt-4 border-t border-black/10 flex items-center gap-1.5 text-zinc-600">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs">{post.readTime}</span>
        </div>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════
   RIGHT SIDEBAR — Enquiry Form
══════════════════════════════════════════════ */
type FormState = "idle" | "loading" | "success";

function EnquiryForm({ post }: { post: Post }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate submit
    setTimeout(() => setStatus("success"), 1800);
  };

  return (
    <aside className="hidden lg:flex flex-col sticky top-24 self-start w-full">
      <div className={`bg-zinc-50/60 border border-black/10 rounded-2xl p-5 backdrop-blur-sm`}>
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-8 h-8 rounded-xl ${post.accentBg} border flex items-center justify-center shrink-0`}>
            <Send className={`w-3.5 h-3.5 ${post.accentColor}`} />
          </div>
          <h3 className="text-sm font-bold text-zinc-900">Quick Enquiry</h3>
        </div>
        <p className="text-xs text-zinc-500 mb-5 pl-10">
          Interested in this topic? Let's talk!
        </p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3 py-8 text-center"
          >
            <div className={`w-14 h-14 rounded-2xl ${post.accentBg} border flex items-center justify-center`}>
              <CheckCircle2 className={`w-7 h-7 ${post.accentColor}`} />
            </div>
            <p className="text-sm font-semibold text-zinc-900">Message Sent!</p>
            <p className="text-xs text-zinc-500">We'll get back to you within 24 hours.</p>
            <button
              type="button"
              onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
              className="text-xs text-zinc-500 hover:text-zinc-600 underline underline-offset-2 mt-1 transition-colors"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-600">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Rahul Sharma"
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-300 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-600">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="rahul@company.com"
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-300 transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-600">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="I'd like to know more about..."
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-300 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 mt-1 ${
                status === "loading"
                  ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                  : `${post.accentBg} border ${post.accentColor} hover:brightness-125`
              }`}
            >
              {status === "loading" ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
              ) : (
                <><Send className="w-4 h-4" /> Send Enquiry</>
              )}
            </button>
          </form>
        )}

        {/* Direct contact */}
        <div className="mt-4 pt-4 border-t border-black/10 text-center">
          <p className="text-[11px] text-zinc-600 mb-1">Or reach us directly</p>
          <a
            href="mailto:info@hindustaan.in"
            className="text-xs text-zinc-500 hover:text-zinc-600 transition-colors"
          >
            info@hindustaan.in
          </a>
        </div>
      </div>

      {/* CTA Card */}
      <div className={`mt-4 bg-gradient-to-br ${post.coverGradient} border border-black/10 rounded-2xl p-5 text-center`}>
        <p className="text-xs text-zinc-600 font-medium mb-1">Want a custom solution?</p>
        <p className="text-[11px] text-zinc-500 mb-4">Book a free strategy call with our team</p>
        <Link
          href="/contact"
          className={`inline-flex items-center gap-1.5 text-xs font-semibold ${post.accentColor} bg-zinc-50/60 border border-black/10 px-4 py-2 rounded-xl hover:bg-zinc-50 transition-colors`}
        >
          Book a Call <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT — Blog Detail View
══════════════════════════════════════════════ */
export function BlogDetailView({
  post,
  related = [],
  navigation,
}: {
  post: Post;
  related?: RelatedPost[];
  navigation?: Navigation;
}) {
  const Icon = IconMap[post.icon] ?? Bot;
  const [activeSection, setActiveSection] = useState(-1);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Intersection observer for active TOC item
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const allSections = [
      document.getElementById("section--1"),
      ...post.content.sections.map((_, i) => document.getElementById(`section-${i}`)),
      document.getElementById(`section-${post.content.sections.length}`),
    ];

    allSections.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(i - 1); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [post]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] text-black">

      {/* ── Hero Banner ── */}
      <div className={`relative min-h-[55vh] flex flex-col overflow-hidden bg-gradient-to-br ${post.coverGradient}`}>
        
        <Navbar2 />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-8 pb-16 text-center max-w-4xl mx-auto w-full"
        >
          {/* Back link */}
          <motion.div variants={itemVariants} className="w-full flex justify-start mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-md mb-6"
          >
            <Icon className="w-3.5 h-3.5" />
            {post.categoryLabel}
          </motion.span>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4 md:mb-6 px-2 text-center max-w-4xl"
          >
            {post.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full ring-2 ring-white/10 object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-zinc-400">{post.author.role}</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <span className="text-xs text-zinc-300">{post.date}</span>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs">{post.readTime}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── 3-column layout ── */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_240px] xl:grid-cols-[240px_1fr_260px] gap-8 items-start">

          {/* LEFT — Table of Contents */}
          <TableOfContents post={post} activeSection={activeSection} />

          {/* CENTER — Article */}
          <main className="min-w-0">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10" id="section--1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`flex items-center gap-1.5 text-xs font-medium ${post.accentColor} ${post.accentBg} border rounded-full px-3 py-1`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-zinc-600 leading-relaxed mb-12 border-l-2 border-black/10 pl-5 italic"
            >
              {post.content.intro}
            </motion.p>

            {/* Sections */}
            <div className="space-y-14">
              {post.content.sections.map((section, i) => (
                <motion.section
                  key={i}
                  id={`section-${i}`}
                  ref={(el) => { sectionRefs.current[i] = el; }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h2 className={`text-2xl font-bold mb-5 flex items-center gap-3 ${post.accentColor}`}>
                    <span className="text-xs font-mono text-zinc-600 bg-zinc-50 border border-black/10 rounded-lg px-2 py-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.body.split("\n\n").map((para, j) => (
                      <p key={j} className="text-zinc-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Conclusion / Key Takeaway */}
            <motion.div
              id={`section-${post.content.sections.length}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className={`mt-14 p-6 rounded-2xl ${post.accentBg} border`}
            >
              <h3 className={`text-lg font-semibold mb-3 ${post.accentColor}`}>Key Takeaway</h3>
              <p className="text-zinc-600 leading-relaxed">{post.content.conclusion}</p>
            </motion.div>

            {/* Mobile Enquiry CTA */}
            <div className="lg:hidden mt-10 p-5 bg-zinc-50/60 border border-black/10 rounded-2xl text-center">
              <p className="text-sm font-semibold text-zinc-900 mb-1">Interested in this topic?</p>
              <p className="text-xs text-zinc-500 mb-4">Get in touch with our team today</p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${post.accentColor} ${post.accentBg} border px-5 py-2.5 rounded-xl`}
              >
                <Send className="w-4 h-4" /> Contact Us
              </Link>
            </div>
          </main>

          {/* RIGHT — Enquiry Form */}
          <EnquiryForm post={post} />
        </div>
      </div>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="relative z-10 w-full max-w-[1800px] mx-auto px-4 pb-20">
          <div className="border-t border-black/10 pt-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {related.map((r) => {
                const RelIcon = IconMap[r.icon] ?? Bot;
                return (
                  <Link
                    key={r.id}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col bg-zinc-50/60 border border-black/10 rounded-2xl p-5 hover:bg-zinc-50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl ${r.accentBg} border flex items-center justify-center mb-4`}>
                      <RelIcon className={`w-5 h-5 ${r.accentColor}`} />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900 transition-colors mb-1 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-auto pt-3 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {r.readTime}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer2 />
    </div>
  );
}
