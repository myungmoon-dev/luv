import { Separator } from "@/components/ui/separator";
import useThemeStore from "@/store/theme";
import Image from "next/image";
import HeaderTheme from "./theme";
import TimeDisplay from "./timeDisplay";

const Header = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div>
      <header className="flex h-[80px] items-center justify-center px-10">
        <div className="flex w-full max-w-[1440px] items-center justify-between">
          <div className="flex items-center justify-center py-2">
            <Image
              src={`/images/logo_${theme === "dark" ? "white" : "blue"}.png`}
              alt="myungmoon_logo"
              width={120}
              height={0}
            />
          </div>
          <div className="flex items-center gap-4">
            <TimeDisplay />
            <HeaderTheme />
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-xs dark:bg-zinc-800">
              관리자
            </div>
          </div>
        </div>
      </header>
      <Separator />
    </div>
  );
};

export default Header;
