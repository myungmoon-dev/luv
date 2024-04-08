import { IBoardBase, IBoardFormBase } from "./common";

export interface IBible extends IBoardBase {
  links: string[];
}

export interface IBibleForm extends IBoardFormBase {
  links: string[];
}
