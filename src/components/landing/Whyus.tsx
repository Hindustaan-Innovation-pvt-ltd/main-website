"use client";

import { motion } from "motion/react";

export function WhyUsSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black mb-6"
            >
              WHY US
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.1] tracking-tight"
            >
              Design Decisions Grounded<br />
              In <span className="text-[#1ba453]">Business</span> Impact
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm lg:pb-3"
          >
            <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed">
              A transparent process, developer-ready systems, and direct collaboration — so ideas move smoothly from concept to shipped product.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid - 3 Columns using Flex */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 flex-1">
             <Card 
               title="Design Directly with Designers"
               desc="You work directly with designers, no handoffs, no middle layers, no delays."
               illustration={<DesignDirectlyIllustration />}
               className="h-[588px]"
             />
             <Card 
               title="Industry-Leading Design Tools"
               desc="We design with modern, industry-leading tools trusted by high-performing teams."
               illustration={<ToolsIllustration />}
               className="h-[588px]"
             />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 flex-1">
             <Card 
               title="Real-Time Project Updates"
               desc="You get clear, real-time progress with regular updates and shared visibility."
               illustration={<ProjectUpdatesIllustration />}
               className="h-[384px]"
             />
             <Card 
               title="Ongoing & Dependable Support"
               desc="We stay involved after delivery to support iterations, fixes, and future needs."
               illustration={<NodeIllustration label="Support" />}
               className="h-[384px]"
             />
             <Card 
               title="Proven Experience"
               desc="We've delivered 50+ projects for startups and growing products across industries."
               illustration={<ProjectsIllustration />}
               className="h-[384px]"
             />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 flex-1">
             <Card 
               title="Built for Seamless Execution"
               desc="Every design is structured, documented, and ready for smooth development handoff."
               illustration={<ExecutionIllustration />}
               className="h-[700px]"
             />
             <Card 
               title="No-Code Development"
               desc="We use no-code and low-code tools to ship faster without sacrificing scalability."
               illustration={<NoCodeIllustration />}
               className="h-[476px]"
             />
          </div>

        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Card Wrapper
