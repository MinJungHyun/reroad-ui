'use client';
import { dummy_products } from '@/util/dummy_product';
import Image from 'next/image';
import Link from 'next/link';

export default function ChatList() {
  console.log(0);
  return (
    <div className="flex flex-col justify-start items-center w-[390px] relative">
      <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative px-4 py-3 bg-white">
        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-black">채팅</p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.75 3C5.75544 3 4.80161 3.39509 4.09835 4.09835C3.39509 4.80161 3 5.75544 3 6.75V8.25C3 8.44891 3.07902 8.63968 3.21967 8.78033C3.36032 8.92098 3.55109 9 3.75 9C3.94891 9 4.13968 8.92098 4.28033 8.78033C4.42098 8.63968 4.5 8.44891 4.5 8.25V6.75C4.5 6.15326 4.73705 5.58097 5.15901 5.15901C5.58097 4.73705 6.15326 4.5 6.75 4.5H8.25C8.44891 4.5 8.63968 4.42098 8.78033 4.28033C8.92098 4.13968 9 3.94891 9 3.75C9 3.55109 8.92098 3.36032 8.78033 3.21967C8.63968 3.07902 8.44891 3 8.25 3H6.75ZM15.75 3C15.5511 3 15.3603 3.07902 15.2197 3.21967C15.079 3.36032 15 3.55109 15 3.75C15 3.94891 15.079 4.13968 15.2197 4.28033C15.3603 4.42098 15.5511 4.5 15.75 4.5H17.25C17.8467 4.5 18.419 4.73705 18.841 5.15901C19.2629 5.58097 19.5 6.15326 19.5 6.75V8.25C19.5 8.44891 19.579 8.63968 19.7197 8.78033C19.8603 8.92098 20.0511 9 20.25 9C20.4489 9 20.6397 8.92098 20.7803 8.78033C20.921 8.63968 21 8.44891 21 8.25V6.75C21 5.75544 20.6049 4.80161 19.9016 4.09835C19.1984 3.39509 18.2446 3 17.25 3H15.75ZM4.5 15.75C4.5 15.5511 4.42098 15.3603 4.28033 15.2197C4.13968 15.079 3.94891 15 3.75 15C3.55109 15 3.36032 15.079 3.21967 15.2197C3.07902 15.3603 3 15.5511 3 15.75V17.25C3 18.2446 3.39509 19.1984 4.09835 19.9016C4.80161 20.6049 5.75544 21 6.75 21H8.25C8.44891 21 8.63968 20.921 8.78033 20.7803C8.92098 20.6397 9 20.4489 9 20.25C9 20.0511 8.92098 19.8603 8.78033 19.7197C8.63968 19.579 8.44891 19.5 8.25 19.5H6.75C6.15326 19.5 5.58097 19.2629 5.15901 18.841C4.73705 18.419 4.5 17.8467 4.5 17.25V15.75ZM21 15.75C21 15.5511 20.921 15.3603 20.7803 15.2197C20.6397 15.079 20.4489 15 20.25 15C20.0511 15 19.8603 15.079 19.7197 15.2197C19.579 15.3603 19.5 15.5511 19.5 15.75V17.25C19.5 17.8467 19.2629 18.419 18.841 18.841C18.419 19.2629 17.8467 19.5 17.25 19.5H15.75C15.5511 19.5 15.3603 19.579 15.2197 19.7197C15.079 19.8603 15 20.0511 15 20.25C15 20.4489 15.079 20.6397 15.2197 20.7803C15.3603 20.921 15.5511 21 15.75 21H17.25C18.2446 21 19.1984 20.6049 19.9016 19.9016C20.6049 19.1984 21 18.2446 21 17.25V15.75ZM7.5 11.25C7.30109 11.25 7.11032 11.329 6.96967 11.4697C6.82902 11.6103 6.75 11.8011 6.75 12C6.75 12.1989 6.82902 12.3897 6.96967 12.5303C7.11032 12.671 7.30109 12.75 7.5 12.75H16.5C16.6989 12.75 16.8897 12.671 17.0303 12.5303C17.171 12.3897 17.25 12.1989 17.25 12C17.25 11.8011 17.171 11.6103 17.0303 11.4697C16.8897 11.329 16.6989 11.25 16.5 11.25H7.5Z"
              fill="black"
            />
          </svg>
          <img src="notification.png" className="flex-grow-0 flex-shrink-0 w-6 h-6 object-contain" />
        </div>
      </div>
      <svg
        width={390}
        height={2}
        viewBox="0 0 390 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="self-stretch flex-grow-0 flex-shrink-0"
        preserveAspectRatio="none"
      >
        <path d="M0 1H390" stroke="#D9D9D9" />
      </svg>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <img className="flex-grow-0 flex-shrink-0" src="ellipse-2.png" />
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">요우</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">군자동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">1주 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">감사합니다!! 조심히가세요!</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={21} cy={21} r={20} fill="#F4F4F4" />
            <path
              d="M21 1C9.96 1 1 9.96 1 21C1 32.04 9.96 41 21 41C32.04 41 41 32.04 41 21C41 9.96 32.04 1 21 1ZM21 9C24.86 9 28 12.14 28 16C28 19.86 24.86 23 21 23C17.14 23 14 19.86 14 16C14 12.14 17.14 9 21 9ZM21 37C16.94 37 12.14 35.36 8.72 31.24C12.2232 28.4914 16.5472 26.9976 21 26.9976C25.4528 26.9976 29.7768 28.4914 33.28 31.24C29.86 35.36 25.06 37 21 37Z"
              fill="#C7C7C7"
            />
            <rect x="0.5" y="0.5" width={41} height={41} rx="20.5" stroke="#BCBCBC" />
          </svg>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">요이키</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">문정동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">1주 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">확인했습니다 감사합니다 :)</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-2.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <img className="flex-grow-0 flex-shrink-0" src="ellipse-2-2.png" />
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">chan</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">구의동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">2주 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">넵 수고하세용</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-3.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <img className="flex-grow-0 flex-shrink-0" src="ellipse-2-3.png" />
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">오지</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">보문동2가</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">1달 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">안녕하세요 답장이 너무 늦었네여 죄송···</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-4.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={21} cy={21} r={20} fill="#F4F4F4" />
            <path
              d="M21 1C9.96 1 1 9.96 1 21C1 32.04 9.96 41 21 41C32.04 41 41 32.04 41 21C41 9.96 32.04 1 21 1ZM21 9C24.86 9 28 12.14 28 16C28 19.86 24.86 23 21 23C17.14 23 14 19.86 14 16C14 12.14 17.14 9 21 9ZM21 37C16.94 37 12.14 35.36 8.72 31.24C12.2232 28.4914 16.5472 26.9976 21 26.9976C25.4528 26.9976 29.7768 28.4914 33.28 31.24C29.86 35.36 25.06 37 21 37Z"
              fill="#C7C7C7"
            />
            <rect x="0.5" y="0.5" width={41} height={41} rx="20.5" stroke="#BCBCBC" />
          </svg>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">누룽지</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">면목동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">1달 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">이람다님이 이모티콘을 보냈어요.</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-5.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={21} cy={21} r={20} fill="#F4F4F4" />
            <path
              d="M21 1C9.96 1 1 9.96 1 21C1 32.04 9.96 41 21 41C32.04 41 41 32.04 41 21C41 9.96 32.04 1 21 1ZM21 9C24.86 9 28 12.14 28 16C28 19.86 24.86 23 21 23C17.14 23 14 19.86 14 16C14 12.14 17.14 9 21 9ZM21 37C16.94 37 12.14 35.36 8.72 31.24C12.2232 28.4914 16.5472 26.9976 21 26.9976C25.4528 26.9976 29.7768 28.4914 33.28 31.24C29.86 35.36 25.06 37 21 37Z"
              fill="#C7C7C7"
            />
            <rect x="0.5" y="0.5" width={41} height={41} rx="20.5" stroke="#BCBCBC" />
          </svg>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">kenny</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">자양제4동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">3달 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">네.</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-6.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative">
            <img className="absolute left-[-1px] top-[-1px]" src="ellipse-2-4.png" />
            <div className="flex justify-start items-start absolute left-6 top-6 gap-2.5 p-0.5 rounded-[100px] bg-[#ffebe0] border border-white">
              <div className="flex-grow-0 flex-shrink-0 w-3 h-3">
                <img src="department-shop.png" className="w-3 h-3 absolute left-[1.5px] top-[1.5px] object-contain" />
                <div className="w-3 h-3 absolute left-[1.5px] top-[1.5px] bg-[#ff7e36]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">자리보금</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">옥수동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">3달 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">자리보금님이 이모티콘을 보냈어요.</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-7.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative">
            <img className="absolute left-[-1px] top-[-1px]" src="ellipse-2-5.png" />
            <div className="flex justify-start items-start absolute left-6 top-6 gap-2.5 p-0.5 rounded-[100px] bg-[#ffebe0] border border-white">
              <div className="flex-grow-0 flex-shrink-0 w-3 h-3">
                <img src="calendar.png" className="w-3 h-3 absolute left-[1.5px] top-[1.5px] object-contain" />
                <div className="w-4 h-4 absolute left-[1.5px] top-[1.5px] bg-[#ff7e36]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">리빙스턴</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">면목동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">6달 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">리빙스턴님이 이모티콘을 보냈어요.</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-8.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={21} cy={21} r={20} fill="#F4F4F4" />
            <path
              d="M21 1C9.96 1 1 9.96 1 21C1 32.04 9.96 41 21 41C32.04 41 41 32.04 41 21C41 9.96 32.04 1 21 1ZM21 9C24.86 9 28 12.14 28 16C28 19.86 24.86 23 21 23C17.14 23 14 19.86 14 16C14 12.14 17.14 9 21 9ZM21 37C16.94 37 12.14 35.36 8.72 31.24C12.2232 28.4914 16.5472 26.9976 21 26.9976C25.4528 26.9976 29.7768 28.4914 33.28 31.24C29.86 35.36 25.06 37 21 37Z"
              fill="#C7C7C7"
            />
            <rect x="0.5" y="0.5" width={41} height={41} rx="20.5" stroke="#BCBCBC" />
          </svg>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">꺄롱이</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">중곡동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">7달 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">옷 예쁘네요!</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-9.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] relative gap-4 p-4 bg-white">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={21} cy={21} r={20} fill="#F4F4F4" />
            <path
              d="M21 1C9.96 1 1 9.96 1 21C1 32.04 9.96 41 21 41C32.04 41 41 32.04 41 21C41 9.96 32.04 1 21 1ZM21 9C24.86 9 28 12.14 28 16C28 19.86 24.86 23 21 23C17.14 23 14 19.86 14 16C14 12.14 17.14 9 21 9ZM21 37C16.94 37 12.14 35.36 8.72 31.24C12.2232 28.4914 16.5472 26.9976 21 26.9976C25.4528 26.9976 29.7768 28.4914 33.28 31.24C29.86 35.36 25.06 37 21 37Z"
              fill="#C7C7C7"
            />
            <rect x="0.5" y="0.5" width={41} height={41} rx="20.5" stroke="#BCBCBC" />
          </svg>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">깨롱이</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">중곡동</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">7달 전</p>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">네.</p>
          </div>
          <img className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded" src="rectangle-2-10.png" />
        </div>
        <svg
          width={390}
          height={2}
          viewBox="0 0 390 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0 1H390" stroke="#EEEEEE" />
        </svg>
      </div>
    </div>
  );
}

