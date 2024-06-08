import { deleteHomeWorshipComment, getHomeWorship, postHomeWorshipComment } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { hash, compare } from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { IComment } from "type";

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req;

  const name = body?.name;
  const password = body?.password;
  const commentId = body?.commentId;
  const content = body?.content;

  const homeWorshipId = query.id as string;

  switch (method) {
    case "POST": {
      const hashedPassword = await hashPassword(password);

      const result = await postHomeWorshipComment({
        homeWorshipId,
        comment: { id: uuidv4(), name, password: hashedPassword, content, createdAt: new Date().getTime() },
      });

      return res.status(200).json({
        result,
      });
    }

    case "DELETE": {
      const homeWorship = (await getHomeWorship(homeWorshipId)).data();
      const comment = homeWorship?.comments.filter((comment: IComment) => comment.id === commentId)[0] as IComment;
      const commentPassword = comment.password;

      const isValidPassword = await comparePassword(password, commentPassword);

      if (!isValidPassword)
        return res.status(403).json({
          result: "비밀번호가 일치하지 않습니다.",
        });

      const snapshot = await deleteHomeWorshipComment({ comment, homeWorshipId });

      return res.status(200).json({
        result: snapshot,
      });
    }

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
