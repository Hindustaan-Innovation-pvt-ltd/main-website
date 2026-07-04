"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, MousePointerClick } from "lucide-react";

const services = [
  {
    id: 1,
    title: "SaaS Product Strategy",
    image: "/saas-strategy.png", // Placeholder image path
  },
  {
    id: 2,
    title: "Website Design",
    image: "/website-design.png",
  },
  {
    id: 3,
    title: "Web & Mobile Apps",
    image: "/web-mobile-apps.png",
  },
  {
    id: 4,
    title: "UI/UX Consultation",
    image: "/ui-ux-consultation.png",
  }
];

const AnimatedCursor = ({ color, name, iconColor, x = "translate-x-12", y = "translate-y-12", delay = "delay-0", top = "-top-3", left = "left-4" }: any) => (
  <div className={`absolute ${top} ${left} pointer-events-none z-30 flex flex-col items-start opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 ${x} ${y} group-hover:translate-x-0 max-lg:group-data-[in-view=true]:translate-x-0 group-hover:translate-y-0 max-lg:group-data-[in-view=true]:translate-y-0 transition-all duration-700 ease-out ${delay}`}>
    <div className={`px-2 py-0.5 rounded text-[10px] font-semibold text-white mb-0.5 shadow-sm ml-2`} style={{ backgroundColor: color }}>
      {name}
    </div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill={iconColor || color} stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.45 0 .67-.54.35-.85L5.5 3.21z" />
    </svg>
  </div>
);

