"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  href: string;
  isExternal?: boolean;
}

const ourProducts: ProductItem[] = [
  {
    id: "vidyum",
    name: "Vidyum School ERP",
    category: "EdTech Platform",
    description: "Complete cloud-based school management & ERP platform designed to automate administrative tasks, fees, exams, and attendance.",
    logo: "/vidyum.png",
    href: "https://vidyum.hindustaan.in",
    isExternal: true,
  },
  {
    id: "karmanisht",
    name: "KarmaNisht",
    category: "Hyperlocal Services",
    description: "India fastest geospatial home services connection platform bridging verified professionals with local households in real-time.",
    logo: "/karmanisht-logo.png",
    href: "https://www.karmanisht.com",
    isExternal: true,
  },
  {
    id: "miracal",
    name: "Miracal",
    category: "Instant Messaging",
    description: "Next-generation secure instant messaging and calling app connecting friends, families, and communities with end-to-end encryption.",
    logo: "/miracal-brand.png",
    href: "https://miracal.hindustaan.tech",
    isExternal: true,
  },
  {
    id: "hindustaan-mart",
    name: "Hindustaan Mart",
    category: "E-commerce Marketplace",
    description: "A comprehensive multi-vendor marketplace platform connecting buyers and sellers across a robust digital ecosystem.",
    logo: "/Hindustaan_mart_logo.jpeg",
    href: "https://allindiahub.com",
    isExternal: true,
  },
  {
    id: "bhukkadh",
    name: "Bhukkadh",
    category: "Food Delivery",
    description: "Hyperlocal on-demand food delivery ecosystem connecting hungry foodies, local culinary partners, and dedicated delivery riders.",
    logo: "/new-bhukkadh-icon.png",
    href: "https://play.google.com/store/apps/details?id=com.bhukkhad",
    isExternal: true,
  },
  {
    id: "ghumakkadh",
    name: "Ghumakkadh",
    category: "Rides & Logistics",
    description: "Indian ride-hailing and parcel delivery platform offering convenient bike, auto, and cab commuting with real-time GPS tracking.",
    logo: "/ghumakkadh_icon.png",
    href: "https://play.google.com/store/apps/details?id=com.ghumakkadh",
    isExternal: true,
  },
  {
    id: "hindustaan-os",
    name: "Hindustaan OS",
    category: "Enterprise Suite",
    description: "Tailor-made enterprise operating systems, custom business CRMs, and automated workflow suites built to scale modern businesses.",
    logo: "/logo.png",
    href: "/products",
    isExternal: false,
  },
];

export function OurProductsSection() {
  return (
    <section className="pt-20 pb-12 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      <div className="max-w-[1800px] mx-auto px-2.5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-14 gap-4 sm:gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3 sm:mb-6 shadow-2xs"
            >
              OUR PRODUCTS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.15] sm:leading-[1.1] tracking-tight"
            >
              Software Products Built For <span className="text-[#1ba453]">Real Impact</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm flex flex-col items-start lg:items-end gap-3 sm:gap-6"
          >
            <p className="text-xs sm:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed lg:text-right">
              Explore our proprietary SaaS platforms and digital products built and scaled by Hindustaan Innovations.
            </p>
            <Link href="/products">
              <button className="bg-[#1c1c1c] dark:bg-zinc-800 hover:bg-black dark:hover:bg-zinc-700 text-white border border-transparent dark:border-white/10 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-colors cursor-pointer shadow-xs">
                View All Products
                <div className="bg-zinc-700/50 rounded-full p-0.5 sm:p-1">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Product Cards Grid: 2-column layout on mobile, 3-column on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-7">
          {ourProducts.map((product, index) => {
            const cardInner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative h-full bg-white dark:bg-zinc-900/90 rounded-2xl p-4 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between border border-zinc-200/80 dark:border-white/10 hover:border-blue-400/50 dark:hover:border-blue-400/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[210px] sm:min-h-[250px] md:min-h-[280px]"
              >
                {/* Top Area: Logo, Title, Description */}
                <div>
                  {/* Product Logo - Clean without border or background container */}
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 mb-3 sm:mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300 flex items-center">
                    <Image
                      src={product.logo}
                      alt={product.name}
                      width={56}
                      height={56}
                      className="w-auto h-full max-h-10 sm:max-h-12 md:max-h-14 max-w-10 sm:max-w-12 md:max-w-14 object-contain rounded-md"
                    />
                  </div>

                  {/* Product Title */}
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-white mb-1.5 sm:mb-2 md:mb-2.5 tracking-tight leading-snug line-clamp-1 sm:line-clamp-none group-hover:text-[#0066cc] dark:group-hover:text-blue-400 transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="text-xs sm:text-sm lg:text-[14.5px] text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-3 sm:mb-4 md:mb-6 line-clamp-3 sm:line-clamp-none">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Area: TRY NOW > Action Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0066cc] dark:text-[#38bdf8] group-hover:gap-2 sm:group-hover:gap-2.5 transition-all duration-200">
                    TRY NOW
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-0.5 sm:group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            );

            return product.isExternal ? (
              <a
                key={product.id}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {cardInner}
              </a>
            ) : (
              <Link
                key={product.id}
                href={product.href}
                className="block h-full"
              >
                {cardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
