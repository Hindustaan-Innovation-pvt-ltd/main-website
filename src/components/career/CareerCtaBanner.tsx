"use client";
import { useState, useEffect } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, Send } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";

interface CTABannerData {
  pill: string;
  heading: string;
  headingItalic: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
}

export function CareerCtaBanner() {
  const [ctaBanner, setCtaBanner] = useState<CTABannerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch("/api/careers/departments");
        const data = await response.json();
        if (data.success && data.ctaBanner) {
          setCtaBanner(data.ctaBanner);
        }
      } catch (err) {
        console.error("Error fetching CTA banner:", err);
        // Fallback data
        setCtaBanner({
          pill: "Don't see a fit?",
          heading: "Send an open",
          headingItalic: "application",
          subheading: "We're always on the lookout for great talent.",
          ctaText: "Apply Now",
          ctaLink: "https://forms.gle/3tG7K6VcD7z5Q8VD7",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (!ctaBanner) return null;

  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-8 pb-16 lg:py-24 w-full max-w-4xl mx-auto text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={itemVariants}
        className="relative w-full rounded-3xl p-10 md:p-16 overflow-hidden bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 shadow-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

        <div className="flex flex-col items-center relative z-10">
          <div className="flex items-center gap-2 mb-6 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 rounded-full px-4 py-1.5 shadow-xs">
            <Send className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
            <span className="text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-200 uppercase">
              {ctaBanner.pill}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            {ctaBanner.heading}{" "}
            <span className="font-serif italic font-light text-zinc-700 dark:text-zinc-300">
              {ctaBanner.headingItalic}
            </span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg max-w-xl">
            {ctaBanner.subheading}
          </p>

          <HoverBorderGradient
            containerClassName="rounded-xl"
            className="bg-black dark:bg-zinc-800 text-white flex items-center space-x-2 px-8 py-3 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
          >
            <Link href={ctaBanner.ctaLink} >
              <span>{ctaBanner.ctaText}</span>
            </Link>
            <ArrowUpRight className="w-4 h-4" />
          </HoverBorderGradient>
        </div>
      </motion.div>
    </section>
  );
}
