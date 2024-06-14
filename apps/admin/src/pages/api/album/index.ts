import { api } from "@/api";
import { IPostCloudflareResponse } from "@/types/cloudflare/response";
import axios from "axios";
import { getAlbum, postAlbum } from "firebase";
import FormData from "form-data";
import { IncomingForm } from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { AlbumType } from "type";

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
    query: { type },
    headers: { origin },
  } = req;

  switch (method) {
    case "GET":
      const albumType = type as AlbumType;

      const albumList = (await getAlbum({ albumType })).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return res.status(200).json({
        albumList,
      });

    case "POST":
      const form = new IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) return res.status(500).json({ result: err });
        // 이미지 개수
        const imgLength = parseInt(fields["length"]?.[0] ?? "1", 10);

        // 3시간 유효기간 변수 설정
        const expireDate = new Date();
        expireDate.setHours(expireDate.getHours() + 3);

        // CloudFlare DirectCreatorUpload 유효한 uploadURL 이미지 개수만큼 가져오기
        const apiResponses = await Promise.all(
          Array(imgLength)
            .fill("")
            .map(async () => {
              const apiResponse = await api.post<IPostCloudflareResponse>(
                `${origin}/api/cloudflare`,
                {
                  expireDate: expireDate.toISOString(),
                }
              );
              return apiResponse.data;
            })
        );
        const uploadURLs = apiResponses.map((response) => {
          if (response.success !== true) {
            return res.status(500).json({
              result: "Cloudflare 업로드 URL을 생성하지 못하였습니다.",
            });
          }
          return response.uploadURL;
        });

        const array = new Array(imgLength).fill(0).map((el, idx) => el + idx);

        const promiseImages = array.map(async (el) => {
          // 가상 폼 생성
          const imgForm = new FormData();

          // 변수 가져오기
          const title = fields[`image-${el}-name`]?.[0];
          const image = files[`image-${el}-file`]?.[0];
          const uploadURL = uploadURLs[el];

          // 사용자에게 받은 이미지파일을 읽어 Buffer로 변환
          const fileData = await fs.promises.readFile(image?.filepath || "");

          // 가상 폼에 파일 추가
          imgForm.append("file", fileData, {
            filename: title || "image.png",
            contentType: image?.mimetype ?? "image/png",
          });

          // 가상 파일을 CloudFlare에 업로드하고 결과로 이미지 경로 반환
          const {
            data: {
              result: { id },
            },
          } = await axios.post(uploadURL || "", imgForm, {
            headers: {
              ...imgForm.getHeaders(),
            },
          });

          // CloudFlare CDN 이미지경로 반환
          return `https://imagedelivery.net/${process.env.CLOUDFLARE_ACCOUNT_HASH}/${id}`;
        });

        const images = await Promise.all(promiseImages);

        const result = await postAlbum({
          title: fields.title?.[0] ?? "title",
          albumType: fields.type?.[0] ?? "type",
          images,
        });

        return res.status(200).json({
          result,
        });
      });

      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
