import { createYoutube, getYoutube } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { YoutubeType } from "type";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { type },
    body: { url, date, mainText, title, preacher, type: formType },
  } = req;

  // FIXME: 관리자페이지는 일단 youtube 1개만 가져옴
  switch (method) {
    case "GET":
      const videoType = type as YoutubeType;
      const youtubeList = (await getYoutube({ videoType, videoCount: 1 })).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return res.status(200).json({
        youtubeList,
      });
    case "POST":
      await createYoutube({
        url,
        mainText,
        title,
        preacher,
        date,
        type: formType,
      });

      return res.status(200).json({
        result: "success",
      });
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
