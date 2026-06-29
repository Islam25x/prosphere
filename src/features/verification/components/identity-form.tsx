"use client"

import { Camera, CreditCard } from "lucide-react";
import { UploadField } from "./upload-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IdentityVerificationFormValues, identityVerificationSchema } from "../schemas/identity.schema";
import { useIdentityMutation } from "../hooks/use-identity-verification";


import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { getAuthSessionSnapshot } from "@/infrastructure/auth/auth-session";



export function IdentityVerificationForm() {

    const { mutate: verifyIdentity, isPending } = useIdentityMutation();

    const form = useForm<IdentityVerificationFormValues>({
        resolver: zodResolver(identityVerificationSchema),
    });

    const {
        handleSubmit,
    } = form

    const userId = getAuthSessionSnapshot()?.user?.id;
    const onSubmit = (values: IdentityVerificationFormValues) => {
        if (!userId) {
            return;
        }
        verifyIdentity({
            userId,
            ...values
        });
    };
    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
            <Card className="w-full max-w-xl rounded-3xl border bg-background p-8 shadow-lg">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Identity Verification
                    </h1>

                    <p className="text-muted-foreground leading-7">
                        Upload the required documents to verify your identity. All files are
                        securely stored and reviewed by our moderation team.
                    </p>
                </div>

                <div className="mt-8 space-y-4">
                    <UploadField
                        form={form}
                        name="idFrontImage"
                        title="Front of National ID"
                        description="JPG, PNG • Max size 1 MB"
                        icon={<CreditCard className="h-5 w-5" />}

                    />

                    <UploadField
                        form={form}
                        name="idBackImage"
                        title="Back of National ID"
                        description="JPG, PNG • Max size 1 MB"
                        icon={<CreditCard className="h-5 w-5" />}

                    />

                    <UploadField
                        form={form}
                        name="selfieWithId"
                        title="Selfie with your ID"
                        description="JPG, PNG • Max size 1 MB"
                        icon={<Camera className="h-5 w-5" />}

                    />
                </div>

                <Button type="submit" className="mt-8 h-12 w-full rounded-xl text-base font-semibold" disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit Verification"}
                </Button>
            </Card>
        </form>

    );
}

