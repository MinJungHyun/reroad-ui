// pages/index.js

import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export default function Home() {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:3010'); // NestJS 서버의 주소에 맞게 변경해야 합니다.
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    newSocket.on('chatMessage', (message: any) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== '') {
      if (socket) {
        socket.emit('chatMessage', input);
        setInput('');
      }
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

