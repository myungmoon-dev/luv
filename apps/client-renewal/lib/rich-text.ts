/** CKEditor 등 HTML 본문이 비었는지 판별 */
export function isRichTextEmpty(html: string): boolean {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length === 0;
}
