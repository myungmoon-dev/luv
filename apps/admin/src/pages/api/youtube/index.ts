import { NextApiRequest, NextApiResponse } from "next";
import { createYoutubeLink, getYoutubeLink } from "firebase/src/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { vid },
    query: { type },
  } = req;
  const videoId = vid as string;
  const videoType = type as string;

  switch (method) {
    case "GET":
      const snapshot = await getYoutubeLink({ videoType });
      const youtubeLink = snapshot.docs.map((doc) => doc.data().videoId);

      return res.status(200).json({
        youtubeLink,
      });
    case "POST":
      await createYoutubeLink({ videoId, videoType });
      return res.status(200).json({
        success: true,
      });
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
