'use client';
import { IconNotification, IconSearch } from '~/components/icon';
import { HeaderSticky } from '~/components/layout/HeaderSticky';
import { dummy_boards } from '~/util/dummy_board';
import { BoardItem } from '~/components/board/BoardItem';

export default function BoardList() {
  return (
    <div>
      <HeaderSticky>
        <div className="flex gap-1">
          <p className="text-lg font-bold text-left text-black">군자동</p>
          <i className="ri-arrow-down-s-line text-black text-2xl"></i>
        </div>
        <div className="flex gap-4">
          <IconSearch className="text-xl" />
          <IconNotification className="text-xl" />
        </div>
      </HeaderSticky>
      <div className="flex flex-col divide-y divide-gray-300 space-y-4 p-4 pt-0 bg-white">
        {dummy_boards.map((data, index) => (
          <BoardItem {...data} key={index} />
        ))}
      </div>
      <div className="py-8 bg-gradient-to-b from-white to-[rgba(255,255,255,0)]"></div>
    </div>
  );
}

