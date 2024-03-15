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

// TODO: 유튜브 아이디 추출함수 추가해야 함
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
