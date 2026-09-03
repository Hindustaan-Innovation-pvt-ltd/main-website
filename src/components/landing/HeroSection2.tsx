"use client";

import { motion } from "motion/react";
import { ArrowDown, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar2 } from "./navbar2";

// Placeholders for your SVGs or Images
// You can replace the `src` with your actual SVG paths or use them to render inline SVGs
const cards = [
  { id: 1, src: "/p5.jpg", alt: "Project 1", rotate: -20, y: 80, multiplier: -3 },
  { id: 2, src: "/p2.jpg", alt: "Project 2", rotate: -12, y: 45, multiplier: -2 },
  { id: 3, src: "/p1.png", alt: "Project 3", rotate: -6, y: 15, multiplier: -1 },
  { id: 4, src: "/p7.jpg", alt: "Project 4", rotate: 0, y: 0, multiplier: 0 },
  { id: 5, src: "/p6.jpg", alt: "Project 5", rotate: 6, y: 15, multiplier: 1 },
  { id: 6, src: "/p3.png", alt: "Project 6", rotate: 12, y: 45, multiplier: 2 },
  { id: 7, src: "/p4.jpg", alt: "Project 7", rotate: 20, y: 80, multiplier: 3 },
];


export function HeroSection2() {
  return (
    <div className="relative min-h-dvh flex flex-col overflow-hidden bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar2 />
      
     
      
      <main className="relative z-10 flex-1 flex flex-col items-center pt-32 md:pt-40 pb-20 w-full mx-auto overflow-hidden">
        
        {/* Top Text Section */}
        <div className="flex flex-col items-center text-center px-4 mb-16 md:mb-24 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-xs mb-6"
          >
            <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Digital Solutions, Built for Real-World Impact</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-[1.15] md:leading-[1.1] mb-4 md:mb-6 px-2"
          >
            Building Digital Experiences<br />That Actually Convert
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mb-8"
          >
            From UX clarity to pixel-perfect UI, we turn ideas into experiences that perform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Link href="/contact">
              <button className="flex items-center gap-2 pl-5 pr-2 py-2 bg-[#1ba453] hover:bg-[#158743] text-white rounded-[14px] font-medium transition-colors shadow-lg shadow-green-500/20 text-sm">
                Get in Touch
                <div className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-[10px] ml-1">
                  <Plus className="w-4 h-4" />
                </div>
              </button>
            </Link>
            
            <Link href="/products">
              <button className="flex items-center gap-2 pl-5 pr-2 py-2 bg-[#222222] hover:bg-black text-white rounded-[14px] font-medium transition-colors shadow-lg text-sm">
                See Work
                <div className="flex items-center justify-center w-7 h-7 bg-white/10 rounded-[10px] ml-1">
                  <ArrowDown className="w-4 h-4" />
                </div>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Fanned Cards Section */}
        <div className="relative w-full h-[450px] md:h-[600px] flex justify-center items-end mt-4">
          
          {/* Background Big Text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden flex pointer-events-none z-0 select-none">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            >
              <h2 className="text-[18vw] md:text-[14vw] font-bold text-zinc-200/80 dark:text-zinc-800/40 tracking-tighter leading-none pr-16">
                Hindustaan Innovation Pvt. Ltd.
              </h2>
              <h2 className="text-[18vw] md:text-[14vw] font-bold text-zinc-200/80 dark:text-zinc-800/40 tracking-tighter leading-none pr-16">
                Hindustaan Innovation Pvt. Ltd.
              </h2>
            </motion.div>
          </div>

          {/* Cards Desktop */}
          <div className="relative z-10 w-full max-w-5xl h-full mx-auto hidden md:block">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 200, x: "-50%", rotate: 0 }}
                animate={{ 
                  opacity: 1, 
                  y: card.y, 
                  x: `calc(-50% + ${card.multiplier * 140}px)`, 
                  rotate: card.rotate 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, 
                  type: "spring", 
                  bounce: 0.4 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: card.y - 30, 
                  rotate: card.rotate > 0 ? card.rotate + 2 : card.rotate - 2,
                  transition: { duration: 0.2 }
                }}
                className="absolute top-0 left-1/2 w-[240px] h-[340px] md:w-[320px] md:h-[450px] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-white/10 cursor-pointer origin-bottom"
                style={{
                  // Middle card (index 3) will have the highest z-index
                  zIndex: 20 - Math.abs(3 - index) * 5
                }}
              >
                {card.src ? (
                  <Image 
                    src={card.src} 
                    alt={card.alt} 
                    fill 
                    className="object-cover w-full h-full" 
                    quality={100}
                    unoptimized={true}
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800/50 p-6 text-center text-zinc-400">
                    <span className="text-sm font-medium mb-2">SVG / Image Placeholder</span>
                    <span className="text-xs opacity-70">Add your file: {card.src}</span>
                  </div>
                )}
                
              </motion.div>
            ))}
          </div>

          {/* Cards Mobile (Continuous Slider) */}
          <div className="md:hidden relative z-10 w-full overflow-hidden flex items-center py-4">
            <motion.div 
               className="flex gap-4 px-4"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            >
               {[...cards, ...cards].map((card, index) => (
                  <div 
                    key={`mobile-${card.id}-${index}`} 
                    className="relative shrink-0 w-[220px] h-[320px] rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-white/10"
                  >
                     {card.src ? (
                       <Image 
                         src={card.src} 
                         alt={card.alt} 
                         fill 
                         className="object-cover w-full h-full" 
                         quality={100}
                         unoptimized={true}
                         priority
                       />
                     ) : (
                       <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800/50 p-6 text-center text-zinc-400">
                         <span className="text-sm font-medium mb-2">SVG / Image Placeholder</span>
                         <span className="text-xs opacity-70">Add your file: {card.src}</span>
                       </div>
                     )}
                  </div>
               ))}
            </motion.div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
