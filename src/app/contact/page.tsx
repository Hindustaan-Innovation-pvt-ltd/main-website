import type { Metadata } from "next";
import Footer2 from "@/components/landing/footer2";
import { ContactSection } from "@/components/contact/ContactSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactFaqSection from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hindustaan Innovations Private Limited to discuss your AI automation, software engineering, and technology needs.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 overflow-hidden transition-colors duration-200">
      <ContactSection />
      <ContactFaqSection />
      <Footer2 />
    </div>
  );
}
