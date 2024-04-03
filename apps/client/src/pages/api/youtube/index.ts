import { getYoutubeList } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { YoutubeType } from "type";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { type },
  } = req;

  const videoType = type as YoutubeType;

  switch (method) {
    case "GET":
      const youtubeList = (await getYoutubeList({ videoType })).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return res.status(200).json({
        youtubeList,
      });
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
