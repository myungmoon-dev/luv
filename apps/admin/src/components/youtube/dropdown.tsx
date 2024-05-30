import { ChangeEvent, useState } from "react";
import { YoutubeType } from "type";

export interface IYoutubeDropDownOptions {
  label: string;
  value: YoutubeType;
}

interface IYoutubeDropDownProps {
  label: string;
  options: IYoutubeDropDownOptions[];
  onSelect: (selcted: YoutubeType) => void;
}
const YoutubeDropDown = ({
  label,
  options,
  onSelect,
}: IYoutubeDropDownProps) => {
  const [selected, setSelected] = useState<YoutubeType>("main");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value as YoutubeType);
    onSelect(selected);
  };

  return (
    <label className="flex gap-3 items-center">
      <p className="w-20 font-bold">{label}</p>
      <select
        className="flex rounded px-4 py-2 font-bold text-black flex-grow appearance-no text-center"
        onChange={onChange}
        value={selected}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default YoutubeDropDown;
