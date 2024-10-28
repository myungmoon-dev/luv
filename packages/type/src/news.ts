import { IBoardBase, IBoardFormBase } from "./common";

export interface IMissionNews extends IBoardBase {
  writer: string;
  image: string;
}

export interface IMissionNewsForm extends IBoardFormBase {
  image: string;
  writer: string;
  createdAt: number;
}
