import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInfantsMenus, educationInnerMenus } from "@/constants/innerMenus/education";

const EducationInfantsPage = () => {
  return (
    <Layout
      pageTitle="영아부"
      title="영아부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/infants/banner.jpg"
      innerMenus={educationInnerMenus}
      detailMenus={educationInfantsMenus}
      bannerImgClass="object-[50%_70%]"
    >
      <EducationOverView type="infants" />
    </Layout>
  );
};

export default EducationInfantsPage;
