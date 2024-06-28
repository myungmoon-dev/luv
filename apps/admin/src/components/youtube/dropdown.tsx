import { ChangeEvent } from "react";
import { YoutubeType } from "type";

export interface IYoutubeDropDownOptions {
  label: string;
  type: YoutubeType;
}

interface IYoutubeDropDownProps {
  label: string;
  options: IYoutubeDropDownOptions[];
  selected: IYoutubeDropDownOptions;
  onSelect: (selcted: IYoutubeDropDownOptions) => void;
}
const YoutubeDropDown = ({ label, options, selected, onSelect }: IYoutubeDropDownProps) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedYoutube = options.find(
      (option) => option.type === (e.target.value as YoutubeType),
    );

    if (selectedYoutube) {
      onSelect(selectedYoutube);
    }
  };

  return (
    <label className="flex items-center gap-3">
      <p className="w-20 font-bold text-white">{label}</p>
      <select
        className="appearance-no flex flex-grow rounded px-4 py-2 text-center font-bold text-black"
        onChange={onChange}
        value={selected.type}
      >
        {options.map((option) => (
          <option key={option.label} value={option.type}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default YoutubeDropDown;
