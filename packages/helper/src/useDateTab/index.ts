import { YearMonthType } from "type";
import { produce } from "immer";
import { Dispatch, SetStateAction } from "react";

const getPreviousMonth = (date: YearMonthType): YearMonthType => {
  const [year, month] = date.split("-").map(Number) as [number, number];
  const newDate = new Date(year, month - 1, 1);
  newDate.setMonth(newDate.getMonth() - 1);
  const newYear = newDate.getFullYear();
  const newMonth = (newDate.getMonth() + 1).toString().padStart(2, "0");
  return `${newYear}-${newMonth}`;
};

const getNextMonth = (date: YearMonthType): YearMonthType => {
  const [year, month] = date.split("-").map(Number) as [number, number];
  const newDate = new Date(year, month - 1, 1);
  newDate.setMonth(newDate.getMonth() + 1);
  const newYear = newDate.getFullYear();
  const newMonth = (newDate.getMonth() + 1).toString().padStart(2, "0");
  return `${newYear}-${newMonth}`;
};

interface IUseDateTabProps {
  setDateTabs: Dispatch<
    SetStateAction<
      {
        date: YearMonthType;
        label: string;
      }[]
    >
  >;
}

export const useDateTab = ({ setDateTabs }: IUseDateTabProps) => {
  const handleClickPrev = () => {
    setDateTabs(
      produce((draft) => {
        draft.pop();
        const newDate = getPreviousMonth(draft[0]!.date);
        const newLabel = `${newDate.split("-")[1]}월`;
        draft.unshift({ label: newLabel, date: newDate });
      }),
    );
  };

  const handleClickNext = () => {
    setDateTabs(
      produce((draft) => {
        draft.shift();
        const newDate = getNextMonth(draft[draft.length - 1]!.date);
        const newLabel = `${newDate.split("-")[1]}월`;
        draft.push({ label: newLabel, date: newDate });
      }),
    );
  };

  return { handleClickPrev, handleClickNext };
};
