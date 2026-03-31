import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  BookMarked,
  HousePlus,
  Images,
  BookOpen,
  Globe,
  Bell,
  Users,
} from "lucide-react";
import { useRouter } from "next/router";

const quickActions = [
  { label: "주보 등록", href: "/bulletins", icon: FileText },
  { label: "성경통독 추가", href: "/bibles/create", icon: BookOpen },
  { label: "가정예배 추가", href: "/homeworship/create", icon: HousePlus },
  { label: "앨범 업로드", href: "/album/create", icon: Images },
  { label: "추천 도서 추가", href: "/books/create", icon: BookMarked },
  { label: "선교지 소식 추가", href: "/mission-news/create", icon: Globe },
  { label: "팝업 추가", href: "/popups/create", icon: Bell },
  { label: "교우 소식 추가", href: "/congregation-news/create", icon: Users },
];

export default function Home() {
  const { push } = useRouter();

  return (
    <Layout title="대시보드">
      <div className="flex flex-col">
        <PageHeader title="대시보드" description="운영 현황을 한눈에 확인하세요" />
        <div className="flex flex-col gap-6 p-6 pt-0">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">빠른 작업</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="h-auto justify-start gap-3 p-4"
                    onClick={() => push(action.href)}
                  >
                    <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                      <action.icon className="size-4 text-primary" />
                    </div>
                    <span>{action.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
