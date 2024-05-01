'use client';

import { useAuth } from '@/hooks/useAuth';
import { ChatItem } from './ChatItem';
import { ChatItemSkeleton } from './ChatItemSkeleton';
import { IChatListItem } from './chats.type';

interface Props {
  list: IChatListItem[];
}
export default function ChatList({ list }: Props) {
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
      <div className="flex flex-col bg-white">{list?.map((chat) => <ChatItem {...chat} key={chat.chatId} />)}</div>
    </div>
  );
}

