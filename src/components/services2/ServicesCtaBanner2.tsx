"use client";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "motion/react";
import servicesData from "@/services.json";
import Link from "next/link";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesCtaBanner2() {
  const { ctaBanner } = servicesData;

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={itemVariants}
      className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 pb-24"
    >
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        {/* Glow */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-4 gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              {ctaBanner.pill}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.1] tracking-tight mb-3">
              {ctaBanner.heading}{" "}
              <span className="text-[#1ba453]">
                {ctaBanner.headingItalic}
              </span>
            </h2>
            <p className="text-zinc-500 max-w-lg">
              {ctaBanner.subheading}
            </p>
          </div>

          <Link href="tel:+917712994005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-800 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {ctaBanner.ctaText} <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
