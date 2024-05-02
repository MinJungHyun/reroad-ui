'use client';
import { API_BASE_HOST } from '@/lib/consts';
import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import ChatMessageList, { AutoScroll } from './chat-message-list';
import { ChatInput } from './chat-input';
import { IChatMessage, ISendMessage, MessageType } from '../chat.type';
import api from '@/hooks/axios';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
interface Props {
  room: string;
}

const SOCKET_SERVER_URL = API_BASE_HOST || 'http://localhost:3000';
export default function ChatSocket({ room }: Props) {
  const { user } = useAuth();
  const router = useRouter();
  const [userId, setUserId] = useState<number>(0);
  const [socket, setSocket] = useState<Socket>();
  const [messageItems, setMessageItems] = useState<IChatMessage[]>([]);

  useEffect(() => {
    if (user?.id) {
      setUserId(+user.id);
    }
  }, [user?.id]);

  // init fetch messages
  useEffect(() => {
    const fetchMessage = async () => {
      if (room) {
        const res = await api.get(`/chat/${room}`);

        if (res.status === 200) {
          setMessageItems(res.data);
        }
      }
    };
    fetchMessage();
  }, [room]);

  // socket connection and event handling
  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL); // connect to socket server
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('joinRoom', room);
      console.log('[ws-Connected]');
    });

    newSocket.on('chatMessage', (message: ISendMessage) => {
      console.log('[ws-Received] ', message);

      const item: IChatMessage = {
        id: `ws_${room}_${userId}_${dayjs()}`,
        chatId: 1,
        userId: message.userId,
        message: message.message,
        type: message.type as MessageType,
        createdAt: new Date()
      };

      setMessageItems((prevMessages) => [...prevMessages, item]);
    });

    return () => {
      newSocket.disconnect();
      console.log('[ws-Disconnected]');
    };
  }, []);

  // handle send message
  const sendMessage = (msg: string) => {
    if (msg.trim() !== '') {
      if (socket) {
        if (userId !== 0) {
          socket.emit('chatMessage', {
            type: 'STRING',
            message: msg,
            room: room,
            userId: userId
          });
        } else {
          toast.error('로그인이 필요합니다.');
          router.push('/login');
        }
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 p-1 pt-4">
      {userId}
      <ChatMessageList chatMessages={messageItems} />
      <AutoScroll dep={messageItems} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
