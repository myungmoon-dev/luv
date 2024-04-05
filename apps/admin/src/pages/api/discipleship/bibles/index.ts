import { postBible } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { content, date, title },
  } = req;

  switch (method) {
    case "POST":
      await postBible({ content, date, title });

      return res.status(200).json({ result: "success" });
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
