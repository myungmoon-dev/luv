import { IBoardBase, IBoardFormBase } from "./common";

interface ILink {
  isPlaylist: boolean;
  name: string;
}

export interface IBible extends IBoardBase {
  links: ILink[];
}

export interface IBibleForm extends IBoardFormBase {
  links: ILink[];
}
