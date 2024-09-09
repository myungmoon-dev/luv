import { UseFormRegister } from "react-hook-form";
import { IYoutubeForm } from "type";

interface YoutubeInputProps {
  label: string;
  name: keyof IYoutubeForm;
  placeholder: string;
  register: UseFormRegister<IYoutubeForm>;
  required?: boolean;
}
const YoutubeInput = ({
  label,
  name,
  placeholder,
  register,
  required = false,
}: YoutubeInputProps) => {
  return (
    <label className="grid grid-flow-col place-items-center gap-3">
      <p className="w-20">{label}</p>
      <input
        {...register(name, {
          required,
        })}
        placeholder={placeholder}
        className="rounded border px-4 py-2 text-black"
      />
    </label>
  );
};

export default YoutubeInput;
