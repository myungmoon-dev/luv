import { IBoardBase, IBoardFormBase } from "./common";

export interface IHomeWorship extends IBoardBase {
  userId: string;
  userName: string;
  image: string;
  isPinned: boolean;
}

export interface IHomeWorshipForm extends IBoardFormBase {
  image: FileList;
  userName: string;
  password: string;
  isPinned: boolean;
}
