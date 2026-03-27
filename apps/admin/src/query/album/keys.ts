const albumKeys: Record<string, (page?: number) => unknown[]> = {
  album: () => ["album"],
  all: () => ["album", "all"],
  main: (page?: number) => ["album", "main", page],
  infants: (page?: number) => ["album", "infants", page],
  toddlers: (page?: number) => ["album", "toddlers", page],
  elementary: (page?: number) => ["album", "elementary", page],
  middle: (page?: number) => ["album", "middle", page],
  high: (page?: number) => ["album", "high", page],
  "2youth": (page?: number) => ["album", "2youth", page],
  "1youth": (page?: number) => ["album", "1youth", page],
  qt: (page?: number) => ["album", "qt", page],
  panorama: (page?: number) => ["album", "panorama", page],
  newFamilly: (page?: number) => ["album", "newFamilly", page],
  newlyweds: (page?: number) => ["album", "newlyweds", page],
  "3040": (page?: number) => ["album", "3040", page],
};

export default albumKeys;
