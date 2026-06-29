import { Fragment } from "react";
import {
    Check,
    CircleCheckBig,
    Clock3,
    House,
    Info,
    Lock,
    Mail,
    Search,
    ShieldCheck,
    UploadCloud,
} from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";

const reviewSteps = [
    {
        label: "Submitted",
        Icon: UploadCloud,
        status: "complete",
    },
    {
        label: "Under Review",
        Icon: Search,
        status: "active",
    },
    {
        label: "Verifying",
        Icon: ShieldCheck,
        status: "pending",
    },
    {
        label: "Completed",
        Icon: CircleCheckBig,
        status: "pending",
    },
] as const;

const nextSteps = [
    {
        text: "Our team will review your documents carefully.",
        Icon: Clock3,
    },
    {
        text: "This usually takes between 24-48 hours.",
        Icon: ShieldCheck,
    },
    {
        text: "You'll receive an email notification once it's complete.",
        Icon: Mail,
    },
] as const;

export function VerificationPending() {
    return (
        <Card className="w-full max-w-xl rounded-3xl border border-border bg-background p-6 shadow-lg sm:p-8">
            <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm">
                    <Clock3 className="h-8 w-8 stroke-[2.5]" />
                </div>

                <div className="min-w-0 pt-1">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Verification Pending
                    </h1>
                    <div className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                        <p>
                            Your verification request has been received and is currently
                            under review by our team.
                        </p>
                    </div>
                </div>
            </div>

            <Card
                variant="outline"
                className="mt-6 rounded-2xl border-border bg-accent/40 px-4 py-5 shadow-none sm:px-6"
            >
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start">
                    {reviewSteps.map(({ label, Icon, status }, index) => (
                        <Fragment key={label}>
                            <div
                                className="flex min-w-0 flex-col items-center text-center"
                            >
                                <div
                                    className={
                                        status === "complete"
                                            ? "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
                                            : status === "active"
                                                ? "flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background text-primary ring-4 ring-primary/10"
                                                : "flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground"
                                    }
                                >
                                    <Icon className="h-5 w-5" />
                                </div>

                                {status === "complete" ? (
                                    <span className="mt-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <Check className="h-2.5 w-2.5" />
                                    </span>
                                ) : (
                                    <span className="mt-4 h-0" />
                                )}

                                <p
                                    className={
                                        status === "active"
                                            ? "mt-2 text-sm font-semibold text-primary"
                                            : status === "complete"
                                                ? "mt-2 text-sm font-semibold text-foreground"
                                                : "mt-2 text-sm font-semibold text-muted-foreground"
                                    }
                                >
                                    {label}
                                </p>
                            </div>

                            {index < reviewSteps.length - 1 ? (
                                <div
                                    className={
                                        index === 0
                                            ? "mt-6 h-px w-9 border-t-2 border-dashed border-primary sm:w-14"
                                            : "mt-6 h-px w-9 border-t-2 border-dashed border-border sm:w-14"
                                    }
                                />
                            ) : null}
                        </Fragment>
                    ))}
                </div>
            </Card>

            <Card
                variant="outline"
                className="mt-5 rounded-2xl border-primary/20 bg-primary/5 p-5 shadow-none"
            >
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Info className="h-4 w-4" />
                    </span>
                    <h2 className="text-base font-bold text-primary">
                        What happens next?
                    </h2>
                </div>

                <div className="mt-4 space-y-3 pl-1 sm:pl-10">
                    {nextSteps.map(({ text, Icon }) => (
                        <div key={text} className="flex items-center gap-3">
                            <Icon className="h-4 w-4 shrink-0 text-primary" />
                            <p className="text-sm leading-5 text-muted-foreground">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </Card>

            <Card
                variant="outline"
                className="mt-4 flex items-start gap-4 rounded-2xl border-primary/20 bg-primary/5 p-4 shadow-none"
            >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Lock className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                    <h2 className="text-sm font-bold text-foreground">
                        Your data is safe and secure
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        All documents are encrypted and protected. We never share your
                        data.
                    </p>
                </div>
            </Card>

            <Button
                variant="outline"
                size="lg"
                className="mt-5 h-12 rounded-xl text-sm font-bold"
            >
                <House className="h-5 w-5" />
                Back to Home
            </Button>
        </Card>
    );
}
