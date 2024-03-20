import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { type },
  } = req;

  switch (method) {
    case "POST":
      // CloudFlare DirectCreatorUpload 유효한 id,uploadURL 가져오기
      const isConnected = (type as string) === "connect";
      if (isConnected) {
        const {
          data: {
            result: { id, uploadURL },
          },
        } = await axios.post(`${process.env.CLOUDFLARE_REQ_URL}`, null, {
          headers: {
            ContentType: "application/json",
            Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
          },
        });

        return res.status(200).json({
          success: "success",
          id,
          uploadURL,
        });
      }

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
