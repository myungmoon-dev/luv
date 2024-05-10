import { postLogin } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { email, password },
  } = req;

  switch (method) {
    case "POST":
      const userCredential = await postLogin({ email, password });

      return res.status(200).json({
        user: userCredential.user,
      });

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
