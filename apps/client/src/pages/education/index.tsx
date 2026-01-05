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
      <p className="text-[20px] font-bold text-[#222222] sm:text-[24px] md:text-[28px] lg:text-[32px]">
        다음세대
      </p>

      {/* FIXME: 앨범 넘어가야 함 */}
      <button
        onClick={() => {}}
        className="flex items-center justify-center gap-2 rounded-md bg-[#001F54] px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3"
      >
        <p className="text-xs font-medium text-white sm:text-sm md:text-base">앨범보기</p>
        <Icon
          name="CaretRight"
          sizeNumber={14}
          cursor="ui-cursor-pointer"
          className="sm:h-4 sm:w-4 md:h-5 md:w-5"
        />
      </button>
    </div>
  );
};

const EducationPage = () => {
  return (
    <Layout
      pageTitle="다음세대 사역안내"
      title="다음세대 사역안내"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <div className="flex w-full flex-col gap-8 overflow-hidden sm:gap-12 md:gap-16 lg:gap-20">
        {/* 1. 사명선언문 섹션 */}
        <EducationMissionSection />

        <div className="flex flex-col gap-6 px-5 sm:gap-8 sm:px-8 md:gap-10 md:px-12 lg:px-16">
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
