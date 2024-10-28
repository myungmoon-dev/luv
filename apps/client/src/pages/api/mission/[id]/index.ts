import { getMissionNews } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  const missionId = query.id as string;

  switch (method) {
    case "GET": {
      const mission = (await getMissionNews(missionId)).data();

      return res.status(200).json({
        mission,
      });
    }

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
