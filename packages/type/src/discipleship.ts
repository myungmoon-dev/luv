export interface INewCommersData {
  title: string;
  content?: { title: string; text: string }[];
  text?: string;
  caution?: string;
}

export type PanoramaDataType = "outline" | "target" | "date" | "place";

export interface IPanoramaData {
  id: PanoramaDataType;
  title: string;
  description?: string;
  oldPanorama?: string;
  newPanorama?: string;
  img?: string;
}

export interface IPanoramaDetailedData extends IPanoramaData {
  description: string;
}

export interface IPanoramaTargetData extends IPanoramaData {
  oldPanorama: string;
  newPanorama: string;
  img: string;
}