function SaasProductUI() {
  return (
    <div className="absolute inset-0 p-6 flex gap-4 overflow-hidden items-end">
      {/* Window 1 */}
      <div className="flex-1 bg-white border border-zinc-100 rounded-t-xl shadow-[0_0_30px_rgba(0,0,0,0.03)] flex flex-col h-[90%] relative">
        <div className="h-8 border-b border-zinc-100 flex items-center px-3 bg-zinc-50/50">
          <div className="w-24 h-2 bg-zinc-200 rounded-full"></div>
        </div>
        <div className="flex-1 flex p-3 gap-3">
          <div className="w-1/3 flex flex-col gap-3">
            <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
            <div className="relative py-1">
              <div className="h-2 w-full rounded-full bg-[#1ba453]"></div>
              
              {/* Cursor "You" */}
              <div className="absolute -top-3 left-6 pointer-events-none z-20 flex flex-col items-start opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 translate-x-12 translate-y-12 group-hover:translate-x-0 max-lg:group-data-[in-view=true]:translate-x-0 group-hover:translate-y-0 max-lg:group-data-[in-view=true]:translate-y-0 transition-all duration-700 ease-out">
                <div className="px-2 py-0.5 rounded text-[10px] font-semibold text-white mb-0.5 shadow-sm ml-2 bg-[#1ba453]">
                  You
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#f97316" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.45 0 .67-.54.35-.85L5.5 3.21z" />
                </svg>
              </div>
            </div>
            <div className="h-2 w-full bg-zinc-100 rounded-full"></div>
            <div className="h-2 w-3/4 bg-zinc-100 rounded-full"></div>
            <div className="h-2 w-full bg-zinc-100 rounded-full"></div>
          </div>
          <div className="flex-1 grid grid-rows-2 gap-3">
             <div className="bg-zinc-50/50 rounded-lg border border-zinc-100 p-2"></div>
             <div className="bg-zinc-50/50 rounded-lg border border-zinc-100 p-2"></div>
          </div>
        </div>
      </div>

      {/* Window 2 */}
      <div className="flex-1 bg-white border border-zinc-100 rounded-t-xl shadow-[0_0_30px_rgba(0,0,0,0.03)] flex flex-col h-[90%] relative">
        <div className="h-8 border-b border-zinc-100 flex items-center px-3 bg-zinc-50/50">
          <div className="w-24 h-2 bg-zinc-200 rounded-full"></div>
        </div>
        <div className="flex-1 flex p-3 gap-3">
          <div className="w-1/3 flex flex-col gap-3">
            <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
            <div className="relative py-1 mt-6">
              <div className="h-2 w-full rounded-full bg-[#3b82f6]"></div>
              
              {/* Cursor "Designer" */}
              <div className="absolute -top-3 left-4 pointer-events-none z-20 flex flex-col items-start opacity-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 translate-x-12 translate-y-12 group-hover:translate-x-0 max-lg:group-data-[in-view=true]:translate-x-0 group-hover:translate-y-0 max-lg:group-data-[in-view=true]:translate-y-0 transition-all duration-700 ease-out delay-100">
                <div className="px-2 py-0.5 rounded text-[10px] font-semibold text-white mb-0.5 shadow-sm ml-2 bg-[#3b82f6]">
                  Designer
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.45 0 .67-.54.35-.85L5.5 3.21z" />
                </svg>
              </div>
            </div>
            <div className="h-2 w-full bg-zinc-100 rounded-full"></div>
            <div className="h-2 w-3/4 bg-zinc-100 rounded-full"></div>
          </div>
          <div className="flex-1 grid grid-rows-2 gap-3">
             <div className="bg-zinc-50/50 rounded-lg border border-zinc-100 p-2"></div>
             <div className="bg-zinc-50/50 rounded-lg border border-zinc-100 p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebsiteDesignUI() {
  return (
    <div className="absolute inset-0 p-6 flex items-center justify-center overflow-hidden bg-zinc-50/50">
      {/* Large Window */}
      <div className="absolute w-[85%] h-[120%] bg-white border border-zinc-100 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.03)] -rotate-3 left-4 top-12 flex flex-col">
        <div className="h-8 border-b border-zinc-100 flex items-center justify-between px-3">
           <div className="w-5 h-5 bg-zinc-200 rounded-full"></div>
           <div className="flex gap-1">
             <div className="w-6 h-1.5 bg-zinc-200 rounded-full"></div>
             <div className="w-6 h-1.5 bg-zinc-200 rounded-full"></div>
             <div className="w-6 h-1.5 bg-zinc-200 rounded-full"></div>
           </div>
           <div className="flex gap-1">
             <div className="w-3 h-3 bg-zinc-200 rounded-full"></div>
             <div className="w-3 h-3 bg-zinc-200 rounded-full"></div>
           </div>
        </div>
        <div className="flex-1 flex flex-col items-center pt-8 px-8 gap-3">
          <div className="w-3/4 h-3 bg-zinc-200 rounded-full mb-1"></div>
          <div className="w-2/3 h-2.5 bg-zinc-200 rounded-full"></div>
          <div className="w-3/4 h-2.5 bg-zinc-200 rounded-full"></div>
          
          <div className="relative mt-2">
            <div className="w-12 h-3 bg-[#1ba453] rounded-full"></div>
            <AnimatedCursor color="#1ba453" name="You" iconColor="#f97316" left="-left-2" top="-top-5" delay="delay-100" />
          </div>
          
          <div className="w-full flex gap-3 mt-8">
            <div className="flex-1 bg-zinc-50 rounded-lg h-24"></div>
            <div className="flex-1 bg-zinc-50 rounded-lg h-24"></div>
          </div>
        </div>
      </div>

      {/* Mobile Window */}
      <div className="absolute w-[35%] h-[110%] bg-white border border-zinc-100 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.08)] rotate-2 right-6 top-20 flex flex-col p-1.5 z-10">
         <div className="h-6 flex items-center justify-between px-2 mb-2">
            <div className="w-3 h-3 bg-zinc-200 rounded-full"></div>
            <div className="w-4 h-1 bg-zinc-200 rounded-full"></div>
         </div>
         <div className="flex-1 border border-zinc-100 rounded-2xl bg-zinc-50/50 flex flex-col items-center pt-8 px-3 gap-2">
            <div className="w-full h-2 bg-zinc-200 rounded-full"></div>
            <div className="w-5/6 h-2 bg-zinc-200 rounded-full"></div>
            <div className="w-full h-2 bg-zinc-200 rounded-full"></div>
            
            <div className="relative mt-2">
              <div className="w-8 h-2.5 bg-[#1ba453] rounded-full"></div>
            </div>
         </div>
         <div className="h-1/3 flex flex-col gap-2 mt-2">
            <div className="flex-1 bg-zinc-50 rounded-xl border border-zinc-100"></div>
            <div className="flex-1 bg-zinc-50 rounded-xl border border-zinc-100"></div>
         </div>
      </div>
    </div>
  );
}

function WebMobileAppsUI() {
  return (
    <div className="absolute inset-0 p-4 flex items-center justify-center overflow-hidden bg-zinc-50/50">
      {/* Arrows (Background) */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <path d="M 120 180 L 160 180" stroke="#d4d4d8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)"/>
        <path d="M 270 180 L 300 180 L 300 120 L 320 120" stroke="#d4d4d8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)"/>
        <path d="M 270 180 L 300 180 L 300 240 L 320 240" stroke="#d4d4d8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)"/>
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#d4d4d8" />
          </marker>
        </defs>
      </svg>
      
      {/* Screen 1 (Left) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[28%] h-[70%] bg-white border border-zinc-100 rounded-2xl shadow-sm flex flex-col p-2 z-10">
        <div className="h-4 flex items-center justify-between px-1 mb-2">
          <div className="flex gap-1"><div className="w-4 h-1 bg-zinc-200 rounded-full"/><div className="w-4 h-1 bg-zinc-200 rounded-full"/></div>
          <div className="w-3 h-1 bg-zinc-200 rounded-full"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <div className="w-16 h-2 bg-zinc-200 rounded-full"></div>
          <div className="w-24 h-1.5 bg-zinc-100 rounded-full"></div>
        </div>
        <div className="mt-auto flex flex-col gap-2 pb-2">
          <div className="relative">
            <div className="w-12 h-2.5 bg-[#3b82f6] rounded-full mx-2"></div>
            <AnimatedCursor color="#3b82f6" name="Designer" top="-top-5" left="left-2" delay="delay-100" />
          </div>
          <div className="flex gap-2 px-2">
            <div className="flex-1 bg-zinc-50 rounded-lg h-12"></div>
            <div className="flex-1 bg-zinc-50 rounded-lg h-12"></div>
          </div>
        </div>
      </div>

      {/* Screen 2 (Center) */}
      <div className="absolute left-[38%] top-1/2 -translate-y-1/2 w-[28%] h-[70%] bg-white border border-zinc-100 rounded-2xl shadow-sm flex flex-col p-2 z-10">
        <div className="h-4 flex items-center justify-between px-1 mb-2">
          <div className="w-6 h-1 bg-zinc-200 rounded-full"></div>
        </div>
        <div className="w-full bg-zinc-50 rounded-lg h-10 mb-2"></div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <div className="bg-zinc-50 rounded-lg relative">
            <div className="absolute bottom-2 left-2 w-8 h-2 bg-[#1ba453] rounded-full"></div>
            <AnimatedCursor color="#1ba453" name="You" iconColor="#f97316" top="-top-3" left="left-1" />
          </div>
          <div className="bg-zinc-50 rounded-lg"></div>
          <div className="bg-zinc-50 rounded-lg"></div>
          <div className="bg-zinc-50 rounded-lg"></div>
        </div>
      </div>

      {/* Screen 3 (Top Right) */}
      <div className="absolute right-4 top-[10%] w-[28%] h-[70%] bg-white border border-zinc-100 rounded-2xl shadow-sm flex flex-col p-2 z-10">
        <div className="h-4 flex items-center justify-between px-1 mb-2">
          <div className="w-6 h-1 bg-zinc-200 rounded-full"></div>
          <div className="w-3 h-1 bg-zinc-200 rounded-full"></div>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center justify-center mt-2">
          <div className="w-16 h-2 bg-zinc-200 rounded-full"></div>
          <div className="w-24 h-1.5 bg-zinc-100 rounded-full mb-4"></div>
          <div className="relative self-start ml-2">
            <div className="w-10 h-2.5 bg-purple-500 rounded-full"></div>
            <AnimatedCursor color="#a855f7" name="Designer" top="-top-5" left="left-2" delay="delay-200" />
          </div>
          <div className="w-full bg-zinc-50 rounded-lg h-20 mt-2"></div>
        </div>
      </div>
      
      {/* Screen 4 (Bottom Right) */}
      <div className="absolute right-4 bottom-[-40%] w-[28%] h-[70%] bg-white border border-zinc-100 rounded-2xl shadow-sm flex flex-col p-2 z-10 opacity-70">
        <div className="h-4 flex items-center justify-between px-1 mb-2">
          <div className="w-6 h-1 bg-zinc-200 rounded-full"></div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full bg-zinc-50 rounded-lg h-8"></div>
          <div className="w-full bg-zinc-50 rounded-lg h-8"></div>
        </div>
      </div>
    </div>
  );
}

function UiUxConsultationUI() {
  return (
    <div className="absolute inset-0 p-4 flex items-center justify-center overflow-hidden bg-zinc-50/50">
      {/* Background Main Dashboard */}
      <div className="absolute w-[85%] h-[110%] bg-white border border-zinc-100 rounded-t-xl shadow-[0_0_30px_rgba(0,0,0,0.03)] top-8 flex flex-col z-0">
        <div className="h-8 border-b border-zinc-100 px-4 flex items-center gap-2">
           <div className="relative">
             <div className="w-32 h-2.5 bg-[#1ba453] rounded-full"></div>
             <AnimatedCursor color="#1ba453" name="You" iconColor="#f97316" top="-top-4" left="left-16" />
           </div>
        </div>
        <div className="flex-1 flex gap-4 p-4">
           <div className="w-1/4 bg-zinc-50/80 rounded-lg border border-zinc-100"></div>
           <div className="flex-1 flex flex-col gap-4">
             <div className="flex gap-4">
               <div className="flex-1 bg-zinc-50/80 rounded-lg border border-zinc-100 h-20"></div>
               <div className="flex-1 bg-zinc-50/80 rounded-lg border border-zinc-100 h-20"></div>
             </div>
             {/* Bar Chart Area */}
             <div className="flex-1 flex items-end gap-3 px-4 pb-4">
                <div className="w-6 h-8 bg-zinc-200 rounded-full"></div>
                <div className="w-6 h-16 bg-zinc-200 rounded-full"></div>
                <div className="relative">
                  <div className="w-6 h-24 bg-yellow-400 rounded-full"></div>
                  <AnimatedCursor color="#eab308" name="Designer" top="-top-6" left="-left-2" delay="delay-300" />
                </div>
                <div className="w-6 h-12 bg-zinc-200 rounded-full"></div>
                <div className="w-6 h-6 bg-zinc-200 rounded-full"></div>
             </div>
           </div>
        </div>
      </div>

      {/* Floating Widget 1 (Left) */}
      <div className="absolute left-2 top-[30%] w-36 h-28 bg-white border border-zinc-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10 p-3 flex flex-col gap-2">
         <div className="relative">
           <div className="w-10 h-2.5 bg-purple-500 rounded-full"></div>
           <AnimatedCursor color="#a855f7" name="Designer" top="-top-5" left="-left-1" delay="delay-100" />
         </div>
         <div className="w-16 h-1.5 bg-zinc-100 rounded-full mt-2"></div>
         <div className="w-full h-10 bg-zinc-50/80 rounded-md mt-auto"></div>
      </div>

      {/* Floating Widget 2 (Right) */}
      <div className="absolute right-2 top-[45%] w-56 h-32 bg-white border border-zinc-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-20 p-4 flex flex-col">
         <div className="flex justify-between items-center px-2 pt-2">
            <div className="w-8 h-8 rounded-full border-4 border-zinc-100"></div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent -rotate-45"></div>
              <AnimatedCursor color="#3b82f6" name="Designer" top="-top-4" left="left-4" delay="delay-200" />
            </div>
            <div className="w-8 h-8 rounded-full border-4 border-zinc-100"></div>
         </div>
         <div className="flex justify-between px-3 mt-4">
           <div className="w-6 h-1.5 bg-zinc-200 rounded-full"></div>
           <div className="w-6 h-1.5 bg-zinc-200 rounded-full"></div>
           <div className="w-6 h-1.5 bg-zinc-200 rounded-full"></div>
         </div>
         <div className="w-full h-8 bg-zinc-50/80 rounded-md mt-auto"></div>
      </div>
    </div>
  );
}

export function ServicesSection2() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-white border border-zinc-200 rounded-full mb-6 shadow-sm"
            >
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-800">
                Services
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight"
            >
              From ideas into high-impact digital solutions That <span className="text-[#1ba453]">engage</span> and <span className="text-[#1ba453]">convert.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm lg:pb-2"
          >
            <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed">
              From early-stage startups to growing businesses, teams trust us to design products that ship, scale, and deliver real results.
            </p>
          </motion.div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-zinc-200/60 flex flex-col h-[450px] md:h-[550px] overflow-hidden group hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-bold text-black mb-8 z-10">
                {service.title}
              </h3>
              
              {/* Image Placeholder Container */}
              <div className="relative flex-1 w-full mt-auto rounded-2xl overflow-hidden group-hover:scale-[1.02] max-lg:group-data-[in-view=true]:scale-[1.02] transition-transform duration-500 ease-out flex items-center justify-center">
                {/* 
                  === YOUR IMAGES GO HERE === 
                  Uncomment the Image tag below and place your images in the public folder.
                  Set unoptimized={true} for SVGs to prevent blurriness.
                */}
                
                {/* 
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-contain object-bottom" 
                  quality={100}
                  unoptimized={true}
                /> 
                */}

                {service.id === 1 && <SaasProductUI />}
                {service.id === 2 && <WebsiteDesignUI />}
                {service.id === 3 && <WebMobileAppsUI />}
                {service.id === 4 && <UiUxConsultationUI />}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
