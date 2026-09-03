"use client";

import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  MessageSquare,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useCallback, useState, Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import data from "@/data.json";
import { Navbar2 } from "../landing/navbar2";
import { Input, Label, Textarea } from "../ui/form";
import {
  contactFormSchema,
  type FormField,
  validateField,
  validateForm,
} from "../ui/form-fields";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
    <Suspense fallback={<div className="min-h-screen bg-[#f5f5f5] dark:bg-[#09090b]" />}>
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

  const mapRef = useRef<HTMLDivElement>(null);

  const headOfficeUrl = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Kamal-Vihar,%20Raipur,%20Chhattisgarh+(Hindustaan%20Innovations)&t=&z=14&ie=UTF8&iwloc=B&output=embed";
  const registeredOfficeUrl = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Gopalganj,%20Bihar+(Hindustaan%20Innovations)&t=&z=14&ie=UTF8&iwloc=B&output=embed";

  const defaultMapSrc = headOfficeUrl;
  const [mapSrc, setMapSrc] = useState(defaultMapSrc);
  const [activeMap, setActiveMap] = useState<'head' | 'registered'>('head');

  const handleViewMap = (e: React.MouseEvent, location: 'head' | 'registered') => {
    e.preventDefault();
    setMapSrc(location === 'head' ? headOfficeUrl : registeredOfficeUrl);
    setActiveMap(location);
    setTimeout(() => {
      mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleChange = useCallback((field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: { ...prev[field], value, error: undefined, touched: true },
    }));
  }, []);

  const handleBlur = useCallback((field: keyof FormState) => {
    setForm((prev) => {
      const current = prev[field];
      const rules = contactFormSchema[field];
      const error = rules ? validateField(current.value, rules) : undefined;
      return {
        ...prev,
        [field]: {
          ...current,
          touched: true,
          error,
        },
      };
    });
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
    if (!validateFormOnSubmit()) return;

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
        setTimeout(() => setSubmitted(false), 6000);
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
    <div className="relative min-h-screen bg-[#f5f5f5] dark:bg-[#09090b] transition-colors duration-200 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1ba453]/8 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1ba453]/6 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <Navbar2 />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20"
      >
        {/* ── Hero Header ───────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-full shadow-xs mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-[#1ba453]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-600 dark:text-zinc-300">
              {contactPage.pill}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-5">
            {contactPage.heading}{" "}
            <span className="text-[#1ba453]">{contactPage.headingItalic}</span>
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            {contactPage.subheading}
          </p>
        </motion.div>

        {/* ── Main Two-Column Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* ── LEFT: Contact Info ─────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Email Us */}
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200/80 dark:border-white/10 p-6 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-[#1ba453]/10 border border-[#1ba453]/20">
                  <Mail className="w-5 h-5 text-[#1ba453]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{contactPage.emailUs.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">{contactPage.emailUs.description}</p>
                  <a
                    href={`mailto:${contactPage.emailUs.email}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1ba453] hover:gap-2.5 transition-all duration-200"
                  >
                    {contactPage.emailUs.email}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              {/* decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1ba453]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </motion.div>

            {/* Contact Sales */}
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200/80 dark:border-white/10 p-6 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <Headphones className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{contactPage.contactSales.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">{contactPage.contactSales.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    {contactPage.contactSales.linkText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Offices */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200/80 dark:border-white/10 overflow-hidden shadow-xs"
            >
              {/* Head Office */}
              <div className="p-6 border-b border-zinc-100 dark:border-white/10 group hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40">
                    <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Head Office</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                      Hindustaan Innovations Private Limited<br />
                      CO: B-41, Sector-8A, Kamal-Vihar,<br />
                      Raipur (C.G.) — 492001<br />
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">Phone: 0771-299-4005</span>
                    </p>
                    <button
                      onClick={(e) => handleViewMap(e, 'head')}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all duration-200"
                    >
                      View on map
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Registered Office */}
              <div className="p-6 group hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40">
                    <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Registered Office</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                      Hindustaan Innovations Private Limited<br />
                      Gp14168, Near Rajdeep, Medico Ajency,<br />
                      Sector-14, Gopalganj, Bihar — 841428
                    </p>
                    <button
                      onClick={(e) => handleViewMap(e, 'registered')}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:gap-2.5 transition-all duration-200"
                    >
                      View on map
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT: Form ───────────────────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200/80 dark:border-white/10 shadow-xs overflow-hidden flex flex-col"
          >
            {/* Form Header */}
            <div className="px-8 pt-8 pb-6 border-b border-zinc-100 dark:border-white/10">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#1ba453]/10 border border-[#1ba453]/20">
                  <Send className="w-4 h-4 text-[#1ba453]" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{contactPage.form.heading}</h2>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 ml-12">Fill in the details below and we&apos;ll get back to you shortly.</p>
            </div>

            <div className="px-8 py-7 flex flex-col flex-grow">
              {/* Success Banner */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[#1ba453]/10 border border-[#1ba453]/30 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1ba453] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1ba453]">Message sent successfully!</p>
                    <p className="text-sm text-[#1ba453]/70">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {/* Error Banner */}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 rounded-xl">
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">{submitError}</p>
                </div>
              )}

              {/* Form Fields */}
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {contactPage.form.fields.name.label}
                      <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={contactPage.form.fields.name.placeholder}
                      value={form.name.value}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      disabled={loading}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-zinc-50 dark:bg-zinc-800 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-zinc-800 focus:border-[#1ba453] focus:ring-2 focus:ring-[#1ba453]/15 disabled:opacity-50 ${form.name.touched && form.name.error ? 'border-red-400 bg-red-50 dark:bg-red-950/20' : 'border-zinc-200 dark:border-zinc-700'}`}
                    />
                    {form.name.touched && form.name.error && (
                      <p className="text-xs text-red-500 mt-0.5">{form.name.error}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {contactPage.form.fields.email.label}
                      <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder={contactPage.form.fields.email.placeholder}
                      value={form.email.value}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      disabled={loading}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-zinc-50 dark:bg-zinc-800 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-zinc-800 focus:border-[#1ba453] focus:ring-2 focus:ring-[#1ba453]/15 disabled:opacity-50 ${form.email.touched && form.email.error ? 'border-red-400 bg-red-50 dark:bg-red-950/20' : 'border-zinc-200 dark:border-zinc-700'}`}
                    />
                    {form.email.touched && form.email.error && (
                      <p className="text-xs text-red-500 mt-0.5">{form.email.error}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {contactPage.form.fields.phone.label}
                    </label>
                    <input
                      type="tel"
                      placeholder={contactPage.form.fields.phone.placeholder}
                      value={form.phone.value}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      disabled={loading}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-zinc-50 dark:bg-zinc-800 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-zinc-800 focus:border-[#1ba453] focus:ring-2 focus:ring-[#1ba453]/15 disabled:opacity-50 ${form.phone.touched && form.phone.error ? 'border-red-400 bg-red-50 dark:bg-red-950/20' : 'border-zinc-200 dark:border-zinc-700'}`}
                    />
                    {form.phone.touched && form.phone.error && (
                      <p className="text-xs text-red-500 mt-0.5">{form.phone.error}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {contactPage.form.fields.subject.label}
                    </label>
                    <input
                      type="text"
                      placeholder={contactPage.form.fields.subject.placeholder}
                      value={form.subject.value}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      onBlur={() => handleBlur("subject")}
                      disabled={loading}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-zinc-50 dark:bg-zinc-800 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-zinc-800 focus:border-[#1ba453] focus:ring-2 focus:ring-[#1ba453]/15 disabled:opacity-50 ${form.subject.touched && form.subject.error ? 'border-red-400 bg-red-50 dark:bg-red-950/20' : 'border-zinc-200 dark:border-zinc-700'}`}
                    />
                    {form.subject.touched && form.subject.error && (
                      <p className="text-xs text-red-500 mt-0.5">{form.subject.error}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    {contactPage.form.fields.message.label}
                    <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder={contactPage.form.fields.message.placeholder}
                    value={form.message.value}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    disabled={loading}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-zinc-50 dark:bg-zinc-800 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-zinc-800 focus:border-[#1ba453] focus:ring-2 focus:ring-[#1ba453]/15 resize-none disabled:opacity-50 ${form.message.touched && form.message.error ? 'border-red-400 bg-red-50 dark:bg-red-950/20' : 'border-zinc-200 dark:border-zinc-700'}`}
                  />
                  {form.message.touched && form.message.error && (
                    <p className="text-xs text-red-500 mt-0.5">{form.message.error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-[#1ba453] text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#17913f] active:scale-[0.99] flex items-center justify-center gap-2 shadow-md shadow-[#1ba453]/20 hover:shadow-lg hover:shadow-[#1ba453]/30"
                >
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending your message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {contactPage.form.submitLabel}
                    </>
                  )}
                </button>
              </form>

              {/* Trust indicators that naturally fill the remaining space */}
              <div className="mt-auto pt-6">
                <div className="border-t border-zinc-100 dark:border-white/10 pt-5">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700">
                      <span className="text-xl font-extrabold text-[#1ba453]">On Time</span>
                      <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 text-center leading-tight">Project Delivery</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700">
                      <span className="text-xl font-extrabold text-[#1ba453]">24h</span>
                      <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 text-center leading-tight">Response Time</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700">
                      <span className="text-xl font-extrabold text-[#1ba453]">100%</span>
                      <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 text-center leading-tight">Client Satisfaction</span>
                    </div>
                  </div>
                  <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-3 flex items-center justify-center gap-1.5">
                    <svg className="w-3 h-3 text-[#1ba453]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                    Your data is safe and will never be shared
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Map Section ───────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="mt-8" ref={mapRef}>
          {/* Map toggle buttons */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={(e) => handleViewMap(e, 'head')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${activeMap === 'head' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Head Office – Raipur
            </button>
            <button
              onClick={(e) => handleViewMap(e, 'registered')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${activeMap === 'registered' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              <MapPin className="w-3.5 h-3.5" />
              Registered Office – Gopalganj
            </button>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-md">
            <iframe
              src={mapSrc}
              loading="eager"
              className="w-full"
              title="Hindustan Innovations Location Map"
              width={2000}
              height={480}
              style={{ display: 'block' }}
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}