import { Navbar2 } from "@/components/landing/navbar2";
import Footer2 from "@/components/landing/footer2";
import { CtaFooter } from "@/components/landing/CtaFooter";
import { BookOpen, ChevronRight, Search, Zap, Globe, Bot, Cloud, Code2, Smartphone, ShoppingCart, Megaphone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Hindustaan Innovations",
  description: "Guides, references, and how-tos for all Hindustaan Innovations services and platforms.",
};

const DOC_SECTIONS = [
  {
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    title: "Getting Started",
    desc: "Everything you need to kick off your first project with us — onboarding, discovery call prep, and what to expect.",
    articles: [
      "How Our Onboarding Process Works",
      "What to Prepare for Your Discovery Call",
      "Understanding Your Project Blueprint",
      "Timelines & Milestones Explained",
    ],
  },
  {
    icon: Bot,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    title: "AI & Automation",
    desc: "Deep-dives into our AI automation solutions — from chatbots and workflow automation to AI agents and CRM integrations.",
    articles: [
      "WhatsApp AI Chatbot Setup Guide",
      "n8n Workflow Automation Basics",
      "CRM Integration with AI Triggers",
      "AI Lead Qualification Flow",
    ],
  },
  {
    icon: Globe,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Web Development",
    desc: "Technical references for our web development engagements — stacks, deployment, handover protocols.",
    articles: [
      "Technology Stack We Use",
      "Website Handover Checklist",
      "CMS & Admin Access Guide",
      "Post-Launch Support SLA",
    ],
  },
  {
    icon: Cloud,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    title: "Cloud & DevOps",
    desc: "Infrastructure guides for clients on our cloud and DevOps services — hosting, CI/CD, monitoring.",
    articles: [
      "AWS / GCP Setup Overview",
      "CI/CD Pipeline Explained",
      "Uptime Monitoring & Alerts",
      "Backup & Disaster Recovery Policy",
    ],
  },
  {
    icon: Megaphone,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
    title: "Digital Marketing",
    desc: "How we run ad campaigns, SEO, and content strategies — tracking, reporting, and access.",
    articles: [
      "Ads Manager Access Setup",
      "Monthly Performance Report Guide",
      "SEO Dashboard Walkthrough",
      "Content Calendar & Approval Flow",
    ],
  },
  {
    icon: Code2,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    title: "APIs & Integrations",
    desc: "Reference documentation for third-party API integrations we implement — Razorpay, Shiprocket, Zoho, and more.",
    articles: [
      "Razorpay Payment Integration Guide",
      "Zoho CRM Sync Setup",
      "Shiprocket Shipping API",
      "Google Workspace Integration",
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="relative bg-white text-zinc-900 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-white z-0 pointer-events-none" />
      <Navbar2 />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-36 pb-16 max-w-4xl mx-auto text-center gap-6">
        <div className="flex items-center gap-2 bg-zinc-50/40 backdrop-blur-md border border-black/5 rounded-full px-4 py-1.5">
          <BookOpen className="w-4 h-4 text-zinc-700" />
          <span className="text-xs font-semibold tracking-wider text-zinc-700 uppercase">Documentation</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
          Everything You{" "}
          <span className="font-serif italic font-light text-zinc-700">Need to Know.</span>
        </h1>
        <p className="text-zinc-600 text-lg max-w-2xl leading-relaxed">
          Guides, references, and how-tos for all our services. Built for business owners, not just engineers.
        </p>

        {/* Search bar (UI only) */}
        <div className="flex items-center gap-3 w-full max-w-md bg-zinc-50/60 border border-black/10 rounded-2xl px-4 py-3 mt-2">
          <Search className="w-4 h-4 text-zinc-500 shrink-0" />
          <span className="text-sm text-zinc-600">Search documentation...</span>
        </div>
      </section>

      {/* Sections grid */}
      <section className="relative z-10 px-4 pb-24 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOC_SECTIONS.map((sec) => (
            <div
              key={sec.title}
              className="group flex flex-col gap-5 bg-[#f5f5f5] rounded-3xl border-t-2 border-white/20 outline outline-white/8 p-7 hover:bg-zinc-50/60 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${sec.bg}`}>
                <sec.icon className={`w-5 h-5 ${sec.color}`} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-zinc-900 mb-2">{sec.title}</h2>
                <p className="text-zinc-600 text-sm leading-relaxed">{sec.desc}</p>
              </div>

              {/* Article list */}
              <ul className="flex flex-col gap-2 flex-1">
                {sec.articles.map((a) => (
                  <li key={a}>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors group/link"
                    >
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 text-zinc-700 group-hover/link:text-zinc-600 transition-colors" />
                      {a}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Help nudge */}
        <div className="mt-16 bg-[#f5f5f5] border border-black/10 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-4">
          <h3 className="text-2xl font-bold text-zinc-900">Can't find what you're looking for?</h3>
          <p className="text-zinc-600 text-sm max-w-md">
            Our support team is available 24/7. Reach out and we'll point you in the right direction — fast.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Contact Support
          </Link>
        </div>
      </section>

      <CtaFooter />
      <Footer2 />
    </div>
  );
}
