// eslint-disable-next-line @typescript-eslint/no-explicit-any
const albumKeys: Record<string, (...args: any[]) => unknown[]> = {
  album: () => ["album"],
  all: () => ["album", "all"],
  detail: (id?: string | number) => ["album", "detail", id],
  main: (page?: number) => ["album", "main", page],
  infants: (page?: number) => ["album", "infants", page],
  toddlers: (page?: number) => ["album", "toddlers", page],
  children: (page?: number) => ["album", "children", page],
  teens: (page?: number) => ["album", "teens", page],
  youth: (page?: number) => ["album", "youth", page],
  bridge: (page?: number) => ["album", "bridge", page],
  qt: (page?: number) => ["album", "qt", page],
  panorama: (page?: number) => ["album", "panorama", page],
  newFamily: (page?: number) => ["album", "newFamily", page],
  newlyweds: (page?: number) => ["album", "newlyweds", page],
  "3040": (page?: number) => ["album", "3040", page],
};

export default albumKeys;
