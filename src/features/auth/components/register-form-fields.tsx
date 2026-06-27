"use client";

import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { RadioGroup } from "@/shared/components/ui/radio-group";
import { Select } from "@/shared/components/ui/select";
import { Controller } from "react-hook-form";
import type {
  Control,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { PasswordInput } from "../../../shared/components/ui/password-input";
import { RegisterFormValues } from "../schemas/auth.schemas";

type RegisterFormFieldsProps = {
  control: Control<RegisterFormValues>;
  errors: FieldErrors<RegisterFormValues>;
  register: UseFormRegister<RegisterFormValues>;

};

export function RegisterFormFields({
  control,
  register,
  errors
}: RegisterFormFieldsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="firstName" label="First Name" error={errors.firstName?.message} {...register("firstName")} />
        <Input id="lastName" label="Last Name" error={errors.lastName?.message} {...register("lastName")} />
      </div>

      <Input id="username"  label="Username"  error={errors.username?.message} {...register("username")}/>
      <Input id="register-email" label="Email" type="email" error={errors.email?.message} {...register("email")} />
      <PasswordInput
        id="register-password"
        label="Password"
        toggleLabel="Toggle register password visibility"
        error={errors.password?.message}
        {...register("password")}
      />
      <Select id="gender" label="Gender" defaultValue="" error={errors.gender?.message} {...register("gender")}>
        <option value="" disabled>
          Select gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>

      <div className="flex flex-col gap-2">
        <Label>Role</Label>
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <RadioGroup
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              options={[
                { label: "Creator", value: "Creator" },
                { label: "Investor", value: "Investor" },
              ]}
              error={errors.role?.message}
            />
          )}
        />
      </div>
    </div>
  );
}
