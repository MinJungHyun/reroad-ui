'use client';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { start } from 'repl';
import { IconAttachment, IconSend } from '~/components/icon';
import { IProduct } from '~/util/dummy_product';

interface Props {
  params: { id: number };
}
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
const ChatMessages = ({ chatMessages }: { chatMessages: IChatMessage[] }) => {
  const me = 'B';
  return (
    <div className="flex flex-col h-full mb-16 flex-1 overflow-y-auto pb-2">
      <div className="flex flex-col">
        <div className="grid grid-cols-12 gap-y-2">
          {chatMessages.map((chatMessage, index) => {
            const isMe = me === chatMessage.sender;
            const isLast = chatMessages[index - 1]?.sender !== chatMessage.sender;
            return (
              <div
                key={index}
                className={classNames('px-1 rounded-lg', {
                  'col-start-2 col-end-13': isMe,
                  'col-start-1 col-end-12': !isMe
                })}
              >
                <div
                  className={classNames(`flex flex-row items-center`, {
                    'flex-row-reverse': isMe
                  })}
                >
                  {!isMe &&
                    (isLast ? (
                      <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0`}>
                        {chatMessage.sender}
                      </div>
                    ) : (
                      <div className={`flex items-center justify-center h-8 w-8 flex-shrink-0`}></div>
                    ))}
                  <div
                    className={classNames(`relative ml-3 text-sm py-2 px-4 shadow rounded-xl`, {
                      'bg-indigo-100': isMe,
                      'bg-white': !isMe
                    })}
                  >
                    <div>{chatMessage.message}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const ChatInputs = ({ sendMessage }: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (msg: string) => {
    if (msg.trim() === '') return;
    setInputValue('');
    sendMessage(msg);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0  max-w-[420px] min-w-[320px] w-full mx-auto flex flex-row items-center h-16 bg-white px-4">
      <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
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
        <div
          className="py-2"
          onClick={(e) => {
            // inputRef.current?.focus();
            handleMessageSubmit(inputValue);
          }}
        >
          <IconSend
            className={classNames('text-2xl ', {
              'text-gray-400': inputValue === '',
              'text-indigo-500': inputValue != ''
            })}
          />
        </div>
      </div>
    </div>
  );
};

const AutoScroll = ({ dep }: { dep: any }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [dep]);
  return <div ref={messagesEndRef} />;
};

export default function ChatDetail({ params: { id } }: Props) {
  const me = 'B';
  const [messages, setMessages] = useState<IChatMessage[]>([
    {
      id: 1,
      message: '구매원해요',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    },
    {
      id: 2,
      message: '안녕하세요 가능합니다',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 3,
      message: '씨엘포레자이 입니다',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 4,
      message: '씨엘포레자이 입니다222 asd asdsdd a asd as dasas d',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 5,
      message: '지금가도 될까요',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    },
    {
      id: 6,
      message: '지금 밖이에요ㅜ',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 7,
      message: '언제 가능하세용~?',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    },
    {
      id: 8,
      message: '구매원해요',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    },
    {
      id: 9,
      message: '안녕하세요 가능합니다',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 10,
      message: '씨엘포레자이 입니다',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 11,
      message: '씨엘포레자이 입니다222 asd asdsdd a asd as dasas d',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 12,
      message: '지금가도 될까요',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    },
    {
      id: 6,
      message: '지금 밖이에요ㅜ',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 13,
      message: '언제 가능하세용~?',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    },
    {
      id: 14,
      message: '구매원해요',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    },
    {
      id: 15,
      message: '안녕하세요 가능합니다',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 16,
      message: '씨엘포레자이 입니다',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 17,
      message: '씨엘포레자이 입니다222 asd asdsdd a asd as dasas d',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 18,
      message: '지금가도 될까요',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    },
    {
      id: 19,
      message: '지금 밖이에요ㅜ',
      sender: 'A',
      receiver: 'B',
      created_at: new Date()
    },
    {
      id: 20,
      message: '언제 가능하세용~?',
      sender: 'B',
      receiver: 'A',
      created_at: new Date()
    }
  ]);
  const addMessage = (message: string) => {
    setMessages([...messages, { id: messages.length + 1, message, sender: me, receiver: 'A', created_at: new Date() }]);
  };

  return (
    <div className="flex flex-col bg-gray-100 p-1">
      <ChatMessages chatMessages={messages} />
      <AutoScroll dep={messages} />
      <ChatInputs sendMessage={addMessage} />
    </div>
  );
}

