import Link from "next/link";
import { useRouter } from "next/router";
import {
  LayoutDashboard,
  Radio,
  Clapperboard,
  FileText,
  BookOpen,
  Home,
  Image,
  BookMarked,
  Globe,
  Bell,
  Users,
  ChevronDown,
  Settings,
  LogOut,
  ChevronUp,
  BookText,
  Layout,
  UserRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainMenuItems = [
  { title: "대시보드", icon: LayoutDashboard, href: "/" },
  { title: "실시간", icon: Radio, href: "/live" },
];

const contentMenuItems = [
  { title: "메인페이지", icon: Layout, href: "/home" },
  { title: "유튜브", icon: Clapperboard, href: "/youtube" },
  { title: "주보", icon: FileText, href: "/bulletins" },
  { title: "성경통독", icon: BookOpen, href: "/bibles" },
  { title: "가정예배", icon: Home, href: "/homeworship" },
  { title: "앨범 업로드", icon: Image, href: "/album" },
  { title: "추천 도서", icon: BookMarked, href: "/books" },
  { title: "선교지 소식", icon: Globe, href: "/mission-news" },
];

const leadershipMenuItems = [
  { title: "담임목사 프로필", icon: BookText, href: "/pastor" },
  { title: "섬기는 분들 관리", icon: UserRound, href: "/leadership" },
];

const systemMenuItems = [
  { title: "팝업", icon: Bell, href: "/popups" },
  { title: "교우 소식", icon: Users, href: "/congregation-news" },
];

const AdminSidebar = () => {
  const { pathname } = useRouter();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Sidebar collapsible="icon" className="border-sidebar-border border-r">
      <SidebarHeader className="border-sidebar-border border-b p-4">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo/hor_logo(W).svg"
            alt="명문 로고"
            className="h-14 w-auto group-data-[collapsible=icon]:hidden"
          />
          <span className="text-primary-foreground hidden text-sm font-bold group-data-[collapsible=icon]:block">
            M
          </span>
          <span className="pl-4 text-sm font-semibold text-white group-data-[collapsible=icon]:hidden">
            관리자 페이지
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                콘텐츠 관리
                <ChevronDown className="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {contentMenuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive(item.href)}
                        tooltip={item.title}
                      >
                        <Link href={item.href} onClick={(e) => { if (isActive(item.href)) e.preventDefault(); }}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                섬기는 분들
                <ChevronDown className="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {leadershipMenuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive(item.href)}
                        tooltip={item.title}
                      >
                        <Link href={item.href} onClick={(e) => { if (isActive(item.href)) e.preventDefault(); }}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                시스템
                <ChevronDown className="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {systemMenuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive(item.href)}
                        tooltip={item.title}
                      >
                        <Link href={item.href} onClick={(e) => { if (isActive(item.href)) e.preventDefault(); }}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter className="border-sidebar-border border-t p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full">
                  <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-full text-xs font-medium">
                    관
                  </div>
                  <span className="truncate">관리자</span>
                  <ChevronUp className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="start" className="w-48">
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 size-4" />
                  설정
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="mr-2 size-4" />
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
