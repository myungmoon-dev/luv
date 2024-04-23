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
    { label: "교회양육", path: "/discipleship" },
  ];

  const handleNotPreparedClick = () => {
    alert("아직 준비되지 않았습니다.");
  };

  return (
    <footer className="ui-bg-[#363636] ui-py-14 ui-flex ui-flex-col ui-items-center ui-gap-5 ui-text-white">
      <div className="ui-flex ui-items-center ui-gap-5">
        <Icon name="LogoBlue" size="4xl" />
        <div className="ui-flex ui-gap-2">
          <Icon name="RealYoutube" size="xl" strokeColor="white" backgroundColor="white" />
          <Icon name="Instagram" size="xl" strokeColor="white" backgroundColor="white" />
        </div>
      </div>
      <nav className="ui-flex ui-gap-5">
        {menus.map((menu) => (
          <button onClick={() => push(menu.path)} key={menu.path} className="ui-font-semibold ui-text-md">
            {menu.label}
          </button>
        ))}
      </nav>
      <div className="ui-flex ui-flex-col ui-text-sm ui-items-center">
        <div className="flex gap-3">
          <p>TEL. 02-861-5071</p>
          <p>서울특별시 금천구 남부순환로 1406 명문교회</p>
        </div>
        <p>Copyright © 2024 명문교회 All rights reserved.</p>
      </div>
      <div className="ui-flex ui-gap-x-2 ui-flex-wrap ui-text-white">
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
