import { LoaderCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export function ConfirmEmailLoadingContent() {
    return (
        <div className="w-full max-w-md rounded-2xl border border-border bg-background px-8 py-12 shadow-lg">
            <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />

                    <div className="relative flex size-24 items-center justify-center rounded-full border-4 border-primary/10">
                        <LoaderCircle className="size-10 animate-spin text-primary" />
                    </div>
                </div>

                <h2 className="text-4xl font-bold tracking-tight">
                    Verifying your email...
                </h2>

                <div className="mt-4 space-y-1 text-muted-foreground">
                    <p>Please wait while we confirm your email address.</p>
                    <p>This will only take a few seconds.</p>
                </div>

                <div className="mt-10 flex w-full items-start gap-4 rounded-xl border border-border bg-muted/40 p-4 text-left">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <ShieldCheck className="size-5 text-primary" />
                    </div>

                    <div>
                        <p className="font-medium text-foreground">
                            Secure verification in progress
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Please don't close this page while we verify your
                            account.
                        </p>
                    </div>
                </div>

                <Button
                    variant="link"
                    className="mt-8 text-primary"
                    disabled
                >
                    ← Back to Login
                </Button>
            </div>
        </div>
    );
}