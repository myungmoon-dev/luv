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

const database = getFirestore(firebase);

export interface IGetYoutubeListProps {
  videoType: YoutubeType;
  videoCount?: number;
}

export const getYoutube = async ({
  videoType,
  videoCount,
}: IGetYoutubeListProps) => {
  const orderByField =
    videoType === "shorts" || videoType === "live" ? "createdAt" : "date";
  const limitField = videoType === "shorts" || videoType === "live" ? 1 : 4;

  const getQuery = query(
    collection(database, collections.youtube(videoType)),
    orderBy(orderByField, "desc"),
    limit(videoCount ? videoCount : limitField)
  );

  const youtubeList = await getDocs(getQuery);

  return youtubeList;
};

export const createYoutube = async (youtubeForm: IYoutubeForm) => {
  if (youtubeForm.type === "live") {
    await addDoc(collection(database, youtubeForm.type), {
      videoId: youtubeForm.url,
      title: youtubeForm.title ?? "",
      preacher: youtubeForm.preacher ?? "",
      mainText: youtubeForm.mainText ?? "",
      date: youtubeForm.date ?? "",
      createdAt: Date.now(),
    });
  }

  // date가 있는 경우: main, afternoon, youth, wednesday, firday, video
  if (youtubeForm.date) {
    await addDoc(collection(database, "youtube", "sermon", youtubeForm.type), {
      videoId: youtubeForm.url,
      title: youtubeForm.title ?? "",
      preacher: youtubeForm.preacher ?? "",
      mainText: youtubeForm.mainText ?? "",
      date: youtubeForm.date,
      createdAt: Date.now(),
    });
  }

  // shorts의 경우
  else {
    await addDoc(collection(database, youtubeForm.type), {
      videoId: youtubeForm.url,
      createdAt: Date.now(),
    });
  }
};
