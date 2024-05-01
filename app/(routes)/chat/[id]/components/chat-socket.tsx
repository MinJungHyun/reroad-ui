'use client';
import { API_BASE_HOST } from '@/lib/consts';
import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import ChatMessageList, { AutoScroll } from './chat-message-list';
import { ChatInput } from './chat-input';
import { IChatMessage, ISendMessage, MessageType } from '../chat.type';
import api from '@/hooks/axios';
interface Props {
  room: string;
}

const SOCKET_SERVER_URL = API_BASE_HOST || 'http://localhost:3000';
export default function ChatSocket({ room }: Props) {
  const [userId, setUserId] = useState<number>(1);
  const [socket, setSocket] = useState<Socket>();
  const [messageItems, setMessageItems] = useState<IChatMessage[]>([]);

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
        id: `ws_${room}_${userId}_${messageItems.length + 1}`,
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
        socket.emit('chatMessage', makeMessageString(msg));
      }
    }
  };

  const makeMessageString = (message: string) => {
    return {
      type: 'STRING',
      message: message,
      room: room,
      userId: userId
    };
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 p-1 pt-4">
      <ChatMessageList chatMessages={messageItems} />
      <AutoScroll dep={messageItems} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
