import Layout from "@/components/layout";
import MissionNewsList from "@/components/missionNews";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const MissionNewsPage = () => {
  const { push } = useRouter();

  return (
    <Layout
      title="선교지 소식"
      titleChildren={<Button onClick={() => push("/mission-news/create")}>추가</Button>}
    >
      <MissionNewsList />
    </Layout>
  );
};

export default MissionNewsPage;
