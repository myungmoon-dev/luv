import { YoutubeType } from "type";

const youtubeKeys = {
  all: ["youtube"],
  list: (videoType: YoutubeType) => [...youtubeKeys.all, "list", videoType],
  one: (videoId: string) => [...youtubeKeys.all, "one", videoId],
};

export default youtubeKeys;
