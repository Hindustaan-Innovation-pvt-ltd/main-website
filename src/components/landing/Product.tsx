"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="absolute inset-0 z-30 bg-black/10 dark:bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 flex items-center justify-center cursor-pointer">
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

// Pinned Stacking Card Component
// As user scrolls down, current product screen stays pinned while incoming product rises from bottom and places itself on top
function ProductStackSlide({
  children,
  index,
  total,
  scrollYProgress,
  isDesktop,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isDesktop: boolean;
}) {
  const transitions = total - 1; // 8 transitions for 9 products
  const segment = 1 / transitions;

  // Incoming transition interval for this product (index > 0)
  const enterStart = index === 0 ? 0 : (index - 1) * segment;
  const enterEnd = index === 0 ? 0 : (index - 1) * segment + segment * 0.85;

  // Outgoing / covered transition interval when next product places on top of this one
  const exitStart = index * segment;
  const exitEnd = index * segment + segment * 0.85;

  // Y Transform: Product 0 is already in place.
  // Subsequent products rise up from below (100% -> 0%) and settle directly on top
  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [enterStart, enterEnd],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"],
    { clamp: true }
  );

  // Subtle depth scale when the NEXT product slides on top
  const scale = useTransform(
    scrollYProgress,
    index === total - 1 ? [0, 1] : [exitStart, exitEnd],
    index === total - 1 ? [1, 1] : [1, 0.95],
    { clamp: true }
  );

  // Subtle dimming when covered
  const opacity = useTransform(
    scrollYProgress,
    index === total - 1 ? [0, 1] : [exitStart, exitEnd],
    index === total - 1 ? [1, 1] : [1, 0.7],
    { clamp: true }
  );

  return (
    <motion.div
      style={
        isDesktop
          ? {
              y,
              scale,
              opacity,
              zIndex: 10 + index,
            }
          : undefined
      }
      className={`w-full ${
        isDesktop
          ? "lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center"
          : "relative mb-8 sm:mb-12"
      }`}
    >
      <div className="w-full h-full max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px] bg-[#f5f5f5] dark:bg-[#09090b] rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl shadow-zinc-900/15 dark:shadow-black/80 border border-zinc-200/50 dark:border-white/5 flex flex-col justify-center">
        {children}
      </div>
    </motion.div>
  );
}

