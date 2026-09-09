"use client";

import {
  ArrowLeft,
  Eye,
  EyeOff,
  KeyRound,
  Loader2,
  Lock,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLoginGate() {
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin.trim()) {
      setError("Please enter your administrator PIN.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pin.trim() }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        // Refresh to reload server component with authenticated cookie
        router.refresh();
      } else {
        setError(data.message || "Incorrect PIN. Access denied.");
      }
    } catch {
      setError("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="w-full max-w-md bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-zinc-900/10 dark:shadow-black/50 text-center relative overflow-hidden">
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500" />

        {/* Company Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center p-1.5 border border-zinc-200/80">
            <Image
              src="/logo.png"
              alt="Hindustaan Innovations"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-xs tracking-wider text-zinc-700 dark:text-zinc-300 uppercase">
            Hindustaan Innovations
          </span>
        </div>

        {/* Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center mb-5 shadow-inner">
          <KeyRound className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
          Administrator Access Required
        </h1>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-5 border border-emerald-200 dark:border-emerald-800/60">
          <Lock className="w-3 h-3" />
          Confidential Employee Badging Portal
        </div>

        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          This portal contains sensitive employee verification tokens, contact
          records, and QR code assets. Please authenticate using the company
          administrator PIN.
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label
              htmlFor="admin-pin-input"
              className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5"
            >
              Administrator Security PIN
            </label>
            <div className="relative">
              <input
                id="admin-pin-input"
                type={showPin ? "text" : "password"}
                placeholder="Enter security PIN..."
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full pl-3.5 pr-10 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                {showPin ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <span>Unlock Admin Portal</span>
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Hindustaan Innovations Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
