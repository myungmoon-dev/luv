export interface INewCommersData {
  title: string;
  content?: { title: string; text: string }[];
  text?: string;
  caution?: string;
}

export type GENERATION_3040_TYPE =
  | "watchword"
  | "vision"
  | "purpose"
  | "program";

export interface I3040Data {
  id: GENERATION_3040_TYPE;
  data: any; // 데이터 타입을 정확하게 정의하기 위해 아래와 같은 세부 인터페이스를 사용
}
export interface I3040WatchwordData extends I3040Data {
  data: {
    watchwordEn: string;
    watchwordKr: string;
    verse: string;
  };
}
export interface I3040VisionData extends I3040Data {
  data: {
    img: string;
    text1: string;
    text2?: string;
    emphasis: string;
  };
}

export interface I3040PurposeData extends I3040Data {
  data: {
    img: string;
    purposes: string[];
  };
}

export interface I3040ProgramData extends I3040Data {
  data: {
    img: string;
    programs: I3040ProgramInfo[];
  };
}
export interface I3040ProgramInfo {
  title: string;
  informations: string[];
}
