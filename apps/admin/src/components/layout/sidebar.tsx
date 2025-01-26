import {
  BookOpen,
  Church,
  Earth,
  House,
  HousePlus,
  Images,
  Library,
  LucideIcon,
  Radio,
  Video,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "ui";
import { buttonVariants } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface INav {
  title: string;
  href: string;
  tooltip: string;
  icon: LucideIcon;
}

const NAV_LIST: INav[] = [
  {
    title: "대시보드",
    href: "/",
    tooltip: "여러 상태들을 볼 수 있습니다.",
    icon: House,
  },
  {
    title: "실시간",
    href: "/live",
    tooltip: "실시간 유튜브 링크를 등록하고 수정할 수 있습니다.",
    icon: Radio,
  },
  {
    title: "유튜브",
    href: "/youtube",
    tooltip:
      "주일 예배, 새벽 기도회, 수요 예배, 금요 예배의 유튜브 링크를 등록하고 수정할 수 있습니다.",
    icon: Video,
  },
  {
    title: "주보",
    href: "/bulletins",
    tooltip: "주보를 등록하고 수정, 삭제할 수 있습니다.",
    icon: BookOpen,
  },
  {
    title: "성경통독",
    href: "/bibles",
    tooltip: "성경통독을 위한 글을 작성하고 수정할 수 있습니다.",
    icon: Church,
  },
  {
    title: "가정예배 공지",
    href: "/homeworship",
    tooltip: "가정예배에 필요한 공지글을 작성할 수 있습니다.",
    icon: HousePlus,
  },
  {
    title: "앨범 업로드",
    href: "/album",
    tooltip: "각종 앨범에 사진 업로드가 가능합니다.",
    icon: Images,
  },
  {
    title: "추천 도서",
    href: "/books",
    tooltip: "매월 추천하는 도서를 등록하고 수정할 수 있습니다.",
    icon: Library,
  },
  {
    title: "선교지 소식",
    href: "/mission-news",
    tooltip: "선교지 소식을 등록하고 수정할 수 있습니다.",
    icon: Earth,
  },
];

const Sidebar = () => {
  const { pathname } = useRouter();

  const getIsCurrentPage = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.includes(href);
  };

  return (
    <nav className="flex flex-col gap-1">
      {NAV_LIST.map((nav) => (
        <Tooltip key={nav.title}>
          <TooltipTrigger>
            <Link
              href={nav.href}
              className={cn(
                buttonVariants({
                  variant: getIsCurrentPage(nav.href) ? "default" : "link",
                  size: "lg",
                  className: "flex w-full items-center justify-start gap-4",
                }),
              )}
            >
              <nav.icon />
              {nav.title}
            </Link>
          </TooltipTrigger>
          <TooltipContent>{nav.tooltip}</TooltipContent>
        </Tooltip>
      ))}
    </nav>
  );
};

export default Sidebar;
