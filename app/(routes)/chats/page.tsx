"use client";

import { IconNotification } from "@/components/icon";
import { dummyChats } from "@/util/dummyChat";
import { ChatItem } from "@/components/chat/ChatItem";
import { HeaderFixed } from "../../components/layout/HeaderFixed";

export default function ChatList() {
  return (
    <div>
      <HeaderFixed>
        <div className="flex gap-1">
          <p className="text-lg font-bold text-left text-black">채팅</p>
        </div>
        <div className="flex gap-4">
          <IconNotification className="text-xl" />
        </div>
      </HeaderFixed>
      <div className="flex flex-col bg-white">
        {dummyChats.map((chat) => (
          <ChatItem {...chat} key={chat.id} />
        ))}
      </div>
    </div>
  );
}
