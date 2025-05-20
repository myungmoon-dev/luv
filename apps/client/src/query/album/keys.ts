const albumKeys = {
  album: () => ["album"],
  all: (page: number, size: number) => [...albumKeys.album(), "all", page, size],
  main: (page: number, size: number) => [...albumKeys.album(), "main", page, size],
  infants: (page: number, size: number) => [...albumKeys.album(), "infants", page, size],
  toddlers: (page: number, size: number) => [...albumKeys.album(), "toddlers", page, size],
  elementary: (page: number, size: number) => [...albumKeys.album(), "elementary", page, size],
  middle: (page: number, size: number) => [...albumKeys.album(), "middle", page, size],
  high: (page: number, size: number) => [...albumKeys.album(), "high", page, size],
  "2youth": (page: number, size: number) => [...albumKeys.album(), "2youth", page, size],
  "1youth": (page: number, size: number) => [...albumKeys.album(), "1youth", page, size],
  qt: (page: number, size: number) => [...albumKeys.album(), "qt", page, size],
  panorama: (page: number, size: number) => [...albumKeys.album(), "panorama", page, size],
  newFamilly: (page: number, size: number) => [...albumKeys.album(), "newFamilly", page, size],
  newlyweds: (page: number, size: number) => [...albumKeys.album(), "newlyweds", page, size],
  "3040": (page: number, size: number) => [...albumKeys.album(), "3040", page, size],
  detail: (id: string) => [...albumKeys.album(), "detail", id],
};

export default albumKeys;
