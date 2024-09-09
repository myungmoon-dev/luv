import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout title="대시보드">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">명문교회 관리자 사이트의 레이아웃이 변경되었습니다.</h1>
        <p>왼쪽 메뉴 버튼을 눌러 각 페이지로 이동할 수 있습니다.</p>
      </div>
    </Layout>
  );
}
