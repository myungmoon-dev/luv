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
}

const database = getFirestore(firebase);

export const getSermonVideo = async ({ videoType }: IGetYoutubeProps) => {
  const getQuery =
    videoType === "shorts" || videoType === "live"
      ? query(
          collection(database, videoType),
          orderBy("createdAt", "desc"),
          limit(1)
        )
      : query(
          collection(database, "youtube", "sermon", videoType),
          orderBy("date", "desc"),
          limit(1)
        );

  const youtubeLink = await getDocs(getQuery);
  return youtubeLink;
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
