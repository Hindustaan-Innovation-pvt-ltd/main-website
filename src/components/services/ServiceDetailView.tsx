"use client";

import { motion, type Variants } from "motion/react";
import {
  ArrowLeft, Check, ArrowUpRight, Layers,
  Globe, Smartphone, Palette, ShoppingCart, Code2, Megaphone, Wrench,
  Bot, Brain, TrendingUp, Eye, Cpu, Cloud, Server, GitBranch, Shield,
  Database, Plug, Lock, Package, BarChart2, Zap, Settings,
  FlaskConical, HardDrive, Mail, MapPin, Sparkles,
} from "lucide-react";
import Link from "next/link";
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import { Navbar2 } from "@/components/landing/navbar2";
import Footer2 from "@/components/landing/footer2";
import servicesData from "@/services.json";

/* ── Icon map ── */
const IconMap: Record<string, React.FC<{ className?: string }>> = {
  Globe, Smartphone, Palette, ShoppingCart, Code2, Megaphone, Wrench,
  Bot, Brain, TrendingUp, Eye, Cpu, Cloud, Server, GitBranch, Shield,
  Database, Plug, Lock, Package, BarChart2, Zap, Settings,
  FlaskConical, HardDrive, Mail, MapPin, Sparkles,
};

/* ── Accent → gradient map ── */
const accentToGradient: Record<string, string> = {
  "text-blue-400": "from-blue-900/50 via-blue-950/30 to-zinc-950",
  "text-purple-400": "from-purple-900/50 via-purple-950/30 to-zinc-950",
  "text-pink-400": "from-pink-900/50 via-pink-950/30 to-zinc-950",
  "text-green-400": "from-green-900/50 via-green-950/30 to-zinc-950",
  "text-orange-400": "from-orange-900/50 via-orange-950/30 to-zinc-950",
  "text-yellow-400": "from-yellow-900/50 via-yellow-950/30 to-zinc-950",
  "text-cyan-400": "from-cyan-900/50 via-cyan-950/30 to-zinc-950",
  "text-indigo-400": "from-indigo-900/50 via-indigo-950/30 to-zinc-950",
  "text-violet-400": "from-violet-900/50 via-violet-950/30 to-zinc-950",
  "text-emerald-400": "from-emerald-900/50 via-emerald-950/30 to-zinc-950",
  "text-rose-400": "from-rose-900/50 via-rose-950/30 to-zinc-950",
  "text-sky-400": "from-sky-900/50 via-sky-950/30 to-zinc-950",
  "text-teal-400": "from-teal-900/50 via-teal-950/30 to-zinc-950",
  "text-lime-400": "from-lime-900/50 via-lime-950/30 to-zinc-950",
  "text-red-400": "from-red-900/50 via-red-950/30 to-zinc-950",
  "text-amber-400": "from-amber-900/50 via-amber-950/30 to-zinc-950",
  "text-fuchsia-400": "from-fuchsia-900/50 via-fuchsia-950/30 to-zinc-950",
  "text-blue-300": "from-blue-900/50 via-blue-950/30 to-zinc-950",
  "text-red-300": "from-red-900/50 via-red-950/30 to-zinc-950",
  "text-violet-300": "from-violet-900/50 via-violet-950/30 to-zinc-950",
  "text-green-300": "from-green-900/50 via-green-950/30 to-zinc-950",
  "text-yellow-300": "from-yellow-900/50 via-yellow-950/30 to-zinc-950",
  "text-cyan-300": "from-cyan-900/50 via-cyan-950/30 to-zinc-950",
  "text-indigo-300": "from-indigo-900/50 via-indigo-950/30 to-zinc-950",
  "text-pink-300": "from-pink-900/50 via-pink-950/30 to-zinc-950",
  "text-rose-300": "from-rose-900/50 via-rose-950/30 to-zinc-950",
  "text-lime-300": "from-lime-900/50 via-lime-950/30 to-zinc-950",
  "text-sky-300": "from-sky-900/50 via-sky-950/30 to-zinc-950",
};

