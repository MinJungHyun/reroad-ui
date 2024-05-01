'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { IconAttachment, IconSend } from '@/components/icon';
import { dummyChatDetail } from '@/util/dummyChat';

interface IChatMessage {
  id: number;
  message: string;
  sender: string;
  receiver: string;
  created_at: Date;
}

interface ChatInputProps {
  sendMessage: (msg: string) => void;
}

export function ChatInput({ sendMessage }: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (msg: string) => {
    if (msg.trim() === '') return;
    setInputValue('');
    sendMessage(msg);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0  max-w-[420px] min-w-[320px] w-full mx-auto flex flex-row items-center h-16 bg-white px-4 ">
      <div>
        <button type="button" className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <IconAttachment className="text-xl" />
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleMessageSubmit(inputValue);
              }
            }}
            ref={inputRef}
          />
        </div>
      </div>
      <div className="ml-4">
        <button
          type="button"
          className="py-2"
          onClick={() => {
            // inputRef.current?.focus();
            handleMessageSubmit(inputValue);
          }}
        >
          <IconSend
            className={classNames('text-2xl ', {
              'text-gray-400': inputValue === '',
              'text-indigo-500': inputValue !== ''
            })}
          />
        </button>
      </div>
    </div>
  );
}

