import { ReactNode } from "react";
import MainHeader from "@/app/(layout)/(layout)/_components/header";
import Providers from "@/providers";
import ToastContainer from "@/components/UI/Toast/Organisms/ToastContainer";
import Modal from "@/components/Pages/Modal";
import LoginContainer from "@/components/Organisms/LoginContainer";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
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

export default Layout;
