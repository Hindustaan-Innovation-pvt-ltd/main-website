"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowUpRight, MapPin, Briefcase, Clock, Users } from "lucide-react";
import { motion } from "motion/react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { redirect } from "next/navigation";

interface Job {
  id: string;
  title: string;
  description: string;
  accent: string;
  department: string;
  items?: string[];
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
}

type ApplicationForm = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  portfolio: string;
  message: string;
};

export default function JobDetailsClient({ job }: { job: Job }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hindustaan.in";
  const jobUrl = `${siteUrl.replace(/\/$/, "")}/career/${job.id}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`;
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Parse job items for better display
  const jobDetails = {
    location: job.items?.find(item => ["Remote", "Hybrid", "On-site"].includes(item)) || "Not specified",
    type: job.items?.find(item => ["Full-time", "Part-time", "Contract"].includes(item)) || "Not specified",
    level: job.items?.find(item => ["Junior", "Mid", "Senior"].includes(item)) || "Not specified",
  };

  const resetForm = () => {
    setApplicationForm({
      name: "",
      email: "",
      phone: "",
      experience: "",
      portfolio: "",
      message: "",
    });
  };

  return (
    <motion.main
      className="relative z-10 flex-1 flex flex-col px-4 sm:px-6 pt-24 pb-16 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Back Button */}
      <motion.div variants={itemVariants} className="max-w-[1800px] mx-auto w-full mb-8">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Careers
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1800px] mx-auto w-full"
      >
        {/* Header Section with Gradient Background */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 p-8 sm:p-12 mb-8 overflow-hidden shadow-xs"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Department Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full px-4 py-1.5 mb-4"
            >
              <Briefcase className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{job.department}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight"
            >
              {job.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl leading-relaxed"
            >
              {job.description}
            </motion.p>

            {/* Job Details Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-lg border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <MapPin className={`w-5 h-5 shrink-0 ${job.accent}`} />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Location</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{jobDetails.location}</p>
                </div>
              </div>

              {/* Type */}
              <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-lg border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <Clock className={`w-5 h-5 shrink-0 ${job.accent}`} />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Type</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{jobDetails.type}</p>
                </div>
              </div>

              {/* Level */}
              <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-lg border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <Users className={`w-5 h-5 shrink-0 ${job.accent}`} />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Level</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{jobDetails.level}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full ${job.accent}`} />
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">What You'll Do</h2>
                </div>
                <div className="space-y-3 pl-4">
                  {job.responsibilities.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 className={`w-5 h-5 mt-1 shrink-0 ${job.accent} group-hover:scale-110 transition-transform`} />
                      <span className="text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Divider */}
            <motion.div variants={itemVariants} className="h-px bg-linear-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full ${job.accent}`} />
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">What We're Looking For</h2>
                </div>
                <div className="space-y-3 pl-4">
                  {job.requirements.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 className={`w-5 h-5 mt-1 shrink-0 ${job.accent} group-hover:scale-110 transition-transform`} />
                      <span className="text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Divider */}
            <motion.div variants={itemVariants} className="h-px bg-linear-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full ${job.accent}`} />
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">What We Offer</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex items-start gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all group"
                    >
                      <CheckCircle2 className={`w-5 h-5 mt-1 shrink-0 ${job.accent} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <motion.aside
            variants={itemVariants}
            className="lg:col-span-1 h-fit space-y-6"
          >
            {/* Apply Card */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl bg-linear-to-br from-blue-600 to-blue-700 p-8 overflow-hidden group top-24"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2">Ready to apply?</h3>
                <p className="text-sm text-blue-100 mb-6">Submit your application and let us know why you'd be perfect for this role.</p>

                <HoverBorderGradient
                  containerClassName="rounded-xl w-full"
                  className="bg-white text-blue-700 font-semibold hover:bg-blue-50 flex items-center justify-center space-x-2 px-6 py-3 w-full transition-colors"
                  onClick={() => {
                    const isMarketing = job.department?.toLowerCase().includes("marketing") || job.id.toLowerCase().includes("marketing");
                    const formLink = isMarketing 
                      ? "https://docs.google.com/forms/d/e/1FAIpQLScmcOkicLN5Ga46oLp1k5iQyT1QeUnupfPay988UjdS2zPaPA/viewform"
                      : "https://forms.gle/3tG7K6VcD7z5Q8VD7";
                    window.open(formLink, "_blank");
                  }}
                >
                  <span
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="font-semibold">Apply Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </HoverBorderGradient>
              </div>
            </motion.div>

            {/* Job Summary Card */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 p-6 shadow-xs"
            >
              <h3 className="text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-4">Job Summary</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Department</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white mt-1">{job.department}</p>
                </div>
                <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Tags</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.items?.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-medium bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 rounded text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Share Card */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 p-6 shadow-xs"
            >
              <h3 className="text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-4">Share this job</h3>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20${job.title}%20role%20at%20Hindustan%20Innovations`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 text-sm font-medium bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-all text-zinc-600 dark:text-zinc-300 text-center"
                >
                  Twitter
                </a>
                <a
                  href={linkedinShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 text-sm font-medium bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-all text-zinc-600 dark:text-zinc-300 text-center"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </motion.div>
    </motion.main>
  );
}
