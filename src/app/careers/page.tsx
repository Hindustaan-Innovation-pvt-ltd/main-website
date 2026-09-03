import type { Metadata } from "next";
import { CareerHero } from "@/components/career/CareerHero";
import { CareerGrid } from "@/components/career/CareerGrid";
import { CareerCtaBanner } from "@/components/career/CareerCtaBanner";
import Footer2 from "@/components/landing/footer2";

export const metadata: Metadata = {
  title: "Careers | Hindustan Innovations",
  description:
    "Join our team and help build the future of software development, AI, and cloud computing.",
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 overflow-hidden transition-colors duration-200">
      <CareerHero />
      <CareerGrid />
      <CareerCtaBanner />
      <Footer2 />
    </div>
  );
}
