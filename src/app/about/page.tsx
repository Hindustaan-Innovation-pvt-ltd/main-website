import type { Metadata } from "next";
import { AboutUs } from "@/components/about/aboutus";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hindustaan Innovations Private Limited — our story, mission, vision, values, team, and how we help Indian businesses automate smarter with AI.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
