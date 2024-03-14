import { NextApiRequest, NextApiResponse } from "next";
import { getShorts, createShorts, createTest } from "firebase";
import fs from "fs";

import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) res.status(500).json({ result: err });

    if (fields.title && files.img) {
      const title = fields.title[0];
      const img = files.img[0];
      const fileData = await fs.promises.readFile(img.filepath);

      const blob = new Blob([fileData], { type: img.mimetype! });
      const file = new File([blob], img.originalFilename!, {
        type: img.mimetype!,
      });

      await createTest({ title, file });
    }

    return res.status(200).json({
      success: true,
    });
  });

  // FIXME:
  // switch (method) {
  //   case "GET":

  //   case "POST":
  //     return res.status(200).json({ true: "true" });
  //     await createTest({ title, file });
  //     //   await createShorts({ videoId });
  //
  //   default:
  //     res.setHeader("Allow", ["GET", "POST"]);
  //     res.status(405).end(`Method ${method} Not Allowed`);
  // }
}
