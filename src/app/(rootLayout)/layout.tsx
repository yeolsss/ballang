import { ReactNode } from "react";
import MainHeader from "@/app/(rootLayout)/(subLayout)/_components/header";
import Providers from "@/providers";
import ToastContainer from "@/components/UI/Toast/Organisms/ToastContainer";
import LoginContainer from "@/components/Organisms/LoginContainer";
import { Modal } from "@/components/Pages";

interface Props {
  children: ReactNode;
}

async function RootLayout({ children }: Props) {
  return (
    <Providers>
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
