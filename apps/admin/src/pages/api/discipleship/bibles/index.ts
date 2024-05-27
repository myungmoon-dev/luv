import { getBibles, postBible } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { YearMonthType } from "type";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { content, date, title, links },
    query,
  } = req;

  const yearMonth = query.yearMonth as YearMonthType;

  switch (method) {
    case "GET":
      const bibles = (await getBibles({ yearMonth })).docs.map((doc) => ({ ...doc.data(), id: doc.id })) || [];
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
