import { VerificationWelcome } from "@/features/verification/components/verification-welcome";
import { OnboardingLayout } from "@/shared/layout/onboarding-layout";
import { AuthLottie } from "@/features/auth/components/auth-lottie";

export default function VerificationPage() {
    return (
        <OnboardingLayout form={<VerificationWelcome />} illustration={<AuthLottie />} />
    );
}