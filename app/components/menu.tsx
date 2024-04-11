import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const FooterMenu = () => {
  const pathname = usePathname();

  const menu = [
    {
      key: 'home',
      icon_off: 'ri-home-5-line',
      icon_on: 'ri-home-5-fill',
      text: '홈',
      link: '/products'
    },
    {
      key: 'board',
      icon_off: 'ri-newspaper-line',
      icon_on: 'ri-newspaper-fill',
      text: '게시판',
      link: '/board'
    },
    {
      key: 'chat',
      icon_off: 'ri-question-answer-line',
      icon_on: 'ri-question-answer-fill',
      text: '채팅',
      link: '/chats'
    },
    {
      key: 'mypage',
      icon_off: 'ri-user-smile-line',
      icon_on: 'ri-user-smile-fill',
      text: '내정보',
      link: '/mypage'
    }
  ];

  return menu.map((item, index) => (
    <Link href={item.link} key={item.key} className="flex flex-col justify-start items-center flex-grow relative gap-1">
      <i
        className={classNames('text-xl text-black', {
          [item.icon_off]: !pathname.includes(item.link),
          [item.icon_on]: pathname.includes(item.link)
        })}
      ></i>
      <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left text-black">{item.text}</p>
    </Link>
  ));
};

