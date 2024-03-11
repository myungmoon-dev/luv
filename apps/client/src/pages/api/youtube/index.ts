import { NextApiRequest, NextApiResponse } from "next";
import { getLiveLink } from "firebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      const result = await getLiveLink();
      const videoSrc = result.docs.map((doc) => doc.data().videoId);

      return res.status(200).json({
        livelink: videoSrc,
      });
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
