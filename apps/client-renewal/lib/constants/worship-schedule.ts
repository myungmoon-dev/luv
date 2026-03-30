export type WorshipCategory = "주일" | "평일" | "다음세대";

export type WorshipServiceRow = {
  label: string;
  time: string;
  place: string;
  worship: WorshipCategory;
};

/** `apps/client` `ServiceWorshipSchedule`와 동일 */
export const worshipSchedule: WorshipServiceRow[] = [
  { label: "1부\n경건예배", time: "오전 7시30분", place: "독산동 비전채플 3층", worship: "주일" },
  { label: "2부 예배", time: "오전 9시", place: "서울여상 사랑채플 강당", worship: "주일" },
  { label: "3부 예배", time: "오전 11시30분", place: "서울여상 사랑채플 강당", worship: "주일" },
  { label: "4부\n청년예배", time: "오후 2시", place: "독산동 비전채플 3층", worship: "주일" },
  { label: "오후\n찬양예배", time: "오후 2시", place: "서울여상 사랑채플 강당", worship: "주일" },
  { label: "새벽예배", time: "오전 5시", place: "독산동 비전채플 3층", worship: "평일" },
  { label: "수요 예배(오전)", time: "오전 10시30분", place: "독산동 비전채플 3층", worship: "평일" },
  { label: "수요 예배(오후)", time: "오후 7시30분", place: "독산동 비전채플 3층", worship: "평일" },
  { label: "미스바\n금요기도회", time: "오후 8시30분", place: "독산동 비전채플 3층", worship: "평일" },
  { label: "영아부", time: "오전 11시30분", place: "서울여상 사랑채플 2층 체조실", worship: "다음세대" },
  { label: "유치부", time: "오전 11시30분", place: "서울여상 사랑채플 1층 창작나눔실", worship: "다음세대" },
  { label: "유초등부", time: "오전 11시30분", place: "서울여상 사랑채플 2층 무용실", worship: "다음세대" },
  { label: "중고등부", time: "오전 9시30분", place: "독산동 비전채플 3층", worship: "다음세대" },
  { label: "청년부", time: "오후 2시", place: "독산동 비전채플 3층", worship: "다음세대" },
];
