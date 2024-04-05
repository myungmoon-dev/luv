import React, { useEffect, useState } from "react";
import { IYoutube } from "type";
import Sermon from "./sermon";
import { DateTab, SectionHeader } from "ui";
import dayjs from "dayjs";

interface ISermonContainerProps {
  list: IYoutube[];
}

const SermonContainer = ({ list }: ISermonContainerProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const onClickTab = (index: number) => {
    setSelectedTabIndex(index);
  };

  useEffect(() => {
    // 렌더링 시, 탭 초기화
    if (list.length > 0) {
      setSelectedTabIndex(0);
    }
  }, [list]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full flex-col gap-5">
        <SectionHeader text="2024년" color="pink" selected={true} size="sm" hasLine={true} />
        <DateTab
          tabs={list.map((youtube) => (youtube.date && dayjs(youtube.date).format("M월 D일")) ?? "none")}
          selectedTabIndex={selectedTabIndex}
          onClickTab={onClickTab}
        >
          <Sermon sermon={list[selectedTabIndex]} />
        </DateTab>
      </div>
    </div>
  );
};

export default SermonContainer;
