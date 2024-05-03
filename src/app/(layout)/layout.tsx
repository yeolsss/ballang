import { ReactNode } from "react";
import MainHeader from "@/app/(layout)/_components/header";
import Providers from "@/providers";
import ToastContainer from "@/components/UI/Toast/Organisms/ToastContainer";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Providers>
      <MainHeader />
      {children}
      <ToastContainer />
    </Providers>
  );
}

export default Layout;
