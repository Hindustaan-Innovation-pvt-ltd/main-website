"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data.json";

/* ── Social Icons ── */
function SocialIcon({ icon }: { icon: string }) {
  if (icon === "twitter")
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  if (icon === "facebook")
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (icon === "instagram")
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    );
  if (icon === "linkedin")
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (icon === "dribbble")
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    );
  return null;
}

/* ── Static footer columns data ── */
const COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "/services/web-dev" },
      { label: "AI Automation", href: "/services/custom-ai" },
      { label: "Cloud & DevOps", href: "/services/devops" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "Digital Marketing", href: "/services/marketing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/career" },
      { label: "Portfolio", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/docs" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Support", href: "/support" },
    ],
  },
];

const STATS = [
  { value: "35+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "3x", label: "Avg Productivity Boost" },
  { value: "24/7", label: "Support Available" },
];

/* ── Main Footer ── */
export function FooterBar() {
  const { socials, copyright, email } = data.footer;
  const { name, tagline } = data.brand;

  return (
    <footer className="relative z-10 w-full bg-[#050505] border-t border-white/5 overflow-hidden">

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-75 h-px blur-sm bg-white/10" />

      {/* ── Stats bar ── */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/5">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-4">
              <span className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight">{stat.value}</span>
              <span className="text-xs text-zinc-600 mt-1 tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            {/* Logo + Name */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="bg-zinc-900 p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Image src="/logo.png" alt="logo" width={28} height={28} />
              </div>
              <span className="text-lg font-semibold tracking-tight text-zinc-100 leading-tight">{name}</span>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              {tagline} — We help businesses reduce manual work, improve efficiency, and grow faster using AI & custom software.
            </p>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors w-fit group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)] group-hover:shadow-[0_0_10px_rgba(16,185,129,1)] transition-shadow" />
              {email}
            </a>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 border border-white/8 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 hover:border-white/15 transition-all duration-200"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200 flex items-center gap-1.5 group w-fit"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-2.5 transition-all duration-200 text-zinc-600">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Newsletter strip ──
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-300">Stay in the loop</p>
            <p className="text-xs text-zinc-600 mt-0.5">Get the latest AI & automation insights delivered to your inbox.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-56 bg-zinc-900 border border-white/8 rounded-xl px-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
            />
            <button
              type="submit"
              className="shrink-0 bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div> */}

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-600">{copyright} · All rights reserved.</span>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href={
                  item.toLowerCase() === "terms of service"
                    ? "/terms"
                    : `/${decodeURIComponent(item)
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w\-]/g, "")}`
                }
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-zinc-700">
            <span>Made with</span>
            <span className="text-rose-500">♥</span>
            <span>by Hindustaan Innovations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
