import { useQueryState } from "nuqs";

const isValidSize = (value: number): value is number => {
  return Number.isInteger(value) && value > 0;
};

export const useSizeFromQueryParam = ({ key = "size" }: { key?: string } = { key: "size" }) => {
  const sizeState = useQueryState(key, {
    parse: (value) => {
      const parsedValue = Number(value);
      if (isValidSize(parsedValue)) return parsedValue;
      return 10;
    },
    defaultValue: 10,
  });

  return sizeState;
};
