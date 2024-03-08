// FIXME: CREATE POST - DB TEST입니다.

// import prisma from "database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const fromDB = await prisma.post.create({
  //   data: {
  //     title: "title",
  //     content: "content",
  //     wrtier: "wrtier",
  //     userId: 1,
  //   },
  // });

  return res.status(200).json({
    // ...fromDB,
  });
}
