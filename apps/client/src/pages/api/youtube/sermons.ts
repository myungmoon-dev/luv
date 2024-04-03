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
      const snapshot = await getSermonVideo({ videoType, videoCount: +videoCount });

      const test = snapshot.docs.map((doc) => doc.data());
      console.log(test);

      return res.status(200).json({
        test,
      });
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
