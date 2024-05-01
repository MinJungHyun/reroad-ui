"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { IconAttachment, IconSend } from "@/components/icon";
import { dummyChatDetail } from "@/util/dummyChat";

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

function ChatMessages({ chatMessages }: { chatMessages: IChatMessage[] }) {
  const me = "B";

  return (
    <div className="flex flex-col h-full mb-16 flex-1 overflow-y-auto pb-4">
      <div className="flex flex-col">
        <div className="grid grid-cols-12 gap-y-2">
          {chatMessages.map((chatMessage, index) => {
            const isMe = me === chatMessage.sender;
            const isLast =
              chatMessages[index - 1]?.sender !== chatMessage.sender;
            return (
              <div
                key={chatMessage.id}
                className={classNames("px-1 rounded-lg", {
                  "col-start-2 col-end-13": isMe,
                  "col-start-1 col-end-12": !isMe,
                })}
              >
                <div
                  className={classNames(`flex flex-row items-center`, {
                    "flex-row-reverse": isMe,
                  })}
                >
                  {!isMe &&
                    (isLast ? (
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                        {chatMessage.sender}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-8 w-8 flex-shrink-0" />
                    ))}
                  <div
                    className={classNames(
                      `relative ml-3 text-sm py-2 px-4 shadow rounded-xl`,
                      {
                        "bg-indigo-100": isMe,
                        "bg-white": !isMe,
                      },
                    )}
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
function ChatInputs({ sendMessage }: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSubmit = (msg: string) => {
    if (msg.trim() === "") return;
    setInputValue("");
    sendMessage(msg);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0  max-w-[420px] min-w-[320px] w-full mx-auto flex flex-row items-center h-16 bg-white px-4 ">
      <div>
        <button
          type="button"
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
        >
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
              if (e.key === "Enter") {
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
            className={classNames("text-2xl ", {
              "text-gray-400": inputValue === "",
              "text-indigo-500": inputValue !== "",
            })}
          />
        </button>
      </div>
    </div>
  );
}

function AutoScroll({ dep }: { dep: IChatMessage[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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

// interface Props {
//   params: { id: number };
// }

export default function ChatDetail() {
  const me = "B";
  const [messages, setMessages] = useState<IChatMessage[]>(dummyChatDetail);
  const addMessage = (message: string) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        message,
        sender: me,
        receiver: "A",
        created_at: new Date(),
      },
    ]);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 p-1 pt-4">
      <ChatMessages chatMessages={messages} />
      <AutoScroll dep={messages} />
      <ChatInputs sendMessage={addMessage} />
    </div>
  );
}
