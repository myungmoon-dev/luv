import React, { useState } from "react";
import { Card, cn } from "ui";
import { IBulletin } from "type";

import Section from ".";
import { useGetBulletins } from "@/query/bulletin";
import useModalStore from "@/store/modal";
import BlurImageComponent from "@/components/blurImage";

const BulletinModal = ({ selectedBulletin }: { selectedBulletin: IBulletin }) => {
  const [currentViewImage, setCurrentViewImage] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg">주보 | {selectedBulletin.title}</h1>
      <div className="relative h-[220px] w-[338px] sm:h-[300px] sm:w-[468px] md:h-[440px] md:w-[688px] lg:h-[550px] lg:w-[868px]">
        <BlurImageComponent
          img={`${selectedBulletin.images[currentViewImage]}/bulletin`}
          alt={`${selectedBulletin.title}_${currentViewImage}`}
          fill
        />
      </div>
      <div className="flex justify-end gap-2">
        <button onClick={() => setCurrentViewImage(0)} className="rounded-md bg-gray-500 px-2 py-1 text-white">
          앞면
        </button>
        <button onClick={() => setCurrentViewImage(1)} className="rounded-md bg-gray-500 px-2 py-1 text-white">
          뒷면
        </button>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const { data } = useGetBulletins();
  const open = useModalStore((state) => state.open);

  const handleBulletinClick = (bulletin: IBulletin) => {
    open(<BulletinModal selectedBulletin={bulletin} />);
  };

  return (
    <Section title="교회 소식">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          {data &&
            data.bulletins.map((bulletin, idx) => (
              <div onClick={() => handleBulletinClick(bulletin)} className="mt-4 flex flex-col gap-1" key={bulletin.id}>
                <div className="flex justify-around">
                  <span
                    className={cn(
                      "flex h-5 w-5 items-center justify-center bg-pink-100 text-center font-bold text-white",
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
