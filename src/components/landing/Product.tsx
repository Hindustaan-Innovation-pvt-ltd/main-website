"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";

interface ProductItemData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: React.ReactNode;
  highlights: string[];
  logo: string;
  internalRoute: string;
  // Web Platform
  webTitle?: string;
  webSubtitle?: string;
  webImage?: string;
  webImageWidth?: number;
  webImageHeight?: number;
  webImageAspectRatio?: string;
  webUrl?: string;
  // Mobile / Secondary Platform
  mobileTitle?: string;
  mobileSubtitle?: string;
  mobileImage?: string;
  secondaryMobileTitle?: string;
  secondaryMobileSubtitle?: string;
  secondaryMobileImage?: string;
  mobileUrl?: string;
  appStoreUrl?: string;
  // Multi Mobile Apps Showcase (e.g. Bhukkadh Partner, Customer, Rider apps)
  multiMobileMockups?: {
    leftImage: string;
    leftTitle?: string;
    centerImage: string;
    centerTitle?: string;
    rightImage: string;
    rightTitle?: string;
  };
  // Tri-Card Apps Showcase (1 card per phone mockup or description card)
  appCards?: {
    isDescriptionCard?: boolean;
    title: string;
    subtitle?: string;
    badge?: string;
    description?: string;
    highlights?: string[];
    image?: string;
    playStoreUrl?: string;
    appStoreUrl?: string;
    webUrl?: string;
  }[];
}

function GooglePlayIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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

function AppleIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.65-1.24z" />
    </svg>
  );
}

