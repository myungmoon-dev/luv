import { firebase } from "../firebase";
import {
  StorageReference,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

export const storage = getStorage(firebase);

export const postFile = async ({
  file,
  storageRef,
}: {
  file: File | Buffer;
  storageRef: StorageReference;
}) => {
  const fileUploadResult = await uploadBytes(storageRef, file);
  return fileUploadResult;
};

export const postBulletinImage = async ({
  file,
  name,
}: {
  file: Buffer;
  name: string;
}) => {
  const bulletinImageRef = ref(storage, `/bulletins/${name}`);
  const imageResult = await postFile({ file, storageRef: bulletinImageRef });

  const imageUrl = await getDownloadURL(imageResult.ref);

  return imageUrl;
};
