import type { AlbumType, IGetAlbumListResponse } from "type";

import { api } from "@/lib/api";

export async function getAlbumList(params: {
  type: AlbumType;
  page: number;
  size: number;
}): Promise<IGetAlbumListResponse> {
  const { data } = await api.get<IGetAlbumListResponse>("/albums", {
    params,
  });
  return data;
}
