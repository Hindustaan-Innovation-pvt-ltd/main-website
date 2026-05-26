import type { Metadata } from "next";
import { FooterBar } from "@/components/landing/FooterBar";
import { ContactSection } from "@/components/contact/ContactSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactFaqSection from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact | Hindustan Innovations",
  description: "Get in touch with us to discuss your automation and tech needs.",
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col text-zinc-50 overflow-hidden">
      <ContactSection />
      <ContactFaqSection />
      <FooterBar />
    </div>
  );
}
