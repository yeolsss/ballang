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
import { useMutation, useQuery } from "@tanstack/react-query";
import { DeleteLogout, GetIsLogin } from "@/api/auth";
import { usePathname } from "next/navigation";

//1. 만든다.
interface AuthContext {
  isLogin: boolean | null;
  logout: () => void;
  checkLogin: () => void;
}

const initialAuth: AuthContext = {
  isLogin: false,
  logout: () => {},
  checkLogin: () => {},
};

const AuthContext = createContext<AuthContext>(initialAuth);

//2. 사용한다.
export const useAuth = () => useContext(AuthContext);

//3. 범위를 지정한다.
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const { data, refetch } = useQuery({
    queryKey: ["isLogin"],
    queryFn: GetIsLogin,
  });
  const { mutate } = useMutation({
    mutationFn: DeleteLogout,
    onSuccess: () => {
      setIsLogin(false);
    },
  });
  const pathname = usePathname();

  const logout = useCallback(() => {
    mutate();
  }, [mutate]);

  const checkLogin = useCallback(async () => {
    await refetch();
    setIsLogin(data?.isLogin);
  }, [data, refetch]);

  useEffect(() => {
    (async () => {
      await checkLogin();
    })();
  }, [pathname, checkLogin]);

  const value = useMemo(
    () => ({ isLogin, logout, checkLogin }),
    [isLogin, logout, checkLogin],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