// ----------------------------------------------------------------------------
function Card({ title, desc, illustration, className = "" }: { title: string, desc: string, illustration: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 pb-0 sm:pb-0 flex flex-col shadow-sm border border-zinc-100 overflow-hidden group hover:shadow-xl transition-shadow ${className}`}
    >
      <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-zinc-500 font-medium text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
        {desc}
      </p>
      <div className="flex-1 relative w-full group-hover:scale-[1.02] max-lg:group-data-[in-view=true]:scale-[1.02] transition-transform duration-500">
        {illustration}
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------------------------------
// Illustrations
// ----------------------------------------------------------------------------

function DesignDirectlyIllustration() {
  return (
    <div className="absolute inset-0 flex justify-center w-full h-full overflow-hidden">
      
      {/* Desktop Frame */}
      <div className="absolute top-6 right-2 sm:right-6 w-[95%] sm:w-[80%] h-[85%] bg-zinc-50/80 backdrop-blur-sm rounded-t-xl border border-zinc-200 shadow-sm p-3 flex flex-col">
         {/* Desktop Header */}
         <div className="flex items-center justify-between mb-5 px-1">
           <div className="w-5 h-5 rounded-full bg-zinc-200"></div>
           <div className="flex gap-2">
             <div className="w-10 h-1.5 rounded-full bg-zinc-200"></div>
             <div className="w-6 h-1.5 rounded-full bg-zinc-200"></div>
             <div className="w-6 h-1.5 rounded-full bg-zinc-200"></div>
           </div>
           <div className="flex gap-1.5">
             <div className="w-3.5 h-3.5 rounded-full bg-zinc-200"></div>
             <div className="w-3.5 h-3.5 rounded-full bg-zinc-200"></div>
           </div>
         </div>

         {/* Desktop Body */}
         <div className="flex-1 bg-white border border-zinc-100 rounded-lg p-5 flex flex-col relative overflow-hidden">
            
            {/* Top Area */}
            <div className="flex flex-col items-center gap-2.5 mb-8 mt-2">
               <div className="w-40 h-2 bg-zinc-200 rounded-full"></div>
               
               {/* Animated Black Line */}
               <div className="relative h-2 bg-zinc-800 rounded-full transition-all duration-700 w-12 group-hover:w-40 max-lg:group-data-[in-view=true]:w-40 self-center">
                  {/* Designer Cursor Top */}
                  <div className="absolute top-0 left-1/2 transition-all duration-700 -translate-y-1 -translate-x-1 group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 group-hover:translate-x-12 max-lg:group-data-[in-view=true]:translate-x-12 z-20">
                    <div className="relative">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#27272a" stroke="white" strokeWidth="2" className="absolute top-0 left-0 z-20 drop-shadow-md">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                      </svg>
                      <div className="bg-[#27272a] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap absolute top-4 left-4 z-10">
                        Designer
                      </div>
                    </div>
                  </div>
               </div>

               <div className="w-20 h-2 bg-zinc-200 rounded-full"></div>
               <div className="w-10 h-2 bg-zinc-200 rounded-full"></div>
            </div>

            {/* Grid Area */}
            <div className="grid grid-cols-3 gap-3 mb-6">
               <div className="h-16 bg-zinc-50 rounded-lg border border-zinc-100"></div>
               <div className="h-16 bg-zinc-50 rounded-lg border border-zinc-100"></div>
               <div className="h-16 bg-zinc-50 rounded-lg border border-zinc-100"></div>
            </div>

            {/* Bottom Area */}
            <div className="flex justify-between items-start mt-auto pb-2">
               <div className="w-16 h-2 bg-zinc-200 rounded-full mt-2"></div>
               
               {/* Animated Black Pill Bottom */}
               <div className="flex flex-col gap-2.5 w-1/2">
                  <div className="relative h-2.5 bg-zinc-800 rounded-full transition-all duration-700 w-12 group-hover:w-32 max-lg:group-data-[in-view=true]:w-32 ml-auto">
                     {/* Designer Cursor Bottom */}
                     <div className="absolute top-0 left-0 transition-all duration-700 -translate-y-2 -translate-x-2 group-hover:-translate-y-3 max-lg:group-data-[in-view=true]:-translate-y-3 group-hover:-translate-x-6 max-lg:group-data-[in-view=true]:-translate-x-6 z-20">
                       <div className="relative">
                         <div className="bg-[#27272a] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap absolute bottom-4 right-2 z-10">
                           Designer
                         </div>
                         <svg width="15" height="15" viewBox="0 0 24 24" fill="#27272a" stroke="white" strokeWidth="2" className="absolute top-0 left-0 z-20 drop-shadow-md">
                           <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                         </svg>
                       </div>
                     </div>
                  </div>
                  <div className="w-16 h-2 bg-zinc-200 rounded-full ml-auto"></div>
                  <div className="w-12 h-2 bg-zinc-200 rounded-full ml-auto"></div>
               </div>
            </div>

         </div>
      </div>
      
      {/* Mobile Frame */}
      <div className="absolute bottom-[-10px] left-2 sm:left-6 w-[60%] sm:w-[45%] h-[75%] bg-white rounded-t-2xl border border-zinc-200 shadow-[0_0_40px_rgba(0,0,0,0.08)] p-2.5 z-30 flex flex-col">
         {/* Mobile Header */}
         <div className="flex justify-between items-start mb-4 px-1">
           <div className="flex flex-col gap-1.5 mt-1">
             <div className="w-8 h-1.5 rounded-full bg-zinc-200"></div>
             <div className="w-14 h-2 rounded-full bg-zinc-200"></div>
           </div>
           <div className="w-5 h-1.5 rounded-full bg-zinc-200 mt-1"></div>
         </div>

         {/* Mobile Body */}
         <div className="flex-1 bg-white border border-zinc-100 rounded-xl p-3 flex flex-col gap-3">
            
            {/* Animated Green Line Area */}
            <div className="flex flex-col items-center gap-2 mt-4">
               <div className="relative h-2 bg-[#1ba453] rounded-full transition-all duration-700 w-10 group-hover:w-28 max-lg:group-data-[in-view=true]:w-28 self-center">
                  {/* You Cursor */}
                  <div className="absolute top-0 left-0 transition-all duration-700 -translate-y-4 -translate-x-2 group-hover:-translate-y-6 max-lg:group-data-[in-view=true]:-translate-y-6 group-hover:-translate-x-6 max-lg:group-data-[in-view=true]:-translate-x-6 z-20">
                     <div className="relative">
                       <div className="bg-[#1ba453] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap absolute bottom-4 left-1 z-10">
                         You
                       </div>
                       <svg width="15" height="15" viewBox="0 0 24 24" fill="#ff5a1f" stroke="white" strokeWidth="2" className="absolute top-0 left-0 z-20 drop-shadow-md">
                         <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                       </svg>
                     </div>
                  </div>
               </div>
               <div className="w-20 h-2 bg-zinc-200 rounded-full mt-1"></div>
            </div>

            <div className="w-full h-20 bg-zinc-50 rounded-lg border border-zinc-100 mt-2"></div>

            <div className="w-12 h-2 bg-zinc-200 rounded-full mt-auto mb-1"></div>
            <div className="flex gap-2 h-8">
              <div className="flex-1 h-full bg-zinc-50 rounded-md border border-zinc-100"></div>
              <div className="flex-1 h-full bg-zinc-50 rounded-md border border-zinc-100"></div>
              <div className="flex-1 h-full bg-zinc-50 rounded-md border border-zinc-100"></div>
            </div>
         </div>
      </div>
    </div>
  );
}

function ToolsIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-10 group cursor-pointer bg-transparent">
      <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-square">
         {/* Background Grid (16 empty cells) */}
         <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-3 sm:gap-4 z-0">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="bg-zinc-50/70 rounded-[1rem] sm:rounded-[1rem] border border-zinc-100/50" />
            ))}
         </div>

         {/* Active Icons Layer */}
         <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-3 sm:gap-4 z-10">
            
            {/* Framer - Starts Row 1, Col 1 -> Moves to Col 4 (+3 cols) */}
            <div className="col-start-1 row-start-1 bg-[#1c1c1c] rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-zinc-700/50 transition-transform duration-700 ease-in-out group-hover:translate-x-[calc(300%+2.25rem)] max-lg:group-data-[in-view=true]:translate-x-[calc(300%+2.25rem)] sm:group-hover:translate-x-[calc(300%+3rem)] sm:max-lg:group-data-[in-view=true]:translate-x-[calc(300%+3rem)]">
               <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="M5.33 2h13.33v6.67h-6.67zm0 6.67H12l6.67 6.67H12v6.67l-6.67-6.67z"/>
</svg>
            </div>

            {/* ChatGPT - Starts Row 2, Col 2 -> Moves to Col 1 (-1 col) */}
            <div className="col-start-2 row-start-2 bg-[#1c1c1c] rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-zinc-700/50 transition-transform duration-700 ease-in-out group-hover:-translate-x-[calc(100%+0.75rem)] max-lg:group-data-[in-view=true]:-translate-x-[calc(100%+0.75rem)] sm:group-hover:-translate-x-[calc(100%+1rem)] sm:max-lg:group-data-[in-view=true]:-translate-x-[calc(100%+1rem)]">
               <svg className="w-10 h-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 509.639">
                 <path fill="white" fillRule="nonzero" d="M412.037 221.764a90.834 90.834 0 004.648-28.67 90.79 90.79 0 00-12.443-45.87c-16.37-28.496-46.738-46.089-79.605-46.089-6.466 0-12.943.683-19.264 2.04a90.765 90.765 0 00-67.881-30.515h-.576c-.059.002-.149.002-.216.002-39.807 0-75.108 25.686-87.346 63.554-25.626 5.239-47.748 21.31-60.682 44.03a91.873 91.873 0 00-12.407 46.077 91.833 91.833 0 0023.694 61.553 90.802 90.802 0 00-4.649 28.67 90.804 90.804 0 0012.442 45.87c16.369 28.504 46.74 46.087 79.61 46.087a91.81 91.81 0 0019.253-2.04 90.783 90.783 0 0067.887 30.516h.576l.234-.001c39.829 0 75.119-25.686 87.357-63.588 25.626-5.242 47.748-21.312 60.682-44.033a91.718 91.718 0 0012.383-46.035 91.83 91.83 0 00-23.693-61.553l-.004-.005zM275.102 413.161h-.094a68.146 68.146 0 01-43.611-15.8 56.936 56.936 0 002.155-1.221l72.54-41.901a11.799 11.799 0 005.962-10.251V241.651l30.661 17.704c.326.163.55.479.596.84v84.693c-.042 37.653-30.554 68.198-68.21 68.273h.001zm-146.689-62.649a68.128 68.128 0 01-9.152-34.085c0-3.904.341-7.817 1.005-11.663.539.323 1.48.897 2.155 1.285l72.54 41.901a11.832 11.832 0 0011.918-.002l88.563-51.137v35.408a1.1 1.1 0 01-.438.94l-73.33 42.339a68.43 68.43 0 01-34.11 9.12 68.359 68.359 0 01-59.15-34.11l-.001.004zm-19.083-158.36a68.044 68.044 0 0135.538-29.934c0 .625-.036 1.731-.036 2.5v83.801l-.001.07a11.79 11.79 0 005.954 10.242l88.564 51.13-30.661 17.704a1.096 1.096 0 01-1.034.093l-73.337-42.375a68.36 68.36 0 01-34.095-59.143 68.412 68.412 0 019.112-34.085l-.004-.003zm251.907 58.621l-88.563-51.137 30.661-17.697a1.097 1.097 0 011.034-.094l73.337 42.339c21.109 12.195 34.132 34.746 34.132 59.132 0 28.604-17.849 54.199-44.686 64.078v-86.308c.004-.032.004-.065.004-.096 0-4.219-2.261-8.119-5.919-10.217zm30.518-45.93c-.539-.331-1.48-.898-2.155-1.286l-72.54-41.901a11.842 11.842 0 00-5.958-1.611c-2.092 0-4.15.558-5.957 1.611l-88.564 51.137v-35.408l-.001-.061a1.1 1.1 0 01.44-.88l73.33-42.303a68.301 68.301 0 0134.108-9.129c37.704 0 68.281 30.577 68.281 68.281a68.69 68.69 0 01-.984 11.545v.005zm-191.843 63.109l-30.668-17.704a1.09 1.09 0 01-.596-.84v-84.692c.016-37.685 30.593-68.236 68.281-68.236a68.332 68.332 0 0143.689 15.804 63.09 63.09 0 00-2.155 1.222l-72.54 41.9a11.794 11.794 0 00-5.961 10.248v.068l-.05 102.23zm16.655-35.91l39.445-22.782 39.444 22.767v45.55l-39.444 22.767-39.445-22.767v-45.535z"/>
               </svg>
            </div>

            {/* Webflow - Starts Row 2, Col 4 -> Moves to Col 3 (-1 col) */}
            <div className="col-start-4 row-start-2 bg-[#1c1c1c] rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-zinc-700/50 transition-transform duration-700 ease-in-out group-hover:-translate-x-[calc(100%+0.75rem)] max-lg:group-data-[in-view=true]:-translate-x-[calc(100%+0.75rem)] sm:group-hover:-translate-x-[calc(100%+1rem)] sm:max-lg:group-data-[in-view=true]:-translate-x-[calc(100%+1rem)]">
               <span className="text-white font-black italic text-3xl sm:text-5xl tracking-tighter pr-1 pt-1">W</span>
            </div>

            {/* Figma - Starts Row 3, Col 3 -> Moves to Col 4 (+1 col) */}
            <div className="col-start-3 row-start-3 bg-[#1ba453] rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_20px_rgba(27,164,83,0.3)] border border-[#3ceb7f]/40 transition-transform duration-700 ease-in-out group-hover:translate-x-[calc(100%+0.75rem)] max-lg:group-data-[in-view=true]:translate-x-[calc(100%+0.75rem)] sm:group-hover:translate-x-[calc(100%+1rem)] sm:max-lg:group-data-[in-view=true]:translate-x-[calc(100%+1rem)]">
               <svg viewBox="0 0 38 57" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 text-white">
                 <path d="M19 28.5c5.247 0 9.5-4.253 9.5-9.5S24.247 9.5 19 9.5H9.5v19H19zM9.5 28.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19zm9.5 0c5.247 0 9.5 4.253 9.5 9.5S24.247 47.5 19 47.5v-19z" fill="currentColor"/>
               </svg>
            </div>

            {/* Tailwind - Starts Row 4, Col 2 -> Moves to Col 1 (-1 col) */}
            <div className="col-start-2 row-start-4 bg-[#1c1c1c] rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-zinc-700/50 transition-transform duration-700 ease-in-out group-hover:-translate-x-[calc(100%+0.75rem)] max-lg:group-data-[in-view=true]:-translate-x-[calc(100%+0.75rem)] sm:group-hover:-translate-x-[calc(100%+1rem)] sm:max-lg:group-data-[in-view=true]:-translate-x-[calc(100%+1rem)]">
               <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 sm:w-12 sm:h-12">
                 <path d="M6 10.5c-2.5 0-4.5 1.5-5.5 4.5 1.5-1.5 3-2 4.5-1.5 1 .3 1.8 1 2.5 2 1.5 1.8 3.5 2.5 5.5 1.5-1.5 1.5-3 2-4.5 1.5-1-.3-1.8-1-2.5-2-1.5-1.8-3.5-2.5-5.5-1.5zm11.5-5c-2.5 0-4.5 1.5-5.5 4.5 1.5-1.5 3-2 4.5-1.5 1 .3 1.8 1 2.5 2 1.5 1.8 3.5 2.5 5.5 1.5-1.5 1.5-3 2-4.5 1.5-1-.3-1.8-1-2.5-2-1.5-1.8-3.5-2.5-5.5-1.5z"/>
               </svg>
            </div>

            {/* Ai - Starts Row 4, Col 4 -> Moves to Col 3 (-1 col) */}
            <div className="col-start-4 row-start-4 bg-[#1c1c1c] rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-zinc-700/50 transition-transform duration-700 ease-in-out group-hover:-translate-x-[calc(100%+0.75rem)] max-lg:group-data-[in-view=true]:-translate-x-[calc(100%+0.75rem)] sm:group-hover:-translate-x-[calc(100%+1rem)] sm:max-lg:group-data-[in-view=true]:-translate-x-[calc(100%+1rem)]">
               <span className="text-white font-black text-2xl sm:text-4xl tracking-tighter">Ai</span>
            </div>
         </div>
      </div>
    </div>
  );
}

function NodeIllustration({ label, bottomLabel = false }: { label: string, bottomLabel?: boolean }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center overflow-hidden transition-transform duration-500 ${bottomLabel ? 'translate-y-4' : ''}`}>
       
       {/* Background Connecting Lines */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <line x1="50%" y1="50%" x2="35%" y2="50%" stroke="#27272a" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="65%" y2="50%" stroke="#27272a" strokeWidth="1.5" strokeDasharray="4 4" />
          
          <line x1="35%" y1="50%" x2="20%" y2="22%" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="35%" y1="50%" x2="20%" y2="78%" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="65%" y1="50%" x2="80%" y2="22%" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="65%" y1="50%" x2="80%" y2="78%" stroke="#e4e4e7" strokeWidth="1.5" />
       </svg>
       
       {/* Top-Left Node (Meet) */}
       <div className="absolute top-[22%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-zinc-50 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
          {/* Connection Dot */}
          <div className="absolute top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-zinc-800 rounded-full z-20" />
          <svg viewBox="0 0 24 24" fill="#a1a1aa" className="w-6 h-6">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
       </div>

       {/* Bottom-Left Node (Slack) */}
       <div className="absolute top-[78%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-zinc-50 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
          {/* Connection Dot */}
          <div className="absolute top-[15%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-zinc-800 rounded-full z-20" />
          <svg viewBox="0 0 24 24" fill="#a1a1aa" className="w-5 h-5">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522v-2.521zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
          </svg>
       </div>

       {/* Top-Right Node (Google) */}
       <div className="absolute top-[22%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-zinc-50 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
          {/* Connection Dot */}
          <div className="absolute top-[85%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-zinc-800 rounded-full z-20" />
          <svg viewBox="0 0 24 24" fill="#a1a1aa" className="w-6 h-6">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
          </svg>
       </div>

       {/* Bottom-Right Node (Figma) */}
       <div className="absolute top-[78%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-zinc-50 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
          {/* Connection Dot */}
          <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-zinc-800 rounded-full z-20" />
          <svg viewBox="0 0 38 57" fill="none" className="w-4 h-4">
            <path d="M19 28.5c5.247 0 9.5-4.253 9.5-9.5S24.247 9.5 19 9.5H9.5v19H19z" fill="#a1a1aa"/>
            <path d="M9.5 28.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19z" fill="#a1a1aa"/>
            <path d="M28.5 19a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z" fill="#a1a1aa"/>
            <path d="M9.5 19a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z" fill="#a1a1aa"/>
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#a1a1aa"/>
          </svg>
       </div>

       {/* Center Pill */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center p-1.5 rounded-full bg-[#1ba453]/20 border border-[#1ba453] shadow-lg transition-transform duration-500 hover:scale-105">
         <div className="bg-[#1ba453] text-white text-[13px] font-bold px-5 py-2 rounded-full">
           {label}
         </div>
       </div>
       
    </div>
  );
}

function ProjectUpdatesIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden group">
       {/* Background Connecting Lines */}
       <style>{`
         .dash-transition {
           transition: top 500ms ease-in-out, opacity 100ms ease-in-out 0ms;
         }
         .group:hover .dash-transition {
           transition: top 500ms ease-in-out, opacity 100ms ease-in-out 400ms;
         }
       `}</style>
       
       {/* Left Line */}
       <div className="absolute top-[15%] left-[10%] w-[30%] h-[40%] border-l border-b border-zinc-200 rounded-bl-3xl transition-colors duration-500 group-hover:border-zinc-300 max-lg:group-data-[in-view=true]:border-zinc-300 z-0">
         <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-zinc-300 rounded-full -translate-x-[3px] -translate-y-[3px] transition-all duration-200 delay-0 group-hover:delay-[400ms] max-lg:group-data-[in-view=true]:delay-[400ms] group-hover:bg-[ max-lg:group-data-[in-view=true]:bg-[#1ba453] group-hover:scale-150 max-lg:group-data-[in-view=true]:scale-150 z-10" />
         {/* Animated Dash */}
         <div className="dash-transition absolute left-0 w-[3px] h-3 bg-zinc-600 rounded-full -translate-x-[1.5px] -translate-y-1/2 top-[80%] group-hover:top-0 max-lg:group-data-[in-view=true]:top-0 opacity-100 group-hover:opacity-0 max-lg:group-data-[in-view=true]:opacity-0" />
       </div>
       
       {/* Right Line */}
       <div className="absolute top-[50%] right-[10%] w-[30%] h-[40%] border-r border-t border-zinc-200 rounded-tr-3xl transition-colors duration-500 group-hover:border-zinc-300 max-lg:group-data-[in-view=true]:border-zinc-300 z-0">
         <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-zinc-300 rounded-full translate-x-[3px] translate-y-[3px] transition-all duration-200 delay-0 group-hover:delay-[400ms] max-lg:group-data-[in-view=true]:delay-[400ms] group-hover:bg-[ max-lg:group-data-[in-view=true]:bg-[#1ba453] group-hover:scale-150 max-lg:group-data-[in-view=true]:scale-150 z-10" />
         {/* Animated Dash */}
         <div className="dash-transition absolute right-0 w-[3px] h-3 bg-zinc-600 rounded-full translate-x-[1.5px] -translate-y-1/2 top-[20%] group-hover:top-[100%] max-lg:group-data-[in-view=true]:top-[100%] opacity-100 group-hover:opacity-0 max-lg:group-data-[in-view=true]:opacity-0" />
       </div>
       
       {/* Floating Logos */}
       {/* Discord */}
       <div className="absolute top-[10%] left-[20%] w-8 h-8 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 max-lg:group-data-[in-view=true]:grayscale-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 rotate-[-10deg] group-hover:rotate-0 max-lg:group-data-[in-view=true]:rotate-0 group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 z-10">
         <svg width="100%" height="100%" viewBox="0 0 127.14 96.36">
           <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.1M42.61,65.22C38,65.22,34.21,61,34.21,55.84s3.75-9.38,8.4-9.38,8.45,4.24,8.4,9.38-3.75,9.38-8.4,9.38Zm41.9,0c-4.63,0-8.4-4.22-8.4-9.38s3.73-9.38,8.4-9.38,8.45,4.24,8.4,9.38-3.75,9.38-8.4,9.38Z" fill="#5865F2"/>
         </svg>
       </div>

       {/* Slack */}
       <div className="absolute top-[1%] right-[28%] w-7 h-7 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 max-lg:group-data-[in-view=true]:grayscale-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 rotate-[15deg] group-hover:rotate-0 max-lg:group-data-[in-view=true]:rotate-0 group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 z-10">
         <svg width="100%" height="100%" viewBox="0 0 24 24">
            <path fill="#e01e5a" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/>
            <path fill="#e01e5a" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
            <path fill="#36c5f0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"/>
            <path fill="#36c5f0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
            <path fill="#2eb67d" d="M18.956 8.835a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.835a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.835z"/>
            <path fill="#2eb67d" d="M17.688 8.835a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.313z"/>
            <path fill="#ecb22e" d="M15.165 18.958a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.52v-2.522h2.52z"/>
            <path fill="#ecb22e" d="M15.165 17.687a2.527 2.527 0 0 1-2.52-2.52 2.527 2.527 0 0 1 2.52-2.521h6.313A2.527 2.527 0 0 1 24 15.167a2.528 2.528 0 0 1-2.522 2.52h-6.313z"/>
         </svg>
       </div>

       {/* Gmail */}
       <div className="absolute top-[35%] right-[2%] w-7 h-7 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 max-lg:group-data-[in-view=true]:grayscale-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 rotate-[-15deg] group-hover:rotate-0 max-lg:group-data-[in-view=true]:rotate-0 group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 z-10">
         <svg width="100%" height="100%" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M1.5 5.25v13.5c0 1.24.935 2.25 2.083 2.25h3.042V10.125L12 14.25l5.375-4.125V21h3.042c1.147 0 2.083-1.01 2.083-2.25V5.25a2.25 2.25 0 0 0-3.565-1.824L12 8.625 5.065 3.426A2.25 2.25 0 0 0 1.5 5.25z"/>
            <path fill="#34A853" d="M16.5 21h4.5a1.5 1.5 0 0 0 1.5-1.5v-8.25l-6 4.5v5.25z"/>
            <path fill="#FBBC05" d="M22.5 5.25c0-.828-.672-1.5-1.5-1.5a1.5 1.5 0 0 0-.913.31L16.5 6.75l-4.5 3.375-4.5-3.375L3.913 4.06a1.5 1.5 0 0 0-2.413 1.19v6l6 4.5 4.5 3.375 4.5-3.375 6-4.5v-6z"/>
            <path fill="#EA4335" d="M1.5 11.25V5.25c0-.828.672-1.5 1.5-1.5.334 0 .66.113.913.31l3.587 2.69 4.5 3.375v9l-4.5-3.375-6-4.5z"/>
         </svg>
       </div>

       {/* Meet */}
       <div className="absolute bottom-[10%] left-[12%] w-6 h-6 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 max-lg:group-data-[in-view=true]:grayscale-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 rotate-[10deg] group-hover:rotate-0 max-lg:group-data-[in-view=true]:rotate-0 group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 z-10">
         <svg width="100%" height="100%" viewBox="0 0 24 24">
            <path fill="#00e676" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
         </svg>
       </div>

       {/* Zoom */}
       <div className="absolute bottom-[12%] right-[18%] w-7 h-7 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 max-lg:group-data-[in-view=true]:grayscale-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-all duration-500 rotate-[-12deg] group-hover:rotate-0 max-lg:group-data-[in-view=true]:rotate-0 group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 z-10">
         <svg width="100%" height="100%" viewBox="0 0 24 24">
            <rect fill="#2D8CFF" width="24" height="24" rx="5"/>
            <path fill="#ffffff" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
         </svg>
       </div>

       {/* Center Rings & Pill */}
       <div className="relative flex items-center justify-center w-full h-full z-20 pointer-events-none">
         {/* Outer Ring */}
         <div className="absolute w-[220px] h-[80px] sm:w-[240px] sm:h-[90px] rounded-[50px] border border-[#1ba453]/30 bg-[#1ba453]/5 flex items-center justify-center transition-all duration-700 group-hover:scale-[1.03] max-lg:group-data-[in-view=true]:scale-[1.03] group-hover:bg-[ max-lg:group-data-[in-view=true]:bg-[#1ba453]/10">
            {/* Inner Ring */}
            <div className="w-[170px] h-[55px] sm:w-[190px] sm:h-[65px] rounded-[35px] border border-[#1ba453]/50 bg-[#1ba453]/10 flex items-center justify-center transition-all duration-700 group-hover:scale-[1.03] max-lg:group-data-[in-view=true]:scale-[1.03] group-hover:bg-[ max-lg:group-data-[in-view=true]:bg-[#1ba453]/20">
               {/* Button */}
               <div className="bg-[#1ba453] text-white text-[11px] sm:text-xs font-bold px-5 py-2 rounded-full shadow-md transition-transform duration-500 group-hover:scale-[1.02] max-lg:group-data-[in-view=true]:scale-[1.02]">
                  Project Updates
               </div>
            </div>
         </div>
       </div>
    </div>
  );
}

function ExecutionIllustration() {
  return (
    <div className="absolute inset-0 w-full h-full group overflow-hidden bg-zinc-50/30">
      
      {/* S-Curve Connecting Line */}
      <div className="absolute top-[44%] left-[20%] w-[30%] h-[7%] border-l border-b border-zinc-200 rounded-bl-xl transition-colors duration-500 group-hover:border-zinc-300 max-lg:group-data-[in-view=true]:border-zinc-300 z-0">
         <div className="absolute top-0 left-0 w-[2px] h-3 bg-zinc-800 rounded-full -translate-x-[1px] -translate-y-1/2 transition-transform duration-500 group-hover:scale-y-150 max-lg:group-data-[in-view=true]:scale-y-150"></div>
      </div>
      <div className="absolute top-[44%] right-[20%] w-[30%] h-[7%] border-r border-t border-zinc-200 rounded-tr-xl translate-y-full transition-colors duration-500 group-hover:border-zinc-300 max-lg:group-data-[in-view=true]:border-zinc-300 z-0">
         <div className="absolute bottom-0 right-0 w-[2px] h-3 bg-zinc-800 rounded-full translate-x-[1px] translate-y-1/2 transition-transform duration-500 group-hover:scale-y-150 max-lg:group-data-[in-view=true]:scale-y-150"></div>
      </div>

      {/* Top Window (Figma) */}
      <div className="absolute top-[6%] left-1/2 -translate-x-1/2 z-10 w-[92%] sm:w-[85%] h-[38%] bg-white rounded-xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 max-lg:group-data-[in-view=true]:-translate-y-1">
         {/* Header */}
         <div className="flex items-center justify-between px-4 py-3 bg-zinc-50/50">
            <div className="flex items-center gap-3">
               {/* Figma Logo */}
               <svg width="10" height="10" viewBox="0 0 38 57" fill="none">
                 <path d="M19 28.5c5.247 0 9.5-4.253 9.5-9.5S24.247 9.5 19 9.5H9.5v19H19z" fill="#F24E1E"/>
                 <path d="M9.5 28.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19z" fill="#0AFFD1"/>
                 <path d="M28.5 19a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z" fill="#FF7262"/>
                 <path d="M9.5 19a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z" fill="#A259FF"/>
                 <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
               </svg>
               <div className="w-6 h-1 bg-zinc-300 rounded-full"></div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-5 h-1 bg-zinc-200 rounded-full"></div>
               <div className="w-7 h-1 bg-zinc-200 rounded-full"></div>
               <div className="w-5 h-1 bg-zinc-200 rounded-full"></div>
               <div className="w-5 h-1 bg-zinc-200 rounded-full"></div>
            </div>
            <div className="w-10 h-2 bg-zinc-200 rounded-full"></div>
         </div>
         {/* Body */}
         <div className="flex-1 p-5 relative bg-white">
            <div className="w-[50%] h-2 bg-zinc-100 rounded-full mb-3"></div>
            {/* Green Selected Bar */}
            <div className="relative w-[35%] h-3 bg-[#1ba453] rounded-full mb-3 transition-all duration-500 group-hover:w-[40%] max-lg:group-data-[in-view=true]:w-[40%]">
               {/* Designer Cursor */}
               <div className="absolute -top-6 -left-3 z-30 flex flex-col items-start drop-shadow-md transition-all duration-500 group-hover:translate-x-3 max-lg:group-data-[in-view=true]:translate-x-3">
                  <div className="bg-[#1ba453] text-white text-[7px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap mb-0 ml-1">
                    Designer
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#1ba453" stroke="white" strokeWidth="2" className="ml-2.5 -mt-0.5">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                  </svg>
               </div>
            </div>
            <div className="w-[45%] h-2 bg-zinc-100 rounded-full mb-2"></div>
            <div className="flex gap-2 mb-4">
               <div className="w-[15%] h-4 bg-zinc-50 border border-zinc-100 rounded"></div>
               <div className="w-[20%] h-4 bg-zinc-100 rounded"></div>
            </div>
            
            {/* Background floating rectangles in mockup */}
            <div className="absolute bottom-[-10px] right-[10%] w-[45%] h-[80%] bg-zinc-50 border border-zinc-200/60 rounded-t-xl shadow-sm z-10"></div>
            <div className="absolute bottom-[-20px] right-[25%] w-[40%] h-[50%] bg-white border border-zinc-200/60 rounded-t-xl shadow-md z-20"></div>
         </div>
      </div>

      {/* Bottom Window (Developer) */}
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 z-10 w-[92%] sm:w-[85%] h-[38%] bg-white rounded-xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col overflow-hidden transition-transform duration-500 group-hover:translate-y-1 max-lg:group-data-[in-view=true]:translate-y-1">
         {/* Header */}
         <div className="flex items-center justify-between px-4 py-3 bg-zinc-50/50">
            <div className="flex items-center gap-3">
               <div className="w-5 h-3.5 bg-zinc-800 rounded-sm flex items-center justify-center">
                 <span className="text-white text-[5px] font-mono font-bold leading-none">&lt;/&gt;</span>
               </div>
               <div className="w-6 h-1 bg-zinc-300 rounded-full"></div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-6 h-1 bg-zinc-200 rounded-full"></div>
               <div className="w-8 h-1 bg-zinc-200 rounded-full"></div>
               <div className="w-6 h-1 bg-zinc-200 rounded-full"></div>
               <div className="w-6 h-1 bg-zinc-200 rounded-full"></div>
            </div>
            <div className="w-4 h-1 bg-transparent"></div> {/* Spacer */}
         </div>
         {/* Body */}
         <div className="flex-1 p-5 relative bg-white flex flex-col gap-2.5">
            <div className="flex gap-2">
              <div className="w-[15%] h-2 bg-zinc-200 rounded-full"></div>
              <div className="w-[25%] h-2 bg-zinc-100 rounded-full"></div>
            </div>

            <div className="pl-6 flex flex-col gap-2 mt-1">
              <div className="flex gap-2">
                <div className="w-[25%] h-2 bg-zinc-200 rounded-full"></div>
                <div className="w-[20%] h-2 bg-zinc-200 rounded-full"></div>
                <div className="w-[15%] h-2 bg-zinc-100 rounded-full"></div>
              </div>
              <div className="flex gap-2 relative">
                <div className="w-[20%] h-2 bg-zinc-200 rounded-full"></div>
                <div className="w-[25%] h-2 bg-zinc-200 rounded-full"></div>
                {/* Dark Selected Code Bar */}
                <div className="relative w-[15%] h-2.5 bg-zinc-800 rounded-full transition-all duration-500 group-hover:w-[20%] max-lg:group-data-[in-view=true]:w-[20%]">
                   {/* Developer Cursor */}
                   <div className="absolute -top-6 -right-6 z-30 flex flex-col items-end drop-shadow-md transition-all duration-500 group-hover:-translate-x-3 max-lg:group-data-[in-view=true]:-translate-x-3">
                      <div className="bg-zinc-800 text-white text-[7px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap mb-0 mr-1">
                        Developerr
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#27272a" stroke="white" strokeWidth="2" className="mr-2 -mt-0.5">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                      </svg>
                   </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-[30%] h-2 bg-zinc-200 rounded-full"></div>
                <div className="w-[25%] h-2 bg-zinc-100 rounded-full"></div>
                <div className="w-[15%] h-2 bg-zinc-200 rounded-full"></div>
              </div>
            </div>

            <div className="flex gap-2 mt-1">
              <div className="w-[10%] h-2 bg-zinc-200 rounded-full"></div>
              <div className="w-[35%] h-2 bg-zinc-200 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-[25%] h-2 bg-zinc-100 rounded-full"></div>
              <div className="w-[20%] h-2 bg-zinc-200 rounded-full"></div>
            </div>
         </div>
      </div>

    </div>
  );
}

function ProjectsIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden transition-transform duration-500">
       
       {/* Background Connecting Lines */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 400 200">
          {/* Center Line */}
          <line x1="200" y1="70" x2="200" y2="100" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="200" y1="102" x2="200" y2="108" stroke="#27272a" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="200" y1="110" x2="200" y2="160" stroke="#e4e4e7" strokeWidth="1.5" />
          
          {/* Left Line */}
          <line x1="80" y1="70" x2="80" y2="100" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="80" y1="102" x2="80" y2="108" stroke="#27272a" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 80 110 L 80 120 Q 80 130 90 130 L 130 130 Q 140 130 140 140 L 140 160" fill="none" stroke="#e4e4e7" strokeWidth="1.5" />
          
          {/* Right Line */}
          <line x1="320" y1="70" x2="320" y2="100" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="320" y1="102" x2="320" y2="108" stroke="#27272a" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 320 110 L 320 120 Q 320 130 310 130 L 270 130 Q 260 130 260 140 L 260 160" fill="none" stroke="#e4e4e7" strokeWidth="1.5" />
       </svg>
       
       {/* Left Node */}
       <div className="absolute top-[35%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-zinc-50 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
          <svg viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5" className="w-7 h-7">
            <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="7" x2="22" y2="17" />
            <line x1="2" y1="17" x2="22" y2="7" />
          </svg>
       </div>

       {/* Center Node */}
       <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-zinc-50 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#a1a1aa" />
            <rect x="13" y="13" width="7" height="7" rx="1.5" fill="#a1a1aa" />
          </svg>
       </div>

       {/* Right Node */}
       <div className="absolute top-[35%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-zinc-50 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
          <svg viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <polygon points="12 4 20 8 12 12 4 8" />
            <polyline points="4 12 12 16 20 12" />
            <polyline points="4 16 12 20 20 16" />
          </svg>
       </div>

       {/* Bottom Pill (Nested Rings) */}
       <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
         <div className="flex items-center justify-center p-2.5 sm:p-3 rounded-[2rem] bg-[#1ba453]/10 border border-[#1ba453]/20 transition-transform duration-500 hover:scale-[1.03] cursor-pointer shadow-sm">
            <div className="flex items-center justify-center p-2 sm:p-2.5 rounded-[1.5rem] bg-[#1ba453]/20 border border-[#1ba453]/30 shadow-sm transition-transform duration-500 hover:scale-[1.02]">
               <div className="bg-[#1ba453] text-white text-[13px] font-bold px-6 py-2 rounded-full shadow-md">
                  50+ Projects
               </div>
            </div>
         </div>
       </div>
       
    </div>
  );
}

function NoCodeIllustration() {
  return (
    <div className="absolute inset-0 group overflow-hidden bg-transparent cursor-pointer">
       {/* SVG Lines */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 400 300">
           
           {/* Main Line (Top and Right) - Always Visible */}
           <path d="M 175 100 L 265 100 Q 280 100 280 115 L 280 200" fill="none" stroke="#f4f4f5" strokeWidth="6" />
           
           {/* Hover Line 1 (Left Edge) - Fade in */}
           <line x1="120" y1="120" x2="120" y2="200" stroke="#f4f4f5" strokeWidth="6" className="opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-opacity duration-500 delay-200" />
           
           {/* Hover Line 2 (Bottom Edge) - Fade in */}
           <line x1="175" y1="220" x2="225" y2="220" stroke="#f4f4f5" strokeWidth="6" className="opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-opacity duration-500 delay-200" />
           
           {/* Line Joints (Grey Dots) */}
           <rect x="171" y="95.5" width="9" height="9" rx="4.5" fill="#e4e4e7" />
           <rect x="275.5" y="196" width="9" height="9" rx="4.5" fill="#e4e4e7" />
           
           {/* Hover Joints */}
           <rect x="115.5" y="116" width="9" height="9" rx="4.5" fill="#e4e4e7" className="opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-opacity duration-500 delay-200" />
           <rect x="115.5" y="196" width="9" height="9" rx="4.5" fill="#e4e4e7" className="opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-opacity duration-500 delay-200" />
           <rect x="171" y="215.5" width="9" height="9" rx="4.5" fill="#e4e4e7" className="opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-opacity duration-500 delay-200" />
           <rect x="221" y="215.5" width="9" height="9" rx="4.5" fill="#e4e4e7" className="opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 transition-opacity duration-500 delay-200" />
       </svg>
    
       {/* 1. Container (Top-Left) */}
       <div className="absolute top-[33.3%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-500 hover:scale-[1.03]">
          <div className="bg-[#1c1c1c] text-white text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-2.5 shadow-lg">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <line x1="8" y1="9" x2="16" y2="9" />
             </svg>
             Container
          </div>
       </div>
    
       {/* 2. Header (Bottom-Right) */}
       <div className="absolute top-[73.3%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-500 hover:scale-[1.03]">
          <div className="bg-[#1c1c1c] text-white text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-2.5 shadow-lg">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <line x1="8" y1="9" x2="16" y2="9" />
             </svg>
             Header
          </div>
       </div>
    
       {/* 3. Dashed Empty Box (Bottom-Left) */}
       <div className="absolute top-[73.3%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-0 opacity-100 group-hover:opacity-0 max-lg:group-data-[in-view=true]:opacity-0 transition-opacity duration-300">
          <div className="w-[110px] h-[40px] sm:w-[125px] sm:h-[44px] rounded-full border-[1.5px] border-dashed border-zinc-400/80"></div>
       </div>
    
       {/* 4. Contact Node (Animated) */}
       <div className="absolute z-20 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                       top-[95%] left-[45%] group-hover:top-[73.3%] max-lg:group-data-[in-view=true]:top-[73.3%] group-hover:left-[30%] max-lg:group-data-[in-view=true]:left-[30%] -translate-x-1/2 -translate-y-1/2">
          <div className="bg-[#1ba453] group-hover:bg-[ max-lg:group-data-[in-view=true]:bg-[#1c1c1c] transition-colors duration-700 text-white text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-2.5 shadow-xl">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <line x1="8" y1="9" x2="16" y2="9" />
             </svg>
             Contact
             
             {/* Fake Cursor Arrow */}
             <svg className="absolute -bottom-4 -right-2 w-5 h-5 text-white drop-shadow-md opacity-100 group-hover:opacity-0 max-lg:group-data-[in-view=true]:opacity-0 transition-opacity duration-300 delay-100" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
             </svg>
          </div>
       </div>
    
    </div>
  );
}
