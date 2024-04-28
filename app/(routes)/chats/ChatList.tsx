"use client";

import { dummyChats } from "@/util/dummyChat";
import { useAuth } from "@/hooks/useAuth";

import { ChatItem } from "./ChatItem";
import { ChatItemSkeleton } from "./ChatItemSkeleton";

export default function ChatList() {
  const { user } = useAuth();

  if (!user.id) {
    return (
      <div className="flex flex-col bg-white">
        <ChatItemSkeleton />
        <ChatItemSkeleton />
        <ChatItemSkeleton />
        <ChatItemSkeleton />
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col bg-white">
        {dummyChats.map((chat) => (
          <ChatItem {...chat} key={chat.id} />
        ))}
      </div>
    </div>
  );
}
