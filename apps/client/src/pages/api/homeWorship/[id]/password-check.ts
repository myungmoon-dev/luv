import { compare } from "bcrypt";
import { getHomeWorship } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req;

  const password = body?.password;

  const homeWorshipId = query.id as string;

  switch (method) {
    case "POST": {
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

      return res.status(200).json({
        result: "success",
      });
    }

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
