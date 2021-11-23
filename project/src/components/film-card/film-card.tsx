import {MouseEvent} from 'react';
import {Link, generatePath} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {FilmType} from '../../types/film-type';
import {AppRoute} from '../../const/routs';

import VideoPlayer from '../video-player/video-player';
import {getActiveFilmId} from '../../store/films-data-reducer/selectors';
import {setActiveFilmId} from '../../store/action';


type FilmCardProps = {
  film: FilmType,
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film} = props;
  const dispatch = useDispatch();
  const activeFilmId = useSelector(getActiveFilmId);

  const generatedFilmPagePath = generatePath(AppRoute.Film, {id: film.id});
  const isActiveFilm = activeFilmId !== null && film.id === activeFilmId;

  const handleMouseEnter = (evt: MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    dispatch(setActiveFilmId(film.id));
  };

  const handleMouseLeave = (evt: MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    dispatch(setActiveFilmId(null));
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="small-film-card__link" to={generatedFilmPagePath}>
        <h3 className="small-film-card__title">{film.name}</h3>
        <div className="small-film-card__image">
          <VideoPlayer
            src={film.previewVideoLink}
            poster={film.previewImage}
            isPlaying={isActiveFilm}
          />
        </div>
      </Link>
    </article>
  );
}

export default FilmCard;
