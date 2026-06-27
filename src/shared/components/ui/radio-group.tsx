import * as React from "react";

import { cn } from "@/shared/lib/utils";

type RadioOption = {
  label: string;
  value: string;
};

export interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

function RadioGroup({
  className,
  error,
  name,
  onChange,
  options,
  value,
  ...props
}: RadioGroupProps) {
  return (
    <>
      <div className={cn("flex gap-4", className)} role="radiogroup" {...props}>
        {options.map((option) => {
          const id = `${name}-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={id}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <input
                id={id}
                name={name}
                type="radio"
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="size-4 accent-primary focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {option.label}
            </label>
            
          );
        })}
      </div>
      {error && (
        <p className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </>
  );
}

export { RadioGroup };
