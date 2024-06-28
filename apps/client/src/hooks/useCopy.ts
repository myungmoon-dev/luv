import { useToast } from "./useToast";

const useCopy = () => {
  const { show } = useToast();

  const copy = (value: string) => {
    navigator.clipboard.writeText(value);
    show({ description: "복사되었습니다." });
  };

  return { copy };
};

export default useCopy;
