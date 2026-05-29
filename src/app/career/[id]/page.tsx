export const dynamicParams = true
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/landing/Navbar";
import { FooterBar } from "@/components/landing/FooterBar";
import careersData from "@/careers.json";
import JobDetailsClient from "@/components/career/JobDetailsClient";


function getJobById(id: string) {
  for (const dept of careersData.departments) {
    for (const job of dept.jobs) {
      if (job.id === id) {
        return { ...job, department: dept.heading };
      }
    }
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) notFound();

  return {
    title: `${job.title} - ${job.department} | Our Company`,
    description: `Join our team as a ${job.title} in the ${job.department} department. Explore the role, responsibilities, and how you can contribute to our company's success.`,
    openGraph: {
      title: `${job.title} - ${job.department} | Our Company`,
      description: `Join our team as a ${job.title} in the ${job.department} department. Explore the role, responsibilities, and how you can contribute to our company's success.`,
      url: `https://hindustaan.in/career/${id}`,
      siteName: "Hindustaan Innovations",
    },
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) notFound();

  return (
    <div className="relative min-h-screen flex flex-col text-zinc-50 bg-black overflow-hidden">
      <Navbar />
      <JobDetailsClient job={job} />
      <FooterBar />
    </div>
  );
}
