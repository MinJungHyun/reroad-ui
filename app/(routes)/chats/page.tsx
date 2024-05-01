'use client';

import { IconNotification } from '@/components/icon';
import api from '@/hooks/axios';
import { useEffect, useState } from 'react';
import { HeaderFixed } from '../../components/layout/HeaderFixed';
import ChatList from './ChatList';
import { IChatListItem } from './chats.type';

export default function ChatsPage() {
  const [list, setList] = useState<IChatListItem[]>([]);
  useEffect(() => {
    const fetchChatList = async () => {
      const res = await api.get('/chat/list');
      const chatList: IChatListItem[] = res.data;
      if (chatList.length > 0) {
        setList(chatList);
      }
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
      <ChatList list={list} />
    </div>
  );
}

