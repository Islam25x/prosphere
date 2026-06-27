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

export function useRegisterMutation() {
  return useMutation({
    mutationFn: authService.register,

    onSuccess(result) {
      toast.success(result.successMessage || "Registration successful. Please check your email to confirm your account.");
    },

    onError(error) {
      toast.error(error.message);
    },
  });
}


export function useConfirmEmailMutation() {
  return useMutation({
    mutationFn: authService.confirmEmail,

    onSuccess(result) {
      setAuthSession({
        accessToken: result.value!.token,
        refreshToken: result.value!.refreshToken,
      });
      toast.success("Email confirmed successfully.");
    },

    onError(error) {
      toast.error(error.message);
    },
  });
}