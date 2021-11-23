import {useState} from 'react';
import {useSelector} from 'react-redux';

import {filterFilmsBySelectedGenre} from '../../utils/utils';

import FilmCard from '../film-card/film-card';
import {getAllFilmsData, getSelectedGenre} from '../../store/films-data-reducer/selectors';

function FilmsList(): JSX.Element {
  const [visibleFilms, setVisibleFilms] = useState(8);
  const selectedGenre = useSelector(getSelectedGenre);
  const filmForRender = filterFilmsBySelectedGenre(useSelector(getAllFilmsData), selectedGenre);

  const onShowMoreButtonClickHandler = () => {
    setVisibleFilms((prevValue) => prevValue + 8);
  };

  return (
    <>
      <div className="catalog__films-list">
        {filmForRender.slice(0, visibleFilms).map((film) =>
          (
            <FilmCard
              film={film}
              key={film.id}
            />
          ),
        )}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onShowMoreButtonClickHandler}>
          Show more
        </button>
      </div>
    </>
  );
}

export default FilmsList;
