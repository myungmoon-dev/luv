import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationIndexPage = () => {
  return (
    <Layout
      pageTitle="다음세대 사역안내"
      title="다음세대 사역안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sketch-3.jpg"
      innerMenus={educationInnerMenus}
    >
      <div className="mx-auto flex max-w-screen-lg flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h3 className="text-brown-300 text-3xl font-bold">1. 사명선언문 (Mission Statement)</h3>
          <span>
            명문교회 교육부서는 <span className="text-brown-200 text-lg font-bold">하나님을 경외하는 다음세대</span>를
            세우기 위해 존재한다.
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-brown-300 text-3xl font-bold">2. 비전 (Vision)</h3>
          <p>
            1) 하나님을 영화롭게 하며 하나님을 깊이 만나는{" "}
            <span className="text-brown-200 text-lg font-bold">예배 공동체</span>
          </p>
          <p>
            2) 교회와 가정이 합력하여 분명한 복음과 말씀으로 다음세대를 세우는{" "}
            <span className="text-brown-200 text-lg font-bold">교육 공동체</span>
          </p>
          <p>
            3) 교사와 부모가 다음세대에게 믿음의 선배로서 본을 보이는{" "}
            <span className="text-brown-200 text-lg font-bold">신앙 전수 공동체</span>
          </p>
          <p>
            4) 이웃을 섬기며 복음을 전하는 <span className="text-brown-200 text-lg font-bold">선교 공동체</span>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-brown-300 text-3xl font-bold">3. 핵심가치 (CoreValues)</h3>
          <p>1) 영적 변화와 회심이 일어나는 교육</p>
          <p>2) 성경의 핵심 진리를 이해하도록 돕는 교육</p>
          <p>3) 그리스도인의 삶으로 나아가는 교육</p>
          <p>4) 교회와 가정의 동역으로 이루어지는 교육</p>
        </div>
      </div>
    </Layout>
  );
};

export default EducationIndexPage;
