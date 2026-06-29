import { IdentityVerificationForm } from "@/features/verification/components/identity-form";
import { OnboardingLayout } from "@/shared/layout/onboarding-layout";
import { AuthLottie } from "@/features/auth/components/auth-lottie";

export default function VerificationPage() {
    return (
        <OnboardingLayout form={<IdentityVerificationForm />} illustration={<AuthLottie />} />
    );
}