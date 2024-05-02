import { ReactNode } from "react";
import MainHeader from "@/app/(layout)/_components/header";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
}

export default Layout;
