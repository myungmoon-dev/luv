import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import React from "react";
import AboutIntroduction from "@/components/about/introduction";

interface IValue {
  id: number;
  titleKr: string;
  titleEn: string;
  description: string;
  img: string;
  imgClass: string;
}

const valueList: IValue[] = [
  {
    id: 1,
    description:
      "'내 양을 치라'고 하신\n주님의 명령에 순종하여,\n모든 것을 헌신하는 마음으로\n성도를 목양하고 돌봅니다.",
    titleEn: "The Heart of Shepherd",
    titleKr: "목자의 심정",
    img: "/images/about/value1.jpg",
    imgClass: "brightness-50 object-[20%_40%]",
  },
  {
    id: 2,
    description: "제자들의 발을 씻겨 주신\n예수님의 겸손한 모법을 따라,\n예수님처럼 교회와 세상을 섬깁니다.",
    titleEn: "The Standard of Excellence",
    titleKr: "최고 수준의 헌신",
    img: "/images/about/value2.jpg",
    imgClass: "brightness-50 object-[20%_40%]",
  },
  {
    id: 3,
    description: "다윗이 그 마음\n완전함과 손의 능숙함으로\n사명을 감당한 것처럼,\n최고 수준의 사역을 추구합니다.",
    titleEn: "The Attitude of Servant",
    titleKr: "섬김과 겸손의 자세",
    img: "/images/about/value3.jpg",
    imgClass: "brightness-50 object-[20%_40%]",
  },
  {
    id: 4,
    description:
      "천하보다 귀한 한 영혼을\n하나님의 마음으로 품고\n목양의 사각지대가 없는 돌봄과\n사랑의 공동체를 꿈꿉니다.",
    titleEn: "The Importance of Individual",
    titleKr: "한 영혼의 소중함",
    img: "/images/about/value4.jpg",
    imgClass: "brightness-50 object-[20%_40%]",
  },
  {
    id: 5,
    description: "주님 다시 오시는 날까지\n세계와 열방을 품고\n치유하는 선교공동체로 나아갑니다.",
    titleEn: "The Great Commission",
    titleKr: "지상명령",
    img: "/images/about/value5.jpg",
    imgClass: "brightness-50 object-[20%_20%]",
  },
];

const AboutIndexPage = () => {
  return (
    <Layout
      pageTitle="교회소개"
      title="교회소개"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner2.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
    >
      <AboutIntroduction />
    </Layout>
  );
};

export default AboutIndexPage;
