import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const LoginKakaoButton = () => {
    return (
      <Link href="http://localhost:3010/auth/kakao">
        <button>카카오로그인</button>
      </Link>
    );
  };
  return (
    <div>
      <LoginKakaoButton></LoginKakaoButton>
    </div>
  );
}

