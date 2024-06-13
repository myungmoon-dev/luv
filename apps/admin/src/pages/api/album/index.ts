import { getAlbum } from "firebase/src/database";
import { NextApiRequest, NextApiResponse } from "next";
import { AlbumType } from "type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { type },
    body: { url, date, mainText, title, preacher, type: formType },
  } = req;

  switch (method) {
    case "GET":
      const albumType = type as AlbumType;

      const albumList = (await getAlbum({ albumType })).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return res.status(200).json({
        albumList,
      });

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
