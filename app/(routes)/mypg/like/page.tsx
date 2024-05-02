import { IconLeft } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import Link from 'next/link';
import { LikeItem } from './components/list-item';

export default function LikeList() {
  return (
    <div>
      <HeaderFixed border>
        <div className="w-full flex justify-between h-7">
          <div className="flex-0 flex gap-2 items-center ">
            <Link href="/mypg">
              <IconLeft />
            </Link>
            <p className="text-lg font-bold text-left text-black">관심목록</p>
          </div>
        </div>
      </HeaderFixed>
      <div className="flex flex-col divide-y divide-gray-300 space-y-4 p-4 pt-0 bg-white">
        {/* {dummyProduct.map((product) => (
          <LikeItem {...product} key={product.id} />
        ))} */}
      </div>
      <div className="py-8 bg-gradient-to-b from-white to-[rgba(255,255,255,0)]" />
    </div>
  );
}

