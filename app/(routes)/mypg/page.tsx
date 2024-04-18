import { IconBookmark, IconHeart, IconMapPin, IconMegaphone, IconReceipt, IconSetting, IconShopping } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { Avatar } from '@/components/ui/avatar';
import UserAvatar from '@/components/user/UserAvatar';
import Link from 'next/link';

export default function MypageHome() {
  return (
    <div>
      <HeaderFixed border>
        <div className="flex gap-3">
          <p className="text-lg font-bold text-left text-black">마이페이지</p>
        </div>
        <div className="flex gap-4">
          <IconSetting className="text-2xl" />
        </div>
      </HeaderFixed>

      <main className="flex flex-col divide-y divide-gray-300 space-y-4 pt-0 bg-white">
        <div className="flex flex-col gap-3 p-3">
          <h5 className="text-sm p-1">나의 거래</h5>

          <Link href="/mypg/like" className="flex gap-3 items-center">
            <IconHeart className="text-3xl" />
            관심 목록
          </Link>
          <Link href="/mypg/sales" className="flex gap-3  items-center">
            <IconReceipt className="text-3xl" />
            판매 목록
          </Link>
          <Link href="/mypg/order" className="flex gap-3 items-center">
            <IconShopping className="text-3xl" />
            구매 목록
          </Link>
        </div>
        <div className="flex flex-col gap-3 p-3 text-">
          <h5 className="text-sm p-1">기타</h5>

          <Link href="/mypg/local" className="flex gap-3 items-center">
            <IconMapPin className="text-3xl" />
            지역 설정
          </Link>
          <Link href="/mypg/keyword" className="flex gap-3 items-center">
            <IconBookmark className="text-3xl" />
            키워드 알림 설정
          </Link>
        </div>
        <div className="flex flex-col gap-6 p-3 pt-5">
          <Link href="/notice" className="p-1">
            공지사항
          </Link>
          <Link href="/logout" className="p-1">
            로그아웃
          </Link>
        </div>
      </main>

      <UserAvatar></UserAvatar>
    </div>
  );
}

