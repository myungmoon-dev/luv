import { Icon } from "..";

export const Header = () => {
  const menus = ["교회소개", "섬기는 분들", "설교말씀", "교회양육", "교육부서", "성도의 교제"];

  return (
    <header className="ui-mx-5 ui-z-10 ui-absolute ui-top-8 ui-h-[60px] ui-w-[calc(100%-40px)] ui-flex ui-justify-between ui-items-center ui-bg-white ui-px-8 ui-rounded-full md:ui-mx-10 md:ui-w-[calc(100%-80px)]">
      <img src="/images/Logo.png" width={100} height={50} alt="myungmoon" />
      <nav className="ui-flex ui-items-center ui-gap-5 lg:ui-gap-7">
        <div className="ui-flex ui-gap-3 lg:ui-gap-5">
          {menus.map((menu) => (
            <button key={menu} className="ui-text-pink-200 ui-font-semibold ui-text-sm">
              {menu}
            </button>
          ))}
        </div>
        <Icon name="Hamburger" size="md" strokeColor="#892122" />
      </nav>
    </header>
  );
};
