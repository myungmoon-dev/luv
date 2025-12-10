import { MissionLocation } from "type";

export const MISSION_LOCATION_MAP = {
  all: "전체",
  bangladesh: "방글라데시",
  bulgaria: "불가리아",
  uk: "영국",
  uganda: "우간다",
  indiaThailand: "인도/태국",
} as const satisfies Record<MissionLocation | "all", string>;

