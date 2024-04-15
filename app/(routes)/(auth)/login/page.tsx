"use client";

import Link from "next/link";

function LoginKakaoButton() {
  return (
    <Link href="http://localhost:3010/auth/kakao">
      <button type="button">카카오로그인</button>
    </Link>
  );
}
function LoginGoogleButton() {
  return (
    <Link href="http://localhost:3010/auth/google">
      <button type="button">구글로그인</button>
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
