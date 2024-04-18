'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useAuth } from '@/hooks/useAuth';

export default function Login() {
  const { user } = useAuth();

  if (user) return <></>;

  return (
    <Link href="/login">
      <Button>로그인</Button>
    </Link>
  );
}

