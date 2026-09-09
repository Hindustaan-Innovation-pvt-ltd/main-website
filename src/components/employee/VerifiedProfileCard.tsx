"use client";

import { Building2, CheckCircle2, ExternalLink, Landmark, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Employee } from "@/lib/employee";

interface VerifiedProfileCardProps {
  employee: Employee;
}

export function VerifiedProfileCard({ employee }: VerifiedProfileCardProps) {
  return (
    <div className="min-h-screen py-8 sm:py-14 px-4 sm:px-6 flex flex-col items-center justify-center bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 relative selection:bg-emerald-500 selection:text-white">
      {/* Background ambient lighting glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="w-full max-w-xl relative z-10">
        {/* Main Card Container */}
        <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-200/90 dark:border-zinc-800 rounded-3xl shadow-2xl shadow-zinc-900/10 dark:shadow-black/50 overflow-hidden">
          {/* Card Top Banner (Dedicated Company Header) */}
          <div className="relative bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 dark:from-emerald-800 dark:via-teal-900 dark:to-emerald-950 px-6 sm:px-8 py-6 text-white border-b border-emerald-600/30">
            <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-black p-1.5 shadow-md flex items-center justify-center shrink-0 border border-white/20">
                  <Image
                    src="/logo.png"
                    alt="Hindustaan Innovations"
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold tracking-wider uppercase text-white leading-tight">
                    Hindustaan Innovations
                  </h2>
                  <p className="text-[11px] text-emerald-200 uppercase tracking-widest font-semibold mt-0.5">
                    Private Limited
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Overview Section */}
          <div className="px-6 sm:px-8 pt-7 pb-7">
            {/* Header with Photo, Name & Title (Proper Spacing, No Overlap) */}
            <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-5">
              {/* Employee Photo */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-lg bg-zinc-200 dark:bg-zinc-800 relative">
                  <Image
                    src={employee.photo || "/logo.png"}
                    alt={employee.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, 112px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white p-1 rounded-xl shadow-md border-2 border-white dark:border-zinc-900">
                  <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>

              {/* Name & Designation */}
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight truncate">
                  {employee.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {employee.designation}
                </p>
              </div>
            </div>

            {/* Bio / Summary (if present) */}
            {employee.bio && (
              <div className="mb-6 p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-zinc-200/70 dark:border-zinc-800 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic text-center sm:text-left">
                &ldquo;{employee.bio}&rdquo;
              </div>
            )}

            {/* Contact Details Cards */}
            <div className="space-y-3 mb-6">
              {/* Official Email */}
              <a
                href={`mailto:${employee.email}`}
                className="group p-3.5 rounded-2xl bg-zinc-50 hover:bg-zinc-100/90 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-all border border-zinc-200/70 dark:border-zinc-800 flex items-center justify-between gap-3 shadow-xs"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200/60 dark:border-emerald-800/50 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                      Official Email
                    </div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                      {employee.email}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 shrink-0 transition-colors" />
              </a>

              {/* Contact Phone */}
              <a
                href={`tel:${employee.phone}`}
                className="group p-3.5 rounded-2xl bg-zinc-50 hover:bg-zinc-100/90 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-all border border-zinc-200/70 dark:border-zinc-800 flex items-center justify-between gap-3 shadow-xs"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-200/60 dark:border-teal-800/50 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                      Official Contact
                    </div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors truncate">
                      {employee.phone}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-teal-500 shrink-0 transition-colors" />
              </a>

              {/* Head Office Address */}
              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-800 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/60 dark:border-blue-800/50 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Head Office Address
                  </div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed mt-0.5">
                    {employee.headOfficeAddress || "CO: B-41, Sector-8A, Kamal-Vihar, Raipur (C.G.) — 492001"}
                  </div>
                </div>
              </div>

              {/* Registered Office Address */}
              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-800 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-200/60 dark:border-indigo-800/50 mt-0.5">
                  <Landmark className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Registered Office Address
                  </div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed mt-0.5">
                    {employee.registeredOfficeAddress || "Gp14168, Near Rajdeep, Medico Ajency, Sector-14, Gopalganj, Bihar — 841428"}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-semibold transition-all shadow-sm"
              >
                <span>Visit Company Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Copyright */}
        <div className="text-center mt-6 text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Hindustaan Innovations Private Limited.
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
