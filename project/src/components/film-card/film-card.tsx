import {MouseEvent} from 'react';
import {Link, generatePath} from 'react-router-dom';

import {FilmType} from '../../types/film-type';
import {Routs} from '../../const/appRout';

import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: FilmType,
  activeFilm: FilmType | null,
  setActiveFilm: (film: FilmType | null) => void
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, activeFilm, setActiveFilm} = props;
  const generatedFilmPagePath = generatePath(Routs.Film, {id: film.id});
  const isActiveFilm = activeFilm !== null && film.id === activeFilm.id; //todo сделать проверку лаконичнее

  const handleMouseEnter = (evt: MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    setActiveFilm(film);
  };

  const handleMouseLeave = (evt: MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    setActiveFilm(null);
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
