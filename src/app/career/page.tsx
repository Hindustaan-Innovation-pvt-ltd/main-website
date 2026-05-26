import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { FooterBar } from "@/components/landing/FooterBar";
import { CareerHero } from "@/components/career/CareerHero";
import { CareerGrid } from "@/components/career/CareerGrid";
import { CareerCtaBanner } from "@/components/career/CareerCtaBanner";

export const metadata: Metadata = {
  title: "Careers | Hindustan Innovations",
  description: "Join our team to build the next generation of AI and web automation tools.",
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "/career",
  },
};

export default function CareersPage() {
  return (
    <div className="relative min-h-screen flex flex-col text-zinc-50 overflow-hidden">
      <CareerHero />
      <CareerGrid />
      <CareerCtaBanner />
      <FooterBar />
    </div>
  );
}
