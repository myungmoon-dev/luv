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
  date: string;
}

const HomeAlbumCreate = () => {
  const { push } = useRouter();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAblumForm>();

  const [selectedType, setSelectedType] = useState<AlbumType>("main");
  const [imgPaths, setImgPaths] = useState<string[]>([]);

  const { mutate, isPending } = usePostAlbum();

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
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("type", data.type);
    formData.append("date", data.date);
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
        push("/album");
      },
    });
  };

  return (
    <div className="relative mx-auto flex h-screen flex-col items-center justify-center p-20">
      {isPending && (
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black opacity-70">
          <Spinner />
        </div>
      )}
      <div className="flex gap-3">
        <button
          onClick={() => push("/album")}
          className="my-5 rounded-md bg-blue-600 p-2 font-semibold"
        >
          목록으로
        </button>
        <button onClick={() => push("/")} className="my-5 rounded-md bg-blue-600 p-2 font-semibold">
          홈으로
        </button>
      </div>
      <h1 className="text-4xl font-semibold">앨범 업로드</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex w-full flex-col gap-3">
        <label className="mx-auto flex w-1/2 items-center gap-3 xl:w-1/5">
          <p className="w-20 font-bold text-white">앨범 타입</p>
          <select
            className="appearance-no flex flex-grow rounded px-4 py-2 text-center font-bold text-black"
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
        <label className="mx-auto flex w-1/2 items-center gap-3 xl:w-1/5">
          <p className="w-20 font-bold text-white">제목</p>
          <input
            {...register("title", { required: "제목을 입력해주세요." })}
            type="text"
            className="appearance-no flex-grow rounded py-2 text-center font-bold text-black"
          />
        </label>
        <ErrorMessage
          errors={errors}
          name="title"
          render={({ message }) => <p className="text-center text-sm text-red-500">{message}</p>}
        />
        <label className="mx-auto flex w-1/2 items-center gap-3 xl:w-1/5">
          <p className="w-20 font-bold text-white">행사날짜</p>
          <input
            {...register("date", { required: "행사날짜를 입력해주세요." })}
            type="text"
            className="appearance-no flex-grow rounded py-2 text-center font-bold text-black"
            placeholder="ex) 2024-01-01"
          />
        </label>
        <ErrorMessage
          errors={errors}
          name="date"
          render={({ message }) => <p className="text-center text-sm text-red-500">{message}</p>}
        />
        <div className="w-full">
          <label className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-white p-10 hover:opacity-50">
            <Icon name="ImageUpload" size="lg" backgroundColor="white" strokeColor="white" />
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
          <div className="mt-5 grid w-full grid-cols-5 gap-2">
            {imgPaths.map((path, index) => (
              <div key={index} className="relative h-[200px] w-full">
                <Image
                  src={path}
                  alt={`미리보기 이미지 ${index + 1}`}
                  className="rounded-md object-cover"
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
        <ErrorMessage
          errors={errors}
          name="images"
          render={({ message }) => <p className="text-center text-sm text-red-500">{message}</p>}
        />
        <button className="mt-2 w-20 self-end rounded bg-blue-500 px-4 py-2 text-white">
          업로드
        </button>
      </form>
    </div>
  );
};

export default HomeAlbumCreate;
