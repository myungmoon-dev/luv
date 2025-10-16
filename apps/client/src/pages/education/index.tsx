import EducationCoreValuesSection from "@/components/education/section/corevalues";
import EducationMenusSection from "@/components/education/section/menus";
import EducationMissionSection from "@/components/education/section/mission";
import EducationVisionSection from "@/components/education/section/vision";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import { Icon } from "ui";

const EducationMenuTitle = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-[22px] font-bold text-[#222222] sm:text-[25px] lg:text-[30px]">다음세대</p>

      {/* FIXME: 앨범 넘어가야 함 */}
      <button onClick={() => {}} className="flex items-center justify-center gap-2 rounded-md bg-[#001F54] px-3 py-2">
        <p className="text-sm font-medium text-white">앨범보기</p>
        <Icon name="CaretRight" sizeNumber={14} cursor="ui-cursor-pointer" />
      </button>
    </div>
  );
};

const EducationPage = () => {
  return (
    <Layout
      pageTitle="다음세대 사역안내"
      title="다음세대 사역안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <div className="flex w-full flex-col gap-10 overflow-hidden md:gap-16 lg:gap-20">
        {/* 1. 사명선언문 섹션 */}
        <EducationMissionSection />

        <div className="flex flex-col gap-8 px-5">
          {/* 2. 다음세대 메뉴 섹션  */}
          <EducationMenuTitle />
          <EducationMenusSection />
          {/* 3. 비전 섹션 */}
          <EducationVisionSection />
          {/* 4. 핵심가치 섹션 */}
          <EducationCoreValuesSection />
        </div>
      </div>
    </Layout>
  );
};

export default EducationPage;
