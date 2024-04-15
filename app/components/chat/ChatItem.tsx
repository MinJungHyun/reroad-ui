import Link from 'next/link';
import { IChat } from '@/util/dummy_chat';

export const ChatItem = (chat: IChat) => {
  const { id, name, time, message } = chat;
  return (
    <Link href={`/chat/${id}`}>
      <div className="flex justify-start w-full gap-4 p-4">
        <img className="flex-0" src="ellipse-2.png" />
        <div className="flex-auto justify-center flex flex-col gap-1 ">
          <div className="flex justify-start items-center gap-1">
            <p className="text-sm text-black font-bold ">{name}</p>
            <p className="text-xs text-[#8c8c8c]">{time}</p>
          </div>
          <p className="text-sm text-black"> {message}</p>
        </div>
        <img className="flex-0 w-10 h-10 rounded" src="rectangle-2.png" />
      </div>
    </Link>
  );
};

