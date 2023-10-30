'use client';
import { IconNotification } from '@/component/icon';
import { IChat, dummy_chats } from '@/util/dummy_chat';
import { dummy_products } from '@/util/dummy_product';
import Image from 'next/image';
import Link from 'next/link';

export default function ChatList() {
  const ChatHeader = () => {
    return (
      <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 px-4 py-3 bg-white sticky top-0   border-1 z-10">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
          <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-black">채팅</p>
        </div>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
          <IconNotification className="text-xl" />
        </div>
      </div>
    );
  };
  const ChatItem = (chat: IChat) => {
    return (
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative w-full">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-full relative gap-4 p-4 bg-white">
          <img className="flex-grow-0 flex-shrink-0" src="ellipse-2.png" />
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">{chat.name}</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{chat.address}</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{chat.time}</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black"> {chat.message}</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2.png" />
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-start items-center w-[420px] relative">
      <ChatHeader />
      {dummy_chats.map((chat) => (
        <ChatItem {...chat} key={chat.id} />
      ))}
    </div>
  );
}

