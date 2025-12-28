import { UseFormRegisterReturn } from "react-hook-form";

interface IHomeworshipFormDateProps {
  label?: string;
  register: UseFormRegisterReturn;
  defaultValue?: string;
}

const HomeworshipFormDate = ({
  label = "예배 날짜",
  register,
  defaultValue,
}: IHomeworshipFormDateProps) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">
        {label}
        <span className="text-red-500">*</span>
      </span>
      <input
        type="date"
        {...register}
        defaultValue={defaultValue || new Date().toISOString().split("T")[0]}
        onClick={(e) => e.currentTarget.showPicker?.()}
        className="w-full rounded-md border border-gray-400 px-4 py-2.5 text-gray-700 focus:border-blue-500 focus:outline-none"
      />
    </label>
  );
};

export default HomeworshipFormDate;
