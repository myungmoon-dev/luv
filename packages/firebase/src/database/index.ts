import { getFirestore } from "firebase/firestore";
import { firebase } from "../../firebase";
import { getSermonVideo, createSermonVideo, getYoutubeList } from "./video";
import { getBulletins, postBulletin } from "./bulletin";

const database = getFirestore(firebase);

const collections = {
  bulletin: "bulletin",
};

export {
  database,
  collections,
  getSermonVideo,
  getYoutubeList,
  createSermonVideo,
  getBulletins,
  postBulletin,
};
