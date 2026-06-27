"use client";

import { useEffect } from "react";

import { useConfirmEmailMutation } from "../hooks/use-auth-mutations";
import { ConfirmEmailLoadingContent } from "../components/confirm-email/ConfirmEmailLoadingContent";
import { ConfirmEmailContent } from "../components/confirm-email/confirm-email-content";
import { InvalidConfirmationLinkContent } from "../components/confirm-email/invalid-confirmation-link-content";

type ConfirmEmailContainerProps = {
    userId: string;
    token: string;
};

export function ConfirmEmailContainer({
    userId,
    token,
}: ConfirmEmailContainerProps) {
    const { mutate: confirmEmail, isPending , isSuccess,isError } = useConfirmEmailMutation();

    useEffect(() => {
        confirmEmail({
            userId,
            token,
        });
    }, [confirmEmail, userId, token]);

    if (isPending) {
        return <ConfirmEmailLoadingContent />;
    }

    if (isSuccess) {
        return <ConfirmEmailContent />;
    }

    if (isError) {
        return <InvalidConfirmationLinkContent />;
    }

}