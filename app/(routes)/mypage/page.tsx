import { ReactElement } from "react";
import Link from "next/link";

import {
  IconHeart,
  IconReceipt,
  IconSetting,
  IconShopping,
} from "@/components/icon";
import { HeaderFixed } from "@/components/layout/HeaderFixed";
import Divider from "@/components/ui/divider";

interface ActivityBlockProps {
  icon: ReactElement;
  label: string;
}

function ActivityBlock({ icon, label }: ActivityBlockProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-gray-200 m-0 mb-2 p-3 w-12 h-12 flex justify-center items-center">
        {icon}
      </div>
      <span className="font-normal text-sm leading-normal text-black">
        {label}
      </span>
    </div>
  );
}

interface ActivityItemProps {
  iconSrc: string;
  label: string;
}

// 나의 활동 섹션 내 항목
function ActivityItem({ iconSrc, label }: ActivityItemProps) {
  return (
    <div className="bg-[#FFFFFF] flex p-[12px_0_12px_17.5px] w-[100%] box-sizing-border">
      <div className="m-[1px_18px_1px_0] flex justify-center w-[21px] h-[18px] box-sizing-border">
        <img className="w-[21px] h-[18px]" src={iconSrc} alt="img" />
      </div>

      <span className="break-words font-[var(--token-1-font-weight,400)] text-[16px] leading-[var(--token-1-line-height,1.25)] text-[#000000]">
        {label}
      </span>
    </div>
  );
}

// 나의 활동 섹션 컨테이너
function MyActivities() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col p-[8px_0_8px_0] w-[100%] box-sizing-border">
      <div className="bg-[#FFFFFF] p-[10px_16px_10px_16px] w-[100%] box-sizing-border">
        <span className="break-words font-bold text-[16px] leading-[1.25] text-[#000000]">
          나의 활동
        </span>
      </div>
      <ActivityItem iconSrc="/path/to/local/icon1.png" label="내 동네 설정" />
      <ActivityItem iconSrc="/path/to/local/icon2.png" label="동네 인증하기" />
      <ActivityItem iconSrc="/path/to/local/icon3.png" label="키워드 알림" />
      <ActivityItem iconSrc="/path/to/local/icon4.png" label="모아보기" />
      <ActivityItem iconSrc="/path/to/local/icon5.png" label="당근 가계부" />
    </div>
  );
}

export default function MypageHome() {
  return (
    <div className="bg-[#ffffff]">
      <HeaderFixed border>
        <div className="flex gap-3">
          <p className="text-lg font-bold text-left text-black">마이페이지</p>
        </div>
        <div className="flex gap-4">
          <IconSetting className="text-2xl" />
        </div>
      </HeaderFixed>

      <main className="flex flex-col divide-y divide-gray-300 space-y-4 pt-0 bg-white">
        {/* 상단 프로필 사진, 닉네임 변경 이동, 판매 내역, 구매 내역, 관심 목록으로 이동하는 상단 영역 */}
        <div className="m-[16px] flex flex-col items-center w-[calc(100%_-_32px)] box-sizing-border gap-[16px]">
          <div className="flex flex-row justify-between w-[100%] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[96px] border-[1px_solid_#BCBCBC] relative m-[0_16px_0_0] flex flex-row justify-center w-[64px] h-[64px] box-sizing-border">
                <div className="rounded-[32px] bg-[#F4F4F4] absolute left-[50%] top-[0px] translate-x-[-50%] w-[64px] h-[64px]" />
                <img className="relative w-[64px] h-[64px]" alt="img" />
              </div>
              <div className="m-[12px_0_12px_0] flex flex-col box-sizing-border">
                <div className="m-[0_0_4px_0] inline-block self-start break-words font-bold text-[16px] leading-[1.25] text-[#000000]">
                  가나다
                </div>
                <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] leading-[var(--token-2-line-height,1.333)] text-[#8C8C8C]">
                  군자동 #123456789
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[0_60.7px] w-[fit-content] box-sizing-border">
            <ActivityBlock
              icon={<IconReceipt className="text-3xl" />}
              label="판매내역"
            />
            <ActivityBlock
              icon={<IconShopping className="text-3xl" />}
              label="구매내역"
            />
            <ActivityBlock
              icon={<IconHeart className="text-3xl" />}
              label="관심목록"
            />
          </div>
        </div>
      </main>

      <Divider type="thin" />

      {/* <div className="flex flex-col gap-6 p-3 pt-5"> */}
      <div className="bg-[#FFFFFF] flex flex-col w-[100%] box-sizing-border">
        <Link href="/notice" className="p-[16px]">
          공지사항
        </Link>
        <Link href="/logout" className="p-[16px]">
          로그아웃
        </Link>
        <Divider />
      </div>

      {/* 1번 섹션 */}
      {/* 나의 활동 : 내 동네 설정, 동네 인증하기, 키워드 알림, 모아보기, 당근 가계부 */}
      <MyActivities />

      <Divider />

      {/* 2번 섹션 */}
      <MyActivities />

      <div className="mb-[80px]" />
    </div>
  );
}
