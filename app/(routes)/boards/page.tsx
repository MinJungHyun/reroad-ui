"use client";
import { IconNotification, IconSearch } from "@/components/icon";
import { HeaderSticky } from "@/components/layout/HeaderSticky";

export default function ProductList() {
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

      {/* 키워드 슬라이더 */}
      <div className="bg-[#FFFFFF] flex flex-row justify-between p-[12px_16px_12px_16px] w-[100%] box-sizing-border overflow-x-auto whitespace-nowrap">
        <div className="rounded-[100px] border-solid border-[1px] border-[#EEE] m-[0_8px_0_0] flex flex-row justify-center p-[7px_11.8px_7px_11px] grow basis-[69px] box-sizing-border flex-shrink-0">
          <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#000000]">
            동네소식
          </span>
        </div>
        <div className="rounded-[100px] border-solid border-[1px] border-[#EEE] m-[0_8px_0_0] flex flex-row justify-center p-[7px_11.5px_7px_11px] grow basis-[84px] box-sizing-border flex-shrink-0">
          <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#000000]">
            🙌 같이해요
          </span>
        </div>
        <div className="rounded-[100px] border-solid border-[1px] border-[#EEE] m-[0_8px_0_0] flex flex-row justify-center p-[7px_11.8px_7px_11px] grow basis-[69px] box-sizing-border flex-shrink-0">
          <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#000000]">
            동네질문
          </span>
        </div>
        <div className="rounded-[100px] border-solid border-[1px] border-[#EEE] m-[0_8px_0_0] flex flex-row justify-center p-[7px_11.8px_7px_11px] grow basis-[69px] box-sizing-border flex-shrink-0">
          <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#000000]">
            동네맛집
          </span>
        </div>
        <div className="rounded-[100px] border-solid border-[1px] border-[#EEE] flex flex-row justify-center p-[7px_11.8px_7px_11px] grow basis-[69px] box-sizing-border flex-shrink-0">
          <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#000000]">
            취미생활
          </span>
        </div>
      </div>

      <div className="bg-[#D9D9D9] w-full h-[1px]"></div>

      <div className="flex flex-col w-full box-sizing-border">
        <div className="bg-[#FFFFFF] flex flex-col p-[16px_16.9px_16px_16px] w-[100%] box-sizing-border">
          <div className="rounded-[4px] bg-[#EEEEEE] m-[0_0_12px_0] flex flex-row justify-center self-start p-[3px_6.4px_3px_6px] box-sizing-border">
            <span className="break-words font-normal text-[10px] leading-[1.8] text-[#000000]">
              🙌 같이해요
            </span>
          </div>
          <div className="m-[0_0_12px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_0_4px_0] flex flex-row w-[fit-content] box-sizing-border">
              <span className="m-[0_4.4px_0_0] break-words font-[var(--token-3-font-weight,400)] text-[14px] leading-[var(--token-3-line-height,1.286)] text-[#FF7E36]">
                모집중
              </span>
              <span className="break-words font-[var(--token-3-font-weight,400)] text-[14px] leading-[var(--token-3-line-height,1.286)] text-[#000000]">
                맥주마실 사람~~
              </span>
            </div>
            <span className="self-start break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
              쪽지 주세요 고고!!
            </span>
          </div>
          <div className="m-[0_0_12px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_0_4px_0] flex flex-row w-[fit-content] box-sizing-border items-center">
              <i className="ri-arrow-right-s-line text-black"></i>

              <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#000000]">
                누구나 참여 가능
              </span>
            </div>

            <div className="flex flex-row self-start w-[fit-content] box-sizing-border items-center">
              <i className="ri-arrow-right-s-line text-black"></i>

              <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#000000]">
                2/4명 참여
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between w-[100%] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <span className="m-[0_4.9px_0_0] break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
                요우우
              </span>
              <span className="m-[0_4.7px_0_0] break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
                ·
              </span>
              <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
                화양동
              </span>
            </div>
            <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
              3분 전
            </span>
          </div>
        </div>

        <div className="bg-[#EEEEEE] w-full h-[4px]"></div>

        <div className="relative flex flex-col w-[100%] box-sizing-border">
          <div className="bg-[#FFFFFF] flex flex-col p-[16px_16.1px_16px_16px] w-[100%] box-sizing-border">
            <div className="rounded-[4px] bg-[#EEEEEE] m-[0_0_12px_0] flex flex-row justify-center self-start p-[3px_6.2px_3px_6px] box-sizing-border">
              <span className="break-words font-normal text-[10px] leading-[1.8] text-[#000000]">
                동네맛집
              </span>
            </div>
            <div className="m-[0_0_12px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
              <div className="m-[0_0_2px_0] inline-block break-words font-[var(--token-3-font-weight,400)] text-[14px] leading-[var(--token-3-line-height,1.286)] text-[#000000]">
                송정동 밥집 추천 부탁드려요
                <br />
                퇴근하고 뭐 해먹기 귀찮을때 먹을만한 곳이요.
              </div>
              <p className="self-start break-words font-[var(--token-3-font-weight,400)] text-[14px] leading-[var(--token-3-line-height,1.286)] text-[#000000]">
                <span className="container-28-sub-0"></span>
                <span></span>
              </p>
            </div>
            <div className="flex flex-row justify-between w-[100%] box-sizing-border">
              <div className="flex flex-row box-sizing-border">
                <span className="m-[0_4.9px_0_0] break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
                  카리
                </span>
                <span className="m-[0_4.7px_0_0] break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
                  ·
                </span>
                <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
                  화양동
                </span>
              </div>
              <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#8C8C8C]">
                17분 전
              </span>
            </div>
          </div>

          <div className="bg-[#FFFFFF] relative flex flex-row p-[10px_16px] w-[100%] box-sizing-border">
            <div className="flex flex-row box-sizing-border mr-[10px]">
              <div className="m-[1.3px_5.3px_1.3px_0] flex flex-row justify-center w-[16px] h-[16px] box-sizing-border items-center">
                <i className=" ri-chat-check-line text-black"></i>
              </div>

              <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#5E5E5E]">
                궁금해요
              </span>
            </div>

            <div className="flex flex-row box-sizing-border">
              <div className="m-[1.3px_5.3px_1.3px_0] flex flex-row justify-center w-[16px] h-[16px] box-sizing-border items-center">
                <i className=" ri-chat-3-line text-black"></i>
              </div>

              <span className="break-words font-[var(--token-2-font-weight,400)] text-[12px] text-[#5E5E5E]">
                답변 2
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#EEEEEE] w-full h-[4px]"></div>
      </div>
    </div>
  );
}
