import employeesData from "@/employees.json";

export interface Employee {
  id: string;
  name: string;
  designation: string;
  department: string;
  status: "Active" | "Inactive";
  joiningDate: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
  bio?: string;
  verificationToken: string;
  bloodGroup?: string;
  emergencyContact?: string;
}

export const EMPLOYEES: Employee[] = employeesData as Employee[];

/**
 * Fetch all employees
 */
export function getAllEmployees(): Employee[] {
  return EMPLOYEES;
}

/**
 * Fetch an employee by ID (case-insensitive)
 */
export function getEmployeeById(id: string): Employee | undefined {
  if (!id) return undefined;
  const cleanId = id.trim().toLowerCase();
  return EMPLOYEES.find(
    (emp) =>
      emp.id.toLowerCase() === cleanId ||
      emp.id.toLowerCase().replace(/[^a-z0-9]/g, "") ===
        cleanId.replace(/[^a-z0-9]/g, ""),
  );
}

/**
 * Validates whether the provided token matches the employee's verification token.
 * Returns the employee record if valid, null otherwise.
 */
export function verifyEmployeeAccess(
  id: string,
  token?: string | null,
): {
  isValid: boolean;
  employee?: Employee;
  reason?: "NOT_FOUND" | "INVALID_TOKEN" | "MISSING_TOKEN" | "INACTIVE";
} {
  const employee = getEmployeeById(id);
  if (!employee) {
    return { isValid: false, reason: "NOT_FOUND" };
  }

  if (!token || typeof token !== "string") {
    return { isValid: false, employee, reason: "MISSING_TOKEN" };
  }

  // Constant-time like comparison to avoid timing leak
  const cleanToken = token.trim();
  if (cleanToken !== employee.verificationToken) {
    return { isValid: false, employee, reason: "INVALID_TOKEN" };
  }

  if (employee.status !== "Active") {
    return { isValid: false, employee, reason: "INACTIVE" };
  }

  return { isValid: true, employee };
}

/**
 * Builds the secure QR verification URL for an employee.
 */
export function buildVerificationUrl(
  employee: Employee,
  baseUrl?: string,
): string {
  const origin =
    baseUrl ||
    (typeof window !== "undefined"
      ? window.location.origin
      : "https://hindustaan.in");
  return `${origin}/verify/${encodeURIComponent(employee.id)}?token=${encodeURIComponent(employee.verificationToken)}`;
}
