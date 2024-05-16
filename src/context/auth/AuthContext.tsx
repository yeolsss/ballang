"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UseMutateFunction, useMutation } from "@tanstack/react-query";
import {
  DeleteLogout,
  PostLogin,
  PostRefreshToken,
  PostSignUp,
} from "@/api/auth";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";
import { LoginFormSchema } from "@/validators/login.validator";

interface AuthContext {
  isLogin: boolean | null;
  handleClickLogout: () => void;
  loginMutate: UseMutateFunction<
    any,
    Error,
    z.infer<typeof LoginFormSchema>,
    unknown
  >;
  signupMutate: UseMutateFunction<
    any,
    Error,
    z.infer<typeof SignUpFormSchema>,
    unknown
  >;
}

const initialAuth: AuthContext = {
  isLogin: null,
  handleClickLogout: () => {},
  loginMutate: () => {},
  signupMutate: () => {},
};

const AuthContext = createContext<AuthContext>(initialAuth);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  const { mutate: refreshTokenMutate } = useMutation({
    mutationFn: PostRefreshToken,
    onSuccess: (res) => {
      setIsLogin(res.result);
    },
  });

  const { mutate: logoutMutate } = useMutation({
    mutationFn: DeleteLogout,
    onSuccess: () => {
      window.location.href = "/";
    },
  });

  const { mutate: loginMutate } = useMutation({ mutationFn: PostLogin });

  const { mutate: signupMutate } = useMutation({
    mutationFn: PostSignUp,
  });

  const pathname = usePathname();

  const handleRefreshToken = useCallback(() => {
    return refreshTokenMutate();
  }, [refreshTokenMutate]);

  const handleClickLogout = useCallback(() => {
    logoutMutate();
  }, [logoutMutate]);

  useEffect(() => {
    handleRefreshToken();
  }, [pathname, handleRefreshToken]);

  const value = useMemo(
    () => ({ handleClickLogout, loginMutate, signupMutate, isLogin }),
    [handleClickLogout, loginMutate, signupMutate, isLogin],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
