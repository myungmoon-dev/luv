import { api } from "@/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { expireDate },
  } = req;

  switch (method) {
    case "POST":
      // CloudFlare DirectCreatorUpload 3시간 유효한 uploadURL 가져오기
      const {
        data: {
          result: { uploadURL },
        },
      } = await api.post(`${process.env.CLOUDFLARE_REQ_URL}`, null, {
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
        },
        data: {
          expiry: expireDate,
        },
      });

      return res.status(200).json({
        success: uploadURL ? true : false,
        uploadURL,
      });

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
