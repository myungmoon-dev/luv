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
import { IYoutubeForm, YoutubeType } from "type";
import { collections } from ".";

export interface IGetYoutubeProps {
  videoType: YoutubeType;
  videoCount?: number;
}

const database = getFirestore(firebase);

export const getYoutube = async ({
  videoType,
  videoCount = videoType === "shorts" || videoType === "live" ? 1 : 4,
}: IGetYoutubeProps) => {
  const orderByField =
    videoType === "shorts" || videoType === "live" ? "createdAt" : "date";

  const getQuery = query(
    collection(database, collections.youtube(videoType)),
    orderBy(orderByField, "desc"),
    limit(videoCount)
  );

  const youtubeList = await getDocs(getQuery);

  return youtubeList;
};

export const createYoutube = async (youtubeForm: IYoutubeForm) => {
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
