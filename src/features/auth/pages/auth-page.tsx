import { AuthLottie } from "../components/auth-lottie";
import { AuthSwitch } from "../components/auth-switch";
import { OnboardingLayout } from "../../../shared/layout/onboarding-layout";

export function AuthPage() {
    return <OnboardingLayout form={<AuthSwitch />} illustration={<AuthLottie />} />;
}
