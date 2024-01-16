import Banner from "@/components/home/banner";
import NavIcon from "@/components/home/nav-icon";
import Section from "@/components/home/section";
import SectionCard from "@/components/home/section-card";
import SectionContact from "@/components/home/section-contact";
import SectionDirection from "@/components/home/section-direction";
import SectionHeader from "@/components/home/section-header";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div>
        {/* banner */}
        <Banner
          date="2023. 12. 14"
          preachBibleContent="이사야 9장 6-7절"
          preachTitle="놀라운 그 이름"
          img="/images/pastor_edit.jpeg"
        />
        {/* 2,3 sections */}
        <div className="grid grid-rows-2 sm:p-10 md:p-16 gap-10">
          {/* 2 section */}
          <Section propsClassName="justify-start items-center">
            {/* header 표어 */}
            <SectionHeader text="2024 명문 표어" />
            {/* title 표어 */}
            <h2 className="font-HSBombaram3 text-center text-2xl xl:text-3xl">"교회여! 일어나 세상으로 흘러가라!"</h2>
            {/* contents 표어 */}
            <div className="grid grid-cols-4 gap-10 xl:gap-20 w-full h-[150px] xl:h-[250px] px-10 xl:px-32">
              <SectionCard img="balance.jpg" firstText="말씀과 성령이" secondText="균형잡힌 건강한 교회" />
              <SectionCard img="world.jpg" firstText="민족과 세계로" secondText="복음을 전파하는 교회" />
              <SectionCard img="some.jpg" firstText="지역사회와 이웃을" secondText="섬기는 교회" />
              <SectionCard img="next-leader.jpg" firstText="다음 세대를 탁월한" secondText="리더로 세우는 교회" />
            </div>
            {/* -- line -- */}
            <div className="w-full h-[10px] bg-[#dfc7c7] rounded-lg" />
            {/* nav-icons */}
            <div className="w-full grid md:grid-cols-8 grid-cols-4 justify-items-center gap-2">
              {new Array(8).fill(0).map((_, idx) => (
                <NavIcon key={idx} text={`교회소개${idx}`} />
              ))}
            </div>
            {/* header 주보 */}
            <SectionHeader text="주보" />
            {/* contents 주보 */}
            <div className="h-full grid grid-cols-4 gap-10 justify-items-center mb-10">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="w-36 h-36 bg-[#dfc7c7] rounded-3xl rounded-b-none" />
                ))}
            </div>
          </Section>
          {/* 3 section */}
          <Section>
            {/* header 오시는 길 */}
            <SectionHeader text="오시는 길" />
            {/* contents 오시는 길 */}
            <div className="grid grid-cols-2 gap-3 w-full h-1/2 mb-10">
              {/* 1. 독산동 비전채플 */}
              <SectionDirection chaple="독산동 비전채플(평일)" address="서울특별시 금천구 남부순환로 1406" />
              {/* 2. 서울여상 사랑채플 */}
              <SectionDirection
                chaple="서울여상 사랑채플(주일)"
                address={`서울 관악구 관악로 85 (서울여자상업고등학교 체육관 건물 3층)`}
              />
            </div>

            {/* header CONTACT */}
            <SectionHeader text="CONTACT" />
            {/* content CONTACT */}
            <div className="flex w-full justify-around align-middle items-center h-[200px]">
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
