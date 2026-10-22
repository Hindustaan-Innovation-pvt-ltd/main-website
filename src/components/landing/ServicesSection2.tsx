"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { 
  Layers, 
  Globe, 
  Smartphone, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Lock, 
  ArrowUpRight
} from "lucide-react";

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
    <div className="absolute inset-0 p-4 sm:p-6 flex gap-4 overflow-hidden items-end bg-zinc-50/50 dark:bg-zinc-950/40">
      {/* Window 1 */}
      <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-t-xl shadow-[0_0_30px_rgba(0,0,0,0.03)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col h-[90%] relative">
        <div className="h-8 border-b border-zinc-100 dark:border-white/10 flex items-center px-3 bg-zinc-50/50 dark:bg-zinc-800/60">
          <div className="w-24 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
        </div>
        <div className="flex-1 flex p-3 gap-3">
          <div className="w-1/3 flex flex-col gap-3">
            <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
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
            <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
            <div className="h-2 w-3/4 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
            <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
          </div>
          <div className="flex-1 grid grid-rows-2 gap-3">
             <div className="bg-zinc-50/50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-white/5 p-2"></div>
             <div className="bg-zinc-50/50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-white/5 p-2"></div>
          </div>
        </div>
      </div>

      {/* Window 2 */}
      <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-t-xl shadow-[0_0_30px_rgba(0,0,0,0.03)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col h-[90%] relative">
        <div className="h-8 border-b border-zinc-100 dark:border-white/10 flex items-center px-3 bg-zinc-50/50 dark:bg-zinc-800/60">
          <div className="w-24 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
        </div>
        <div className="flex-1 flex p-3 gap-3">
          <div className="w-1/3 flex flex-col gap-3">
            <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
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
            <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
            <div className="h-2 w-3/4 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
          </div>
          <div className="flex-1 grid grid-rows-2 gap-3">
             <div className="bg-zinc-50/50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-white/5 p-2"></div>
             <div className="bg-zinc-50/50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-white/5 p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebsiteDesignUI() {
  return (
    <div className="absolute inset-0 p-4 sm:p-6 flex items-center justify-center overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/40">
      {/* Large Window */}
      <div className="absolute w-[85%] h-[120%] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.03)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] -rotate-3 left-4 top-12 flex flex-col">
        <div className="h-8 border-b border-zinc-100 dark:border-white/10 flex items-center justify-between px-3 bg-zinc-50/50 dark:bg-zinc-800/60">
           <div className="w-5 h-5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
           <div className="flex gap-1">
             <div className="w-6 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
             <div className="w-6 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
             <div className="w-6 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
           </div>
           <div className="flex gap-1">
             <div className="w-3 h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
             <div className="w-3 h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
           </div>
        </div>
        <div className="flex-1 flex flex-col items-center pt-8 px-8 gap-3">
          <div className="w-3/4 h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-1"></div>
          <div className="w-2/3 h-2.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
          <div className="w-3/4 h-2.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
          
          <div className="relative mt-2">
            <div className="w-12 h-3 bg-[#1ba453] rounded-full"></div>
            <AnimatedCursor color="#1ba453" name="You" iconColor="#f97316" left="-left-2" top="-top-5" delay="delay-100" />
          </div>
          
          <div className="w-full flex gap-3 mt-8">
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/80 rounded-lg h-24 border border-zinc-100 dark:border-white/5"></div>
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/80 rounded-lg h-24 border border-zinc-100 dark:border-white/5"></div>
          </div>
        </div>
      </div>

      {/* Mobile Window */}
      <div className="absolute w-[35%] h-[110%] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.08)] dark:shadow-[0_0_40px_rgba(0,0,0,0.4)] rotate-2 right-6 top-20 flex flex-col p-1.5 z-10">
         <div className="h-6 flex items-center justify-between px-2 mb-2">
            <div className="w-3 h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
            <div className="w-4 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
         </div>
         <div className="flex-1 border border-zinc-100 dark:border-white/10 rounded-2xl bg-zinc-50/50 dark:bg-zinc-800/50 flex flex-col items-center pt-8 px-3 gap-2">
            <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
            <div className="w-5/6 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
            <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
            
            <div className="relative mt-2">
              <div className="w-8 h-2.5 bg-[#1ba453] rounded-full"></div>
            </div>
         </div>
         <div className="h-1/3 flex flex-col gap-2 mt-2">
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/80 rounded-xl border border-zinc-100 dark:border-white/5"></div>
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/80 rounded-xl border border-zinc-100 dark:border-white/5"></div>
         </div>
      </div>
    </div>
  );
}

function WebMobileAppsUI() {
  return (
    <div className="absolute inset-0 p-4 flex items-center justify-center overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/40">
      {/* Arrows (Background) */}
      <svg className="absolute inset-0 w-full h-full text-zinc-300 dark:text-zinc-700" style={{ zIndex: 0 }}>
        <path d="M 120 180 L 160 180" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)"/>
        <path d="M 270 180 L 300 180 L 300 120 L 320 120" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)"/>
        <path d="M 270 180 L 300 180 L 300 240 L 320 240" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)"/>
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="currentColor" />
          </marker>
        </defs>
      </svg>
      
      {/* Screen 1 (Left) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[28%] h-[70%] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] flex flex-col p-2 z-10">
        <div className="h-4 flex items-center justify-between px-1 mb-2">
          <div className="flex gap-1"><div className="w-4 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full"/><div className="w-4 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full"/></div>
          <div className="w-3 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <div className="w-16 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
          <div className="w-24 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
        </div>
        <div className="mt-auto flex flex-col gap-2 pb-2">
          <div className="relative">
            <div className="w-12 h-2.5 bg-[#3b82f6] rounded-full mx-2"></div>
            <AnimatedCursor color="#3b82f6" name="Designer" top="-top-5" left="left-2" delay="delay-100" />
          </div>
          <div className="flex gap-2 px-2">
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/80 rounded-lg h-12 border border-zinc-100 dark:border-white/5"></div>
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/80 rounded-lg h-12 border border-zinc-100 dark:border-white/5"></div>
          </div>
        </div>
      </div>

      {/* Screen 2 (Center) */}
      <div className="absolute left-[38%] top-1/2 -translate-y-1/2 w-[28%] h-[70%] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] flex flex-col p-2 z-10">
        <div className="h-4 flex items-center justify-between px-1 mb-2">
          <div className="w-6 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
        </div>
        <div className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-lg h-10 mb-2 border border-zinc-100 dark:border-white/5"></div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <div className="bg-zinc-50 dark:bg-zinc-800/80 rounded-lg relative border border-zinc-100 dark:border-white/5">
            <div className="absolute bottom-2 left-2 w-8 h-2 bg-[#1ba453] rounded-full"></div>
            <AnimatedCursor color="#1ba453" name="You" iconColor="#f97316" top="-top-3" left="left-1" />
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-800/80 rounded-lg border border-zinc-100 dark:border-white/5"></div>
          <div className="bg-zinc-50 dark:bg-zinc-800/80 rounded-lg border border-zinc-100 dark:border-white/5"></div>
          <div className="bg-zinc-50 dark:bg-zinc-800/80 rounded-lg border border-zinc-100 dark:border-white/5"></div>
        </div>
      </div>

      {/* Screen 3 (Top Right) */}
      <div className="absolute right-4 top-[10%] w-[28%] h-[70%] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] flex flex-col p-2 z-10">
        <div className="h-4 flex items-center justify-between px-1 mb-2">
          <div className="w-6 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
          <div className="w-3 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center justify-center mt-2">
          <div className="w-16 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
          <div className="w-24 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4"></div>
          <div className="relative self-start ml-2">
            <div className="w-10 h-2.5 bg-purple-500 rounded-full"></div>
            <AnimatedCursor color="#a855f7" name="Designer" top="-top-5" left="left-2" delay="delay-200" />
          </div>
          <div className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-lg h-20 mt-2 border border-zinc-100 dark:border-white/5"></div>
        </div>
      </div>
      
      {/* Screen 4 (Bottom Right) */}
      <div className="absolute right-4 bottom-[-40%] w-[28%] h-[70%] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] flex flex-col p-2 z-10 opacity-70">
        <div className="h-4 flex items-center justify-between px-1 mb-2">
          <div className="w-6 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-lg h-8 border border-zinc-100 dark:border-white/5"></div>
          <div className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-lg h-8 border border-zinc-100 dark:border-white/5"></div>
        </div>
      </div>
    </div>
  );
}

