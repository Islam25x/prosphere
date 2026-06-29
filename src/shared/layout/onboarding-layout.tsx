import type { ReactNode } from "react";

type AuthLayoutProps = {
  form: ReactNode;
  illustration: ReactNode;
};

export function OnboardingLayout({ form, illustration }: AuthLayoutProps) {
  return (
    <div className="mx-auto grid min-h-screen grid-cols-1 gap-4 bg-background px-4 md:grid-cols-12 lg:grid-cols-12">
      <div className="flex items-center justify-center sm:col-span-12 md:col-span-6 lg:col-span-6">
        {form}
      </div>

      <div className="hidden items-center justify-center md:col-span-6 md:flex lg:col-span-6">
        {illustration}
      </div>
    </div>
  );
}