const productsData: ProductItemData[] = [
  {
    id: "karmanisht",
    name: "KarmaNisht",
    tagline: "India's fastest geospatial home services connection platform",
    category: "Hyperlocal Services",
    description: (
      <>
        <a
          href="https://www.karmanisht.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1ba453] dark:text-emerald-400 font-semibold hover:underline"
        >
          Karmanisht
        </a>
        {", powered by Hindustaan Innovations Private Limited, is a hyperlocal home and utility services marketplace connecting households with Aadhaar-verified professionals across 50+ categories, including electricians, plumbers, carpenters, appliance technicians, deep cleaning, pest control, and home salon services. Users can discover nearby experts based on distance, verified ratings, and experience, while enjoying transparent pricing and a subscription-free booking experience. Service providers retain their full earnings, set their own service areas, and receive secure escrow-based payouts once customers confirm job satisfaction. Karmanisht makes finding trusted professionals and managing everyday home service needs simple, safe, and reliable."}
      </>
    ),
    highlights: ["Live Geospatial GPS", "100% Aadhaar Verified", "Zero Hidden Charges"],
    logo: "/karmanisht-logo.png",
    internalRoute: "/products/karmanisht",
    webTitle: "Karmanisht Web",
    webSubtitle: "Services Marketplace",
    webImage: "/KRMNST.png",
    webImageWidth: 2000,
    webImageHeight: 1414,
    webImageAspectRatio: "2000 / 1414",
    webUrl: "https://www.karmanisht.com",
    mobileTitle: "Karmanisht App",
    mobileSubtitle: "Customer & Partner App",
    mobileImage: "/kamanisht-mobile.png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.karmanisht",
    appStoreUrl: "https://apps.apple.com/us/app/karmanisht/id6781247473",
  },
  {
    id: "bhukkadh",
    name: "Bhukkadh",
    tagline: "Hyperlocal food delivery & instant restaurant discovery",
    category: "Food Delivery",
    description: "",
    highlights: ["Fast Doorstep Delivery", "Real-Time Tracking", "Secure Payments"],
    logo: "/new-bhukkadh-icon.png",
    internalRoute: "/products/bhukkadh",
    webTitle: "Bhukkadh Web",
    webSubtitle: "Food Delivery Platform",
    webUrl: "https://bhukkadh.hindustaan.in/",
    mobileTitle: "Bhukkadh App",
    mobileSubtitle: "Food Delivery App",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.bhukkhad",
    appStoreUrl: "https://apps.apple.com/us/app/bhukkadh/id6803089673",
    appCards: [
      {
        title: "Bhukkadh Partner",
        subtitle: "Restaurant & Kitchen Dashboard",
        badge: "For Restaurants",
        image: "/bhukkadh_partner_uniform.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.bhukkadh.restaurant",
        appStoreUrl: "https://apps.apple.com/us/app/bhukkadh-partner/id6802583437",
      },
      {
        title: "Bhukkadh",
        subtitle: "Order Food & Real-Time Tracking",
        badge: "For Foodies",
        image: "/bhukkadh_customer_uniform.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.bhukkhad",
        appStoreUrl: "https://apps.apple.com/us/app/bhukkadh/id6803089673",
      },
      {
        title: "Bhukkadh Rider",
        subtitle: "Delivery Partner & Flexible Earnings",
        badge: "For Delivery Riders",
        image: "/bhukkadh_rider_uniform.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.bhukkadh.rider",
        appStoreUrl: "https://apps.apple.com/us/app/bhukkadh-rider/id6802623601",
      },
    ],
  },
  {
    id: "ghumakkadh",
    name: "Ghumakkadh",
    tagline: "Indian ride-hailing & rapid parcel delivery network",
    category: "Rides & Logistics",
    description: "Ghumakkadh is a PAN-India ride-hailing and parcel delivery platform emphasizing transparent, locked fares with zero surge pricing, OTP-verified safety, and live GPS tracking across bike, auto, and cab options. Its landing page is built to drive conversions with prominent ride-booking and driver-partner recruitment calls-to-action, backed by core feature highlights, user testimonials, a detailed service FAQ, and app download links for both riders and drivers.",
    highlights: ["Bikes, Autos & Cabs", "Parcel Delivery", "Fare Lock Guarantee"],
    logo: "/ghumakkadh_icon.png",
    internalRoute: "/products/ghumakkadh",
    appCards: [
      {
        isDescriptionCard: true,
        title: "City Rides & Logistics",
        description: "Ghumakkadh is a PAN-India ride-hailing and parcel delivery platform emphasizing transparent, locked fares with zero surge pricing, OTP-verified safety, and live GPS tracking across bike, auto, and cab options. Its landing page is built to drive conversions with prominent ride-booking and driver-partner recruitment calls-to-action, backed by core feature highlights, user testimonials, a detailed service FAQ, and app download links for both riders and drivers.",
        highlights: ["Bikes, Autos & Cabs", "Parcel Delivery", "Fare Lock Guarantee"],
        webUrl: "https://ghumakkadh.hindustaan.in/",
      },
      {
        title: "Ghumakkadh",
        subtitle: "Passenger & Parcel Booking",
        badge: "For Commuters",
        image: "/ghumakkadh_user_uniform.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.ghumakkadh",
        appStoreUrl: "https://apps.apple.com/us/app/ghumakkadh/id6806542727",
      },
      {
        title: "Ghumakkadh Rider",
        subtitle: "Driver & Partner Dashboard",
        badge: "For Driver Partners",
        image: "/ghumakkadh_rider_uniform.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.ghumakkadh",
        appStoreUrl: "https://apps.apple.com/us/app/ghumakkadh-rider/id6807047989",
      },
    ],
  },
  {
    id: "truckbharat",
    name: "TruckBharat",
    tagline: "India's next-gen digital freight & logistics ecosystem",
    category: "Digital Freight",
    description: (
      <>
        <a
          href="https://truckbharat.hindustaan.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0284c7] dark:text-sky-400 font-semibold hover:underline"
        >
          TruckBharat
        </a>
        {" is an asset-light, on-demand digital freight logistics platform built to connect enterprise shippers directly with verified fleet operators across major Indian industrial corridors. Engineered to eliminate broker commissions and reduce empty return miles, the platform offers deterministic route-based pricing, rapid sub-12-minute load matching, real-time GPS radar tracking, and seamless compliance through automated GST, e-Way billing, and digital proof-of-delivery (e-PoD) settlements for payloads ranging from 1.5-ton mini-trucks to 35-ton heavy multi-axle trailers."}
      </>
    ),
    highlights: ["Verified Fleets", "Zero Empty Returns", "11 Indian Languages"],
    logo: "/truckbharat-logo.png",
    internalRoute: "/products/truckbharat",
    webTitle: "TruckBharat Web",
    webSubtitle: "Digital Freight Platform",
    webImage: "/trucksite.png",
    webImageWidth: 1600,
    webImageHeight: 1073,
    webImageAspectRatio: "1600 / 1073",
    webUrl: "https://truckbharat.hindustaan.tech/",
    mobileTitle: "TruckBharat App",
    mobileSubtitle: "Driver & Shipper App",
    mobileImage: "/truckbharat_phone.png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.truckbharat",
    appStoreUrl: "https://apps.apple.com/us/app/truckbharat/id6807047989",
  },
  {
    id: "onstay",
    name: "Onstay",
    tagline: "Hotels, hourly room bookings & executive lounges",
    category: "Hospitality Booking",
    description: "Smart hospitality booking platform for discovering premium hotels, transit hourly day stays, and executive airport lounges with instant digital confirmation.",
    highlights: ["Curated Hotels & Stays", "Hourly Room Bookings", "Executive Lounge Access"],
    logo: "/onstay-logo.png",
    internalRoute: "/products/onstay",
    webTitle: "Onstay Web",
    webSubtitle: "Hospitality Platform",
    webImage: "/onstay_home.png",
    webImageWidth: 1670,
    webImageHeight: 942,
    webImageAspectRatio: "1670 / 942",
    webUrl: "https://onstay.hindustaan.tech/",
    mobileTitle: "Onstay App",
    mobileSubtitle: "Hotel & Lounge App",
    mobileImage: "/OnStay_Mockup.png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.onstay",
  },
  {
    id: "hindustaan-mart",
    name: "Hindustaan Mart",
    tagline: "Multi-vendor digital commerce marketplace",
    category: "E-Commerce",
    description: (
      <>
        <a
          href="https://www.hindustaanmart.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
        >
          Hindustaan Mart
        </a>
        {" is an Indian e-commerce platform powered by Hindustaan Innovations Private Limited and based in Raipur, Chhattisgarh, delivering a wide selection of lifestyle, fashion, tech, home, and fitness products. Focused on combining everyday utility with aesthetic design, the site offers free shipping on orders over ₹499, 100% secure checkouts, a 7-day hassle-free return policy, and 24/7 customer support, while also hosting an integrated seller and affiliate ecosystem for merchant onboarding and product advertising."}
      </>
    ),
    highlights: ["Multi-Vendor Marketplace", "Secure UPI & Cards", "Nationwide Logistics"],
    logo: "/Hindustaan_mart_logo.jpeg",
    internalRoute: "/products/hindustaan-mart",
    webTitle: "Hindustaan Mart Web",
    webSubtitle: "E-Commerce Platform",
    webImage: "/Hindustaan Mart Field Fashion Hero.png",
    webImageWidth: 1503,
    webImageHeight: 1046,
    webImageAspectRatio: "1503 / 1046",
    webUrl: "https://www.hindustaanmart.in/",
    mobileTitle: "Marketplace App",
    mobileSubtitle: "Digital Shopping App",
    mobileImage: "/Marketplace app design (2).png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.hindustaanmart",
    appStoreUrl: "https://apps.apple.com/us/app/hindustaan-mart/id6781711735",
  },
  {
    id: "vidyum-school-erp",
    name: "Vidyum School ERP",
    tagline: "Complete cloud-based school management & ERP suite",
    category: "EdTech & ERP",
    description: "Automates school administration, fee collection, student attendance, examination results, and parent-teacher communication in one unified platform.",
    highlights: ["Student & Parent Portals", "Automated Fee Billing", "Live Transport Tracking"],
    logo: "/vidyum.png",
    internalRoute: "/products/vidyum-school-erp",
    webTitle: "Vidyum Portal",
    webSubtitle: "EdTech Platform",
    webImage: "/Vidyum_home.png",
    webImageWidth: 1448,
    webImageHeight: 1086,
    webImageAspectRatio: "1448 / 1086",
    webUrl: "https://vidyum.hindustaan.in/",
  },
  {
    id: "miracal",
    name: "Miracal",
    tagline: "Next-gen instant messaging & crystal-clear calling",
    category: "Instant Messaging",
    description: "Ultra-fast, end-to-end encrypted messaging featuring 1-on-1 chats, group conversations, media sharing, and low-latency HD voice and video calls.",
    highlights: ["End-to-End Encryption", "HD Voice & Video Calls", "Cross-Device Sync"],
    logo: "/miracal-brand.png",
    internalRoute: "/products/miracal",
    webTitle: "Miracal Web",
    webSubtitle: "Instant Messaging Web",
    webImage: "/Miracal.png",
    webImageWidth: 1409,
    webImageHeight: 791,
    webImageAspectRatio: "1409 / 791",
    webUrl: "https://miracal.hindustaan.tech",
    mobileTitle: "Miracal App",
    mobileSubtitle: "Chat & Calling App",
    mobileImage: "/miracal-mobile.png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.miracal",
  },
  {
    id: "miracal-business",
    name: "Miracal Business",
    tagline: "Enterprise-grade team workspaces & secure messaging",
    category: "Business Collaboration",
    description: "Enterprise communication platform empowering teams with dedicated workspaces, encrypted chats, role-based admin controls, and seamless file sharing.",
    highlights: ["Team Workspaces", "Role-Based Permissions", "Enterprise Security"],
    logo: "/miracal-brand.png",
    internalRoute: "/products/miracal-business",
    webTitle: "Miracal Business Web",
    webSubtitle: "Business Platform",
    webImage: "/miracal_business.png",
    webImageWidth: 1920,
    webImageHeight: 901,
    webImageAspectRatio: "1920 / 901",
    webUrl: "https://miracalbussiness.hindustaan.tech",
    mobileTitle: "Business App",
    mobileSubtitle: "Team Messaging App",
    mobileImage: "/miracal_business_phone.png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.miracal.business",
  },
];


