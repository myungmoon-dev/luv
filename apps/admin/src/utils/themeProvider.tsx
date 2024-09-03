import useThemeStore from "@/store/theme";
import { ReactNode, useEffect } from "react";

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useThemeStore((state) => [state.theme, state.setTheme]);

  useEffect(() => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(userPrefersDark ? "dark" : "light");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
