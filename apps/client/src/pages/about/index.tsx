import AboutTitle from "@/components/about/title";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import Image from "next/image";
import React from "react";
import { Details, DoubleQuote } from "ui";

interface IValue {
  titleKr: string;
  titleEn: string;
  description: string;
}

const AboutIndexPage = () => {
  const valueList: IValue[] = [
    {
      description:
        "'내 양을 치라'고 하신\n주님의 명령에 순종하여,\n모든 것을 헌신하는 마음으로\n성도를 목양하고 돌봅니다.",
      titleEn: "The Heart of Shepherd",
      titleKr: "목자의 심정",
    },
    {
      description: "제자들의 발을 씻겨 주신\n예수님의 겸손한 모법을 따라,\n예수님처럼 교회와 세상을 섬깁니다.",
      titleEn: "The Standard of Excellence",
      titleKr: "최고 수준의 헌신",
    },
    {
      description: "다윗이 그 마음\n완전함과 손의 능숙함으로\n사명을 감당한 것처럼,\n최고 수준의 사역을 추구합니다.",
      titleEn: "The Attitude of Servant",
      titleKr: "섬김과 겸손의 자세",
    },
    {
      description:
        "천하보다 귀한 한 영혼을\n하나님의 마음으로 품고\n목양의 사각지대가 없는 돌봄과\n사랑의 공동체를 꿈꿉니다.",
      titleEn: "The Importance of Individual",
      titleKr: "한 영혼의 소중함",
    },
    {
      description: "주님 다시 오시는 날까지\n세계와 열방을 품고\n치유하는 선교공동체로 나아갑니다.",
      titleEn: "The Great Commission",
      titleKr: "지상명령",
    },
  ];

  return (
    <Layout
      pageTitle="교회소개"
      title="교회소개"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner2.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
    >
      <AboutTitle title="명문교회 소개" />
      <div className="flex justify-center py-12">
        <div className="flex w-[760px] flex-col gap-10">
          <div className="flex flex-col gap-10">
            <p className="text-2xl font-bold">
              <span className="text-blue-500">명문교회</span> 홈페이지를 방문해주신 여러분을
              <br />
              주님의 이름으로 환영하고 축복합니다.
            </p>
            <div className="flex flex-col gap-3">
              <p>복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!</p>
              <p>명문교회는 '지역과 민족을 품고 세계와 열방을 향해'</p>
              <p>나아가는 "생명의 공동체"입니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#f8f8f8] py-12">
        <div className="w-[760px]">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">명문교회 2024 핵심 가치와 비전</p>
            <h3 className="text-2xl font-bold text-blue-500">5대 핵심 가치(Core Value)</h3>
          </div>
          <hr className="my-10 border-t-2 border-white" />
          <div className="mb-10 flex justify-center gap-10">
            {valueList.slice(0, 3).map((value, idx) => (
              <div className="flex flex-col items-center gap-7" key={value.titleKr}>
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full">
                  <Image src={`/images/about/value${idx + 1}.jpg`} alt="value" fill={true} className="object-cover" />
                </div>
                <p className="text-center font-bold">
                  {value.titleKr}
                  <br />
                  {value.titleEn}
                </p>
                <p className="whitespace-pre text-center">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-10">
            {valueList.slice(3).map((value, idx) => (
              <div className="flex flex-col items-center gap-7" key={value.titleKr}>
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full">
                  <Image src={`/images/about/value${idx + 4}.jpg`} alt="value" fill={true} className="object-cover" />
                </div>
                <p className="text-center font-bold">
                  {value.titleKr}
                  <br />
                  {value.titleEn}
                </p>
                <p className="whitespace-pre text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className="flex w-[760px] flex-col gap-10">
          <div className="relative h-[320px] w-full">
            <Image src="/images/about/default-1.jpg" alt="default-1" fill={true} className="object-cover" />
          </div>
          <p className="leading-8">
            명문교회는 지난 36년간 지역사회 목음화와 세계 선교를 위해
            <br />
            그리고 다음 세대 믿음의 자녀들을 위해 눈물로 기도하며 헌신하였습니다.
            <br />
            이제 우리는 한국교회의 영전 유산을 더욱 잘 계승할 뿐만 아니라, 시대적 변화에 발맞추어
            <br />
            오늘날 우리에게 주신 교회의 사명을 탁월하게 감당하려고 합니다.
            <br />
            충성 없는 전쟁과도 같았던 코로나 시대를 보내면서, 명문교회는 한 영혼을 천하보다 귀하게 여기시는
            <br />
            주님의 마음으로 성도님들 한 영혼 한 영혼을 위해 회복과 소망의 복음을 전하겠습니다.
          </p>
          <div className="flex gap-5">
            <div className="relative h-[350px] w-1/2">
              <Image src="/images/about/default-2.jpg" alt="default-2" fill={true} className="object-cover" />
            </div>
            <div className="relative h-[350px] w-1/2">
              <Image src="/images/about/default-3.jpg" alt="default-2" fill={true} className="object-cover" />
            </div>
          </div>
          <div>
            <Details title="1. 양을 위하여 목숨을 버리는 목자의 심정으로 목회하겠습니다." description="내용1" />
            <Details title="2. 생명을 걸고 설교 준비를 하고, 삶으로 설교하겠습니다." description="내용1" />
            <Details
              title="3. 기도하기를 쉬는 죄를 범하지 않고, 눈물과 무릎으로 목회하겠습니다."
              description={
                "사람의 능력이 아니라, 하나님의 능력으로 목회하겠습니다.\n무릎으로 교회를 세우고, 성도님들을 위해 간절한 눈물로 기도하겠습니다."
              }
            />
          </div>
          <div className="flex flex-col items-end text-2xl font-bold">
            <p>명문교회 담임목사</p>
            <p className="text-blue-500">김지혁</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutIndexPage;
