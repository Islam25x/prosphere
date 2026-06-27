import { AlertTriangle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/components/ui/button";

export function InvalidConfirmationLinkContent() {
    return (
        <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-lg border border-border px-6 py-12 text-center shadow-md">
            <div className="flex size-20 items-center justify-center rounded-full bg-amber-500/10 shadow-[0_0_32px_rgba(245,158,11,0.18)]">
                <AlertTriangle
                    className="size-10 text-amber-500"
                    strokeWidth={2.5}
                />
            </div>

            <div className="space-y-3">
                <h2 className="text-4xl font-bold">
                    Invalid Verification Link
                </h2>

                <div className="space-y-1 text-muted-foreground">
                    <p>
                        This verification link is invalid or incomplete.
                    </p>

                    <p>
                        Please request a new verification email and try again.
                    </p>
                </div>
            </div>

            <Link href="/">
                <Button variant="link">

                    ← Back to Login
                </Button>
            </Link>
        </div>
    );
}