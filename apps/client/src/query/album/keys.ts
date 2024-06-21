const albumKeys = {
  album: () => ["album"],
  all: () => [...albumKeys.album(), "all"],
  main: () => [...albumKeys.album(), "main"],
  infants: () => [...albumKeys.album(), "infants"],
  toddlers: () => [...albumKeys.album(), "toddlers"],
  elementary: () => [...albumKeys.album(), "elementary"],
  middle: () => [...albumKeys.album(), "middle"],
  high: () => [...albumKeys.album(), "high"],
  "2youth": () => [...albumKeys.album(), "2youth"],
  "1youth": () => [...albumKeys.album(), "1youth"],
  qt: () => [...albumKeys.album(), "qt"],
  panorama: () => [...albumKeys.album(), "panorama"],
  newFamilly: () => [...albumKeys.album(), "newFamilly"],
  newlyweds: () => [...albumKeys.album(), "newlyweds"],
  "3040": () => [...albumKeys.album(), "3040"],
};

export default albumKeys;
