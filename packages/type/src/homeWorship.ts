import { IBoardBase, IBoardFormBase } from "./common";

export interface IHomeWorship extends IBoardBase {
  userId: string;
  userName: string;
  image: string;
}

export interface IHomeWorshipForm extends IBoardFormBase {
  image: FileList;
  userId: string;
  userName: string;
}
