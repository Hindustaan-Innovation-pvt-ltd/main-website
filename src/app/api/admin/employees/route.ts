import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/adminAuth";
import type { Employee } from "@/lib/employee";

const EMPLOYEES_FILE = path.join(process.cwd(), "src", "employees.json");

async function readEmployeesFile(): Promise<Employee[]> {
  try {
    const data = await fs.readFile(EMPLOYEES_FILE, "utf-8");
    return JSON.parse(data) as Employee[];
  } catch (err) {
    console.error("Error reading employees file:", err);
    return [];
  }
}

async function writeEmployeesFile(employees: Employee[]): Promise<void> {
  await fs.writeFile(
    EMPLOYEES_FILE,
    JSON.stringify(employees, null, 2),
    "utf-8",
  );
}

/**
 * GET all employees (admin only)
 */
export async function GET() {
  const isAuthed = await isAuthenticatedAdmin();
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const employees = await readEmployeesFile();
  return NextResponse.json(employees);
}

/**
 * POST: Add a new employee
 */
export async function POST(request: Request) {
  const isAuthed = await isAuthenticatedAdmin();
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const employees = await readEmployeesFile();

    // Auto-generate employee ID if not provided
    const nextNum = employees.length + 1;
    const generatedId = `HI-EMP-${new Date().getFullYear()}-${String(nextNum).padStart(3, "0")}`;
    const id = body.id?.trim() || generatedId;

    // Check duplicate ID
    if (employees.some((e) => e.id.toLowerCase() === id.toLowerCase())) {
      return NextResponse.json(
        { error: `Employee ID "${id}" already exists.` },
        { status: 400 },
      );
    }

    // Auto-generate secure verification token
    const verificationToken =
      body.verificationToken?.trim() ||
      `hi_sec_${crypto.randomBytes(12).toString("hex")}`;

    const newEmployee: Employee = {
      id,
      name: body.name?.trim() || "New Employee",
      designation: body.designation?.trim() || "Software Engineer",
      status: body.status === "Inactive" ? "Inactive" : "Active",
      email: body.email?.trim() || `emp${nextNum}@hindustaan.in`,
      phone: body.phone?.trim() || "+91 88035 55558",
      location: body.location?.trim() || "Patna / Bangalore Hub, India",
      photo: body.photo?.trim() || "/logo.png",
      bio: body.bio?.trim() || "",
      verificationToken,
      emergencyContact: body.emergencyContact?.trim() || "+91 88035 55558",
    };

    employees.push(newEmployee);
    await writeEmployeesFile(employees);

    try {
      revalidatePath("/verify", "layout");
      revalidatePath("/private/employee-badges");
    } catch (e) {
      console.error("Revalidation error:", e);
    }

    return NextResponse.json(
      { success: true, employee: newEmployee },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error adding employee:", error);
    return NextResponse.json(
      { error: "Failed to create employee." },
      { status: 500 },
    );
  }
}

/**
 * PUT: Update an existing employee
 */
export async function PUT(request: Request) {
  const isAuthed = await isAuthenticatedAdmin();
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Employee ID is required." },
        { status: 400 },
      );
    }

    const employees = await readEmployeesFile();
    const index = employees.findIndex(
      (e) => e.id.toLowerCase() === id.trim().toLowerCase(),
    );

    if (index === -1) {
      return NextResponse.json(
        { error: "Employee not found." },
        { status: 404 },
      );
    }

    const existing = employees[index];

    const updatedEmployee: Employee = {
      id: existing.id,
      name: body.name !== undefined ? body.name.trim() : existing.name,
      designation:
        body.designation !== undefined
          ? body.designation.trim()
          : existing.designation,
      status: body.status === "Inactive" ? "Inactive" : "Active",
      email: body.email !== undefined ? body.email.trim() : existing.email,
      phone: body.phone !== undefined ? body.phone.trim() : existing.phone,
      location:
        body.location !== undefined ? body.location.trim() : existing.location,
      photo: body.photo !== undefined ? body.photo.trim() : existing.photo,
      bio: body.bio !== undefined ? body.bio.trim() : existing.bio,
      verificationToken:
        existing.verificationToken ||
        `hi_sec_${crypto.randomBytes(12).toString("hex")}`,
      emergencyContact:
        body.emergencyContact !== undefined
          ? body.emergencyContact.trim()
          : existing.emergencyContact,
    };

    employees[index] = updatedEmployee;
    await writeEmployeesFile(employees);

    try {
      revalidatePath("/verify", "layout");
      revalidatePath("/private/employee-badges");
    } catch (e) {
      console.error("Revalidation error:", e);
    }

    return NextResponse.json({ success: true, employee: updatedEmployee });
  } catch (error) {
    console.error("Error updating employee:", error);
    return NextResponse.json(
      { error: "Failed to update employee." },
      { status: 500 },
    );
  }
}

/**
 * DELETE: Remove an employee by ID
 */
export async function DELETE(request: Request) {
  const isAuthed = await isAuthenticatedAdmin();
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get("id");

    if (!id) {
      const body = await request.json().catch(() => ({}));
      id = body.id;
    }

    if (!id) {
      return NextResponse.json(
        { error: "Employee ID is required." },
        { status: 400 },
      );
    }

    const employees = await readEmployeesFile();
    const initialCount = employees.length;
    const filtered = employees.filter(
      (e) => e.id.toLowerCase() !== id.trim().toLowerCase(),
    );

    if (filtered.length === initialCount) {
      return NextResponse.json(
        { error: "Employee not found." },
        { status: 404 },
      );
    }

    await writeEmployeesFile(filtered);

    try {
      revalidatePath("/verify", "layout");
      revalidatePath("/private/employee-badges");
    } catch (e) {
      console.error("Revalidation error:", e);
    }

    return NextResponse.json({
      success: true,
      message: `Employee ${id} deleted.`,
    });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return NextResponse.json(
      { error: "Failed to delete employee." },
      { status: 500 },
    );
  }
}
