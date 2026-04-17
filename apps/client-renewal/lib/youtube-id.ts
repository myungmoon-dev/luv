/** `packages/ui`의 getYoutubeId와 동일한 규칙 */
export function getYoutubeIdFromUrl(url?: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  if (trimmed.length === 11 && /^[\w-]{11}$/.test(trimmed)) return trimmed;

  const videoRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|shorts\/|live\/|watch\?v=|&v=)([^#&?]*).*/;
  const playlistRegExp = /[?&]list=([^#&?]+)/;

  const videoMatch = trimmed.match(videoRegExp);
  const playlistMatch = trimmed.match(playlistRegExp);

  const videoId = videoMatch && videoMatch[2]?.length === 11 ? videoMatch[2] : null;
  const playlistId = playlistMatch ? playlistMatch[1] : null;

  return videoId || playlistId || null;
}
