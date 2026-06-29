"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/routes";
import { verificationService } from "../services/verification.service";

export function useIdentityMutation() {
    const router = useRouter();

    return useMutation({
        mutationFn: verificationService.verifyIdentity,

        onSuccess() {
            router.replace(ROUTES.verification.pending);
        },

        onError(error) {
            toast.error(error.message);
        },
    });
}