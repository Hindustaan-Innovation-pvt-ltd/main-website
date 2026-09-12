import type { Metadata } from "next";
import { AccessDeniedCard } from "@/components/employee/AccessDeniedCard";
import { VerifiedProfileCard } from "@/components/employee/VerifiedProfileCard";
import { verifyEmployeeAccess } from "@/lib/employeeServer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Official Employee Verification",
  description:
    "Secure Hindustaan Innovations Private Limited Employee Identity Verification Portal",
  robots: {
    index: false,
    follow: false,
  },
};

interface VerifyPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}

export default async function VerifyPage({
  params,
  searchParams,
}: VerifyPageProps) {
  const { id } = await params;
  const { token } = await searchParams;

  const { isValid, employee, reason } = verifyEmployeeAccess(id, token);

  if (!isValid || !employee) {
    return <AccessDeniedCard reason={reason} requestedId={id} />;
  }

  return <VerifiedProfileCard employee={employee} />;
}
