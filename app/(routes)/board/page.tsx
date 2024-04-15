import { IconNotification, IconSearch } from "@/components/icon";
import { HeaderFixed } from "@/components/layout/HeaderFixed";
import { dummyBoards } from "@/util/dummyBoard";
import { BoardItem } from "@/components/board/BoardItem";

export default function BoardList() {
  return (
    <div>
      <HeaderFixed>
        <div className="flex gap-1">
          <p className="text-lg font-bold text-left text-black">군자동</p>
          <i className="ri-arrow-down-s-line text-black text-2xl" />
        </div>
        <div className="flex gap-4">
          <IconSearch className="text-xl" />
          <IconNotification className="text-xl" />
        </div>
      </HeaderFixed>
      <div className="flex flex-col divide-y divide-gray-300 space-y-4 p-4 pt-0 bg-white">
        {dummyBoards.map((data) => (
          <BoardItem {...data} key={data.id} />
        ))}
      </div>
      <div className="py-8 bg-gradient-to-b from-white to-[rgba(255,255,255,0)]" />
    </div>
  );
}
