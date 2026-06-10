export type StaffTabType = "retiredPastor" | "minister" | "elder" | "missionary" | "staff" | "retiredElder";

export interface IMinister {
  id: string;
  name: string;
  imageUrl: string;
  position?: string;
  officerType: string;
  tabType: StaffTabType;
  greeting?: string;
  description?: string;
  order?: number;
  createdAt?: number;
}
