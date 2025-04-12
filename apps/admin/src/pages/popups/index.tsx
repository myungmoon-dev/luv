import Layout from "@/components/layout";
import Popups from "@/components/popups";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const PopupsPage = () => {
  const { push } = useRouter();

  return (
    <Layout
      title="팝업"
      titleChildren={<Button onClick={() => push("/popups/create")}>추가</Button>}
    >
      <Popups />
    </Layout>
  );
};

export default PopupsPage;