function UiUxConsultationUI() {
  return (
    <div className="absolute inset-0 p-4 flex items-center justify-center overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/40">
      {/* Background Main Dashboard */}
      <div className="absolute w-[85%] h-[110%] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-t-xl shadow-[0_0_30px_rgba(0,0,0,0.03)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] top-8 flex flex-col z-0">
        <div className="h-8 border-b border-zinc-100 dark:border-white/10 px-4 flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/60">
           <div className="relative">
             <div className="w-32 h-2.5 bg-[#1ba453] rounded-full"></div>
             <AnimatedCursor color="#1ba453" name="You" iconColor="#f97316" top="-top-4" left="left-16" />
           </div>
        </div>
        <div className="flex-1 flex gap-4 p-4">
           <div className="w-1/4 bg-zinc-50/80 dark:bg-zinc-800/80 rounded-lg border border-zinc-100 dark:border-white/5"></div>
           <div className="flex-1 flex flex-col gap-4">
             <div className="flex gap-4">
               <div className="flex-1 bg-zinc-50/80 dark:bg-zinc-800/80 rounded-lg border border-zinc-100 dark:border-white/5 h-20"></div>
               <div className="flex-1 bg-zinc-50/80 dark:bg-zinc-800/80 rounded-lg border border-zinc-100 dark:border-white/5 h-20"></div>
             </div>
             {/* Bar Chart Area */}
             <div className="flex-1 flex items-end gap-3 px-4 pb-4">
                <div className="w-6 h-8 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
                <div className="w-6 h-16 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
                <div className="relative">
                  <div className="w-6 h-24 bg-yellow-400 rounded-full"></div>
                  <AnimatedCursor color="#eab308" name="Designer" top="-top-6" left="-left-2" delay="delay-300" />
                </div>
                <div className="w-6 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
                <div className="w-6 h-6 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
             </div>
           </div>
        </div>
      </div>

      {/* Floating Widget 1 (Left) */}
      <div className="absolute left-2 top-[30%] w-36 h-28 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-10 p-3 flex flex-col gap-2">
         <div className="relative">
           <div className="w-10 h-2.5 bg-purple-500 rounded-full"></div>
           <AnimatedCursor color="#a855f7" name="Designer" top="-top-5" left="-left-1" delay="delay-100" />
         </div>
         <div className="w-16 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full mt-2"></div>
         <div className="w-full h-10 bg-zinc-50/80 dark:bg-zinc-800/80 rounded-md mt-auto border border-zinc-100 dark:border-white/5"></div>
      </div>

      {/* Floating Widget 2 (Right) */}
      <div className="absolute right-2 top-[45%] w-56 h-32 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-20 p-4 flex flex-col">
         <div className="flex justify-between items-center px-2 pt-2">
            <div className="w-8 h-8 rounded-full border-4 border-zinc-100 dark:border-zinc-800"></div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent -rotate-45"></div>
              <AnimatedCursor color="#3b82f6" name="Designer" top="-top-4" left="left-4" delay="delay-200" />
            </div>
            <div className="w-8 h-8 rounded-full border-4 border-zinc-100 dark:border-zinc-800"></div>
         </div>
         <div className="flex justify-between px-3 mt-4">
           <div className="w-6 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
           <div className="w-6 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
           <div className="w-6 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
         </div>
         <div className="w-full h-8 bg-zinc-50/80 dark:bg-zinc-800/80 rounded-md mt-auto border border-zinc-100 dark:border-white/5"></div>
      </div>
    </div>
  );
}

