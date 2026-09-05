"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Heart, Zap, Sun, Pizza, Map } from "lucide-react";

const HoverOverlay = ({ href }: { href?: string }) => {
  const content = (
    <>
      Open Project
      <div className="bg-zinc-900 dark:bg-zinc-700 rounded-full p-1 text-white">
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </>
  );

  const className = "translate-y-10 opacity-0 group-hover:translate-y-0 max-lg:group-data-[in-view=true]:translate-y-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-xl border border-zinc-200 dark:border-white/10 hover:scale-105 active:scale-95";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-30 bg-black/10 dark:bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 flex items-center justify-center cursor-pointer">
      <div className={className}>
        {content}
      </div>
    </a>
  ) : (
    <div className="absolute inset-0 z-30 bg-black/10 dark:bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 flex items-center justify-center">
      <button className={className}>
        {content}
      </button>
    </div>
  );
};

export function ProductSection() {
  return (
    <section className="pb-12 pt-8 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-6"
            >
              PROJECTS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Turning <span className="text-[#1ba453]">Strategy</span> Into<br />
              Real-World <span className="text-[#1ba453]">Results</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm flex flex-col items-start lg:items-end gap-6"
          >
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed lg:text-right">
              A selection of projects where clear thinking, strong design, and business goals come together to deliver measurable impact.
            </p>
            <a href="/products">
              <button className="bg-[#1c1c1c] dark:bg-zinc-800 hover:bg-black dark:hover:bg-zinc-700 text-white border border-transparent dark:border-white/10 px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 transition-colors">
                See All Projects
                <div className="bg-zinc-700/50 rounded-full p-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Vidyum Section (50-50% Equal Width Cards) */}
          <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Vidyum Website (Left Side) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 pb-0 sm:pb-0 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <Image src="/vidyum.png" alt="Vidyum Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-md" />
                  <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl">Vidyum</span>
                </div>
                <a
                  href="https://vidyum.hindustaan.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                >
                  EdTech Platform <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Project Image */}
              <div className="relative flex-1 w-full min-h-[300px] sm:min-h-[380px] rounded-t-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500">
                <Image
                  src="/Vidyum_home.png"
                  alt="Vidyum Website"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <HoverOverlay href="https://vidyum.hindustaan.in/" />
            </motion.div>

            {/* Card 2: Vidyum Dashboard (Right Side) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 pb-0 sm:pb-0 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <Image src="/vidyum.png" alt="Vidyum Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-md" />
                  <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl">Vidyum</span>
                </div>
                <a
                  href="https://vidyum.hindustaan.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                >
                  EdTech Platform <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Dashboard Image */}
              <div className="relative flex-1 w-full min-h-[300px] sm:min-h-[380px] rounded-t-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500">
                <Image
                  src="/vidyum_dashboard.png"
                  alt="Vidyum Dashboard"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <HoverOverlay href="https://vidyum.hindustaan.in/" />
            </motion.div>
          </div>

          {/* Card 3: Karmanisht Website (Left Side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-wrap justify-between items-center mb-8 relative z-10 gap-4">
              <div className="flex items-center gap-4">
                <Image src="/karmanisht-logo.png" alt="Karmanisht Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-4xl tracking-tight">Karmanisht</span>
              </div>
              <a
                href="https://www.karmanisht.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
              >
                Services Marketplace <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Browser Mockup */}
            <div className="relative flex w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col">
              {/* Browser Top Bar */}
              <div className="h-6 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              {/* Screen Area */}
              <div className="bg-white dark:bg-zinc-900 relative w-full flex">
                <Image
                  src="/karmanisht_site.png"
                  alt="Karmanisht Website"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
            <HoverOverlay href="https://www.karmanisht.com" />
          </motion.div>

          {/* Card 4: Karmanisht Mobile App (Right Side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 pb-0 sm:pb-0 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-wrap justify-between items-center mb-6 sm:mb-8 relative z-10 gap-4">
              <div className="flex items-center gap-4">
                <Image src="/karmanisht-logo.png" alt="Karmanisht Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-4xl tracking-tight">Karmanisht</span>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.karmanisht"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
              >
                Services Marketplace <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Mockup */}
            <div className="relative flex justify-center pt-2 pb-2 px-4 mt-0 sm:mt-1">
              <div className="relative w-[75%] max-w-[280px] flex justify-center group-hover:-translate-y-4 max-lg:group-data-[in-view=true]:-translate-y-4 transition-transform duration-500">
                <Image
                  src="/kamanisht-mobile.png"
                  alt="Karmanisht App"
                  width={400}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>
            </div>
            <HoverOverlay href="https://play.google.com/store/apps/details?id=com.karmanisht" />
          </motion.div>

          {/* Card 5: Marketplace App Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 pb-0 sm:pb-0 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <Image src="/Hindustaan_mart_logo.jpeg" alt="Hindustaan Mart Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-md" />
                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl">Marketplace</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer">
                E-Commerce Platform <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="relative flex justify-center pt-4 pb-6 px-4">
              <div className="w-[70%] sm:w-[60%] max-w-[260px] relative group-hover:-translate-y-4 max-lg:group-data-[in-view=true]:-translate-y-4 transition-transform duration-500">
                {/* Screen Area */}
                <div className="w-full relative flex">
                  <Image
                    src="/Marketplace app design (2).png"
                    alt="Marketplace App"
                    width={400}
                    height={800}
                    className="w-full h-auto object-cover object-top drop-shadow-2xl"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <HoverOverlay href="https://play.google.com/store/apps/details?id=com.hindustaanmart" />
          </motion.div>

          {/* Card 6: Hindustaan Mart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <Image src="/Hindustaan_mart_logo.jpeg" alt="Hindustaan Mart Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-md" />
                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl">Hindustaan Mart</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer">
                E-Commerce Platform <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Browser Mockup */}
            <div className="relative flex w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col">
              {/* Browser Top Bar */}
              <div className="h-6 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              {/* Screen Area */}
              <div className="bg-white dark:bg-zinc-900 relative w-full flex">
                <Image
                  src="/hindutaanmart.png"
                  alt="Hindustaan Mart Web"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
            <HoverOverlay href="https://www.hindustaanmart.in/" />
          </motion.div>

          {/* Card 7: Bhukkadh Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-wrap justify-between items-center mb-8 relative z-10 gap-4">
              <div className="flex items-center gap-4">
                <Image src="/new-bhukkadh-icon.png" alt="Bhukkadh Icon" width={48} height={48} className="w-12 h-12 object-contain" />
                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-4xl tracking-tight">Bhukkadh</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer">
                Food Delivery Platform <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Browser Mockup */}
            <div className="relative flex w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col">
              {/* Browser Top Bar */}
              <div className="h-6 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              {/* Screen Area */}
              <div className="bg-white dark:bg-zinc-900 relative w-full flex">
                <Image
                  src="/bhukkadh.png"
                  alt="Bhukkadh Web"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
            <HoverOverlay href="https://bhukkadh.hindustaan.in/" />
          </motion.div>

          {/* Card 8: Bhukkadh Mobile App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 pb-0 sm:pb-0 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-wrap justify-between items-center mb-6 relative z-10 gap-4">
              <div className="flex items-center gap-4">
                <Image src="/new-bhukkadh-icon.png" alt="Bhukkadh Icon" width={48} height={48} className="w-12 h-12 object-contain" />
                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-4xl tracking-tight">Bhukkadh</span>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.bhukkhad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
              >
                Food Delivery Platform <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project Image */}
            <div className="relative flex justify-center pt-4 pb-6 px-4">
              <div className="relative w-[75%] max-w-[280px] flex justify-center group-hover:-translate-y-4 max-lg:group-data-[in-view=true]:-translate-y-4 transition-transform duration-500">
                <Image
                  src="/bhukkadh_phone.png"
                  alt="Bhukkadh App"
                  width={400}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>
            </div>
            <HoverOverlay href="https://play.google.com/store/apps/details?id=com.bhukkhad" />
          </motion.div>

          {/* Card 9: Ghumakkadh Mobile App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 pb-0 sm:pb-0 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-wrap justify-between items-center mb-6 relative z-10 gap-4">
              <div className="flex items-center gap-4">
                <Image src="/ghumakkadh_icon.png" alt="Ghumakkadh Icon" width={48} height={48} className="w-12 h-12 object-contain" />
                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-4xl tracking-tight">Ghumakkadh</span>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.ghumakkadh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
              >
                Ride-Hailing Platform <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project Image */}
            <div className="relative flex justify-center pt-4 pb-6 px-4">
              <div className="relative w-[60%] max-w-[220px] flex justify-center group-hover:-translate-y-4 max-lg:group-data-[in-view=true]:-translate-y-4 transition-transform duration-500">
                <Image
                  src="/ghumakkadh_phone.png"
                  alt="Ghumakkadh App"
                  width={400}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>
            </div>
            <HoverOverlay href="https://play.google.com/store/apps/details?id=com.ghumakkadh" />
          </motion.div>

          {/* Card 10: Ghumakkadh Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-wrap justify-between items-center mb-8 relative z-10 gap-4">
              <div className="flex items-center gap-4">
                <Image src="/ghumakkadh_icon.png" alt="Ghumakkadh Icon" width={48} height={48} className="w-12 h-12 object-contain" />
                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-4xl tracking-tight">Ghumakkadh</span>
              </div>
              <a
                href="https://ghumakkadh.hindustaan.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
              >
                Ride-Hailing Platform <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Browser Mockup */}
            <div className="relative flex w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col">
              {/* Browser Top Bar */}
              <div className="h-6 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              {/* Screen Area */}
              <div className="bg-white dark:bg-zinc-900 relative w-full flex">
                <Image
                  src="/ghumakkadh.png"
                  alt="Ghumakkadh Web"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
            <HoverOverlay href="https://ghumakkadh.hindustaan.in/" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
