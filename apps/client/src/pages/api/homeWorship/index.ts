import { api } from "@/api";
import { getHomeWorships, getPinnedHomeWorships, postHomeWorship } from "firebase";
import FormData from "form-data";
import fs from "fs";
import { hash } from "bcrypt";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";

const upload = multer({
  storage: multer.diskStorage({
    destination: "/tmp/uploads", // 업로드 폴더 경로 설정
    filename: (req, file, cb) => {
      cb(null, file.originalname); // 원래 파일 이름 사용
    },
  }),
});

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    headers: { origin },
  } = req;

  switch (method) {
    case "GET":
      const pinnedHomeWorships =
        (await getPinnedHomeWorships()).docs.map((doc) => ({ ...doc.data(), id: doc.id })) || [];
      const homeWorships = (await getHomeWorships()).docs.map((doc) => ({ ...doc.data(), id: doc.id })) || [];

      return res.status(200).json({
        homeWorships: [...pinnedHomeWorships, ...homeWorships],
      });

    case "POST":
      // Multer 미들웨어를 통해 파일 업로드 처리
      upload.single("image-file")(req as any, res as any, async (err) => {
        if (err) {
          return res.status(500).json({ result: err.message });
        }

        const expireDate = new Date();
        expireDate.setHours(expireDate.getHours() + 3);

        // CloudFlare DirectCreatorUpload 유효한 uploadURL 가져오기
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

        // 파일 업로드 처리
        const { file } = req as any;
        const fields = req.body;

        if (!file) {
          return res.status(400).json({ result: "No file uploaded" });
        }

        // 가상 폼 생성
        const imgForm = new FormData();

        // 사용자에게 받은 이미지파일을 읽어 Buffer로 변환
        const fileData = await fs.promises.readFile(file.path);

        // 가상 폼에 파일 추가
        imgForm.append("file", fileData, {
          filename: file.originalname,
          contentType: file.mimetype,
        });

        // 가상파일 CloudFlare 업로드 및 결과로 이미지 경로 반환
        const {
          data: {
            result: { id },
          },
        } = await api.post(uploadURL || "", imgForm, {
          headers: {
            ...imgForm.getHeaders(),
          },
        });

        // CloudFlare CDN 이미지 경로 반환
        const contentImage = `https://imagedelivery.net/${process.env.CLOUDFLARE_ACCOUNT_HASH}/${id}`;

        // 필드 검증 및 에러 처리
        if (!fields.date) return res.status(400).json({ result: "Missing required fields" });

        const hashedPassword = await hashPassword(fields.password);

        const result = await postHomeWorship({
          image: contentImage,
          content: fields.content,
          date: fields.date,
          title: fields.title,
          userName: fields.userName,
          createdAt: new Date().getTime(),
          password: hashedPassword,
          isPinned: false,
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

export const config = {
  api: {
    bodyParser: false,
  },
};
