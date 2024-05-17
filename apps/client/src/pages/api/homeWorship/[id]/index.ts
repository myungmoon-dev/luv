import { deleteHomeWorship, getHomeWorship } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req;

  const userId = body?.userId;

  const homeWorshipId = query.id as string;

  switch (method) {
    case "GET": {
      const homeWorship = (await getHomeWorship(homeWorshipId)).data();

      return res.status(200).json({
        homeWorship,
      });
    }

    case "DELETE": {
      const homeWorship = (await getHomeWorship(homeWorshipId)).data();
      const homeWorshipUserId = homeWorship?.userId;

      if (userId !== homeWorshipUserId)
        return res.status(403).json({
          result: "본인의 게시물만 삭제할 수 있습니다.",
        });

      const snapshot = await deleteHomeWorship(homeWorshipId);

      return res.status(200).json({
        result: snapshot,
      });
    }

    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
