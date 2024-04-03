import { HashLoader } from "react-spinners";

interface ISpinnerProps {
  color?: string;
  loading?: boolean;
  size?: number;
}

export const Spinner = ({
  color = "#dfc7c7",
  size,
  loading = true,
}: ISpinnerProps) => {
  return (
    <div className="ui-absolute ui-inset-0 ui-flex ui-items-center ui-justify-center ui-bg-transparent">
      <HashLoader color={color} size={size} loading={loading} />
    </div>
  );
};
