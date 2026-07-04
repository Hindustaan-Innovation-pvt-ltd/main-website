"use client";

import { FooterBar } from "@/components/landing/FooterBar";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden">

      {/* Main 404 Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center pb-20 pt-32">
        
        {/* Spotlight Effect matching the lamp vibe */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[400px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center z-10"
        >
          <h2 className="text-lg md:text-xl font-bold text-zinc-400 tracking-[0.2em] uppercase mb-4">
            Not Found
          </h2>
          
          {/* Metallic 3D looking text */}
          <h1 className="text-8xl sm:text-9xl md:text-[180px] font-black tracking-tighter leading-none bg-gradient-to-b from-white via-zinc-400 to-zinc-900 text-transparent bg-clip-text drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)] select-none">
            404
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-500 max-w-sm mx-auto text-sm md:text-base mt-8 mb-10 z-10 relative"
        >
          The page you're looking for might have been moved, deleted, or never existed in the first place.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="z-10 relative"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-3.5 bg-zinc-100 text-black font-semibold rounded-xl hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
        </motion.div>
      </main>

    </div>
  );
}