const servicesData = [
  {
    id: 1,
    number: "01",
    title: "SaaS Product Strategy",
    shortTagline: "MVP roadmaps, multi-tenant cloud & scalable foundations.",
    badge: "Enterprise SaaS Engineering",
    description:
      "Transforming early-stage software concepts into robust, market-ready digital platforms. We design resilient architectures, multi-tenant databases, API security layers, and accelerated MVP development sprints that de-risk launches and scale seamlessly.",
    features: [
      "Multi-Tenant Cloud Architecture",
      "Accelerated 6-Week MVP Roadmap",
      "API & Relational Schema Modeling",
      "Enterprise Security & SOC-2 Ready",
    ],
    metrics: [
      { value: "6 Weeks", label: "Average Time to MVP" },
      { value: "99.99%", label: "Cloud Uptime Target" },
      { value: "3.4x", label: "Faster Market Entry" },
    ],
    floatingPill: "⚡ 10k+ Concurrent Users Ready",
    urlSlug: "hindustaan.io/services/saas-strategy",
    accentColor: "#1ba453",
    icon: Layers,
    ui: <SaasProductUI />,
  },
  {
    id: 2,
    number: "02",
    title: "Website Design",
    shortTagline: "High-converting, responsive & animated modern storefronts.",
    badge: "Modern Web Engineering",
    description:
      "Crafting visually unforgettable, lightning-fast digital storefronts and marketing sites. Built on Next.js with modern design systems, micro-interactions, responsive fluid typography, and extreme Core Web Vitals optimization to turn visitors into customers.",
    features: [
      "Responsive & Mobile-First Layouts",
      "Tailored Micro-Interactions & Animations",
      "100/100 Core Web Vitals & Technical SEO",
      "Component-Driven Design Systems",
    ],
    metrics: [
      { value: "+140%", label: "Conversion Lift" },
      { value: "< 0.8s", label: "Avg Page Load Time" },
      { value: "100%", label: "SEO & Accessibility" },
    ],
    floatingPill: "🚀 100/100 Lighthouse Performance",
    urlSlug: "hindustaan.io/services/website-design",
    accentColor: "#3b82f6",
    icon: Globe,
    ui: <WebsiteDesignUI />,
  },
  {
    id: 3,
    number: "03",
    title: "Web & Mobile Apps",
    shortTagline: "Cross-platform mobile apps & real-time cloud platforms.",
    badge: "Fullstack Mobile & Web",
    description:
      "Cross-platform and native applications engineered for buttery-smooth 60fps performance. From real-time WebSocket syncing and offline-first storage to custom microservices, we build platforms users love coming back to every day.",
    features: [
      "React Native & iOS/Android Native",
      "Real-Time Data Sync & WebSockets",
      "Offline-First Local Storage & Cache",
      "High-Throughput Cloud APIs",
    ],
    metrics: [
      { value: "60 FPS", label: "Fluid App Animations" },
      { value: "99.9%", label: "Crash-Free Rate" },
      { value: "Unified", label: "Cross-Platform Codebase" },
    ],
    floatingPill: "📱 Native iOS & Android Certified",
    urlSlug: "hindustaan.io/services/web-mobile-apps",
    accentColor: "#8b5cf6",
    icon: Smartphone,
    ui: <WebMobileAppsUI />,
  },
  {
    id: 4,
    number: "04",
    title: "UI/UX Consultation",
    shortTagline: "Usability audits, heuristic research & Figma design systems.",
    badge: "Design Research & Systems",
    description:
      "Eliminating user friction and maximizing conversion rates through data-driven design audits. We dissect user journeys, conduct heuristic analyses, build interactive high-fidelity prototypes in Figma, and build scalable atomic design tokens for dev teams.",
    features: [
      "Deep Heuristic Usability Audits",
      "Figma Atomic Design Tokens",
      "User Journey & Drop-off Analysis",
      "Interactive High-Fidelity Prototypes",
    ],
    metrics: [
      { value: "-48%", label: "User Drop-off Reduction" },
      { value: "100+", label: "Figma Screens & Components" },
      { value: "A+", label: "Usability Heuristic Score" },
    ],
    floatingPill: "🎨 Atomic Design Token Library",
    urlSlug: "hindustaan.io/services/ui-ux-consultation",
    accentColor: "#f59e0b",
    icon: Sparkles,
    ui: <UiUxConsultationUI />,
  },
];

