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
import { DeleteLogout, PostLogin, PostRefreshToken } from "@/api/auth";
import { usePathname } from "next/navigation";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

//1. 만든다.
interface AuthContext {
  handleClickLogout: () => void;
  cookie: RequestCookie | undefined;
  loginMutate: UseMutateFunction<
    any,
    Error,
    { email: string; password: string },
    unknown
  >;
}

const initialAuth: AuthContext = {
  handleClickLogout: () => {},
  cookie: undefined,
  loginMutate: () => {},
};

const AuthContext = createContext<AuthContext>(initialAuth);

//2. 사용한다.
export const useAuth = () => useContext(AuthContext);

//3. 범위를 지정한다.
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

  const value = useMemo(
    () => ({ handleClickLogout, cookie, loginMutate }),
    [handleClickLogout, cookie, loginMutate],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
