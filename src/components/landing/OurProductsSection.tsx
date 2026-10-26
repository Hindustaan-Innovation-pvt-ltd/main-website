"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, X, ExternalLink, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductItem {
  id: string;
  name: string;
  category: string;
  shortTagline: string;
  description: React.ReactNode;
  logo: string;
  darkLogo?: string;
  websiteUrl: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  partnerPlayStoreUrl?: string;
  riderPlayStoreUrl?: string;
  partnerAppStoreUrl?: string;
  riderAppStoreUrl?: string;
  internalRoute: string;
  isExternalWebsite?: boolean;
}

const ourProducts: ProductItem[] = [
  {
    id: "karmanisht",
    name: "KarmaNisht",
    category: "Hyperlocal Services",
    shortTagline: "Geospatial home services & verified local professionals",
    description: "India's fastest geospatial home services connection platform bridging verified professionals with local households in real-time.",
    logo: "/karmanisht-logo.png",
    websiteUrl: "https://www.karmanisht.com",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.karmanisht",
    appStoreUrl: "https://apps.apple.com/us/app/karmanisht/id6781247473",
    internalRoute: "/products/karmanisht",
    isExternalWebsite: true,
  },
  {
    id: "bhukkadh",
    name: "Bhukkadh",
    category: "Food Delivery",
    shortTagline: "Hyperlocal on-demand culinary ordering",
    description: "Hyperlocal on-demand food delivery ecosystem connecting hungry foodies, local culinary partners, and dedicated delivery riders.",
    logo: "/new-bhukkadh-icon.png",
    websiteUrl: "https://bhukkadh.hindustaan.in/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bhukkhad",
    partnerPlayStoreUrl: "https://play.google.com/store/apps/details?id=com.bhukkadh.restaurant",
    riderPlayStoreUrl: "https://play.google.com/store/apps/details?id=com.bhukkadh.rider",
    appStoreUrl: "https://apps.apple.com/us/app/bhukkadh/id6803089673",
    partnerAppStoreUrl: "https://apps.apple.com/us/app/bhukkadh-partner/id6802583437",
    riderAppStoreUrl: "https://apps.apple.com/us/app/bhukkadh-rider/id6802623601",
    internalRoute: "/products/bhukkadh",
    isExternalWebsite: true,
  },
  {
    id: "ghumakkadh",
    name: "Ghumakkadh",
    category: "Rides & Logistics",
    shortTagline: "City rides, auto, cab & parcel delivery",
    description: "Indian ride-hailing and parcel delivery platform offering convenient bike, auto, and cab commuting with real-time GPS tracking.",
    logo: "/ghumakkadh_icon.png",
    websiteUrl: "https://ghumakkadh.hindustaan.in/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ghumakkadh",
    appStoreUrl: "https://apps.apple.com/us/app/ghumakkadh/id6806542727",
    internalRoute: "/products/ghumakkadh",
    isExternalWebsite: true,
  },
  {
    id: "truckbharat",
    name: "TruckBharat",
    category: "Digital Freight",
    shortTagline: "Smart freight marketplace across 11 languages",
    description: "Next-gen digital freight & logistics ecosystem connecting Shippers, Transporters, and Drivers with verified fleets and live GPS tracking.",
    logo: "/truckbharat-logo.png",
    websiteUrl: "https://truckbharat.hindustaan.tech",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.truckbharat",
    appStoreUrl: "",
    internalRoute: "/products/truckbharat",
    isExternalWebsite: true,
  },
  {
    id: "onstay",
    name: "Onstay",
    category: "Hotel & Lounge Booking",
    shortTagline: "Hotels, rooms & lounge booking platform",
    description: "OnStay ensures peace of mind for guests through essential guarantees like free 15-minute room holds, instant UPI confirmations, flexible pay-at-hotel options, verified couple-friendly spaces, and transparent cancellation terms. Each stay guarantees core comforts including high-speed Wi-Fi, working air conditioning, sanitized washrooms, fresh linens, and round-the-clock front desk support, giving travelers an authentic, stress-free hospitality experience.",
    logo: "/onstay-logo.png",
    websiteUrl: "https://onstay.hindustaan.tech/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.onstay",
    appStoreUrl: "",
    internalRoute: "/products/onstay",
    isExternalWebsite: true,
  },
  {
    id: "hindustaan-mart",
    name: "Hindustaan Mart",
    category: "E-Commerce",
    shortTagline: "Multi-vendor digital commerce marketplace",
    description: "A comprehensive multi-vendor marketplace platform connecting buyers and sellers across a robust digital commerce ecosystem.",
    logo: "/Hindustaan_mart_logo.jpeg",
    websiteUrl: "https://allindiahub.com",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hindustaanmart",
    appStoreUrl: "https://apps.apple.com/us/app/hindustaan-mart/id6781711735",
    internalRoute: "/products/hindustaan-mart",
    isExternalWebsite: true,
  },
  {
    id: "miracal",
    name: "Miracal",
    category: "Instant Messaging",
    shortTagline: "Secure end-to-end encrypted messaging & calls",
    description: "Next-generation secure instant messaging and calling app connecting friends, families, and communities with end-to-end encryption.",
    logo: "/miracal-brand.png",
    websiteUrl: "https://miracal.hindustaan.tech",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.miracal",
    appStoreUrl: "",
    internalRoute: "/products/miracal",
    isExternalWebsite: true,
  },
  {
    id: "miracal-business",
    name: "Miracal Business",
    category: "Business Messaging",
    shortTagline: "Enterprise team collaboration & workspaces",
    description: "Enterprise-grade secure communication platform empowering teams with encrypted messaging, file sharing, and seamless collaboration tools.",
    logo: "/miracal-brand.png",
    websiteUrl: "https://miracalbussiness.hindustaan.tech",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.miracal.business",
    appStoreUrl: "",
    internalRoute: "/products/miracal-business",
    isExternalWebsite: true,
  },
  {
    id: "hindustaan-crm",
    name: "Hindustaan CRM",
    category: "Enterprise Suite",
    shortTagline: "Tailored CRM & workflow automation systems",
    description: (
      <>
        The internal operations portal for{" "}
        <a
          href="https://panel.hindustaan.in/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
        >
          Hindustaan Innovations
        </a>{" "}
        functions as an Enterprise Workspace OS that centralizes sprint and task governance, real-time workforce management, and executive analytics into a single secured platform protected by single sign-on.
      </>
    ),
    logo: "/favicon.svg",
    darkLogo: "/logo.png",
    websiteUrl: "https://panel.hindustaan.in/",
    playStoreUrl: "",
    appStoreUrl: "",
    internalRoute: "/products",
    isExternalWebsite: true,
  },
  {
    id: "vidyum",
    name: "Vidyum School ERP",
    category: "EdTech & ERP",
    shortTagline: "Cloud school management & smart campus suite",
    description: "Complete cloud-based school management & ERP platform designed to automate administrative tasks, fees, exams, and attendance.",
    logo: "/vidyum.png",
    websiteUrl: "https://vidyum.hindustaan.in",
    playStoreUrl: "",
    appStoreUrl: "",
    internalRoute: "/products/vidyum-school-erp",
    isExternalWebsite: true,
  },
];

function GooglePlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path
        d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
        fill="#00C1FF"
      />
      <path
        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
        fill="#00F076"
      />
      <path
        d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
        fill="#FF3A44"
      />
      <path
        d="M428.8 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
        fill="#FFC400"
      />
    </svg>
  );
}

function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.65-1.24z" />
    </svg>
  );
}

export function OurProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 lg:pb-12 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      <div className="max-w-[1800px] mx-auto px-3 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-2.5 sm:mb-4 shadow-2xs"
            >
              OUR PRODUCTS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white leading-[1.15] sm:leading-[1.1] tracking-tight"
            >
              Software Products Built For <span className="text-[#1ba453]">Real Impact</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md flex flex-col items-start lg:items-end gap-2.5 sm:gap-4"
          >
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed lg:text-right">
              Tap any product icon below to open on Google Play Store, Apple App Store, or visit the live web platform.
            </p>
            <Link href="/products">
              <button className="bg-[#1c1c1c] dark:bg-zinc-800 hover:bg-black dark:hover:bg-zinc-700 text-white border border-transparent dark:border-white/10 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-colors cursor-pointer shadow-xs">
                View All Products
                <div className="bg-zinc-700/50 rounded-full p-0.5 sm:p-1">
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Compact Product Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3.5 md:gap-4">
          {ourProducts.map((product, index) => (
            <motion.button
              key={product.id}
              type="button"
              onClick={() => setSelectedProduct(product)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group relative flex flex-col items-center justify-between p-2.5 sm:p-4 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 hover:border-[#1ba453]/60 dark:hover:border-[#1ba453]/60 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-300 text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1ba453]/50 min-h-[148px] sm:min-h-[155px]"
            >
              {/* Product App Icon container */}
              <div className="relative w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800/90 border border-zinc-100 dark:border-zinc-700/60 p-1.5 sm:p-2 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                {product.darkLogo ? (
                  <>
                    <Image
                      src={product.logo}
                      alt={product.name}
                      width={72}
                      height={72}
                      className="w-full h-full object-contain rounded-xl dark:hidden"
                    />
                    <Image
                      src={product.darkLogo}
                      alt={product.name}
                      width={72}
                      height={72}
                      className="w-full h-full object-contain rounded-xl hidden dark:block"
                    />
                  </>
                ) : (
                  <Image
                    src={product.logo}
                    alt={product.name}
                    width={72}
                    height={72}
                    className="w-full h-full object-contain rounded-xl"
                  />
                )}
              </div>

              {/* Title & Category */}
              <div className="w-full text-center mt-2.5">
                <h3 className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#1ba453] dark:group-hover:text-[#1ba453] transition-colors truncate tracking-tight">
                  {product.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 font-medium truncate mt-0.5">
                  {product.category}
                </p>
              </div>

             
            </motion.button>
          ))}
        </div>
      </div>

      {/* Product Detail Dialog (PlayStore, AppStore, Website) */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/90 dark:border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col my-auto"
            >
              {/* Modal Top Header with Close Button */}
              <div className="flex items-center justify-between px-6 pt-5 pb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-3 h-3" />
                  Product Platforms
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Product Hero Info */}
              <div className="px-6 pb-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-50 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700 p-2.5 flex items-center justify-center shrink-0 shadow-sm">
                    {selectedProduct.darkLogo ? (
                      <>
                        <Image
                          src={selectedProduct.logo}
                          alt={selectedProduct.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain rounded-lg dark:hidden"
                        />
                        <Image
                          src={selectedProduct.darkLogo}
                          alt={selectedProduct.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain rounded-lg hidden dark:block"
                        />
                      </>
                    ) : (
                      <Image
                        src={selectedProduct.logo}
                        alt={selectedProduct.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {selectedProduct.shortTagline}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 mt-3.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/70 leading-relaxed text-justify">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Platform Links (Play Store, App Store, Website) */}
              <div className="px-6 py-4 bg-zinc-50/70 dark:bg-zinc-950/40 border-y border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-2.5">
                {/* 1. Google Play Store */}
                {selectedProduct.playStoreUrl ? (
                  <div>
                    <a
                      href={selectedProduct.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-zinc-900 hover:bg-black dark:bg-zinc-800 dark:hover:bg-zinc-750 text-white border border-transparent dark:border-white/10 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <GooglePlayIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                            Get it on
                          </div>
                          <div className="text-sm sm:text-base font-bold leading-tight">
                            Google Play Store
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                        <span>Install</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </a>

                    {/* Secondary Partner/Rider links if available (e.g., Bhukkadh) */}
                    {(selectedProduct.partnerPlayStoreUrl || selectedProduct.riderPlayStoreUrl) && (
                      <div className="flex flex-wrap items-center gap-2 mt-2 px-1">
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Also on Play Store:</span>
                        {selectedProduct.partnerPlayStoreUrl && (
                          <a
                            href={selectedProduct.partnerPlayStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                          >
                            Partner App <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                        {selectedProduct.riderPlayStoreUrl && (
                          <a
                            href={selectedProduct.riderPlayStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                          >
                            Rider App <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ) : null}

                {/* 2. Apple App Store */}
                {selectedProduct.appStoreUrl ? (
                  <div>
                    <a
                      href={selectedProduct.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-zinc-900 hover:bg-black dark:bg-zinc-800 dark:hover:bg-zinc-750 text-white border border-transparent dark:border-white/10 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <AppleIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                            Download on the
                          </div>
                          <div className="text-sm sm:text-base font-bold leading-tight">
                            Apple App Store
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                        <span>Install</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </a>

                    {/* Secondary Partner/Rider App Store links if available (e.g., Bhukkadh) */}
                    {(selectedProduct.partnerAppStoreUrl || selectedProduct.riderAppStoreUrl) && (
                      <div className="flex flex-wrap items-center gap-2 mt-2 px-1">
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Also on App Store:</span>
                        {selectedProduct.partnerAppStoreUrl && (
                          <a
                            href={selectedProduct.partnerAppStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                          >
                            Partner App <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                        {selectedProduct.riderAppStoreUrl && (
                          <a
                            href={selectedProduct.riderAppStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                          >
                            Rider App <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ) : null}

                {/* 3. Official Website */}
                {selectedProduct.isExternalWebsite ? (
                  <a
                    href={selectedProduct.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 dark:bg-[#1ba453]/15 dark:hover:bg-[#1ba453]/25 text-zinc-900 dark:text-white border border-emerald-500/30 dark:border-[#1ba453]/30 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#1ba453] dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                          Web Platform
                        </div>
                        <div className="text-sm sm:text-base font-bold leading-tight">
                          Visit Official Website
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1ba453] dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                      <span>Launch</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ) : (
                  <Link
                    href={selectedProduct.websiteUrl}
                    onClick={() => setSelectedProduct(null)}
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 dark:bg-[#1ba453]/15 dark:hover:bg-[#1ba453]/25 text-zinc-900 dark:text-white border border-emerald-500/30 dark:border-[#1ba453]/30 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#1ba453] dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                          Web Platform
                        </div>
                        <div className="text-sm sm:text-base font-bold leading-tight">
                          Explore Enterprise Suite
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1ba453] dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900">
                <Link
                  href={selectedProduct.internalRoute}
                  onClick={() => setSelectedProduct(null)}
                  className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  View full product specs <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
