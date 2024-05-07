"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { UseMutateFunction, useMutation } from "@tanstack/react-query";
import {
  DeleteLogout,
  PostLogin,
  PostRefreshToken,
  PostSignUpTest,
} from "@/api/auth";
import { usePathname } from "next/navigation";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { z } from "zod";
import { SignUpFormSchema } from "@/validators/signUp.validator";
import { LoginFormSchema } from "@/validators/login.validator";
import { getCookie } from "cookies-next";

interface AuthContext {
  handleClickLogout: () => void;
  cookie: RequestCookie | undefined;
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
  handleClickLogout: () => {},
  cookie: undefined,
  loginMutate: () => {},
  signupMutate: () => {},
};

const AuthContext = createContext<AuthContext>(initialAuth);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<
  PropsWithChildren<{ cookie: RequestCookie | undefined }>
> = ({ children, cookie }) => {
  const { mutate: refreshTokenMutate } = useMutation({
    mutationFn: PostRefreshToken,
  });

  const { mutate: logoutMutate } = useMutation({
    mutationFn: DeleteLogout,
    onSuccess: () => {
      window.location.href = "/";
    },
  });

  const { mutate: loginMutate } = useMutation({ mutationFn: PostLogin });
  const { mutate: signupMutate } = useMutation({
    mutationFn: PostSignUpTest,
  });

  const pathname = usePathname();

  const handleRefreshToken = useCallback(async () => {
    refreshTokenMutate(cookie);
  }, [refreshTokenMutate, cookie]);

  const handleClickLogout = useCallback(() => {
    logoutMutate();
  }, [logoutMutate]);

  useEffect(() => {
    if (cookie) {
      (async () => {
        await handleRefreshToken();
      })();
    }
  }, [pathname, cookie, handleRefreshToken]);

  useEffect(() => {
    console.log("cookies = ", getCookie("accessToken"));
  }, [pathname]);

  const value = useMemo(
    () => ({ handleClickLogout, cookie, loginMutate, signupMutate }),
    [handleClickLogout, cookie, loginMutate, signupMutate],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
