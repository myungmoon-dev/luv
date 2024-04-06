import { getFirestore } from "firebase/firestore";
import { firebase } from "../../firebase";
import { getYoutube, createYoutube } from "./youtube";
import { getBulletins, postBulletin } from "./bulletin";
import { getBible, getBibles, postBible } from "./discipleship";
import { YoutubeType } from "type";

const database = getFirestore(firebase);

const collections = {
  bulletin: "bulletin",
  youtube: (videoType: YoutubeType) =>
    videoType === "shorts" || videoType === "live" ? videoType : `youtube/sermon/${videoType}`,
  bible: "bible",
};

export { database, collections, getYoutube, createYoutube, getBulletins, postBulletin, getBibles, getBible, postBible };
