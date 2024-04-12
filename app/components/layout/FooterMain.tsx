'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

interface IMenu {
  id: string;
  icon_off: string;
  icon_on: string;
  text: string;
  link: string;
}
const menu = [
  {
    id: 'home',
    icon_off: 'ri-home-5-line',
    icon_on: 'ri-home-5-fill',
    text: '홈',
    link: '/products'
  },
  {
    id: 'board',
    icon_off: 'ri-newspaper-line',
    icon_on: 'ri-newspaper-fill',
    text: '게시판',
    link: '/board'
  },
  {
    id: 'chat',
    icon_off: 'ri-question-answer-line',
    icon_on: 'ri-question-answer-fill',
    text: '채팅',
    link: '/chats'
  },
  {
    id: 'mypage',
    icon_off: 'ri-user-smile-line',
    icon_on: 'ri-user-smile-fill',
    text: '내정보',
    link: '/mypage'
  }
];
export const FooterMain = () => {
  const pathname = usePathname();

  const excludeFooterPath = ['/product/', '/chat/', '/mypage/'];
  const isFooter = excludeFooterPath.every((path) => !pathname.includes(path));
  if (!isFooter) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0  max-w-[420px] min-w-[320px] w-full mx-auto">
      <div className="flex justify-start items-start py-2 w-full  bg-white  border-t border-solid border-top-1 border-gray-300">
        {menu.map((item) => (
          <FooterButton item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const FooterButton = ({ item }: { item: IMenu }) => {
  const pathname = usePathname();

  const { icon_off, icon_on, text, link } = item;

  return (
    <Link href={link} className="flex flex-col justify-start items-center flex-grow relative gap-1">
      <i
        className={classNames('text-xl text-black', {
          [icon_off]: !pathname.includes(link),
          [icon_on]: pathname.includes(link)
        })}
      ></i>
      <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left text-black">{text}</p>
    </Link>
  );
};
