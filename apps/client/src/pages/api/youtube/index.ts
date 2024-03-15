import { getYoutubeLink } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { type },
  } = req;
  const videoType = type as string;

  switch (method) {
    case "GET":
      const snapshot = await getYoutubeLink({ videoType });
      const youtubeLink = snapshot.docs.map((doc) => doc.data().videoId);

      return res.status(200).json({
        youtubeLink,
      });
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
