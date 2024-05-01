'use client';
import { API_BASE_HOST } from '@/lib/consts';
import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import ChatMessageList, { AutoScroll } from './components/chat-message-list';
import { ChatInput } from './components/chat-input';
import { IChatMessage, ISendMessage, MessageType } from './chat.type';
interface Props {
  room: string;
}

const SOCKET_SERVER_URL = API_BASE_HOST || 'http://localhost:3000';
export default function ChatSocket({ room }: Props) {
  const [userId, setUserId] = useState<number>(1);
  const [socket, setSocket] = useState<Socket>();
  const [messageItems, setMessageItems] = useState<IChatMessage[]>([]);
  const [input, setInput] = useState('');

  const makeMessageObj = (message: string) => {
    return {
      type: 'STRING',
      message: message,
      room: room,
      userId: userId
    };
  };

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL); // NestJS 서버의 주소에 맞게 변경해야 합니다.
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('joinRoom', room);
      console.log('Connected to server');
    });

    newSocket.on('chatMessage', (message: ISendMessage) => {
      console.log('@@@@ front ', message);

      const item: IChatMessage = {
        id: messageItems.length + 1,
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
      console.log('Disconnected from server');
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== '') {
      if (socket) {
        socket.emit('chatMessage', makeMessageObj(input));
        setInput('');
      }
    }
  };

  return (
    <div>
      <div className="w-full h-full flex flex-col bg-gray-100 p-1 pt-4">
        <ChatMessageList chatMessages={messageItems} />
        <AutoScroll dep={messageItems} />
        <ChatInput sendMessage={sendMessage} />
      </div>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