const accentToBg: Record<string, string> = {
  "text-blue-400": "bg-blue-500/10 border-blue-500/20",
  "text-purple-400": "bg-purple-500/10 border-purple-500/20",
  "text-pink-400": "bg-pink-500/10 border-pink-500/20",
  "text-green-400": "bg-green-500/10 border-green-500/20",
  "text-orange-400": "bg-orange-500/10 border-orange-500/20",
  "text-yellow-400": "bg-yellow-500/10 border-yellow-500/20",
  "text-cyan-400": "bg-cyan-500/10 border-cyan-500/20",
  "text-indigo-400": "bg-indigo-500/10 border-indigo-500/20",
  "text-violet-400": "bg-violet-500/10 border-violet-500/20",
  "text-emerald-400": "bg-emerald-500/10 border-emerald-500/20",
  "text-rose-400": "bg-rose-500/10 border-rose-500/20",
  "text-sky-400": "bg-sky-500/10 border-sky-500/20",
  "text-teal-400": "bg-teal-500/10 border-teal-500/20",
  "text-lime-400": "bg-lime-500/10 border-lime-500/20",
  "text-red-400": "bg-red-500/10 border-red-500/20",
  "text-amber-400": "bg-amber-500/10 border-amber-500/20",
  "text-fuchsia-400": "bg-fuchsia-500/10 border-fuchsia-500/20",
  "text-blue-300": "bg-blue-500/10 border-blue-500/20",
  "text-red-300": "bg-red-500/10 border-red-500/20",
  "text-violet-300": "bg-violet-500/10 border-violet-500/20",
  "text-green-300": "bg-green-500/10 border-green-500/20",
  "text-yellow-300": "bg-yellow-500/10 border-yellow-500/20",
  "text-cyan-300": "bg-cyan-500/10 border-cyan-500/20",
  "text-indigo-300": "bg-indigo-500/10 border-indigo-500/20",
  "text-pink-300": "bg-pink-500/10 border-pink-500/20",
  "text-rose-300": "bg-rose-500/10 border-rose-500/20",
  "text-lime-300": "bg-lime-500/10 border-lime-500/20",
  "text-sky-300": "bg-sky-500/10 border-sky-500/20",
};

