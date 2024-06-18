import { AlbumType } from "type";
import { ChangeEvent, useState } from "react";
import { Icon, Spinner } from "ui";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { usePostAlbum } from "@/query/album";
import { ErrorMessage } from "@hookform/error-message";
import { AlbumTypeOptions } from ".";

interface IAblumForm {
  title: string;
  type: AlbumType;
  images: FileList;
}

const HomeAlbumCreate = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { push, back } = useRouter();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAblumForm>();
  const [selectedType, setSelectedType] = useState<AlbumType>("main");
  const [imgPaths, setImgPaths] = useState<string[]>([]);
  const { mutate } = usePostAlbum();

  const onTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as AlbumType;
    setSelectedType(selected);
  };

  const onPreviewImage = async () => {
    const watchImages = watch("images");
    const files = Array.from(watchImages);

    if (files) {
      if (files.length > 5) {
        return alert("사진은 최대 5장까지 업로드 가능합니다.");
      }
      const paths = files.map((file) => URL.createObjectURL(file));
      setImgPaths(paths);
    } else {
      return alert("다시 시도해주세요.");
    }
  };

  const onSubmit = async (data: IAblumForm) => {
    setIsUploading(true);
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("type", data.type);
    formData.append("length", data.images.length + "");
    Array.from(data.images).forEach((image, index) => {
      formData.append(`image-${index}-file`, image);
      formData.append(`image-${index}-name`, image.name);
    });

    mutate(formData, {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
      onSettled: () => {
        alert("업로드하였습니다.");
        back();
      },
    });
  };

  return (
    <div className="relative flex flex-col justify-center items-center mx-auto h-screen p-20">
      {isUploading && (
        <div className="bg-black opacity-70 absolute w-full h-full z-10 flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <div className="flex gap-3">
        <button
          onClick={back}
          className="font-semibold p-2 bg-blue-600 rounded-md my-5"
        >
          뒤로가기
        </button>
        <button
          onClick={() => push("/")}
          className="font-semibold p-2 bg-blue-600 rounded-md my-5"
        >
          홈으로
        </button>
      </div>
      <h1 className="text-4xl font-semibold">앨범 업로드</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 w-full flex flex-col gap-3"
      >
        <label className="flex gap-3 items-center w-1/4 mx-auto">
          <p className="w-20 font-bold text-white">앨범 타입</p>
          <select
            className="flex rounded px-4 py-2 font-bold text-black flex-grow appearance-no text-center"
            value={selectedType}
            {...register("type", {
              onChange: onTypeChange,
              required: "필수 값입니다.",
            })}
          >
            {AlbumTypeOptions.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex gap-3 items-center w-1/4 mx-auto">
          <p className="w-20 font-bold text-white">제목</p>
          <input
            {...register("title", { required: "제목을 입력해주세요." })}
            type="text"
            className="rounded py-2 font-bold text-black flex-grow appearance-no text-center"
          />
        </label>
        <ErrorMessage
          errors={errors}
          name="title"
          render={({ message }) => (
            <p className="text-sm text-center text-red-500">{message}</p>
          )}
        />
        <div className="w-full">
          <label className="flex justify-center flex-col gap-1 items-center p-10 border-2 border-white rounded-md border-dashed cursor-pointer hover:opacity-50">
            <Icon
              name="ImageUpload"
              size="lg"
              backgroundColor="white"
              strokeColor="white"
            />
            <p>이미지 업로드 하기</p>
            <input
              className="hidden"
              type="file"
              accept="image/jpg, image/jpeg, image/png, image/gif"
              multiple={true}
              {...register("images", {
                onChange: onPreviewImage,
                required: "이미지가 반드시 필요합니다.",
              })}
            />
          </label>
          <div className="grid w-full grid-cols-5 gap-2 mt-5">
            {imgPaths.map((path, index) => (
              <div key={index} className="relative w-full h-[200px]">
                <Image
                  src={path}
                  alt={`미리보기 이미지 ${index + 1}`}
                  className="object-cover rounded-md"
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
        <ErrorMessage
          errors={errors}
          name="images"
          render={({ message }) => (
            <p className="text-sm text-center text-red-500">{message}</p>
          )}
        />
        <button className="bg-blue-500 text-white px-4 py-2 w-20 rounded mt-2 self-end">
          업로드
        </button>
      </form>
    </div>
  );
};

export default HomeAlbumCreate;
