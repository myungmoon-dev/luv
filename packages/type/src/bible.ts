import { IBoardFormBase } from "./common";

interface ILink {
  isPlaylist: boolean;
  name: string;
}

export interface IBible {
  _id: string;
  title: string;
  content: string;
  createdAt: number;
  date: string;
  links: ILink[];
}

export interface IBibleForm extends IBoardFormBase {
  links: ILink[];
}
