import { YoutubeType } from "type";

const youtubeKeys = {
  all: ["youtube"],
  list: (videoType: YoutubeType) => [...youtubeKeys.all, "list", videoType],
};
export default youtubeKeys;
