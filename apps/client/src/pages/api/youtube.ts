import prisma from "database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query,
    method,
    body: { src: newSource },
  } = req;

  // FIXME: 임시 변수 값
  const id = parseInt(query.id as string, 10);
  const name = query.name as string;

  switch (method) {
    case "GET":
      const fromGet = await prisma.link.findFirst({
        where: {
          type: "YOUTUBE",
        },
      });
      if (fromGet) {
        return res.status(200).json({
          ...fromGet,
        });
      } else {
        return res.status(404).end("Data Not Found.");
      }

    case "POST":
      const fromPost = await prisma.link.update({
        where: {
          id,
          type: "YOUTUBE",
        },
        data: {
          source: newSource,
        },
      });

      if (fromPost) {
        return res.status(200).json({
          ...fromPost,
        });
      } else {
        return res.status(404).end("Data Not Found.");
      }

    case "DELETE":
      res.status(200).json({
        del: true,
      });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
