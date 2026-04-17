import type { MissionLocation } from "type";

export const MISSION_LOCATION_MAP: Record<MissionLocation | "all", string> = {
  all: "전체",
  bangladesh: "방글라데시",
  bulgaria: "불가리아",
  uk: "영국",
  uganda: "우간다",
  indiaThailand: "인도/태국",
};

export const MISSION_LOCATION_FILTERS: { value: MissionLocation | "all"; label: string }[] = [
  { value: "all", label: MISSION_LOCATION_MAP.all },
  { value: "bangladesh", label: MISSION_LOCATION_MAP.bangladesh },
  { value: "bulgaria", label: MISSION_LOCATION_MAP.bulgaria },
  { value: "uk", label: MISSION_LOCATION_MAP.uk },
  { value: "uganda", label: MISSION_LOCATION_MAP.uganda },
  { value: "indiaThailand", label: MISSION_LOCATION_MAP.indiaThailand },
];
