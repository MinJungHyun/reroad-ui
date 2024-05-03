'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { IChatMessage } from '../chat.type';
import { useAuth } from '@/hooks/useAuth';
import { dayjsSimple } from '@/lib/date';
import dayjs from 'dayjs';

export default function ChatMessageList({ chatMessages }: { chatMessages: IChatMessage[] }) {
  const { user } = useAuth();
  return (
    <div className="flex flex-col h-full flex-1 overflow-y-auto pb-10">
      <div className="flex flex-col">
        <div className="grid grid-cols-12 gap-y-2">
          {chatMessages.map((chatMessage, index) => {
            const isMe = +user?.id === chatMessage.userId;
            const isLast = chatMessages[index - 1]?.userId !== chatMessage.userId;
            const isSameTime = dayjsSimple(chatMessages[index + 1]?.createdAt) === dayjsSimple(chatMessage.createdAt);
            const isNewDay = dayjs(chatMessage.createdAt).isSame(dayjs(chatMessages[index - 1]?.createdAt), 'day');

            return (
              <>
                {!isNewDay && (
                  <div className="col-start-5 col-end-9">
                    <div className="flex justify-center text-[#8c8c8c] text-[9px] my-3 p-1 bg-slate-200 rounded-3xl">
                      {dayjs(chatMessage.createdAt).format('YYYY년 MM월 DD일')}
                    </div>
                  </div>
                )}
                <div
                  key={chatMessage.id}
                  className={classNames('px-2 rounded-lg', {
                    'col-start-4 col-end-13': isMe,
                    'col-start-1 col-end-10': !isMe
                  })}
                >
                  <div
                    className={classNames(`flex flex-row items-center gap-1`, {
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
                      className={classNames(`relative  text-sm py-2 px-2 shadow rounded-xl`, {
                        'bg-indigo-100': isMe,
                        'bg-white': !isMe
                      })}
                    >
                      <div>{chatMessage.message}</div>
                    </div>

                    {!isSameTime && (
                      <div className=" text-[8px] text-[#8c8c8c] mt-auto">{dayjsSimple(chatMessage.createdAt)}</div>
                    )}
                  </div>
                </div>
              </>
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

