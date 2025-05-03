import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationYoungAdults1Page = () => {
  return (
    <Layout
      pageTitle="1청년부"
      title="1청년부"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/education/1youth/banner.jpg"
      bannerImgClass="object-[50%_70%]"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="1youth" />
    </Layout>
  );
};

export default EducationYoungAdults1Page;
