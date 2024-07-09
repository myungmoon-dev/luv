import { getBooks, getBooksCount } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  switch (method) {
    case "GET":
      const lastVisibleCreatedAt = query.lastVisibleCreatedAt as string;

      const books = (await getBooks({ lastVisibleCreatedAt })).docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const totalBooksCount = (await getBooksCount()).data().count;

      return res.status(200).json({
        books,
        totalBooksCount,
      });

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
