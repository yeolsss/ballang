import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function HomeLayout({ children }: Props) {
  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-none flex flex-col grow w-full items-stretch">
      {children}
    </main>
  );
}

export default HomeLayout;
