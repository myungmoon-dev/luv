import { IBoardFormBase } from "./common";

interface ILink {
  playlist: boolean;
  url: string;
}

export interface IBible {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  date: string;
  links: ILink[];
}

export interface IBibleForm extends IBoardFormBase {
  links: ILink[];
}
