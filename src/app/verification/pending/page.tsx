import { VerificationPending } from "@/features/verification/components/verification-pending";
import { OnboardingLayout } from "@/shared/layout/onboarding-layout";
import { AuthLottie } from "@/features/auth/components/auth-lottie";

export default function VerificationPage() {
    return (
        <OnboardingLayout form={<VerificationPending />} illustration={<AuthLottie />} />
    );
}