import { AuthLayout } from "@/features/auth/components/auth-layout";
import { AuthSwitch } from "@/features/auth/components/auth-switch";

export default function Home() {
  return (
    <AuthLayout>
      <AuthSwitch />
    </AuthLayout>
  );
}
