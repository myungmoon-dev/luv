import { getFirestore } from "firebase/firestore";
import { firebase } from "../../firebase";

import { createLiveLink, getLiveLink, createShorts, getShorts } from "./video";

import { getBulletins } from "./bulletin";

const database = getFirestore(firebase);

const collections = {
  bulletin: "bulletin",
};

export {
  database,
  collections,
  createLiveLink,
  createShorts,
  getShorts,
  getBulletins,
  getLiveLink,
};
