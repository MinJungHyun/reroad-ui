'use client';

import { useAuth } from '@/hooks/useAuth';
import { IChatListItem } from '../chats.type';
import { ChatItem } from '../components/chat-item';
import { ChatItemSkeleton } from './chat-item-skeleton';

interface Props {
  list: IChatListItem[];
}
export default function ChatList({ list }: Props) {
  const { user } = useAuth();

  if (!user.id || list.length === 0) {
    return (
      <div className="flex flex-col bg-white">
        {Array.from({ length: 6 }).map((_, index) => (
          <ChatItemSkeleton key={index} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col bg-white">{list?.map((chat) => <ChatItem {...chat} key={chat.chatId} />)}</div>
    </div>
  );
}

