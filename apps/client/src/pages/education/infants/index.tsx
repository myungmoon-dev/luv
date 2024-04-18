import React from "react";
import Layout from "@/components/layout";
import { educationInfantsMenus, educationInnerMenus } from "@/constants/innerMenus/education";
import Tabs from "@/components/layout/tabs";
import EducationOverView from "@/components/education";

const EducationInfantsPage = () => {
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
        <EducationOverView
          title={`일어나 세상으로 흘러가는 "영아부"`}
          bible="요한복음 3:16"
          words="하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니
          이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려하심이니라"
          image="/images/next-g.jpeg"
          minister="ddd 목사"
          place="장소"
          target="0-1세"
          time="오전 9시30분"
        />
      </Tabs>
    </Layout>
  );
};

export default EducationInfantsPage;
