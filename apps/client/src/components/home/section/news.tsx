import React from "react";
import { Card, cn } from "ui";

import Section from ".";
import { useGetBulletins } from "@/query/bulletin";

const NewsSection = () => {
  const { data } = useGetBulletins();

  return (
    <Section title="교회 소식">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          {data &&
            data.bulletins.map((bulletin, idx) => (
              <div className="mt-4 flex flex-col gap-1" key={bulletin.id}>
                <div className="flex justify-around">
                  <span
                    className={cn(
                      "flex h-5 w-5 items-center justify-center bg-[#dfc7c7] text-center font-bold text-white",
                      idx === 0 ? "visible" : "invisible",
                    )}
                  >
                    N
                  </span>
                  <p>{bulletin.title}</p>
                  <p className="text-sm text-gray-400">{bulletin.date}</p>
                </div>
                <hr className="border-t-2 border-gray-100" />
              </div>
            ))}
        </div>
        <Card className="flex h-[300px] items-center justify-center bg-gray-100 sm:h-auto">주보 미리보기</Card>
      </div>
    </Section>
  );
};

export default NewsSection;
