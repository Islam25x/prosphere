export const AUTH_ENDPOINTS = {
  login: "/api/Auth/login",
  logout: "/api/Auth/logout",
  refreshToken: "/api/Auth/refresh-token",

  register: "/api/Registration/register",
  confirmEmail: "/api/Registration/confirm-email",
  resendRegistrationToken: "/api/Registration/resend-token",

  forgotPassword: "/api/password-recovery/forgot",
  resetPassword: "/api/password-recovery/reset",
  resendPasswordResetToken: "/api/password-recovery/resend-token",
} as const;