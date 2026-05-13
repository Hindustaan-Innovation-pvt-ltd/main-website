"use client";

import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { brand } = data;
  const { navLinks, ctaLabel } = data.navbar;

  return (
    <header className="relative z-50 flex flex-col w-full">
      <div className="relative z-50 flex bg-linear-to-b from-white via-white/50 dark:from-black/95 dark:via-black/50 to-transparent items-center justify-between px-6 py-4 md:px-10 lg:px-12 w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} decoding="async" loading="eager" fetchPriority="high" className="size-10" style={{ height: 'auto' }} />
          <span className="text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 w-40 leading-4">{brand.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-full px-1 py-1">
          {navLinks.map((item) =>
            <Link
              key={item}
              href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
              className="px-5 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all duration-300"
            >
              {item}
            </Link>
          )}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link href="/contact">
            <button type="button" className="flex items-center gap-2 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-md border border-black/10 dark:border-white/10 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/80 text-zinc-900 dark:text-zinc-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <Sparkles className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
              {ctaLabel}
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-md border border-black/10 dark:border-white/10 p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 px-6 py-6 flex flex-col gap-6 shadow-2xl z-40">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) =>
              <Link
                key={item}
                href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-all duration-300 flex items-center"
              >
                {item}
              </Link>
            )}
          </nav>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <button type="button" className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 px-4 py-3 rounded-xl text-sm font-semibold transition-colors w-full shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <Sparkles className="w-4 h-4" />
              {ctaLabel}
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
