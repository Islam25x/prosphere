import { Check } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export function ConfirmEmailContent() {

    return (
        <div className="flex w-full max-w-md flex-col items-center gap-6 text-center border border-border py-12 px-6 shadow-md rounded-lg">
            <div className="flex size-20 items-center justify-center rounded-full bg-green-500/10 shadow-[0_0_32px_rgba(34,197,94,0.22)]">
                <Check className="size-10 text-green-600" strokeWidth={2.5} />
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="text-4xl font-bold">Email Verified!</h2>
                <div className="space-y-1 text-muted-foreground">
                    <p>Your email has been successfully verified.</p>
                    <p>Your account is now ready to use.</p>
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
