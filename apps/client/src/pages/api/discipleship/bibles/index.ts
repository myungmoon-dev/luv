import { getBibles } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      const bibles = (await getBibles()).docs.map((doc) => ({ ...doc.data(), id: doc.id })) || [];
      console.log(bibles);
      return res.status(200).json({
        bibles,
      });

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
