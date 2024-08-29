import { deleteBook, getBook } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  const bookId = query.id as string;

  switch (method) {
    case "GET":
      const book = (await getBook(bookId)).data();

      return res.status(200).json({
        book,
      });

    case "DELETE":
      const snapshot = await deleteBook(bookId);

      return res.status(200).json({
        book: snapshot,
      });

    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
