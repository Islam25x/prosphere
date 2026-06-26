"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { setAuthSession } from "@/infrastructure/auth/auth-session";
import { toast } from "sonner";

export function useLoginMutation() {
  return useMutation({
    mutationFn: authService.login,

    onSuccess(result) {
      setAuthSession({
        accessToken: result.value!.token,
        refreshToken: result.value!.refreshToken,
      });
    },

    onError(error) {
      toast.error(error.message);
    },
  });
}

