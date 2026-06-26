export type AuthSession = {
  accessToken: string;
  refreshToken: string;
  expiresAt?: Date;
};
export type LoginPayload = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type AuthenticationTokenDto = {
  token: string;
  refreshToken: string;
};