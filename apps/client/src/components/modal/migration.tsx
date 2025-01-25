const MigrationModal = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl font-bold">홈페이지 점검 알림</p>
      <p>
        <b>2025년 1월 26일(주일) 오후 8시</b>부터 <b>2025년 1월 27일(월요일) 오전 3시</b>까지 홈페이지 접속이
        중단됩니다.
        <br />
        성도 여러분들의 양해 부탁드립니다.
      </p>
      <p>사유: DB 업데이트</p>
    </div>
  );
};

export default MigrationModal;
