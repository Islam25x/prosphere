"use client";

import * as React from "react";
import { Toaster } from "sonner";

import { ReactQueryProvider } from "./react-query-provider";

export function AppProviders({ children }: React.PropsWithChildren) {
  return (
    <ReactQueryProvider>
      {children}
      <Toaster richColors position="top-right" />
    </ReactQueryProvider>
  );
}
