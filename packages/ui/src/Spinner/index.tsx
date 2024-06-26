import { HashLoader } from "react-spinners";

interface ISpinnerProps {
  color?: string;
  loading?: boolean;
  size?: number;
}

export const Spinner = ({ color = "#3490DE", size, loading = true }: ISpinnerProps) => {
  return <HashLoader color={color} size={size} loading={loading} />;
};
