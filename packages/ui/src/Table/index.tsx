import React from "react";
import { cn } from "..";

export interface ITableData {
  id: string;
  date: string;
  title: string;
  writer: string;
}

interface ITableProps {
  data: ITableData[];
  className?: string;
}

export const Table = ({ data, className }: ITableProps) => {
  return (
    <div className={cn("ui-text-center", className)}>
      <div className="ui-flex ui-font-bold ui-py-3">
        <div className="ui-w-[30%]">
          <p>날짜</p>
        </div>
        <div className="ui-w-[50%]">
          <p>제목</p>
        </div>
        <div className="ui-w-[20%]">
          <p>작성자</p>
        </div>
      </div>
      <hr className="ui-border-gray-100" />
      <div className="ui-flex ui-flex-col">
        {data.map((row) => (
          <>
            <div className="ui-flex ui-py-3" key={row.id}>
              <div className="ui-w-[30%]">
                <p>{row.date}</p>
              </div>
              <div className="ui-w-[50%]">
                <p>{row.title}</p>
              </div>
              <div className="ui-w-[20%]">
                <p>{row.writer}</p>
              </div>
            </div>
            <hr className="ui-border-gray-100" />
          </>
        ))}
      </div>
    </div>
  );
};
