"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface ModalContext {
  isOpen: boolean;
  handleIsOpen: (
    e: React.MouseEvent<HTMLElement> | null,
    isOpen: boolean,
  ) => void;
}

const initialModal: ModalContext = {
  isOpen: false,
  handleIsOpen: () => {},
};

//1. 만든다.
const ModalContext = createContext<ModalContext>(initialModal);

//2. 사용한다.
export const useModal = () => useContext(ModalContext);

//3. 범위를 지정한다.
export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = useCallback(
    (e: React.MouseEvent<HTMLElement> | null, currentIsOpen: boolean) => {
      if (e !== null) {
        e.stopPropagation();
        if (e.currentTarget !== e.target) {
          return;
        }
      }

      setIsOpen(currentIsOpen);
    },
    [],
  );

  const value: ModalContext = useMemo(
    () => ({
      isOpen,
      handleIsOpen,
    }),
    [isOpen, handleIsOpen],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
