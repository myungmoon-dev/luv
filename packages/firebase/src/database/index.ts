import { getFirestore } from "firebase/firestore";
import { firebase } from "../../firebase";
import { getYoutube, createYoutube } from "./youtube";
import { getBulletins, postBulletin } from "./bulletin";
import { getBible, getBibles, postBible } from "./discipleship";
import { getHomeWorship, getHomeWorships, postHomeWorship, deleteHomeWorship } from "./homeWorship";
import { getMission, getMissions, postMission, deleteMission } from "./news";
import { postUser, getUser } from "./user";
import { YoutubeType } from "type";

const database = getFirestore(firebase);

const collections = {
  bulletin: "bulletin",
  youtube: (videoType: YoutubeType) =>
    videoType === "shorts" || videoType === "live" ? videoType : `youtube/sermon/${videoType}`,
  bible: "bible",
  user: "user",
  homeWorship: "homeWorship",
  mission: "mission",
};

export {
  database,
  collections,
  getYoutube,
  createYoutube,
  getBulletins,
  postBulletin,
  getBibles,
  getBible,
  postBible,
  postUser,
  getHomeWorship,
  getHomeWorships,
  postHomeWorship,
  getUser,
  deleteHomeWorship,
  getMission,
  getMissions,
  postMission,
  deleteMission,
};