export function ProductSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const totalProducts = 9;

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pb-16 pt-2 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      {/* 
        On Desktop (lg+): Container is tall (680vh), inner container is sticky.
        Current product stays pinned while next product scrolls up and places itself directly on top!
        On Mobile: Standard natural scrolling flow.
      */}
      <div
        ref={containerRef}
        style={isDesktop ? { height: "680vh" } : undefined}
        className="relative w-full"
      >
        <div
          className={
            isDesktop
              ? "sticky top-20 xl:top-24 w-full h-[calc(100vh-6.5rem)] flex items-center justify-center overflow-hidden max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 py-1"
              : "w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10"
          }
        >
          {/* Card Deck Wrapper sized cleanly to fit PC screens without clipping */}
          <div className="relative w-full h-full max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px] flex items-center justify-center">

            {/* 1. Karmanisht Section */}
            <ProductStackSlide
              index={0}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 1: Karmanisht Website (Left Side - 2 cols) */}
                <div className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/karmanisht-logo.png" alt="Karmanisht Logo" width={34} height={34} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight">Karmanisht</span>
                    </div>
                    <a
                      href="https://www.karmanisht.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Services Marketplace <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative flex-1 flex w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px]">
                    <div className="h-6 sm:h-7 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3.5 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 relative w-full flex-1 overflow-hidden flex items-start justify-center">
                      <Image
                        src="/karmanisht_site.png"
                        alt="Karmanisht Website"
                        width={1366}
                        height={768}
                        className="w-full h-full object-contain object-top"
                        loading="eager"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://www.karmanisht.com" />
                </div>

                {/* Card 2: Karmanisht Mobile App (Right Side - 1 col) */}
                <div className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/karmanisht-logo.png" alt="Karmanisht Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl tracking-tight">Karmanisht</span>
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.karmanisht"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      App Store <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative flex justify-center pt-1 pb-2 px-2 flex-1 items-center">
                    <div className="relative w-[75%] sm:w-[68%] max-w-[220px] xl:max-w-[250px] flex justify-center group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 transition-transform duration-500">
                      <Image
                        src="/kamanisht-mobile.png"
                        alt="Karmanisht App"
                        width={400}
                        height={800}
                        className="w-full h-auto max-h-[250px] sm:max-h-[270px] xl:max-h-[290px] 2xl:max-h-[350px] object-contain drop-shadow-2xl"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://play.google.com/store/apps/details?id=com.karmanisht" />
                </div>
              </div>
            </ProductStackSlide>

            {/* 2. Bhukkadh Section */}
            <ProductStackSlide
              index={1}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 4: Bhukkadh Mobile App (Left Side - 1 col) */}
                <div className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/new-bhukkadh-icon.png" alt="Bhukkadh Icon" width={32} height={32} className="w-8 h-8 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl tracking-tight">Bhukkadh</span>
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.bhukkhad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Food App <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative flex justify-center pt-1 pb-2 px-2 flex-1 items-center">
                    <div className="relative w-[75%] sm:w-[68%] max-w-[220px] xl:max-w-[250px] flex justify-center group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 transition-transform duration-500">
                      <Image
                        src="/bhukkadh_phone.png"
                        alt="Bhukkadh App"
                        width={400}
                        height={800}
                        className="w-full h-auto max-h-[250px] sm:max-h-[270px] xl:max-h-[290px] 2xl:max-h-[350px] object-contain drop-shadow-2xl"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://play.google.com/store/apps/details?id=com.bhukkhad" />
                </div>

                {/* Card 3: Bhukkadh Website (Right Side - 2 cols) */}
                <div className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/new-bhukkadh-icon.png" alt="Bhukkadh Icon" width={34} height={34} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight">Bhukkadh</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer">
                      Food Delivery Platform <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative flex-1 flex w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px]">
                    <div className="h-6 sm:h-7 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3.5 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 relative w-full flex-1 overflow-hidden flex items-start justify-center">
                      <Image
                        src="/bhukkadh.png"
                        alt="Bhukkadh Web"
                        width={1889}
                        height={897}
                        className="w-full h-full object-contain object-top"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://bhukkadh.hindustaan.in/" />
                </div>
              </div>
            </ProductStackSlide>

            {/* 3. Ghumakkadh Section */}
            <ProductStackSlide
              index={2}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 6: Ghumakkadh Website (Left Side - 2 cols) */}
                <div className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/ghumakkadh_icon.png" alt="Ghumakkadh Icon" width={34} height={34} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight">Ghumakkadh</span>
                    </div>
                    <a
                      href="https://ghumakkadh.hindustaan.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Ride-Hailing Platform <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative flex-1 flex w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px]">
                    <div className="h-6 sm:h-7 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3.5 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 relative w-full flex-1 overflow-hidden flex items-start justify-center">
                      <Image
                        src="/ghumakkadh.png"
                        alt="Ghumakkadh Web"
                        width={1901}
                        height={911}
                        className="w-full h-full object-contain object-top"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://ghumakkadh.hindustaan.in/" />
                </div>

                {/* Card 5: Ghumakkadh Mobile App (Right Side - 1 col) */}
                <div className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/ghumakkadh_icon.png" alt="Ghumakkadh Icon" width={32} height={32} className="w-8 h-8 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl tracking-tight">Ghumakkadh</span>
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ghumakkadh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Ride App <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative flex justify-center pt-1 pb-2 px-2 flex-1 items-center">
                    <div className="relative w-[75%] sm:w-[68%] max-w-[220px] xl:max-w-[250px] flex justify-center group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 transition-transform duration-500">
                      <Image
                        src="/ghumakkadh_phone.png"
                        alt="Ghumakkadh App"
                        width={400}
                        height={800}
                        className="w-full h-auto max-h-[250px] sm:max-h-[270px] xl:max-h-[290px] 2xl:max-h-[350px] object-contain drop-shadow-2xl"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://play.google.com/store/apps/details?id=com.ghumakkadh" />
                </div>
              </div>
            </ProductStackSlide>

            {/* 4. TruckBharat Section */}
            <ProductStackSlide
              index={3}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 7: TruckBharat Mobile App (Left Side - 1 col) */}
                <div className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/truckbharat-logo.png" alt="TruckBharat Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-xl" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl tracking-tight">TruckBharat</span>
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.truckbharat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Freight App <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative flex justify-center pt-1 pb-2 px-2 flex-1 items-center">
                    <div className="relative w-[75%] sm:w-[68%] max-w-[220px] xl:max-w-[250px] flex justify-center group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 transition-transform duration-500">
                      <Image
                        src="/truckbharat_phone.png"
                        alt="TruckBharat Driver & Shipper App"
                        width={400}
                        height={800}
                        className="w-full h-auto max-h-[250px] sm:max-h-[270px] xl:max-h-[290px] 2xl:max-h-[350px] object-contain drop-shadow-2xl rounded-3xl"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://play.google.com/store/apps/details?id=com.truckbharat" />
                </div>

                {/* Card 8: TruckBharat Digital Freight Marketplace (Right Side - 2 cols) */}
                <div className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/truckbharat-logo.png" alt="TruckBharat Logo" width={34} height={34} className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-xl" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight">TruckBharat</span>
                    </div>
                    <a
                      href="https://truckbharat.hindustaan.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Digital Freight Platform <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative flex-1 flex w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px]">
                    <div className="h-6 sm:h-7 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3.5 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 relative w-full flex-1 overflow-hidden flex items-start justify-center">
                      <Image
                        src="/truckbharat.png"
                        alt="TruckBharat Digital Freight Platform"
                        width={1200}
                        height={600}
                        className="w-full h-full object-contain object-top"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://truckbharat.hindustaan.tech/" />
                </div>
              </div>
            </ProductStackSlide>

            {/* 5. Hindustaan Mart Section */}
            <ProductStackSlide
              index={4}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 10: Hindustaan Mart Web (Left Side - 2 cols) */}
                <div className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-center mb-2.5 sm:mb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <Image src="/Hindustaan_mart_logo.jpeg" alt="Hindustaan Mart Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-md" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight">Hindustaan Mart</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer">
                      E-Commerce Platform <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative flex-1 flex w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px]">
                    <div className="h-6 sm:h-7 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3.5 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 relative w-full flex-1 overflow-hidden flex items-start justify-center">
                      <Image
                        src="/hindutaanmart.png"
                        alt="Hindustaan Mart Web"
                        width={1200}
                        height={800}
                        className="w-full h-full object-contain object-top"
                        loading="eager"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://www.hindustaanmart.in/" />
                </div>

                {/* Card 9: Marketplace Mobile App (Right Side - 1 col) */}
                <div className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-center mb-2.5 sm:mb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <Image src="/Hindustaan_mart_logo.jpeg" alt="Hindustaan Mart Logo" width={30} height={30} className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-md" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl">Marketplace</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer">
                      E-Commerce <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative flex justify-center pt-1 pb-2 px-2 flex-1 items-center">
                    <div className="w-[75%] sm:w-[65%] max-w-[220px] xl:max-w-[240px] relative group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 transition-transform duration-500">
                      <Image
                        src="/Marketplace app design (2).png"
                        alt="Marketplace App"
                        width={400}
                        height={800}
                        className="w-full h-auto max-h-[250px] sm:max-h-[270px] xl:max-h-[290px] 2xl:max-h-[350px] object-contain drop-shadow-2xl"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://play.google.com/store/apps/details?id=com.hindustaanmart" />
                </div>
              </div>
            </ProductStackSlide>

            {/* 6. Vidyum Section (50-50% Equal Width Cards) */}
            <ProductStackSlide
              index={5}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 11: Vidyum Website (Left Side) */}
                <div className="relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-center mb-2.5 sm:mb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <Image src="/vidyum.png" alt="Vidyum Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-md" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl">Vidyum</span>
                    </div>
                    <a
                      href="https://vidyum.hindustaan.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      EdTech Platform <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Project Image */}
                  <div className="relative flex-1 w-full min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px] rounded-t-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500">
                    <Image
                      src="/Vidyum_home.png"
                      alt="Vidyum Website"
                      fill
                      className="object-contain object-top"
                      unoptimized
                    />
                  </div>
                  <HoverOverlay href="https://vidyum.hindustaan.in/" />
                </div>

                {/* Card 12: Vidyum Dashboard (Right Side) */}
                <div className="relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-center mb-2.5 sm:mb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <Image src="/vidyum.png" alt="Vidyum Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-md" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl">Vidyum</span>
                    </div>
                    <a
                      href="https://vidyum.hindustaan.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      EdTech Platform <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Dashboard Image */}
                  <div className="relative flex-1 w-full min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px] rounded-t-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500">
                    <Image
                      src="/vidyum_dashboard.png"
                      alt="Vidyum Dashboard"
                      fill
                      className="object-contain object-top"
                      unoptimized
                    />
                  </div>
                  <HoverOverlay href="https://vidyum.hindustaan.in/" />
                </div>
              </div>
            </ProductStackSlide>

            {/* 7. Miracal Section */}
            <ProductStackSlide
              index={6}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 13: Miracal Web / Messaging Platform (Left Side - 2 cols) */}
                <div className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/miracal-brand.png" alt="Miracal Logo" width={34} height={34} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight">Miracal</span>
                    </div>
                    <a
                      href="https://miracal.hindustaan.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Instant Messaging App <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative flex-1 flex w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px]">
                    <div className="h-6 sm:h-7 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3.5 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 relative w-full flex-1 overflow-hidden flex items-start justify-center">
                      <Image
                        src="/Miracal.png"
                        alt="Miracal Platform"
                        width={1200}
                        height={800}
                        className="w-full h-full object-contain object-top"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://miracal.hindustaan.tech" />
                </div>

                {/* Card 14: Miracal Mobile App (Right Side - 1 col) */}
                <div className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/miracal-brand.png" alt="Miracal Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl tracking-tight">Miracal</span>
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.miracal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Chat App <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative flex justify-center pt-1 pb-2 px-2 flex-1 items-center">
                    <div className="relative w-[75%] sm:w-[68%] max-w-[220px] xl:max-w-[250px] flex justify-center group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 transition-transform duration-500">
                      <Image
                        src="/miracal-mobile.png"
                        alt="Miracal Chat App"
                        width={400}
                        height={800}
                        className="w-full h-auto max-h-[250px] sm:max-h-[270px] xl:max-h-[290px] 2xl:max-h-[350px] object-contain drop-shadow-2xl"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://play.google.com/store/apps/details?id=com.miracal" />
                </div>
              </div>
            </ProductStackSlide>

            {/* 8. Miracal Business Section */}
            <ProductStackSlide
              index={7}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 15: Miracal Business Mobile App (Left Side - 1 col) */}
                <div className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/miracal-brand.png" alt="Miracal Business Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl tracking-tight">Business</span>
                    </div>
                    <a
                      href="https://miracalbussiness.hindustaan.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Messaging <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative flex justify-center pt-1 pb-2 px-2 flex-1 items-center">
                    <div className="relative w-[75%] sm:w-[68%] max-w-[220px] xl:max-w-[250px] flex justify-center group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 transition-transform duration-500">
                      <Image
                        src="/miracal_business_phone.png"
                        alt="Miracal Business App"
                        width={400}
                        height={800}
                        className="w-full h-auto max-h-[250px] sm:max-h-[270px] xl:max-h-[290px] 2xl:max-h-[350px] object-contain drop-shadow-2xl"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://play.google.com/store/apps/details?id=com.miracal.business" />
                </div>

                {/* Card 16: Miracal Business Landing Page (Right Side - 2 cols) */}
                <div className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/miracal-brand.png" alt="Miracal Business Logo" width={34} height={34} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight">Miracal Business</span>
                    </div>
                    <a
                      href="https://miracalbussiness.hindustaan.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Business Platform <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative flex-1 flex w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px]">
                    <div className="h-6 sm:h-7 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3.5 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 relative w-full flex-1 overflow-hidden flex items-start justify-center">
                      <Image
                        src="/miracal_business.png"
                        alt="Miracal Business Platform"
                        width={1920}
                        height={901}
                        className="w-full h-full object-contain object-top"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://miracalbussiness.hindustaan.tech" />
                </div>
              </div>
            </ProductStackSlide>

            {/* 9. Onstay Section */}
            <ProductStackSlide
              index={8}
              total={totalProducts}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5 w-full h-full min-h-[380px] xl:min-h-[420px] 2xl:min-h-[500px] max-h-[440px] xl:max-h-[480px] 2xl:max-h-[580px]">
                {/* Card 17: Onstay Home Platform (Left Side - 2 cols) */}
                <div className="lg:col-span-2 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/onstay-logo.png" alt="Onstay Logo" width={34} height={34} className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-xl" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight">Onstay</span>
                    </div>
                    <a
                      href="https://onstay.hindustaan.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs sm:text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Hotel, Room & Lounge Booking <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative flex-1 flex w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg group-hover:-translate-y-2 max-lg:group-data-[in-view=true]:-translate-y-2 transition-transform duration-500 flex-col min-h-[220px] sm:min-h-[240px] xl:min-h-[270px] 2xl:min-h-[340px]">
                    <div className="h-6 sm:h-7 bg-zinc-200/50 dark:bg-zinc-800 flex items-center px-3.5 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 relative w-full flex-1 overflow-hidden flex items-start justify-center">
                      <Image
                        src="/onstay_home.png"
                        alt="Onstay Home Platform"
                        width={1200}
                        height={600}
                        className="w-full h-full object-contain object-top"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://onstay.hindustaan.tech/" />
                </div>

                {/* Card 18: Onstay Mobile App (Right Side - 1 col) */}
                <div className="lg:col-span-1 relative bg-white dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-white/10 rounded-[2rem] p-4 sm:p-5 xl:p-5 pb-0 sm:pb-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-center mb-2.5 sm:mb-3 relative z-10 gap-3">
                    <div className="flex items-center gap-3">
                      <Image src="/onstay-logo.png" alt="Onstay Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-xl" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl tracking-tight">Onstay</span>
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.onstay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium text-xs group-hover:text-zinc-900 dark:group-hover:text-white transition-colors cursor-pointer"
                    >
                      Hotel App <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative flex justify-center pt-1 pb-2 px-2 flex-1 items-center">
                    <div className="relative w-[75%] sm:w-[68%] max-w-[220px] xl:max-w-[250px] flex justify-center group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 transition-transform duration-500">
                      <Image
                        src="/OnStay_Mockup.png"
                        alt="Onstay Mobile App"
                        width={400}
                        height={800}
                        className="w-full h-auto max-h-[250px] sm:max-h-[270px] xl:max-h-[290px] 2xl:max-h-[350px] object-contain drop-shadow-2xl"
                        unoptimized
                      />
                    </div>
                  </div>
                  <HoverOverlay href="https://play.google.com/store/apps/details?id=com.onstay" />
                </div>
              </div>
            </ProductStackSlide>

          </div>
        </div>
      </div>
    </section>
  );
}
