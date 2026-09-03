"use client";

import { motion } from "motion/react";
import { CheckCircle2, Phone, Check } from "lucide-react";

export function ProcessSection2() {
  const steps = [
    {
      id: 1,
      title: "Free Intro Chat",
      step: "Step 1",
      description: "We align on goals, constraints, and success criteria to define the right design direction.",
      illustration: <Step1Illustration />
    },
    {
      id: 2,
      title: "Kickoff & Setup",
      step: "Step 2",
      description: "We structure requirements, set priorities, and prepare everything for execution.",
      illustration: <Step2Illustration />
    },
    {
      id: 3,
      title: "Design & Delivery",
      step: "Step 3",
      description: "We design, iterate, and deliver with consistent updates as the work moves forward.",
      illustration: <Step3Illustration />
    }
  ];

  return (
    <section className="pt-8 pb-24 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
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
              PROCESS
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
            >
              A Structured Process<br />
              Built To <span className="text-[#1ba453]">Ship</span> And <span className="text-[#1ba453]">Scale</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm lg:pb-3"
          >
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              We follow a clear, collaborative workflow, from discovery to delivery. ensuring speed, clarity, and long-term product success.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white dark:bg-zinc-900/90 rounded-[2rem] px-6 pt-8 pb-0 flex flex-col h-[550px] shadow-xs border border-zinc-200/60 dark:border-white/10 overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{step.title}</h3>
                <span className="text-lg font-medium text-zinc-400 dark:text-zinc-500">{step.step}</span>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm leading-relaxed mb-10">
                {step.description}
              </p>
              
              <div className="flex-1 relative mt-auto w-full group-hover:scale-105 max-lg:group-data-[in-view=true]:scale-105 transition-transform duration-500 origin-bottom">
                {step.illustration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Step1Illustration() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-zinc-50 dark:bg-zinc-950/60 rounded-t-2xl border border-zinc-200 dark:border-white/10 border-b-0 shadow-sm flex flex-col p-2">
      {/* Browser Bar */}
      <div className="flex gap-1.5 px-2 py-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1ba453]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
        <div className="w-12 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700 ml-2"></div>
      </div>
      
      {/* Video Call Area */}
      <div className="flex-1 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-white/10 relative mt-2 flex flex-col items-center justify-center shadow-inner">
        {/* Main Avatar */}
        <div className="relative w-24 h-24 rounded-full flex items-center justify-center mb-10 shadow-sm border border-zinc-200 dark:border-white/10 group-hover:border-transparent max-lg:group-data-[in-view=true]:border-transparent bg-zinc-100 dark:bg-zinc-800 group-hover:bg-[#1ba453] max-lg:group-data-[in-view=true]:bg-[#1ba453] group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 transition-all duration-500 overflow-hidden">
          {/* Default State: CSS Person Shape */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 transition-all duration-500 opacity-100 group-hover:opacity-0 max-lg:group-data-[in-view=true]:opacity-0 group-hover:translate-y-4 max-lg:group-data-[in-view=true]:translate-y-4">
             {/* Head */}
             <div className="w-7 h-7 rounded-full bg-[#dfdfdf] dark:bg-zinc-600 mb-1"></div>
             {/* Body (semicircle) */}
             <div className="w-14 h-7 bg-[#dfdfdf] dark:bg-zinc-600 rounded-t-full"></div>
          </div>
          {/* Hover State: Checkmark dropping from top */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 -translate-y-12 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 group-hover:translate-y-0 max-lg:group-data-[in-view=true]:translate-y-0 transition-all duration-500 delay-75">
                <Check className="w-5 h-5 text-[#1ba453] stroke-[3]" />
             </div>
          </div>
        </div>
        
        {/* Controls Pill */}
        <div className="absolute bottom-4 bg-zinc-100 dark:bg-zinc-800 rounded-full px-4 py-2 flex gap-3 items-center shadow-sm border border-zinc-200 dark:border-white/10">
          <div className="w-5 h-5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
          <div className="w-5 h-5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
          <div className="w-8 h-8 rounded-full bg-[#1ba453] flex items-center justify-center shadow-md">
             <Phone className="w-4 h-4 text-white fill-white" />
          </div>
          <div className="w-5 h-5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
          <div className="w-5 h-5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
        </div>

        {/* Small Preview Box */}
        <div className="absolute bottom-4 right-4 w-12 h-16 bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 rounded-lg shadow-sm flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function KanbanCard({ delay = 0 }: { delay?: number }) {
  return (
    <div className="bg-white dark:bg-zinc-800/90 p-2.5 rounded-lg border border-zinc-100 dark:border-white/5 shadow-sm flex flex-col justify-center h-[3.25rem] relative overflow-hidden group/card">
      {/* Wireframe lines (Default State) */}
      <div 
        className="flex flex-col gap-1.5 absolute left-3 right-3 transition-all duration-300 group-hover:-translate-x-8 max-lg:group-data-[in-view=true]:-translate-x-8 group-hover:opacity-0 max-lg:group-data-[in-view=true]:opacity-0"
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
         <div 
           className="h-1.5 w-[90%] bg-zinc-200 dark:bg-zinc-700 rounded-full group-hover:bg-[#1ba453] max-lg:group-data-[in-view=true]:bg-[#1ba453] transition-colors duration-200"
           style={{ transitionDelay: `${delay}ms` }}
         ></div>
         <div 
           className="h-1.5 w-[70%] bg-zinc-200 dark:bg-zinc-700 rounded-full group-hover:bg-[#1ba453] max-lg:group-data-[in-view=true]:bg-[#1ba453] transition-colors duration-200"
           style={{ transitionDelay: `${delay}ms` }}
         ></div>
      </div>
      {/* Checkmark Icon (Hover State) */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 max-lg:group-data-[in-view=true]:translate-x-0 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100"
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
         <CheckCircle2 className="w-5 h-5 text-[#1ba453] fill-[#1ba453]/10" />
      </div>
    </div>
  );
}

function Step2Illustration() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[85%] bg-zinc-50 dark:bg-zinc-950/60 rounded-t-2xl border border-zinc-200 dark:border-white/10 border-b-0 shadow-sm flex flex-col p-2">
      {/* Browser Bar */}
      <div className="flex gap-1.5 px-2 py-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1ba453]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
        <div className="w-12 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700 ml-2"></div>
      </div>
      
      {/* Kanban Board */}
      <div className="flex-1 mt-2 flex gap-3 px-3 overflow-hidden">
        {/* Column 1 */}
        <div className="flex-1 flex flex-col gap-2.5">
           <div className="flex items-center gap-1.5 mb-0.5">
             <div className="w-1.5 h-1.5 rounded-full bg-[#1ba453] transition-colors duration-500"></div>
             <div className="h-1 w-10 bg-zinc-200 dark:bg-zinc-700 rounded-full transition-colors duration-500"></div>
           </div>
           <KanbanCard delay={0} />
           <KanbanCard delay={50} />
           <KanbanCard delay={100} />
        </div>
        
        {/* Column 2 */}
        <div className="flex-1 flex flex-col gap-2.5">
           <div className="flex items-center gap-1.5 mb-0.5">
             <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 transition-colors duration-500"></div>
             <div className="h-1 w-12 bg-[#1ba453] rounded-full transition-colors duration-500"></div>
           </div>
           <KanbanCard delay={50} />
           <KanbanCard delay={100} />
           <KanbanCard delay={150} />
        </div>

        {/* Column 3 */}
        <div className="flex-1 flex flex-col gap-2.5">
           <div className="flex items-center gap-1.5 mb-0.5">
             <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 transition-colors duration-500"></div>
             <div className="h-1 w-10 bg-zinc-200 dark:bg-zinc-700 rounded-full transition-colors duration-500"></div>
           </div>
           <KanbanCard delay={100} />
           <KanbanCard delay={150} />
           <KanbanCard delay={200} />
        </div>
      </div>
    </div>
  );
}

function Step3Illustration() {
  return (
    <div className="absolute inset-0 pt-4 w-full h-full overflow-hidden">
      {/* Blurred container for hover */}
      <div className="relative w-full h-full transition-all duration-500 group-hover:blur-[4px] max-lg:group-data-[in-view=true]:blur-[4px] group-hover:opacity-80 max-lg:group-data-[in-view=true]:opacity-80">
        {/* Back Window (Top Left) */}
        <div className="absolute top-2 left-0 w-[65%] h-[45%] bg-zinc-50 dark:bg-zinc-800/90 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm p-3 flex flex-col">
           <div className="flex gap-1 mb-4">
             <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
           </div>
           <div className="flex-1 flex flex-col gap-3">
             <div className="w-3/4 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full mx-auto"></div>
             <div className="w-1/2 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full mx-auto"></div>
             <div className="flex gap-2 mt-auto">
               <div className="flex-1 h-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded flex items-end p-1">
                  <div className="w-full h-1.5 bg-[#1ba453] rounded-full"></div>
               </div>
               <div className="flex-1 h-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded"></div>
               <div className="flex-1 h-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded"></div>
             </div>
           </div>
        </div>

        {/* Side Window (Top Right) */}
        <div className="absolute top-8 right-0 w-[40%] h-[35%] bg-zinc-50 dark:bg-zinc-800/90 rounded-xl border border-zinc-200 dark:border-white/10 shadow-md p-2 flex flex-col z-10">
           <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-lg mb-2"></div>
           <div className="w-3/4 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-1.5"></div>
           <div className="w-1/3 h-2 bg-[#1ba453] rounded-full"></div>
        </div>

        {/* Bottom Window */}
        <div className="absolute bottom-0 left-[5%] w-[90%] h-[40%] bg-zinc-50 dark:bg-zinc-800/90 rounded-t-xl border border-zinc-200 dark:border-white/10 border-b-0 shadow-lg p-3 flex flex-col z-20">
           <div className="flex justify-between mb-4">
             <div className="flex gap-1">
               <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
             </div>
             <div className="flex gap-1">
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
             </div>
           </div>
           <div className="w-16 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full mx-auto mb-4"></div>
           
           <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-lg flex flex-col items-center justify-center gap-2">
              <div className="w-1/2 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
              <div className="w-1/3 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
           </div>
        </div>
      </div>

      {/* Hover Popup Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
         <div className="bg-[#ff5a1f] text-white font-bold text-[13px] px-3.5 py-1.5 rounded-full flex items-center gap-2.5 shadow-xl opacity-0 translate-y-12 group-hover:opacity-100 max-lg:group-data-[in-view=true]:opacity-100 group-hover:translate-y-0 max-lg:group-data-[in-view=true]:translate-y-0 transition-all duration-500 delay-75">
            Work Delivered
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Check className="w-3.5 h-3.5 text-[#ff5a1f] stroke-[4]" />
            </div>
         </div>
      </div>
    </div>
  );
}
