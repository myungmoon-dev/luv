import CongregationNewsList from "@/components/congregation-news";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const CongregationNewsPage = () => {
  const { push } = useRouter();

  return (
    <Layout
      title="교우 소식"
      titleChildren={<Button onClick={() => push("/congregation-news/create")}>추가</Button>}
    >
      <CongregationNewsList />
    </Layout>
  );
};

export default CongregationNewsPage;
