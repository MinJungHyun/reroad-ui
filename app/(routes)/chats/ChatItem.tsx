import Link from "next/link";

import { IChat } from "@/util/dummyChat";

export function ChatItem(chat: IChat) {
  const { id, name, time, message } = chat;
  return (
    <Link href={`/chat/${id}`}>
      <div className="flex justify-start w-full gap-4 p-4">
        <i className="ri-emotion-laugh-line text-3xl" />
        <div className="flex-auto justify-center flex flex-col gap-1 ">
          <div className="flex justify-start items-center gap-1">
            <p className="text-sm text-black font-bold ">{name}</p>
            <p className="text-xs text-[#8c8c8c]">{time}</p>
          </div>
          <p className="text-sm text-black"> {message}</p>
        </div>
      </div>
    </Link>
  );
}
