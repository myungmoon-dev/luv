"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "교회소개",
    href: "/about",
    children: [
      { name: "교회비전", href: "/about/vision" },
      { name: "섬기는 분들", href: "/about/leadership" },
      { name: "예배정보", href: "/about/services" },
    ],
  },
  { name: "설교 & 찬양", href: "/sermons" },
  { name: "다음세대", href: "/education" },
  { name: "명문소식", href: "/news" },
  { name: "훈련", href: "/discipleship" },
];

const MAIN_URL = "/";

type SiteHeaderProps = {
  navFontClassName?: string;
};

export function SiteHeader({ navFontClassName }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === MAIN_URL;

  useEffect(() => {
    if (!isMainPage) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full",
        /* 모바일(햄버거): 첫 프레임부터 축소 바 — 트랜지션 없음 */
        "max-md:transition-none max-md:bg-[#0A1E51] max-md:shadow-md max-md:pt-0",
        /* 데스크톱: 메인에서만 스크롤 확장/축소 애니메이션 */
        isMainPage && "md:transition-all md:duration-300",
        scrolled ? "md:bg-[#0A1E51] md:shadow-md" : "md:bg-transparent md:pt-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex justify-between",
            "max-md:h-16 max-md:items-center max-md:transition-none",
            isMainPage && "md:transition-all md:duration-300",
            scrolled ? "md:h-16 md:items-center lg:h-20" : "md:h-[120px] md:items-start lg:h-[120px]",
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              className={cn(
                "relative origin-center",
                /* 모바일: 스크롤 축소와 동일한 크기(100×0.42)로 고정, 애니메이션 없음 */
                "max-md:h-[42px] max-md:w-[42px] max-md:scale-100 max-md:transition-none",
                "md:h-[150px] md:w-[150px]",
                isMainPage && "md:transition-transform md:duration-300",
                scrolled ? "md:scale-[0.42]" : "md:scale-100",
              )}
            >
              <Image src="/images/logo.svg" alt="명문교회 로고" fill className="object-contain" />
            </div>
          </Link>

          <nav className="hidden items-center md:flex">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "group flex items-center gap-1 px-5 py-2 text-[20px] font-bold text-white/90 transition-colors hover:text-white",
                        navFontClassName,
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="min-w-[160px] rounded-none border-transparent bg-[#0A1E51] p-1 text-white"
                  >
                    {item.children.map((child) => (
                      <DropdownMenuItem
                        key={child.name}
                        asChild
                        className="rounded-none text-white focus:bg-[#0A1E51] focus:text-white"
                      >
                        <Link href={child.href} className="w-full cursor-pointer">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-5 py-2 text-[20px] font-bold text-white/90 transition-colors hover:text-white",
                    navFontClassName,
                  )}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-white hover:bg-transparent hover:text-white active:bg-transparent aria-expanded:bg-transparent aria-expanded:text-white dark:hover:bg-transparent dark:hover:text-white"
              >
                <Menu className="size-6" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-0 text-white">
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-3 border-b bg-[#0A1E51] p-6">
                  <Image
                    src="/images/logo_horizon.svg"
                    alt="명문교회 로고"
                    width={120}
                    height={40}
                  />
                </div>
                <nav className="flex-1 overflow-y-auto p-4">
                  {navigation.map((item) => (
                    <div key={item.name} className="border-b border-white/10">
                      {item.children ? (
                        <div className="py-3">
                          <span className="block px-3 py-2 text-xl font-semibold text-[#0A1E51]">
                            {item.name}
                          </span>
                          <div className="ml-3">
                            {item.children.map((child) => (
                              <SheetClose key={child.name} asChild>
                                <Link
                                  href={child.href}
                                  className="block rounded-md px-3 py-2 text-xl text-[#0A1E51] hover:bg-white/10 hover:text-white"
                                >
                                  {child.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="block px-3 py-4 text-xl font-semibold text-[#0A1E51] hover:bg-white/10 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
