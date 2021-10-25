import {FilmType} from '../../types/film-type';

import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../const/app-route';
import {MouseEvent} from 'react';

type FilmCardProps = {
  film: FilmType,
  setActiveFilm: (film: FilmType | null) => void
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, setActiveFilm} = props;
  const generatedFilmPagePath = generatePath(AppRoute.FILM, {id: film.id});

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
          <img
            src={film.previewImage}
            width={280}
            height={175}
            alt={film.name}
          />
        </div>
      </Link>
    </article>
  );
}

export default FilmCard;
