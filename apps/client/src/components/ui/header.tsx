import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
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
  {
    name: "설교 & 찬양",
    href: "/sermons",
  },
  {
    name: "다음세대",
    href: "/education",
  },
  {
    name: "명문소식",
    href: "/news",
  },
  {
    name: "훈련",
    href: "/discipleship/newFamilly",
  },
  // {
  //   name: "행정",
  //   href: "/admin",
  // },
];

const MAIN_URL = "/";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isMainPage = router.pathname === MAIN_URL;

    // 메인 페이지가 아닌 경우엔 스크롤과 무관하게 항상 scrolled=true
    if (!isMainPage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-[#0A1E51] shadow-md" : "bg-transparent pt-5",
      )}
    >
      {/* Main Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex justify-between transition-all duration-300",
            scrolled ? "h-16 items-center lg:h-20" : "h-[120px] items-start lg:h-[120px]",
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="명문교회 로고"
              width={150}
              height={150}
              className={cn(
                "origin-center transition-transform duration-300",
                scrolled ? "scale-[0.42]" : "scale-100",
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="group flex items-center gap-1 px-5 py-2 text-[20px] font-bold text-white/90 transition-colors hover:text-white">
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
                  className="font-do-hyeon px-5 py-2 text-[20px] font-bold text-white/90 transition-colors hover:text-white"
                  // style={{ fontFamily: "Do Hyeon" }}
                >
                  {item.name}
                </Link>
              ),
            )}
            {/* <Link
              href="/login"
              className="ml-4 flex items-center gap-1 rounded-md bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <User className="h-4 w-4" />
              <span>로그인</span>
            </Link> */}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="!h-10 !w-10" />
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
                {/* <div className="border-t p-4">
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <Link href="/login">로그인</Link>
                    </Button>
                  </SheetClose>
                </div> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
