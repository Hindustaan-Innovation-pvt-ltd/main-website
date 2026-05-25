import { Navbar } from "@/components/landing/Navbar";
import { FooterBar } from "@/components/landing/FooterBar";
import { CtaFooter } from "@/components/landing/CtaFooter";
import { HeadphonesIcon, Mail, MessageCircle, Clock, Zap, BookOpen, BarChart2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Hindustaan Innovations",
  description: "Get help from the Hindustaan Innovations support team. We're available 24/7 for all our clients.",
};

const CHANNELS = [
  {
    icon: MessageCircle,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    title: "WhatsApp Support",
    desc: "The fastest way to reach us. Send a message and get a reply within minutes during business hours.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/918803555558",
    badge: "Fastest",
    badgeColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    icon: Mail,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Email Support",
    desc: "For detailed queries, project questions, or documentation requests. We respond within 24 hours.",
    action: "Send an Email",
    href: "mailto:connect@hindustaan.in",
    badge: "24hr Response",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: HeadphonesIcon,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    title: "Book a Call",
    desc: "Schedule a 1-on-1 call with our team to discuss your project, troubleshoot issues, or plan next steps.",
    action: "Book a Call",
    href: "tel:+917712994005",
    badge: "Priority",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
];

const FAQS = [
  {
    q: "How quickly do you respond to support requests?",
    a: "WhatsApp messages are typically answered within 1–2 hours during business hours (9 AM – 8 PM IST, Monday–Saturday). Email queries are answered within 24 hours. For urgent issues, WhatsApp is always the fastest channel.",
  },
  {
    q: "What's included in your post-launch support?",
    a: "All development projects include 30 days of free bug-fix support after launch. After that, you can opt into one of our monthly maintenance plans which cover bug fixes, minor updates, security patches, and performance monitoring.",
  },
  {
    q: "My website is down. What should I do?",
    a: "Contact us immediately on WhatsApp with the details. We treat downtime as critical and escalate it immediately. If you're on a maintenance plan, we have a 4-hour SLA for critical issues.",
  },
  {
    q: "Can I request changes to my project after it's launched?",
    a: "Absolutely. Minor changes (text, images, small layout tweaks) within 30 days post-launch are typically covered. For larger changes or new features, we'll scope and quote them as a new mini-project or ongoing retainer.",
  },
  {
    q: "Do you offer training for delivered projects?",
    a: "Yes. For all web, app, and automation projects, we provide a handover session where we walk you through how to manage and operate everything. We also provide recorded video walkthroughs for complex systems.",
  },
  {
    q: "I lost access to my admin panel / CMS. Help!",
    a: "Send us your project name and the email address associated with your account via WhatsApp or email. We'll restore access within a few hours, usually much faster.",
  },
  {
    q: "Can I upgrade my service plan later?",
    a: "Yes, you can upgrade or add services at any time. Contact your project manager or reach out via any of our support channels and we'll discuss the best way to expand your engagement.",
  },
  {
    q: "Do you provide support for third-party tools you've integrated?",
    a: "We provide guidance and best-effort support for third-party integrations (e.g., Razorpay, Zoho, AWS) that we've implemented for you. For issues originating with the third-party platform itself, we help coordinate with their support teams.",
  },
];

export default function SupportPage() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black z-0 pointer-events-none" />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-36 pb-16 max-w-4xl mx-auto text-center gap-6">
        <div className="flex items-center gap-2 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5">
          <HeadphonesIcon className="w-4 h-4 text-zinc-300" />
          <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">Support</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-100">
          We're Here{" "}
          <span className="font-serif italic font-light text-zinc-300">When You Need Us.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
          Our team is available 7 days a week to help you with any questions, issues, or project needs.
        </p>

        {/* SLA chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          {[
            { icon: Clock, label: "9AM–8PM IST", sub: "Mon–Sat" },
            { icon: Zap, label: "1–2 Hr Response", sub: "WhatsApp" },
            { icon: BarChart2, label: "24Hr Response", sub: "Email" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 bg-zinc-900/60 border border-white/8 rounded-xl px-4 py-2.5">
              <s.icon className="w-4 h-4 text-zinc-400" />
              <div>
                <p className="text-xs font-semibold text-zinc-200">{s.label}</p>
                <p className="text-[10px] text-zinc-500">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact channels */}
      <section className="relative z-10 px-4 pb-20 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHANNELS.map((ch) => (
            <Link
              key={ch.title}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-5 bg-zinc-950 rounded-3xl border-t-2 border-white/20 outline outline-white/8 p-7 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/2 rounded-full blur-3xl group-hover:bg-white/4 transition-all duration-700 pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${ch.bg}`}>
                  <ch.icon className={`w-5 h-5 ${ch.color}`} />
                </div>
                <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${ch.badgeColor}`}>
                  {ch.badge}
                </span>
              </div>

              <div>
                <h2 className="text-lg font-bold text-zinc-100 mb-2">{ch.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{ch.desc}</p>
              </div>

              <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 group/link">
                {ch.action}
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-4 pb-24 w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5">
            <BookOpen className="w-4 h-4 text-zinc-300" />
            <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Frequently Asked{" "}
            <span className="font-serif italic font-light text-zinc-300">Questions.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="bg-zinc-950 border border-white/8 rounded-2xl p-6 flex flex-col gap-3">
              <h3 className="text-base font-semibold text-zinc-100">{faq.q}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaFooter />
      <FooterBar />
    </div>
  );
}
