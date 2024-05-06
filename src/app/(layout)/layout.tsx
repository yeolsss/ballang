import { ReactNode } from "react";
import MainHeader from "@/app/(layout)/(layout)/_components/header";
import Providers from "@/providers";
import ToastContainer from "@/components/UI/Toast/Organisms/ToastContainer";
import Modal from "@/components/Pages/Modal";
import LoginContainer from "@/components/Organisms/LoginContainer";
import { cookies } from "next/headers";

interface Props {
  children: ReactNode;
}

async function RootLayout({ children }: Props) {
  const cookie = cookies().get("accessToken");

  return (
    <Providers cookie={cookie}>
      <MainHeader />
      {children}
      <ToastContainer />
      <Modal>
        <LoginContainer />
      </Modal>
    </Providers>
  );
}

export default RootLayout;
