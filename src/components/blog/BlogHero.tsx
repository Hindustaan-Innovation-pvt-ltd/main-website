"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "motion/react";
import { BookOpen } from "lucide-react";
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import { Navbar2 } from "@/components/landing/navbar2";

interface HeroData {
  pill: string;
  heading: string;
  headingItalic: string;
  subheading: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function BlogHero() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch("/api/blogs/categories");
        const data = await response.json();
        if (data.success && data.hero) {
          setHero(data.hero);
        }
      } catch (err) {
        console.error("Error fetching hero data:", err);
        // Fallback hero data
        setHero({
          pill: "OUR BLOG",
          heading: "Insights &",
          headingItalic: "Ideas",
          subheading: "Stay ahead with the latest trends in technology and innovation.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  return (
    <div className="relative pt-24 md:pt-28 lg:pt-40 pb-8 lg:pb-20 flex flex-col overflow-hidden bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      <Navbar2 />
      {hero ? (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto text-center mt-12"
        >
          {/* Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-6 gap-2"
          >
            <BookOpen className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" />
            {hero.pill}
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-4 md:mb-6 px-2 text-center"
          >
            {hero.heading}{" "}
            <span className="text-[#1ba453]">
              {hero.headingItalic}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mb-8 text-center"
          >
            {hero.subheading}
          </motion.p>

        </motion.section>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-32">
          <div className="animate-pulse text-zinc-600 dark:text-zinc-400">Loading blog content...</div>
        </div>
      )}
    </div>
  );
}
