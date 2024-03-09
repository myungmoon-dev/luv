import React, { useEffect, useRef } from "react";
import Section from ".";
import { Card, Chip } from "ui";
import Image from "next/image";
import KakaoMap from "../../kakaomap";

const MapSection = () => {
  return (
    <Section title="오시는 길">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-3">
        <div className="flex flex-col items-center gap-5">
          <Chip text="독산동 비전채플(평일)" size="sm" />
          <p className="m:h-10 h-7 text-center text-sm text-gray-400">서울특별시 금천구 남부순환로 1406</p>
          <KakaoMap address="서울특별시 금천구 남부순환로 1406" />
        </div>
        <div className="flex flex-col items-center gap-5">
          <Chip text="서울여상 사랑채플(주일)" size="sm" />
          <p className="m:h-10 h-7 text-center text-sm text-gray-400">
            서울특별시 관악구 관악로 85
            <br />
            (서울여자상업고등학교 체육관 건물 3층)
          </p>
          <KakaoMap address="서울특별시 관악구 관악로 85" />
        </div>
      </div>
    </Section>
  );
};

export default MapSection;
