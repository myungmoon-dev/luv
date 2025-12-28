import { useEffect, useState } from "react";
import { UseFormRegisterReturn, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { IHomeWorshipForm } from "type";

interface IHomeworshipFormImgUploadProps {
  register: UseFormRegisterReturn;
  watch: UseFormWatch<IHomeWorshipForm>;
  setValue: UseFormSetValue<IHomeWorshipForm>;
}

const HomeworshipFormImgUpload = ({ register, watch, setValue }: IHomeworshipFormImgUploadProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const selectedImage = watch("image");

  useEffect(() => {
    if (selectedImage && selectedImage.length > 0) {
      const file = selectedImage[0];
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setImagePreview(null);
    }
  }, [selectedImage]);

  const handleRemoveImage = () => {
    setImagePreview(null);
    setValue("image", null as any);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">
        사진 첨부
        <span className="text-red-500">*</span>
      </span>
      {!imagePreview ? (
        <label className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100">
          <input type="file" accept="image/*" {...register} className="hidden" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </label>
      ) : (
        <div className="relative h-48 w-48">
          <img
            src={imagePreview}
            alt="미리보기"
            className="h-full w-full rounded-md border border-gray-300 object-cover"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-lg ring-2 ring-white"
            style={{ backgroundColor: "#dc2626" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeworshipFormImgUpload;
