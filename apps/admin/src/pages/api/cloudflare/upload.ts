import axios from "axios";
import { IncomingForm } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

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
    case "POST":
      const form = new IncomingForm();

      form.parse(req, async (err, fields, files) => {
        if (err) res.status(500).json({ result: err });

        const uploadURL = fields.uploadURL?.[0];
        console.log("uploadURL", uploadURL);
        try {
          if (uploadURL) {
            const imgForm = new FormData();

            const twoArray = new Array(2).fill(0).map((el, idx) => el + idx);
            const images = twoArray.map(async (el, idx) => {
              const title = fields[`image-${el}-name`]?.[0];
              const image = files[`image-${el}-file`]?.[0];

              // fs를 사용하여 파일 데이터를 읽습니다.
              const fileData = await fs.promises.readFile(
                image?.filepath || ""
              );
              const blob = new Blob([fileData], { type: image!.mimetype! });
              const file = new File([blob], image!.originalFilename!, {
                type: image!.mimetype!,
              });
              imgForm.append(`file${idx}`, file, title);
            });

            const { data } = await axios.post(uploadURL, imgForm, {
              headers: {
                ContentType: "multipart/form-data",
              },
            });
            console.log(data);

            return res.status(200).json({
              success: "success",
            });
          }
        } catch (error) {
          return res.status(405).end("Invalid uploadURL");
        }

        const twoArray = new Array(2).fill(0).map((el, idx) => el + idx);
        const images = twoArray.map(async (el) => {
          const title = fields[`image-${el}-name`]?.[0];
          const image = files[`image-${el}-file`]?.[0];

          // fs를 사용하여 파일 데이터를 읽습니다.
          const fileData = await fs.promises.readFile(image?.filepath || "");
        });
      });

      return res.status(200).json({
        success: "success",
      });

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
