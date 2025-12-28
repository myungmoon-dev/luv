import React from "react";
import NewsNavigation from "./Navigation";
import { IResource } from "@/types/news/common";
import CongregationNewsItem from "./congregation/Item";
import ResourceItem from "./resources/Item";
import { Icon, Spinner } from "ui";
import { useRouter } from "next/router";
import { useGetCongregationNewsList } from "@/query/news";

const MOCK_RESOURCE_LIST: IResource[] = [
  {
    id: "1",
    createdAt: 1726243200000,
    updatedAt: 1726243200000,
    title: "2024 명문교회 추석 가정예배 순서지",
    fileList: [
      {
        name: "2024 명문교회 추석 가정예배 순서지",
        download:
          "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%AD%E1%84%92%E1%85%AC%20%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8%20%E1%84%80%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%A8%E1%84%87%E1%85%A2%20%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%84%8C%E1%85%B5(2024).pdf?alt=media&token=ed75b8a7-c97d-405d-9ad7-6604bf623f3a",
      },
    ],
  },
  {
    id: "2",
    createdAt: 1726243200000,
    updatedAt: 1726243200000,
    title: "명문교회 30구절 PART-1",
    fileList: [
      {
        name: "(데일리카드)명문교회 30구절 PART-1",
        download:
          "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%2030%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AF%20part1(%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3).pdf?alt=media&token=eac5bfc4-7a88-477b-b661-90c274a2790a",
      },
      {
        name: "명문교회 30구절 PART-1",
        download:
          "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%2030%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AF%20part%201.pdf?alt=media&token=4f3ac4a5-b762-4c52-b647-1336bacdb9c0",
      },
    ],
  },
];

const News = () => {
  const { push } = useRouter();
  const { data, isFetching } = useGetCongregationNewsList();
  const congregationNewsList = data?.congregationNewsList?.slice(0, 3) || [];

  const handleClickCongregationNews = () => {
    push("/news/congregation");
  };

  const handleClickResources = () => {
    push("/news/resources");
  };

  return (
    <div className="pb-60 pt-8">
      <NewsNavigation />
      <hr className="my-10 border-t-2 border-[#BBBBBB] sm:mx-16 md:mx-24" />
      <div className="flex flex-col gap-4 px-5 sm:px-16 md:px-24">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-[#001F54] md:text-3xl lg:text-4xl">교우 소식</p>
          <Icon
            name="ChevronRight"
            cursor="ui-cursor-pointer"
            onClick={handleClickCongregationNews}
          />
        </div>
        <div className="flex flex-col border-t border-[#BBBBBB]">
          {isFetching ? (
            <div className="flex items-center justify-center py-10">
              <Spinner />
            </div>
          ) : congregationNewsList.length > 0 ? (
            congregationNewsList.map((news) => (
              <CongregationNewsItem key={news._id || news.createdAt} news={news} />
            ))
          ) : (
            <div className="flex items-center justify-center py-10 text-[#666666]">
              <p>교우 소식이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
      <hr className="my-10 border-t-2 border-[#BBBBBB] sm:mx-16 md:mx-24" />
      <div className="flex flex-col gap-4 px-5 sm:px-16 md:px-24">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-[#001F54] md:text-3xl lg:text-4xl">자료함</p>
          <Icon name="ChevronRight" cursor="ui-cursor-pointer" onClick={handleClickResources} />
        </div>
        <div className="flex flex-col border-t border-[#BBBBBB]">
          {MOCK_RESOURCE_LIST.map((resource) => (
            <ResourceItem key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
