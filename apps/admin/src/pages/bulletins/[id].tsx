import Layout from "@/components/layout";
import { useDeleteBulletin, useGetBulletin } from "@/query/bulletin";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Spinner } from "ui";

const BulletinDetailPage = () => {
  const params = useParams();
  const bulletinId = params?.id as string;

  const { push } = useRouter();

  const { data: bulletin } = useGetBulletin();

  const { mutate } = useDeleteBulletin();

  const handleDeleteBulletin = () => {
    if (!confirm("삭제하시겠습니까?")) return;
    mutate(bulletinId, {
      onSuccess: () => {
        alert("삭제되었습니다.");
        push("/bulletins");
      },
      onError: () => {
        alert("에러가 발생했습니다");
      },
    });
  };

  if (!bulletin)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <Layout title="주보 상세">
      <div className="px-24 py-10">
        <button className="mb-10" onClick={() => push("/bulletins")}>
          {"<"} 뒤로가기
        </button>
        <h1 className="mb-2 text-3xl font-bold">{bulletin.title}</h1>
        <div className="mb-10 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">
              날짜: {dayjs(bulletin.date).format("YYYY-MM-DD")}
            </p>
            <p className="text-sm text-slate-500">
              생성일: {dayjs(bulletin.createdAt).format("YYYY-MM-DD")}
            </p>
          </div>
          <button onClick={handleDeleteBulletin} className="text-red-500">
            삭제
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {bulletin.images.map((image) => (
            <div className="relative h-[550px] w-[868px]">
              <Image src={`${image}/bulletin`} fill={true} alt="주보" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BulletinDetailPage;
