import { getHomeWorships, postHomeWorship } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { content, date, title, userId },
  } = req;

  switch (method) {
    case "GET":
      const homeWorships = (await getHomeWorships()).docs.map((doc) => ({ ...doc.data(), id: doc.id })) || [];
      return res.status(200).json({
        homeWorships,
      });

    case "POST":
      await postHomeWorship({ content, date, title, userId });
      return res.status(200).json({ result: "success" });

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
