import { MissionLocation } from "type";

export const MISSION_LOCATION_MAP = {
  bangladesh: "방글라데시",
  bulgaria: "불가리아",
  uk: "영국",
  uganda: "우간다",
  indiaThailand: "인도/태국",
} as const satisfies Record<MissionLocation, string>;

export const MISSION_LOCATION_OPTIONS = Object.entries(MISSION_LOCATION_MAP).map(([value, label]) => ({
  value: value as MissionLocation,
  label,
}));

