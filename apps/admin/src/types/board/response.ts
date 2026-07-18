import { IBoard } from "type";
import { PageResponse } from "../common";

export type IGetBoardListResponse = PageResponse<IBoard>;

export interface IGetBoardResponse extends IBoard {}
