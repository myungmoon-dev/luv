import { api } from "@/api";
import { deleteBook, getBook, putBook } from "firebase";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import FormData from "form-data";
import { IBookForm } from "type";

const upload = multer({
  storage: multer.diskStorage({
    destination: "/tmp/uploads", // 업로드 폴더 경로 설정
    filename: (req, file, cb) => {
      cb(null, file.originalname); // 원래 파일 이름 사용
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // 파일 크기 제한 (10MB로 설정)
});

export const config = {
  api: {
    bodyParser: false, // Next.js의 기본 bodyParser 비활성화
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query,
    headers: { origin },
  } = req;

  const bookId = query.id as string;

  switch (method) {
    case "GET":
      const book = (await getBook(bookId)).data();

      return res.status(200).json({
        book,
      });

    case "DELETE":
      const snapshot = await deleteBook(bookId);

      return res.status(200).json({
        book: snapshot,
      });

    case "PUT":
      upload.single("image-file")(req as any, res as any, async (err) => {
        if (err) {
          return res.status(500).json({ result: err.message });
        }

        try {
          const { file } = req as any;
          const fields = req.body;

          let contentImage = "";
          if (file) {
            const expireDate = new Date();
            expireDate.setHours(expireDate.getHours() + 3);

            const apiResponse = await api.post<{
              success: boolean;
              uploadURL: string;
            }>(`${origin}/api/cloudflare`, {
              expireDate: expireDate.toISOString(),
            });

            if (!apiResponse.data.success) {
              return res
                .status(500)
                .json({ result: "Cloudflare 업로드 URL을 생성하지 못하였습니다." });
            }

            const uploadURL = apiResponse.data.uploadURL;

            const imgForm = new FormData();
            const fileData = await fs.promises.readFile(file.path);
            imgForm.append("file", fileData, {
              filename: file.originalname,
              contentType: file.mimetype,
            });

            const {
              data: {
                result: { id },
              },
            } = await api.post(uploadURL, imgForm, {
              headers: {
                ...imgForm.getHeaders(),
              },
            });

            contentImage = `https://imagedelivery.net/${process.env.CLOUDFLARE_ACCOUNT_HASH}/${id}`;
          }

          const bookForm: Omit<IBookForm, "createdAt" | "image"> & { id: string; image?: string } =
            {
              content: fields.content,
              date: fields.date,
              title: fields.title,
              id: bookId,
              writer: fields.writer,
            };

          const getBookForm = () => {
            if (contentImage) {
              bookForm.image = contentImage;
            }

            return bookForm;
          };

          const result = await putBook(getBookForm());

          return res.status(200).json({ result });
        } catch (error) {
          console.error(error);
          return res.status(400).json({ result: "요청 처리 중 오류가 발생했습니다." });
        }
      });
      break;

    default:
      res.setHeader("Allow", ["GET", "DELETE", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
