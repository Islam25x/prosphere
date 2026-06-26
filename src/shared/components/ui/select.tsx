import * as React from "react";

import { cn } from "@/shared/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, error, id, label, ...props }, ref) => (
    <div className="flex w-full flex-col gap-1">
      {label ? (
        <label htmlFor={id} className="ms-2 text-sm font-medium">
          {label}
        </label>
      ) : null}

      <select
        id={id}
        ref={ref}
        className={cn(
          "rounded-lg border border-border bg-background p-2 text-base text-foreground transition focus:outline-none focus:ring-2 focus:ring-ring",
          error ? "border-destructive" : null,
          className,
        )}
        {...props}
      >
        {children}
      </select>

      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </div>
  ),
);
Select.displayName = "Select";

export { Select };
