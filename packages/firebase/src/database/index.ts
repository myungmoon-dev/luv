import { getFirestore } from "firebase/firestore";
import { firebase } from "../../firebase";
import { getYoutube, createYoutube } from "./youtube";
import { getBulletins, postBulletin } from "./bulletin";
import { YoutubeType } from "type";

const database = getFirestore(firebase);

const collections = {
  bulletin: "bulletin",
  youtube: (videoType: YoutubeType) =>
    videoType === "shorts" || videoType === "live"
      ? videoType
      : `youtube/sermon/${videoType}`,
};

export {
  database,
  collections,
  getYoutube,
  createYoutube,
  getBulletins,
  postBulletin,
};
