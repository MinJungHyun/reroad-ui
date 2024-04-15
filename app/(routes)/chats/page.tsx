"use client";

import { IconNotification } from "@/components/icon";
import { dummy_chats } from "@/util/dummy_chat";
import { HeaderFixed } from "../../components/layout/HeaderFixed";
import { ChatItem } from "@/components/chat/ChatItem";

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
        {dummy_chats.map((chat) => (
          <ChatItem {...chat} key={chat.id} />
        ))}
      </div>
    </div>
  );
}
