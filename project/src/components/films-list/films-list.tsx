import {useState} from 'react';

import SmallFilmCard from '../small-film-card/small-film-card';
import {FilmType} from '../../types/film-type';

type FilmListType = {
  filmsForRender: FilmType[];
}

function FilmsList(props: FilmListType): JSX.Element {
  const {filmsForRender} = props;
  const [visibleFilms, setVisibleFilms] = useState(8);

  const onShowMoreButtonClickHandler = () => {
    setVisibleFilms((prevValue) => prevValue + 8);
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
            onClick={onShowMoreButtonClickHandler}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}

export default FilmsList;
