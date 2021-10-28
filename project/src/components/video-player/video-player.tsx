import {useEffect, useRef} from 'react';

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
    let timeout: ReturnType<typeof setTimeout>;

    if (videoRef.current && isPlaying) {
      timeout = setTimeout(() => videoRef.current?.play(), START_VIDEO_DELAY);
      return;
    }

    if (videoRef.current && !isPlaying) {
      videoRef.current.load();
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
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
      style={{objectFit: 'cover'}}
    />
  );
}

export default VideoPlayer;
