import { Icon } from "..";

export const Header = () => {
  const menus = ["교회소개", "섬기는 분들", "설교말씀", "교회양육", "교육부서", "성도의 교제"];

  return (
    <header className="z-10 h-[60px] w-full flex justify-between items-center bg-white px-8 rounded-full">
      <img src="/images/Logo.png" width={100} height={50} alt="myungmoon" />
      <nav className="flex items-center gap-5 lg:gap-7">
        <div className="flex gap-3 lg:gap-5">
          {menus.map((menu) => (
            <button key={menu} className="text-pink-200 font-semibold text-sm">
              {menu}
            </button>
          ))}
        </div>
        <Icon name="Hamburger" size="md" strokeColor="#892122" />
      </nav>
    </header>
  );
};
