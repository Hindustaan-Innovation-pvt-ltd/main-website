import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import Footer2 from "@/components/landing/footer2";

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
    <div className="relative min-h-screen flex flex-col text-black overflow-hidden bg-[#f5f5f5]">
      <BlogHero />
      <BlogGrid />
      <Footer2 />
    </div>
  );
}
