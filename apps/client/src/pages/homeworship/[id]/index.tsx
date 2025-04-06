import HomeWorshipDetail from "@/components/homeWorship/detail";
import Layout from "@/components/layout";

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // TODO: 가정예배 id 가져와 적용
}

const DiscipleshipMainBibleDetailPage = () => {
  return (
    <Layout pageTitle="맛있는 가정예배" title="맛있는 가정예배" bannerImage="/images/education/banner.jpg">
      <HomeWorshipDetail />
    </Layout>
  );
};

export default DiscipleshipMainBibleDetailPage;
