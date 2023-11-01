'use client';
import { dummy_products } from '@/util/dummy_product';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginMethod() {
  const LoginKakaoButton = () => {
    return (
      <Link href="http://localhost:3010/auth/kakao">
        <button>카카오로그인</button>
      </Link>
    );
  };
  const LoginGoogleButton = () => {
    return (
      <Link href="http://localhost:3010/auth/google">
        <button>구글로그인</button>
      </Link>
    );
  };

  return (
    <div className="flex flex-col justify-start items-center   relative">
      <LoginKakaoButton />
      <LoginGoogleButton />
    </div>
  );
}

