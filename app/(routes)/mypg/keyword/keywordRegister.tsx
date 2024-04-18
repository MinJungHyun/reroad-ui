'use client';
import { IconDelete, IconSend } from '@/components/icon';
import { Input } from '@/components/ui/input';
import classNames from 'classnames';
import { useRef, useState } from 'react';

export default function KeywordRegister() {
  const [keywordList, setKeywordList] = useState<string[]>(['mx master', '이케아', '디스플레이링크']);
  const [keyword, setKeyword] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const addKeyword = (keyword: string) => {
    if (keyword.trim() === '') return;
    if (keywordList.includes(keyword)) return; // 이미 있어요~
    setKeywordList([keyword, ...keywordList]);
    setKeyword('');
  };
  const handleKeywordSubmit = (msg: string) => {
    if (msg.trim() === '') return;
    setInputValue('');
    addKeyword(msg);
  };
  return (
    <div>
      <div className="sticky top-0">
        <div className="w-full mx-auto flex flex-row items-center">
          <div className="flex-grow">
            <div className="relative w-full">
              <Input
                type="text"
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 h-10"
                placeholder="알림 받을 키워드를 입력해주세요."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    handleKeywordSubmit(inputValue);
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
                handleKeywordSubmit(inputValue);
              }}
            >
              등록
            </button>
          </div>
        </div>
      </div>
      <div>
        {keywordList.map((keyword, index) => (
          <div
            key={index}
            className={classNames(
              'flex justify-between items-center h-14 px-4 border-b border-gray-200',
              index === keywordList.length - 1 ? 'border-b-0' : ''
            )}
          >
            <div>{keyword}</div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setKeywordList(keywordList.filter((_, i) => i !== index));
                }}
              >
                <IconDelete className="text-2xl"></IconDelete>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

