import { requestJson } from "./http";

type ApiClientOptions = Omit<RequestInit, "body" | "method"> & {
    withAuth?: boolean;
    baseUrl?: string;
};

export const apiClient = {
    get<T>(
        path: string,
        options?: ApiClientOptions,
    ): Promise<T> {
        return requestJson<T>(path, {
            ...options,
            method: "GET",
        });
    },

    post<TResponse, TBody = unknown>(
        path: string,
        body?: TBody,
        options?: ApiClientOptions,
    ): Promise<TResponse> {
        return requestJson<TResponse>(path, {
            ...options,
            method: "POST",
            body: body instanceof FormData ? body : JSON.stringify(body),
        });
    },

    put<TResponse, TBody = unknown>(
        path: string,
        body?: TBody,
        options?: ApiClientOptions,
    ): Promise<TResponse> {
        return requestJson<TResponse>(path, {
            ...options,
            method: "PUT",
            body: body instanceof FormData ? body : JSON.stringify(body),
        });
    },

    patch<TResponse, TBody = unknown>(
        path: string,
        body?: TBody,
        options?: ApiClientOptions,
    ): Promise<TResponse> {
        return requestJson<TResponse>(path, {
            ...options,
            method: "PATCH",
            body: body instanceof FormData ? body : JSON.stringify(body),
        });
    },

    delete<T>(
        path: string,
        options?: ApiClientOptions,
    ): Promise<T> {
        return requestJson<T>(path, {
            ...options,
            method: "DELETE",
        });
    },
};