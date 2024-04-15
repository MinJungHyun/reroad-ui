import Link from "next/link";

export const FooterMenu = () => {
  const menu = [
    {
      key: "home",
      icon_off: "ri-home-5-line",
      icon_on: "ri-home-5-fill",
      text: "홈",
      link: "/products",
    },
    // !: 임시, 변경될 수도 있음.
    {
      key: "boards",
      icon_off: "ri-quill-pen-line",
      icon_on: "ri-quill-pen-fill",
      text: "게시판",
      link: "/boards",
    },
    // {
    //   key: 'roadmap',
    //   icon_off: 'ri-map-2-line',
    //   icon_on: 'ri-map-2-fill',
    //   text: '로드맵'
    // },
    {
      key: "chat",
      icon_off: "ri-question-answer-line",
      icon_on: "ri-question-answer-fill",
      text: "채팅",
      link: "/chats",
    },
    {
      key: "mypage",
      icon_off: "ri-user-smile-line",
      icon_on: "ri-user-smile-fill",
      text: "내정보",
      link: "/mypage",
    },
  ];

  return menu.map((item, index) => (
    <Link
      href={item.link}
      key={item.key}
      className="flex flex-col justify-start items-center flex-grow relative gap-1"
    >
      <i className={`text-xl text-black ${item.icon_off}`}></i>
      <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left text-black">
        {item.text}
      </p>
    </Link>
  ));
};
