import type { Metadata } from "next";
import Footer2 from "@/components/landing/footer2";
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
    <div className="relative min-h-screen flex flex-col bg-[#f5f5f5] text-black overflow-hidden">
      <ContactSection />
      <ContactFaqSection />
      <Footer2 />
    </div>
  );
}
