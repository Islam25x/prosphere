import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

import { PasswordInput } from "../../../shared/components/ui/password-input";

import type { LoginFormValues } from "../schemas/auth.schemas";


type LoginFormFieldsProps = {
  errors: FieldErrors<LoginFormValues>;
  onForgotPassword: () => void;
  register: UseFormRegister<LoginFormValues>;
};

export function LoginFormFields({
  errors,
  onForgotPassword,
  register,
}: LoginFormFieldsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Input
        id="login-email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordInput
        id="login-password"
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        toggleLabel="Toggle login password visibility"
        {...register("password")}
      />
      <div className="flex items-center justify-between">
        <Input
          id="remember-me"
          label="Remember me"
          type="checkbox"
          {...register("rememberMe")}
        />
        <Button type="button" variant="link" fullWidth={false} onClick={onForgotPassword}>
          Forgot Password
        </Button>
      </div>
    </div>
  );
}
