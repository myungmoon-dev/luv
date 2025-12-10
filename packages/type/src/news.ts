import { IBoardFormBase } from "./common";

export type MissionLocation = "bangladesh" | "bulgaria" | "uk" | "uganda" | "indiaThailand";

export interface IMissionNews {
  _id: string;
  title: string;
  content: string;
  userName: string;
  date: string;
  location: MissionLocation;
  createdAt: number;
  updatedAt: number;
  imageUrls: string[];
}

export interface IMissionNewsForm {
  title: string;
  content: string;
  userName: string;
  date: string;
  location: MissionLocation;
}
