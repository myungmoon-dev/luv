import { HashLoader } from "react-spinners";

interface ISpinnerProps {
  color?: string;
  loading: boolean;
  size?: number;
  className?: string;
}

export const Spinner = ({
  color = "#dfc7c7",
  size,
  loading,
}: ISpinnerProps) => {
  return <HashLoader color={color} size={size} loading={loading} />;
};
