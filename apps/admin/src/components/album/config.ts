import { AlbumType } from "type";

export const ALBUM_TYPE_OPTIONS: { label: string; value: AlbumType | "all" }[] = [
  {
    label: "전체",
    value: "all",
  },
  {
    label: "명문앨범",
    value: "main",
  },
  {
    label: "영아부",
    value: "infants",
  },
  {
    label: "유치부",
    value: "toddlers",
  },
  {
    label: "유초등부",
    value: "children",
  },
  {
    label: "중고등부",
    value: "teens",
  },
  {
    label: "청년부",
    value: "youth",
  },
  {
    label: "브릿지",
    value: "bridge",
  },
  {
    label: "큐티세미나",
    value: "qt",
  },
  {
    label: "성경파노라마",
    value: "panorama",
  },
  {
    label: "새신자",
    value: "newFamily",
  },

  {
    label: "신혼가정",
    value: "newlyweds",
  },
  {
    label: "3040세대",
    value: "3040",
  },
];
