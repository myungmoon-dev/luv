import HomeWorship from "@/components/homeworship";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomeWorshipPage = () => {
  const { push } = useRouter();

  return (
    <Layout
      title="가정예배"
      titleChildren={<Button onClick={() => push("/homeworship/create")}>추가</Button>}
    >
      <HomeWorship />
    </Layout>
  );
};

export default HomeWorshipPage;
