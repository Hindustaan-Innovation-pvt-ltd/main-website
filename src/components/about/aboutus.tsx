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
  Star,
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
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import { Navbar } from "@/components/landing/Navbar";
import { CtaFooter } from "@/components/landing/CtaFooter";
import { FooterBar } from "@/components/landing/FooterBar";
import Link from "next/link";

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// ─── Pill Badge ───────────────────────────────────────────────────────────────

function Pill({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-full px-4 py-1.5 shadow-lg w-fit mx-auto">
      <Icon className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
      <span className="text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">{label}</span>
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
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center text-center gap-4 mb-14"
    >
      <Pill icon={icon} label={pill} />
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {heading}{" "}
        <span className="font-serif italic font-light text-zinc-700 dark:text-zinc-300">{italic}</span>
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">{sub}</p>
    </motion.div>
  );
}

// ─── 1. About Hero ────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <div className="relative min-h-[70vh] flex flex-col overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-linear-to-r after:from-transparent after:via-black/20 dark:after:via-white/20 after:to-transparent">
      <Navbar />
      <BackgroundEffects />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-24 max-w-5xl mx-auto w-full text-center gap-8"
      >
        {/* Pill */}
        <motion.div variants={fadeUp} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
          <span className="text-xs font-bold tracking-wider text-zinc-300 uppercase">About Hindustaan Innovations</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          <span className="text-zinc-200">Built for India's</span>
          <br />
          <span className="text-zinc-400">Next-Gen </span>
          <span className="font-serif italic font-light text-zinc-300">Entrepreneurs.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={fadeUp} className="text-zinc-400 text-base md:text-xl max-w-2xl leading-relaxed">
          We are a software development company helping businesses design, build, and scale reliable digital products with practical engineering support.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-3 gap-6 mt-4 w-full max-w-2xl"
        >
          {[
            { value: "30+", label: "Happy Clients" },
            { value: "35+", label: "Projects Delivered" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <motion.div
              variants={fadeUp}
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl px-4 py-5"
            >
              <span className="text-3xl font-bold text-zinc-100">{stat.value}</span>
              <span className="text-xs text-zinc-400 tracking-wide">{stat.label}</span>
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
    <section className="relative z-10 px-4 py-24 w-full max-w-6xl mx-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent">
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
        <motion.div variants={fadeUp} className="space-y-6 text-zinc-400 text-base leading-relaxed">
          <p>
            Hindustaan Innovations was founded in 2026 with one simple belief every Indian business,
            no matter its size, deserves access to world-class software without the complexity
            or the hefty price tag.
          </p>
          <p>
            We are a full-service digital company offering everything from web &amp; app development,
            UI/UX design, and e-commerce solutions to digital marketing, cloud infrastructure,
            systems, and custom software all under one roof.
          </p>
          <p>
            From a company&apos;s first website to a growing agency&apos;s CRM system, or a business
            migrating to the cloud we build, launch, and support it all. Our goal is to be the
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
          className="relative bg-zinc-950 rounded-3xl border border-white/8 overflow-hidden p-6 flex flex-col gap-5"
        >
          {/* Subtle radial glow bg */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Stats row */}
          <div className="relative grid grid-cols-3 gap-3">
            {[
              { value: "5", label: "Service Categories" },
              { value: "18+", label: "Solutions Offered" },
              { value: "1", label: "Trusted Partner" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center bg-white/3 rounded-2xl py-3 border border-white/5">
                <span className="text-2xl font-bold text-zinc-100">{s.value}</span>
                <span className="text-[10px] text-zinc-500 text-center leading-tight mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5 w-full" />

          {/* Bento service grid */}
          <div className="relative grid grid-cols-2 gap-2.5">
            {[
              { icon: Globe, label: "Web & App Dev", bg: "from-blue-500/10", border: "border-blue-500/20", color: "text-blue-400" },
              { icon: Smartphone, label: "Mobile Apps", bg: "from-purple-500/10", border: "border-purple-500/20", color: "text-purple-400" },
              { icon: Megaphone, label: "Digital Marketing", bg: "from-yellow-500/10", border: "border-yellow-500/20", color: "text-yellow-400" },
              { icon: Bot, label: "Product Strategy", bg: "from-indigo-500/10", border: "border-indigo-500/20", color: "text-indigo-400" },
              { icon: Cloud, label: "Cloud & DevOps", bg: "from-teal-500/10", border: "border-teal-500/20", color: "text-teal-400" },
              { icon: ShoppingCart, label: "E-commerce", bg: "from-green-500/10", border: "border-green-500/20", color: "text-green-400" },
              { icon: Code2, label: "Custom Software", bg: "from-orange-500/10", border: "border-orange-500/20", color: "text-orange-400" },
              { icon: Shield, label: "Security", bg: "from-red-500/10", border: "border-red-500/20", color: "text-red-400" },
            ].map((item) => (
              <div
                key={item.label}
                className={`group flex flex-col gap-2 bg-gradient-to-br ${item.bg} to-transparent border ${item.border} rounded-2xl px-3 py-3 hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-[11px] font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight">{item.label}</span>
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
    <section className="relative z-10 px-4 py-24 w-full max-w-6xl mx-auto">
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
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Mission */}
        <motion.div
          variants={fadeUp}
          className="group relative flex flex-col gap-6 bg-black rounded-3xl border-t-2 border-white/25 outline outline-white/10 p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-700" />
          <div className="p-3 bg-[#151515] rounded-xl border border-white/5 w-fit">
            <Target className="w-5 h-5 text-zinc-300" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">Mission</p>
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">
              Build Software That Solves Real Problems
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              To deliver practical, scalable software that helps growing businesses launch faster, streamline operations, and serve customers better through clean engineering and thoughtful product design.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          variants={fadeUp}
          className="group relative flex flex-col gap-6 bg-black rounded-3xl border-t-2 border-white/25 outline outline-white/10 p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl group-hover:bg-violet-500/10 transition-all duration-700" />
          <div className="p-3 bg-[#151515] rounded-xl border border-white/5 w-fit">
            <Eye className="w-5 h-5 text-zinc-300" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">Vision</p>
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">
              Become India's Most Trusted Technology Partner
            </h3>
            <p className="text-zinc-400 leading-relaxed">
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
      "We move fast and ship real solutions. No endless planning cycles just clear goals, smart builds, and rapid deployment.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We operate with radical honesty. From pricing to timelines, what you see is exactly what you get no hidden surprises.",
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
      "Every solution we build is tied to real metrics time saved, revenue grown, and costs reduced. Impact you can actually see.",
  },
];

function OurValues() {
  return (
    <section className="relative z-10 px-4 py-24 w-full max-w-6xl mx-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {VALUES.map((v) => (
          <motion.div
            variants={fadeUp}
            key={v.title}
            className="group flex flex-col gap-6 bg-black rounded-3xl border-t-2 border-white/25 outline outline-white/10 px-6 py-10 transition-all duration-300 hover:bg-zinc-900/60"
          >
            <div className="p-4 bg-[#151515] rounded-xl border border-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
              <v.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">{v.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{v.description}</p>
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
    bio: "Their guidance, discipline, and lifelong support played a major role in shaping the vision and values of the company. They continue to inspire the team through integrity, hard work, and dedication",
    linkedin: "https://www.linkedin.com/",
    badge: "Founder",
    badgeColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    glowColor: "bg-amber-500/5 group-hover:bg-amber-500/10",
  },
  {
    name: "Er. Prashant Singh Rajput",
    role: "Founder & CEO",
    image: "/Prashant.jpeg",
    bio: "Visionary entrepreneur behind Hindustaan Innovations. Er. Prashant drives the mission to make intelligent digital systems accessible to every Indian business.",
    linkedin: "https://www.linkedin.com/",
    badge: "Founder",
    badgeColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    glowColor: "bg-amber-500/5 group-hover:bg-amber-500/10",
  },
  {
    name: "Renu Devi",
    role: "Cultural Advisor",
    image: "/fff.jpeg",
    bio: "Their encouragement, positivity, and unwavering belief have been a constant source of motivation behind the company’s journey. They represent the care, values, and strength that drive our culture",
    linkedin: "https://www.linkedin.com/",
    badge: "Founder",
    badgeColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    glowColor: "bg-amber-500/5 group-hover:bg-amber-500/10",
  },
  // {
  //   name: "Aryan Patel",
  //   role: "Co-founder & CTO",
  //   image: "/Aryan.jpeg",
  //   bio: "Full-stack engineer and tech architect. Aryan builds the digital backbone of Hindustaan Innovations, leading all technical development.",
  //   linkedin: "https://www.linkedin.com/in/ghostxaryan/",
  //   badge: "Co-founder",
  //   badgeColor: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400",
  //   glowColor: "bg-blue-500/5 group-hover:bg-blue-500/10",
  // },
  // {
  //   name: "Siddhant Supkar",
  //   role: "Co-founder & CMO",
  //   image: "/Shiddant.jpeg",
  //   bio: "Growth strategist and brand builder. Siddhant spearheads marketing, client acquisition, and partnerships.",
  //   linkedin: "https://www.linkedin.com/in/siddhantsupkar/",
  //   badge: "Co-founder",
  //   badgeColor: "from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-400",
  //   glowColor: "bg-violet-500/5 group-hover:bg-violet-500/10",
  // },
];

function OurFounders() {
  const topLevel = FOUNDERS.filter((f) => f.badge === "Founder");
  const coFounders = FOUNDERS.filter((f) => f.badge === "Co-founder");

  return (
    <section className="relative z-10 px-4 py-24 w-full max-w-6xl mx-auto">
      <SectionHeader
        icon={Users}
        pill="Meet the Founders"
        heading="The Minds"
        italic="Behind It."
        sub="A team of visionary leaders and passionate builders united by one mission — to power India's next generation of businesses through technology."
      />

      <div className="flex flex-col gap-12 mt-16">
        {/* Row 1: Founders & Directors */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {topLevel.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </motion.div>

        {/* Row 2: Co-founders
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {coFounders.map((founder) => (
            <div key={founder.name} className="w-full md:w-[calc(33.333%-1.33rem)]">
              <FounderCard founder={founder} />
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}

function FounderCard({ founder }: { founder: (typeof FOUNDERS)[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col items-center text-center gap-5 bg-black rounded-3xl border-t-2 border-white/25 outline outline-white/10 px-7 py-10 transition-all duration-300 hover:bg-zinc-900/60 overflow-hidden h-full"
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
        <div className="w-45 h-45 rounded-full overflow-hidden border-2 border-white/15 shadow-xl group-hover:scale-105 transition-transform duration-500 ring-2 ring-white/5">
          <Image
            src={founder.image}
            alt={founder.name}
            width={180}
            height={180}
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Online dot */}
        <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-500/90 rounded-full border-2 border-black shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
      </div>

      {/* Badge */}
      <span
        className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase border bg-gradient-to-r ${founder.badgeColor}`}
      >
        {founder.badge}
      </span>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-zinc-100">{founder.name}</h3>
        <p className="text-xs font-medium text-zinc-500 tracking-wide">{founder.role}</p>
      </div>

      {/* Bio */}
      <p className="text-zinc-400 text-sm leading-relaxed flex-1">{founder.bio}</p>

      {/* LinkedIn Button 
      <a
        href={founder.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center gap-2 bg-zinc-900/60 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/40 text-zinc-400 hover:text-[#0A66C2] px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 w-full justify-center"
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        Connect on LinkedIn
      </a>*/}
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
    <section className="relative z-10 px-4 py-24 w-full max-w-6xl mx-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent">
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
        className="w-full bg-black border-t-2 border-white/25 outline outline-white/10 rounded-[2rem] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {HOW_WE_HELP.map((item, idx) => (
          <motion.div
            variants={fadeUp}
            key={item.step}
            className="group flex gap-6 items-start"
          >
            {/* Step number + connector */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-400 group-hover:text-zinc-100 transition-colors shrink-0">
                {item.step}
              </div>
              {idx < HOW_WE_HELP.length - 1 && (
                <div className="w-px flex-1 mt-3 bg-white/5 min-h-8" />
              )}
            </div>

            {/* Content */}
            <div className="pb-6">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
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
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
      >
        <p className="text-zinc-400 text-sm">Ready to get started?</p>
        <Link href="tel:+917712994005" target="_blank" rel="noopener noreferrer">

          <button
            type="button"
            className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur-md border border-white/10 hover:bg-zinc-800/80 text-zinc-200 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:border-white/20"
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
    <div className="relative bg-black text-white overflow-hidden">
      {/* Persistent dark background for non-hero sections */}
      <div className="absolute inset-0 bg-black z-0 pointer-events-none" />

      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurValues />
      <OurFounders />
      <HowWeHelp />
      <CtaFooter />
      <FooterBar />
    </div>
  );
}
