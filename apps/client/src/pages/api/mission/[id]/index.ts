import { deleteMission, getMission } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req;

  const userId = body?.userId;

  const missionId = query.id as string;

  switch (method) {
    case "GET": {
      const mission = (await getMission(missionId)).data();

      return res.status(200).json({
        mission,
      });
    }

    case "DELETE": {
      const mission = (await getMission(missionId)).data();
      const missionUserId = mission?.userId;

      if (userId !== missionUserId)
        return res.status(403).json({
          result: "본인의 게시물만 삭제할 수 있습니다.",
        });

      const snapshot = await deleteMission(missionId);

      return res.status(200).json({
        result: snapshot,
      });
    }

    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
