import dayjs from "dayjs";
import { cn } from "..";

export interface ITableData {
  id: string;
  date: string;
  title: string;
  writer: string;
  isPinned?: boolean;
}

interface ITableProps {
  data: ITableData[];
  className?: string;
  onClickRow?: (rowId: string) => void;
}

export const Table = ({ data, className, onClickRow }: ITableProps) => {
  return (
    <div className={cn("ui-text-center", className)}>
      <div className="ui-flex ui-py-3">
        <div className="ui-w-[30%]">
          <p className="font-SCoreDream">날짜</p>
        </div>
        <div className="ui-w-[50%]">
          <p className="font-SCoreDream">제목</p>
        </div>
        <div className="ui-w-[20%]">
          <p className="font-SCoreDream">작성자</p>
        </div>
      </div>
      <hr className="ui-border-gray-100" />
      <div className="ui-flex ui-flex-col">
        {data.length > 0 ? (
          data.map((row) => (
            <>
              <div
                className={cn(
                  "ui-flex ui-py-3 ui-cursor-pointer text-sm md:text-base",
                  row.isPinned && "ui-font-bold ui-bg-blue-100",
                )}
                key={row.id}
                onClick={() => onClickRow?.(row.id)}
              >
                <div className="ui-w-[30%]">
                  <p>{dayjs(row.date).format("YYYY. MM. DD")}</p>
                </div>
                <div className="ui-w-[50%]">
                  <p>
                    {row.isPinned && "[공지]"} {row.title}
                  </p>
                </div>
                <div className="ui-w-[20%]">
                  <p>{row.writer}</p>
                </div>
              </div>
              <hr className="ui-border-gray-100" />
            </>
          ))
        ) : (
          <>
            <h2 className="ui-text-xl ui-my-20">데이터가 없습니다.</h2>
          </>
        )}
      </div>
    </div>
  );
};
