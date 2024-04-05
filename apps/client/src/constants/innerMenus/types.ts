export interface IInnerMenu {
  label: string;
  path: string;
}

export interface IPastorType {
  label: string;
  type: string;
}

export interface IHistoryEvent {
  date: string;
  description: string;
}

export interface IHistory {
  label: string;
  innerEvents: IHistoryEvent[];
}

export interface IWorshipService {
  label: string;
  time: string;
  place: string;
  worship: "주일" | "평일";
}
