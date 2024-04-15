import Link from "next/link";
import { IconChat, IconHeart } from "@/components/icon";
import { IBoard } from "@/util/dummyBoard";

export function BoardItem(data: IBoard) {
  const {
    id,
    title,
    // category,
    name,
    // date,
    viewCount,
    commentCount,
  } = data;
  return (
    <div className="pt-4 w-full">
      <Link href={`/board/${id}`} key={id}>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-1">
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 w-[232px] text-base text-left text-black">
                {title}
              </p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">
                  {name}
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">
                  ·
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">
                  26초 전
                </p>
              </div>
            </div>

            <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
              {viewCount > 0 && (
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                  <IconChat className="text-[#8c8c8c]" />
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">
                    {viewCount}
                  </p>
                </div>
              )}
              {commentCount > 0 && (
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                  <IconHeart className="text-[#8c8c8c]" />
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">
                    {commentCount}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
