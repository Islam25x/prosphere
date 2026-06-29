import type { AuthSession } from "@/features/auth/types/auth.types";
export const AUTH_STORAGE_KEY = "prosphere.auth.session";
const PENDING_CONFIRMATION_EMAIL_STORAGE_KEY = "prosphere.auth.pending-confirmation-email";
import { decodeJwtPayload } from "@/shared/utils/jwt";
import { mapJwtPayload } from "./jwt-mapper";


export function readStoredAuthSession(): AuthSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(AUTH_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<AuthSession>;

    if (
      typeof parsed.accessToken !== "string" ||
      !parsed.accessToken ||
      typeof parsed.refreshToken !== "string" ||
      !parsed.refreshToken ||
      !parsed.user
    ) {
      clearStoredAuthSession();
      return null;
    }

    return {
      accessToken: parsed.accessToken,
      refreshToken: parsed.refreshToken,
      user: parsed.user,
    };
  } catch {
    clearStoredAuthSession();
    return null;
  }
}

export function writeStoredAuthSession(
  session: Omit<AuthSession, "user">,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const decodedPayload = decodeJwtPayload(session.accessToken);

  if (!decodedPayload) {
    throw new Error("Invalid access token.");
  }

  const fullSession: AuthSession = {
    ...session,
    user: mapJwtPayload(decodedPayload),
  };

  window.localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify(fullSession),
  );
}

export function clearStoredAuthSession(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function readStoredPendingConfirmationEmail(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(PENDING_CONFIRMATION_EMAIL_STORAGE_KEY)?.trim();
  return value || null;
}

export function writeStoredPendingConfirmationEmail(email: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const normalizedEmail = email.trim();
  if (!normalizedEmail) {
    window.localStorage.removeItem(PENDING_CONFIRMATION_EMAIL_STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(PENDING_CONFIRMATION_EMAIL_STORAGE_KEY, normalizedEmail);
}

export function clearStoredPendingConfirmationEmail(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(PENDING_CONFIRMATION_EMAIL_STORAGE_KEY);
}

export function clearPersistedAuthState(): void {
  if (typeof window === "undefined") {
    return;
  }

  clearStoredAuthSession();
  clearStoredPendingConfirmationEmail();
  window.sessionStorage.clear();
}
