"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X, Video, Send, MessageSquare } from "lucide-react";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react"; // or framer-motion
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar2() {
  const { ctaLabel } = data.navbar;
  const [isOpen, setIsOpen] = useState(false);
  
  // Custom links to match the image, or map from data if needed
  const links = ["Home", "Services", "About","Blog","Products","Careers","Contact"];

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-[calc(100%-2rem)] md:max-w-fit md:px-0">
        <motion.div 
          className="flex items-center justify-between gap-3 md:gap-6 bg-[#222222]/95 dark:bg-zinc-900/90 backdrop-blur-md p-1.5 md:p-2 rounded-2xl md:rounded-[24px] shadow-2xl border border-white/10 dark:border-white/10"
          initial="initial"
          whileHover="hover"
          animate="initial"
        >
          
          {/* Left Side Logo */}
          <Link href="/">
            <div className="flex items-center bg-[#1ba453] rounded-xl md:rounded-[18px] p-1 cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 shrink-0">
                  <Image src="/logo.png" alt="Logo" width={24} height={24} className="object-contain w-auto h-auto md:ml-2" />
              </div>
              
              <motion.div
                variants={{
                  initial: { width: 0, opacity: 0 },
                  hover: { width: "auto", opacity: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hidden md:flex flex-col justify-center whitespace-nowrap overflow-hidden pr-3"
              >
                <span className="text-white text-xs font-bold leading-tight tracking-wide mr-2">HINDUSTAAN INNOVATIONS</span>
                <span className="text-white/80 text-[10px] font-medium leading-tight tracking-wider">PRIVATE LIMITED</span>
              </motion.div>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 px-3">
            {links.map((item) => (
              <Link
                key={item}
                href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="text-[15px] font-medium text-white/90 hover:text-[#1ba453] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side: Theme Toggle & CTA */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            
            <Link href="/contact">
              <div className="flex items-center bg-white dark:bg-zinc-100 rounded-[18px] p-1 cursor-pointer">
                <motion.div
                  variants={{
                    initial: { width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 },
                    hover: { width: "auto", opacity: 1, paddingLeft: 16, paddingRight: 8 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center whitespace-nowrap overflow-hidden"
                >
                  <span className="text-black text-sm font-semibold">{ctaLabel || "Get in Touch"}</span>
                </motion.div>

                <motion.div 
                   variants={{
                      initial: { backgroundColor: "#ffffff" },
                      hover: { backgroundColor: "#e4e4e7" }
                   }}
                   transition={{ duration: 0.3 }}
                   className="flex items-center justify-center w-10 h-10 shrink-0 rounded-[14px]"
                >
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </motion.div>
              </div>
            </Link>
          </div>

          {/* Mobile Right Controls: Quick Toggle & Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <div 
              className="flex items-center justify-center w-10 h-10 bg-[#4a4a4a] dark:bg-zinc-800 rounded-[14px] cursor-pointer hover:bg-[#5a5a5a] dark:hover:bg-zinc-700 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#f5f5f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 flex flex-col px-6 py-6 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                 {/* Actual Logo */}
                 <div className="flex items-center justify-center w-10 h-10 shrink-0 bg-[#1ba453] rounded-xl">
                   <Image src="/logo.png" alt="Logo" width={24} height={24} className="object-contain w-auto h-auto" />
                 </div>
                 <div className="flex flex-col justify-center leading-none gap-1 mt-1">
                    <span className="text-[14px] font-bold text-zinc-900 dark:text-zinc-100 tracking-wide">HINDUSTAAN INNOVATIONS</span>
                    <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider">PRIVATE LIMITED</span>
                 </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-zinc-900 dark:text-zinc-100">
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 mt-12 flex-1 px-2">
               {links.map((item) => (
                  <Link key={item} href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} onClick={() => setIsOpen(false)}>
                     <span className="text-[22px] font-medium text-zinc-800 dark:text-zinc-200 hover:text-[#1ba453] dark:hover:text-[#1ba453] transition-colors">{item}</span>
                  </Link>
               ))}
            </div>

            {/* Theme Selector in Drawer */}
            <div className="mt-8 mb-2">
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-2 block uppercase tracking-wider">Appearance</span>
              <ThemeToggle variant="segmented" />
            </div>

            {/* Bottom Card */}
            <div className="bg-[#e4e4e7] dark:bg-zinc-900/90 rounded-3xl p-5 w-full flex flex-col gap-4 mt-4 mb-4 border border-transparent dark:border-white/5">
               <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 ml-1">Get in touch</span>
               <div className="grid grid-cols-3 gap-3">
                  <Link href="/meeting" className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-shadow">
                     <Video className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
                     <span className="text-[13px] font-semibold text-[#0066cc] dark:text-blue-400">Meeting</span>
                  </Link>
                  <Link href="/form" className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-shadow">
                     <Send className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
                     <span className="text-[13px] font-semibold text-[#0066cc] dark:text-blue-400">Form</span>
                  </Link>
                  <Link href="/chat" className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-shadow">
                     <MessageSquare className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
                     <span className="text-[13px] font-semibold text-[#0066cc] dark:text-blue-400">Chat</span>
                  </Link>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
