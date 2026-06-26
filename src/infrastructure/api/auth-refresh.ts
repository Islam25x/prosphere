import {
  getAuthSessionSnapshot,
  clearAuthSessionState,
  patchAuthSession,
} from "../auth/auth-session";
import { ApiError } from "./api-error";
import { APP_API_BASE_URL } from "../config/env"
import { decodeJwtSegment } from "../../shared/utils/jwt";
import { unwrapEnvelope } from "../../shared/utils/unwrap-envelope";
import { isRecord } from "../../shared/utils/type-guards";

interface RefreshTokenResponse {
  token: string;
  refreshToken: string;
  expiresAt?: Date;
}
// دي عشان لو حصل 4 401 بسبب ان التوكين مات يرجع ريفريش توكين واحده عشان برومس و اويت و كده 

let refreshPromise: Promise<string | null> | null = null;



// بيشيل الفواصل في الاسترينج عشان لو التوكين فاضي يتعامل علي انه غير موجود

function toTrimmedString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const trimmedValue = value.trim();
  return trimmedValue ? trimmedValue : null;
}


// JWT Token
// ↓
// استخرج الـ Payload
// ↓
// اقرأ exp (وقت انتهاء التوكن)

function decodeJwtPayload(token: string): { exp?: number } | null {
  const payloadSegment = token.split(".")[1];

  if (!payloadSegment) {
    return null;
  }

  try {
    const payload = decodeJwtSegment(payloadSegment);
    return JSON.parse(payload) as { exp?: number };
  } catch {
    return null;
  }
}

// هاتلي تاريخ انتهاء التوكن بأي طريقة متاحة 

function readExpiresAt(
  token: string,
  expiresAtValue: unknown,
  expiresInValue: unknown,
): Date | undefined {

  // بيحول الاكسبريس ات ل ديت مفهوم

  if (typeof expiresAtValue === "string") {
    const parsedDate = new Date(expiresAtValue);

    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
  }

  if (typeof expiresInValue === "number" && Number.isFinite(expiresInValue)) {
    return new Date(Date.now() + expiresInValue * 1000);
  }

  const payload = decodeJwtPayload(token);
  if (typeof payload?.exp === "number" && Number.isFinite(payload.exp)) {
    return new Date(payload.exp * 1000);
  }

  return undefined;
}

// Response من refresh-token endpoint
// ↓
// هل الرد صالح؟
// ↓
// هل فيه token؟
// ↓
// هل أقدر أطلع expiresAt؟
// ↓
// ارجع RefreshTokenResponse

// أو

// الرد بايظ
// ↓
// null أو ApiError

// بتحول الاكسبريس ان ل ات و بتتاكد ان ريسبونس مظبوط 

async function parseRefreshResponse(response: Response): Promise<RefreshTokenResponse | null> {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return null;
  }

  let payload: unknown;


  try {
    payload = await response.json();


  } catch (error) {
    throw new ApiError(
      "Refresh token response was not valid JSON.",
      response.status,
      "INVALID_RESPONSE",
      undefined,
      error,
    );
  }

  const responseData = unwrapEnvelope(payload);


  if (!isRecord(responseData)) {
    return null;
  }

  const token = toTrimmedString(responseData.token);

  if (!token) {
    return null;
  }
  const refreshToken = toTrimmedString(
    responseData.refreshToken,
  );

  if (!refreshToken) {
    return null;
  }

  return {
    token,
    refreshToken,
    expiresAt: readExpiresAt(token, responseData.expiresAt, responseData.expiresIn),
  };
}

async function performRefresh(): Promise<string | null> {
  try {
    const authSession = getAuthSessionSnapshot();
    if (!authSession?.refreshToken) {
      clearAuthSessionState();
      return null;
    }
    const response = await fetch(`${APP_API_BASE_URL}/api/Auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: authSession.refreshToken,
      }),
    });

    if (!response.ok) {
      clearAuthSessionState();
      return null;
    }

    const refreshResponse = await parseRefreshResponse(response);

    if (!refreshResponse) {
      clearAuthSessionState();
      return null;
    }

    patchAuthSession((currentSession) => {
      if (!currentSession) {
        return null;
      }

      return {
        ...currentSession,
        accessToken: refreshResponse.token,
        refreshToken: refreshResponse.refreshToken,
        expiresAt: refreshResponse.expiresAt ?? currentSession.expiresAt,
      };
    });
    return refreshResponse.token;
  } catch {
    clearAuthSessionState();
    return null;
  }
}

export async function refreshAccessToken(): Promise<string | null> {
  if (!refreshPromise) {
    // All pending 401 retries await the same refresh to avoid token rotation races.
    refreshPromise = performRefresh().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}
