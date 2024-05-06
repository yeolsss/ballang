"use client";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { PropsWithChildren } from "react";
import { ToastProvider } from "@/components/UI/Toast/context/Toast";
import { ModalProvider } from "@/context/modalContext";
import { AuthProvider } from "@/context/auth";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

function Providers({
  children,
  cookie,
}: PropsWithChildren<{ cookie?: RequestCookie | undefined }>) {
  return (
    <TanstackQueryProvider>
      <AuthProvider cookie={cookie}>
        <ModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
      </AuthProvider>
    </TanstackQueryProvider>
  );
}

export default Providers;
