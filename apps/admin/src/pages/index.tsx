import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <Layout title="대시보드">
      <div className="flex flex-col">
        <PageHeader title="대시보드" description="운영 현황을 한눈에 확인하세요" />
        <div className="flex flex-col gap-6 p-6 pt-0">
          <Card>
            <CardHeader className="pb-3">
              {/* FIXME: 추후 적용 <CardTitle className="text-base font-medium">빠른 작업</CardTitle> */}
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {/*FIXME: 추후 적용 {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="h-auto justify-start gap-3 p-4"
                    onClick={() => push(action.href)}
                  >
                    <div className="bg-primary/10 flex size-8 items-center justify-center rounded-md">
                      <action.icon className="text-primary size-4" />
                    </div>
                    <span>{action.label}</span>
                  </Button>
                ))} */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
