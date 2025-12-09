import React from "react";
import CongregationNewsFilter from "./Filter";
import CongregationNewsItem from "./Item";
import { useGetCongregationNewsList } from "@/query/news";
import useCongregationNewsStore from "@/store/News/congregation";
import { Spinner } from "ui";

const CongregationNews = () => {
  const selectedMenu = useCongregationNewsStore((state) => state.selectedMenu);
  const type = selectedMenu === "all" ? undefined : selectedMenu;
  const { data, isFetching } = useGetCongregationNewsList(type);

  return (
    <div className="flex flex-col gap-12 pb-32 pt-2.5 sm:pb-40 sm:pt-10 md:pb-48 md:pt-16">
      <CongregationNewsFilter />
      <div className="flex flex-col gap-4 px-5 sm:px-16 md:px-24">
        <p className="text-2xl font-bold text-[#001F54] md:text-3xl lg:text-4xl">교우 소식</p>
        <div className="flex flex-col border-t border-[#BBBBBB]">
          {isFetching ? (
            <div className="flex items-center justify-center py-10">
              <Spinner />
            </div>
          ) : data?.congregationNewsList && data.congregationNewsList.length > 0 ? (
            data.congregationNewsList.map((news) => (
              <CongregationNewsItem key={news._id || news.createdAt} news={news} />
            ))
          ) : (
            <div className="flex items-center justify-center py-10 text-[#666666]">
              <p>교우 소식이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CongregationNews;
