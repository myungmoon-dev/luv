import React from "react";
import Section from ".";
import { Card, Chip } from "ui";
import Image from "next/image";

const MapSection = () => {
  return (
    <Section title="오시는 길">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-5">
          <Chip text="독산동 비전채플(평일)" size="sm" />
          <p className="text-sm text-gray-400">서울특별시 금천구 남부순환로 1406</p>
          <Card className="relative h-[230px] w-full">
            <Image src="/images/some.jpg" alt="sketch_1" fill className="rounded-lg object-cover" />
          </Card>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Chip text="서울여상 사랑채플(주일)" size="sm" />
          <p className="text-sm text-gray-400">서울 관악구 관악로 85 (서울여자상업고등학교 체육관 건물 3층)</p>
          <Card className="relative h-[230px] w-full">
            <Image src="/images/some.jpg" alt="sketch_1" fill className="rounded-lg object-cover" />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default MapSection;