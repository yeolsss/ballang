"use client";

import { ReactNode } from "react";
import { useModal } from "@/context/modalContext";

interface Props {
  children: ReactNode;
}

function Modal({ children }: Props) {
  const { isOpen, handleIsOpen } = useModal();
  return (
    <>
      {isOpen && (
        <div
          className="bg-black/50 flex h-[100vh] w-[100vw] fixed top-0 left-0 z-20"
          onClick={(e) => handleIsOpen(e, false)}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Modal;
