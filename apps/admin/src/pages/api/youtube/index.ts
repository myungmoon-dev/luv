import { NextApiRequest, NextApiResponse } from "next";
import { createYoutubeLink, getYoutubeLink } from "firebase/src/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id, type },
  } = req;
  const videoId = id as string;
  const videoType = type as string;

  switch (method) {
    case "GET":
      const youtubeLink = (await getYoutubeLink({ videoType })).docs.map(
        (doc) => doc.data().videoId
      );

      return res.status(200).json({
        youtubeLink,
      });
    case "POST":
      await createYoutubeLink({ videoId, videoType });

      return res.status(200).json({
        result: "success",
      });
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
