"use client";

import { createContext, useState, useEffect, useContext, useMemo } from "react";
import { getCookie, setCookie } from "cookies-next";

interface IUserInfo {
  id: string;
  name: string;
  email: string;
  image: string;
}

const decodeAccessToken = (accessToken: string) => {
  return JSON.parse(
    Buffer.from(accessToken.split(".")[1], "base64").toString(),
  );
};
const AuthContext = createContext({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUserInfo>({} as IUserInfo);

  useEffect(() => {
    const checkAccessTokenValidity = async () => {
      const accessToken = getCookie("access_token");

      if (!accessToken) {
        // Access token이 없는 경우 로그인 페이지로 리디렉션 또는 다른 처리
        setIsLoading(false);
        return;
      }
      const payload = decodeAccessToken(accessToken);
      console.log(payload);
      setUser(payload);

      // const expirationTime = payload.exp * 1000; // UNIX timestamp

      // if (Date.now() >= expirationTime) {
      //   // Access token이 만료된 경우, refresh token 또는 다른 인증 방법을 사용하여 새로운 access token을 가져옴
      //   try {
      //     const newAccessToken =
      //       await fetchNewAccessToken(/* refresh token 또는 다른 방법으로 새로운 access token을 가져오는 API 호출 */);
      //     // 가져온 새로운 access token을 상태나 로컬 스토리지 또는 쿠키에 저장하는 등의 처리
      //     useAuthStore.setAccessToken(newAccessToken);
      //   } catch (error) {
      //     // 새로운 access token을 가져오는 데 실패한 경우, 로그아웃 또는 다른 처리
      //     setIsLoading(false);
      //     return;
      //   }
      // }

      setIsLoading(false);
    };

    checkAccessTokenValidity();
  }, []);

  const login = async () => {
    try {
      const res = await fetch("/api/login");
      if (res.ok) {
        const data = await res.json();
        setUser(data);
        // router.push('/');
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = async () => {
    try {
      setUser({} as IUserInfo);
      setCookie("access_token", "", { expires: new Date(0) });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const updateUser = (userData: IUserInfo) => {
    setUser(userData);
  };

  const AuthContextValue = useMemo(
    () => ({
      user,
      login,
      logout,
      updateUser,
    }),
    [user, login, logout, updateUser],
  );

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
interface IAuthContext {
  user: IUserInfo;
  login: () => void;
  logout: () => void;
  updateUser: (userData: IUserInfo) => void;
}

export const useAuth = () => {
  return useContext(AuthContext) as IAuthContext;
};
