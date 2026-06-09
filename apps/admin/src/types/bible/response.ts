import { IBible } from "type";
import { PageResponse } from "../common";

export type IGetBiblesResponse = PageResponse<IBible>;

export interface IGetBibleResponse extends IBible {}
