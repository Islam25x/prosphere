import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const inputVariants = cva(
  "rounded-lg border p-2 transition focus:outline-none focus:ring-ring",
  {
    variants: {
      state: {
        default: "border-border",
        error: "border-destructive",
      },
      inputSize: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      state: "default",
      inputSize: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, id, inputSize, label, type = "text", ...props }, ref) => {
    const isCheckbox = type === "checkbox";

    return (
      <div
        className={
          isCheckbox ? "me-auto flex flex-row-reverse" : "flex w-full flex-col gap-1"
        }
      >
        {label ? (
          <label htmlFor={id} className="ms-2 text-sm font-medium content-center">
            {label}
          </label>
        ) : null}

        <input
          id={id}
          ref={ref}
          type={type}
          className={cn(
            inputVariants({ state: error ? "error" : "default", inputSize }),
            className,
          )}
          {...props}
        />

        {error ? <span className="text-xs text-destructive">{error}</span> : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