// Pinned Stacking Card Component
// As user scrolls down, current product screen stays pinned while incoming product rises from bottom and places itself on top
function ProductStackSlide({
  children,
  index,
  total,
  scrollYProgress,
  isDesktop,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isDesktop: boolean;
}) {
  const transitions = total - 1; // 8 transitions for 9 products
  const segment = 1 / transitions;

  // Incoming transition interval for this product (index > 0)
  const enterStart = index === 0 ? 0 : (index - 1) * segment;
  const enterEnd = index === 0 ? 0 : (index - 1) * segment + segment * 0.85;

  // Outgoing / covered transition interval when next product places on top of this one
  const exitStart = index * segment;
  const exitEnd = index * segment + segment * 0.85;

  // Y Transform: Product 0 is already in place.
  // Subsequent products rise up from below (100% -> 0%) and settle directly on top
  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [enterStart, enterEnd],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"],
    { clamp: true }
  );

  // Subtle depth scale when the NEXT product slides on top
  const scale = useTransform(
    scrollYProgress,
    index === total - 1 ? [0, 1] : [exitStart, exitEnd],
    index === total - 1 ? [1, 1] : [1, 0.95],
    { clamp: true }
  );

  // Subtle dimming when covered
  const opacity = useTransform(
    scrollYProgress,
    index === total - 1 ? [0, 1] : [exitStart, exitEnd],
    index === total - 1 ? [1, 1] : [1, 0.7],
    { clamp: true }
  );

  return (
    <motion.div
      style={
        isDesktop
          ? {
              y,
              scale,
              opacity,
              zIndex: 10 + index,
            }
          : undefined
      }
      className={`w-full ${
        isDesktop
          ? "lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center"
          : "relative mb-8 sm:mb-12"
      }`}
    >
      <div
        className={`w-full ${
          isDesktop
            ? "h-full max-h-[480px] xl:max-h-[520px] 2xl:max-h-[600px]"
            : "h-auto"
        } bg-white dark:bg-[#0c0c0e] border border-zinc-200/80 dark:border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-5 xl:p-6 shadow-2xl shadow-zinc-900/15 dark:shadow-black/80 flex flex-col justify-center overflow-hidden`}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function ProductSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const totalProducts = productsData.length;

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pb-16 pt-2 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      {/* 
        On Desktop (lg+): Container is tall (680vh), inner container is sticky.
        Current product stays pinned while next product scrolls up and places itself directly on top!
        On Mobile: Standard natural scrolling flow.
      */}
      <div
        ref={containerRef}
        style={isDesktop ? { height: "680vh" } : undefined}
        className="relative w-full"
      >
        <div
          className={
            isDesktop
              ? "sticky top-20 xl:top-24 w-full h-[calc(100vh-6.5rem)] flex items-center justify-center overflow-hidden max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 py-1"
              : "w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10"
          }
        >
          {/* Card Deck Wrapper sized cleanly to fit PC screens without clipping */}
          <div
            className={`relative w-full ${
              isDesktop
                ? "h-full max-h-[480px] xl:max-h-[520px] 2xl:max-h-[600px] flex items-center justify-center"
                : "space-y-8"
            }`}
          >
            {productsData.map((product, index) => (
              <ProductStackSlide
                key={product.id}
                index={index}
                total={totalProducts}
                scrollYProgress={scrollYProgress}
                isDesktop={isDesktop}
              >
                {product.appCards ? (
                  /* 3-Card Layout for Bhukkadh: 1 card per phone mockup */
                  <div className="flex flex-col h-full justify-between w-full">
                    {/* Top Header Bar */}
                    <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-zinc-100 dark:border-zinc-800/80 shrink-0">
                      <div className="flex items-center gap-3 sm:gap-3.5">
                        <Image
                          src={product.logo}
                          alt={`${product.name} Logo`}
                          width={44}
                          height={44}
                          className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-2xl shrink-0 shadow-xs"
                        />
                        <div>
                          <h3 className="font-extrabold text-zinc-900 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight leading-none">
                            {product.name}
                          </h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                            {product.tagline}
                          </p>
                        </div>
                      </div>

                      {product.webUrl && (
                        <a
                          href={product.webUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors cursor-pointer shadow-xs"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Website</span>
                          <ArrowUpRight className="w-3 h-3 opacity-70" />
                        </a>
                      )}
                    </div>

                    {/* 3 Cards Grid: 1 Phone Mockup in 1 Card */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 xl:gap-4 w-full pt-2.5 sm:pt-3 flex-1 min-h-0 items-stretch">
                      {product.appCards.map((card, cIdx) => (
                        <div
                          key={cIdx}
                          className="relative bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-white/10 rounded-2xl p-2.5 sm:p-3 xl:p-3.5 flex flex-col justify-between group/card hover:border-zinc-300 dark:hover:border-white/20 hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                          {card.isDescriptionCard ? (
                            /* Description Card (Left) */
                            <div className="flex flex-col justify-start h-full w-full text-left p-1 sm:p-1.5">
                              <div className="space-y-2">
                                {card.badge && (
                                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                                    {card.badge}
                                  </span>
                                )}
                                <h4 className="font-extrabold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base tracking-tight leading-snug">
                                  {card.title}
                                </h4>
                                <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                  {card.description}
                                </p>

                                {/* Highlights tags */}
                                {card.highlights && card.highlights.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                                    {card.highlights.map((h, hIdx) => (
                                      <span
                                        key={hIdx}
                                        className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[10.5px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                                      >
                                        {h}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {/* Website Button */}
                                {card.webUrl && (
                                  <div className="pt-2 sm:pt-2.5">
                                    <a
                                      href={card.webUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors cursor-pointer shadow-xs"
                                    >
                                      <Globe className="w-3.5 h-3.5" />
                                      <span>Website</span>
                                      <ArrowUpRight className="w-3 h-3 opacity-70" />
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            /* Phone Mockup Card */
                            <div className="flex flex-col justify-between items-center h-full w-full">
                              {/* Upper Card Area: Phone Mockup */}
                              <div className="relative w-full flex-1 flex items-center justify-center py-1 min-h-[170px] sm:min-h-[190px] xl:min-h-[210px] 2xl:min-h-[250px]">
                                <div className="relative w-full max-w-[145px] sm:max-w-[160px] xl:max-w-[180px] drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] group-hover/card:-translate-y-2 transition-transform duration-500 flex justify-center">
                                  {card.image && (
                                    <Image
                                      src={card.image}
                                      alt={card.title}
                                      width={800}
                                      height={1600}
                                      className="w-full h-auto max-h-[175px] sm:max-h-[195px] xl:max-h-[220px] 2xl:max-h-[260px] object-contain"
                                      unoptimized
                                    />
                                  )}
                                </div>
                              </div>

                              {/* Lower Card Area: Title, Subtitle, Action Buttons */}
                              <div className="w-full pt-2 sm:pt-2.5 border-t border-zinc-200/60 dark:border-white/10 flex flex-col items-center text-center mt-auto shrink-0">
                                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                                  {card.badge}
                                </span>
                                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm mt-0.5">
                                  {card.title}
                                </h4>
                                <p className="text-[10.5px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                                  {card.subtitle}
                                </p>

                                {/* Action Download Buttons */}
                                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-2.5">
                                  {card.playStoreUrl && (
                                    <a
                                      href={card.playStoreUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[12.5px] font-semibold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-2xs cursor-pointer"
                                    >
                                      <GooglePlayIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                      <span>Google Play</span>
                                    </a>
                                  )}
                                  {card.appStoreUrl && (
                                    <a
                                      href={card.appStoreUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[12.5px] font-semibold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-2xs cursor-pointer"
                                    >
                                      <AppleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                      <span>App Store</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 w-full h-full items-center">
                    
                    {/* LEFT SIDE: Product Information */}
                    <div className="lg:col-span-5 relative flex flex-col justify-between h-full">
                      <div>
                        {/* Brand Header */}
                        <div className="flex items-center gap-3 sm:gap-3.5">
                          <Image
                            src={product.logo}
                            alt={`${product.name} Logo`}
                            width={48}
                            height={48}
                            className="w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 object-contain rounded-2xl shrink-0 shadow-xs"
                          />
                          <h3 className="font-extrabold text-zinc-900 dark:text-zinc-100 text-2xl sm:text-3xl xl:text-[2rem] tracking-tight leading-none">
                            {product.name}
                          </h3>
                        </div>

                        {/* Body Content: Tagline, Description & Highlights (shifted further down) */}
                        <div className="mt-8 sm:mt-10 xl:mt-12 space-y-3 sm:space-y-3.5">
                          {/* Tagline */}
                          <p className="text-xs sm:text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 leading-snug">
                            {product.tagline}
                          </p>

                          {/* Description: full exact content displayed with zero scroll down */}
                          <div className="text-[11px] sm:text-[11.5px] xl:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {product.description}
                          </div>

                          {/* Key Highlights */}
                          <div className="flex flex-wrap gap-1.5 pt-0.5">
                            {product.highlights.map((highlight, hIdx) => (
                              <span
                                key={hIdx}
                                className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons: placed directly below 100% verified & zero hidden charges tags */}
                          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4">
                            {product.webUrl && (
                              <a
                                href={product.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors cursor-pointer shadow-xs"
                              >
                                <Globe className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                <span>Website</span>
                                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70" />
                              </a>
                            )}
                            {product.mobileUrl && (
                              <a
                                href={product.mobileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700 transition-colors cursor-pointer"
                              >
                                <GooglePlayIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                <span>Google Play</span>
                              </a>
                            )}
                            {product.appStoreUrl && (
                              <a
                                href={product.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700 transition-colors cursor-pointer"
                              >
                                <AppleIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                <span>App Store</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE: Mockups Showcase (Web, Mobile, or Combined) */}
                    <div className="lg:col-span-7 relative flex items-center justify-center h-full group">
                      {product.webImage && product.mobileImage ? (
                        /* Case 1: Standard Desktop Browser Mockup + Overlapping Mobile App */
                        <div className="relative w-[72%] sm:w-[70%] -translate-x-[6%] sm:-translate-x-[7%] flex items-center">
                          {/* Desktop Browser Mockup */}
                          <div className="w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 overflow-hidden shadow-lg group-hover:-translate-y-1 transition-transform duration-500 flex flex-col z-10">
                            {/* Browser Top Window Bar */}
                            <div className="h-5 sm:h-6 bg-zinc-200/70 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                              <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                              <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                              <span className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 ml-2 font-mono truncate max-w-[200px]">
                                {product.webUrl?.replace(/^https?:\/\//, "")}
                              </span>
                            </div>

                            {/* Browser Screenshot Content */}
                            <div
                              style={{ aspectRatio: product.webImageAspectRatio || "16/9" }}
                              className="bg-white dark:bg-zinc-900 relative w-full overflow-hidden flex items-start justify-center"
                            >
                              <Image
                                src={product.webImage}
                                alt={`${product.name} Web`}
                                width={product.webImageWidth || 1504}
                                height={product.webImageHeight || 1046}
                                className="w-full h-full object-cover object-top"
                                unoptimized
                              />
                            </div>
                          </div>

                          {/* Mobile App Mockup (Overlapping right & down) */}
                          <div className="absolute -right-6 sm:-right-7 xl:-right-8 translate-x-1/2 -bottom-10 sm:-bottom-11 xl:-bottom-12 z-20 w-[46%] sm:w-[42%] md:w-[38%] max-w-[210px] xl:max-w-[240px] 2xl:max-w-[275px] group-hover:-translate-y-2.5 transition-transform duration-500 flex justify-center">
                            <div className="relative w-full flex justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]">
                              <Image
                                src={product.mobileImage}
                                alt={`${product.name} App`}
                                width={400}
                                height={800}
                                className="w-full h-auto max-h-[240px] sm:max-h-[270px] xl:max-h-[305px] 2xl:max-h-[375px] object-contain"
                                unoptimized
                              />
                            </div>
                          </div>
                        </div>
                      ) : product.mobileImage && product.secondaryMobileImage ? (
                        /* Case 2A: Dual Mobile App Showcase (Side-by-side with uniform sizing) */
                        <div className="relative w-full flex items-center justify-center gap-4 sm:gap-6 xl:gap-8 py-2">
                          {/* Phone 1: Passenger App */}
                          <div className="relative w-full max-w-[145px] sm:max-w-[170px] xl:max-w-[195px] 2xl:max-w-[225px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] group-hover:-translate-y-2 transition-transform duration-500 flex justify-center">
                            <Image
                              src={product.mobileImage}
                              alt={product.mobileTitle || `${product.name} App`}
                              width={900}
                              height={1700}
                              className="w-full h-auto max-h-[240px] sm:max-h-[270px] xl:max-h-[310px] 2xl:max-h-[370px] object-contain"
                              unoptimized
                            />
                          </div>

                          {/* Phone 2: Rider / Driver Dashboard Mockup */}
                          <div className="relative w-full max-w-[145px] sm:max-w-[170px] xl:max-w-[195px] 2xl:max-w-[225px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] group-hover:-translate-y-2.5 transition-transform duration-500 delay-75 flex justify-center">
                            <Image
                              src={product.secondaryMobileImage}
                              alt={product.secondaryMobileTitle || `${product.name} Rider Dashboard`}
                              width={900}
                              height={1700}
                              className="w-full h-auto max-h-[240px] sm:max-h-[270px] xl:max-h-[310px] 2xl:max-h-[370px] object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                      ) : product.mobileImage ? (
                        /* Case 2B: Pure Mobile App Showcase (Centered and Prominent) */
                        <div className="relative w-full flex items-center justify-center py-2">
                          <div className="relative w-full max-w-[200px] sm:max-w-[230px] xl:max-w-[260px] 2xl:max-w-[290px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] group-hover:-translate-y-2 transition-transform duration-500 flex justify-center">
                            <Image
                              src={product.mobileImage}
                              alt={`${product.name} App`}
                              width={400}
                              height={800}
                              className="w-full h-auto max-h-[260px] sm:max-h-[295px] xl:max-h-[340px] 2xl:max-h-[400px] object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                      ) : product.webImage ? (
                        /* Case 3: Pure Web App Showcase (Centered Browser Mockup) */
                        <div className="relative w-[92%] sm:w-[88%] mx-auto flex items-center">
                          <div className="w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 overflow-hidden shadow-lg group-hover:-translate-y-1 transition-transform duration-500 flex flex-col z-10">
                            <div className="h-5 sm:h-6 bg-zinc-200/70 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                              <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                              <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                              <span className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 ml-2 font-mono truncate max-w-[200px]">
                                {product.webUrl?.replace(/^https?:\/\//, "")}
                              </span>
                            </div>
                            <div
                              style={{ aspectRatio: product.webImageAspectRatio || "16/9" }}
                              className="bg-white dark:bg-zinc-900 relative w-full overflow-hidden flex items-start justify-center"
                            >
                              <Image
                                src={product.webImage}
                                alt={`${product.name} Web`}
                                width={product.webImageWidth || 1504}
                                height={product.webImageHeight || 1046}
                                className="w-full h-full object-cover object-top"
                                unoptimized
                              />
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>

                  </div>
                )}
              </ProductStackSlide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
