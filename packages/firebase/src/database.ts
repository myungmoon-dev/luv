// Database - FireStore

import {
  getFirestore,
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  limit,
} from "firebase/firestore";
import { firebase } from "../firebase";

export interface IGetYoutubeProps {
  videoType: string;
}
interface IPostYoutubeProps extends IGetYoutubeProps {
  videoId: string;
}

const database = getFirestore(firebase);

export const getYoutubeLink = async ({ videoType }: IGetYoutubeProps) => {
  const getQuery = query(
    collection(database, videoType),
    orderBy("createdAt", "desc"),
    limit(1)
  );

  const youtubeLink = await getDocs(getQuery);
  return youtubeLink;
};

export const createYoutubeLink = async ({
  videoId,
  videoType,
}: IPostYoutubeProps) => {
  await addDoc(collection(database, videoType), {
    videoId,
    createdAt: Date.now(),
  });
};
