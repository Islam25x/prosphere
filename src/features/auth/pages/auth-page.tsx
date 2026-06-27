import { AuthLottie } from "../components/auth-lottie";
import { AuthSwitch } from "../components/auth-switch";
import { AuthLayout } from "../layout/auth-layout";

export function AuthPage() {
    return <AuthLayout form={<AuthSwitch />} illustration={<AuthLottie />} />;
}
