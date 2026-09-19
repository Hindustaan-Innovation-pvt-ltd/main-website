"use client";

import { motion, type Variants } from "motion/react";
import {
  Lightbulb,
  Target,
  Heart,
  Users,
  Handshake,
  Eye,
  BookOpen,
  Zap,
  Shield,
  TrendingUp,
  ArrowUpRight,
  Globe,
  Smartphone,
  Megaphone,
  Bot,
  Cloud,
  ShoppingCart,
  Code2,
} from "lucide-react";
import Image from "next/image";
import { Navbar2 } from "@/components/landing/navbar2";
import Footer2 from "@/components/landing/footer2";
import Link from "next/link";

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ─── Pill Badge ───────────────────────────────────────────────────────────────

function Pill({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-full px-3.5 py-1.5 shadow-xs w-fit">
      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700 dark:text-zinc-300" />
      <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-200 uppercase">{label}</span>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  icon,
  pill,
  heading,
  italic,
  sub,
}: {
  icon: React.ElementType;
  pill: string;
  heading: string;
  italic: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6 lg:gap-12 text-left w-full">
      <div className="max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 sm:mb-6"
        >
          <Pill icon={icon} label={pill} />
        </motion.div>
        
        <motion.h2 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.15] tracking-tight"
        >
          {heading}{" "}
          <span className="text-[#1ba453]">{italic}</span>
        </motion.h2>
      </div>
      
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-lg lg:pb-2"
      >
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
          {sub}
        </p>
      </motion.div>
    </div>
  );
}

