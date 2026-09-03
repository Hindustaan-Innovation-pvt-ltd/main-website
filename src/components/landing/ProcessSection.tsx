"use client";

import { motion, type Variants } from "motion/react";
import { Activity, Check, Package } from "lucide-react";
import data from "@/data.json";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const IMAGE_MAP: Record<number, string> = {
  1: "https://framerusercontent.com/images/iWjIPE13Flu0JP6l05DPEJQ.png?width=1602&height=1048",
  2: "https://framerusercontent.com/images/NlShinj3SRLiU2GpzFKbH8loPs.png?width=1808&height=1124",
  3: "https://framerusercontent.com/images/T5LD7i0AQslhhwPvWrkU4ENnc.png?width=1536&height=1011",
};

const STEP_COLORS: Record<number, { pill: string; check: string; badge: string }> = {
  1: {
    pill: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    check: "text-blue-400",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
  },
  2: {
    pill: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    check: "text-violet-400",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-300",
  },
  3: {
    pill: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    check: "text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  },
};

type Step = {
  step: number;
  number: string;
  title: string;
  description: string;
  points?: string[];
  deliverables?: string[];
};

export function ProcessSection() {
  const { pill, heading, headingItalic, subheading, steps } = data.process as {
    pill: string;
    heading: string;
    headingItalic: string;
    subheading: string;
    steps: Step[];
  };

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center px-4 py-20 w-full max-w-6xl mx-auto mt-10"
      id="process"
    >
      {/* ── Section header ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={itemVariants}
        className="flex flex-col items-center text-center w-full"
      >
        <div className="flex items-center gap-2 mb-6 bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-full px-4 py-1.5 shadow-lg">
          <Activity className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
          <span className="text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">{pill}</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 text-center">
          {heading}{" "}
          <span className="font-serif italic font-light text-zinc-700 dark:text-zinc-300">{headingItalic}</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-16 text-lg text-center max-w-2xl">{subheading}</p>
      </motion.div>

      {/* ── Tabs card ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={itemVariants}
        className="w-full bg-white dark:bg-black border-t-2 border-black/25 dark:border-white/25 outline outline-black/15 dark:outline-white/10 rounded-[2rem] p-6 md:p-10"
      >
        <Tabs defaultValue={steps[0].number} className="w-full">
          {/* Tab triggers */}
          <TabsList className="flex items-center gap-4 mb-12 bg-transparent p-0 w-full h-auto">
            {steps.map((s) => (
              <TabsTrigger
                key={s.number}
                value={s.number}
                className="flex-1 py-4 rounded-lg text-sm font-semibold transition-all duration-300 bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-200 data-active:border-t-2 data-active:border-black/20 dark:data-active:border-white/25"
              >
                STEP {s.step}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab panels */}
          <div className="relative" style={{ perspective: "1000px" }}>
            {steps.map((s) => {
              const colors = STEP_COLORS[s.step] ?? STEP_COLORS[1];
              return (
                <TabsContent
                  key={s.number}
                  value={s.number}
                  className="mt-0 w-full outline-none data-[state=inactive]:hidden"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

                    {/* LEFT — Image */}
                    <div className="flex-1 w-full relative h-56 lg:h-96 flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-white/5">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotateY: 5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full h-full overflow-hidden"
                      >
                        <Image
                          src={IMAGE_MAP[s.step]}
                          alt={s.title}
                          className="w-full h-full object-contain object-center"
                          width={1920}
                          height={1080}
                          priority={s.step === 1}
                          decoding="async"
                        />
                      </motion.div>
                    </div>

                    {/* RIGHT — Content */}
                    <div className="flex-1 max-w-lg">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                      >
                        {/* Step number */}
                        <div className="text-zinc-500 dark:text-zinc-400 font-serif italic text-xl mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-4 inline-block">
                          {s.number}
                        </div>

                        {/* Title + description */}
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 mt-4">
                          {s.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base mb-6">
                          {s.description}
                        </p>

                        {/* Points */}
                        {s.points && s.points.length > 0 && (
                          <div className="mb-6">
                            <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3">
                              What we do
                            </p>
                            <ul className="flex flex-col gap-2">
                              {s.points.map((point) => (
                                <li key={point} className="flex items-start gap-2.5">
                                  <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${colors.check}`} />
                                  <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-snug">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Deliverables */}
                        {s.deliverables && s.deliverables.length > 0 && (
                          <div>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-1.5">
                              <Package className="w-3 h-3" /> Deliverables
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {s.deliverables.map((d) => (
                                <span
                                  key={d}
                                  className={`text-[11px] font-medium px-3 py-1 rounded-full border ${colors.badge}`}
                                >
                                  {d}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </motion.div>
    </section>
  );
}
