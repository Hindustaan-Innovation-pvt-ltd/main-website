"use client";

import { motion } from "motion/react";
import { 
  Mountain, 
  Circle, 
  Asterisk, 
  Plane, 
  Dumbbell, 
  Activity, 
  Square, 
  Globe, 
  Layers, 
  MessageSquare
} from "lucide-react";

const clients = [
  { id: 1, name: "tecaudex", icon: Mountain },
  { id: 2, name: "Shift", icon: Circle },
  { id: 3, name: "PRIMEX", icon: Asterisk },
  { id: 4, name: "BB Travels", icon: Plane },
  { id: 5, name: "thewalt.", icon: null },
  { id: 6, name: "LiftBuddy", icon: Dumbbell },
  { id: 7, name: "move.", icon: Activity },
  { id: 8, name: "Maguire Intl.", icon: Square },
  { id: 9, name: "GRINTAFY", icon: Globe },
  { id: 10, name: "Golden Ops", icon: Layers },
  { id: 11, name: "TWLM", icon: MessageSquare },
];

export function TrustedSection() {
  return (
    <section className="py-24 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-6"
            >
              CLIENTS
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
            >
              <span className="text-[#1ba453]">Trusted</span> by <span className="text-[#1ba453]">Teams</span> Building Meaningful Digital Products
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[280px] lg:pb-3"
          >
            <p className="text-sm md:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              Teams worldwide trust us to turn ideas into high-performing digital products.
            </p>
          </motion.div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white dark:bg-zinc-900/90 rounded-2xl h-[120px] flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-zinc-200/80 dark:border-white/10 cursor-pointer group shadow-xs"
            >
              <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 group-hover:scale-110 max-lg:group-data-[in-view=true]:scale-110 transition-transform duration-300">
                {client.icon && (
                  <client.icon className="w-7 h-7 fill-current text-zinc-800 dark:text-zinc-200" />
                )}
                <span className={`font-bold text-xl tracking-tight ${client.name === 'thewalt.' ? 'text-2xl' : ''}`}>
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
          
          {/* +20 Startups Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 11 * 0.05 }}
            className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl h-[120px] flex items-center justify-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-xl border border-zinc-800 dark:border-zinc-700"
          >
            <span className="font-bold text-xl text-white tracking-tight">+20 Startups</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