export function ServicesSection2() {
  const [activeId, setActiveId] = useState<number>(1);
  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  const handlePrev = () => {
    setActiveId((prev) => (prev === 1 ? servicesData.length : prev - 1));
  };

  const handleNext = () => {
    setActiveId((prev) => (prev === servicesData.length ? 1 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Header Area (Preserved exactly as requested) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-full mb-6 shadow-xs"
            >
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200">
                Services
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
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
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              From early-stage startups to growing businesses, teams trust us to design products that ship, scale, and deliver real results.
            </p>
          </motion.div>
        </div>

        {/* Mobile / Tablet Horizontal Quick Selector (< lg) */}
        <div className="flex lg:hidden flex-col gap-2 mb-6">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              Choose Service
            </span>
            <span className="text-[11px] font-mono text-[#1ba453] font-semibold">
              {activeService.number} / 04
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
            {servicesData.map((service) => {
              const isActive = service.id === activeId;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  type="button"
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl whitespace-nowrap text-xs font-bold transition-all shrink-0 snap-start border cursor-pointer ${
                    isActive
                      ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-[#1ba453] shadow-md shadow-[#1ba453]/15 ring-1 ring-[#1ba453]"
                      : "bg-white/70 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 border-zinc-200/80 dark:border-white/5"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? "bg-[#1ba453] text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Interactive Showcase: Left Menu & Right Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Options Menu (Desktop lg+) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
            <div className="flex items-center justify-between px-2 mb-1">
              <span className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                Select Service
              </span>
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                Click to explore capabilities
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {servicesData.map((service) => {
                const isActive = service.id === activeId;
                const Icon = service.icon;
                
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    type="button"
                    className={`group relative text-left w-full p-4 sm:p-5 rounded-2xl md:rounded-3xl transition-all duration-300 border flex flex-col justify-between overflow-hidden cursor-pointer ${
                      isActive
                        ? "bg-white dark:bg-zinc-900 border-[#1ba453] shadow-lg shadow-[#1ba453]/10 dark:shadow-black/40 ring-1 ring-[#1ba453]"
                        : "bg-white/70 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900/80 border-zinc-200/80 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/15"
                    }`}
                  >
                    {/* Active Accent Bar on Left Edge */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSidePill"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1ba453] rounded-r-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-[#1ba453] text-white shadow-md shadow-[#1ba453]/25 scale-105"
                              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-white"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span
                            className={`text-[11px] font-mono font-bold tracking-wider uppercase transition-colors ${
                              isActive ? "text-[#1ba453]" : "text-zinc-400 dark:text-zinc-500"
                            }`}
                          >
                            SERVICE {service.number}
                          </span>
                          <h4
                            className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                              isActive
                                ? "text-zinc-950 dark:text-white"
                                : "text-zinc-800 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white"
                            }`}
                          >
                            {service.title}
                          </h4>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all shrink-0 mt-1 ${
                          isActive
                            ? "bg-[#1ba453]/10 text-[#1ba453]"
                            : "text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 group-hover:translate-x-0.5"
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p
                      className={`text-xs sm:text-sm line-clamp-2 pl-[52px] transition-colors leading-relaxed ${
                        isActive
                          ? "text-zinc-600 dark:text-zinc-400 font-medium"
                          : "text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
                      }`}
                    >
                      {service.shortTagline}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Quick Consultation Callout Box under Left Options */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-zinc-100/80 to-zinc-50/50 dark:from-zinc-900/60 dark:to-zinc-900/30 border border-zinc-200/70 dark:border-white/5 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1ba453] animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Need a tailored solution? Let&apos;s talk architecture.
                </span>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1ba453] hover:underline shrink-0"
              >
                <span>All Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Upgraded Master Showcase Card */}
          <div className="w-full lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 16, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.99 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative bg-white dark:bg-zinc-900/90 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl shadow-zinc-900/5 dark:shadow-black/50 border border-zinc-200/80 dark:border-white/10 flex flex-col justify-between overflow-hidden group min-h-[620px]"
              >
                {/* Decorative Ambient Radial Gradient Glow */}
                <div 
                  className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700"
                  style={{ backgroundColor: activeService.accentColor }}
                />

                {/* Top Section: Badges & Title */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#1ba453]/10 text-[#1ba453] border border-[#1ba453]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1ba453] animate-pulse" />
                      {activeService.badge}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-zinc-400 dark:text-zinc-500 uppercase">
                        STAGE {activeService.number} / 04
                      </span>
                      {/* Mini Switcher Controls */}
                      <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/80 p-1 rounded-full border border-zinc-200/60 dark:border-white/5 ml-2">
                        <button
                          onClick={handlePrev}
                          type="button"
                          aria-label="Previous Service"
                          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={handleNext}
                          type="button"
                          aria-label="Next Service"
                          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
                    {activeService.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-6 max-w-2xl">
                    {activeService.description}
                  </p>

                  {/* Capabilities / Highlights Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {activeService.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-white/5 text-xs sm:text-[13px] font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#1ba453]/15 text-[#1ba453] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Centerpiece: Upgraded Browser Frame with Live Animated UI Mockup */}
                <div className="relative z-10 w-full mt-2 mb-6 rounded-2xl overflow-hidden bg-zinc-50/70 dark:bg-zinc-950/70 border border-zinc-200/70 dark:border-white/10 shadow-sm">
                  {/* Browser Chrome Header */}
                  <div className="h-9 border-b border-zinc-200/70 dark:border-white/10 px-4 flex items-center justify-between bg-zinc-100/90 dark:bg-zinc-900/90 backdrop-blur-xs z-20 relative">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                    </div>
                    
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-white/10 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      <Lock className="w-3 h-3 text-[#1ba453]" />
                      <span>{activeService.urlSlug}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1ba453] animate-ping" />
                      Live Mockup
                    </div>
                  </div>

                  {/* Graphic UI Canvas */}
                  <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 ease-out">
                    {/* Floating Feature Badge */}
                    <div className="absolute top-3 right-3 z-30 px-3 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 shadow-sm text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 pointer-events-none">
                      <Sparkles className="w-3 h-3 text-[#1ba453]" />
                      <span>{activeService.floatingPill}</span>
                    </div>

                    {activeService.ui}
                  </div>
                </div>

                {/* Bottom Section: Metrics & Action Bar */}
                <div className="relative z-10 pt-4 border-t border-zinc-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* 3 Key Stats */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
                    {activeService.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-base sm:text-lg font-black text-zinc-900 dark:text-white tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Primary CTA Button */}
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all group/btn w-full sm:w-auto"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
