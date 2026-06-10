import { api } from "@/lib/api";
import type { IMinister, StaffTabType } from "type";

export async function getStaffByTab(tabType: StaffTabType): Promise<IMinister[]> {
  const { data } = await api.get<{ content: IMinister[] }>("/leadership", {
    params: { tabType, size: 50 },
  });
  return data?.content ?? [];
}
