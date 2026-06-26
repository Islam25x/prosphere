"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

import { AuthLottie } from "./auth-lottie";
import { ForgotPasswordModal } from "./forgot-password-modal";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

type AuthMode = "login" | "register";

export function AuthSwitch() {
  const [mode, setMode] = React.useState<AuthMode>("login");
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = React.useState(false);

  return (
    <>
      <div className="flex items-center justify-center sm:col-span-12 md:col-span-6 lg:col-span-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="flex w-full justify-center"
          >
            {mode === "login" ? (
              <LoginForm
                onForgotPassword={() => setIsForgotPasswordOpen(true)}
                onRegisterClick={() => setMode("register")}
              />
            ) : (
              <RegisterForm onLoginClick={() => setMode("login")} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hidden items-center justify-center md:col-span-6 md:flex lg:col-span-6">
        <AuthLottie />
      </div>

      <ForgotPasswordModal
        open={isForgotPasswordOpen}
        onOpenChange={setIsForgotPasswordOpen}
      />
    </>
  );
}
