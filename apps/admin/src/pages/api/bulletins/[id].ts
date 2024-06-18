import { deleteBulletin, getBulletin } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  const bulletinId = query.id as string;

  switch (method) {
    case "GET":
      const bulletin = (await getBulletin(bulletinId)).data();

      return res.status(200).json({
        bulletin,
      });

    case "DELETE":
      const snapshot = await deleteBulletin(bulletinId);

      return res.status(200).json({
        bulletin: snapshot,
      });

    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
