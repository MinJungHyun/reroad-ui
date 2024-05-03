'use client';

import { IconNotification } from '@/components/icon';
import api from '@/hooks/axios';
import { useEffect, useState } from 'react';
import { HeaderFixed } from '../../components/layout/HeaderFixed';
import ChatList from './components/chat-list';
import { IChatListItem } from './chats.type';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function ChatsPage() {
  const [list, setList] = useState<IChatListItem[]>([]);
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user?.id) {
        const fetchChatList = async () => {
          const res = await api.get('/chat/list', {
            headers: {
              'Cache-Control': 'no-cache'
            }
          });
          const chatList: IChatListItem[] = res.data;
          if (chatList.length > 0) {
            setList(chatList);
          }
        };

        fetchChatList();
      } else {
        router.push('/login');
      }
    }
  }, [user?.id, isLoading]);

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
      <ChatList list={list} />
    </div>
  );
}

