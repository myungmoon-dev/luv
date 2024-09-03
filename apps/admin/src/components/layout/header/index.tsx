import TimeDisplay from "./timeDisplay";

const Header = () => {
  return (
    <header className="flex h-[80px] cursor-default items-center justify-end gap-4 px-8">
      <TimeDisplay />
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-zinc-800 text-xs">
        관리자
      </div>
    </header>
  );
};

export default Header;
