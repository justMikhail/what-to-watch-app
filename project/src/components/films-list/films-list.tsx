import {useState} from 'react';

import SmallFilmCard from '../small-film-card/small-film-card';
import {FilmType} from '../../types/film-type';

type FilmListType = {
  filmsForRender: FilmType[];
}

const FILMS_COUNT_PER_SHOWING = 8;

function FilmsList(props: FilmListType): JSX.Element {
  const {filmsForRender} = props;
  const [visibleFilms, setVisibleFilms] = useState(FILMS_COUNT_PER_SHOWING);

  const handleShowMoreButtonClick = () => {
    setVisibleFilms((prevValue) => prevValue + FILMS_COUNT_PER_SHOWING);
  };

  return (
    <>
      <div className="catalog__films-list">
        {filmsForRender.slice(0, visibleFilms).map((film) =>
          (
            <SmallFilmCard
              film={film}
              key={film.id}
            />
          ),
        )}
      </div>
      {visibleFilms <= filmsForRender.length && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={handleShowMoreButtonClick}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}

export default FilmsList;
