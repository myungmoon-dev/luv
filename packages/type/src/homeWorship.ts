import { IBoardBase, IBoardFormBase } from "./common";
import { IComment } from "./comment";

export interface IHomeWorship extends IBoardBase {
  userId: string;
  userName: string;
  image: string;
  video: string;
  isPinned: boolean;
  comments: IComment[];
}

export interface IHomeWorshipForm extends IBoardFormBase {
  video: FileList;
  image: FileList;
  userName: string;
  password: string;
  isPinned: boolean;
}
