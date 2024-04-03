const YoutubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      className="h-full w-full rounded-lg object-cover"
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default YoutubeVideo;
