import { getFirestore } from "firebase/firestore";
import { firebase } from "../../firebase";
import { getYoutube, createYoutube } from "./youtube";
import { getBible, getBibles, postBible, deleteBible } from "./discipleship";
import { getBulletins, postBulletin, getBulletin, deleteBulletin } from "./bulletin";
import {
  getHomeWorship,
  getHomeWorships,
  postHomeWorship,
  deleteHomeWorship,
  getPinnedHomeWorships,
  postHomeWorshipComment,
  deleteHomeWorshipComment,
  putHomeWorship,
  getHomeWorshipsCount,
  getPinnedHomeWorshipsCount,
} from "./homeWorship";
import { getMission, getMissions, postMission, deleteMission } from "./news";
import { postUser, getUser } from "./user";
import { getAlbum, postAlbum, deleteAlbum } from "./album";
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
  album: "album",
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
  getPinnedHomeWorships,
  postHomeWorshipComment,
  deleteHomeWorshipComment,
  putHomeWorship,
  getAlbum,
  postAlbum,
  deleteAlbum,
  deleteBible,
  getBulletin,
  deleteBulletin,
  getHomeWorshipsCount,
  getPinnedHomeWorshipsCount,
};
