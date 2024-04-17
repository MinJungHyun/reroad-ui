"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

interface IMenu {
  id: string;
  iconOff: string;
  iconOn: string;
  text: string;
  link: string;
}

const menu = [
  {
    id: "home",
    iconOff: "ri-home-5-line",
    iconOn: "ri-home-5-fill",
    text: "홈",
    link: "/products",
  },
  {
    id: "board",
    iconOff: "ri-newspaper-line",
    iconOn: "ri-newspaper-fill",
    text: "게시판",
    link: "/boards",
  },
  {
    id: "chat",
    iconOff: "ri-question-answer-line",
    iconOn: "ri-question-answer-fill",
    text: "채팅",
    link: "/chats",
  },
  {
    id: "mypage",
    iconOff: "ri-user-smile-line",
    iconOn: "ri-user-smile-fill",
    text: "내정보",
    link: "/mypage",
  },
];

function FooterButton({ item }: { item: IMenu }) {
  const pathname = usePathname();

  const { iconOff, iconOn, text, link } = item;

  return (
    <Link
      href={link}
      className="flex flex-col justify-start items-center flex-grow relative gap-1"
    >
      <i
        className={classNames("text-xl text-black", {
          [iconOff]: !pathname.includes(link),
          [iconOn]: pathname.includes(link),
        })}
      />
      <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left text-black">
        {text}
      </p>
    </Link>
  );
}

export function FooterMain() {
  const pathname = usePathname();

  const excludeFooterPath = ["/product/", "/chat/", "/mypage/", "/add"];
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
}