interface IGetYoutubeIdProps {
  url: string;
}

const getYoutubeId = ({ url }: IGetYoutubeIdProps) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|shorts\/|live\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

export default getYoutubeId;
