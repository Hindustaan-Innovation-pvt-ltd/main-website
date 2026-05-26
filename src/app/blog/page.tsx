import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { FooterBar } from "@/components/landing/FooterBar";

export const metadata: Metadata = {
  title: "Blog | Hindustaan Innovations",
  description:
    "Insights and ideas on AI automation, web development, cloud computing, and digital business strategy from the Hindustaan Innovation team.",
  icons: { icon: "/logo.png" },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen flex flex-col text-zinc-50 overflow-hidden bg-zinc-950">
      <BlogHero />
      <BlogGrid />
      <FooterBar />
    </div>
  );
}
