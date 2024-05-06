"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { DeleteLogout, PostRefreshToken } from "@/api/auth";
import { usePathname } from "next/navigation";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

//1. 만든다.
interface AuthContext {
  logout: () => void;
  cookie: RequestCookie | undefined;
}

const initialAuth: AuthContext = {
  logout: () => {},
  cookie: undefined,
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

  const { mutate: DeleteLogoutMutate } = useMutation({
    mutationFn: DeleteLogout,
    onSuccess: () => {
      console.log("로그아웃이 되었습니다!");
      window.location.href = "/";
    },
  });

  const pathname = usePathname();

  const refreshToken = useCallback(async () => {
    refreshTokenMutate(cookie);
  }, [refreshTokenMutate, cookie]);

  const logout = useCallback(() => {
    DeleteLogoutMutate();
  }, [DeleteLogoutMutate]);

  useEffect(() => {
    if (cookie) {
      (async () => {
        await refreshToken();
      })();
    }
  }, [pathname, cookie, refreshToken]);

  const value = useMemo(() => ({ logout, cookie }), [logout, cookie]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
