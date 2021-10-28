const START_VIDEO_DELAY = 1000;

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying: boolean;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const {src, poster, isPlaying} = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    return () => {
      effect
    };
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      width="280"
      height="175"
      muted
      preload="none"
      //style={{objectFit: 'cover'}}
    />
  );
}

export default VideoPlayer;
