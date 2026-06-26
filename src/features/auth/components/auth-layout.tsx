import type { PropsWithChildren } from "react";


export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto grid min-h-screen grid-cols-1 gap-4 bg-background px-4 md:grid-cols-12 lg:grid-cols-12">
      {children}
    </div>
  );
}
