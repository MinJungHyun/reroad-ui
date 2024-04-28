"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { API_BASE_URL } from "@/lib/consts";

function LoginKakaoButton() {
  return (
    <Link href={`${API_BASE_URL}/auth/kakao`}>
      <Button type="button">카카오로그인</Button>
    </Link>
  );
}
function LoginGoogleButton() {
  return (
    <Link href={`${API_BASE_URL}/auth/google`}>
      <Button type="button">구글로그인</Button>
    </Link>
  );
}

export default function LoginMethod() {
  return (
    <div className="flex flex-col justify-start items-center   relative">
      <LoginKakaoButton />
      <LoginGoogleButton />
    </div>
  );
}
