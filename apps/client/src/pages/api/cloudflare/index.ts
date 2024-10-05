import { api } from "@/api";
import { NextApiRequest, NextApiResponse } from "next";

interface IRequestOptions {
  expiry: string;
  maxDurationSeconds?: number;
  requireSignedURLs?: boolean;
  allowedOrigins?: string[];
  creator?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { userName, title, date, expireDate, type },
  } = req;

  switch (method) {
    // Direct Creator Upload URL 가져오기
    case "POST":
      const reqTypes = {
        video: process.env.CLOUDFLARE_REQ_VIDEO_URL,
        image: process.env.CLOUDFLARE_REQ_IMG_URL,
      };

      const fileTypes = type as keyof typeof reqTypes;

      // Request 옵션 설정
      const options: IRequestOptions = {
        expiry: expireDate,
      };
      if (fileTypes === "video") {
        options.maxDurationSeconds = 300; // 최대길이 5분(60초*5)
        options.creator = userName;
      }
      // Request URL 설정
      const reqURL = reqTypes[fileTypes];

      if (reqURL) {
        switch (fileTypes) {
          // 1. IMG Direct Upload
          case "image":
            const {
              data: {
                result: { uploadURL: imgUploadURL },
              },
            } = await api.post(reqURL, null, {
              headers: {
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
                ContentType: "application/json",
              },
              data: options,
            });
            return res.status(200).json({
              success: imgUploadURL ? true : false,
              uploadURL: imgUploadURL,
            });

          // 2. VIDEO Direct Upload
          case "video":
            const {
              data: {
                result: { uploadURL: videoUploadURL },
              },
            } = await api.post(reqURL, options, {
              headers: {
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
                "Content-Type": "application/json",
              },
            });
            return res.status(200).json({
              success: videoUploadURL ? true : false,
              uploadURL: videoUploadURL,
            });
        }
      }
      return res.status(405).end("Request URL이 존재하지 않습니다.");

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
