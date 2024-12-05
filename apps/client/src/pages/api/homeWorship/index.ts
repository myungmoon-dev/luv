import { api } from "@/api";
import {
  getHomeWorships,
  getHomeWorshipsCount,
  getPinnedHomeWorships,
  getPinnedHomeWorshipsCount,
  postHomeWorship,
} from "firebase";
import FormData from "form-data";
import fs from "fs";
import { hash } from "bcrypt";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

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
    query,
  } = req;

  switch (method) {
    case "GET":
      const lastVisibleCreatedAt = query.lastVisibleCreatedAt as string;

      const isGetPinned = query.isGetPinned === "true";
      const pinnedHomeWorships = isGetPinned
        ? (await getPinnedHomeWorships()).docs.map((doc) => ({ ...doc.data(), id: doc.id })) || []
        : [];
      const homeWorshipsSnapshots = await getHomeWorships({ lastVisibleCreatedAt });
      const homeWorshipsCount = (await getHomeWorshipsCount()).data().count;
      const pinnedHomeWorshipsCount = (await getPinnedHomeWorshipsCount()).data().count;
      const homeWorships =
        homeWorshipsSnapshots.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) || [];

      return res.status(200).json({
        homeWorships: [...pinnedHomeWorships, ...homeWorships],
        notPinnedCount: homeWorshipsCount,
        pinnedCount: pinnedHomeWorshipsCount,
      });

    case "POST":
      // Multer 미들웨어를 통해 파일 업로드 처리
      upload.fields([{ name: "image-file" }, { name: "video-file" }])(req as any, res as any, async (err) => {
        if (err) {
          return res.status(500).json({ result: err.message });
        }

        const expireDate = new Date();
        expireDate.setHours(expireDate.getHours() + 3);

        // 폼데이터에서 이미지,비디오 파일 추출
        const { files, body: fields } = req as any;
        const imageFile = files["image-file"] ? files["image-file"][0] : null;
        const videoFile = files["video-file"] ? files["video-file"][0] : null;

        if (!imageFile && !videoFile) {
          return res.status(400).json({ result: "No file uploaded" });
        }

        // 1. 이미지 파일 업로드 처리
        const contentImage = imageFile
          ? await (async () => {
              try {
                // CloudFlare API 호출
                const { data: apiResponseData } = await api.post<{
                  success: boolean;
                  uploadURL: string;
                }>(`${origin}/api/cloudflare`, {
                  expireDate: expireDate.toISOString(),
                  type: "image",
                });

                if (!apiResponseData.success) {
                  throw new Error("Cloudflare 업로드 URL을 생성하지 못하였습니다.");
                }
                // 유효한 uploadURL 가져오기
                const uploadURL = apiResponseData.uploadURL;

                // 가상 폼 생성
                const imgForm = new FormData();

                // 사용자에게 받은 이미지파일을 읽어 Buffer로 변환
                const fileData = await fs.promises.readFile(imageFile.path);

                // 가상 폼에 파일 추가
                imgForm.append("file", fileData, {
                  filename: imageFile.originalname,
                  contentType: imageFile.mimetype,
                });

                // 가상파일 CloudFlare 업로드 및 결과로 이미지 경로 반환
                const {
                  data: {
                    result: { id },
                  },
                } = await api.post(uploadURL || "", imgForm, {
                  headers: imgForm.getHeaders(),
                });

                // CloudFlare CDN 이미지 경로 반환
                return `https://imagedelivery.net/${process.env.CLOUDFLARE_ACCOUNT_HASH}/${id}`;
              } catch (error) {
                console.error(error);
                return "";
              }
            })()
          : "";

        // 2. 비디오 파일 업로드 처리
        const contentVideo = videoFile
          ? await (async () => {
              try {
                // CloudFlare API 호출하여 유효한 uploadURL 가져오기
                const {
                  data: { success, uploadURL },
                } = await api.post<{
                  success: boolean;
                  uploadURL: string;
                }>(`${origin}/api/cloudflare`, {
                  expireDate: expireDate.toISOString(),
                  userName: fields.userName,
                  title: fields.title,
                  date: fields.date,
                  type: "video",
                });

                if (!success) {
                  throw new Error("Cloudflare 업로드 URL을 생성하지 못하였습니다.");
                }

                // 가상 폼 생성
                const videoForm = new FormData();

                // 사용자에게 받은 이미지파일을 읽어 Buffer로 변환
                const fileData = await fs.promises.readFile(videoFile.path);

                // 가상 폼에 파일 추가
                videoForm.append("file", fileData, {
                  filename: videoFile.originalname,
                  contentType: videoFile.mimetype,
                });

                // 가상파일 CloudFlare 업로드 및 결과로 비디오ID 반환
                const { request: { path = "" } = {} } = await api.post(uploadURL || "", videoForm, {
                  headers: videoForm.getHeaders(),
                });
                const videoId = path.slice(1);

                // CloudFlare CDN 이미지 경로 반환
                return `${process.env.CLOUDFLARE_VIDEO_SUBDOMAIN}/${videoId}/iframe`;
              } catch (error) {
                if (axios.isAxiosError(error)) {
                  console.error(error.message);
                } else {
                  console.error(error);
                }
                return "";
              }
            })()
          : "";

        // 필드 검증 및 에러 처리
        if (contentVideo === "" && contentImage === "")
          return res.status(400).json({ result: "Cloudflare 업로드 URL을 생성하지 못하였습니다." });
        if (!fields.date) return res.status(400).json({ result: "Missing required fields" });

        const hashedPassword = await hashPassword(fields.password);

        const result = await postHomeWorship({
          video: contentVideo || null,
          image: contentImage || null,
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
