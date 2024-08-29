import { IBoardFormBase } from "./common";

export interface IBook {
  id: string;
  title: string;
  date: string;
  createdAt: number;
  image: string;
  content: string;
  writer: string;
}

export interface IBookForm extends IBoardFormBase {
  image: IBook["image"];
  createdAt: number;
}
