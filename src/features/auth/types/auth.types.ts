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
export type registerPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  gender: 'Male' | 'Female';
  role: 'Creator' | 'Investor' | 'Admin';
};
export type confirmEmailPayload = {
  userId: string;
  token: string;
};