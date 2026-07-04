import { Navbar2 } from "@/components/landing/navbar2";
import Footer2 from "@/components/landing/footer2";
import { Shield } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hindustaan Innovations",
  description: "How Hindustaan Innovations collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, book a call, subscribe to our newsletter, or engage with our services. This may include:

• Name, email address, and phone number
• Business name and industry
• Project requirements and communication history
• Payment information (processed securely via third-party providers)
• Usage data when you visit our website (page views, device type, browser, IP address)

We do not collect sensitive personal information such as government IDs, financial account numbers, or health data.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your inquiries and deliver our services
• Send project updates, invoices, and relevant communication
• Improve our website experience and service offerings
• Send marketing emails (only with your explicit consent)
• Comply with legal obligations and prevent fraud

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: "3. Data Storage & Security",
    content: `Your data is stored on secure servers hosted on AWS (Amazon Web Services) infrastructure. We implement industry-standard security measures including:

• SSL/TLS encryption for all data in transit
• Access controls limiting data access to authorized personnel only
• Regular security audits and vulnerability assessments
• Encrypted backups with restricted access

While we take all reasonable precautions, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "4. Cookies & Tracking",
    content: `Our website uses cookies and similar technologies to enhance your experience. These include:

• Essential cookies: Required for basic site functionality
• Analytics cookies: Help us understand how visitors use our site (Google Analytics)
• Preference cookies: Remember your settings and preferences

You can control cookie settings through your browser. Disabling certain cookies may affect your experience on our website.`,
  },
  {
    title: "5. Third-Party Services",
    content: `We may share your data with trusted third-party service providers who assist us in operating our business, including:

• Google Analytics (website analytics)
• Razorpay (payment processing)
• WhatsApp Business API (client communication)
• AWS (cloud hosting)
• Email service providers for newsletters

These providers are contractually obligated to handle your data securely and only use it for the purposes we specify.`,
  },
  {
    title: "6. Your Rights",
    content: `Under applicable data protection laws, you have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data (subject to legal retention requirements)
• Opt out of marketing communications at any time
• Data portability — receive your data in a structured format

To exercise any of these rights, contact us at info@hindustaan.in. We will respond within 30 days.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Client project data is typically retained for 3 years after project completion. Newsletter subscriber data is retained until you unsubscribe.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately and we will take steps to delete such information.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of significant changes via email or a prominent notice on our website. The date of the last revision is displayed at the bottom of this page.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:

Hindustaan Innovations
Email: info@hindustaan.in
Website: www.hindustaan.in

We are committed to resolving any privacy-related concerns promptly and transparently.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative bg-white text-zinc-900 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-white z-0 pointer-events-none" />
      <Navbar2 />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-36 pb-12 max-w-3xl mx-auto text-center gap-5">
        <div className="flex items-center gap-2 bg-zinc-50/40 backdrop-blur-md border border-black/5 rounded-full px-4 py-1.5">
          <Shield className="w-4 h-4 text-zinc-700" />
          <span className="text-xs font-semibold tracking-wider text-zinc-700 uppercase">Privacy Policy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
          Your Privacy{" "}
          <span className="font-serif italic font-light text-zinc-700">Matters to Us.</span>
        </h1>
        <p className="text-zinc-600 text-base leading-relaxed">
          This policy explains how Hindustaan Innovations collects, uses, and protects your information. We keep it simple and transparent.
        </p>
        <p className="text-xs text-zinc-600">Last updated: April 27, 2026</p>
      </section>

      {/* Policy content */}
      <section className="relative z-10 px-4 pb-24 w-full max-w-3xl mx-auto">
        <div className="bg-[#f5f5f5] border border-black/10 rounded-3xl p-8 md:p-12 flex flex-col gap-10">
          {SECTIONS.map((sec) => (
            <div key={sec.title} className="flex flex-col gap-3 pb-10 border-b border-black/5 last:border-0 last:pb-0">
              <h2 className="text-lg font-bold text-zinc-900">{sec.title}</h2>
              <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">{sec.content}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer2 />
    </div>
  );
}
