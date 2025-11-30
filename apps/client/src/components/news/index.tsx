import React from "react";
import NewsNavigation from "./Navigation";
import { ICongregationNews, IResource } from "@/types/news/common";
import CongregationNewsItem from "./congregation/Item";
import ResourceItem from "./resources/Item";
import { Icon } from "ui";
import { useRouter } from "next/router";

const MOCK_RESOURCE_LIST: IResource[] = [
  {
    id: "1",
    createdAt: 1715769600000,
    updatedAt: 1715769600000,
    title: "2024 명문교회 추석 가정예배 순서지",
  },
  {
    id: "2",
    createdAt: 1715769600000,
    updatedAt: 1715769600000,
    title: "명문교회 30구절 PART-1",
  },
];

const MOCK_NEWS_LIST: ICongregationNews[] = [
  {
    type: "marriage",
    description: "김명훈, 박영희 결혼",
    createdAt: 1715769600000,
    updatedAt: 1715769600000,
  },
  {
    type: "birth",
    description: "김명훈, 박영희 결혼",
    createdAt: 1715769600000,
    updatedAt: 1715769600000,
  },
  {
    type: "funeral",
    description: "김명훈, 박영희 결혼",
    createdAt: 1715769600000,
    updatedAt: 1715769600000,
  },
];

const News = () => {
  const { push } = useRouter();

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
          {MOCK_NEWS_LIST.map((news) => (
            <CongregationNewsItem key={news.createdAt} news={news} />
          ))}
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
