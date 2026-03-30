export type OfficerLabel =
  | "retired"
  | "senior"
  | "associate"
  | "cooperativePastor"
  | "evangelist"
  | "missionary"
  | "elder"
  | "retiredElder"
  | "otherElder"
  | "deacon"
  | "manager"
  | "staff";

export const officerTypeMap: Record<OfficerLabel, string> = {
  retired: "원로목사",
  senior: "담임목사",
  associate: "목사",
  cooperativePastor: "협동목사",
  evangelist: "전도사",
  missionary: "선교사",
  elder: "장로",
  retiredElder: "원로장로",
  otherElder: "협동장로",
  deacon: "집사",
  staff: "간사",
  manager: "관리장",
};
