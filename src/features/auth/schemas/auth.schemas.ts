import { z } from "zod";

const requiredEmailSchema = z.string().nonempty("Email is required")

const emailSchema = requiredEmailSchema.email("Enter a valid email");

export const passwordSchema = z
  .string()
  .trim()
  .min(8, "Password must be at least 8 characters")
  .max(64, "Password must be at most 64 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")

export const loginSchema = z.object({
  email: requiredEmailSchema,
  password: passwordSchema,
  rememberMe: z.boolean(),
});

export const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters"),

  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters"),

  email: emailSchema,

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  gender: z.enum(["Male", "Female"], {
    message: "Please select a gender",
  }),

  role: z.enum(["Creator", "Investor"], {
    message: "Please select a role",
  }),
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z
  .object({
    token: z.string().min(1, "Reset token is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
export const confirmEmailSchema = z.object({
  token: z.string().min(1, "Confirmation token is required"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
export type ConfirmEmailFormValues = z.infer<typeof confirmEmailSchema>;
