const DEFAULT_APP_API_BASE_URL = "https://prosphere.runasp.net";

export const APP_API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.trim() || DEFAULT_APP_API_BASE_URL;


export function getAppApiBaseUrl(): string {
    return APP_API_BASE_URL;
}
