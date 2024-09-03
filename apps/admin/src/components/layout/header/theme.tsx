import useThemeStore from "@/store/theme";
import { ThemeType } from "@/types/common";
import { LucideIcon, Moon, Sun } from "lucide-react";

const themeIcons: Record<ThemeType, LucideIcon> = {
  light: Moon,
  dark: Sun,
};

const HeaderTheme = () => {
  const [theme, switchTheme] = useThemeStore((state) => [state.theme, state.switchTheme]);

  const IconComponent = themeIcons[theme];

  return (
    <button
      className="rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700"
      onClick={switchTheme}
    >
      <IconComponent />
    </button>
  );
};

export default HeaderTheme;
