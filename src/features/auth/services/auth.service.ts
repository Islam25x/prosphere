import { apiClient } from "@/infrastructure/api/api-client";

import { AUTH_ENDPOINTS } from "../constants/auth-endpoints";
import type {
  AuthenticationTokenDto,
  LoginPayload,
  registerPayload,
} from "../types/auth.types";
import type { ApiResult } from "@/shared/types/result";

export const authService = {
  login(
    payload: LoginPayload,
  ): Promise<ApiResult<AuthenticationTokenDto>> {
    return apiClient.post<
      ApiResult<AuthenticationTokenDto>,
      LoginPayload
    >(
      AUTH_ENDPOINTS.login,
      payload,
    );
  },
  register(
    payload: registerPayload,
  ): Promise<ApiResult<void>> {
    return apiClient.post<
      ApiResult<void>,
      registerPayload
    >(
      AUTH_ENDPOINTS.register,
      payload,
    );
  },
  confirmEmail(
    payload: { userId: string; token: string },
  ): Promise<ApiResult<AuthenticationTokenDto>> {
    const { userId, token } = payload;

    return apiClient.put<ApiResult<AuthenticationTokenDto>>(
      `${AUTH_ENDPOINTS.confirmEmail}?userId=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`
    );
  }
};