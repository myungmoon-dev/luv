const youtubeKeys = {
  all: ["youtubeLinks"],
  youtube: () => [...youtubeKeys.all, "youtube"],
  shorts: () => [...youtubeKeys.all, "shorts"],
  live: () => [...youtubeKeys.all, "live"],
};

export default youtubeKeys;
