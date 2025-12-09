import CongregationNewsForm from "@/components/congregation-news/form";
import Layout from "@/components/layout";
import { useGetCongregationNews } from "@/query/congregationNews";
import { useRouter } from "next/router";
import { Spinner } from "ui";

const CongregationNewsEditPage = () => {
  const { query } = useRouter();
  const id = query.id as string;

  const { data, isFetching } = useGetCongregationNews({ id });

  if (isFetching)
    return (
      <Layout title="교우 소식 수정">
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      </Layout>
    );

  if (!data) {
    return (
      <Layout title="교우 소식 수정">
        <div className="flex h-full items-center justify-center">
          <p>데이터를 불러올 수 없습니다.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="교우 소식 수정">
      <CongregationNewsForm
        initialData={{
          _id: data._id,
          type: data.type,
          description: data.description,
        }}
      />
    </Layout>
  );
};

export default CongregationNewsEditPage;

