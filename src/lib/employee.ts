import employeesFallback from "@/employees.json";

export interface Employee {
  id: string;
  name: string;
  designation: string;
  status: "Active" | "Inactive";
  email: string;
  phone: string;
  location: string;
  photo: string;
  bio?: string;
  verificationToken: string;
  emergencyContact?: string;
}

export const EMPLOYEES: Employee[] = employeesFallback as Employee[];

/**
 * Builds the secure QR verification URL for an employee.
 * Safe to use on both server and client.
 */
export function buildVerificationUrl(
  employee: Employee,
  baseUrl?: string
): string {
  const origin =
    baseUrl ||
    (typeof window !== "undefined"
      ? window.location.origin
      : "https://hindustaan.in");
  return `${origin}/verify/${encodeURIComponent(employee.id)}?token=${encodeURIComponent(employee.verificationToken)}`;
}
