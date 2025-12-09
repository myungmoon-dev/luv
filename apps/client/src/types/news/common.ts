export type CongregationNewsType =
  | "marriage"
  | "birth"
  | "funeral"
  | "opening"
  | "hospitalization"
  | "sundayManna"
  | "iceCream";

export interface ICongregationNews {
  _id?: string;
  type: CongregationNewsType;
  description: string;
  createdAt: number;
  updatedAt: number;
}

export interface IResource {
  id: string;
  createdAt: number;
  updatedAt: number;
  title: string;
}
