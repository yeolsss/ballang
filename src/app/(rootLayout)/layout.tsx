import { ReactNode } from "react";
import MainHeader from "@/app/(rootLayout)/(layout)/_components/header";
import Providers from "@/providers";
import ToastContainer from "@/components/UI/Toast/Organisms/ToastContainer";
import Modal from "@/components/Pages/Modal";
import LoginContainer from "@/components/Organisms/LoginContainer";

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
