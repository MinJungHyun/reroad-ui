/* eslint-disable no-underscore-dangle */

"use client";

import { getCookie } from "cookies-next";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import api from "@/hooks/axios";
import { Input } from "@/components/ui/input";

import KeywordItem from "./KeywordItem";
import { IKeyword } from "./page";

export default function KeywordRegister() {
  const [keywordInfoList, setKeywordInfoList] = useState<IKeyword[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (word: string) => {
    if (word.trim() === "") return;

    if (keywordInfoList.map((v) => v.word).includes(word)) {
      toast.error("이미 등록된 키워드입니다.", { duration: 800 });
      return;
    }

    setInputValue("");
    setKeyword(word);
  };

  const getKeywordList = async () => {
    const res = await api.get("/keyword/list");
    if (res) {
      const _keywordDataList: IKeyword[] = res.data;
      setKeywordInfoList(_keywordDataList);
    }
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/keyword/${id}`);
    toast("삭제되었습니다.", { duration: 800 });
    getKeywordList();
  };

  useEffect(() => {
    getKeywordList();
  }, [getCookie("access_token")]);

  useEffect(() => {
    const keywordRefine = keyword.trim();
    if (keywordRefine !== "") {
      api
        .post("/keyword", {
          word: keywordRefine,
        })
        .then(() => {
          getKeywordList();
        });

      setKeyword("");
      toast("키워드 알림이 등록되었습니다.", { duration: 800 });
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
                placeholder="알림 키워드를 입력해주세요."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(inputValue);
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
                handleSubmit(inputValue);
              }}
            >
              등록
            </button>
          </div>
        </div>
      </div>
      <main className="p-5 grid grid-cols-1 divide-y divide-gray-200 bg-white">
        {keywordInfoList.length > 0 ? (
          keywordInfoList.map((keywordInfo, index) => (
            <KeywordItem
              keywordInfo={keywordInfo}
              handleDelete={handleDelete}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            />
          ))
        ) : (
          <div>등록된 키워드가 없습니다.</div>
        )}
      </main>
    </div>
  );
}
