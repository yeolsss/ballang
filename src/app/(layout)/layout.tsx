import { ReactNode } from "react";
import MainHeader from "@/app/(layout)/_components/header";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}

export default Layout;
