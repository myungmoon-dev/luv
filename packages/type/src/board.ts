/** 게시글 타입 (게시판 종류) — 값은 자유롭게 수정 가능 */
// export type BoardType = "notice" | "news" | "free" | "invitation";
export type BoardType = "invitation";

export interface IBoard {
  id: string;
  /** 게시글 타입 (백엔드 필드명: type) */
  type: BoardType;
  title: string;
  /** 작성자 (백엔드 필드명: writer) */
  writer: string;
  /** CKEditor HTML */
  content: string;
  /** 이미지 URL (최대 5장) */
  imageUrls: string[];
  /** 첨부파일 URL 목록 */
  fileUrls: string[];
  createdAt: number;
  updatedAt: number;
}

export interface IBoardForm {
  type: BoardType;
  title: string;
  writer: string;
  content: string;
}
