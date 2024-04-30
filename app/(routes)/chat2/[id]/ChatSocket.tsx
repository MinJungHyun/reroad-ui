'use client';
import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
interface Props {
  room: string;
}
interface IMessageItem {
  type: 'string' | 'image';
  message: string;
  room: string;
  userId: number;
}
export default function ChatSocket({ room }: Props) {
  const [userId, setUserId] = useState<number>(1);
  const [socket, setSocket] = useState<Socket>();
  const [messageItems, setMessageItems] = useState<IMessageItem[]>([]);
  const [input, setInput] = useState('');

  const makeMessageObj = (message: string) => {
    return {
      type: 'string',
      message: message,
      room: room,
      userId: userId
    };
  };

  useEffect(() => {
    const newSocket = io('http://localhost:3010'); // NestJS 서버의 주소에 맞게 변경해야 합니다.
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('joinRoom', room);
      console.log('Connected to server');
    });

    newSocket.on('chatMessage', (message: IMessageItem) => {
      console.log('@@@@ front ', message);

      setMessageItems((prevMessages) => [...prevMessages, message]);
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
      <h1>Chat App</h1>
      <div>
        {messageItems.map((messageItem, index) => {
          const { userId, message } = messageItem;
          return (
            <p key={index}>
              {[userId]} {message}
            </p>
          );
        })}
      </div>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
