'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { IChatMessage } from '../chat.type';

export default function ChatMessageList({ chatMessages }: { chatMessages: IChatMessage[] }) {
  const me = 1;
  return (
    <div className="flex flex-col h-full mb-16 flex-1 overflow-y-auto pb-4">
      <div className="flex flex-col">
        <div className="grid grid-cols-12 gap-y-2">
          {chatMessages.map((chatMessage, index) => {
            const isMe = me === chatMessage.userId;
            const isLast = chatMessages[index - 1]?.userId !== chatMessage.userId;
            return (
              <div
                key={chatMessage.id}
                className={classNames('px-1 rounded-lg', {
                  'col-start-4 col-end-13': isMe,
                  'col-start-1 col-end-10': !isMe
                })}
              >
                <div
                  className={classNames(`flex flex-row items-center`, {
                    'flex-row-reverse': isMe
                  })}
                >
                  {!isMe &&
                    (isLast ? (
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                        {chatMessage.userId}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-8 w-8 flex-shrink-0" />
                    ))}
                  <div
                    className={classNames(`relative ml-3 text-sm py-2 px-2 shadow rounded-xl`, {
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
}

export function AutoScroll({ dep }: { dep: IChatMessage[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const delayedScroll = async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 30);
      });
      scrollToBottom();
    };

    delayedScroll();
  }, [dep]);

  return <div ref={messagesEndRef} />;
}

