import axios from "axios";
import { getBulletins, postBulletin, postBulletinImage } from "firebase";
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
  const { method } = req;

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

      return;
      const form = new IncomingForm();

      const result = form.parse(req, async (err, fields, files) => {
        if (err) res.status(500).json({ result: err });

        const twoArray = new Array(2).fill(0).map((el, idx) => el + idx);

        // const images = twoArray.map(async (el) => {
        //   const title = fields[`image-${el}-name`]?.[0];
        //   const image = files[`image-${el}-file`]?.[0];

        //   const fileData = await fs.promises.readFile(image?.filepath || "");

        //   const blob = new Blob([fileData], { type: image?.mimetype! });
        //   const file = new File([blob], image?.originalFilename!, {
        //     type: image?.mimetype!,
        //   });

        //   const imageUrl = await postBulletinImage({
        //     file: file,
        //     name: title || "이미지",
        //   });

        //   return imageUrl;
        // });
        const images = twoArray.map(async (el) => {
          const title = fields[`image-${el}-name`]?.[0];
          const image = files[`image-${el}-file`]?.[0];

          // fs를 사용하여 파일 데이터를 읽습니다.
          const fileData = await fs.promises.readFile(image?.filepath || "");

          // fileData를 그대로 postBulletinImage에 전달합니다.
          // 필요한 경우, 파일의 MIME 타입과 기타 메타데이터를 함께 전달할 수 있습니다.
          const imageUrl = await postBulletinImage({
            file: fileData,
            name: title || "이미지",
          });

          return imageUrl;
        });

        // TODO: error 기능 추가
        if (!fields.date?.[0] || !fields.title?.[0])
          return new NextResponse("");

        const result = await postBulletin({
          date: fields.date?.[0],
          title: fields.title?.[0],
          images: await Promise.all(images),
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
