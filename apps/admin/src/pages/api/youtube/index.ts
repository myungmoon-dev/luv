import { NextApiRequest, NextApiResponse } from "next";
import { getLiveLink, createLiveLink, getShorts, createShorts } from "firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const videoId = body.url as string;
  const videoType = body.videotype as string;

  // FIXME: return Value, videoType
  switch (method) {
    case "GET":
      switch (videoType) {
        case "SHORTS":
          const shortsSnapshot = await getShorts();
          const shorts = shortsSnapshot.docs.map((doc) => doc.data().videoId);

          return res.status(200).json({
            shorts,
          });
        case "LIVELINK":
          const livelinkSnapshot = await getLiveLink();
          const livelink = livelinkSnapshot.docs.map(
            (doc) => doc.data().videoId
          );

          return res.status(200).json({
            livelink,
          });
      }
    case "POST":
      switch (videoType) {
        case "SHORTS":
          await createShorts({ videoId });
          return res.status(200).json({
            success: true,
          });
        case "LIVELINK":
          await createLiveLink({ videoId });
          return res.status(200).json({
            success: true,
          });
      }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
