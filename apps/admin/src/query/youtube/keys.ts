const youtubeKeys = {
  all: ["youtubeLinks"],
  shorts: () => [...youtubeKeys.all, "shorts"],
  live: () => [...youtubeKeys.all, "live"],
  main: () => [...youtubeKeys.all, "main"],
  youth: () => [...youtubeKeys.all, "youth"],
  afternoon: () => [...youtubeKeys.all, "afternoon"],
  firday: () => [...youtubeKeys.all, "firday"],
  wednesday: () => [...youtubeKeys.all, "wednesday"],
  video: () => [...youtubeKeys.all, "video"],
};

export default youtubeKeys;
