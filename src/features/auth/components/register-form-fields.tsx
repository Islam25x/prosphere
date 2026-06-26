"use client";

import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { RadioGroup } from "@/shared/components/ui/radio-group";
import { Select } from "@/shared/components/ui/select";

import { PasswordInput } from "../../../shared/components/ui/password-input";

type RegisterFormFieldsProps = {
  role: string;
  onRoleChange: (value: string) => void;
};

export function RegisterFormFields({
  onRoleChange,
  role,
}: RegisterFormFieldsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="firstName" name="firstName" label="First Name" />
        <Input id="lastName" name="lastName" label="Last Name" />
      </div>

      <Input id="username" name="username" label="Username" />
      <Input id="register-email" name="email" label="Email" type="email" />
      <PasswordInput
        id="register-password"
        name="password"
        label="Password"
        toggleLabel="Toggle register password visibility"
      />
      <PasswordInput
        id="confirm-password"
        name="confirmPassword"
        label="Confirm Password"
        toggleLabel="Toggle confirm password visibility"
      />

      <Select id="gender" name="gender" label="Gender" defaultValue="">
        <option value="" disabled>
          Select gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>

      <div className="flex flex-col gap-2">
        <Label>Role</Label>
        <RadioGroup
          name="role"
          options={[
            { label: "Creator", value: "creator" },
            { label: "Investor", value: "investor" },
          ]}
          value={role}
          onChange={(event) => onRoleChange(event.target.value)}
        />
      </div>
    </div>
  );
}
