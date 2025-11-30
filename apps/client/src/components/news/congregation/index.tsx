import React from "react";
import CongregationNewsFilter from "./Filter";
import CongregationNewsItem from "./Item";
import { ICongregationNews } from "@/types/news/common";

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
    type: "iceCream",
    description: "김명훈, 박영희 결혼",
    createdAt: 1715769600000,
    updatedAt: 1715769600000,
  },
];

const CongregationNews = () => {
  return (
    <div className="flex flex-col gap-12 pb-32 pt-2.5 sm:pb-40 sm:pt-10 md:pb-48 md:pt-16">
      <CongregationNewsFilter />
      <div className="flex flex-col gap-4 px-5 sm:px-16 md:px-24">
        <p className="text-2xl font-bold text-[#001F54] md:text-3xl lg:text-4xl">교우 소식</p>
        <div className="flex flex-col border-t border-[#BBBBBB]">
          {MOCK_NEWS_LIST.map((news) => (
            <CongregationNewsItem key={news.createdAt} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CongregationNews;
