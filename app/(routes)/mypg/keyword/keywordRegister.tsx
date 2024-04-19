'use client';
import { IconDelete, IconSend } from '@/components/icon';
import { Input } from '@/components/ui/input';
import { API_BASE_URL } from '@/lib/consts';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { toast } from 'sonner';

interface IKeyword {
  id: number;
  word: string;
}

export default function KeywordRegister() {
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const addKeyword = (keyword: string) => {
    if (keyword.trim() === '') return;
    if (keywordList.includes(keyword)) return; // 이미 있어요~
    setKeywordList([keyword, ...keywordList]);
    setKeyword(keyword);
  };
  const handleKeywordSubmit = (msg: string) => {
    if (msg.trim() === '') return;
    setInputValue('');
    console.log('@@@@', msg);

    addKeyword(msg);
  };
  const handleKeywordDelete = async (word: string) => {
    setKeywordList(keywordList.filter((item) => item !== word));

    const token = getCookie('access_token');
    console.log('@@@@', token);

    await fetch(`${API_BASE_URL}/keyword?word=${word}`, {
      method: 'DELETE',

      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };
  const getKeywordList = async () => {
    const token = getCookie('access_token');

    fetch(`${API_BASE_URL}/keyword`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setKeywordList(data.map((item: IKeyword) => item.word));
      });
  };

  useEffect(() => {
    getKeywordList();
  }, [getCookie('access_token')]);

  useEffect(() => {
    if (keyword != '') {
      const token = getCookie('access_token');
      fetch(`${API_BASE_URL}/keyword`, {
        method: 'POST',
        body: JSON.stringify({
          word: keyword
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setKeyword('');
      toast('키워드 알림이 등록되었습니다.');
    }
  }, [keyword]);

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
                <div onClick={(e) => handleKeywordDelete(keyword)}>
                  <IconDelete className="text-2xl"></IconDelete>
                </div>
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

