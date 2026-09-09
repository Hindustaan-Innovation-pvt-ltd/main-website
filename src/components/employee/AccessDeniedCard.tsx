"use client";

import {
  ArrowLeft,
  CheckCircle2,
  Lock,
  QrCode,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AccessDeniedCardProps {
  reason?: "NOT_FOUND" | "INVALID_TOKEN" | "MISSING_TOKEN" | "INACTIVE";
  requestedId?: string;
}

export function AccessDeniedCard({
  reason = "MISSING_TOKEN",
  requestedId,
}: AccessDeniedCardProps) {
  const isNotFound = reason === "NOT_FOUND";
  const isInactive = reason === "INACTIVE";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="w-full max-w-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-zinc-900/10 dark:shadow-black/50 text-center relative overflow-hidden">
        {/* Top Decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500" />

        {/* Company Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Hindustaan Innovations"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-sm tracking-wide text-zinc-700 dark:text-zinc-300 uppercase">
            Hindustaan Innovations
          </span>
        </div>

        {/* Security Icon Box */}
        <div className="mx-auto w-20 h-20 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center mb-6 shadow-inner relative group">
          <div className="absolute -inset-1 rounded-2xl bg-amber-500/20 blur-md group-hover:bg-amber-500/30 transition-all" />
          <div className="relative">
            {isNotFound ? (
              <ShieldAlert className="w-10 h-10 text-amber-600 dark:text-amber-400" />
            ) : isInactive ? (
              <Lock className="w-10 h-10 text-rose-600 dark:text-rose-400" />
            ) : (
              <QrCode className="w-10 h-10 text-amber-600 dark:text-amber-400" />
            )}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
          {isNotFound
            ? "Employee Record Not Found"
            : isInactive
              ? "Profile Inactive"
              : "QR Scan Required"}
        </h1>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 mb-6 border border-amber-200 dark:border-amber-800/60">
          <Lock className="w-3 h-3" />
          Direct Route Access Restricted
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
          {isNotFound ? (
            <>
              No registered employee found for identifier{" "}
              <span className="font-mono font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                {requestedId || "Unknown"}
              </span>
              . Please verify the official QR code on the physical ID badge.
            </>
          ) : isInactive ? (
            "This employee badge is currently marked as inactive or expired. Please contact Hindustaan Innovations administration for verification."
          ) : (
            "To protect employee privacy and verify official authenticity, employee profiles cannot be accessed via direct manual URL entry. Please scan the verified physical or digital QR Code on the employee's official ID card."
          )}
        </p>

        {/* Security Feature Highlights */}
        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-4 mb-8 text-left border border-zinc-200/60 dark:border-zinc-700/60 space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Cryptographically signed QR token validation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Private security envelope: zero public URL enumeration</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Official Hindustaan Innovations security standard</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-medium text-sm transition-all shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm transition-colors border border-zinc-300 dark:border-zinc-700"
          >
            Contact Support
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 text-[11px] text-zinc-500 dark:text-zinc-500">
          Hindustaan Innovations Identity & Trust Protocol • Security Gateway
        </div>
      </div>
    </div>
  );
}
