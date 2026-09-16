"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import data from "@/data.json";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const waLink = (data.brand as { whatsapp?: string } | undefined)?.whatsapp;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3">
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="hidden sm:block bg-[#075E54] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap pointer-events-none"
          >
            Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_28px_rgba(37,211,102,0.65)] transition-shadow duration-300"
      >
        {/* Ping ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-6 h-6 sm:w-7 sm:h-7 relative z-10"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.004 2.667C8.639 2.667 2.667 8.639 2.667 16c0 2.353.638 4.561 1.747 6.465L2.667 29.333l7.074-1.72A13.26 13.26 0 0 0 16.004 29.333C23.365 29.333 29.333 23.361 29.333 16c0-7.361-5.968-13.333-13.33-13.333Zm0 24.267a11.01 11.01 0 0 1-5.648-1.557l-.405-.24-4.197 1.02 1.053-3.944-.263-.413A10.944 10.944 0 0 1 5.001 16c0-6.074 4.929-11.003 11.003-11.003S27.003 9.926 27.003 16c0 6.074-4.923 10.933-10.999 10.933Zm6.028-8.21c-.33-.165-1.952-.963-2.254-1.072-.303-.11-.524-.165-.744.165-.22.33-.853 1.073-1.047 1.293-.193.22-.386.247-.716.082-.33-.165-1.395-.514-2.658-1.639-.982-.875-1.645-1.956-1.838-2.286-.193-.33-.021-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.082-.165-.744-1.793-1.02-2.456-.268-.642-.54-.554-.744-.564l-.633-.011c-.22 0-.578.082-.881.413-.303.33-1.156 1.13-1.156 2.757s1.184 3.198 1.348 3.418c.165.22 2.33 3.558 5.648 4.992.79.34 1.406.543 1.886.695.793.252 1.514.216 2.084.131.635-.096 1.952-.798 2.226-1.569.275-.771.275-1.432.193-1.569-.082-.137-.303-.22-.633-.385Z" />
        </svg>
      </motion.a>
    </div>
  );
}
