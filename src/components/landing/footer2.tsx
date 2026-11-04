import Image from "next/image";
import Link from "next/link";
import { Video, MessageSquare, Send, Code2, Palette, Smartphone, Sparkles } from "lucide-react";

export default function Footer2() {
    return (
        <div className="w-full bg-[#f5f5f5] dark:bg-[#09090b] flex justify-center py-6 sm:py-10 px-3 sm:px-4 transition-colors duration-200">
            <footer className="w-full max-w-[1800px] bg-white dark:bg-[#0a0a0a] rounded-2xl sm:rounded-3xl p-3 sm:p-6 pb-8 sm:pb-8 flex flex-col border border-zinc-200 dark:border-white/10 shadow-xl dark:shadow-2xl transition-colors duration-200">

                {/* Top Dark Grey Card */}
                <div className="w-full bg-[#1c1c1c] rounded-2xl sm:rounded-[24px] p-5 sm:p-6 md:p-8 lg:p-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 lg:gap-12">
                    {/* Left: Heading & Icons */}
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-[1.15] tracking-tight">
                            Transforming Ideas Into<br className="hidden lg:block" />
                            <span className="inline-flex items-center flex-wrap gap-2 md:gap-4 lg:mt-2">
                                Experiences
                                <span className="inline-flex items-center gap-1.5 md:gap-2 mt-2 sm:mt-0">
                                    {/* Icon 1 - Code & Development */}
                                    <div
                                        className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] rounded-lg md:rounded-[10px] bg-[#2563eb] flex items-center justify-center shadow-sm text-white"
                                        title="Web & Software Development"
                                    >
                                        <Code2 className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]" />
                                    </div>
                                    {/* Icon 2 - UI/UX & Design */}
                                    <div
                                        className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] rounded-lg md:rounded-[10px] bg-[#7c3aed] flex items-center justify-center shadow-sm text-white"
                                        title="UI/UX & Creative Design"
                                    >
                                        <Palette className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]" />
                                    </div>
                                    {/* Icon 3 - Web & Mobile Apps */}
                                    <div
                                        className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] rounded-lg md:rounded-[10px] bg-[#10b981] flex items-center justify-center shadow-sm text-white"
                                        title="Web & Mobile Apps"
                                    >
                                        <Smartphone className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]" />
                                    </div>
                                    {/* Icon 4 - AI, SaaS & Innovation */}
                                    <div
                                        className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] rounded-lg md:rounded-[10px] bg-[#f59e0b] flex items-center justify-center shadow-sm text-white"
                                        title="SaaS & AI Innovation"
                                    >
                                        <Sparkles className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]" />
                                    </div>
                                </span>
                            </span>
                        </h2>
                    </div>

                    {/* Right: Text & Buttons */}
                    <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 max-w-[460px] shrink-0 w-full lg:w-auto">
                        <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            We help teams turn complex ideas into clear, high-performing digital experiences.
                        </p>
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 md:gap-4 w-full">
                            <Link href="/contact" className="flex-1 sm:flex-none">
                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-white text-black px-4 sm:px-7 py-3 sm:py-4 rounded-[14px] font-bold text-[14px] sm:text-base whitespace-nowrap hover:bg-zinc-200 transition-colors">
                                    <Video className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                    Schedule a Call
                                </button>
                            </Link>
                            <Link href="/contact" className="shrink-0">
                                <button className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] flex items-center justify-center bg-[#2a2a2a] border border-white/5 rounded-[14px] hover:bg-[#333] transition-colors group shrink-0">
                                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/contact" className="shrink-0">
                                <button className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] flex items-center justify-center bg-[#2a2a2a] border border-white/5 rounded-[14px] hover:bg-[#333] transition-colors group shrink-0">
                                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-0.5 max-lg:group-data-[in-view=true]:translate-x-0.5 group-hover:-translate-y-0.5 max-lg:group-data-[in-view=true]:-translate-y-0.5 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full flex flex-col pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 px-3 sm:px-8 lg:px-16 relative">
                    {/* Logos Container */}
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-0 w-full max-w-5xl mx-auto mb-6 sm:mb-10 md:mb-12">
                        {/* Logo 1: Hindustaan Innovations */}
                        <Image
                            src="/Frame 495.png"
                            alt="Hindustaan Innovations Private Limited"
                            width={1270}
                            height={492}
                            className="w-44 sm:w-56 md:w-64 lg:w-72 h-auto shrink-0"
                        />
                        {/* Logo 2: Built in Hindustaan */}
                        <Image
                            src="/Frame 497.png"
                            alt="Built in Hindustaan, Built for Hindustaan"
                            width={3544}
                            height={1072}
                            className="w-56 sm:w-72 md:w-80 lg:w-[420px] h-auto shrink-0"
                        />
                    </div>

                    {/* Footer Links & Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full mt-auto gap-5 md:gap-0 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-white/10">
                        <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2.5 text-zinc-600 dark:text-zinc-200 font-medium text-xs sm:text-sm md:text-[15px] text-center w-full md:w-auto">
                            <Link href="/about" className="hover:text-[#1ba453] transition-colors py-1">About Us</Link>
                            <Link href="/products" className="hover:text-[#1ba453] transition-colors py-1">Products</Link>
                            <Link href="/services" className="hover:text-[#1ba453] transition-colors py-1">Services</Link>
                            <Link href="/privacy-policy" className="hover:text-[#1ba453] transition-colors py-1">Privacy Policy</Link>
                        </div>
                        <div className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium text-center md:text-right w-full md:w-auto leading-relaxed">
                            <span>© 2026 Hindustaan Innovations Private Limited.</span>
                            <span className="block sm:inline sm:ml-1">All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}