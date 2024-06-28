import React, { ReactNode } from "react";

interface IViewProps {
  isEmpty: boolean;
  fallback: ReactNode;
  children: ReactNode;
}

const View = ({ isEmpty, fallback, children }: IViewProps) => {
  return <>{isEmpty ? fallback : children}</>;
};

export default View;
