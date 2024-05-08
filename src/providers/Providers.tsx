"use client";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { PropsWithChildren } from "react";
import { ToastProvider } from "@/components/UI/Toast/context/Toast";
import { ModalProvider } from "@/context/modalContext";
import { AuthProvider } from "@/context/auth";

function Providers({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <AuthProvider>
        <ModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
      </AuthProvider>
    </TanstackQueryProvider>
  );
}

export default Providers;
