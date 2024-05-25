interface IGetYoutubeIdProps {
  url?: string;
}

const getYoutubeId = ({ url = "" }: IGetYoutubeIdProps) => {
  const videoRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|shorts\/|live\/|watch\?v=|&v=)([^#&?]*).*/;
  const playlistRegExp = /[?&]list=([^#&?]+)/;

  const videoMatch = url.match(videoRegExp);
  const playlistMatch = url.match(playlistRegExp);

  const videoId = videoMatch && videoMatch[2]!.length === 11 ? videoMatch[2] : null;
  const playlistId = playlistMatch ? playlistMatch[1] : null;

  return videoId || playlistId || null;
};

export default getYoutubeId;
