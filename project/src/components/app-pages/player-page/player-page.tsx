import {useEffect, useRef, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {fetchCurrentFilmDataAction} from '../../../store/api-actions';
import {getCurrentFilmData} from '../../../store/redusers/current-film-reducer/selectors';
import {formatToEclipsedTime} from '../../../utils/date';

import Loader from '../../loader/loader';
import PlayIcon from './play-icon/play-icon';
import PauseIcon from './pause-icon/pause-icon';
import FullScreenIcon from './full-screen-icon/full-screen-icon';

const PERCENTAGE_MAX = 100;
const LOADING_PLACEHOLDER = 'Loading...';

type PlayerPageParams = {
  id: string;
}

function PlayerScreen(): JSX.Element {
  const currentFilmData = useSelector(getCurrentFilmData);
  const params = useParams<PlayerPageParams>();
  const filmId = parseInt(params.id, 10);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoElement = videoRef.current;

  const progressRef = useRef<HTMLProgressElement>(null);
  const progressElement = progressRef.current;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTimePercentage, setCurrentTimePercentage] = useState(0);
  const [{duration, elapsedTime}, setTimeDuration] = useState({
    duration: 0,
    elapsedTime: 0,
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleVideoExitButtonClick = () => {
    history.goBack();
  };

  const handleFullScreenClick = () => {
    if (videoElement) {
      videoElement.requestFullscreen();
    }
  };

  useEffect(() => {
    if (currentFilmData?.id === filmId) {
      return;
    }
    dispatch(fetchCurrentFilmDataAction(filmId));
  }, [filmId, currentFilmData?.id, dispatch]);

  useEffect(() => {
    if (!videoElement || !videoElement.duration) {
      return;
    }

    isPlaying ? videoElement.play() : videoElement.pause();
  }, [isPlaying, videoElement]);

  useEffect(() => {
    if (!videoElement) {
      return;
    }

    const videoDuration = Math.round(videoElement.duration);

    setTimeDuration(() => ({
      duration: videoDuration || duration,
      elapsedTime: videoDuration || elapsedTime,
    }));
  }, [isLoading, videoElement, duration, elapsedTime]);

  if (!currentFilmData) {
    return <Loader />;
  }

  const elapsedVideoTime = !isLoading ? formatToEclipsedTime(elapsedTime) : LOADING_PLACEHOLDER;

  const handleVideoPlayClick = () => {
    setIsPlaying((prevState) => !prevState);
  };
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleProgressPosition = () => {
    if (!videoElement || !progressElement) {
      return;
    }

    const videoCurrentTime = Math.round(videoElement.currentTime);
    const videoCurrentPercentage = (videoCurrentTime / duration) * PERCENTAGE_MAX;
    const videoCurrentElapsedTime = duration - videoCurrentTime;

    setTimeDuration((state) => ({
      ...state,
      elapsedTime: videoCurrentElapsedTime,
    }));

    setCurrentTimePercentage(videoCurrentPercentage);
    progressElement.value = videoCurrentTime;
  };

  return (
    <div className="player">
      {isLoading && <Loader />}
      <video
        className="player__video"
        src={currentFilmData.videoLink}
        poster={currentFilmData.posterImage}
        onLoadedData={handleVideoLoaded}
        onTimeUpdate={handleProgressPosition}
        ref={videoRef}
      />

      <button type="button" className="player__exit" onClick={handleVideoExitButtonClick}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" max={duration} ref={progressRef} />
            <div className="player__toggler" style={{left: `${currentTimePercentage}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{elapsedVideoTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleVideoPlayClick}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          <div className="player__name">{currentFilmData.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <FullScreenIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
