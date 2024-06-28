import React, { useState } from "react";

interface IDetailsProps {
  title: string;
  description: string;
}

export const Details = ({ title, description }: IDetailsProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="ui-border-y-2 ui-flex ui-flex-col ui-border-[#f0f0f0]">
      <div className="ui-px-4 ui-py-7" onClick={() => setOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && (
        <div className="ui-bg-[#f8f8f8] ui-px-4 ui-py-7 ui-whitespace-pre">{description}</div>
      )}
    </div>
  );
};
