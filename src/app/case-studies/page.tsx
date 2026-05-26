import { Navbar } from "@/components/landing/Navbar";
import { FooterBar } from "@/components/landing/FooterBar";
import { CtaFooter } from "@/components/landing/CtaFooter";
import { ArrowUpRight, BarChart2, TrendingUp, Zap, Users, Clock, Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Hindustaan Innovations",
  description: "Explore real-world results from our AI automation and digital solutions — measurable impact for Indian businesses.",
  alternates: {
    canonical: "/case-studies",
  },
};

const CASES = [
  {
    id: "ecommerce-automation",
    tag: "E-Commerce",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "3x Order Processing Speed for a Mumbai Retailer",
    desc: "We deployed an AI-powered inventory management and order automation system for a mid-size D2C brand, cutting manual work by 80% and reducing fulfillment errors to near zero.",
    metrics: [
      { icon: TrendingUp, label: "Revenue Growth", value: "+42%" },
      { icon: Clock, label: "Processing Time", value: "−80%" },
      { icon: Zap, label: "Automation Rate", value: "95%" },
    ],
    industry: "Retail & E-Commerce",
    duration: "6 weeks",
    services: ["AI Automation", "Custom Software", "Cloud Integration"],
  },
  {
    id: "lead-gen-crm",
    tag: "Digital Marketing",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    title: "10x Lead Volume for a B2B SaaS Company",
    desc: "Built a full-funnel lead generation system with AI chatbot qualification, automated CRM workflows, and targeted paid campaign optimization — helping a Pune SaaS company scale from 50 to 500+ leads/month.",
    metrics: [
      { icon: Users, label: "Monthly Leads", value: "500+" },
      { icon: BarChart2, label: "Conversion Rate", value: "+65%" },
      { icon: TrendingUp, label: "CAC Reduction", value: "−35%" },
    ],
    industry: "B2B SaaS",
    duration: "8 weeks",
    services: ["Digital Marketing", "AI Chatbots", "CRM Automation"],
  },
  {
    id: "healthcare-portal",
    tag: "Healthcare",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Patient Appointment System for a Delhi Clinic Chain",
    desc: "Designed and built a custom web portal and WhatsApp bot for booking, reminders, and follow-ups — reducing no-show rates by 60% and saving 4 hours of admin work per day.",
    metrics: [
      { icon: Clock, label: "Admin Hours Saved", value: "4/day" },
      { icon: Star, label: "Patient Satisfaction", value: "4.9★" },
      { icon: TrendingUp, label: "No-show Reduction", value: "−60%" },
    ],
    industry: "Healthcare",
    duration: "5 weeks",
    services: ["Web Development", "AI Chatbots", "Automation"],
  },
  {
    id: "real-estate-ai",
    tag: "Real Estate",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    title: "AI Property Recommendation Engine for a Hyderabad Agency",
    desc: "Integrated an AI recommendation layer into an existing property portal — personalizing listings for buyers and automating follow-up sequences for brokers, doubling their deal closure rate.",
    metrics: [
      { icon: TrendingUp, label: "Deal Closures", value: "2x" },
      { icon: Users, label: "Broker Efficiency", value: "+70%" },
      { icon: Zap, label: "Response Time", value: "−90%" },
    ],
    industry: "Real Estate",
    duration: "10 weeks",
    services: ["AI & ML", "Web Development", "CRM Integration"],
  },
  {
    id: "logistics-dashboard",
    tag: "Logistics",
    tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    title: "Real-Time Fleet Tracking Dashboard for a Freight Company",
    desc: "Built a live operations dashboard with GPS integration, automated dispatch alerts, and AI route optimization — reducing fuel costs by 22% and improving on-time delivery by 40%.",
    metrics: [
      { icon: TrendingUp, label: "On-time Delivery", value: "+40%" },
      { icon: BarChart2, label: "Fuel Cost", value: "−22%" },
      { icon: Zap, label: "Dispatch Speed", value: "5x" },
    ],
    industry: "Logistics & Supply Chain",
    duration: "12 weeks",
    services: ["Custom Software", "Cloud & DevOps", "AI Automation"],
  },
  {
    id: "edtech-platform",
    tag: "EdTech",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    title: "AI-Powered Study Platform for a Coaching Institute",
    desc: "Developed a personalized learning platform with adaptive quiz generation, progress tracking, and a WhatsApp study bot — boosting student engagement by 3x and improving test scores significantly.",
    metrics: [
      { icon: Users, label: "Student Engagement", value: "3x" },
      { icon: Star, label: "Score Improvement", value: "+28%" },
      { icon: TrendingUp, label: "Retention Rate", value: "92%" },
    ],
    industry: "Education",
    duration: "14 weeks",
    services: ["AI & ML", "Web Development", "Mobile App"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black z-0 pointer-events-none" />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-36 pb-20 max-w-5xl mx-auto text-center gap-6">
        <div className="flex items-center gap-2 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5">
          <BarChart2 className="w-4 h-4 text-zinc-300" />
          <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">Case Studies</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-100">
          Real Results,{" "}
          <span className="font-serif italic font-light text-zinc-300">Real Businesses.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
          Every project we ship is tied to measurable outcomes. Here's a look at what we've built and the impact it created.
        </p>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-4 mt-4 w-full max-w-lg">
          {[
            { value: "35+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "3x", label: "Avg. ROI Boost" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center bg-zinc-900/40 border border-white/5 rounded-2xl px-4 py-4">
              <span className="text-2xl font-bold text-zinc-100">{s.value}</span>
              <span className="text-xs text-zinc-500 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cases grid */}
      <section className="relative z-10 px-4 pb-24 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.id}
              className="group flex flex-col gap-5 bg-zinc-950 rounded-3xl border-t-2 border-white/20 outline outline-white/8 p-7 hover:bg-zinc-900/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/2 rounded-full blur-3xl group-hover:bg-white/4 transition-all duration-700 pointer-events-none" />

              {/* Tag */}
              <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border w-fit ${c.tagColor}`}>
                {c.tag}
              </span>

              {/* Title */}
              <h2 className="text-lg font-bold text-zinc-100 leading-snug">{c.title}</h2>

              {/* Desc */}
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">{c.desc}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2">
                {c.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col items-center bg-white/3 border border-white/5 rounded-xl py-2.5 px-1">
                    <m.icon className="w-3.5 h-3.5 text-zinc-500 mb-1" />
                    <span className="text-sm font-bold text-zinc-100">{m.value}</span>
                    <span className="text-[9px] text-zinc-600 text-center leading-tight mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
                <span className="text-[10px] text-zinc-500">{c.industry}</span>
                <span className="text-[10px] text-zinc-700">·</span>
                <span className="text-[10px] text-zinc-500">{c.duration}</span>
              </div>

              {/* Services chips */}
              <div className="flex flex-wrap gap-1.5">
                {c.services.map((s) => (
                  <span key={s} className="text-[10px] bg-zinc-900 border border-white/8 text-zinc-500 px-2 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 text-sm mb-4">Want results like these for your business?</p>
          <Link
            href="tel:+917712994005"
            className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Book a Free Strategy Call <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaFooter />
      <FooterBar />
    </div>
  );
}
