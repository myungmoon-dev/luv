import { NextApiRequest, NextApiResponse } from "next";
import { getLiveLink, createLiveLink } from "firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const videoId = body.url as string;

  switch (method) {
    case "GET":
      const result = await getLiveLink();
      const videoSrc = result.docs.map((doc) => doc.data().videoId);

      return res.status(200).json({
        livelink: videoSrc,
      });
    case "POST":
      await createLiveLink({ videoId });
      return res.status(200).json({
        success: true,
      });
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
