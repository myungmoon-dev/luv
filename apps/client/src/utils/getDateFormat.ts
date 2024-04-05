interface IDateFormatProps {
  format: DateFormat;
  date: string; // "YYYY-MM-DD"
}

type DateFormat = "YYYY년 MM월 DD일" | "MM월 DD일";

const getDateFormat = ({ date, format }: IDateFormatProps) => {
  const [year, month, day, _] = date.split("-");

  switch (format) {
    case "YYYY년 MM월 DD일":
      return `${year}년 ${month}월 ${day}일`;
    case "MM월 DD일":
      return `${month}월 ${day}일`;
  }
};

export default getDateFormat;
