"use client";

import { IconNotification } from "@/components/icon";

import { HeaderFixed } from "../../components/layout/HeaderFixed";
import ChatList from "./ChatList";

export default function ChatsPage() {
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
      <ChatList />
    </div>
  );
}
