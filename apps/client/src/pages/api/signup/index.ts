import { postSignup, postUser } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { email, password, confirmationPassword, name, phone },
  } = req;

  switch (method) {
    case "POST":
      if (password !== confirmationPassword)
        return res.status(400).json({
          error: "비밀번호가 서로 일치하지 않습니다.",
        });
      if (password.length < 6)
        return res.status(400).json({
          error: "비밀번호는 최소 6자 이상이어야 합니다.",
        });

      try {
        const userCredential = await postSignup({ email, password });
        const docRef = await postUser({ user: userCredential, name, phone });

        return res.status(200).json({
          user: docRef,
        });
      } catch (err) {
        return res.status(400).json({
          error: "이메일 형식을 확인해주세요.",
        });
      }

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
