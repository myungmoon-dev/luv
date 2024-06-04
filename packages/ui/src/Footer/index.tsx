import { Icon } from "..";

interface IFooterProps {
  push: (url: string) => void;
}

export const Footer = ({ push }: IFooterProps) => {
  const menus: { label: string; path: string }[] = [
    { label: "교회소개", path: "/about" },
    { label: "설교•찬양", path: "/sermons/sunday-3" },
    { label: "다음세대", path: "/education" },
    { label: "주보•소식", path: "/news/bulletins" },
    { label: "교회훈련", path: "/discipleship" },
  ];

  const handleNotPreparedClick = () => {
    alert("아직 준비되지 않았습니다.");
  };

  return (
    <footer className="ui-bg-[#363636] ui-py-14 ui-flex ui-flex-col ui-items-center ui-gap-5 ui-text-white">
      <div className="ui-flex ui-items-center ui-gap-5">
        <Icon name="LogoBlue" size="4xl" />
        <div className="ui-flex ui-gap-2">
          <a
            href="https://www.youtube.com/channel/UC1v4PcaTti7luD1pYj_AgDg"
            target="_blank"
          >
            <Icon
              name="RealYoutube"
              size="xl"
              strokeColor="white"
              backgroundColor="white"
            />
          </a>
          <a
            href="https://www.instagram.com/myungmoonchurch?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <Icon
              name="Instagram"
              size="xl"
              strokeColor="white"
              backgroundColor="white"
            />
          </a>
        </div>
      </div>
      <nav className="ui-flex ui-gap-5 ui-text-sm sm:ui-text-base">
        {menus.map((menu) => (
          <button
            onClick={() => push(menu.path)}
            key={menu.path}
            className="ui-font-semibold ui-text-md"
          >
            {menu.label}
          </button>
        ))}
      </nav>
      <div className="ui-flex ui-flex-col ui-items-center ui-gap-1">
        <div className="ui-flex ui-gap-3 ui-text-xs sm:ui-text-base">
          <p>TEL. 02-861-5071</p>
          <p>서울특별시 금천구 남부순환로 1406 명문교회</p>
        </div>
        <p className="ui-text-sm sm:ui-text-base">
          Copyright © 2024 명문교회 All rights reserved.
        </p>
      </div>
      <div className="ui-flex ui-gap-x-2 ui-flex-wrap ui-text-white ui-text-sm sm:ui-text-base">
        <button onClick={handleNotPreparedClick} className="hover:ui-underline">
          이용약관
        </button>
        <p>/</p>
        <button onClick={handleNotPreparedClick} className="hover:ui-underline">
          개인정보 처리방침
        </button>
        <p>/</p>
        <button onClick={handleNotPreparedClick} className="hover:ui-underline">
          이메일 무단수집 거부
        </button>
      </div>
    </footer>
  );
};
