"use client";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { PropsWithChildren } from "react";
import { ToastProvider } from "@/components/UI/Toast/context/Toast";

function Providers({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <ToastProvider>{children}</ToastProvider>
    </TanstackQueryProvider>
  );
}

export default Providers;
