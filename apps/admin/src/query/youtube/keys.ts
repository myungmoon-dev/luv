const youtubeKeys = {
  all: ["youtubeLinks"],
  shorts: (page?: number) => [...youtubeKeys.all, "shorts", page],
  live: (page?: number) => [...youtubeKeys.all, "live", page],
  main: (page?: number) => [...youtubeKeys.all, "main", page],
  youth: (page?: number) => [...youtubeKeys.all, "youth", page],
  afternoon: (page?: number) => [...youtubeKeys.all, "afternoon", page],
  firday: (page?: number) => [...youtubeKeys.all, "firday", page],
  wednesday: (page?: number) => [...youtubeKeys.all, "wednesday", page],
  video: (page?: number) => [...youtubeKeys.all, "video", page],
};

export default youtubeKeys;
