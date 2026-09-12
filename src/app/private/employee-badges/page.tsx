import type { Metadata } from "next";
import { AdminLoginGate } from "@/components/employee/AdminLoginGate";
import { EmployeeBadgesDashboard } from "@/components/employee/EmployeeBadgesDashboard";
import { isAuthenticatedAdmin } from "@/lib/adminAuth";
import { getAllEmployees } from "@/lib/employeeServer";

export const metadata: Metadata = {
  title: "Employee Badges & QR Generator",
  description:
    "Internal portal to manage Hindustaan Innovations Private Limited employee QR credentials and printable ID cards.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function EmployeeBadgesPage() {
  const isAuthed = await isAuthenticatedAdmin();

  if (!isAuthed) {
    return <AdminLoginGate />;
  }

  const employees = getAllEmployees();
  return <EmployeeBadgesDashboard employees={employees} />;
}
