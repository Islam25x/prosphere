import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/shared/routes";


export function VerificationWelcome() {
    return (
        <div className="flex flex-col gap-8 mx-auto max-w-lg border rounded-xl p-8 shadow-md bg-white">
            <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight">
                    Identity Verification
                </h1>

                <p className="text-muted-foreground text-lg leading-8">
                    To help keep ProSphere secure and trustworthy, we need to verify your
                    identity before unlocking all platform features. The process only
                    takes a few minutes and your documents will be reviewed by our team.
                </p>
            </div>

            <div className="rounded-xl border bg-muted/40 p-5">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    What you'll need
                </h2>

                <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• A clear photo of the front of your ID.</li>
                    <li>• A clear photo of the back of your ID.</li>
                    <li>• A selfie while holding your ID.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <Link href={ROUTES.verification.identityVerification}>
                    <Button size="lg" className="w-full">
                        Verify Now
                    </Button>
                </Link>

                <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="w-full"
                >
                    <Link href="/">
                        Skip for now
                    </Link>
                </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
                You can skip this step and complete your verification later from your
                account settings.
            </p>
        </div>
    );
}