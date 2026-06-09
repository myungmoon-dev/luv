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

export function SiteHeader() {
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
        "fixed top-0 z-50 w-full transition-all duration-300",
        isMainPage && (scrolled ? "bg-[#0A1E51] shadow-md" : "bg-transparent pt-5"),
        !isMainPage && "bg-[#0A1E51] shadow-md",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex justify-between transition-all duration-300",
            isMainPage && (scrolled ? "h-16 items-center lg:h-20" : "h-[120px] items-start lg:h-[120px]"),
            !isMainPage && "h-16 items-center lg:h-20",
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              className={cn(
                "relative h-[100px] w-[100px] origin-center transition-transform duration-300 md:h-[150px] md:w-[150px]",
                isMainPage && (scrolled ? "scale-[0.42]" : "scale-100"),
                !isMainPage && "scale-[0.42]",
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
            <SheetContent side="right" className="w-80 bg-white p-0">
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
                    <div key={item.name} className="border-b border-[#E6E6E6]">
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
                                  className="block rounded-md px-3 py-2 text-xl text-[#0A1E51] transition-colors hover:bg-[#eef1f6] hover:text-[#0A1E51] active:bg-[#e8ecf2]"
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
                            className="block px-3 py-4 text-xl font-semibold text-[#0A1E51] transition-colors hover:bg-[#eef1f6] hover:text-[#0A1E51] active:bg-[#e8ecf2]"
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
