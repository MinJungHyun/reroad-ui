'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import create from 'zustand';
import { getCookie } from 'cookies-next';
// import { useCookies } from 'next-client-cookies';
const defaultState = {
  accessToken: '',
  setAccessToken: () => {}
};
const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const decodeAccessToken = (accessToken: string) => {
  return JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString());
};
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const cookies = useCookies();
  const useAuthStore = create(/* your Zustand store */);
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

      // // access token이 있으면 decode 해서 exp를 확인하고, 만료되었는지 확인
      const decodedToken = decodeAccessToken(accessToken);
      console.log('@@@@', decodedToken);

      // const expirationTime = decodedToken.exp * 1000; // UNIX timestamp

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

