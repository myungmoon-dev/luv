import { NextApiRequest, NextApiResponse } from "next";
import { getShorts, createShorts } from "firebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const videoId = body.url as string;

  switch (method) {
    case "GET":
      const snapshot = await getShorts();
      const shorts = snapshot.docs.map((doc) => doc.data().videoId);

      return res.status(200).json({
        shorts,
      });
    case "POST":
      await createShorts({ videoId });
      return res.status(200).json({
        success: true,
      });
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
