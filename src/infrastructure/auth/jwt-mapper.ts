import { CurrentUser } from "@/features/auth/types/auth.types";

export function mapJwtPayload(
    payload: Record<string, unknown>,
): CurrentUser {
    return {
        id: String(
            payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
        ),

        name: String(
            payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        ),

        email: String(
            payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
        ),

        role: String(
            payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        ),

        exp: Number(payload.exp),
    };
}