import { getSermonVideo } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { type, count },
  } = req;
  const videoType = type as string;
  const videoCount = count as string;

  switch (method) {
    case "GET":
      // FIXME: 미구현
      const sermons = (await getSermonVideo({ videoType, videoCount: +videoCount })).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return res.status(200).json({
        sermons,
      });
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
