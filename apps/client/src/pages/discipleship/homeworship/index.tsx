import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import Layout from "@/components/layout";
import usePagination from "@/hooks/usePagination";
import { useGetHomeWorships } from "@/query/homeWorship";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { Pagination, Spinner } from "ui";
import HomeworshipHeaderSection from "@/components/discipleship/homeworship/header";
import HomeworshipListSection from "@/components/discipleship/homeworship/list";
import HomeworshipFloatingButton from "@/components/discipleship/homeworship/floatingButton";

const HomeWorshipPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <HomeworshipMain />
    </Suspense>
  );
};

const HomeworshipMain = () => {
  const { push } = useRouter();
  const { data, isLoading } = useGetHomeWorships();
  const { onSetPaginationQuery, page } = usePagination();

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
        <Spinner />
      </div>
    );

  return (
    <Layout
      pageTitle="가정예배 안내"
      title="가정예배 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
    >
      <div className="flex flex-col gap-10 pb-20">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 헤더 섹션 */}
        <HomeworshipHeaderSection onClick={() => push("/discipleship/homeworship/create")} />

        {/* 목록 섹션 */}
        {data && <HomeworshipListSection data={data} />}

        {/* 페이지네이션 */}
        {data && (
          <div className="px-5 sm:px-8 md:px-12 lg:px-16">
            <Pagination
              currentPage={page}
              onSetPage={onSetPaginationQuery}
              totalQuantity={data.totalHomeworships || 0}
            />
          </div>
        )}

        {/* 플로팅 버튼 */}
        <HomeworshipFloatingButton onClick={() => push("/discipleship/homeworship/create")} />
      </div>
    </Layout>
  );
};
export default HomeWorshipPage;
