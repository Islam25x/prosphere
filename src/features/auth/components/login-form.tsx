"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/components/ui/button";

import { loginSchema, type LoginFormValues } from "../schemas/auth.schemas";
import { LoginFormFields } from "./login-form-fields";
import { useLoginMutation } from "../hooks/use-auth-mutations";

type LoginFormProps = {
  onForgotPassword: () => void;
  onRegisterClick: () => void;
};

export function LoginForm({ onForgotPassword, onRegisterClick }: LoginFormProps) {
  const {
    mutate: login,
    isPending,
  } = useLoginMutation();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    login(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-6">
      <h2 className="text-4xl font-bold">Welcome back</h2>
      <p className="-mt-4 text-muted-foreground">Login to continue</p>

      <LoginFormFields
        errors={errors}
        onForgotPassword={onForgotPassword}
        register={register}
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </Button>

      <p className="text-center">
        New here?{" "}
        <Button type="button" variant="link" fullWidth={false} onClick={onRegisterClick}>
          Sign Up
        </Button>
      </p>
    </form>
  );
}
