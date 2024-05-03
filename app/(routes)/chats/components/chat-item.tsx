import Link from 'next/link';
import { IChatListItem } from '../chats.type';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
dayjs.extend(relativeTime);
dayjs.locale('ko');

export function ChatItem(chatItem: IChatListItem) {
  const { chatId, userName, messageAt, message, productImage, userImage } = chatItem;

  return (
    <Link href={`/chat/${chatId}`}>
      <div className="flex justify-start w-full gap-4 p-4">
        <div className="relative w-15 flex-none">
          <div className="absolute ">
            <img className="w-6 h-6 rounded-full border border-slate-600" src={userImage} />
          </div>
          <div className="pl-[10px] pt-[10px]">
            <img className="w-9 h-9 rounded-md border  border-slate-600" src={productImage || `/no-image.png`} />
          </div>
        </div>
        <div className="flex-1 justify-center flex flex-col gap-1 ">
          <div className="flex justify-start items-center gap-1">
            <p className="text-sm text-black font-bold ">{userName}</p>
            <p className="text-xs text-[#8c8c8c]" title={`${dayjs(messageAt).format('YYYY-MM-DD HH:mm:ss')}`}>
              {dayjs(messageAt).fromNow()}
            </p>
          </div>
          <p className="text-sm text-black"> {message}</p>
        </div>
      </div>
    </Link>
  );
}

