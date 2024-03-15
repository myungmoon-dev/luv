import Layout from "@/components/layout";
import React from "react";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import Profile from "@/components/about/profile";

// FIXME: profiles DB에 저장 /  position keyword로 변경해야 함 / 세부 탭 생성 해야 함
const profiles = [
  {
    // FIXME: 명문교회 개척, 서울강남노회 증경노회장, GMS 명예선교사, 꿈을주는세계선교회 대표
    description: "",
    image: "/images/leader/deok-jin.jpeg",
    name: "이덕진 원로목사",
    position: "",
  },
  {
    // FIXME: 담임, 2청년부, 임직 - 2022년 12월
    description: "",
    image: "/images/leader/ji-hyuk.jpeg",
    name: "김지혁 담임목사",
    position: "",
  },
  {
    name: "이 삭 목사",
    description: "2023년 12월",
    image: "/images/leader/lee-sak.jpeg",
    position: "1교구, 신혼부부, 전도위원회, 시설위원회",
  },
  {
    name: "표명성 목사",
    description: "2023년 12월",
    image: "/images/leader/myung-seong.jpeg",
    position: "2교구, 1청년부, 예배위원회, 찬양위원회",
  },
  {
    name: "이현준 목사",
    description: "2021년 12월",
    image: "/images/leader/hyun-jun.jpeg",
    position: "중등부, 고등부, 미디어위원회, 체육친교위원회",
  },
  {
    description: "2023년 1월",
    image: "/images/leader/jae-jun.png",
    name: "정재준 목사",
    position: "새가족위원회, 선교위원회, 주일예배, 찬양인도(1부)",
  },
  {
    name: "장건진 목사",
    image: "/images/leader/geon-jin.jpeg",
    description: "2023년 12월",
    position: "유년부, 초등부, 금요기도회 찬양인도",
  },
  {
    description: "",
    image: "/images/leader/gyu-bo.jpeg",
    name: "김규보 목사",
    position: "상담사역 (총신대학교 상담학 교수)",
  },
  {
    description: "2004년 1월",
    image: "/images/leader/mae-sil.jpeg",
    name: "박매실 전도사",
    position: "1교구, 신혼부부, 차량위원회",
  },
  {
    name: "이능옥 전도사",
    image: "/images/leader/neung-oak.jpeg",
    description: "2008년 1월",
    position: "2교구, 실버구역, 새가족부, 새가족위원회",
  },
  {
    name: "순현주 전도사",
    description: "2023년 12월",
    image: "/images/leader/hyun-ju.png",
    position: "유치부, 교육디렉터, 교육위원회",
  },
  {
    name: "김화선 전도사",
    description: "2023년 12월",
    image: "/images/leader/hwa-seon.jpeg",
    position: "영아부, 엄마QT학교",
  },
];

const LeadershipPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/introduce.jpeg"
      innerMenus={aboutInnerMenus}
    >
      <div className="flex w-full flex-col gap-20">
        {profiles.map((profile, index) => {
          return (
            <Profile
              index={index}
              name={profile.name}
              description={profile.description}
              position={profile.position}
              image={profile.image}
              alt={profile.name}
              className={index % 2 === 0 && index > 1 ? "flex-row-reverse" : ""}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default LeadershipPage;
