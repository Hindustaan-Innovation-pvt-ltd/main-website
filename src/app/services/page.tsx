import type { Metadata } from "next";
import { Navbar2 } from "@/components/landing/navbar2";
import Footer2 from "@/components/landing/footer2";
import { ServicesHero2 } from "@/components/services2/ServicesHero2";
import { ServicesCategoryGrid2 } from "@/components/services2/ServicesCategoryGrid2";
import { ServicesCtaBanner2 } from "@/components/services2/ServicesCtaBanner2";

export const metadata: Metadata = {
  title: "Services | Hindustan Innovations",
  description:
    "Explore our full range of services — Web Development, AI, Cloud Computing, UI/UX Design, Digital Marketing and more.",
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 overflow-hidden transition-colors duration-200">
      <Navbar2 />
      <ServicesHero2 />
      <ServicesCategoryGrid2 />
      <ServicesCtaBanner2 />
      <Footer2 />
    </div>
  );
}
