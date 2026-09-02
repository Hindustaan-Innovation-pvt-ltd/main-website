"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircleQuestion, ArrowUpRight, ChevronDown, HelpCircle } from "lucide-react";
import data from "@/data.json";

export default function FaqSection() {
    const { faq } = data;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-20 lg:pt-20 lg:pb-20 w-full max-w-6xl mx-auto overflow-hidden" id="faq">
            <div className="flex flex-col items-center text-center w-full mb-16">
                <div className="flex items-center gap-2 mb-6 px-4 py-1.5 bg-white border border-zinc-200 rounded-full shadow-sm">
                    <MessageCircleQuestion className="w-4 h-4 text-zinc-800" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-800">{faq.pill}</span>
                </div>

                <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15] md:leading-[1.1] mb-4 md:mb-6 text-center max-w-4xl">
                    {faq.heading} <span className="text-[#1ba453]">{faq.headingItalic}</span>
                </h2>
                <p className="text-base md:text-lg text-zinc-500 mb-8 lg:mb-16 text-center max-w-2xl">{faq.subheading}</p>
            </div>

            <div className="w-full">
                <div className="lg:col-span-2 flex flex-col gap-3">
                    {faq.questions.map((q, i) => (
                        <div
                            key={i}
                            className="flex flex-col bg-white rounded-xl shadow-sm border border-zinc-200/60 overflow-hidden transition-all hover:shadow-md hover:border-zinc-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
                            >
                                <span className="text-base md:text-lg font-bold text-black">{q.question}</span>
                                <ChevronDown
                                    className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-5 pb-5 text-sm md:text-base text-zinc-500 font-medium leading-relaxed">
                                            {q.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
