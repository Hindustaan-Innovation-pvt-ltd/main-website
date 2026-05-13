"use client";

import { use } from "react";
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
import { Navbar } from "@/components/landing/Navbar";
import { BackgroundEffects } from "@/components/landing/BackgroundEffects";
import { CtaFooter } from "@/components/landing/CtaFooter";
import { FooterBar } from "@/components/landing/FooterBar";
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

  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotateX = useTransform(smoothScrollY, [0, 400], [10, 0]);
  const scale = useTransform(smoothScrollY, [0, 400], [0.95, 1]);
  const translateZ = useTransform(smoothScrollY, [0, 400], [-50, 0]);
  const opacity = useTransform(smoothScrollY, [0, 200], [0.9, 1]);

  if (!solution) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-zinc-50 overflow-hidden">
      <Navbar />
      <BackgroundEffects />

      <main className="relative z-10 flex-1">
        {/* Navigation & Header */}
        <div className="px-6 pt-24 md:pt-32 max-w-7xl mx-auto">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Solutions</span>
          </Link>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              {solution.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-zinc-400 max-w-3xl leading-relaxed"
            >
              {solution.shortDescription}
            </motion.p>

            {solution.projectUrl && (
              <motion.div variants={fadeUp}>
                <Link
                  href={solution.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors group"
                >
                  <span>Visit Project Website</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>

       

        {/* Hero Banner */}
        <section className="px-6 py-16 max-w-7xl mx-auto [perspective:2000px]">
          <motion.div
            style={{
              rotateX,
              scale,
              translateZ,
              opacity,
              transformStyle: "preserve-3d"
            }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
          </motion.div>
        </section>

        {/* Detailed Explanation */}
        <section className="px-6 py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Empowering Institutions with <span className="text-zinc-400 font-serif italic">Next-Gen Technology</span>
              </h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
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
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                    <Check className="w-4 h-4 text-white" />
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
              className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-[2.5rem] bg-zinc-900 overflow-hidden border border-white/5"
            >
              {/* Decorative elements or secondary image */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full rounded-3xl bg-linear-to-br from-zinc-800 to-zinc-950 border border-white/10 shadow-2xl flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
                  <Image src="/Group.png" alt="Vidyum" width={144} height={144} style={{ height: 'auto' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Comprehensive <span className="font-serif italic text-zinc-400">Modules</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl">
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
                  className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900/80 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{module.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
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
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-white uppercase">
                {solution.faq.pill}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {solution.faq.heading} <span className="font-serif italic text-zinc-400">{solution.faq.headingItalic}</span>
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
                  className="group rounded-3xl border border-white/5 bg-zinc-900/30 overflow-hidden"
                >
                  <details className="w-full">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <HelpCircle className="w-5 h-5 text-zinc-500" />
                        <h3 className="font-bold text-white text-lg">{item.question}</h3>
                      </div>
                      <ChevronDown className="w-5 h-5 text-zinc-500 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-zinc-400 leading-relaxed pl-[3.25rem]">
                      {item.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>

      <CtaFooter />
      <FooterBar />
    </div>
  );
}
