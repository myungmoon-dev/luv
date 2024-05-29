import { IBoardBase, IBoardFormBase } from "./common";

export interface IMission extends IBoardBase {
  userId: string;
  userName: string;
  image: string;
}

export interface IMissionForm extends IBoardFormBase {
  image: FileList;
  userId: string;
  userName: string;
}
