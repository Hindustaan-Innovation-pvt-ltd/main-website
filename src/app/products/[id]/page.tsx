"use client";

import { use, useRef } from "react";
import { motion, type Variants, useScroll, useTransform, useSpring } from "motion/react";
import {
  ArrowLeft,
  CheckCircle2,
  UserCircle,
  Library,
  BookOpen,
  Bus,
  CreditCard,
  FileSpreadsheet,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Users,
  Wallet,
  ClipboardList,
  CalendarCheck,
  ExternalLink,
  Check,
  ChevronDown,
  HelpCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data.json";
import { Navbar2 } from "@/components/landing/navbar2";
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import Footer2 from "@/components/landing/footer2";
import { notFound } from "next/navigation";

const iconMap: Record<string, any> = {
  UserCircle,
  Library,
  BookOpen,
  Bus,
  CreditCard,
  FileSpreadsheet,
  Users,
  Wallet,
  ClipboardList,
  CalendarCheck,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Check
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function SolutionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const solution = data.solutions.items.find((item) => item.id === id);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "start start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
    restDelta: 0.001
  });

  const rotateX = useTransform(smoothProgress, [0, 0.05], [25, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2], [1.05, 1]);
  const translateZ = useTransform(smoothProgress, [0, 0.2], [-100, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [0.95, 1]);

  if (!solution) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] text-black overflow-hidden">
      <Navbar2 />
      

      <main className="relative z-10 flex-1">
        {/* Navigation & Header */}
        <div className="px-6 pt-24 md:pt-32 max-w-7xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </Link>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900"
            >
              {solution.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-zinc-600 max-w-3xl leading-relaxed"
            >
              {solution.shortDescription}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
              {solution.projectUrl && (
                <Link
                  href={solution.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors group"
                >
                  <span>Visit Project Website</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              )}
              
              {(solution as any).playStoreUrl && (
                <Link
                  href={(solution as any).playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#000000] text-white px-6 py-3 rounded-full font-bold hover:bg-zinc-800 transition-colors group shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 2.5C5 2.22386 5.22386 2 5.5 2H5.60275C5.83617 2 6.0631 2.07923 6.24449 2.22137L20.6481 13.5108C20.9157 13.7206 20.9625 14.1074 20.7526 14.375C20.6384 14.5206 20.4639 14.606 20.2796 14.606H14.5C14.2239 14.606 14 14.8299 14 15.106V21.5C14 21.7761 13.7761 22 13.5 22H5.5C5.22386 22 5 21.7761 5 21.5V2.5Z" />
                    {/* Just using a generic play icon for Play Store to avoid bringing complex SVGs, or using an external icon library if they have it? The project has lucide-react, maybe use Smartphone or something similar if no Play store icon */}
                  </svg>
                  <span>Google Play</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              )}

              {(solution as any).appStoreUrl && (
                <Link
                  href={(solution as any).appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#000000] text-white px-6 py-3 rounded-full font-bold hover:bg-zinc-800 transition-colors group shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.4674 15.5C15.4674 15.5 14.1953 17 12 17C9.8047 17 8.5326 15.5 8.5326 15.5M15.4674 15.5C15.4674 15.5 16.5 13.3047 16.5 11.1094C16.5 8.91406 14.4844 7.10938 12 7.10938C9.51562 7.10938 7.5 8.91406 7.5 11.1094C7.5 13.3047 8.5326 15.5 8.5326 15.5M15.4674 15.5L8.5326 15.5" />
                  </svg>
                  <span>App Store</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>



        {/* Hero Banner */}
        <section ref={containerRef} className="px-6 py-16 max-w-7xl mx-auto [perspective:1500px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              rotateX,
              scale,
              translateZ,
              opacity,
              transformStyle: "preserve-3d",
              transformOrigin: "center center"
            }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[600px] rounded-[3rem] md:rounded-[3rem] overflow-hidden border border-white/40 shadow-2xl shadow-white/10"
          >
            <div className="relative w-full h-full bg-white">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-contain md:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </section>

        {/* Detailed Explanation */}
        <section className="px-6 py-24 bg-white/[0.02] border-y border-black/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                Empowering Institutions with <span className="text-zinc-600 font-serif italic">Next-Gen Technology</span>
              </h2>
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
                <p>{solution.fullDescription}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { label: "Cloud-Based", icon: Zap },
                  { label: "Secure Data", icon: Shield },
                  { label: "User Friendly", icon: Layers },
                  { label: "24/7 Support", icon: Sparkles },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-black/10 text-zinc-900">
                      <Check className="w-4 h-4 text-zinc-900" />
                    </div>
                    <span className="font-medium text-zinc-200">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-[2.5rem] bg-zinc-50 overflow-hidden border border-black/5"
            >
              {/* Decorative elements or secondary image */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full rounded-3xl bg-linear-to-br from-zinc-800 to-zinc-950 border border-black/10 shadow-2xl flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
                  <Image src={solution.logo} alt={solution.title} fill className="object-cover rounded-3xl opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
              Comprehensive <span className="font-serif italic text-zinc-600">Modules</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl">
              Everything you need to manage your institution efficiently in one unified platform.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solution.modules.map((module, idx) => {
              const Icon = iconMap[module.icon] || CheckCircle2;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="p-8 rounded-[2rem] bg-white/60 border border-black/5 hover:border-black/10 hover:bg-zinc-50/80 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                    <Icon className="w-7 h-7 text-zinc-900" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{module.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {module.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* FAQ Section */}
        {solution.faq && (
          <section className="px-6 py-32 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center gap-6 mb-16">
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-black/10 text-xs font-bold tracking-widest text-zinc-900 uppercase">
                {solution.faq.pill}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
                {solution.faq.heading} <span className="font-serif italic text-zinc-600">{solution.faq.headingItalic}</span>
              </h2>
            </div>

            <div className="space-y-4">
              {solution.faq.questions.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group rounded-3xl border border-black/5 bg-zinc-50/30 overflow-hidden"
                >
                  <details className="w-full">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <HelpCircle className="w-5 h-5 text-zinc-500" />
                        <h3 className="font-bold text-zinc-900 text-lg">{item.question}</h3>
                      </div>
                      <ChevronDown className="w-5 h-5 text-zinc-500 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-zinc-600 leading-relaxed pl-[3.25rem]">
                      {item.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer2 />
    </div>
  );
}
