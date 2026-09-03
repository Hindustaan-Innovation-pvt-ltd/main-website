"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ThemeToggleProps {
  variant?: "compact" | "segmented";
  className?: string;
}

export function ThemeToggle({ variant = "compact", className = "" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-[14px] bg-white/10 flex items-center justify-center opacity-70 ${className}`}
        aria-hidden="true"
      >
        <Sun className="w-4 h-4 text-zinc-400" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  if (variant === "segmented") {
    return (
      <div className={`flex items-center p-1 bg-zinc-200/80 dark:bg-zinc-800/80 rounded-2xl border border-zinc-300/60 dark:border-white/10 ${className}`}>
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-200 ${
            theme === "light"
              ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-700 dark:text-white"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
          }`}
          title="Light Mode"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Light</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("system")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-200 ${
            theme === "system"
              ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-700 dark:text-white"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
          }`}
          title="System Preference"
        >
          <Monitor className="w-3.5 h-3.5 text-blue-500" />
          <span>Auto</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-200 ${
            theme === "dark"
              ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-700 dark:text-white"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
          }`}
          title="Dark Mode"
        >
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          <span>Dark</span>
        </button>
      </div>
    );
  }

  // Compact variant (used in floating navbar)
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center justify-center w-10 h-10 rounded-[14px] bg-zinc-800/80 hover:bg-zinc-700/80 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-200 border border-white/10 transition-colors duration-200 cursor-pointer overflow-hidden ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -16, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 16, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-amber-300" />
          ) : (
            <Sun className="w-4 h-4 text-amber-400" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
