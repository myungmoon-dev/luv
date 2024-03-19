import { getBulletins } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      const bulletins = (await getBulletins()).docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      return res.status(200).json({
        bulletins,
      });

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
