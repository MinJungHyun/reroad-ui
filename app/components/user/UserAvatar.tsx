'use client';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';

export default function UserAvatar() {
  const { user, logout } = useAuth();
  console.log('@@@@');

  if (!user?.id)
    return (
      <>
        <Link href="/login">
          <Button>로그인</Button>
        </Link>
        로그인해주세요
      </>
    );
  return (
    <>
      <div className="flex justify-start  items-center gap-2 p-2">
        <div>
          <Avatar src={user.image} />
        </div>
        <div>{user.name}</div>
      </div>
      <div>
        <Button
          onClick={() => {
            logout();
          }}
        >
          로그아웃
        </Button>
      </div>
    </>
  );
}

