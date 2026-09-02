"use client";
import { useState, useEffect } from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import { Navbar2 } from "@/components/landing/navbar2";

interface HeroData {
  pill: string;
  heading: string;
  headingItalic: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
}

export function CareerHero() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch("/api/careers/departments");
        const data = await response.json();
        if (data.success && data.hero) {
          setHero(data.hero);
        }
      } catch (err) {
        console.error("Error fetching hero data:", err);
        // Fallback data
        setHero({
          pill: "Join Our Team",
          heading: "Build the Future",
          headingItalic: "With Us",
          subheading: "We're always looking for passionate people to join our mission.",
          ctaText: "View Openings",
          ctaLink: "#openings",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

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

  if (!hero) return null;

  return (
    <div className="relative pt-36 lg:pt-40 pb-20 flex flex-col overflow-hidden bg-[#f5f5f5]">
      <Navbar2 />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto text-center mt-0 md:mt-12"
      >
        {/* Pill */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black mb-6 gap-2"
        >
          <Briefcase className="w-3.5 h-3.5 text-zinc-600" />
          {hero.pill}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-4 md:mb-6 px-2 text-center"
        >
          {hero.heading}{" "}
          <span className="text-[#1ba453]">
            {hero.headingItalic}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-zinc-500 max-w-2xl mb-8 text-center"
        >
          {hero.subheading}
        </motion.p>

        <motion.a
          variants={itemVariants}
          href={hero.ctaLink}
          className="inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-800 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          {hero.ctaText} <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </motion.section>
    </div>
  );
}
