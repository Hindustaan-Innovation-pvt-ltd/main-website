"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";

interface ProductItemData {
  id: string;
  name: string;
  tagline: string;
  taglineClassName?: string;
  category: string;
  description: React.ReactNode;
  descriptionClassName?: string;
  highlights: string[];
  logo: string;
  darkLogo?: string;
  internalRoute: string;
  // Web Platform
  webTitle?: string;
  webSubtitle?: string;
  webImage?: string;
  webImageWidth?: number;
  webImageHeight?: number;
  webImageAspectRatio?: string;
  hasCustomBrowserFrame?: boolean;
  webUrl?: string;
  webWidthClass?: string;
  webOffsetClass?: string;
  webImageClass?: string;
  containerMaxWidthClass?: string;
  dualPhonesPositionClass?: string;
  // Mobile / Secondary Platform
  mobileTitle?: string;
  mobileSubtitle?: string;
  mobileImage?: string;
  mobileOffsetClass?: string;
  secondaryMobileTitle?: string;
  secondaryMobileSubtitle?: string;
  secondaryMobileImage?: string;
  secondaryMobileOffsetClass?: string;
  secondaryMobileUrl?: string;
  mobileUrl?: string;
  appStoreUrl?: string;
  appStoreTitle?: string;
  secondaryAppStoreUrl?: string;
  secondaryAppStoreTitle?: string;
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
    taglineClassName: "text-xs sm:text-[13px] lg:text-[16px] font-bold font-sans",
    category: "Hyperlocal Services",
    descriptionClassName: "text-sm sm:text-[15px] lg:text-[16px] font-bold font-sans leading-relaxed text-left lg:text-justify [text-align-last:left]",
    description: (
      <span className="text-sm sm:text-[15px] lg:text-[16px] font-bold font-sans leading-relaxed text-left lg:text-justify [text-align-last:left]">
        <a
          href="https://www.karmanisht.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1ba453] dark:text-emerald-400 font-bold hover:underline"
        >
          Karmanisht
        </a>
        {", powered by Hindustaan Innovations Private Limited, is a hyperlocal home and utility services marketplace connecting households with Aadhaar-verified professionals across 50+ categories, including electricians, plumbers, carpenters, appliance technicians, deep cleaning, pest control, and home salon services. Users can discover nearby experts based on distance, verified ratings, and experience, while enjoying transparent pricing and a subscription-free booking experience. Service providers retain their full earnings, set their own service areas, and receive secure escrow-based payouts once customers confirm job satisfaction. Karmanisht makes finding trusted professionals and managing everyday home service needs simple, safe, and reliable."}
      </span>
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
    webImage: "/Bhukkadh Food Delivery Hero Banner.png",
    webImageWidth: 1505,
    webImageHeight: 1045,
    webImageAspectRatio: "1505 / 1045",
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
    taglineClassName: "text-xs sm:text-[13px] lg:text-[16px] font-bold font-sans",
    category: "Rides & Logistics",
    descriptionClassName: "text-sm sm:text-[15px] lg:text-[16px] font-bold font-sans leading-relaxed text-left lg:text-justify [text-align-last:left]",
    description: (
      <span className="text-sm sm:text-[15px] lg:text-[16px] font-bold font-sans leading-relaxed text-left lg:text-justify [text-align-last:left]">
        <a
          href="https://ghumakkadh.hindustaan.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-0.5"
        >
          Ghumakkadh
        </a>{" "}
        is a PAN-India ride-hailing and parcel delivery platform emphasizing transparent, locked fares with zero surge pricing, OTP-verified safety, and live GPS tracking across bike, auto, and cab options. Its landing page is built to drive conversions with prominent ride-booking and driver-partner recruitment calls-to-action, backed by core feature highlights, user testimonials, a detailed service FAQ, and app download links for both riders and drivers.
      </span>
    ),
    highlights: ["Bikes, Autos & Cabs", "Parcel Delivery", "Fare Lock Guarantee"],
    logo: "/ghumakkadh_icon.png",
    internalRoute: "/products/ghumakkadh",
    webTitle: "Ghumakkadh Web",
    webSubtitle: "Ride Hailing & Delivery",
    webImage: "/Ride Smarter with Ghumakkadh.png",
    webImageWidth: 1504,
    webImageHeight: 1046,
    webImageAspectRatio: "1504 / 1046",
    webOffsetClass: "-translate-y-2.5 sm:-translate-y-4 lg:translate-y-0",
    webUrl: "https://ghumakkadh.hindustaan.in/",
    mobileTitle: "Ghumakkadh App",
    mobileSubtitle: "Passenger & Parcel Booking",
    mobileImage: "/ghumakkadh_user_uniform.png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.ghumakkadh",
    appStoreUrl: "https://apps.apple.com/us/app/ghumakkadh/id6806542727",
    secondaryMobileTitle: "Ghumakkadh Rider",
    secondaryMobileSubtitle: "Driver & Partner Dashboard",
    secondaryMobileImage: "/ghumakkadh_rider_uniform.png",
    secondaryMobileUrl: "https://play.google.com/store/apps/details?id=com.ghumakkadh",
    secondaryAppStoreUrl: "https://apps.apple.com/us/app/ghumakkadh-rider/id6807047989",
    secondaryAppStoreTitle: "Partner App Store",
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
    webImage: "/TruckBharat Freight Marketplace Banner.png",
    webImageWidth: 1532,
    webImageHeight: 1027,
    webImageAspectRatio: "1532 / 1027",
    webOffsetClass: "-translate-y-3 sm:-translate-y-5 lg:-translate-y-7",
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
    description: (
      <>
        <a
          href="https://onstay.hindustaan.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
        >
          OnStay
        </a>{" "}
        ensures peace of mind for guests through essential guarantees like free 15-minute room holds, instant UPI confirmations, flexible pay-at-hotel options, verified couple-friendly spaces, and transparent cancellation terms. Each stay guarantees core comforts including high-speed Wi-Fi, working air conditioning, sanitized washrooms, fresh linens, and round-the-clock front desk support, giving travelers an authentic, stress-free hospitality experience.
      </>
    ),
    highlights: ["Curated Hotels & Stays", "Hourly Room Bookings", "Executive Lounge Access"],
    logo: "/onstay-logo.png",
    internalRoute: "/products/onstay",
    webTitle: "Onstay Web",
    webSubtitle: "Hospitality Platform",
    webImage: "/OnStay_ Find Your Perfect Stay.png",
    webImageWidth: 1504,
    webImageHeight: 1046,
    webImageAspectRatio: "1504 / 1046",
    webWidthClass: "w-[64%] sm:w-[62%] lg:w-[63%] xl:w-[64%]",
    webOffsetClass: "-translate-y-4 sm:-translate-y-6 lg:-translate-y-8 xl:-translate-y-10",
    containerMaxWidthClass: "max-w-[460px] sm:max-w-[580px] lg:max-w-[720px] xl:max-w-[790px] 2xl:max-w-[860px]",
    dualPhonesPositionClass: "right-1 sm:right-2 lg:right-0 xl:right-2",
    webUrl: "https://onstay.hindustaan.tech/",
    mobileTitle: "Onstay App",
    mobileSubtitle: "Guest & Room Booking",
    mobileImage: "/OnStay_Mockup.png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.onstay",
    secondaryMobileTitle: "Onstay Partner",
    secondaryMobileSubtitle: "Hotel & Host Dashboard",
    secondaryMobileImage: "/onstay_partner.png",
    secondaryMobileOffsetClass: "translate-y-4 sm:translate-y-6 xl:translate-y-8",
    secondaryMobileUrl: "https://play.google.com/store/apps/details?id=com.onstay",
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
    webImage: "/Miracal Messaging App Hero Scene.png",
    webImageWidth: 1504,
    webImageHeight: 1046,
    webImageAspectRatio: "1504 / 1046",
    webUrl: "https://miracal.hindustaan.tech/",
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
    webImage: "/Miracal Business Team Hero.png",
    webImageWidth: 1504,
    webImageHeight: 1046,
    webImageAspectRatio: "1504 / 1046",
    webUrl: "https://miracalbussiness.hindustaan.tech/",
    mobileTitle: "Business App",
    mobileSubtitle: "Team Messaging App",
    mobileImage: "/miracal_business_phone.png",
    mobileUrl: "https://play.google.com/store/apps/details?id=com.miracal.business",
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
    id: "hindustaan-crm",
    name: "Hindustaan CRM",
    tagline: "Enterprise CRM, Lead Management & Workflow Automation",
    category: "Enterprise Suite",
    description: (
      <>
        The internal operations portal for{" "}
        <a
          href="https://panel.hindustaan.in/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          Hindustaan Innovations
        </a>{" "}
        functions as an Enterprise Workspace OS that centralizes sprint and task governance, real-time workforce management, and executive analytics into a single secured platform protected by single sign-on.
      </>
    ),
    highlights: ["Lead & Sales Pipeline", "Workflow Automation", "Analytics & Reporting"],
    logo: "/favicon.svg",
    darkLogo: "/logo.png",
    internalRoute: "/products/hindustaan-crm",
    webTitle: "Hindustaan CRM Suite",
    webSubtitle: "Enterprise CRM Platform",
    webImage: "/hindustaan_crm.png",
    webImageWidth: 1504,
    webImageHeight: 1046,
    webImageAspectRatio: "1504 / 1046",
    webUrl: "https://panel.hindustaan.in/",
  },
];


