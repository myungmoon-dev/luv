export interface IDiscipleshipTabData {
  title: string;
  content?: { title: string; text: string }[];
  text?: string;
  caution?: string;
}

export type NewlywedsType = "introduce" | "images" | "guide" | "curriculum";

export interface INewlywedsData {
  id: NewlywedsType;
  data: any;
}

export interface INewlywedsIntroData extends INewlywedsData {
  data: {
    text: string;
  };
}

export interface INewlywedsImageData extends INewlywedsData {
  data: {
    imgs: string[];
  };
}

export interface INewlywedsGuideData extends INewlywedsData {
  data: {
    target: { title: string; description: string };
    time: { title: string; description: string };
    place: { title: string; description: string };
    manager: { name: string; number: string };
  };
}

export interface INewlywedsCurriculumData extends INewlywedsData {
  data: {
    firstHalf: { title: string; content: string[] };
    secondHalf: { title: string; content: string[] };
  };
}
