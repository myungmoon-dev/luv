import Layout from "@/components/layout";
import React from "react";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import Image from "next/image";
import Profile from "@/components/about/profile";

const LeadershipPage = () => {
  return (
    <Layout
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={aboutInnerMenus}
    >
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold">원로목사</h3>
          <div className="flex flex-col gap-2">
            <Profile
              description="명문교회 개척, 서울강남노회 증경노회장, GMS 명예선교사, 꿈을주는세계선교회 대표"
              image="/images/leader/deok-jin.jpeg"
              name="이덕진"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold">담임목사</h3>
          <div className="flex flex-col gap-2">
            <Profile
              description="담임, 2청년부, 임직 - 2022년 12월"
              image="/images/leader/ji-hyuk.jpeg"
              name="김지혁"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold">부목사</h3>
          <div className="flex flex-col gap-2">
            <Profile
              description="1교구, 신혼부부, 전도위원회, 시설위원회 행정, 훈련, 부임 - 2023년 12월"
              image="/images/leader/lee-sak.jpeg"
              name="이삭"
            />
            <Profile
              name="표명성"
              image="/images/leader/myung-seong.jpeg"
              description="2교구, 1청년부, 예배위원회, 찬양위원회 행정, 훈련, 부임-2023년 12월"
            />
            <Profile
              name="이현준"
              description="중등부, 고등부 미디어위원회, 체육친교위원회 행정, 훈련, 부임- 2021년 12월"
              image="/images/leader/hyun-jun.jpeg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold">교육목사</h3>
          <div className="flex flex-col gap-2">
            <Profile
              description="새가족위원회 선교위원회 주일예배 찬양 인도(1부) 부임-2023년 1월"
              image="/images/leader/jae-jun.png"
              name="정재준"
            />
            <Profile
              name="장건진"
              image="/images/leader/geon-jin.jpeg"
              description="유년부, 초등부 금요기도회 찬양인도 부임-2023년 12월"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold">협동목사</h3>
          <div className="flex flex-col gap-2">
            <Profile description="상담사역 (총신대학교 상담학 교수)" image="/images/leader/gyu-bo.jpeg" name="김규보" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold">전도사</h3>
          <div className="flex flex-col gap-2">
            <Profile
              description="1교구, 신혼부부, 차량위원회, 부임-2004년 1월"
              image="/images/leader/mae-sil.jpeg"
              name="박매실"
            />
            <Profile
              name="이능옥"
              image="/images/leader/neung-oak.jpeg"
              description="2교구, 실버구역, 새가족부, 새가족위원회, 부임-2008년 1월"
            />
            <Profile
              name="순현주"
              description="유치부, 교육디렉터, 교육위원회, 부임-2023년 12월"
              image="/images/leader/hyun-ju.png"
            />
            <Profile
              name="김화선"
              description="영아부, 엄마QT학교, 부임-2023년 12월"
              image="/images/leader/hwa-seon.jpeg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadershipPage;