// Pinned Stacking Card Component
// At any time, strictly one card is active. Inactive cards (past or future) are completely hidden (opacity 0, pointer-events none).
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
  const step = 1 / total;

  // Key milestones for this card's lifecycle
  const enterStart = index === 0 ? 0 : (index - 1) * step + step * 0.35;
  const enterEnd = index === 0 ? 0 : index * step;
  const enterMid = enterStart + (enterEnd - enterStart) * 0.3;

  const exitStart = index * step + step * 0.35;
  const exitEnd = (index + 1) * step;

  // Y Transform:
  // Product 0 is pinned at 0%
  // Subsequent products rise smoothly from 100% to 0% during their enter interval
  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [enterStart, enterEnd],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"],
    { clamp: true }
  );

  // Scale: stays 1.0 while active, subtle 0.96 tuck as the next card covers it
  const scale = useTransform(
    scrollYProgress,
    index === total - 1 ? [0, 1] : [0, exitStart, exitEnd, 1],
    index === total - 1 ? [1, 1] : [1, 1, 0.96, 0.96],
    { clamp: true }
  );

  // Opacity: ONLY visible during its active window!
  // Before enter: strictly 0 (no peeking from bottom)
  // After exit: strictly 0 (no lingering behind)
  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, exitStart, exitEnd, 1]
      : index === total - 1
        ? [0, enterStart, enterMid, 1]
        : [0, enterStart, enterMid, exitStart, exitEnd, 1],
    index === 0
      ? [1, 1, 0, 0]
      : index === total - 1
        ? [0, 0, 1, 1]
        : [0, 0, 1, 1, 0, 0],
    { clamp: true }
  );

  const pointerEvents = useTransform(opacity, (val) => (val > 0.05 ? "auto" : "none"));

  return (
    <motion.div
      style={
        isDesktop
          ? {
            y,
            scale,
            opacity,
            pointerEvents,
            zIndex: 10 + index,
          }
          : undefined
      }
      className={`w-full ${isDesktop
          ? "lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center"
          : "relative mb-6 sm:mb-8 lg:mb-0"
        }`}
    >
      <div
        className={`w-full ${isDesktop
            ? "h-[560px] xl:h-[620px] 2xl:h-[680px]"
            : "h-auto"
          } bg-white dark:bg-[#0c0c0e] border border-zinc-200/80 dark:border-white/10 rounded-[1.75rem] sm:rounded-[2rem] lg:rounded-[2rem] xl:rounded-[2.5rem] p-4 sm:p-5 lg:p-5 xl:p-6 shadow-2xl shadow-zinc-900/15 dark:shadow-black/80 flex flex-col justify-center overflow-hidden`}
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
    <section className="pb-16 pt-0 bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200">
      {/* 
        On Desktop (lg+): Container is tall (760vh), inner container is sticky.
        Current product stays pinned while next product scrolls up and places itself directly on top!
        On Mobile: Standard natural scrolling flow.
      */}
      <div
        ref={containerRef}
        style={isDesktop ? { height: "760vh" } : undefined}
        className="relative w-full"
      >
        <div
          className={
            isDesktop
              ? "sticky top-20 xl:top-24 w-full h-[calc(100vh-6.5rem)] flex items-start justify-center overflow-hidden max-w-[1800px] mx-auto px-3 sm:px-8 md:px-12 pt-2 sm:pt-4 lg:pt-5"
              : "w-full max-w-[1800px] mx-auto px-3 sm:px-8 md:px-12"
          }
        >
          {/* Card Deck Wrapper sized cleanly to fit PC screens without clipping */}
          <div
            className={`relative w-full ${isDesktop
                ? "h-[560px] xl:h-[620px] 2xl:h-[680px] flex items-center justify-center overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] lg:rounded-[2rem] xl:rounded-[2.5rem]"
                : "space-y-6 sm:space-y-8 lg:space-y-0"
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
                    </div>

                    {/* Showcase: Web Mockup on the Left + All Three Mobiles on the Right */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 lg:gap-6 xl:gap-8 w-full pt-2 sm:pt-3 flex-1 min-h-0">
                      {/* Left Side: Desktop Web Browser Mockup */}
                      <div className="w-full lg:w-[42%] xl:w-[44%] shrink-0 flex flex-col justify-center">
                        <a
                          href={product.webUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-500 flex flex-col group/web cursor-pointer block"
                        >
                          {/* Top Window Bar */}
                          <div className="h-5 sm:h-6 bg-zinc-200/70 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                            <span className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 ml-2 font-mono truncate max-w-[220px]">
                              {product.webUrl?.replace(/^https?:\/\//, "")}
                            </span>
                          </div>

                          {/* Browser Screenshot Content */}
                          <div
                            style={{ aspectRatio: product.webImageAspectRatio || "1505 / 1045" }}
                            className="relative w-full overflow-hidden flex items-start justify-center bg-white dark:bg-zinc-900"
                          >
                            <Image
                              src={product.webImage || "/Bhukkadh Food Delivery Hero Banner.png"}
                              alt={`${product.name} Web Platform`}
                              width={product.webImageWidth || 1505}
                              height={product.webImageHeight || 1045}
                              className="w-full h-full object-cover object-top"
                              unoptimized
                            />
                          </div>
                        </a>
                      </div>

                      {/* Right Side (After Web Img): 3 Phone Mockups Showcase */}
                      <div className="w-full lg:w-[58%] xl:w-[56%] grid grid-cols-3 gap-1.5 sm:gap-2.5 lg:gap-2.5 xl:gap-3.5 2xl:gap-4 items-end justify-center">
                        {product.appCards.map((card, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex flex-col items-center justify-end h-full w-full group/phone"
                          >
                            {/* Phone Mockup */}
                            <div className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[230px] lg:max-w-[215px] xl:max-w-[265px] 2xl:max-w-[305px] drop-shadow-[0_12px_22px_rgba(0,0,0,0.3)] sm:drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] lg:drop-shadow-[0_20px_35px_rgba(0,0,0,0.38)] dark:drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)] sm:dark:drop-shadow-[0_24px_40px_rgba(0,0,0,0.9)] lg:dark:drop-shadow-[0_26px_45px_rgba(0,0,0,0.92)] group-hover/phone:-translate-y-2.5 transition-transform duration-500 flex justify-center mx-auto">
                              {card.image && (
                                <Image
                                  src={card.image}
                                  alt={card.title}
                                  width={776}
                                  height={1576}
                                  style={{ width: "100%", height: "auto" }}
                                  className="w-full h-auto max-h-[220px] sm:max-h-[270px] md:max-h-[310px] lg:max-h-[320px] xl:max-h-[380px] 2xl:max-h-[440px] object-contain"
                                  unoptimized
                                />
                              )}
                            </div>

                            {/* Info & Action Buttons underneath each phone */}
                            <div className="w-full pt-1.5 sm:pt-2 flex flex-col items-center text-center shrink-0">
                              <span className="text-[7.5px] sm:text-[9px] lg:text-[9.5px] xl:text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider line-clamp-1">
                                {card.badge}
                              </span>
                              <h4 className="font-extrabold text-zinc-900 dark:text-zinc-100 text-[10px] sm:text-xs lg:text-[11.5px] xl:text-xs mt-0.5 line-clamp-1">
                                {card.title}
                              </h4>
                              <p className="text-[8.5px] sm:text-[10px] lg:text-[9.5px] xl:text-[10.5px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                                {card.subtitle}
                              </p>

                              {/* Store Buttons: Both Google Play and App Store side by side */}
                              <div className="flex flex-row flex-wrap items-center justify-center gap-1 sm:gap-1.5 pt-1 sm:pt-1.5">
                                {card.playStoreUrl && (
                                  <a
                                    href={card.playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 lg:px-2 lg:py-0.5 rounded-full text-[8px] sm:text-[9px] lg:text-[9.5px] xl:text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-2xs cursor-pointer shrink-0"
                                  >
                                    <GooglePlayIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                    <span>Play Store</span>
                                  </a>
                                )}
                                {card.appStoreUrl && (
                                  <a
                                    href={card.appStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 lg:px-2 lg:py-0.5 rounded-full text-[8px] sm:text-[9px] lg:text-[9.5px] xl:text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-2xs cursor-pointer shrink-0"
                                  >
                                    <AppleIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                    <span>App Store</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 w-full h-full items-center">

                    {/* LEFT SIDE: Product Information */}
                    <div className="lg:col-span-5 relative flex flex-col justify-between h-full">
                      <div>
                        {/* Brand Header */}
                        <div className="flex items-center gap-3 sm:gap-3.5">
                          {product.darkLogo ? (
                            <>
                              <Image
                                src={product.logo}
                                alt={`${product.name} Logo`}
                                width={48}
                                height={48}
                                className="w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 object-contain rounded-2xl shrink-0 shadow-xs dark:hidden"
                              />
                              <Image
                                src={product.darkLogo}
                                alt={`${product.name} Logo`}
                                width={48}
                                height={48}
                                className="w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 object-contain rounded-2xl shrink-0 shadow-xs hidden dark:block"
                              />
                            </>
                          ) : (
                            <Image
                              src={product.logo}
                              alt={`${product.name} Logo`}
                              width={48}
                              height={48}
                              className="w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 object-contain rounded-2xl shrink-0 shadow-xs"
                            />
                          )}
                          <h3 className="font-extrabold text-zinc-900 dark:text-zinc-100 text-2xl sm:text-3xl xl:text-[2rem] tracking-tight leading-none">
                            {product.name}
                          </h3>
                        </div>

                        {/* Body Content: Tagline, Description & Highlights (shifted further down on PC, balanced on mobile/tablet) */}
                        <div className="mt-3.5 sm:mt-5 lg:mt-8 xl:mt-12 space-y-2.5 sm:space-y-3 lg:space-y-3.5">
                          {/* Tagline */}
                          <p className="text-xs sm:text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 leading-snug">
                            {product.tagline}
                          </p>

                          {/* Description: full exact content displayed in 16px bold sans-serif with justified alignment on PC, clean left-aligned on mobile/tablet */}
                          <div className={`leading-relaxed text-zinc-600 dark:text-zinc-400 text-sm sm:text-[15px] lg:text-[16px] font-bold font-sans text-left lg:text-justify [text-align-last:left] ${product.descriptionClassName || ""}`}>
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
                          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 lg:gap-3 pt-2.5 sm:pt-3 lg:pt-4">
                            {product.webUrl && (
                              <a
                                href={product.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-4.5 py-1.5 sm:py-2 lg:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors cursor-pointer shadow-xs"
                              >
                                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                                <span>Website</span>
                                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70" />
                              </a>
                            )}
                            {product.mobileUrl && (
                              <a
                                href={product.mobileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-4.5 py-1.5 sm:py-2 lg:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700 transition-colors cursor-pointer"
                              >
                                <GooglePlayIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                                <span>Google Play</span>
                              </a>
                            )}
                            {product.appStoreUrl && (
                              <a
                                href={product.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-4.5 py-1.5 sm:py-2 lg:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700 transition-colors cursor-pointer"
                              >
                                <AppleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                                <span>{product.appStoreTitle || "App Store"}</span>
                              </a>
                            )}
                            {product.secondaryMobileUrl && (
                              <a
                                href={product.secondaryMobileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-4.5 py-1.5 sm:py-2 lg:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700 transition-colors cursor-pointer"
                              >
                                <GooglePlayIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                                <span>Partner App</span>
                              </a>
                            )}
                            {product.secondaryAppStoreUrl && (
                              <a
                                href={product.secondaryAppStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-4.5 py-1.5 sm:py-2 lg:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700 transition-colors cursor-pointer"
                              >
                                <AppleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                                <span>{product.secondaryAppStoreTitle || "Partner App Store"}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE: Mockups Showcase (Web, Mobile, or Combined) */}
                    <div className="lg:col-span-7 relative flex items-center justify-center h-full group pt-3 sm:pt-5 lg:pt-0">
                      {product.webImage && product.mobileImage && product.secondaryMobileImage ? (
                        /* Case 1A: Desktop Browser Mockup + Dual Side-by-Side Mobile Apps (as per reference design) */
                        <div className={`relative w-full ${product.containerMaxWidthClass || 'max-w-[440px] sm:max-w-[560px] lg:max-w-[690px] xl:max-w-[760px] 2xl:max-w-[820px]'} flex items-center justify-start min-h-[200px] sm:min-h-[260px] md:min-h-[285px] lg:min-h-0 pb-10 sm:pb-14 lg:pb-2 pt-2 sm:pt-4 lg:pt-0 mx-auto lg:mx-0`}>
                          {/* Desktop Browser Mockup */}
                          <div className={`relative ${product.webWidthClass || 'w-[58%] sm:w-[56%] lg:w-[56%] xl:w-[58%]'} ${product.webOffsetClass || ''} shrink-0`}>
                            <div className={`w-full rounded-2xl ${product.hasCustomBrowserFrame ? 'bg-transparent border-0' : 'bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80'} overflow-hidden shadow-lg group-hover:-translate-y-1 transition-transform duration-500 flex flex-col z-10`}>
                              {!product.hasCustomBrowserFrame && (
                                <div className="h-5 sm:h-6 bg-zinc-200/70 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                  <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                  <span className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 ml-2 font-mono truncate max-w-[220px]">
                                    {product.webUrl?.replace(/^https?:\/\//, "")}
                                  </span>
                                </div>
                              )}

                              {/* Browser Screenshot Content */}
                              <div
                                style={{ aspectRatio: product.webImageAspectRatio || "16/9" }}
                                className={`${product.hasCustomBrowserFrame ? 'rounded-2xl' : 'bg-white dark:bg-zinc-900'} relative w-full overflow-hidden flex items-start justify-center`}
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

                          {/* Dual Phones Side-by-Side (Overlapping the right of the desktop window) */}
                          <div className={`absolute ${product.dualPhonesPositionClass || 'right-1 sm:right-2 lg:right-0 xl:right-2'} -bottom-2 sm:-bottom-3 lg:-bottom-10 xl:-bottom-20 2xl:-bottom-24 z-20 flex items-end gap-1.5 sm:gap-2.5 xl:gap-3.5`}>
                            {/* Phone 1: Customer / Primary App */}
                            <div className="w-[80px] min-[380px]:w-[86px] sm:w-[114px] md:w-[130px] lg:w-[148px] xl:w-[170px] 2xl:w-[195px] shrink-0 group-hover:-translate-y-2 transition-transform duration-500 flex justify-center">
                              <div className="relative w-full flex justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]">
                                <Image
                                  src={product.mobileImage}
                                  alt={product.mobileTitle || `${product.name} App`}
                                  width={776}
                                  height={1576}
                                  style={{ width: "100%", height: "auto" }}
                                  className="w-full h-auto max-h-[175px] sm:max-h-[225px] md:max-h-[250px] lg:max-h-[275px] xl:max-h-[315px] 2xl:max-h-[375px] object-contain"
                                  unoptimized
                                />
                              </div>
                            </div>

                            {/* Phone 2: Partner / Driver / Host App */}
                            <div className="w-[80px] min-[380px]:w-[86px] sm:w-[114px] md:w-[130px] lg:w-[148px] xl:w-[170px] 2xl:w-[195px] shrink-0 group-hover:-translate-y-2 transition-transform duration-500 delay-75 flex justify-center">
                              <div className="relative w-full flex justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]">
                                <Image
                                  src={product.secondaryMobileImage}
                                  alt={product.secondaryMobileTitle || `${product.name} Partner App`}
                                  width={776}
                                  height={1576}
                                  style={{ width: "100%", height: "auto" }}
                                  className="w-full h-auto max-h-[175px] sm:max-h-[225px] md:max-h-[250px] lg:max-h-[275px] xl:max-h-[315px] 2xl:max-h-[375px] object-contain"
                                  unoptimized
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : product.webImage && product.mobileImage ? (
                        /* Case 1: Standard Desktop Browser Mockup + Overlapping Mobile App */
                        <div className="relative w-[82%] sm:w-[76%] lg:w-[72%] xl:w-[70%] -translate-x-[2%] sm:-translate-x-[4%] lg:-translate-x-[6%] sm:lg:-translate-x-[7%] flex items-center min-h-[175px] sm:min-h-[225px] md:min-h-[245px] lg:min-h-0 pb-8 sm:pb-12 lg:pb-0 pt-2 sm:pt-4 lg:pt-0 mx-auto lg:mx-0">
                          {/* Desktop Browser Mockup */}
                          <div className={`w-full rounded-2xl ${product.hasCustomBrowserFrame ? 'bg-transparent border-0' : 'bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80'} overflow-hidden shadow-lg group-hover:-translate-y-1 transition-transform duration-500 flex flex-col z-10 ${product.webOffsetClass || ''}`}>
                            {/* Browser Top Window Bar */}
                            {!product.hasCustomBrowserFrame && (
                              <div className="h-5 sm:h-6 bg-zinc-200/70 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                                <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                <span className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 ml-2 font-mono truncate max-w-[280px] sm:max-w-[340px]">
                                  {product.webUrl?.replace(/^https?:\/\//, "")}
                                </span>
                              </div>
                            )}

                            {/* Browser Screenshot Content */}
                            <div
                              style={{ aspectRatio: product.webImageAspectRatio || "16/9" }}
                              className={`${product.hasCustomBrowserFrame ? 'rounded-2xl' : 'bg-white dark:bg-zinc-900'} relative w-full overflow-hidden flex items-start justify-center`}
                            >
                              <Image
                                src={product.webImage}
                                alt={`${product.name} Web`}
                                width={product.webImageWidth || 1504}
                                height={product.webImageHeight || 1046}
                                className={`w-full h-full object-cover object-top ${product.webImageClass || ''}`}
                                unoptimized
                              />
                            </div>
                          </div>

                          {/* Mobile App Mockup (Overlapping right & down) */}
                          <div className="absolute -right-3 sm:-right-5 lg:-right-6 xl:-right-8 translate-x-1/2 -bottom-2 sm:-bottom-3 lg:-bottom-10 xl:-bottom-12 z-20 w-[44%] sm:w-[40%] lg:w-[46%] xl:w-[42%] md:w-[38%] max-w-[145px] sm:max-w-[175px] lg:max-w-[210px] xl:max-w-[240px] 2xl:max-w-[275px] group-hover:-translate-y-2.5 transition-transform duration-500 flex justify-center">
                            <div className={`relative w-full flex justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] ${product.mobileOffsetClass || ""}`}>
                              <Image
                                src={product.mobileImage}
                                alt={`${product.name} App`}
                                width={400}
                                height={800}
                                className="w-full h-auto max-h-[185px] sm:max-h-[225px] lg:max-h-[240px] xl:max-h-[305px] 2xl:max-h-[375px] object-contain"
                                unoptimized
                              />
                            </div>
                          </div>
                        </div>
                      ) : product.mobileImage && product.secondaryMobileImage ? (
                        /* Case 2A: Dual Mobile App Showcase (Side-by-side with uniform sizing) */
                        <div className="relative w-full flex items-center justify-center gap-3 sm:gap-5 md:gap-6 xl:gap-8 py-2">
                          {/* Phone 1: Passenger App */}
                          <div className="relative w-full max-w-[115px] sm:max-w-[145px] md:max-w-[170px] xl:max-w-[195px] 2xl:max-w-[230px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] group-hover:-translate-y-2 transition-transform duration-500 flex justify-center">
                            <Image
                              src={product.mobileImage}
                              alt={product.mobileTitle || `${product.name} App`}
                              width={900}
                              height={1700}
                              className="w-full h-auto max-h-[190px] sm:max-h-[240px] md:max-h-[275px] xl:max-h-[315px] 2xl:max-h-[380px] object-contain"
                              unoptimized
                            />
                          </div>

                          {/* Phone 2: Rider / Driver Dashboard Mockup */}
                          <div className="relative w-full max-w-[115px] sm:max-w-[145px] md:max-w-[170px] xl:max-w-[195px] 2xl:max-w-[230px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] group-hover:-translate-y-2.5 transition-transform duration-500 delay-75 flex justify-center">
                            <Image
                              src={product.secondaryMobileImage}
                              alt={product.secondaryMobileTitle || `${product.name} Rider Dashboard`}
                              width={900}
                              height={1700}
                              className="w-full h-auto max-h-[190px] sm:max-h-[240px] md:max-h-[275px] xl:max-h-[315px] 2xl:max-h-[380px] object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                      ) : product.mobileImage ? (
                        /* Case 2B: Pure Mobile App Showcase (Centered and Prominent) */
                        <div className="relative w-full flex items-center justify-center py-2 sm:py-3 lg:py-2">
                          <div className="relative w-full max-w-[155px] sm:max-w-[185px] lg:max-w-[200px] xl:max-w-[260px] 2xl:max-w-[290px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] group-hover:-translate-y-2 transition-transform duration-500 flex justify-center">
                            <Image
                              src={product.mobileImage}
                              alt={`${product.name} App`}
                              width={400}
                              height={800}
                              className="w-full h-auto max-h-[205px] sm:max-h-[250px] lg:max-h-[260px] xl:max-h-[340px] 2xl:max-h-[400px] object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                      ) : product.webImage ? (
                        /* Case 3: Pure Web App Showcase (Centered Browser Mockup) */
                        <div className="relative w-full sm:w-[94%] lg:w-[92%] sm:lg:w-[88%] mx-auto flex items-center pt-2 sm:pt-4 lg:pt-0">
                          <div className={`w-full rounded-2xl ${product.hasCustomBrowserFrame ? 'bg-transparent border-0' : 'bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80'} overflow-hidden shadow-lg group-hover:-translate-y-1 transition-transform duration-500 flex flex-col z-10 ${product.webOffsetClass || ''}`}>
                            {!product.hasCustomBrowserFrame && (
                              <div className="h-5 sm:h-6 bg-zinc-200/70 dark:bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-200 dark:border-zinc-700 shrink-0">
                                <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                <span className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 ml-2 font-mono truncate max-w-[280px] sm:max-w-[340px]">
                                  {product.webUrl?.replace(/^https?:\/\//, "")}
                                </span>
                              </div>
                            )}
                            <div
                              style={{ aspectRatio: product.webImageAspectRatio || "16/9" }}
                              className={`${product.hasCustomBrowserFrame ? 'rounded-2xl' : 'bg-white dark:bg-zinc-900'} relative w-full overflow-hidden flex items-start justify-center`}
                            >
                              <Image
                                src={product.webImage}
                                alt={`${product.name} Web`}
                                width={product.webImageWidth || 1504}
                                height={product.webImageHeight || 1046}
                                className={`w-full h-full object-cover object-top ${product.webImageClass || ''}`}
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
