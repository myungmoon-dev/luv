import { createSermonVideo, getSermonVideo } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

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
      const videoType = type as string;
      const youtubeLink = (await getSermonVideo({ videoType })).docs.map(
        (doc) => doc.data().videoId
      );

      return res.status(200).json({
        youtubeLink,
      });
    case "POST":
      await createSermonVideo({
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
