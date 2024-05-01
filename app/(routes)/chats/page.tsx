'use client';

import { IconNotification } from '@/components/icon';
import { dummyChats } from '@/util/dummyChat';
import { HeaderFixed } from '../../components/layout/HeaderFixed';
import { ChatItem } from './ChatItem';
import ChatList from './ChatList';
import api from '@/hooks/axios';
import { useEffect } from 'react';

export default function ChatsPage() {
  useEffect(() => {
    const fetchChatList = async () => {
      const chatList = await api.get('/chat/list');
      console.log(chatList);
    };
    fetchChatList();
  }, []);
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

