import React from "react";
import { ChangeEvent, useState } from "react";
import { Icon, Spinner } from "ui";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { usePostAlbum } from "@/query/album";
import { ErrorMessage } from "@hookform/error-message";
import { AlbumType } from "type";
import { ALBUM_TYPE_OPTIONS } from "../config";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface IAblumForm {
  title: string;
  type: AlbumType;
  images: FileList;
  date: string;
}

const AlbumCreate = () => {
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

  const onTypeChange = (value: AlbumType) => {
    setSelectedType(value);
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
    <div className="relative flex flex-col items-center justify-center">
      {isPending && (
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black opacity-70">
          <Spinner />
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-3">
        <label className="flex items-center gap-3">
          <p className="font-bold text-white">앨범 타입</p>
          <Select
            onValueChange={onTypeChange}
            value={selectedType}
            {...register("type", {
              onChange: onTypeChange,
              required: "필수 값입니다.",
            })}
          >
            <SelectTrigger className="w-[233px]">
              <SelectValue placeholder="앨범 타입을 선택해 주세요." />
            </SelectTrigger>
            <SelectContent>
              {ALBUM_TYPE_OPTIONS.slice(1).map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
        <label className="flex items-center gap-3">
          <p className="w-20 font-bold text-white">제목</p>
          <Input
            className="w-[233px]"
            {...register("title", { required: "제목을 입력해주세요." })}
          />
          <ErrorMessage
            errors={errors}
            name="title"
            render={({ message }) => <p className="text-center text-sm text-red-500">{message}</p>}
          />
        </label>
        <label className="flex items-center gap-3">
          <p className="w-20 font-bold text-white">행사날짜</p>
          <Input
            className="w-[233px]"
            {...register("date", { required: "행사날짜를 입력해주세요." })}
            type="text"
            placeholder="ex) 2024-01-01"
          />
          <ErrorMessage
            errors={errors}
            name="date"
            render={({ message }) => <p className="text-center text-sm text-red-500">{message}</p>}
          />
        </label>
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
        <Button className="w-20 self-end">업로드</Button>
      </form>
    </div>
  );
};

export default AlbumCreate;
