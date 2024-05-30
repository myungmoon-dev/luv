import { compare } from "bcrypt";
import { deleteHomeWorship, getHomeWorship } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req;

  const password = body?.password;

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
      const homeWorshipPassword = homeWorship?.password;

      const comparePassword = async (password: string, hashedPassword: string) => {
        const isMatch = await compare(password, hashedPassword);
        return isMatch;
      };

      const isValidPassword = await comparePassword(password, homeWorshipPassword);

      if (!isValidPassword)
        return res.status(403).json({
          result: "비밀번호가 일치하지 않습니다.",
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
