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
          words="명문교회 영아부는 부모와 교사가 함께 
          오직 말씀,기도,사랑으로 우리 아이들에게 
          복음의 씨앗을 심어주어
          바른 믿음을 키워주는 부서입니다."
          image="/images/next-g.jpeg"
          place="사랑채플(서울여상) 2층 체조실"
          target="만 0-3세"
          time="오전 10시30분 - 12시30분"
        />
      </Tabs>
    </Layout>
  );
};

export default EducationInfantsPage;
