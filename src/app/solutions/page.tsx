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
import { Navbar } from "@/components/landing/Navbar";
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import { CtaFooter } from "@/components/landing/CtaFooter";
import { FooterBar } from "@/components/landing/FooterBar";

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
    <div className="flex items-center gap-2 bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-full px-4 py-1.5 shadow-lg w-fit">
      <Icon className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
      <span className="text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">{label}</span>
    </div>
  );
}

export default function SolutionsPage() {
  const { solutions } = data;

  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-zinc-50 overflow-hidden">
      <Navbar />
      <BackgroundEffects />

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
              className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl"
            >
              {solutions.heading} <span className="font-serif italic font-light text-zinc-400">{solutions.headingItalic}</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
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
            className="grid grid-cols-1 gap-12"
          >
            {solutions.items.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/10 transition-colors duration-500"
              >
                <div className="animate-border-beam" />
                <div className="flex flex-col lg:flex-row items-stretch">
                  {/* Image side */}
                  <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-tr from-zinc-950 via-transparent to-transparent z-10 opacity-60" />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain transition-transform duration-700"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                      <div className="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl">
                        <School className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2">
                      {item.modules.slice(0, 3).map((module, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-300"
                        >
                          {module.title}
                        </span>
                      ))}
                      {item.modules.length > 3 && (
                        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-500 italic">
                          +{item.modules.length - 3} More Modules
                        </span>
                      )}
                    </div>

                    <div className="pt-6">
                      <Link 
                        href={`/solutions/${item.id}`}
                        className="inline-flex items-center gap-2 group/btn relative px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all overflow-hidden"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <CtaFooter />
      <FooterBar />
    </div>
  );
}
