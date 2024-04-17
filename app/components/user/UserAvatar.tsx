'use client';
import { useUser } from '@/store/AuthProvider';
import Link from 'next/link';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';

export default function UserAvatar() {
  const user = useUser();

  if (!user)
    return (
      <>
        <Link href="/login">
          <Button>로그인</Button>
        </Link>
        로그인해주세요
      </>
    );
  return (
    <div className="flex justify-start  items-center gap-2 p-2">
      <div>
        <Avatar src={user.image} />
      </div>
      <div>{user.name}</div>
    </div>
  );
}

