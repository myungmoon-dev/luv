import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IBulletinImageForm } from "type";
import HomeSection from "./section";
import { usePostBulletin } from "@/query/bulletin";
import {
  usePostCloudFlareConnect,
  usePostCloudFlareUpload,
  usePostCloudFlareUpload2,
} from "@/query/cloudflare";

interface IBulletinImageListForm extends Omit<IBulletinImageForm, "images"> {
  images: FileList;
}

const BulletinSection = () => {
  const { register, handleSubmit } = useForm<IBulletinImageListForm>();

  const { mutate } = usePostBulletin();
  const { refetch: fetchConnectInfo } = usePostCloudFlareConnect();
  const { mutate: mutateUpload } = usePostCloudFlareUpload2();

  const onSubmit = async (data: IBulletinImageListForm) => {
    const formData = new FormData();

    if (!data.title || !data.date) return alert("모든 정보를 입력해주세요.");
    if (data.images?.length !== 2)
      return alert("주보 이미지는 2개만 제출 가능합니다.");

    formData.append("date", data.date);
    formData.append("title", data.title);
    Array.from(data.images).forEach((image, index) => {
      formData.append(`image-${index}-file`, image);
      formData.append(`image-${index}-name`, image.name);
    });

    // CloudFlare DirectCreatorUpload 유효한 id/uploadURL 가져오기
    const { data: connectInfo } = await fetchConnectInfo();
    formData.append("uploadURL", connectInfo?.uploadURL as string);

    const res = mutateUpload(formData, {
      onSuccess(data, variables, context) {
        console.log(data);
      },
    });
    console.log("res: ", res);
    console.log(connectInfo);

    return;
    // FIXME: 주보에 storage 제거해야 함
    mutate(formData, {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
      onSettled: () => alert("완료"),
    });
  };

  return (
    <HomeSection title="주보">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="flex gap-2">
          <p>날짜</p>
          <input className="text-black" {...register("date")} />
        </label>
        <label className="flex gap-2">
          <p>제목</p>
          <input className="text-black" {...register("title")} />
        </label>
        <label className="flex gap-2">
          <p>이미지</p>
          <input
            type="file"
            accept="image/*"
            multiple={true}
            {...register("images")}
          />
        </label>
        <button>추가하기</button>
      </form>
    </HomeSection>
  );
};

export default BulletinSection;
