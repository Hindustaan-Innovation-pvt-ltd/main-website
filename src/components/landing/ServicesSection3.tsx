"use client";

import { motion } from "motion/react";
import { 
  Monitor, 
  Server, 
  ShieldCheck, 
  CreditCard, 
  Database, 
  Smartphone, 
  Cloud, 
  Zap,
  Cpu
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Build responsive, full-stack web applications using Next.js, React, Node.js, and Express with clean component architecture and scalable state management.",
    icon: Monitor
  },
  {
    id: 2,
    title: "API Architecture & Integration",
    description: "Design secure, RESTful and GraphQL APIs with structured endpoints, request validation, rate limiting, and third-party integrations.",
    icon: Server
  },
  {
    id: 3,
    title: "Authentication & Security",
    description: "Implement token-based authentication (JWT, OAuth 2.0, NextAuth) with secure session handling, hashed passwords, and role-based access control.",
    icon: ShieldCheck
  },
  {
    id: 4,
    title: "Payment & Billing Systems",
    description: "Integrate Stripe checkout, subscriptions, invoice handling, and secure webhook listeners.",
    icon: CreditCard
  },
  {
    id: 5,
    title: "Database Design & Management",
    description: "Model relational and NoSQL schemas (PostgreSQL, MongoDB) with indexed queries and connection pooling.",
    icon: Database
  },
  {
    id: 6,
    title: "UI/UX Implementation",
    description: "Convert Figma designs into pixel-perfect, mobile-first interfaces using Tailwind CSS with dark/light modes.",
    icon: Smartphone
  },
  {
    id: 7,
    title: "Cloud Deployment & DevOps",
    description: "Configure CI/CD pipelines, Docker containers, and production deploys to Vercel, Render, or AWS.",
    icon: Cloud
  },
  {
    id: 8,
    title: "Performance Optimization & SEO",
    description: "Implement SSR/SSG, lazy loading, caching, and Core Web Vitals optimization.",
    icon: Zap
  },
  {
    id: 9,
    title: "AI & Machine Learning Integration",
    description: "Integrate LLMs, custom chatbots, and predictive analytics using OpenAI, Anthropic, or custom Python microservices.",
    icon: Cpu
  }
];

export function ServicesSection3() {
  return (
    <section className="pt-24 pb-12 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
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
              SERVICES
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
            >
              What We <span className="text-[#1ba453]">Build</span>
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
              End-to-end product development — from architecture to deployment.
            </p>
          </motion.div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white dark:bg-zinc-900/90 rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-200/60 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1ba453]/20 transition-all duration-300">
                <service.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-[#1ba453] transition-colors duration-300" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight group-hover:text-[#1ba453] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
