// TODO: 원하는 날짜형식 기능 넣기

const getDateFormat = (text: string) => {
  const regex = /(\d{4})-(\d{2})-(\d{2})/g;
  const date = text.match(regex);

  if (date) {
    // 각각의 날짜에 대해 MM월 DD일 형식으로 변경
    date.forEach((date) => {
      const [year, month, day] = date.split("-");
      const monthNames = ["", "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

      const newDate = `${parseInt(monthNames[parseInt(month)])}월 ${parseInt(day)}일`;
      text = text.replace(date, newDate);
    });
  }
  return text;
};

export default getDateFormat;
