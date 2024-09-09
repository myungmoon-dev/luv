import Bulletins from "@/components/bulletins";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BulletinsPage = () => {
  const { push } = useRouter();

  return (
    <Layout
      title="주보"
      titleChildren={<Button onClick={() => push("/bulletins/create")}>주보 추가</Button>}
    >
      <Bulletins />
    </Layout>
  );
};

export default BulletinsPage;
