import { IconLeft } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { LikeItem } from '@/components/mypage/LikeItem';
import { Input } from '@/components/ui/input';
import { dummyProduct } from '@/util/dummyProduct';
import Link from 'next/link';
import KeywordRegister from './keywordRegister';

export default function KeywordList() {
  return (
    <div>
      <HeaderFixed border>
        <div className="w-full flex justify-between h-7">
          <div className="flex-0 flex gap-2 items-center ">
            <Link href="/mypg">
              <IconLeft />
            </Link>
            <p className="text-lg font-bold text-left text-black">키워드 알림 설정</p>
          </div>
        </div>
      </HeaderFixed>
      <main className="p-3">
        <KeywordRegister></KeywordRegister>
      </main>
    </div>
  );
}

