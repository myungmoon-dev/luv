import { UseFormRegisterReturn } from "react-hook-form";

interface IHomeworshipFormInputProps {
  label: string;
  register: UseFormRegisterReturn;
  type?: string;
  placeholder?: string;
}

const HomeworshipFormInput = ({ register, label, type = "text", placeholder = "" }: IHomeworshipFormInputProps) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">
        {label}
        <span className="text-red-500">*</span>
      </span>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-400 px-4 py-2.5 focus:border-blue-500 focus:outline-none"
      />
    </label>
  );
};

export default HomeworshipFormInput;
