"use client";
import { Layers, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import servicesData from "@/services.json";

export function ServicesHero2() {
  const { hero } = servicesData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto text-center"
      >
        {/* Pill — matching Product.tsx style */}
        <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-6 gap-2">
          <Layers className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" />
          {hero.pill}
        </motion.div>

        {/* Heading — matching Product.tsx style */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-4 md:mb-6 px-2 text-center">
          {hero.heading}{" "}
          <span className="text-[#1ba453]">
            {hero.headingItalic}
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mb-8 text-center">
          {hero.subheading}
        </motion.p>

        <motion.a
          variants={itemVariants}
          href={hero.ctaLink}
          className="inline-flex items-center gap-2 bg-black dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-transparent dark:border-white/10 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          {hero.ctaText} <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </motion.section>
    </div>
  );
}
