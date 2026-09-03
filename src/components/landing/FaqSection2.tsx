"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import data from "@/data.json";

export default function FaqSection2() {
    const { faq } = data;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative z-10 w-full min-h-screen bg-[#f5f5f5] dark:bg-[#09090b] py-20 px-4 md:px-8 lg:px-12 overflow-hidden transition-colors duration-200" id="faq2">
            
            {/* Background Noise Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
                    {/* Left: Heading */}
                    <div className="max-w-3xl">
                        {/* Pill */}
                        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-full shadow-xs">
                            <span className="text-[13px] font-bold text-zinc-900 dark:text-zinc-200 tracking-wide">{faq.pill || "FAQs"}</span>
                        </div>
                        {/* Title */}
                        <h2 className="text-4xl sm:text-5xl md:text-[64px] leading-[1.05] font-bold text-zinc-900 dark:text-white tracking-tight">
                            Questions, <span className="text-[#1ba453]">Answered</span><br className="hidden sm:block" /> Before You Need to <span className="text-[#1ba453]">Ask</span>
                        </h2>
                    </div>

                    {/* Right: Contact */}
                    <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm shrink-0 mb-2">
                        <h3 className="text-[15px] font-bold text-zinc-900 dark:text-white mb-1">{faq.contactBox?.title || "Can't find your answer"}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[13px] mb-4">
                            {faq.contactBox?.text || "Get in touch with our support team, they are friendly."}
                        </p>
                        <Link href="/contact">
                            <button className="flex items-center gap-3 px-5 py-2.5 bg-[#2a2a2a] dark:bg-zinc-800 hover:bg-[#1a1a1a] dark:hover:bg-zinc-700 text-white border border-transparent dark:border-white/10 rounded-full text-sm font-semibold transition-colors shadow-lg">
                                {faq.contactBox?.buttonLabel || "Contact Us"}
                                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20">
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-3">
                    {faq.questions.map((q, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div 
                                key={i}
                                className={`bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xs ${isOpen ? 'pb-4' : ''}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="flex items-center justify-between w-full p-4 sm:p-5 text-left group"
                                >
                                    <span className="text-[14px] sm:text-[15px] font-bold text-zinc-800 dark:text-zinc-100 pr-8">{q.question}</span>
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 transition-colors group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
                                        {isOpen ? (
                                            <Minus className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                                        ) : (
                                            <Plus className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                                        )}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 sm:px-5 pb-2 sm:pb-3 text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-4xl">
                                                {q.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
