"use client";

import * as React from "react";

import { Button } from "@/shared/components/ui/button";


import { RegisterFormFields } from "./register-form-fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterFormValues } from "../schemas/auth.schemas";
import { useRegisterMutation } from "../hooks/use-auth-mutations";

type RegisterFormProps = {
  onLoginClick: () => void;
};

export function RegisterForm({ onLoginClick }: RegisterFormProps) {
  const { mutate: registerMutation, isPending } = useRegisterMutation();

  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      gender: "Male",
      role: "Creator",
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    registerMutation(values);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold">Create account</h2>
        <p className="text-muted-foreground">Join Idea Hub</p>
      </div>

      <RegisterFormFields
        register={register}
        errors={errors}
        control={control}
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating account..." : "Register"}
      </Button>

      <p className="text-center">
        Already have an account?{" "}
        <Button type="button" variant="link" fullWidth={false} onClick={onLoginClick}>
          Login
        </Button>
      </p>
    </form>
  );
}
