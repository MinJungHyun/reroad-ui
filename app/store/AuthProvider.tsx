'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { create } from 'zustand';
import { getCookie } from 'cookies-next';

const AuthContext = createContext({});

interface IUserStore {
  user: IUserInfo | null;
  setUser: (user: IUserInfo) => void;
}
interface IUserInfo {
  id: string;
  name: string;
  email: string;
  image: string;
}
const useAuthStore = create((set) => ({
  accessToken: '', // 초기값은 빈 문자열로 설정합니다.
  setAccessToken: (accessToken: string) => set({ accessToken }) // accessToken을 설정하는 함수를 정의합니다.
}));

const decodeAccessToken = (accessToken: string) => {
  return JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString());
};
const useUserStore = create<IUserStore>((set) => ({
  user: null, // 초기값은 null로 설정합니다.
  setUser: (user) => set({ user }) // 유저 정보를 설정하는 함수를 정의합니다.
}));

// 이제 useUserStore 상태 저장소를 훅으로 사용하여 유저 정보에 접근할 수 있습니다.
export const useUser = () => useUserStore((state) => state.user);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAccessTokenValidity = async () => {
      const accessToken = getCookie('access_token');
      console.log('@@@@', accessToken);

      if (!accessToken) {
        // Access token이 없는 경우 로그인 페이지로 리디렉션 또는 다른 처리
        setIsLoading(false);
        return;
      }
      const payload = decodeAccessToken(accessToken);
      console.log(payload);
      useUserStore.setState({ user: payload });

      const expirationTime = payload.exp * 1000; // UNIX timestamp

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

  return <AuthContext.Provider value={useAuthStore}>{children}</AuthContext.Provider>;
};

