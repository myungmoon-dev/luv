import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationYoungAdults1Page = () => {
  return (
    <Layout
      pageTitle="1청년부"
      title="1청년부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/1youth/banner.jpg"
      bannerImgClass="object-[50%_70%]"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="1youth" />
    </Layout>
  );
};

export default EducationYoungAdults1Page;
