import { getFirestore } from "firebase/firestore";
import { firebase } from "../../firebase";

import { createYoutubeLink, getYoutubeLink } from "./video";

import { getBulletins } from "./bulletin";

const database = getFirestore(firebase);

const collections = {
  bulletin: "bulletin",
};

export {
  database,
  collections,
  createYoutubeLink,
  getYoutubeLink,
  getBulletins,
};
