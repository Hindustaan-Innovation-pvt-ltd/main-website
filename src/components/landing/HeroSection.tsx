"use client";

import { motion, type Variants } from "motion/react";
import { ArrowUpRight, Eclipse } from "lucide-react";
import data from "@/data.json";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { BackgroundEffects } from "./BackgroundEffects";
import { Navbar } from "./Navbar";

import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  const { pill, headingLine1, headingLine2, headingItalic, subheading, ctaLabel } = data.hero;

  return (
    <div className="relative min-h-dvh flex flex-col overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-linear-to-r after:from-transparent after:via-black/20 dark:after:via-white/20 after:to-transparent">
      <Navbar />
      <BackgroundEffects />
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-16 md:pt-20 pb-10 md:pb-0 w-full max-w-5xl mx-auto mb-16 md:mb-32"
      >
        <div className="grid gap-6 md:gap-8 justify-items-center w-full">
          {/* Central Icon */}
          <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-0 text-center md:text-left">
            <div className="absolute inset-0 rounded-full" />
            <Image src="/logo.png" alt="Logo" width={100} height={100} decoding="async" loading="eager" fetchPriority="high" className="size-16 md:size-20" />
            <div className="text-3xl md:text-4xl md:w-50 font-medium tracking-tight leading-8 text-zinc-900 dark:text-zinc-100 uppercase">{data.brand.name}</div>
          </motion.div>

          {/* Pill */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">
              {pill}
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1 variants={itemVariants} className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] md:leading-[1.1] tracking-tight mb-2 md:mb-6 bg-radial from-white/50 dark:from-white/50 to-black/60 dark:to-black/60 text-transparent bg-clip-text px-2 md:px-0">
            <span className="text-zinc-900 dark:text-zinc-200">{headingLine1} </span>
            <span className="text-zinc-600 dark:text-zinc-400">{headingLine2.split(" ")[0]}</span>
            <br className="hidden sm:block" />
            <span className="text-zinc-600 dark:text-zinc-400"> {headingLine2.split(" ").slice(1).join(" ")} </span>
            <span className="font-serif italic text-zinc-700 dark:text-zinc-300 font-light pr-2">{headingItalic}</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl text-center px-4 md:px-0 leading-relaxed">
            {subheading}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-2 md:mt-0">
            <Link href="tel:+917712994005" target="_blank" rel="noopener noreferrer">
              <HoverBorderGradient
                containerClassName="rounded-2xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8 md:px-10 py-2 text-sm md:text-base"
              >
                <span>{ctaLabel || "Book A Call"}</span>
              </HoverBorderGradient>
            </Link>
          </motion.div>

        </div>
        <motion.div variants={itemVariants} className="w-full max-w-[16rem] md:max-w-[20rem] h-24 md:h-40 relative rounded-t-full mt-10 md:mt-10 overflow-hidden">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={200}
            className="w-full h-full"
            particleColor="#F9F9F9"
          />
        </motion.div>
      </motion.main>
    </div>
  );
}
