import { useQueryState } from "nuqs";

const isValidPage = (value: number): value is number => {
  return Number.isInteger(value) && value > 0;
};

export const usePageFromQueryParam = ({ key = "page" }: { key?: string } = { key: "page" }) => {
  const pageState = useQueryState(key, {
    parse: (value) => {
      const parsedValue = Number(value);
      if (isValidPage(parsedValue)) return parsedValue;
      return 1;
    },
    defaultValue: 1,
  });

  return pageState;
};
