import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import React from "react";
import { DoubleQuote } from "ui";

const AboutIndexPage = () => {
  return (
    <Layout
      pageTitle="교회소개"
      title="교회소개"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/introduce.jpeg"
      innerMenus={aboutInnerMenus}
    >
      <div className="flex flex-col gap-5 sm:text-lg md:text-xl">
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5">
          <DoubleQuote className="sm:text-6xl md:text-8xl" />
          <h2 className="mb-5 break-words text-center text-lg font-bold text-pink-200 sm:text-2xl md:text-3xl">
            명문교회 홈페이지를 방문해 주신 여러분을
            <br />
            주님의 이름으로 환영하고 축복합니다.
          </h2>
          <DoubleQuote className="sm:text-6xl md:text-8xl" />
        </div>
        <div className="text-md justify-start font-bold text-pink-200 sm:text-lg md:text-xl">
          복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!
          <br />
          명문교회는 '지역과 민족을 품고 세계와 열방을 향해'
          <br />
          나아가는 "생명의 공동체"입니다.
        </div>
        <div className="text-md mb-5 sm:text-lg md:text-xl">
          명문교회는 지난 36년간 지역사회 복음화와 세계 선교를 위해 그리고 다음 세대 믿음의 자녀들을 위해 눈물로
          기도하며 헌신하였습니다. 이제 우리는 한국교회의 영적 유산을 더욱 잘 계승할 뿐만 아니라, 시대적 변화에 발맞추어
          오늘날 우리에게 주신 교회의 사명을 탁월하게 감당하려고 합니다. 총성 없는 전쟁과도 같았던 코로나 시대를
          보내면서, 명문교회는 한 영혼을 천하보다 귀하게 여기시는 주님의 마음으로 성도님들 한 영혼 한 영혼을 위해 회복과
          소망의 복음을 전하겠습니다.
        </div>
        <div className="text-md mb-10 flex flex-col gap-5 sm:text-lg md:text-xl">
          <div>
            <p className="font-bold text-[#891222]">1) 양을 위하여 목숨을 버리는 목자의 심정으로 목회하겠습니다.</p>
            영혼을 구원하기 위해 성육신하신 예수님의 마음을 본받아, 명문교회 모든 성도님들을 위한 한 알의 밀알이 되어
            일사각오로 성도님들을 사랑하며 섬기겠습니다.
          </div>
          <div>
            <p className="font-bold text-[#891222]">2) 생명을 걸고 설교 준비를 하고, 삶으로 설교하겠습니다.</p>
            명문의 강단이 푸른 감람나무 같고 물댄 동산 같아서 매 주일 생명의 말씀이 선포되도록 하겠습니다. 설교자의 삶과
            인격이 설교를 통해 흘러 갈 수 있도록 겸손하게 은혜를 구하며 말씀을 전하겠습니다.
          </div>
          <div>
            <p className="font-bold text-[#891222]">
              3) 기도하기를 쉬는 죄를 범하지 않고, 눈물과 무릎으로 목회하겠습니다.
            </p>
            사람의 능력이 아니라, 하나님의 능력으로 목회하겠습니다. 무릎으로 교회를 세우고, 성도님들을 위해 간절한
            눈물로 기도하겠습니다.
          </div>
        </div>
        {/* FIXME:
          <div>
            고려대와 서울대 대학원에서 철학과 영미윤리학을 공부하였습니다. 총신신대원에서 목회학 석사(MDiv)를, 시카고에
            있는 Trinity Evangelical Divinity School에서 조직신학으로 신학 석사(ThM)를, 그리고 The Southern Baptist
            Theological Seminary에서 설교학 박사 학위(PhD)를 취득하였습니다. 강남교회, 시카고아가페장로교회,
            사랑의교회에서 사역했으며, 현재 총신대 목회신학전문대학원에서 설교학 교수로도 섬기고 있습니다. 가족으로는
            아내 정지영과 두 아들 성재, 은재가 있습니다.
        </div>
        */}
        <div className="text-end text-xl font-bold">명문교회 담임목사 김지혁</div>
      </div>
    </Layout>
  );
};

export default AboutIndexPage;