/* ── WHY US bullets (static) ── */
const WHY_US = [
  "End-to-end delivery from design to deployment",
  "Dedicated project manager & transparent communication",
  "On-time delivery with post-launch support",
  "Scalable architecture built for growth",
  "Competitive pricing with no hidden costs",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

interface Props {
  serviceId: string;
}

export function ServiceDetailView({ serviceId }: Props) {
  /* Find card + parent category */
  let card: any = null;
  let category: any = null;

  for (const cat of servicesData.categories) {
    const found = cat.cards.find((c: any) => c.id === serviceId);
    if (found) { card = found; category = cat; break; }
  }

  if (!card || !category) return null;

  const Icon = IconMap[card.icon] ?? Globe;
  const gradient = accentToGradient[card.accent] ?? "from-zinc-900 to-zinc-950";
  const accentBg  = accentToBg[card.accent]  ?? "bg-white/5 border-black/10";

  /* Other services in the same category (excluding current) */
  const relatedCards = category.cards.filter((c: any) => c.id !== card.id).slice(0, 3);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">

      {/* ── HERO ── */}
      <div className={`relative min-h-[60vh] flex flex-col overflow-hidden bg-gradient-to-br ${gradient}`}>
        
        <Navbar2 />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-8 pb-20 text-center max-w-4xl mx-auto w-full"
        >
          {/* Back */}
          <motion.div variants={itemVariants} className="w-full flex justify-start mb-8 mt-24">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-white transition-colors bg-white/10 dark:bg-black/30 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
          </motion.div>

          {/* Category pill */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
            <Layers className="w-3.5 h-3.5 text-zinc-300" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-200">{category.pill}</span>
          </motion.div>

          {/* Icon */}
          <motion.div variants={itemVariants} className={`w-20 h-20 rounded-3xl ${accentBg} border flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,255,255,0.05)]`}>
            <Icon className={`w-9 h-9 ${card.accent}`} />
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            {card.title}
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-zinc-200 max-w-2xl leading-relaxed mb-8">
            {card.description}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <Link
              href={`/contact?subject=${encodeURIComponent(card.title)}`}
              className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:scale-105"
            >
              Get Started <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── BODY ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">

          {/* LEFT — What's included */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-1 h-6 rounded-full ${card.accent.replace("text-", "bg-")}`} />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">What's Included</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-sm leading-relaxed">
                Everything you get when you choose <span className={card.accent}>{card.title}</span> from Hindustaan Innovations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {card.items.map((item: string, i: number) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className={`flex items-center gap-3 p-4 rounded-2xl ${accentBg} border group hover:brightness-110 transition-all`}
                  >
                    <div className={`w-8 h-8 rounded-xl ${accentBg} border flex items-center justify-center shrink-0`}>
                      <Check className={`w-4 h-4 ${card.accent}`} />
                    </div>
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-14"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className={`w-1 h-6 rounded-full ${card.accent.replace("text-", "bg-")}`} />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Our Process</h2>
              </div>

              <div className="flex flex-col gap-0">
                {["Discovery & Requirement Analysis", "Design & Architecture Planning", "Development & Quality Testing", "Deployment & Launch", "Ongoing Support & Optimization"].map((step, i) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-9 h-9 rounded-full ${accentBg} border flex items-center justify-center shrink-0 text-xs font-bold ${card.accent}`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {i < 4 && <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-800 my-1" />}
                    </div>
                    <div className="pb-8 pt-1.5">
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Sidebar */}
          <div className="flex flex-col gap-5 sticky top-24 self-start">

            {/* Why Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 rounded-2xl p-6 shadow-xs"
            >
              <h3 className={`text-sm font-bold mb-4 ${card.accent}`}>Why Choose Us?</h3>
              <ul className="flex flex-col gap-3">
                {WHY_US.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${card.accent}`} />
                    <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`bg-gradient-to-br ${gradient} border border-white/10 rounded-2xl p-6 text-center shadow-lg`}
            >
              <div className={`w-12 h-12 rounded-2xl ${accentBg} border flex items-center justify-center mx-auto mb-4`}>
                <Icon className={`w-6 h-6 ${card.accent}`} />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Ready to get started?</p>
              <p className="text-xs text-zinc-300 mb-4">Book a free consultation with our experts</p>
              <Link
                href="tel:+917712994005"
                className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all w-full justify-center"
              >
                Book Free Call <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Category info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 rounded-2xl p-5 shadow-xs"
            >
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-2">Category</p>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{category.heading} {category.headingItalic}</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">{category.subheading}</p>
              <Link href="/services#categories" className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 mt-3 transition-colors">
                View all in category <ArrowUpRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── Related Services ── */}
        {relatedCards.length > 0 && (
          <div className="mt-20 pt-12 border-t border-zinc-200/80 dark:border-white/10">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedCards.map((r: any) => {
                const RelIcon = IconMap[r.icon] ?? Globe;
                const rBg = accentToBg[r.accent] ?? "bg-white/5 border-black/10";
                return (
                  <Link
                    key={r.id}
                    href={`/services/${r.id}`}
                    className="group flex flex-col bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 rounded-2xl p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-xs transition-all duration-200"
                  >
                    <div className={`w-10 h-10 rounded-xl ${rBg} border flex items-center justify-center mb-4`}>
                      <RelIcon className={`w-5 h-5 ${r.accent}`} />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors mb-2 leading-snug">{r.title}</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">{r.description}</p>
                    <div className={`inline-flex items-center gap-1 text-xs font-semibold mt-4 ${r.accent}`}>
                      Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer2 />
    </div>
  );
}
