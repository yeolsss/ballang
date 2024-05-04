import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { VariantProps } from "class-variance-authority";
import Toast from "@/components/UI/Toast/Molecules/Toast";

type ToastPositionX = "left" | "right";
type ToastPositionY = "top" | "bottom";
type Toasts = {
  toastPositionX: ToastPositionX;
  toastPositionY: ToastPositionY;
  toasts: ToastProps[];
};

interface ToastProps extends Omit<VariantProps<typeof Toast>, "children"> {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
  duration?: number;
  handleClickClose?: (id: string) => void;
  toastPositionX?: ToastPositionX;
  toastPositionY?: ToastPositionY;
}

interface ToastContext {
  toast: ({ ...props }: ToastProps) => void;
  toasts: Toasts;
}

const toastValue: ToastContext = {
  toast: () => {},
  toasts: {
    toastPositionY: "bottom",
    toastPositionX: "right",
    toasts: [],
  } as Toasts,
};

const ToastContext = createContext<ToastContext>(toastValue);

export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [toasts, setToasts] = useState<Toasts>({
    toastPositionY: "bottom",
    toastPositionX: "right",
    toasts: [],
  });

  const removeToast = useCallback(
    (id: string) => {
      setToasts((prev) => ({
        ...prev,
        toasts: [...prev.toasts.filter((toast) => toast.id !== id)],
      }));
    },
    [setToasts],
  );

  const handleClickClose = useCallback(
    (id: string) => {
      removeToast(id);
    },
    [removeToast],
  );

  const toast = useCallback(
    ({ ...props }: ToastProps) => {
      const id = Date.now() + "";

      setToasts((prev) => ({
        toastPositionY: props.toastPositionY || "bottom",
        toastPositionX: props.toastPositionX || "right",
        toasts:
          props.toastPositionY === "bottom"
            ? [...prev.toasts, { id, handleClickClose, ...props }]
            : [{ id, handleClickClose, ...props }, ...prev.toasts],
      }));
      setTimeout(() => removeToast(id), props.duration || 3000);
    },
    [handleClickClose, removeToast],
  );

  const value: ToastContext = useMemo(
    () => ({ toast, toasts }),
    [toast, toasts],
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
