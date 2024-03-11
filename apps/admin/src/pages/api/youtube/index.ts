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
      const snapshot = await getLiveLink();
      const livelink = snapshot.docs.map((doc) => doc.data().videoId);

      return res.status(200).json({
        livelink,
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
