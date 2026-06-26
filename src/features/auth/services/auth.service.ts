import  { apiClient } from "@/infrastructure/api/api-client";

import { AUTH_ENDPOINTS } from "../constants/auth-endpoints";
import type {
  AuthenticationTokenDto,
  LoginPayload,
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
}
};