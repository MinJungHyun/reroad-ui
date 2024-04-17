'use client';
import { useUser } from '@/store/AuthProvider';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Login() {
  const user = useUser();

  if (user) return <></>;

  return (
    <Link href="/login">
      <Button>로그인</Button>
    </Link>
  );
}

