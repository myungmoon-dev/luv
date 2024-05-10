import { api } from "@/api";
import dayjs from "dayjs";
import { getHomeWorships, getUser, postHomeWorship } from "firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import fs from "fs";
import { NextResponse } from "next/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { content, date, title, userId },
    headers: { origin },
  } = req;

  switch (method) {
    case "GET":
      const homeWorships = (await getHomeWorships()).docs.map((doc) => ({ ...doc.data(), id: doc.id })) || [];
      return res.status(200).json({
        homeWorships,
      });

    case "POST":
      // 3시간 유효기간 변수 설정
      const expireDate = new Date();
      expireDate.setHours(expireDate.getHours() + 3);

      // CloudFlare DirectCreatorUpload 유효한 uploadURL 2개 가져오기
      const apiResponse = await api.post<{
        success: boolean;
        uploadURL: string;
      }>(`${origin}/api/cloudflare`, {
        expireDate: expireDate.toISOString(),
      });
      const apiResponseData = apiResponse.data;

      if (apiResponseData.success !== true) {
        return res.status(500).json({ result: "Cloudflare 업로드 URL을 생성하지 못하였습니다." });
      }

      const uploadURL = apiResponseData.uploadURL;

      const form = new IncomingForm();
      const result = form.parse(req, async (err, fields, files) => {
        console.log("byebye", req);
        if (err) res.status(500).json({ result: err });

        // 가상 폼 생성
        const imgForm = new FormData();

        // 변수 가져오기
        const title = fields[`image-name`]?.[0];
        const image = files[`image-file`]?.[0];

        // 사용자에게 받은 이미지파일 변환하여 가상파일 생성
        const fileData = await fs.promises.readFile(image?.filepath || "");
        const blob = new Blob([fileData], {
          type: image?.mimetype ?? "image/png",
        });
        const file = new File([blob], title || "", {
          type: image?.mimetype ?? "image/png",
        });

        // 가상 폼에 가상파일 추가
        imgForm.append("file", file);

        // 가상파일 CloudFlare 업로드 및 결과로 이미지 경로 반환
        const {
          data: {
            result: { id },
          },
        } = await api.post(uploadURL || "", imgForm, {
          headers: {
            ContentType: "multipart/form-data",
          },
        });

        // CloudFlare CDN 이미지경로 반환
        const contentImage = `https://imagedelivery.net/${process.env.CLOUDFLARE_ACCOUNT_HASH}/${id}`;

        // TODO: error 기능 추가
        if (!fields.date?.[0] || !fields.title?.[0]) return new NextResponse("");

        const userName = (await getUser({ userId })).forEach((doc) => doc.data().name);

        const result = await postHomeWorship({
          content: contentImage,
          date: fields.date?.[0],
          title: `${dayjs(fields.date?.[0]).format("YYYY년 MM월")} ${userName} 가정 가정예배 인증`,
          userId,
        });

        return result;
      });

      return res.status(200).json({
        result,
      });

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
