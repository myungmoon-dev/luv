import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { educationInfantsMenus, educationInnerMenus } from "@/constants/innerMenus/education";
import Tabs from "@/components/layout/tabs";
import { DateTab, SectionHeader } from "ui";
import PhotoList from "@/components/photos/photoList";
import { YearMonthType } from "type";

const tabList: { date: YearMonthType; label: string }[] = [
  { label: "4월", date: "2024-04" },
  { label: "5월", date: "2024-05" },
  { label: "6월", date: "2024-06" },
  { label: "7월", date: "2024-07" },
];

const photoList = [
  { title: "test", date: "20202020", image: "/images/next-g.jpeg" },
  { title: "test", date: "20202020", image: "/images/next-g.jpeg" },
  { title: "test", date: "20202020", image: "/images/next-g.jpeg" },
];

const EducationInfantsPhotosPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<YearMonthType>("2024-04");

  const onClickTab = (yearMonth: YearMonthType) => {
    setSelectedTabIndex(yearMonth);
  };

  useEffect(() => {
    // 렌더링 시, 탭 초기화
    if (tabList.length > 0) {
      setSelectedTabIndex("2024-04");
    }
  }, [tabList]);
  return (
    <Layout
      pageTitle="영아부"
      title="영아부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/next-g.jpeg"
      innerMenus={educationInnerMenus}
      detailMenus={educationInfantsMenus}
    >
      <Tabs menus={educationInfantsMenus}>
        <SectionHeader text="2024년" selected={true} size="sm" />
        <DateTab tabs={tabList} selectedTab={selectedTabIndex} onClickTab={onClickTab} />
        <PhotoList photoList={photoList} />
      </Tabs>
    </Layout>
  );
};

export default EducationInfantsPhotosPage;
