"use client";

import {
  AlertTriangle,
  Check,
  Copy,
  Download,
  Edit,
  ExternalLink,
  Loader2,
  Lock,
  LogOut,
  Plus,
  Printer,
  QrCode,
  Search,
  ShieldCheck,
  Trash2,
  UserCheck,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import type { Employee } from "@/lib/employee";
import { buildVerificationUrl } from "@/lib/employee";

interface Props {
  employees: Employee[];
}

export function EmployeeBadgesDashboard({
  employees: initialEmployees,
}: Props) {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(
    initialEmployees[0] || null,
  );
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [origin, setOrigin] = useState("");

  // Modals state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Form states
  const [formData, setFormData] = useState<Partial<Employee>>({});
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  // Generate QR code whenever selected employee changes
  useEffect(() => {
    if (!selectedEmp) {
      setQrDataUrl("");
      return;
    }
    const url = buildVerificationUrl(selectedEmp, origin);

    QRCode.toDataURL(url, {
      width: 400,
      margin: 2,
      color: {
        dark: "#0f172a",
        light: "#ffffff",
      },
      errorCorrectionLevel: "H",
    })
      .then((dataUri) => {
        setQrDataUrl(dataUri);
      })
      .catch((err) => {
        console.error("QR code generation failed:", err);
      });
  }, [selectedEmp, origin]);

  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const verificationUrl = selectedEmp
    ? buildVerificationUrl(selectedEmp, origin)
    : "";

  const handleCopyLink = async () => {
    if (!verificationUrl) return;
    try {
      await navigator.clipboard.writeText(verificationUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleDownloadQR = () => {
    if (!qrDataUrl || !selectedEmp) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = `QR_${selectedEmp.id}_${selectedEmp.name.replace(/\s+/g, "_")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      window.location.reload();
    } catch {
      window.location.reload();
    }
  };

  const handlePrintBadge = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Open Edit Modal
  const handleOpenEdit = () => {
    if (!selectedEmp) return;
    setFormData({
      id: selectedEmp.id,
      name: selectedEmp.name,
      designation: selectedEmp.designation,
      status: selectedEmp.status,
      email: selectedEmp.email,
      phone: selectedEmp.phone,
      location: selectedEmp.location,
      photo: selectedEmp.photo,
      bio: selectedEmp.bio || "",
      emergencyContact: selectedEmp.emergencyContact || "",
    });
    setFormError("");
    setIsEditModalOpen(true);
  };

  // Save Edit
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim() || !formData.designation?.trim()) {
      setFormError("Name and Designation are required.");
      return;
    }

    setSaving(true);
    setFormError("");

    try {
      const res = await fetch("/api/admin/employees", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        const updated = data.employee as Employee;
        setEmployees((prev) =>
          prev.map((emp) => (emp.id === updated.id ? updated : emp)),
        );
        setSelectedEmp(updated);
        setIsEditModalOpen(false);
      } else {
        setFormError(data.error || "Failed to update employee.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Open Add Modal
  const handleOpenAdd = () => {
    setFormData({
      name: "",
      designation: "",
      status: "Active",
      email: "",
      phone: "+91 ",
      location: "Patna HQ / Bangalore Innovation Hub, India",
      photo: "/logo.png",
      bio: "",
      emergencyContact: "+91 88035 55558",
    });
    setFormError("");
    setIsAddModalOpen(true);
  };

  // Save Add
  const handleSaveAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim() || !formData.designation?.trim()) {
      setFormError("Name and Designation are required.");
      return;
    }

    setSaving(true);
    setFormError("");

    try {
      const res = await fetch("/api/admin/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        const newEmp = data.employee as Employee;
        setEmployees((prev) => [...prev, newEmp]);
        setSelectedEmp(newEmp);
        setIsAddModalOpen(false);
      } else {
        setFormError(data.error || "Failed to add employee.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Delete Employee
  const handleDeleteEmployee = async () => {
    if (!selectedEmp) return;
    setSaving(true);
    try {
      const res = await fetch(
        `/api/admin/employees?id=${encodeURIComponent(selectedEmp.id)}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();
      if (res.ok && data.success) {
        const remaining = employees.filter((e) => e.id !== selectedEmp.id);
        setEmployees(remaining);
        setSelectedEmp(remaining[0] || null);
        setIsDeleteModalOpen(false);
      } else {
        alert(data.error || "Failed to delete employee.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-4 sm:p-8">
      {/* Top Bar / Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-2">
              <Image
                src="/logo.png"
                alt="Hindustaan Innovations"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Employee Badges & QR Generator
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                  Admin Portal
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                Manage employee profiles, download high-res QR codes, and print
                ID badges
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Employee</span>
            </button>
            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors border border-zinc-200 dark:border-zinc-800"
            >
              Back to Site
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock Portal</span>
            </button>
          </div>
        </div>

        {/* Security Rule Notice Banner */}
        <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 flex items-start gap-3 text-xs leading-relaxed">
          <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">Security Rule Active:</strong>{" "}
            Direct URL typing without the secret verification token is blocked.
            Employee profiles are only viewable by scanning the signed QR code.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Employee Selector List */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-sm tracking-wide text-zinc-800 dark:text-zinc-200">
                Employees ({employees.length})
              </h2>
              <button
                type="button"
                onClick={handleOpenAdd}
                className="text-xs text-emerald-600 hover:text-emerald-500 font-semibold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                Add New
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, ID, department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            {/* Employee List */}
            <div className="space-y-2 max-h-[550px] overflow-y-auto pr-1">
              {filteredEmployees.map((emp) => {
                const isSelected = selectedEmp?.id === emp.id;
                return (
                  <button
                    key={emp.id}
                    type="button"
                    onClick={() => setSelectedEmp(emp)}
                    className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-3 border ${
                      isSelected
                        ? "bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-500/40 shadow-sm"
                        : "bg-zinc-50/70 hover:bg-zinc-100 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/80 border-zinc-200/60 dark:border-zinc-800"
                    }`}
                  >
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-700 shrink-0">
                      <Image
                        src={emp.photo || "/logo.png"}
                        alt={emp.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100 truncate">
                          {emp.name}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-400 shrink-0">
                          {emp.id}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                        {emp.designation}
                      </p>
                    </div>
                  </button>
                );
              })}

              {filteredEmployees.length === 0 && (
                <div className="text-center py-8 text-xs text-zinc-400">
                  No employees matching your search.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: ID Badge & QR Code Preview */}
        {selectedEmp ? (
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Action Bar */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    {selectedEmp.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      selectedEmp.status === "Active"
                        ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {selectedEmp.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  Official Verification ID: {selectedEmp.id}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Edit Button */}
                <button
                  type="button"
                  onClick={handleOpenEdit}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors border border-zinc-200 dark:border-zinc-700"
                >
                  <Edit className="w-3.5 h-3.5 text-blue-500" />
                  Edit Details
                </button>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/80 text-rose-600 dark:text-rose-400 transition-colors border border-rose-200 dark:border-rose-900/60"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>

                {/* Download QR Button */}
                <button
                  type="button"
                  onClick={handleDownloadQR}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download QR
                </button>

                {/* Print Badge Button */}
                <button
                  type="button"
                  onClick={handlePrintBadge}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors border border-zinc-200 dark:border-zinc-700"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print ID
                </button>

                {/* Test QR Link */}
                <Link
                  href={`/verify/${selectedEmp.id}?token=${selectedEmp.verificationToken}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 transition-all shadow-sm"
                >
                  <span>Test QR</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Side-by-side: Physical Printable ID Badge + QR Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ID Badge Preview (Print Ready) */}
              <div className="flex flex-col items-center">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 self-start flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Printable Physical ID Badge Preview
                </div>

                {/* Vertical ID Badge Card */}
                <div
                  id="printable-badge"
                  className="w-full max-w-[320px] aspect-[1/1.55] bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between relative print:shadow-none print:border-zinc-400"
                >
                  {/* Badge Top Header */}
                  <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 p-4 text-white text-center relative">
                    <div className="w-6 h-1.5 bg-white/40 rounded-full mx-auto mb-2" />
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center">
                        <Image
                          src="/logo.png"
                          alt="Logo"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <span className="font-bold text-xs tracking-wider uppercase">
                        Hindustaan Innovations
                      </span>
                    </div>
                    <div className="text-[10px] tracking-wider text-emerald-100 uppercase font-semibold">
                      Employee Identity Card
                    </div>
                  </div>

                  {/* Badge Body */}
                  <div className="flex-1 p-5 flex flex-col items-center text-center justify-center">
                    {/* Photo */}
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md relative mb-3 bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={selectedEmp.photo || "/logo.png"}
                        alt={selectedEmp.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="font-extrabold text-base text-zinc-900 dark:text-white leading-tight">
                      {selectedEmp.name}
                    </div>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 leading-snug">
                      {selectedEmp.designation}
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 truncate max-w-[240px]">
                      {selectedEmp.location}
                    </div>

                    {/* QR Code in Badge */}
                    <div className="mt-4 p-2 bg-white rounded-xl shadow-inner border border-zinc-200">
                      {qrDataUrl ? (
                        <Image
                          src={qrDataUrl}
                          alt="QR Code"
                          width={96}
                          height={96}
                          className="w-24 h-24"
                        />
                      ) : (
                        <div className="w-24 h-24 flex items-center justify-center bg-zinc-100 text-zinc-400 text-xs">
                          Generating...
                        </div>
                      )}
                    </div>
                    <div className="text-[9px] text-zinc-600 dark:text-zinc-400 uppercase tracking-widest font-semibold mt-1">
                      Scan to Verify Credentials
                    </div>
                  </div>

                  {/* Badge Bottom Footer */}
                  <div className="bg-zinc-100 dark:bg-zinc-800/80 px-4 py-2 text-center border-t border-zinc-200 dark:border-zinc-700/80">
                    <div className="font-mono text-[11px] font-bold text-zinc-700 dark:text-zinc-300">
                      {selectedEmp.id}
                    </div>
                    <div className="text-[9px] text-zinc-600 dark:text-zinc-400">
                      hindustaan.in • ISO & Security Certified
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Details & Direct Test */}
              <div className="flex flex-col gap-4">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center">
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <QrCode className="w-4 h-4 text-emerald-500" />
                    High-Resolution Vector QR Code
                  </div>

                  <div className="p-4 bg-white rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 shadow-sm mb-4">
                    {qrDataUrl ? (
                      <Image
                        src={qrDataUrl}
                        alt="QR Code Preview"
                        width={200}
                        height={200}
                        className="w-48 h-48"
                      />
                    ) : (
                      <div className="w-48 h-48 flex items-center justify-center bg-zinc-100 text-zinc-400 text-xs">
                        Generating QR...
                      </div>
                    )}
                  </div>

                  {/* Direct Download Button */}
                  <button
                    type="button"
                    onClick={handleDownloadQR}
                    className="w-full mb-4 py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download QR Code Image (PNG)</span>
                  </button>

                  <div className="w-full space-y-2 text-left">
                    <label
                      htmlFor="qr-url-input"
                      className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block"
                    >
                      Secure Verification URL (Embedded in QR)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        id="qr-url-input"
                        type="text"
                        readOnly
                        value={verificationUrl}
                        className="flex-1 px-3 py-2 rounded-xl text-xs font-mono bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300"
                      />
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors border border-zinc-200 dark:border-zinc-700 shrink-0"
                      >
                        {copiedLink ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Direct Manual Route Comparison Testing Box */}
                <div className="bg-zinc-100/80 dark:bg-zinc-900/60 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 text-xs space-y-3">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Test Direct vs QR Scan Access:
                  </div>

                  <div className="space-y-2">
                    {/* Test 1: Direct Manual URL (Blocked) */}
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-900 dark:text-rose-200 flex items-center justify-between gap-2">
                      <div>
                        <div className="font-semibold text-[11px] flex items-center gap-1">
                          <Lock className="w-3 h-3 text-rose-500" />
                          Manual URL (No Token):
                        </div>
                        <code className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400">
                          /verify/{selectedEmp.id}
                        </code>
                      </div>
                      <Link
                        href={`/verify/${selectedEmp.id}`}
                        target="_blank"
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-rose-600 text-white hover:bg-rose-500 shrink-0"
                      >
                        Try Direct
                      </Link>
                    </div>

                    {/* Test 2: QR URL (Authorized) */}
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200 flex items-center justify-between gap-2">
                      <div>
                        <div className="font-semibold text-[11px] flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-500" />
                          QR Scan URL (With Secret Token):
                        </div>
                        <code className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400">
                          /verify/{selectedEmp.id}?token=
                          {selectedEmp.verificationToken.slice(0, 10)}...
                        </code>
                      </div>
                      <Link
                        href={`/verify/${selectedEmp.id}?token=${selectedEmp.verificationToken}`}
                        target="_blank"
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-600 text-white hover:bg-emerald-500 shrink-0"
                      >
                        Scan Link
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-8 flex items-center justify-center p-12 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-zinc-400 text-sm">
            No employee selected. Click &quot;Add Employee&quot; to create one.
          </div>
        )}
      </div>

      {/* ─── EDIT MODAL ─── */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="absolute right-5 top-5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Edit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Edit Employee Details</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  ID: {formData.id}
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="edit-name"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="edit-name"
                    type="text"
                    required
                    value={formData.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="edit-status"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Employment Status
                  </label>
                  <select
                    id="edit-status"
                    value={formData.status || "Active"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as "Active" | "Inactive",
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="edit-designation"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Designation / Title *
                  </label>
                  <input
                    id="edit-designation"
                    type="text"
                    required
                    value={formData.designation || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="edit-emergencyContact"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Emergency Contact No.
                  </label>
                  <input
                    id="edit-emergencyContact"
                    type="text"
                    value={formData.emergencyContact || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        emergencyContact: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="edit-email"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Official Email
                  </label>
                  <input
                    id="edit-email"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="edit-phone"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Contact Phone
                  </label>
                  <input
                    id="edit-phone"
                    type="text"
                    value={formData.phone || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="edit-location"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Office / Hub Location
                  </label>
                  <input
                    id="edit-location"
                    type="text"
                    value={formData.location || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="edit-photo"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Photo URL (e.g. /p1.png or external link)
                  </label>
                  <input
                    id="edit-photo"
                    type="text"
                    value={formData.photo || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, photo: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="edit-bio"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Short Bio / Role Summary
                  </label>
                  <textarea
                    id="edit-bio"
                    rows={2}
                    value={formData.bio || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 disabled:opacity-50"
                >
                  {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── ADD MODAL ─── */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="absolute right-5 top-5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Add New Employee</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Unique ID and QR security token will be auto-generated
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveAdd} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="add-name"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="add-name"
                    type="text"
                    required
                    placeholder="e.g. Aditi Roy"
                    value={formData.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="add-designation"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Designation / Title *
                  </label>
                  <input
                    id="add-designation"
                    type="text"
                    required
                    placeholder="e.g. AI Engineer"
                    value={formData.designation || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="add-emergencyContact"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Emergency Contact No.
                  </label>
                  <input
                    id="add-emergencyContact"
                    type="text"
                    placeholder="+91 88035 55558"
                    value={formData.emergencyContact || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        emergencyContact: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="add-status"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Employment Status
                  </label>
                  <select
                    id="add-status"
                    value={formData.status || "Active"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as "Active" | "Inactive",
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="add-email"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Official Email
                  </label>
                  <input
                    id="add-email"
                    type="email"
                    placeholder="e.g. aditi@hindustaan.in"
                    value={formData.email || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="add-phone"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Contact Phone
                  </label>
                  <input
                    id="add-phone"
                    type="text"
                    value={formData.phone || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="add-location"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Office / Hub Location
                  </label>
                  <input
                    id="add-location"
                    type="text"
                    placeholder="e.g. Patna HQ / Bangalore Innovation Hub, India"
                    value={formData.location || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="add-photo"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Photo Path / URL
                  </label>
                  <input
                    id="add-photo"
                    type="text"
                    placeholder="/logo.png or /p1.png"
                    value={formData.photo || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, photo: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="add-bio"
                    className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1"
                  >
                    Short Bio / Role Summary
                  </label>
                  <textarea
                    id="add-bio"
                    rows={2}
                    placeholder="Brief description of responsibilities..."
                    value={formData.bio || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 disabled:opacity-50"
                >
                  {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Add &amp; Generate QR</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── DELETE CONFIRMATION MODAL ─── */}
      {isDeleteModalOpen && selectedEmp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center relative">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              Delete Employee Record?
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Are you sure you want to permanently delete{" "}
              <strong className="text-zinc-900 dark:text-zinc-100">
                {selectedEmp.name}
              </strong>{" "}
              ({selectedEmp.id})? Their QR verification badge and profile will
              no longer be accessible.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                disabled={saving}
                className="px-5 py-2.5 rounded-xl text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteEmployee}
                disabled={saving}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-1.5 shadow-md transition-all disabled:opacity-50"
              >
                {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                <span>Yes, Delete Record</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
