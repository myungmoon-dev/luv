import Banner from "@/components/home/banner";
import NavIcon from "@/components/home/nav-icon";
import Section from "@/components/home/section";
import SectionCard from "@/components/home/section-card";
import SectionContact from "@/components/home/section-contact";
import SectionDirection from "@/components/home/section-direction";
import Layout from "@/components/layout";
import { SectionHeader } from "ui";

export default function Home() {
  return (
    // FIXME: 임시 기본 값 설정
    <Layout
      bannerImage="/images/pastor.jpg"
      title="섬기는 분들"
      bannerDescription="교회여! 일어나 세상으로 흘러가라"
      innerMenus={[{ label: "원로 목사", path: "/" }]}
    >
      <div>
        {/* banner */}
        <Banner
          preachDate="2023. 12. 14"
          preachBibleContent="이사야 9장 6-7절"
          preachTitle="놀라운 그 이름"
          img="/images/pastor_edit.jpeg"
        />
        {/* 2,3 sections */}
        <div className="grid grid-rows-2 gap-10 sm:py-10 md:py-16">
          {/* 2 section */}
          <Section className="items-center justify-start">
            {/* header 표어 */}
            <SectionHeader text="2024 명문 표어" hasLine />

            {/* title 표어 */}
            <h2 className="text-center font-HSBombaram3 text-2xl xl:text-3xl">"교회여! 일어나 세상으로 흘러가라!"</h2>
            {/* contents 표어 */}
            <div className="grid h-[150px] w-full grid-cols-4 gap-10 px-10 xl:h-[250px] xl:gap-20 xl:px-32">
              <SectionCard img="balance.jpg" firstText="말씀과 성령이" secondText="균형잡힌 건강한 교회" />
              <SectionCard img="world.jpg" firstText="민족과 세계로" secondText="복음을 전파하는 교회" />
              <SectionCard img="some.jpg" firstText="지역사회와 이웃을" secondText="섬기는 교회" />
              <SectionCard img="next-leader.jpg" firstText="다음 세대를 탁월한" secondText="리더로 세우는 교회" />
            </div>
            {/* -- line -- */}
            <div className="h-[10px] w-full rounded-lg bg-[#dfc7c7]" />
            {/* nav-icons */}
            <div className="grid w-full grid-cols-4 justify-items-center gap-2 md:grid-cols-8">
              {new Array(8).fill(0).map((_, idx) => (
                <NavIcon key={idx} text={`교회소개${idx}`} />
              ))}
            </div>
            {/* header 주보 */}
            <SectionHeader text="주보" hasLine />
            {/* contents 주보 */}
            <div className="mb-10 grid h-full grid-cols-4 justify-items-center gap-10">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="h-36 w-36 rounded-3xl rounded-b-none bg-[#dfc7c7]" />
                ))}
            </div>
          </Section>
          {/* 3 section */}
          <Section>
            {/* header 오시는 길 */}
            <SectionHeader text="오시는 길" hasLine />
            {/* contents 오시는 길 */}
            <div className="mb-10 grid h-1/2 w-full grid-cols-2 gap-3">
              {/* 1. 독산동 비전채플 */}
              <SectionDirection chaple="독산동 비전채플(평일)" address="서울특별시 금천구 남부순환로 1406" />
              {/* 2. 서울여상 사랑채플 */}
              <SectionDirection
                chaple="서울여상 사랑채플(주일)"
                address={`서울 관악구 관악로 85 (서울여자상업고등학교 체육관 건물 3층)`}
              />
            </div>

            {/* header CONTACT */}
            <SectionHeader text="CONTACT" hasLine />
            {/* content CONTACT */}
            <div className="flex h-[200px] w-full items-center justify-around align-middle">
              {/* 대표 전화번호 */}
              <SectionContact text="02) 861-5071" textClassName="text-lg" />
              {/* 대표 이메일 */}
              <SectionContact text="myungmoon@mm.or.kr" textClassName="text-md" />
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
}
