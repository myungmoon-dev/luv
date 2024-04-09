import { getBibles, postBible } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { content, date, title, links },
  } = req;

  switch (method) {
    case "GET":
      const bibles = (await getBibles()).docs.map((doc) => ({ ...doc.data(), id: doc.id })) || [];
      return res.status(200).json({
        bibles,
      });

    case "POST":
      await postBible({ content, date, title, links });

      return res.status(200).json({ result: "success" });
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
