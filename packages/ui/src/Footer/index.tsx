interface IFooterProps {
  push: (url: string) => void;
}

export const Footer = ({ push }: IFooterProps) => {
  const menus: { label: string; path: string }[] = [
    { label: "교회소개", path: "/about" },
    { label: "설교•찬양", path: "/sermons/sunday-3" },
    { label: "다음세대", path: "/education/youth-adults2" },
    { label: "주보•소식", path: "/news/bulletins" },
    { label: "교회양육", path: "/discipleship" },
  ];

  const handleNotPreparedClick = () => {
    alert("아직 준비되지 않았습니다.");
  };

  return (
    <footer className="ui-bg-pink-100 ui-flex ui-flex-col ui-justify-between ui-gap-2 ui-px-8 sm:ui-px-16 md:ui-px-24 ui-py-14">
      <div className="ui-flex ui-w-full ui-flex-col ui-gap-5 md:ui-gap-0 md:ui-flex-row ui-justify-between">
        <img src="/images/Logo.png" className="ui-w-[150px] ui-h-[45px]" alt="myungmoon" />
        <div className="ui-flex ui-flex-col ui-gap-5">
          <nav className="md:ui-flex ui-gap-5 ui-hidden">
            {menus.map((menu) => (
              <button
                onClick={() => push(menu.path)}
                key={menu.path}
                className="ui-text-white ui-font-semibold ui-text-md"
              >
                {menu.label}
              </button>
            ))}
          </nav>
          <div className="ui-flex ui-flex-col md:ui-text-sm sm:ui-text-end ui-text-white">
            <p>TEL. 02-861-5071</p>
            <p>서울특별시 금천구 남부순환로 1406 명문교회</p>
          </div>
        </div>
      </div>
      <div className="ui-flex ui-flex-col ui-gap-2">
        <hr className="ui-border-white" />
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
      </div>
    </footer>
  );
};
