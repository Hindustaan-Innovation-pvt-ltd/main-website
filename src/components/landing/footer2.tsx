import Link from "next/link";
import { Video, MessageSquare, Send } from "lucide-react";

export default function Footer2() {
    return (
        <div className="w-full bg-white flex justify-center py-10 px-4">
            <footer className="w-full max-w-[1800px] bg-[#0a0a0a] rounded-3xl p-4 sm:p-6 pb-6 flex flex-col">
                
                {/* Top Dark Grey Card */}
                <div className="w-full bg-[#1c1c1c] rounded-[24px] p-6 md:p-8 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
                    {/* Left: Heading & Icons */}
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
                            Transforming Ideas Into<br className="hidden lg:block" />
                            <span className="inline-flex items-center flex-wrap gap-2 md:gap-4 lg:mt-2">
                                Experiences
                                <span className="inline-flex items-center gap-1.5 md:gap-2 mt-2 sm:mt-0">
                                    {/* Icon 1 - Yellow Framer-like */}
                                    <div className="w-[30px] h-[30px] md:w-[38px] md:h-[38px] rounded-lg md:rounded-[10px] bg-[#f2a900] flex items-center justify-center shadow-sm">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-[22px] md:h-[22px]">
                                            <path d="M12 2L2 12h10v10l10-10H12V2z" fill="#fff"/>
                                        </svg>
                                    </div>
                                    {/* Icon 2 - Dark Honeycomb */}
                                    <div className="w-[30px] h-[30px] md:w-[38px] md:h-[38px] rounded-lg md:rounded-[10px] bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-sm">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f2a900" strokeWidth="2" strokeLinejoin="round" className="md:w-[22px] md:h-[22px]">
                                            <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
                                            <line x1="12" y1="2" x2="12" y2="22" />
                                            <line x1="2" y1="7" x2="22" y2="17" />
                                            <line x1="2" y1="17" x2="22" y2="7" />
                                        </svg>
                                    </div>
                                    {/* Icon 3 - Red Squiggle */}
                                    <div className="w-[30px] h-[30px] md:w-[38px] md:h-[38px] rounded-lg md:rounded-[10px] bg-[#e03131] flex items-center justify-center shadow-sm">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-[24px] md:h-[24px]">
                                            <path d="M4 12c4-8 8-8 12 0s8 8 12 0" transform="scale(0.6) translate(4, 4)" />
                                            <circle cx="16" cy="9" r="1.5" fill="#fff" stroke="none" />
                                            <circle cx="8" cy="15" r="1.5" fill="#fff" stroke="none" />
                                        </svg>
                                    </div>
                                    {/* Icon 4 - Green Globe */}
                                    <div className="w-[30px] h-[30px] md:w-[38px] md:h-[38px] rounded-lg md:rounded-[10px] bg-[#2b8a3e] flex items-center justify-center shadow-sm">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" className="md:w-[22px] md:h-[22px]">
                                            <circle cx="12" cy="12" r="10" />
                                            <ellipse cx="12" cy="12" rx="4" ry="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                        </svg>
                                    </div>
                                </span>
                            </span>
                        </h2>
                    </div>

                    {/* Right: Text & Buttons */}
                    <div className="flex flex-col gap-6 md:gap-8 max-w-[460px] shrink-0 w-full lg:w-auto">
                        <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                            We help teams turn complex ideas into clear, high-performing digital experiences.
                        </p>
                        <div className="flex flex-row flex-wrap items-center gap-3 md:gap-4 w-full">
                            <Link href="/contact" className="flex-1 sm:flex-none">
                                <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-7 py-4 rounded-[14px] font-bold text-base hover:bg-zinc-200 transition-colors">
                                    <Video className="w-5 h-5" />
                                    Schedule a Call
                                </button>
                            </Link>
                            <Link href="#">
                                <button className="w-[56px] h-[56px] flex items-center justify-center bg-[#2a2a2a] border border-white/5 rounded-[14px] hover:bg-[#333] transition-colors group">
                                    <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 transition-transform" />
                                </button>
                            </Link>
                            <Link href="#">
                                <button className="w-[56px] h-[56px] flex items-center justify-center bg-[#2a2a2a] border border-white/5 rounded-[14px] hover:bg-[#333] transition-colors group">
                                    <Send className="w-5 h-5 text-white group-hover:translate-x-0.5 max-lg:group-data-[in-view=true]:translate-x-0.5 group-hover:-translate-y-0.5 max-lg:group-data-[in-view=true]:-translate-y-0.5 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full flex flex-col pt-16 md:pt-24 pb-8 px-4 sm:px-12 relative">
                    {/* Center Logo */}
                    <div className="flex justify-center w-full mb-12 md:mb-20">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            {/* "hi" abstract icon */}
                            <img src="/logo.png" alt="Hindustaan Innovations Logo" className="h-[50px] md:h-[80px] w-auto object-contain" />
                            {/* Separator */}
                            <div className="hidden md:block w-[1px] h-[70px] bg-white/20"></div>
                            {/* Text */}
                            <div className="flex flex-col justify-center text-center md:text-left">
                                <span className="text-[22px] sm:text-[24px] md:text-[32px] font-bold text-white tracking-[0.15em] leading-none mb-1.5">HINDUSTAAN</span>
                                <span className="text-[16px] sm:text-[18px] md:text-[26px] font-semibold text-[#858382] tracking-[0.3em] leading-none">INNOVATIONS</span>
                                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-white tracking-[0.3em] leading-none mt-2">PRIVATE LIMITED</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links & Copyright */}
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-auto gap-6 sm:gap-0">
                        <div className="flex items-center justify-center flex-wrap gap-5 sm:gap-8 text-white font-medium text-[14px] sm:text-[15px]">
                            <Link href="/about" className="hover:text-[#1ba453] transition-colors">About Us</Link>
                            <Link href="/work" className="hover:text-[#1ba453] transition-colors">Work</Link>
                            <Link href="/services" className="hover:text-[#1ba453] transition-colors">Services</Link>
                        </div>
                        <div className="text-zinc-500 text-sm font-medium">
                            @ 2026 Hindustaan Innovations
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}