// ─── 1. About Hero ────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <div className="relative min-h-[50vh] lg:min-h-[70vh] flex flex-col overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-linear-to-r after:from-transparent after:via-black/10 dark:after:via-white/10 after:to-transparent">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 lg:pt-32 pb-8 sm:pb-12 lg:pb-20 max-w-[1800px] mx-auto w-full text-center gap-6 sm:gap-8"
      >
        {/* Pill */}
        <motion.div variants={fadeUp} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">About Hindustaan Innovations</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-zinc-900 dark:text-white"
        >
          Built for India&apos;s
          <br />
          Next-Gen <span className="text-[#1ba453]">Entrepreneurs.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={fadeUp} className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed px-2">
          We are a software development company helping businesses design, build, and scale reliable digital products with practical engineering support.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 mt-2 sm:mt-4 w-full max-w-2xl px-1 sm:px-0"
        >
          {[
            { value: "SEO", label: "Optimized & Fast" },
            { value: "On-Time", label: "Project Delivery" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <motion.div
              variants={fadeUp}
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 rounded-xl sm:rounded-2xl p-3 sm:px-4 sm:py-5 shadow-xs"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white leading-tight">{stat.value}</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 tracking-wide text-center leading-tight">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── 2. Our Story ─────────────────────────────────────────────────────────────

function OurStory() {
  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 md:py-18 lg:py-24 w-full max-w-[1800px] mx-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-linear-to-r after:from-transparent after:via-black/10 dark:after:via-white/10 after:to-transparent">
      <SectionHeader
        icon={BookOpen}
        pill="Our Story"
        heading="Where It"
        italic="All Began."
        sub="Founded in 2026 with a clear goal: build dependable software for ambitious teams moving fast."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        {/* Story text */}
        <motion.div variants={fadeUp} className="space-y-4 sm:space-y-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
          <p>
            Hindustaan Innovations was founded in 2026 with one simple belief: every Indian business,
            no matter its size, deserves access to world-class software without the complexity
            or the hefty price tag.
          </p>
          <p>
            We are a full-service digital company offering everything from web &amp; app development,
            UI/UX design, and e-commerce solutions to digital marketing, cloud infrastructure,
            AI systems, and custom software — all under one roof.
          </p>
          <p>
            From a company&apos;s first website to a growing agency&apos;s CRM system, or a business
            migrating to the cloud — we build, launch, and support it all. Our goal is to be the
            single technology partner you never have to replace.
          </p>
          <p>
            We are just getting started, and we are already proud to be working with ambitious
            founders and businesses across India who are ready to take their digital presence seriously.
          </p>
        </motion.div>

        {/* Premium service panel */}
        <motion.div
          variants={fadeUp}
          className="relative bg-white dark:bg-zinc-900/90 rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-white/10 overflow-hidden p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 shadow-xs"
        >
          {/* Subtle radial glow bg */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Stats row */}
          <div className="relative grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { value: "5", label: "Service Categories" },
              { value: "18+", label: "Solutions Offered" },
              { value: "1", label: "Trusted Partner" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center bg-zinc-50 dark:bg-zinc-800/60 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-1 border border-zinc-200/60 dark:border-white/5">
                <span className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-tight">{s.value}</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-500 dark:text-zinc-400 text-center leading-tight mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-200/80 dark:bg-white/10 w-full" />

          {/* Bento service grid */}
          <div className="relative grid grid-cols-2 gap-2 sm:gap-2.5">
            {[
              { icon: Globe, label: "Web & App Dev", bg: "from-blue-500/10", border: "border-blue-500/20", color: "text-blue-500 dark:text-blue-400" },
              { icon: Smartphone, label: "Mobile Apps", bg: "from-purple-500/10", border: "border-purple-500/20", color: "text-purple-500 dark:text-purple-400" },
              { icon: Megaphone, label: "Digital Marketing", bg: "from-yellow-500/10", border: "border-yellow-500/20", color: "text-yellow-600 dark:text-yellow-400" },
              { icon: Bot, label: "Product Strategy", bg: "from-indigo-500/10", border: "border-indigo-500/20", color: "text-indigo-500 dark:text-indigo-400" },
              { icon: Cloud, label: "Cloud & DevOps", bg: "from-teal-500/10", border: "border-teal-500/20", color: "text-teal-600 dark:text-teal-400" },
              { icon: ShoppingCart, label: "E-commerce", bg: "from-green-500/10", border: "border-green-500/20", color: "text-green-600 dark:text-green-400" },
              { icon: Code2, label: "Custom Software", bg: "from-orange-500/10", border: "border-orange-500/20", color: "text-orange-500 dark:text-orange-400" },
              { icon: Shield, label: "Security", bg: "from-red-500/10", border: "border-red-500/20", color: "text-red-500 dark:text-red-400" },
            ].map((item) => (
              <div
                key={item.label}
                className={`group flex flex-col gap-1.5 sm:gap-2 bg-gradient-to-br ${item.bg} to-transparent border ${item.border} rounded-xl sm:rounded-2xl p-2.5 sm:p-3 hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-[11px] sm:text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── 2. Mission & Vision ──────────────────────────────────────────────────────

function MissionVision() {
  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 md:py-18 lg:py-24 w-full max-w-[1800px] mx-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-linear-to-r after:from-transparent after:via-black/10 dark:after:via-white/10 after:to-transparent">
      <SectionHeader
        icon={Target}
        pill="Mission & Vision"
        heading="Why We"
        italic="Exist."
        sub="Two principles shape every build, every sprint, and every client partnership."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
      >
        {/* Mission */}
        <motion.div
          variants={fadeUp}
          className="group relative flex flex-col gap-4 sm:gap-6 bg-white dark:bg-zinc-900/90 rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-white/10 p-6 sm:p-8 md:p-10 overflow-hidden shadow-xs"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-700" />
          <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 w-fit">
            <Target className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-2">Mission</p>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-4">
              Build Software That Solves Real Problems
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              To deliver practical, scalable software that helps growing businesses launch faster, streamline operations, and serve customers better through clean engineering and thoughtful product design.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          variants={fadeUp}
          className="group relative flex flex-col gap-4 sm:gap-6 bg-white dark:bg-zinc-900/90 rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-white/10 p-6 sm:p-8 md:p-10 overflow-hidden shadow-xs"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl group-hover:bg-violet-500/10 transition-all duration-700" />
          <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 w-fit">
            <Eye className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-2">Vision</p>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-4">
              Become India&apos;s Most Trusted Technology Partner
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              To become the go-to software partner for early-stage and growth-stage companies by delivering dependable products, transparent collaboration, and long-term technical ownership.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── 3. Our Values ────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: Zap,
    title: "Speed & Execution",
    description:
      "We move fast and ship real solutions. No endless planning cycles — just clear goals, smart builds, and rapid deployment.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We operate with radical honesty. From pricing to timelines, what you see is exactly what you get — no hidden surprises.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "Your success is our success. We go beyond deliverables to genuinely understand your business and deliver outcomes that matter.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Technology keeps evolving, and so do we. We continuously improve our stack, process, and product thinking to keep your software future-ready.",
  },
  {
    icon: Users,
    title: "Team & Community",
    description:
      "We invest in our people and in the broader ecosystem of Indian builders, founders, and creators who are shaping the future.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description:
      "Every solution we build is tied to real metrics: time saved, revenue grown, and costs reduced. Impact you can actually see.",
  },
];

function OurValues() {
  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 md:py-18 lg:py-24 w-full max-w-[1800px] mx-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-linear-to-r after:from-transparent after:via-black/10 dark:after:via-white/10 after:to-transparent">
      <SectionHeader
        icon={Heart}
        pill="Our Values"
        heading="What We"
        italic="Stand For."
        sub="Six principles that guide every conversation, every build, and every partnership."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {VALUES.map((v) => (
          <motion.div
            variants={fadeUp}
            key={v.title}
            className="group flex flex-col gap-4 sm:gap-5 bg-white dark:bg-zinc-900/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-white/10 shadow-xs"
          >
            <div className="p-3.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 w-fit group-hover:scale-110 transition-transform duration-500">
              <v.icon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white">{v.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">{v.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── 4. Meet the Founders ─────────────────────────────────────────────────────

const FOUNDERS = [
  {
    name: "Dineshwar Singh",
    role: "Founding Mentor",
    image: "/ff.jpeg",
    bio: "Their guidance, discipline, and lifelong support played a major role in shaping the vision and values of the company. They continue to inspire the team through integrity, hard work, and dedication.",
    linkedin: "https://www.linkedin.com/",
    badge: "Founder",
    badgeColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-500 dark:text-amber-400",
    glowColor: "bg-amber-500/5 group-hover:bg-amber-500/10",
  },
  {
    name: "Er. Prashant Singh Rajput",
    role: "Founder & CEO",
    image: "/Prashant.jpeg",
    bio: "Visionary entrepreneur behind Hindustaan Innovations. Er. Prashant drives the mission to make intelligent digital systems accessible to every Indian business.",
    linkedin: "https://www.linkedin.com/",
    badge: "Founder",
    badgeColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-500 dark:text-amber-400",
    glowColor: "bg-amber-500/5 group-hover:bg-amber-500/10",
  },
  {
    name: "Renu Devi",
    role: "Cultural Advisor",
    image: "/renu-devi.png",
    bio: "Their encouragement, positivity, and unwavering belief have been a constant source of motivation behind the company’s journey. They represent the care, values, and strength that drive our culture.",
    linkedin: "https://www.linkedin.com/",
    badge: "Founder",
    badgeColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-500 dark:text-amber-400",
    glowColor: "bg-amber-500/5 group-hover:bg-amber-500/10",
  },
];

function OurFounders() {
  const topLevel = FOUNDERS.filter((f) => f.badge === "Founder");

  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 md:py-18 lg:py-24 w-full max-w-[1800px] mx-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-linear-to-r after:from-transparent after:via-black/10 dark:after:via-white/10 after:to-transparent">
      <SectionHeader
        icon={Users}
        pill="Meet the Founders"
        heading="The Minds"
        italic="Behind It."
        sub="A team of visionary leaders and passionate builders united by one mission — to power India's next generation of businesses through technology."
      />

      <div className="flex flex-col gap-8 sm:gap-12 mt-8 sm:mt-12 lg:mt-16">
        {/* Row 1: Founders & Mentors */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8"
        >
          {topLevel.map((founder, index) => (
            <div
              key={founder.name}
              className={index === 2 ? "sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 w-full" : "w-full"}
            >
              <FounderCard founder={founder} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FounderCard({ founder }: { founder: (typeof FOUNDERS)[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col items-center text-center gap-4 sm:gap-5 bg-white dark:bg-zinc-900/90 rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-white/10 p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-xs overflow-hidden h-full w-full"
    >
      {/* Glow bg */}
      <div
        className={`absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${founder.glowColor}`}
      />
      <div
        className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${founder.glowColor}`}
      />

      {/* Avatar */}
      <div className="relative shrink-0">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-500 ring-2 ring-white/5">
          <Image
            src={founder.image}
            alt={founder.name}
            width={160}
            height={160}
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Online dot */}
        <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-500/90 rounded-full border-2 border-white dark:border-zinc-900 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
      </div>

      {/* Badge */}
      <span
        className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase border bg-gradient-to-r ${founder.badgeColor}`}
      >
        {founder.badge}
      </span>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 dark:text-white">{founder.name}</h3>
        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wide">{founder.role}</p>
      </div>

      {/* Bio */}
      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed flex-1">{founder.bio}</p>
    </motion.div>
  );
}

// ─── 5. How We Help ───────────────────────────────────────────────────────────

const HOW_WE_HELP = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We begin with a focused discovery call to understand your goals, current setup, and the highest-impact software priorities.",
  },
  {
    step: "02",
    title: "Product & Delivery Blueprint",
    description:
      "We define architecture, scope, milestones, and timelines so you get a clear execution plan before development starts.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    description:
      "We develop your product with modern engineering practices and integrate it with your existing tools, data, and workflows.",
  },
  {
    step: "04",
    title: "Launch, Train & Scale",
    description:
      "We launch together, support your team, track product performance, and iterate quickly as your business grows.",
  },
];

function HowWeHelp() {
  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 md:py-18 lg:py-24 w-full max-w-[1800px] mx-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-linear-to-r after:from-transparent after:via-black/10 dark:after:via-white/10 after:to-transparent">
      <SectionHeader
        icon={Handshake}
        pill="How We Help"
        heading="From Idea to"
        italic="Execution."
        sub="A clear process built for fast execution, with no confusion about what happens next."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="w-full bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 shadow-xs"
      >
        {HOW_WE_HELP.map((item) => (
          <motion.div
            variants={fadeUp}
            key={item.step}
            className="group flex gap-4 sm:gap-6 items-start"
          >
            {/* Step number */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                {item.step}
              </div>
            </div>

            {/* Content */}
            <div className="pb-4 sm:pb-6">
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-1.5">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA nudge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 lg:mt-14"
      >
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Ready to get started?</p>
        <Link href="tel:+917712994005" target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="flex items-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
          >
            Book a Free Call
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────

export function AboutUs() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-200">
      <Navbar2 />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurValues />
      <OurFounders />
      <HowWeHelp />
      <Footer2 />
    </div>
  );
}
