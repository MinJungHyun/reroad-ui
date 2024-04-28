import Link from "next/link";

import { IconLeft } from "@/components/icon";
import { HeaderFixed } from "@/components/layout/HeaderFixed";

import KeywordRegister from "./KeywordReg";

export interface IKeyword {
  id: number;
  word: string;
}

export default function KeywordList() {
  return (
    <div>
      <HeaderFixed border>
        <div className="w-full flex justify-between h-7">
          <div className="flex-0 flex gap-2 items-center ">
            <Link href="/mypg">
              <IconLeft />
            </Link>
            <p className="text-lg font-bold text-left text-black">
              키워드 알림 설정
            </p>
          </div>
        </div>
      </HeaderFixed>
      <KeywordRegister />
    </div>
  );
}
