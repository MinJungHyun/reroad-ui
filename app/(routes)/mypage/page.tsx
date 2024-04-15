import { IconSetting } from "@/components/icon";
import { HeaderFixed } from "@/components/layout/HeaderFixed";
import { Avatar } from "@/components/ui/avatar";

export default function MypageHome() {
  return (
    <div>
      <HeaderFixed divline>
        <div className="flex gap-1">
          <p className="text-lg font-bold text-left text-black">마이페이지</p>
        </div>
        <div className="flex gap-4">
          <IconSetting className="text-2xl" />
        </div>
      </HeaderFixed>
      <main className="flex flex-col divide-y divide-gray-300 space-y-4 p-4 pt-0 bg-white pb-4 mb-16">
        <Avatar src="https://github.com/shadcn.png" />
      </main>
    </div>
  );
}
