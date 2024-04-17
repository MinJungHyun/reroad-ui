"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function LoginKakaoButton() {
  return (
    <Link href="http://localhost:3010/auth/kakao">
      <Button type="button">카카오로그인</Button>
    </Link>
  );
}
function LoginGoogleButton() {
  return (
    <Link href="http://localhost:3010/auth/google">
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
