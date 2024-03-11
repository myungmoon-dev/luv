import { NextApiRequest, NextApiResponse } from "next";
import { getLiveLink } from "firebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      const snapshot = await getLiveLink();
      const livelink = snapshot.docs.map((doc) => doc.data().videoId);

      return res.status(200).json({
        livelink,
      });
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
