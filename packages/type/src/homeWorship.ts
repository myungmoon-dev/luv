import { IBoardFormBase } from "./common";

export interface IHomeworshipComment {
  _id: string;
  userName: string;
  password: string;
  content: string;
  createdAt: number;
}

export interface IHomeWorship {
  _id: string;
  date: string;
  title: string;
  content: string;
  createdAt: number;
  imageUrls: string[];
  userName: string;
  password: string;
  isPinned: boolean;
  updatedAt: number;
  comments: IHomeworshipComment[];
}

export interface IHomeWorshipForm extends IBoardFormBase {
  image: FileList;
  userName: string;
  password: string;
  isPinned: boolean;
}
