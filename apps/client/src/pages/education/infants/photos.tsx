import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { educationInfantsMenus, educationInnerMenus } from "@/constants/innerMenus/education";
import Tabs from "@/components/layout/tabs";
import { DateTab, SectionHeader } from "ui";
import PhotoList from "@/components/photos/photoList";

const tabList: string[] = ["4월", "3월", "2월"];
const photoList = [
  { title: "test", date: "20202020", image: "/images/next-g.jpeg" },
  { title: "test", date: "20202020", image: "/images/next-g.jpeg" },
  { title: "test", date: "20202020", image: "/images/next-g.jpeg" },
];

const EducationInfantsPhotosPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const onClickTab = (index: number) => {
    setSelectedTabIndex(index);
  };

  useEffect(() => {
    // 렌더링 시, 탭 초기화
    if (tabList.length > 0) {
      setSelectedTabIndex(0);
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
