"use client";

import { motion, type Variants } from "motion/react";
import { 
  Rocket, 
  ArrowRight, 
  GraduationCap, 
  School, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data.json";
import { Navbar2 } from "@/components/landing/navbar2";
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import Footer2 from "@/components/landing/footer2";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function Pill({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 rounded-full shadow-sm w-fit">
      <Icon className="w-4 h-4 text-zinc-800" />
      <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-800">{label}</span>
    </div>
  );
}

export default function SolutionsPage() {
  const { solutions } = data;

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] text-black overflow-hidden">
      <Navbar2 />
      

      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            <motion.div variants={fadeUp}>
              <Pill icon={Rocket} label={solutions.pill} />
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black max-w-4xl leading-[1.15] md:leading-[1.1] mb-4 md:mb-6 px-2"
            >
              {solutions.heading} <span className="text-[#1ba453]">{solutions.headingItalic}</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-8"
            >
              {solutions.subheading}
            </motion.p>
          </motion.div>
        </section>

        {/* Solutions Grid */}
        <section className="px-6 pb-32 max-w-7xl mx-auto">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.items.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-zinc-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image Area */}
                <div className="relative w-full h-[280px] overflow-hidden bg-zinc-50 border-b border-zinc-100 flex items-center justify-center p-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-700 p-6 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="p-2.5 bg-white border border-zinc-200 shadow-sm rounded-xl">
                      <School className="w-5 h-5 text-zinc-800" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 md:p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-black transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed line-clamp-3 text-justify">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {item.modules?.slice(0, 3).map((module, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 shadow-sm text-[11px] font-semibold text-zinc-800"
                      >
                        {module.title}
                      </span>
                    ))}
                    {item.modules && item.modules.length > 3 && (
                      <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 shadow-sm text-[11px] font-semibold text-zinc-500 italic">
                        +{item.modules.length - 3} More
                      </span>
                    )}
                  </div>

                  <div className="pt-5 border-t border-zinc-100">
                    <Link 
                      href={`/products/${item.id}`}
                      className="inline-flex items-center justify-center gap-2 group/btn relative w-full px-6 py-3 bg-[#222222] text-white text-sm font-medium rounded-xl hover:bg-black transition-colors shadow-sm"
                    >
                      <span>View Details</span>
                      <div className="flex items-center justify-center w-5 h-5 bg-white/10 rounded-[6px] ml-1">
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}
