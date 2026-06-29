import { OnboardingLayout } from "../../../shared/layout/onboarding-layout";
import { AuthLottie } from "../components/auth-lottie";
import { InvalidConfirmationLinkContent } from "../components/confirm-email/invalid-confirmation-link-content";
import { ConfirmEmailContainer } from "./ConfirmEmailContainer";

type ConfirmEmailPageProps = {
    userId?: string;
    token?: string;
};

export function ConfirmEmailPage({
    userId,
    token,
}: ConfirmEmailPageProps) {

    if (!userId || !token) {
        return (
            <OnboardingLayout
                form={<InvalidConfirmationLinkContent />}
                illustration={<AuthLottie />}
            />
        );
    }


    return (
        <AuthLayout
            form={
                <ConfirmEmailContainer userId={userId} token={token} />
            }
            illustration={<AuthLottie />}
        />
    );
}