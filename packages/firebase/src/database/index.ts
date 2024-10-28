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
import { postUser, getUser } from "./user";
import { getAlbum, postAlbum, deleteAlbum } from "./album";
import { YoutubeType } from "type";
import { getBooks, postBook, getBooksCount, getBook, deleteBook, putBook } from "./books";
import {
  deleteMissionNews,
  getMissionNews,
  getMissionNewsList,
  postMissionNews,
  putMissionNews,
  getMissionNewsListCount,
} from "./missionNews";

const database = getFirestore(firebase);

const collections = {
  bulletin: "bulletin",
  youtube: (videoType: YoutubeType) =>
    videoType === "shorts" || videoType === "live" ? videoType : `youtube/sermon/${videoType}`,
  bible: "bible",
  user: "user",
  homeWorship: "homeWorship",
  album: "album",
  books: "books",
  missionNews: "missionNews",
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
  getBooks,
  postBook,
  getBooksCount,
  getBook,
  deleteBook,
  putBook,
  deleteMissionNews,
  getMissionNews,
  getMissionNewsList,
  postMissionNews,
  putMissionNews,
  getMissionNewsListCount,
};
