"use client";

import * as React from "react";

import { Button } from "@/shared/components/ui/button";

import { RegisterFormFields } from "./register-form-fields";

type RegisterFormProps = {
  onLoginClick: () => void;
};

export function RegisterForm({ onLoginClick }: RegisterFormProps) {
  const [role, setRole] = React.useState("creator");

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex w-full max-w-md flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold">Create account</h2>
        <p className="text-muted-foreground">Join Idea Hub</p>
      </div>

      <RegisterFormFields role={role} onRoleChange={setRole} />

      <Button type="button">Register</Button>

      <p className="text-center">
        Already have an account?{" "}
        <Button type="button" variant="link" fullWidth={false} onClick={onLoginClick}>
          Login
        </Button>
      </p>
    </form>
  );
}
