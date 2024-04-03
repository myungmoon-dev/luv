import {
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  limit,
  getFirestore,
} from "firebase/firestore";
import { firebase } from "../../firebase";
import { IYoutubeForm } from "type";

export interface IGetYoutubeProps {
  videoType: string;
  videoCount?: number;
}

const database = getFirestore(firebase);

export const getSermonVideo = async ({
  videoType,
  videoCount,
}: IGetYoutubeProps) => {
  const getQuery =
    videoType === "shorts" || videoType === "live"
      ? query(
          collection(database, videoType),
          orderBy("createdAt", "desc"),
          limit(videoCount ? videoCount : 1)
        )
      : query(
          collection(database, "youtube", "sermon", videoType),
          orderBy("date", "desc"),
          limit(videoCount ? videoCount : 1)
        );

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const createSermonVideo = async (youtubeForm: IYoutubeForm) => {
  // date가 있는 경우: main, afternoon, youth, wednesday, firday
  if (youtubeForm.date) {
    await addDoc(collection(database, "youtube", "sermon", youtubeForm.type), {
      videoId: youtubeForm.url,
      title: youtubeForm.title,
      preacher: youtubeForm.preacher,
      mainText: youtubeForm.mainText,
      date: youtubeForm.date,
      createdAt: Date.now(),
    });
  }
  // shorts, live의 경우
  else {
    await addDoc(collection(database, youtubeForm.type), {
      videoId: youtubeForm.url,
      createdAt: Date.now(),
    });
  }
};
