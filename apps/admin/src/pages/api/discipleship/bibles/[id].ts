import { getBible } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  const bibleId = query.id as string;

  switch (method) {
    case "GET":
      const bible = (await getBible(bibleId)).data();

      return res.status(200).json({
        bible,
      });

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
