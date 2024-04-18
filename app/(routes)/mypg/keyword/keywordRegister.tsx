'use client';
import { IconDelete, IconSend } from '@/components/icon';
import { Input } from '@/components/ui/input';
import classNames from 'classnames';
import { useRef, useState } from 'react';

export default function KeywordRegister() {
  const [keywordList, setKeywordList] = useState<string[]>([
    'mx master',
    '이케아',
    '디스플레이링크',
    '맥',
    '삼성',
    '애플',
    'm1',
    '맥스튜디오',
    '맥미니',
    '갤럭시',
    '아이폰',
    '아이패드',
    '맥북',
    '맥북프로',
    '맥북에어',
    '아이맥',
    '맥프로',
    '맥에어',
    '맥북프로13',
    '맥북프로16',
    '맥북에어13',
    '맥북에어16',
    '아이맥21'
  ]);
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
      <div className="sticky top-[52px] bg-white p-5 pb-0">
        <div className="w-full mx-auto flex flex-row items-center">
          <div className="flex-grow">
            <div className="relative w-full">
              <Input
                type="text"
                className="flex w-full border focus:outline-none focus:border-indigo-300 h-10"
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
      <main className="p-5 grid grid-cols-1  divide-y divide-gray-200  bg-white">
        {keywordList.map((keyword, index) => (
          <div key={index} className={classNames('flex justify-between items-center h-16')}>
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
      </main>
    </div>
  );
}

