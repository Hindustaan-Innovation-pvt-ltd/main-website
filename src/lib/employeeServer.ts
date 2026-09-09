import fs from "node:fs";
import path from "node:path";
import employeesFallback from "@/employees.json";
import type { Employee } from "./employee";

/**
 * Dynamically fetch all employees from disk on the server
 * so any edits/updates are reflected immediately without server restart.
 */
export function getAllEmployees(): Employee[] {
  try {
    const filePath = path.join(process.cwd(), "src", "employees.json");
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileContent) as Employee[];
    }
  } catch (err) {
    console.error("Error reading employees.json dynamically:", err);
  }
  return employeesFallback as Employee[];
}

/**
 * Fetch an employee by ID (case-insensitive) from fresh server data
 */
export function getEmployeeById(id: string): Employee | undefined {
  if (!id) return undefined;
  const cleanId = id.trim().toLowerCase();
  const employees = getAllEmployees();
  return employees.find(
    (emp) =>
      emp.id.toLowerCase() === cleanId ||
      emp.id.toLowerCase().replace(/[^a-z0-9]/g, "") ===
        cleanId.replace(/[^a-z0-9]/g, "")
  );
}

/**
 * Validates whether the provided token matches the employee's verification token.
 * Returns the employee record if valid, null otherwise.
 */
export function verifyEmployeeAccess(
  id: string,
  token?: string | null
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

  const cleanToken = token.trim();
  if (cleanToken !== employee.verificationToken) {
    return { isValid: false, employee, reason: "INVALID_TOKEN" };
  }

  if (employee.status !== "Active") {
    return { isValid: false, employee, reason: "INACTIVE" };
  }

  return { isValid: true, employee };
}
