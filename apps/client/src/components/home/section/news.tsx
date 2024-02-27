import React from "react";
import { Card, cn } from "ui";

import Section from ".";

const MOCK_WEEKLY_NEWS = [
  { title: "2월 첫째 주 주보", date: "2024-02-04" },
  { title: "1월 넷째 주 주보", date: "2024-01-28" },
  { title: "1월 셋째 주 주보", date: "2024-01-21" },
  { title: "1월 둘째 주 주보", date: "2024-01-14" },
  { title: "1월 첫째 주 주보", date: "2024-01-07" },
];

const NewsSection = () => {
  return (
    <Section title="교회 소식">
      <div className="grid grid-cols-2 gap-3">
        <div>
          {MOCK_WEEKLY_NEWS.map((news, idx) => (
            <div className="mt-4 flex flex-col gap-1" key={news.date}>
              <div className="flex justify-around">
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center bg-[#dfc7c7] text-center font-bold text-white",
                    idx === 0 ? "visible" : "invisible",
                  )}
                >
                  N
                </span>
                <p>{news.title}</p>
                <p className="text-gray-300">{news.date}</p>
                <p>관리자</p>
              </div>
              <hr className="border-t-2 border-gray-100" />
            </div>
          ))}
        </div>
        <Card className="flex items-center justify-center bg-gray-100">주보 미리보기</Card>
      </div>
    </Section>
  );
};

export default NewsSection;
