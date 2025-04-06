import HomeWorship from "@/components/homeWorship";
import Layout from "@/components/layout";

const HomeWorshipPage = () => {
  return (
    <Layout
      pageTitle="맛있는 가정예배"
      title="맛있는 가정예배"
      bannerImage="/images/home/homeworship.png"
      bannerImgClass="object-[100%_30%] brightness-75 md:object-[100%_15%] 2xl:object-[100%_25%]"
    >
      <HomeWorship />
    </Layout>
  );
};

export default HomeWorshipPage;
