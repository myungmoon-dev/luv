import { api } from "@/api";
import { IPostCloudflareResponse } from "@/types/cloudflare/response";
import getBlurImage from "@/utils/getBlurImage";
import axios from "axios";
import { getBulletins, postBulletin } from "firebase";
import { IncomingForm } from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    headers: { origin },
  } = req;

  switch (method) {
    case "GET":
      const bulletins = (await getBulletins()).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return res.status(200).json({
        bulletins,
      });

    case "POST":
      // 3시간 유효기간 변수 설정
      const expireDate = new Date();
      expireDate.setHours(expireDate.getHours() + 3);

      // CloudFlare DirectCreatorUpload 유효한 uploadURL 2개 가져오기
      const apiResponses = await Promise.all(
        Array(2)
          .fill(null)
          .map(() =>
            api.post<IPostCloudflareResponse>(`${origin}/api/cloudflare`, {
              expireDate: expireDate.toISOString(),
            })
          )
      );
      const uploadURLs = apiResponses.map(
        (response) => response.data.uploadURL
      );

      const form = new IncomingForm();
      const result = form.parse(req, async (err, fields, files) => {
        if (err) res.status(500).json({ result: err });

        const twoArray = new Array(2).fill(0).map((el, idx) => el + idx);

        const promiseImages = twoArray.map(async (el) => {
          // 가상 폼 생성
          const imgForm = new FormData();

          // 변수 가져오기
          const title = fields[`image-${el}-name`]?.[0];
          const image = files[`image-${el}-file`]?.[0];
          const uploadURL = uploadURLs[el];

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
          } = await axios.post(uploadURL || "", imgForm, {
            headers: {
              ContentType: "multipart/form-data",
            },
          });

          // CloudFlare CDN 이미지경로 반환
          return `https://imagedelivery.net/${process.env.CLOUDFLARE_ACCOUNT_HASH}/${id}`;
        });

        const images = await Promise.all(promiseImages);

        // CloudFlare 이미지를 base64로 변환
        const buffers = images.map(async (image) => {
          const { base64 } = await getBlurImage(`${image}/bulletin`);
          return base64;
        });

        // TODO: error 기능 추가
        if (!fields.date?.[0] || !fields.title?.[0])
          return new NextResponse("");

        const result = await postBulletin({
          date: fields.date?.[0],
          title: fields.title?.[0],
          images,
          buffers: await Promise.all(buffers),
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
