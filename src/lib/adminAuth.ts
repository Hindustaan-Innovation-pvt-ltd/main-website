import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "hi_admin_session";

// Default secure PIN for the Hindustaan Innovations Admin Portal
// Can be customized via ADMIN_PORTAL_PIN in .env.local
export const EXPECTED_ADMIN_PIN =
  process.env.ADMIN_PORTAL_PIN || "HI@Admin2026";

// A hash-like signature token stored in the cookie
export const ADMIN_SESSION_TOKEN = "hi_authenticated_admin_session_token_v1";

/**
 * Validates the admin PIN provided by user
 */
export function isValidAdminPin(pin?: string | null): boolean {
  if (!pin || typeof pin !== "string") return false;
  return pin.trim() === EXPECTED_ADMIN_PIN.trim();
}

/**
 * Checks server-side if current request has a valid admin session cookie
 */
export async function isAuthenticatedAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME);
  return session?.value === ADMIN_SESSION_TOKEN;
}
