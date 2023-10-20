import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '리로드',
  description: '자전거 중고거래를 편하게'
};
const menu1 = [
  {
    key: 'home',
    icon_off: 'ri-home-5-line',
    icon_on: 'ri-home-5-fill',
    text: '홈',
    link: '/'
  },
  // {
  //   key: 'roadmap',
  //   icon_off: 'ri-map-2-line',
  //   icon_on: 'ri-map-2-fill',
  //   text: '로드맵'
  // },
  {
    key: 'chat',
    icon_off: 'ri-question-answer-line',
    icon_on: 'ri-question-answer-fill',
    text: '채팅',
    link: '/chat'
  },
  {
    key: 'mypage',
    icon_off: 'ri-user-smile-line',
    icon_on: 'ri-user-smile-fill',
    text: '내정보',
    link: '/mypage'
  }
];
const Footer = () => {
  return (
    <div className="flex flex-col justify-start items-center fixed bottom-0">
      <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-4">
        <div
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-3 rounded-[100px] bg-[#ff7e36]"
          style={{ boxShadow: '0px 4px 12px 0 rgba(0,0,0,0.12)' }}
        >
          <i className="ri-add-line text-2xl flex-grow-0 flex-shrink-0 w-6 h-6 object-contain"></i>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative ">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[390px] py-2 bg-white">
          {menu1.map((menu, index) => (
            <Link href={menu.link} key={menu.key} className="flex flex-col justify-start items-center flex-grow relative gap-1">
              <i className={`text-xl text-black ${menu.icon_off}`}></i>
              <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left text-black">{menu.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

