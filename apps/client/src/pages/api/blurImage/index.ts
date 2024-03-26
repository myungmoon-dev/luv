import { NextApiRequest, NextApiResponse } from "next";
import { getPlaiceholder } from "plaiceholder";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      const image = body.img as string;

      const buffer = await fetch(image).then(async (res) => Buffer.from(await res.arrayBuffer()));
      const {
        metadata: { height, width },
        ...plaiceholder
      } = await getPlaiceholder(buffer, { size: 10 });

      return res.status(200).json({
        ...plaiceholder,
        img: { height, width },
      });

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
