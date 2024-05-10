import { IBoardBase, IBoardFormBase } from "./common";

export interface IHomeWorship extends IBoardBase {
  userId: string;
  userName: string;
}

export interface IHomeWorshipForm extends IBoardFormBase {
  userId: string;
}
