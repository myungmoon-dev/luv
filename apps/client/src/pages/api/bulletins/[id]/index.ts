import { getBulletin } from "firebase/src/database/bulletin";
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

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
