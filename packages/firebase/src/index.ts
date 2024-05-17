import { onAuthStateChanged } from "firebase/auth";

import { auth, postLogin, postSignup } from "./auth";
import { postBulletinImage } from "./storage";

import {
  createYoutube,
  getBible,
  getBibles,
  getBulletins,
  getHomeWorship,
  getHomeWorships,
  getUser,
  getYoutube,
  postBible,
  postBulletin,
  postHomeWorship,
  postUser,
  deleteHomeWorship,
} from "./database";

export {
  auth,
  createYoutube,
  getBible,
  getBibles,
  getBulletins,
  getHomeWorship,
  getHomeWorships,
  getUser,
  getYoutube,
  onAuthStateChanged,
  postBible,
  postBulletin,
  postBulletinImage,
  postHomeWorship,
  postLogin,
  postSignup,
  postUser,
  deleteHomeWorship,
};
