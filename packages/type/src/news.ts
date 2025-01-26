import { IBoardFormBase } from "./common";

export interface IMissionNews {
  _id: string;
  title: string;
  content: string;
  userName: string;
  date: string;
  createdAt: number;
  updatedAt: number;
  imageUrls: string[];
}

export interface IMissionNewsForm {
  title: string;
  content: string;
  userName: string;
  date: string;
}
