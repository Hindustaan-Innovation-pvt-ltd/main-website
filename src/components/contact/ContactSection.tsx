"use client";

import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useCallback, useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import data from "@/data.json";
import { Navbar2 } from "../landing/navbar2";
import { Input, Label, Textarea } from "../ui/form";
import {
  contactFormSchema,
  type FormField,
  validateForm,
} from "../ui/form-fields";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

interface FormState {
  name: FormField;
  email: FormField;
  phone: FormField;
  subject: FormField;
  message: FormField;
}

const initialFormState: FormState = {
  name: { name: "name", value: "", error: undefined, touched: false },
  email: { name: "email", value: "", error: undefined, touched: false },
  phone: { name: "phone", value: "", error: undefined, touched: false },
  subject: { name: "subject", value: "", error: undefined, touched: false },
  message: { name: "message", value: "", error: undefined, touched: false },
};

export function ContactSection() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ContactSectionContent />
    </Suspense>
  );
}

function ContactSectionContent() {
  const { contactPage } = data;
  const searchParams = useSearchParams();

  const [form, setForm] = useState<FormState>(initialFormState);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setForm((prev) => ({
        ...prev,
        subject: { ...prev.subject, value: subjectParam, touched: false },
      }));
    }
  }, [searchParams]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = useCallback((field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: { ...prev[field], value, error: undefined, touched: true },
    }));
  }, []);

  const handleBlur = useCallback((field: keyof FormState) => {
    setForm((prev) => ({
      ...prev,
      [field]: { ...prev[field], touched: true },
    }));
  }, []);

  const validateFormOnSubmit = useCallback((): boolean => {
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const errors = validateForm(formData, contactFormSchema);

    setForm((prev) => ({
      name: { ...prev.name, error: errors.name, touched: true },
      email: { ...prev.email, error: errors.email, touched: true },
      phone: { ...prev.phone, error: errors.phone, touched: true },
      subject: { ...prev.subject, error: errors.subject, touched: true },
      message: { ...prev.message, error: errors.message, touched: true },
    }));

    return Object.keys(errors).length === 0;
  }, [form]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateFormOnSubmit()) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        interest: form.subject.value,
        message: form.message.value,
      };

      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setForm(initialFormState);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(result.error ?? "Failed to submit form. Please try again.");
      }
    } catch {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f5f5]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#f5f5f5]" />

      <Navbar2 />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-8 lg:pb-20 w-full max-w-6xl mx-auto text-center"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-zinc-200 rounded-full shadow-sm">
            <Phone className="w-4 h-4 text-zinc-800" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-800">
              {contactPage.pill}
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15] md:leading-[1.1] mb-4 md:mb-6 text-center max-w-4xl"
        >
          {contactPage.heading}{" "}
          <span className="text-[#1ba453]">
            {contactPage.headingItalic}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-zinc-500 mb-16 text-center max-w-2xl"
        >
          {contactPage.subheading}
        </motion.p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full text-left">
          {/* Left Column - Contact Options */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <motion.div
              variants={itemVariants}
              className="group p-7 bg-white rounded-[2rem] shadow-sm border border-zinc-200/60 hover:shadow-md hover:border-zinc-300 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 mb-5">
                <Mail className="w-5 h-5 text-zinc-800" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2 transition-colors">
                {contactPage.emailUs.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed mb-4">
                {contactPage.emailUs.description}
              </p>
              <a
                href={`mailto:${contactPage.emailUs.email}`}
                className="inline-flex items-center text-sm font-bold text-zinc-600 hover:text-black transition-colors group/link"
              >
                {contactPage.emailUs.email}
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.a
              href="tel:+917712994005"
              variants={itemVariants}
              className="group p-7 bg-white rounded-[2rem] shadow-sm border border-zinc-200/60 hover:shadow-md hover:border-zinc-300 transition-all duration-300 cursor-pointer block"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 mb-5">
                <Headphones className="w-5 h-5 text-zinc-800" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2 transition-colors">
                {contactPage.contactSales.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed mb-4">
                {contactPage.contactSales.description}
              </p>
              <span className="inline-flex items-center text-sm font-bold text-zinc-600 hover:text-black transition-colors group/link">
                {contactPage.contactSales.linkText}
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="group p-7 bg-white rounded-[2rem] shadow-sm border border-zinc-200/60 hover:shadow-md hover:border-zinc-300 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 mb-5">
                <MapPin className="w-5 h-5 text-zinc-800" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2 transition-colors">
                Head Office
              </h3>
              <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed mb-4">
                Hindustaan Innovations Private Limited<br/>
                CO: B-41, Sector-8A, Kamal-Vihar,<br/>
                Raipur (C.G.) - 492001<br/>
                Phone: 0771- 299 - 4005
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group p-7 bg-white rounded-[2rem] shadow-sm border border-zinc-200/60 hover:shadow-md hover:border-zinc-300 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 mb-5">
                <MapPin className="w-5 h-5 text-zinc-800" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2 transition-colors">
                Registered Office
              </h3>
              <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed mb-4">
                Hindustaan Innovations Private Limited<br/>
                Gp14168, Near Rajdeep, Medico Ajency, Sector-14, Gopalganj, Gopalganj, Gopalganj, Bihar, India, 841428
              </p>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 p-8 bg-white rounded-[2rem] shadow-sm border border-zinc-200/60"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                {contactPage.form.heading}
              </h3>
              <div className="w-16 h-1 bg-[#1ba453] rounded-full" />
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-900/30 border border-emerald-800 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-800/50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-300">Message Sent!</p>
                    <p className="text-sm text-emerald-400/70">
                      We&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-xl">
                <p className="text-sm font-medium text-red-400">{submitError}</p>
              </div>
            )}

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div>
                <Label required className="text-zinc-700">{contactPage.form.fields.name.label}</Label>
                <Input
                  className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-[#1ba453] focus:ring-[#1ba453]/20"
                  type="text"
                  placeholder={contactPage.form.fields.name.placeholder}
                  value={form.name.value}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  error={form.name.touched ? form.name.error : undefined}
                  disabled={loading}
                />
              </div>

              <div>
                <Label required className="text-zinc-700">{contactPage.form.fields.email.label}</Label>
                <Input
                  className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-[#1ba453] focus:ring-[#1ba453]/20"
                  type="email"
                  placeholder={contactPage.form.fields.email.placeholder}
                  value={form.email.value}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  error={form.email.touched ? form.email.error : undefined}
                  disabled={loading}
                />
              </div>

              <div>
                <Label className="text-zinc-700">{contactPage.form.fields.phone.label}</Label>
                <Input
                  className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-[#1ba453] focus:ring-[#1ba453]/20"
                  type="tel"
                  placeholder={contactPage.form.fields.phone.placeholder}
                  value={form.phone.value}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  error={form.phone.touched ? form.phone.error : undefined}
                  disabled={loading}
                />
              </div>

              <div>
                <Label className="text-zinc-700">{contactPage.form.fields.subject.label}</Label>
                <Input
                  className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-[#1ba453] focus:ring-[#1ba453]/20"
                  type="text"
                  placeholder={contactPage.form.fields.subject.placeholder}
                  value={form.subject.value}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  onBlur={() => handleBlur("subject")}
                  error={form.subject.touched ? form.subject.error : undefined}
                  disabled={loading}
                />
              </div>

              <div className="md:col-span-2">
                <Label required className="text-zinc-700">{contactPage.form.fields.message.label}</Label>
                <Textarea
                  className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-[#1ba453] focus:ring-[#1ba453]/20"
                  placeholder={contactPage.form.fields.message.placeholder}
                  value={form.message.value}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  error={form.message.touched ? form.message.error : undefined}
                  disabled={loading}
                />
              </div>

              <div className="md:col-span-2 mt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-black text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      {contactPage.form.submitLabel}
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        {/* Map */}
        <motion.div variants={itemVariants} className="mt-6">
          <div className="max-w-7xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7439.507900907457!2d81.66653746665727!3d21.201931149897856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1777108763120!5m2!1sen!2sin"
              loading="eager"
              className="w-full aspect-video rounded-xl"
              title="Hindustan Innovations Location Map"
              width={2000}
              height={600}
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}